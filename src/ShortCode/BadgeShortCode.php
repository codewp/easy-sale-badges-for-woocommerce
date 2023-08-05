<?php

namespace AsanaPlugins\WhatsApp\ShortCode;

defined( 'ABSPATH' ) || exit;

class BadgeShortCode {

	public static function output( $atts ) {
		$atts = shortcode_atts( array( 'id' => 0 ), $atts, 'asnp_chat' );
		if ( 0 >= absint( $atts['id'] ) ) {
			return '';
		}
	}

}
