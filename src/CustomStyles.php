<?php

namespace AsanaPlugins\WooCommerce\SaleBadges;

defined( 'ABSPATH' ) || exit;

class CustomStyles {

    protected $styles = '';

	public function init() {
		add_action( 'wp_footer', array( $this, 'output_styles' ) );
	}

    public function get_styles() {
        return $this->styles;
    }

	public function set_styles( $styles ) {
		$this->styles = $styles;
	}

    public function add_style( $style ) {
		if ( empty( $style ) ) {
			return;
		}

		$this->styles .= $style;
	}

	public function output_styles() {
		if ( ! empty( $this->styles ) ) {
			echo "\n<style id='asnp-wesb-inline-style'>\n" . wp_kses_post( $this->styles ) . "\n</style>\n";
		}
	}

}
