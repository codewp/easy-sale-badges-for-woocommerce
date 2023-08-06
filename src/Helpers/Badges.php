<?php

namespace AsanaPlugins\WhatsApp\Helpers\Badges;

defined('ABSPATH') || exit;

use function AsanaPlugins\WhatsApp\add_custom_style;

function output_badges($badges)
{
	if (empty($badges)) {
		return;
	}

	foreach ($badges as $badge) {
		output_badge($badge);
	}
}

function output_badge($badge)
{
	switch ($badge->type) {
		case 'css':
			return output_css_badge($badge);
		case 'timer':
			return output_timer_badge($badge);

		case 'image':
			return output_image_badge($badge);
	}
}

function output_css_badge($badge)
{
	if (!$badge) {
		return;
	}

	$span_style = '';
	if (isset($badge->opacity) && 0 < strlen(trim($badge->opacity))) {
		$span_style .= 'opacity: ' . absint($badge->opacity) . ';';
	}
	if (!empty($badge->color) && 0 < strlen(trim($badge->color))) {
		$span_style .= ' color: ' . sanitize_text_field(trim($badge->color)) . ';';
	}
	if (isset($badge->font_size) && 0 < strlen(trim($badge->opacity))) {
		$span_style .= ' font-size: ' . absint($badge->font_size) . 'px;';
	}

	$inner_span_style = '';
	if (isset($badge->font_size) && 0 < strlen(trim($badge->opacity))) {
		$inner_span_style .= ' font-size: ' . absint($badge->font_size) . 'px;';
	}

	$insetProperty = '';
	if ($badge->badgePositionY == 'top' && $badge->badgePositionX == 'left') {
		$insetProperty = $badge->badgePositionTop . 'px auto auto ' . $badge->badgePositionLeft . 'px';
	} else if ($badge->badgePositionY == 'top' && $badge->badgePositionX == 'right') {
		$insetProperty = $badge->badgePositionTop . 'px ' . $badge->badgePositionRight . 'px auto auto';
	} else if ($badge->badgePositionY == 'bottom' && $badge->badgePositionX == 'left') {
		$insetProperty = 'auto auto ' . $badge->badgePositionBottom . 'px ' . $badge->badgePositionLeft . 'px';
	} else if ($badge->badgePositionY == 'bottom' && $badge->badgePositionX == 'right') {
		$insetProperty = 'auto ' . $badge->badgePositionRight . 'px ' . $badge->badgePositionBottom . 'px auto';
	} else if ($badge->badgePositionY == 'top' && $badge->badgePositionX == 'center') {
		$insetProperty = $badge->badgePositionTop . 'px auto auto 55px';
	} else if ($badge->badgePositionY == 'bottom' && $badge->badgePositionX == 'center') {
		$insetProperty = 'auto auto ' . $badge->badgePositionBottom . 'px 55px';
	}

	$heightContBadge = '';
	$widthContBadge = '';

	if ($badge->badgeStyles == 'badge11') {
		$widthContBadge = '100%';
	} else {
		$widthContBadge = $badge['widthBadge'] . 'px';
	}

	$horizAndvert = '';
	if ($badge->horizontal === 1 && $badge->vertical === 1) {
		$horizAndvert = 'scaleX(-1) scaleY(-1)';
	} else if ($badge->horizontal === 1 && $badge->vertical === 0) {
		$horizAndvert = 'scaleX(-1)';
	} else if ($badge->horizontal === 0 && $badge->vertical === 1) {
		$horizAndvert = 'scaleY(-1)';
	} else {
		$horizAndvert = '';
	}

	if (
		$badge->badgeStyles == 'badge5' &&
		$badge->badgePositionY == 'bottom' &&
		($badge->badgePositionX == 'left' || $badge->badgePositionX == 'right')
	) {
		$horizAndvert = 'scaleX(-1) scaleY(-1)';
	} else if (
		$badge->badgeStyles == 'badge6' &&
		$badge->badgePositionY == 'bottom' &&
		($badge->badgePositionX == 'left' || $badge->badgePositionX == 'right')
	) {
		$horizAndvert = 'scaleX(-1) scaleY(-1)';
	}

	$dynamic_styles = '';
	$badge_icon_style = '';

	switch ($badge->badgeStyles) {
		case 'badge1':
			$badge_icon_style = '';
			break;
		case 'badge2':
			$badge_icon_style = '
			text-align: center;
			display: inline-block;
			position: absolute;
			opacity: ' . $badge->opacity . ';
			left: ' . ($badge->badgePositionX == 'right' ? 'auto' : '0px') . ';
			right: ' . ($badge->badgePositionX == 'right' ? '0px' : '') . ';
			top: 0px;
			height: ' . $badge->heightBadge . 'px;
			width: ' . $badge->widthBadge . 'px;
			background: ' . $badge->badgeColor . ';
			border-radius: 3px;
			color: ' . $badge->textColor . ';
			font-size: ' . $badge->fontSizeText . 'px;
			line-height: ' . $badge->lineHeightText . 'px;
			opacity: ' . $badge->opacity . ';
			border-top-left-radius: ' . $badge->topLeftRadius . 'px;
			border-top-right-radius: ' . $badge->topRightRadius . 'px;
			border-bottom-left-radius: ' . $badge->bottomLeftRadius . 'px;
			border-bottom-right-radius: ' . $badge->bottomRightRadius . 'px;
			z-index: ' . $badge->zIndex . ';
			transform: rotateX(' . $badge->rotationX . 'deg) rotateY(' . $badge->rotationY . 'deg) rotateZ(' . $badge->rotationZ . 'deg);
			';
			$badge_icon_style2 = '
			&::before {
				border-left-color: transparent !important;
				display: inline-block;
				content: \'\';
				position: absolute;
				right: ' . ($badge->badgePositionX == 'right' ? 'auto' : '-20px') . ';
				left: ' . ($badge->badgePositionX == 'right' ? '-20px' : '') . ';
				top: 0;
				border: 9px solid transparent;
				border-width: 15px 15px;
				border-color: ' . $badge->badgeColor . ';
				transform: ' . ($badge->badgePositionX == 'right' ? 'rotate(0)' : 'rotate(180deg)') . ';
				}
				';
			break;
		case 'badge3':
			$badge_icon_style = '
			position: absolute;
			background-color: ' . $badge->badgeColor . ';
			text-align: center;
			border-radius: 3px;
			opacity: ' . $badge->opacity . ';
			top: 0px;
			left: 0px;
			height: ' . $badge->heightBadge . 'px;
			width: ' . $badge->widthBadge . 'px;
			line-height: 30px;
			color: ' . $badge->textColor . ';
			font-size: ' . $badge->fontSizeText . 'px;
			line-height: ' . $badge->lineHeightText . 'px;
			opacity: ' . $badge->opacity . ';
			border-top-left-radius: ' . $badge->topLeftRadius . 'px;
			border-top-right-radius: ' . $badge->topRightRadius . 'px;
			border-bottom-left-radius: ' . $badge->bottomLeftRadius . 'px;
			border-bottom-right-radius: ' . $badge->bottomRightRadius . 'px;
			z-index: ' . $badge->zIndex . ';
			transform: rotateX(' . $badge->rotationX . 'deg) rotateY(' . $badge->rotationY . 'deg) rotateZ(' . $badge->rotationZ . 'deg);
			';
			$badge_icon_style .= '
				&::after {
					content: \'\';
					position: absolute;
					bottom: 0px;
					transform: ' . ($badge->badgePositionX == 'right' ? 'skew(-1055deg)' : 'skew(-15deg)') . ';
					right: ' . ($badge->badgePositionX == 'right' ? 'auto' : '-10px') . ';
					left: ' . ($badge->badgePositionX == 'right' ? '-10px' : '') . ';
					width: 20px;
					height: 100%;
					background-color: ' . $badge->badgeColor . ';
					border-radius: ' . ($badge->badgePositionX == 'right' ? '3px 0px 0px 3px' : '0 3px 3px 0') . ';
					}
					';
			break;
		case 'badge4':
			$badge_icon_style = '
			border-radius: 3px;
			padding: 0px 15px;
			position: absolute;
			opacity: ' . $badge->opacity . ';
			display: inline-block;
			background-color: ' . $badge->badgeColor . ';
			top: 0px;
			left: ' . ($badge->badgePositionX == 'right' ? 'auto' : '0px') . ';
			right: ' . ($badge->badgePositionX == 'right' ? '0px' : '') . ';
			height: ' . $badge->heightBadge . 'px;
			width: ' . $badge->widthBadge . 'px;
			line-height: 30px;
			box-sizing: border-box;
			border-bottom-right-radius: 1px !important;
			border-top-right-radius: 1px !important;
			color: ' . $badge->textColor . ';
			font-size: ' . $badge->fontSizeText . 'px;
			line-height: ' . $badge->lineHeightText . 'px;
			opacity: ' . $badge->opacity . ';
			border-top-left-radius: ' . $badge->topLeftRadius . 'px;
			border-top-right-radius: ' . $badge->topRightRadius . 'px;
			border-bottom-left-radius: ' . $badge->bottomLeftRadius . 'px;
			border-bottom-right-radius: ' . $badge->bottomRightRadius . 'px;
			z-index: ' . $badge->zIndex . ';
			transform: rotateX(' . $badge->rotationX . 'deg) rotateY(' . $badge->rotationY . 'deg) rotateZ(' . $badge->rotationZ . 'deg);
			';
			$badge_icon_style .= '
			    &::before {
				    position: absolute;
				    right: ' . ($badge->badgePositionX == 'right' ? 'auto' : '-14px') . ';
				    left: ' . ($badge->badgePositionX == 'right' ? '-14px' : '') . ';
				    top: 0px;
				    border-top-left-radius: ' . ($badge->badgePositionX == 'right' ? '0px' : '1px') . ';
				    border-bottom-left-radius: ' . ($badge->badgePositionX == 'right' ? '0px' : '1px') . ';
				    border-top-right-radius: ' . ($badge->badgePositionX == 'right' ? '1px' : '') . ';
				    border-bottom-right-radius: ' . ($badge->badgePositionX == 'right' ? '1px' : '') . ';
				    content: \'\';
				    display: block;
				    width: 0;
				    height: 0;
				    border-top: 15px solid transparent;
				    border-left: ' . ($badge->badgePositionX == 'right' ? 'none' : '15px solid ' . $badge->badgeColor) . ';
				    border-bottom: 15px solid transparent;
				    border-right: ' . ($badge->badgePositionX == 'right' ? '15px solid ' . $badge->badgeColor : '') . ';
						}
						';
			$badge_icon_style .= '
				&::after {
					display: block;
					content: \'\';
					position: absolute;
					background: #ffffff;
					width: 7px;
					height: 7px;
					border-radius: 10px;
					right: ' . ($badge->badgePositionX == 'right' ? 'auto' : '0px') . ';
					left: ' . ($badge->badgePositionX == 'right' ? '0px' : '') . ';
					top: calc(100% / 2 - 4px);
						}
						';
			break;
		// Add additional cases as needed
	}

	switch (!empty($badge->badgeStyles)) {
		case 'badge1':
			$dynamic_styles .= '.asnp-esb-productBadge {';
			$dynamic_styles .= ' width: ' . $widthContBadge . ';';
			$dynamic_styles .= ' height: ' . $heightContBadge . ';';
			$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			$dynamic_styles .= '}';
			$dynamic_styles .= '.asnp-esb-badge {';
			$dynamic_styles .= ' background-color: ' . $badge->badgeColor . 'px;';
			$dynamic_styles .= ' height: ' . $badge->heightBadge . 'px;';
			$dynamic_styles .= ' width: ' . $badge->widthBadge . 'px;';
			$dynamic_styles .= ' left: ' . ($badge->badgePositionX == 'right' ? 'auto' : '0px') . ';';
			$dynamic_styles .= ' right: ' . ($badge->badgePositionX == 'right' ? '0px' : '') . ';';
			$dynamic_styles .= ' font-size: ' . $badge->heightBadge . 'px;';
			$dynamic_styles .= ' line-height: ' . $badge->heightBadge . 'px;';
			$dynamic_styles .= ' opacity: ' . $badge->opacity . 'px;';
			$dynamic_styles .= ' border-top-left-radius: ' . $badge->topLeftRadius . 'px;';
			$dynamic_styles .= ' border-top-right-radius: ' . $badge->topRightRadius . 'px;';
			$dynamic_styles .= ' border-bottom-left-radius: ' . $badge->bottomLeftRadius . 'px;';
			$dynamic_styles .= ' border-bottom-right-radius: ' . $badge->bottomRightRadius . 'px;';
			$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			$dynamic_styles .= ' transform:   rotateX(' . $badge->rotationX . 'deg) rotateY(' . $badge->rotationY . 'deg) rotateZ(' . $badge->rotationZ . 'deg);';
			$dynamic_styles .= '}';
			break;
		case 'badge2':
			$dynamic_styles .= '.asnp-esb-badge {';
			$dynamic_styles .= ' background-color: ' . $badge->badgeColor . 'px;';
			$dynamic_styles .= ' height: ' . $badge->heightBadge . 'px;';
			$dynamic_styles .= ' width: ' . $badge->widthBadge . 'px;';
			$dynamic_styles .= ' left: ' . ($badge->badgePositionX == 'right' ? 'auto' : '0px') . ';';
			$dynamic_styles .= ' right: ' . ($badge->badgePositionX == 'right' ? '0px' : '') . ';';
			$dynamic_styles .= ' font-size: ' . $badge->heightBadge . 'px;';
			$dynamic_styles .= ' line-height: ' . $badge->heightBadge . 'px;';
			$dynamic_styles .= ' opacity: ' . $badge->opacity . 'px;';
			$dynamic_styles .= ' border-top-left-radius: ' . $badge->topLeftRadius . 'px;';
			$dynamic_styles .= ' border-top-right-radius: ' . $badge->topRightRadius . 'px;';
			$dynamic_styles .= ' border-bottom-left-radius: ' . $badge->bottomLeftRadius . 'px;';
			$dynamic_styles .= ' border-bottom-right-radius: ' . $badge->bottomRightRadius . 'px;';
			$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			$dynamic_styles .= ' transform:   rotateX(' . $badge->rotationX . 'deg) rotateY(' . $badge->rotationY . 'deg) rotateZ(' . $badge->rotationZ . 'deg);';
			$dynamic_styles .= '}';
			$dynamic_styles .= '.asnp-esb-badge::before {';
			$dynamic_styles .= ' border-left-color: transparent !important;';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' right: ' . ($badge->badgePositionX == 'right' ? 'auto' : '-20px') . ';';
			$dynamic_styles .= ' left: ' . ($badge->badgePositionX == 'right' ? '-20px' : '') . ';';
			$dynamic_styles .= ' top: 0;';
			$dynamic_styles .= ' border: 9px solid transparent;';
			$dynamic_styles .= ' border-width: 15px 15px;';
			$dynamic_styles .= ' border-color: ' . $badge->badgeColor . 'px;';
			$dynamic_styles .= ' transform: ' . ($badge->badgePositionX == 'right' ? 'rotate(0)' : 'rotate(180deg)') . ';';
			$dynamic_styles .= '}';
			break;

		default:
			$dynamic_styles .= '.asnp-esb-badge {';
			$dynamic_styles .= ' background-color: ' . $badge->badgeColor . 'px;';
			$dynamic_styles .= ' height: ' . $badge->heightBadge . 'px;';
			$dynamic_styles .= ' width: ' . $badge->widthBadge . 'px;';
			$dynamic_styles .= ' left: ' . ($badge->badgePositionX == 'right' ? 'auto' : '0px') . ';';
			$dynamic_styles .= ' right: ' . ($badge->badgePositionX == 'right' ? '0px' : '') . ';';
			$dynamic_styles .= ' font-size: ' . $badge->heightBadge . 'px;';
			$dynamic_styles .= ' line-height: ' . $badge->heightBadge . 'px;';
			$dynamic_styles .= ' opacity: ' . $badge->opacity . 'px;';
			$dynamic_styles .= ' border-top-left-radius: ' . $badge->topLeftRadius . 'px;';
			$dynamic_styles .= ' border-top-right-radius: ' . $badge->topRightRadius . 'px;';
			$dynamic_styles .= ' border-bottom-left-radius: ' . $badge->bottomLeftRadius . 'px;';
			$dynamic_styles .= ' border-bottom-right-radius: ' . $badge->bottomRightRadius . 'px;';
			$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			$dynamic_styles .= ' transform:   rotateX(' . $badge->rotationX . 'deg) rotateY(' . $badge->rotationY . 'deg) rotateZ(' . $badge->rotationZ . 'deg);';
			$dynamic_styles .= '}';
	}


	add_custom_style($dynamic_styles);

	// Css Badge
	echo '<div class="asnp-esb-productBadge" style="display: none;">';
	echo '<div style="' . esc_attr($span_style) . '">';
	echo '<span class="asnp-esb-inner-span2"> style="' . esc_attr($inner_span_style) . '"></span>';
	echo '<div class="asnp-esb-inner-span1" style="display: none;">';
	echo '<div class="asnp-esb-timer-badge" style="display: none; transform: ' . $horizAndvert . '">' . $badge->badgeLabel . '</div>';
	echo '</div>';
	echo '</div>';
	echo '</div>';
}

function output_timer_badge($badge)
{
	if (!$badge) {
		return;
	}

	$dynamic_style = '';

	add_custom_style($dynamic_style);
}

function output_image_badge($badge)
{
	if (!$badge) {
		return;
	}
}