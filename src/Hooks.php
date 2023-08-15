<?php

namespace AsanaPlugins\WhatsApp;

defined( 'ABSPATH' ) || exit;

class Hooks {

	public static function init() {
		if ( get_plugin()->is_request( 'frontend' ) ) {
			self::single_hooks();
			self::loop_hooks();
		}
	}

	public static function single_hooks() {
		$single_position = get_plugin()->settings->get_setting( 'singlePosition', 'before_single_item_images' );

		if ( empty( $single_position ) || 'none' === $single_position ) {
			return self::single_custom_hooks();
		}

		switch ( $single_position ) {
			case 'before_single_item_images':
				$priority = has_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_images' );
				if ( $priority ) {
					add_action( 'woocommerce_before_single_product_summary', array( __CLASS__, 'display_sale_badge' ), $priority - 1 );
				} else {
					add_action( 'woocommerce_before_single_product_summary', array( __CLASS__, 'display_sale_badge' ), 19 );
				}
				break;

			case 'after_single_item_images':
				$priority = has_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_images' );
				if ( $priority ) {
					add_action( 'woocommerce_before_single_product_summary', array( __CLASS__, 'display_sale_badge' ), $priority + 1 );
				} else {
					add_action( 'woocommerce_before_single_product_summary', array( __CLASS__, 'display_sale_badge' ), 21 );
				}
				break;

			case 'before_single_item_title':
				$priority = has_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title' );
				if ( $priority ) {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'display_sale_badge' ), $priority - 1 );
				} else {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'display_sale_badge' ), 4 );
				}
				break;

			case 'after_single_item_title':
				$priority = has_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title' );
				if ( $priority ) {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'display_sale_badge' ), $priority + 1 );
				} else {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'display_sale_badge' ), 6 );
				}
				break;

			case 'before_single_item_price':
				$priority = has_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price' );
				if ( $priority ) {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'display_sale_badge' ), $priority - 1 );
				} else {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'display_sale_badge' ), 9 );
				}
				break;

			case 'after_single_item_price':
				$priority = has_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price' );
				if ( $priority ) {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'display_sale_badge' ), $priority + 1 );
				} else {
					add_action( 'woocommerce_single_product_summary', array( __CLASS__, 'display_sale_badge' ), 11 );
				}
				break;
		}
	}

	public static function single_custom_hooks() {
		$custom_hooks = get_plugin()->settings->get_setting( 'singleCustomHooks', '' );
		$custom_hooks = apply_filters( 'asnp_wesb_single_custom_hooks', $custom_hooks );

		self::add_custom_hooks( $custom_hooks );
	}

	public static function loop_hooks() {
		$loop_position = WCCS()->settings->get_setting( 'loop_sale_badge_position', 'before_shop_loop_item_thumbnail' );

		if ( empty( $loop_position ) || 'none' === $loop_position ) {
			return self::loop_custom_hooks();
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

		self::add_custom_hooks( $custom_hooks );
	}

	public static function add_custom_hooks( $custom_hooks ) {
		if ( empty( $custom_hooks ) || ! strlen( trim( $custom_hooks ) ) ) {
			return;
		}

		$custom_hooks = array_map( 'trim', explode( ',', trim( $custom_hooks ) ) );
		foreach ( $custom_hooks as $hook ) {
			add_action( $hook, array( __CLASS__, 'display_sale_badge' ), apply_filters( 'asnp_wesb_sale_badge_custom_hook_priority', 99, $hook ) );
		}
	}

	public static function display_sale_badge() {
		global $product;
		if ( ! $product ) {
			return;
		}

		display_sale_badges( $product );
	}

}
