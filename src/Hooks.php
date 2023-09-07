<?php

namespace AsanaPlugins\WooCommerce\SaleBadges;

defined( 'ABSPATH' ) || exit;

class Hooks {

	public static function init() {
		if ( get_plugin()->is_request( 'frontend' ) ) {
			self::single_hooks();
			self::loop_hooks();
			add_filter( 'woocommerce_product_get_image', array( __CLASS__, 'woocommerce_product_get_image' ), 999 );
		}
	}

	public static function single_hooks() {
		self::single_custom_hooks();

		$single_position = get_plugin()->settings->get_setting( 'singlePosition', 'before_single_item_images' );
		if ( empty( $single_position ) || 'none' === $single_position ) {
			return;
		}

		switch ( $single_position ) {
			case 'before_single_item_images':
				$priority = has_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_images' );
				if ( $priority ) {
					add_action( 'woocommerce_before_single_product_summary', array( __CLASS__, 'single_dispaly_sale_badge' ), $priority - 1 );
				} else {
					add_action( 'woocommerce_before_single_product_summary', array( __CLASS__, 'single_dispaly_sale_badge' ), 19 );
				}
				break;

			case 'after_single_item_images':
				$priority = has_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_images' );
				if ( $priority ) {
					add_action( 'woocommerce_before_single_product_summary', array( __CLASS__, 'single_dispaly_sale_badge' ), $priority + 1 );
				} else {
					add_action( 'woocommerce_before_single_product_summary', array( __CLASS__, 'single_dispaly_sale_badge' ), 21 );
				}
				break;

			case 'before_single_item_title':
				$priority = has_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title' );
				if ( $priority ) {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'single_dispaly_sale_badge' ), $priority - 1 );
				} else {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'single_dispaly_sale_badge' ), 4 );
				}
				break;

			case 'after_single_item_title':
				$priority = has_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title' );
				if ( $priority ) {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'single_dispaly_sale_badge' ), $priority + 1 );
				} else {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'single_dispaly_sale_badge' ), 6 );
				}
				break;

			case 'before_single_item_price':
				$priority = has_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price' );
				if ( $priority ) {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'single_dispaly_sale_badge' ), $priority - 1 );
				} else {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'single_dispaly_sale_badge' ), 9 );
				}
				break;

			case 'after_single_item_price':
				$priority = has_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price' );
				if ( $priority ) {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'single_dispaly_sale_badge' ), $priority + 1 );
				} else {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'single_dispaly_sale_badge' ), 11 );
				}
				break;
		}
	}

	public static function single_custom_hooks() {
		$custom_hooks = get_plugin()->settings->get_setting( 'singleCustomHooks', '' );
		$custom_hooks = apply_filters( 'asnp_wesb_single_custom_hooks', $custom_hooks );

		self::add_custom_hooks( $custom_hooks, array( __CLASS__, 'single_dispaly_sale_badge' ) );
	}

	public static function loop_hooks() {
		self::loop_custom_hooks();

		$loop_position = get_plugin()->settings->get_setting( 'loopPosition', 'before_shop_loop_item_thumbnail' );
		if ( empty( $loop_position ) || 'none' === $loop_position ) {
			return;
		}

		switch ( $loop_position ) {
			case 'before_shop_loop_item_thumbnail':
				$priority = has_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail' );
				if ( $priority ) {
					add_action( 'woocommerce_before_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), $priority - 1 );
				} else {
					add_action( 'woocommerce_before_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), 9 );
				}
				break;

			case 'after_shop_loop_item_thumbnail':
				$priority = has_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail' );
				if ( $priority ) {
					add_action( 'woocommerce_before_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), $priority + 1 );
				} else {
					add_action( 'woocommerce_before_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), 11 );
				}
				break;

			case 'before_shop_loop_item_title':
				$priority = has_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title' );
				if ( $priority ) {
					add_action( 'woocommerce_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), $priority - 1 );
				} else {
					add_action( 'woocommerce_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), 9 );
				}
				break;

			case 'after_shop_loop_item_title':
				$priority = has_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title' );
				if ( $priority ) {
					add_action( 'woocommerce_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), $priority + 1 );
				} else {
					add_action( 'woocommerce_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), 10 );
				}
				break;

			case 'before_shop_loop_item_rating':
				$priority = has_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating' );
				if ( $priority ) {
					add_action( 'woocommerce_after_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), $priority - 1 );
				} else {
					add_action( 'woocommerce_after_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), 4 );
				}
				break;

			case 'after_shop_loop_item_rating':
				$priority = has_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating' );
				if ( $priority ) {
					add_action( 'woocommerce_after_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), $priority + 1 );
				} else {
					add_action( 'woocommerce_after_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), 6 );
				}
				break;

			case 'before_shop_loop_item_price':
				$priority = has_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price' );
				if ( $priority ) {
					add_action( 'woocommerce_after_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), $priority - 1 );
				} else {
					add_action( 'woocommerce_after_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), 9 );
				}
				break;

			case 'after_shop_loop_item_price':
				$priority = has_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price' );
				if ( $priority ) {
					add_action( 'woocommerce_after_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), $priority + 1 );
				} else {
					add_action( 'woocommerce_after_shop_loop_item_title', array( __CLASS__, 'display_sale_badge' ), 11 );
				}
				break;

			case 'after_shop_loop_item':
				add_action( "after_shop_loop_item", array( __CLASS__, 'display_sale_badge' ), 99 );
				break;

			case 'shop_loop':
				add_action( "shop_loop", array( __CLASS__, 'display_sale_badge' ), 99 );
				break;
		}
	}

	public static function loop_custom_hooks() {
		$custom_hooks = get_plugin()->settings->get_setting( 'loopCustomHooks', '' );
		$custom_hooks = apply_filters( 'asnp_wesb_loop_custom_hooks', $custom_hooks );

		self::add_custom_hooks( $custom_hooks, array( __CLASS__, 'display_sale_badge' ) );
	}

	public static function add_custom_hooks( $custom_hooks, $callback ) {
		if ( empty( $custom_hooks ) || ! strlen( trim( $custom_hooks ) ) ) {
			return;
		}

		if ( ! $callback || ! is_callable( $callback ) ) {
			return;
		}

		$custom_hooks = array_map( 'trim', explode( ',', trim( $custom_hooks ) ) );
		foreach ( $custom_hooks as $hook ) {
			add_action( $hook, $callback, apply_filters( 'asnp_wesb_sale_badge_custom_hook_priority', 99, $hook ) );
		}
	}

	public static function single_dispaly_sale_badge() {
		$product = get_current_product();
		if ( ! $product ) {
			return;
		}

		display_sale_badges( $product, true );
	}

	public static function display_sale_badge() {
		$product = get_current_product();
		if ( ! $product ) {
			return;
		}

		display_sale_badges( $product );
	}

	public static function woocommerce_product_get_image( $image ) {
		if ( ! in_the_loop() ) {
			return $image;
		}

		if ( false === strpos( $image, '<div' ) ) {
			$image = '<div class="asnp-sale-badge-image-wrapper" style="position:relative;">' . $image . '</div>';
		}

		return $image;
	}

}
