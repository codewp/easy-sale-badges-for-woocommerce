<?php

namespace AsanaPlugins\WooCommerce\SaleBadges;

defined( 'ABSPATH' ) || exit;

use AsanaPlugins\WooCommerce\SaleBadges;

class Replace {

    public static function init() {
        add_filter( 'asnp_wesb_css_badge_label', array( __CLASS__, 'replace' ), 10, 2 );
		add_filter( 'asnp_wesb_advanced_badge_label', array( __CLASS__, 'replace' ), 10, 2 );
    }

    public static function replace( $label, $badge ) {
        if ( ! $badge ) {
			return $label;
		}

        $placeholders = apply_filters( 'asnp_wesb_placeholders', [
            '/[regular_price]/i' => 'regular_price',
            '/[sale_price]/i' => 'sale_price',
            '/[price]/i' => 'price',
            '/[save_amount\s*\|*\s*([\d]*)\s*]/i' => 'save_amount',
            '/[save_percent\s*\|*\s*([\d]*)\s*]/i' => 'save_percent',
            '/[sale_ends]/i' => 'sale_ends',
            '/[currency]/i' => 'currency',
            '/[qty]/i' => 'quantity',
            '/[br]/i' => 'br',
            '/[sku]/i' => 'sku',
        ] );

        if ( empty( $placeholders ) ) {
            return $label;
        }

        $product = SaleBadges\get_current_product();
		if ( ! $product ) {
			return $label;
		}

        foreach ( $placeholders as $placeholder => $method ) {
            if ( preg_match( $placeholder, $label ) ) {
                if ( is_callable( [ __CLASS__, $method ] ) ) {
                    $label = static::$method( $label, $product );
                } else {
                    $label = apply_filters( 'asnp_wesb_label_placeholder_replace_' . $method, $label, $product, $badge );
                }
            }
        }

        return $label;
    }

    public static function price( $label, $product ) {

    }

    public static function regular_price( $label, $product ) {

    }

    public static function sale_price( $label, $product ) {

    }

}
