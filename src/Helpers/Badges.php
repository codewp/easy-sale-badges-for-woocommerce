<?php

namespace AsanaPlugins\WhatsApp\Helpers\Badges;

defined( 'ABSPATH' ) || exit;

use function AsanaPlugins\WhatsApp\add_custom_style;

function output_badges( $badges ) {
	if ( empty( $badges ) ) {
		return;
	}

	foreach ( $badges as $badge ) {
		output_badge( $badge );
	}
}

function output_badge( $badge ) {
	if ( ! $badge ) {
		return;
	}

	switch ( $badge->type ) {
		case 'image':
			return output_image_badge( $badge );

		case 'timer':
			return output_timer_badge( $badge );
	}
}

function output_timer_badge( $badge ) {
	if ( ! $badge ) {
		return;
	}

	$dynamic_style = '';

	add_custom_style( $dynamic_style );
}

function output_image_badge( $badge ) {
	if ( ! $badge ) {
		return;
	}
}
