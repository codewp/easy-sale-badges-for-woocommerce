<?php
namespace AsanaPlugins\WooCommerce\SaleBadges\Validator;

defined( 'ABSPATH' ) || exit;

abstract class BaseProductValidator {

	public static function valid_product( $badge, $product, $page = 0 ) {
		if ( ! $badge || empty( $badge->items ) ) {
			return false;
		}

		foreach ( $badge->items as $group ) {
			if ( empty( $group ) ) {
				continue;
			}

			$valid = true;
			foreach ( $group as $item ) {
				if ( ! static::is_valid( $item, $product, $page ) ) {
					$valid = false;
					break;
				}
			}
			if ( $valid ) {
				return true;
			}
		}

		return false;
	}

	public static function is_valid( $item, $product, $page = 0 ) {
		if ( empty( $item ) || ( ! $product && ! $page ) ) {
			return false;
		}

		if ( ! isset( $item['type'] ) ) {
			return false;
		}

		$is_valid = false;
		if ( is_callable( [ static::class, $item['type'] ] ) ) {
			if ( 'pages' === $item['type'] || 'all_pages' === $item['type'] ) {
				$is_valid = static::{$item['type']}( $item, $page );
			} else {
				$is_valid = static::{$item['type']}( $item, $product );
			}
		}

		return apply_filters(
			'asnp_wesb_product_validator_is_valid_' . $item['type'],
			$is_valid,
			$item,
			$product,
			$page
		);
	}

	public static function all_products( $item, $product ) {
		if ( empty( $item ) || ! $product ) {
			return false;
		}

		return true;
	}

	public static function products( $item, $product ) {
		if ( empty( $item ) || ! $product ) {
			return false;
		}

		if ( empty( $item['items'] ) ) {
			return false;
		}

		$product = is_numeric( $product ) ? $product : $product->get_id();
		if ( 0 >= $product ) {
			return false;
		}

		$items = static::get_items( $item['items'] );
		if ( empty( $items ) ) {
			return false;
		}

		if ( isset( $item->selectType ) && 'excluded' === $item->selectType ) {
			return ! in_array( $product, $items );
		}

		return in_array( $product, $items );
	}

	public static function categories( $item, $product ) {
		if ( empty( $item ) || ! $product ) {
			return false;
		}

		if ( empty( $item['items'] ) ) {
			return false;
		}

		$product = is_numeric( $product ) ? $product : $product->get_id();
		if ( 0 >= $product ) {
			return false;
		}

		$categories = static::get_items( $item['items'] );
		if ( empty( $categories ) ) {
			return false;
		}

		$product_categories = wc_get_product_cat_ids( $product );
		if ( empty( $product_categories ) ) {
			return false;
		}

		if ( isset( $item->selectType ) && 'excluded' === $item->selectType ) {
			return empty( array_intersect( $product_categories, $categories ) );
		}

		return ! empty( array_intersect( $product_categories, $categories ) );
	}

	public static function tags( $item, $product ) {
		if ( empty( $item ) || ! $product ) {
			return false;
		}

		if ( empty( $item['items'] ) ) {
			return false;
		}

		$product = is_numeric( $product ) ? $product : $product->get_id();
		if ( 0 >= $product ) {
			return false;
		}

		$tags = static::get_items( $item['items'] );
		if ( empty( $tags ) ) {
			return true;
		}

		$product_tags = wc_get_product_term_ids( $product, 'product_tag' );
		if ( empty( $product_tags ) ) {
			return false;
		}

		if ( isset( $item->selectType ) && 'excluded' === $item->selectType ) {
			return empty( array_intersect( $product_tags, $tags ) );
		}

		return ! empty( array_intersect( $product_tags, $tags ) );
	}

	public static function stock_status( $item, $product ) {
		if ( empty( $item ) || ! $product ) {
			return false;
		}

		if ( empty( $item['items'] ) ) {
			return false;
		}

		$product = is_numeric( $product ) ? wc_get_product( $product ) : $product;
		if ( ! $product ) {
			return false;
		}

		return $item['items'] === $product->get_stock_status();
	}

	public static function is_on_sale( $item, $product ) {
		if ( empty( $item ) || ! $product ) {
			return false;
		}

		if ( empty( $item['items'] ) ) {
			return false;
		}

		$product = is_numeric( $product ) ? wc_get_product( $product ) : $product;
		if ( ! $product ) {
			return false;
		}

		if ( 'no' === $item['items'] ) {
			return ! $product->is_on_sale();
		}

		return $product->is_on_sale();
	}

	public static function all_pages( $item, $page ) {
		if ( empty( $item ) || ! $page ) {
			return false;
		}

		return true;
	}

	public static function pages( $item, $page ) {
		if ( empty( $item ) || ! $page ) {
			return false;
		}

		if ( empty( $item['items'] ) ) {
			return false;
		}

		$page = is_numeric( $page ) ? $page : $page->ID;
		if ( 0 >= $page ) {
			return false;
		}

		$items = static::get_items( $item['items'] );
		if ( empty( $items ) ) {
			return false;
		}

		if ( isset( $item->selectType ) && 'excluded' === $item->selectType ) {
			return ! in_array( $page, $items );
		}

		return in_array( $page, $items );
	}

	protected static function get_items( $items ) {
		if ( empty( $items ) ) {
			return [];
		}

		$ids = [];
		foreach ( $items as $item ) {
			if ( is_array( $item ) && ! empty( $item['value'] ) && 0 < absint( $item['value'] ) ) {
				$ids[] = absint( $item['value'] );
			} elseif ( is_object( $item ) && ! empty( $item->value ) && 0 < absint( $item->value ) ) {
				$ids[] = absint( $item->value );
			} elseif ( is_numeric( $item ) && 0 < absint( $item ) ) {
				$ids[] = absint( $item );
			}
		}
		return $ids;
	}

}
