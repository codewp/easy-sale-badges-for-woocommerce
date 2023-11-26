<?php

namespace AsanaPlugins\WooCommerce\SaleBadges;

function get_plugin() {
	return Plugin::instance();
}

/**
 * Callback for array filter to get products the user can view only.
 *
 * @since  1.0.0
 *
 * @param  \WC_Product $product WC_Product object.
 *
 * @return bool
 */
function wc_products_array_filter_readable( $product ) {
	if ( function_exists( '\wc_products_array_filter_readable' ) ) {
		return \wc_products_array_filter_readable( $product );
	}

	return $product && is_a( $product, 'WC_Product' ) && current_user_can( 'read_product', $product->get_id() );
}

/**
 * Converts a string (e.g. 'yes' or 'no') to a bool.
 *
 * @since 1.0.0
 *
 * @param string|bool $string String to convert. If a bool is passed it will be returned as-is.
 *
 * @return bool
 */
function string_to_bool( $string ) {
	return is_bool( $string ) ? $string : ( 'yes' === strtolower( $string ) || 1 === $string || 'true' === strtolower( $string ) || '1' === $string );
}

/**
 * Retrieves the timezone of the site as a string.
 *
 * @since 1.0.0
 *
 * @return string timezone name.
 */
function get_timezone_string() {
	$tzstring = get_option( 'timezone_string' );

	// Remove old Etc mappings. Fallback to gmt_offset.
	if ( false !== strpos( $tzstring, 'Etc/GMT' ) ) {
		$tzstring = '';
	} elseif ( false !== strpos( $tzstring, 'UTC' ) ) {
		$tzstring = 'UTC';
	}

	return ! empty( $tzstring ) ? $tzstring : 'UTC';
}

function get_term_hierarchy_name( $term_id, $taxonomy, $separator = '/', $nicename = false, $visited = array() ) {
	$chain = '';
	$term = get_term( $term_id, $taxonomy );

	if ( is_wp_error( $term ) ) {
		return '';
	}

	$name = $term->name;
	if ( $nicename ) {
		$name = $term->slug;
	}

	if ( $term->parent && ( $term->parent != $term->term_id ) && ! in_array( $term->parent, $visited ) ) {
		$visited[] = $term->parent;
		$chain     .= get_term_hierarchy_name( $term->parent, $taxonomy, $separator, $nicename, $visited );
	}

	$chain .= $name . $separator;

	return $chain;
}

function register_polyfills() {
	global $wp_version;

	$handles = array(
		'react'        => array( '17.0.2', array() ),
		'react-dom'    => array( '17.0.2', array( 'react' ) ),
		'wp-i18n'      => array( '6.0', array() ),
		'wp-hooks'     => array( '6.0', array() ),
		'wp-api-fetch' => array( '6.0', array() ),
		'moment'       => array( '2.29.4', array() ),
	);
	foreach ( $handles as $handle => $value ) {
		if ( ! version_compare( $wp_version, '5.9', '>=' ) && in_array( $handle, array( 'react', 'react-dom' ) ) ) {
			wp_deregister_script( $handle );
		}

		if ( ! wp_script_is( $handle, 'registered' ) ) {
			wp_register_script(
				$handle,
				plugins_url( 'assets/js/vendor/' . $handle . '.js', ASNP_WESB_PLUGIN_FILE ),
				$value[1],
				$value[0],
				true
			);
		}
	}
}

function is_pro_active() {
	return defined( 'ASNP_WESB_PRO_VERSION' );
}

function add_custom_style( $style ) {
	if ( empty( $style ) ) {
		return;
	}

	get_plugin()->container()->get( CustomStyles::class )->add_style( $style );
}

function display_sale_badges( $product, $hide = false, $return = false ) {
	if ( ! $product ) {
		return '';
	}

	$badges = get_plugin()->container()->get( Badges::class );
	if ( ! $badges ) {
		return '';
	}

	return $badges->display_badges( $product, $hide, $return );
}

function has_active_sale_badges() {
	$badges = get_plugin()->container()->get( Badges::class );
	if ( ! $badges ) {
		return false;
	}

	$all_badges = $badges->get_badges();
	return ! empty( $all_badges );
}

function get_current_product() {
	global $product;

	if ( $product && is_a( $product, 'WC_Product' ) ) {
		return $product;
	}

	global $post;
	if ( ! $post ) {
		return false;
	}

	if ( is_a( $post, 'WC_Product' ) ) {
		return $post;
	}

	$woo_product = wc_get_product( $post->ID );
	if ( $woo_product && is_a( $woo_product, 'WC_Product' ) ) {
		return $woo_product;
	}

	return false;
}

function get_theme_loop_position( $stylesheet = null, $template = null ) {
	$stylesheet = empty( $stylesheet ) ? get_stylesheet() : $stylesheet;
	$template   = empty( $template ) ? get_template() : $template;

	$stylesheet = ! empty( $stylesheet ) ? strtolower( $stylesheet ) : $stylesheet;
	$template   = ! empty( $template ) ? strtolower( $template ) : $template;

	$themes = [
		'avada'    	  => 'after_shop_loop_item_thumbnail',
		'woodmart' 	  => 'after_shop_loop_item_thumbnail',
		'porto'    	  => 'after_shop_loop_item_thumbnail',
		'oceanwp'     => 'ocean_before_archive_product_image',
		'basel'   	  => 'after_shop_loop_item_thumbnail',
		'thegem'      => 'after_shop_loop_item_thumbnail',
		'uncode'      => 'uncode_entry_visual_after_image',
		'rehub-theme' => 'rh_woo_thumbnail_loop',
		'total'       => 'wpex_woocommerce_loop_thumbnail_before',
		'enfold'      => 'post_thumbnail_html',
		'estore'      => 'after_shop_loop_item_thumbnail',
		'flatsome'      => 'flatsome_woocommerce_shop_loop_images',
		'jupiterx'      => 'woocommerce_after_shop_loop_item',
	];

	if ( ! empty( $stylesheet ) && isset( $themes[ $stylesheet ] ) ) {
		return $themes[ $stylesheet ];
	}

	if ( ! empty( $template ) && isset( $themes[ $template ] ) ) {
		return $themes[ $template ];
	}

	return '';
}

function get_theme_single_position( $stylesheet = null, $template = null ) {
	$stylesheet = empty( $stylesheet ) ? get_stylesheet() : $stylesheet;
	$template   = empty( $template ) ? get_template() : $template;

	$stylesheet = ! empty( $stylesheet ) ? strtolower( $stylesheet ) : $stylesheet;
	$template   = ! empty( $template ) ? strtolower( $template ) : $template;

	$themes = [
		'thegem'      => 'thegem_woocommerce_single_product_left',
		'rehub-theme' => 'rh_woo_after_single_image',
		'woodmart'    => 'woocommerce_single_product_summary',
		'basel'       => 'woocommerce_before_single_product_summary',
	];

	if ( ! empty( $stylesheet ) && isset( $themes[ $stylesheet ] ) ) {
		return $themes[ $stylesheet ];
	}

	if ( ! empty( $template ) && isset( $themes[ $template ] ) ) {
		return $themes[ $template ];
	}

	return '';
}

function get_theme_single_container( $stylesheet = null, $template = null ) {
	$stylesheet = empty( $stylesheet ) ? get_stylesheet() : $stylesheet;
	$template   = empty( $template ) ? get_template() : $template;

	$stylesheet = ! empty( $stylesheet ) ? strtolower( $stylesheet ) : $stylesheet;
	$template   = ! empty( $template ) ? strtolower( $template ) : $template;

	$themes = [
		'thegem' => '.product-gallery-slider',
		'eduma' => '.main_product_thumbnai',
	];

	if ( ! empty( $stylesheet ) && isset( $themes[ $stylesheet ] ) ) {
		return $themes[ $stylesheet ];
	}

	if ( ! empty( $template ) && isset( $themes[ $template ] ) ) {
		return $themes[ $template ];
	}

	return '';
}
