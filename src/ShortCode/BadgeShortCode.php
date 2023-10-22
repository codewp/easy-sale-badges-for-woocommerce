<?php

namespace AsanaPlugins\WooCommerce\SaleBadges\ShortCode;

defined( 'ABSPATH' ) || exit;

use function AsanaPlugins\WooCommerce\SaleBadges\display_sale_badges;
use function AsanaPlugins\WooCommerce\SaleBadges\string_to_bool;

class BadgeShortCode {

	public static function output( $atts ) {
		$atts = shortcode_atts( array( 'product_id' => 0, 'hide' => 0 ), $atts, 'asnp_badge' );
		if ( 0 < absint( $atts['product_id'] ) ) {
            $product = wc_get_product( $atts['product_id'] );
        } else {
            global $product;
        }

		if ( ! $product ) {
			return '';
		}

		$hide = string_to_bool( $atts['hide'] );

		return display_sale_badges( $product, $hide, true );
	}

}
