<?php

namespace AsanaPlugins\WooCommerce\SaleBadges;

defined( 'ABSPATH' ) || exit;

class CustomStyles {

    protected $styles = '';

	protected $badges = [];

	public function init() {
		add_action( 'wp_footer', array( $this, 'output_styles' ) );
	}

    public function get_styles() {
        return $this->styles;
    }

	public function set_styles( $styles ) {
		$this->styles = $styles;
	}

    public function add_style( $style, $badge = null ) {
		if ( empty( $style ) ) {
			return;
		}

		// Do not add custom styles of a badge multiple times.
		if ( isset( $badge ) && isset( $badge->id ) ) {
			if ( in_array( $badge->id, $this->badges ) ) {
				return;
			}

			$this->badges[] = $badge->id;
		}

		$this->styles .= $style;
	}

	public function output_styles() {
		if ( ! empty( $this->styles ) ) {
			echo "\n<style id='asnp-wesb-inline-style'>\n" . wp_kses_post( $this->styles ) . "\n</style>\n";
		}
	}

}
