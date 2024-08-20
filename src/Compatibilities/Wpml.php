<?php

namespace AsanaPlugins\WooCommerce\SaleBadges\Compatibilities;

defined( 'ABSPATH' ) || exit;

use AsanaPlugins\WooCommerce\SaleBadges;

/**
 * Easy WooCommerce Discounts compatibility with WPML.
 *
 * @since 4.9.0
 */
class WCCS_Compatibility_WPML {

    protected $loader;

    public static function __construct( WCCS_Loader $loader ) {
        $this->loader = $loader;
    }

    public static function init() {
        $this->loader->add_filter( 'wccs_exact_item_id', $this, 'exact_item_id', 100, 2 );
        $this->loader->add_filter( 'wccs_exact_product', $this, 'exact_product', 100, 2 );
    }

    public static function exact_item_id( $id, $type ) {
        return apply_filters( 'wpml_object_id', $id, $type, true );
    }

    public static function exact_product( $product ) {
        if ( ! $product instanceof WC_Product ) {
            return $product;
        }
        return wc_get_product( $this->exact_item_id( $product->get_id(), 'product' ) );
    }

}
