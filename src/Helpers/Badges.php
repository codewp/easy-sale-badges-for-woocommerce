<?php

namespace AsanaPlugins\WhatsApp\Helpers\Badges;

defined('ABSPATH') || exit;

use function AsanaPlugins\WhatsApp\get_plugin;
use function AsanaPlugins\WhatsApp\add_custom_style;

function output_badges( $badges, $hide = false ) {
	if ( empty( $badges ) ) {
		return;
	}

	foreach ( $badges as $badge ) {
		output_badge( $badge, $hide );
	}
}

function output_badge( $badge, $hide = false ) {
	if ( isset( $badge->imgbadge ) && $badge->imgbadge == 1 ) {
		return output_image_badge( $badge, $hide );
	} elseif ( isset( $badge->imgbadgeAdv ) && $badge->imgbadgeAdv == 1 ) {
		return output_image_adv_badge( $badge, $hide );
	} elseif ( isset( $badge->useTimerBadge ) && $badge->useTimerBadge == 1 ) {
		return output_timer_badge( $badge, $hide );
	} elseif ( ! empty( $badge->badgeStyles ) ) {
		return output_css_badge( $badge, $hide );
	}
}

function output_css_badge( $badge, $hide = false ) {
	if ( ! $badge ) {
		return;
	}

	$insetProperty = '';
	if ( ! empty( $badge->badgePositionX ) && ! empty( $badge->badgePositionY ) ) {
		if ( 'top' === $badge->badgePositionY ) {
			if ( 'left' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionTop ) && isset( $badge->badgePositionLeft ) ) {
					$insetProperty = $badge->badgePositionTop . 'px auto auto ' . $badge->badgePositionLeft . 'px';
				}
			} elseif ( 'right' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionTop ) && isset( $badge->badgePositionRight ) ) {
					$insetProperty = $badge->badgePositionTop . 'px ' . $badge->badgePositionRight . 'px auto auto';
				}
			} elseif ( 'center' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionTop ) ) {
					$insetProperty = $badge->badgePositionTop . 'px auto auto 55px';
				}
			}
		} elseif ( 'bottom' === $badge->badgePositionY ) {
			if ( 'left' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionBottom ) && isset( $badge->badgePositionLeft ) ) {
					$insetProperty = 'auto auto ' . $badge->badgePositionBottom . 'px ' . $badge->badgePositionLeft . 'px';
				}
			} elseif ( 'right' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionBottom ) && isset( $badge->badgePositionRight ) ) {
					$insetProperty = 'auto ' . $badge->badgePositionRight . 'px ' . $badge->badgePositionBottom . 'px auto';
				}
			} elseif ( 'center' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionBottom ) ) {
					$insetProperty = 'auto auto ' . $badge->badgePositionBottom . 'px 55px';
				}
			}
		}
 	}

	$heightContBadge = '';
	$widthContBadge = '';

	if ( isset( $badge->badgeStyles ) && $badge->badgeStyles == 'badge11' ) {
		$widthContBadge = '100%';
	} elseif ( isset( $badge->widthBadge ) ) {
		$widthContBadge = $badge->widthBadge . 'px';
	}

	if (
		isset( $badge->widthBadge ) &&
		isset( $badge->badgeStyles ) &&
		(
			$badge->badgeStyles == 'badge5' ||
			$badge->badgeStyles == 'badge6' ||
			$badge->badgeStyles == 'badge7' ||
			$badge->badgeStyles == 'badge8'
		)
	) {
		$heightContBadge = $badge->widthBadge . 'px';
	} elseif ( isset( $badge->widthBadge ) && isset( $badge->badgeStyles ) && (
			$badge->badgeStyles == 'badge9' ||
			$badge->badgeStyles == 'badge10' )
		) {
		$heightContBadge = $badge->heightBadge - 15 . 'px';
	} elseif ( isset( $badge->heightBadge ) ) {
		$heightContBadge = $badge->heightBadge . 'px';
	}

	$horizAndvert = '';
	if ( ! empty( $badge->horizontal ) ) {
		if ( ! empty( $badge->vertical ) ) {
			$horizAndvert = 'scaleX(-1) scaleY(-1)';
		} else {
			$horizAndvert = 'scaleX(-1)';
		}
	} elseif ( ! empty( $badge->vertical ) ) {
		$horizAndvert = 'scaleY(-1)';
	}

	if (
		isset( $badge->badgeStyles ) && $badge->badgeStyles == 'badge5' &&
		isset( $badge->badgePositionY ) && $badge->badgePositionY == 'bottom' &&
		(
			( isset( $badge->badgePositionX ) && $badge->badgePositionX == 'left' ) ||
			( isset( $badge->badgePositionX ) && $badge->badgePositionX == 'right' )
		)
	) {
		$horizAndvert = 'scaleX(-1) scaleY(-1)';
	} elseif (
		isset( $badge->badgeStyles ) && $badge->badgeStyles == 'badge6' &&
		isset( $badge->badgePositionY ) && $badge->badgePositionY == 'bottom' &&
		(
			( isset( $badge->badgePositionX ) && $badge->badgePositionX == 'left' ) ||
			( isset( $badge->badgePositionX ) && $badge->badgePositionX == 'right' )
		)
	) {
		$horizAndvert = 'scaleX(-1) scaleY(-1)';
	}

	$dynamic_styles = '';
	$badge_css='';

	switch ( $badge->badgeStyles ) {
		case 'badge1':
			$badge_css ='b1';
			$dynamic_styles .= '.asnp-esb-productBadge-'. $badge_css .' {';
			if ( isset( $badge->widthBadge ) ) {
				$dynamic_styles .= ' width: ' . $widthContBadge . ';';
			}
			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $heightContBadge . ';';
			}
			if ( isset( $badge->badgePositionTop ) ) {
					$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .' {';
			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->badgeColor . ';';
			}
			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $badge->heightBadge . 'px;';
			}
			if ( isset( $badge->widthBadge ) ) {
				$dynamic_styles .= ' width: ' . $badge->widthBadge . 'px;';
			}
			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '0px' ) . ';';
			}
			if ( isset( $badge->badgePositionX ) && 'right' === $badge->badgePositionX ) {
				$dynamic_styles .= ' right: 0px;';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			if ( isset( $badge->lineHeightText ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightText . 'px;';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->topLeftRadius ) ) {
				$dynamic_styles .= ' border-top-left-radius: ' . $badge->topLeftRadius . 'px;';
			}
			if ( isset( $badge->topRightRadius ) ) {
				$dynamic_styles .= ' border-top-right-radius: ' . $badge->topRightRadius . 'px;';
			}
			if ( isset( $badge->bottomLeftRadius ) ) {
				$dynamic_styles .= ' border-bottom-left-radius: ' . $badge->bottomLeftRadius . 'px;';
			}
			if ( isset( $badge->bottomRightRadius ) ) {
				$dynamic_styles .= ' border-bottom-right-radius: ' . $badge->bottomRightRadius . 'px;';
			}
			if ( isset( $badge->zIndex ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}

			$transform = '';
			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}
			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}
			if ( isset( $badge->rotationZ ) ) {
				$transform .= ' rotateZ(' . esc_html( $badge->rotationZ ) . 'deg);';
			}
			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}

			$dynamic_styles .= '}';
			break;

		case 'badge2':
			$badge_css ='b2';
			$dynamic_styles .= '.asnp-esb-productBadge-'. $badge_css .' {';
				if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $widthContBadge . ';';
				}
				if ( isset( $badge->heightBadge ) ) {
					$dynamic_styles .= ' height: ' . $heightContBadge . ';';
				}
				if ( isset( $badge->badgePositionTop ) ) {
						$dynamic_styles .= ' inset: ' . $insetProperty . ';';
				}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .' {';
			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->badgeColor . ';';
			}
			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $badge->heightBadge . 'px;';
			}
			if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $badge->widthBadge . 'px;';
			}
			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '0px' ) . ';';
			}
			if ( isset( $badge->badgePositionX ) && 'right' === $badge->badgePositionX ) {
				$dynamic_styles .= ' right: 0px;';
			}
			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->lineHeightText ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightText . 'px;';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->topLeftRadius ) ) {
				$dynamic_styles .= ' border-top-left-radius: ' . $badge->topLeftRadius . 'px;';
			}
			if ( isset( $badge->topRightRadius ) ) {
				$dynamic_styles .= ' border-top-right-radius: ' . $badge->topRightRadius . 'px;';
			}
			if ( isset( $badge->bottomLeftRadius ) ) {
				$dynamic_styles .= ' border-bottom-left-radius: ' . $badge->bottomLeftRadius . 'px;';
			}
			if ( isset( $badge->bottomRightRadius ) ) {
				$dynamic_styles .= ' border-bottom-right-radius: ' . $badge->bottomRightRadius . 'px;';
			}
			if ( isset( $badge->zIndex ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}

			$transform = '';
			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}
			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}
			if ( isset( $badge->rotationZ ) ) {
				$transform .= ' rotateZ(' . esc_html( $badge->rotationZ ) . 'deg);';
			}
			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .'::before {';
			$dynamic_styles .= ' border-left-color: transparent !important;';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' position: absolute;';

			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '-20px' ) . ';';
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? '-20px' : '' ) . ';';
			}

			$dynamic_styles .= ' top: 0;';
			$dynamic_styles .= ' border: 9px solid transparent;';
			$dynamic_styles .= ' border-width: 15px 15px;';

			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' border-color: ' . $badge->badgeColor . ';';
			}

			$dynamic_styles .= ' transform: ' . ( isset( $badge->badgePositionX ) && $badge->badgePositionX == 'right' ? 'rotate(0)' : 'rotate(180deg)' ) . ';';
			$dynamic_styles .= '}';
		break;
		case 'badge3':
			$badge_css ='b3';
			$dynamic_styles .= '.asnp-esb-productBadge-'. $badge_css .' {';
				if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $widthContBadge . ';';
				}
				if ( isset( $badge->heightBadge ) ) {
					$dynamic_styles .= ' height: ' . $heightContBadge . ';';
				}
				if ( isset( $badge->badgePositionTop ) ) {
						$dynamic_styles .= ' inset: ' . $insetProperty . ';';
				}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .' {';
			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->badgeColor . ';';
			}
			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $badge->heightBadge . 'px;';
			}
			if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $badge->widthBadge . 'px;';
			}
			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '0px' ) . ';';
			}
			if ( isset( $badge->badgePositionX ) && 'right' === $badge->badgePositionX ) {
				$dynamic_styles .= ' right: 0px;';
			}
			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->lineHeightText ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightText . 'px;';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->topLeftRadius ) ) {
				$dynamic_styles .= ' border-top-left-radius: ' . $badge->topLeftRadius . 'px;';
			}
			if ( isset( $badge->topRightRadius ) ) {
				$dynamic_styles .= ' border-top-right-radius: ' . $badge->topRightRadius . 'px;';
			}
			if ( isset( $badge->bottomLeftRadius ) ) {
				$dynamic_styles .= ' border-bottom-left-radius: ' . $badge->bottomLeftRadius . 'px;';
			}
			if ( isset( $badge->bottomRightRadius ) ) {
				$dynamic_styles .= ' border-bottom-right-radius: ' . $badge->bottomRightRadius . 'px;';
			}
			if ( isset( $badge->zIndex ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}

			$transform = '';
			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}
			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}
			if ( isset( $badge->rotationZ ) ) {
				$transform .= ' rotateZ(' . esc_html( $badge->rotationZ ) . 'deg);';
			}
			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .'::after {';
			$dynamic_styles .= ' width: 20px;';
			$dynamic_styles .= ' height: 100%;';
			$dynamic_styles .= ' bottom: 0px;';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' position: absolute;';

			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '-10px' ) . ';';
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? '-10px' : '' ) . ';';
				$dynamic_styles .= ' border-radius: ' . ( $badge->badgePositionX == 'right' ? '3px 0px 0px 3px' : '0 3px 3px 0' ) . ';';
			}

			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->badgeColor . ';';
			}
			$dynamic_styles .= ' transform: ' . ( isset( $badge->badgePositionX ) && $badge->badgePositionX == 'right' ? 'skew( -1055deg )' : 'skew( -15deg )' ) . ';';
			$dynamic_styles .= '}';
		break;

		case 'badge4':
			$badge_css ='b4';
			$dynamic_styles .= '.asnp-esb-productBadge-'. $badge_css .' {';
				if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $widthContBadge . ';';
				}
				if ( isset( $badge->heightBadge ) ) {
					$dynamic_styles .= ' height: ' . $heightContBadge . ';';
				}
				if ( isset( $badge->badgePositionTop ) ) {
						$dynamic_styles .= ' inset: ' . $insetProperty . ';';
				}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .' {';
			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->badgeColor . ';';
			}
			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $badge->heightBadge . 'px;';
			}
			if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $badge->widthBadge . 'px;';
			}
			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '0px' ) . ';';
			}
			if ( isset( $badge->badgePositionX ) && 'right' === $badge->badgePositionX ) {
				$dynamic_styles .= ' right: 0px;';
			}
			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->lineHeightText ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightText . 'px;';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->topLeftRadius ) ) {
				$dynamic_styles .= ' border-top-left-radius: ' . $badge->topLeftRadius . 'px;';
			}
			if ( isset( $badge->topRightRadius ) ) {
				$dynamic_styles .= ' border-top-right-radius: ' . $badge->topRightRadius . 'px;';
			}
			if ( isset( $badge->bottomLeftRadius ) ) {
				$dynamic_styles .= ' border-bottom-left-radius: ' . $badge->bottomLeftRadius . 'px;';
			}
			if ( isset( $badge->bottomRightRadius ) ) {
				$dynamic_styles .= ' border-bottom-right-radius: ' . $badge->bottomRightRadius . 'px;';
			}
			if ( isset( $badge->zIndex ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 0px 15px;';
			$dynamic_styles .= ' top: 0px;';
			$dynamic_styles .= ' box-sizing: border-box;';
			$transform = '';
			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}
			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}
			if ( isset( $badge->rotationZ ) ) {
				$transform .= ' rotateZ(' . esc_html( $badge->rotationZ ) . 'deg);';
			}
			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .'::after {';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' top: calc( 100% / 2 - 4px );';
			$dynamic_styles .= ' background: #ffffff;';
			$dynamic_styles .= ' width: 7px;';
			$dynamic_styles .= ' height: 7px;';
			$dynamic_styles .= ' border-radius: 10px;';
			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '0px' ) . ';';
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? '0px' : '' ) . ';';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .'::before {';
			$dynamic_styles .= ' top: 0px;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' width: 0;';
			$dynamic_styles .= ' height: 0;';
			$dynamic_styles .= ' border-top: 15px solid transparent;';
			$dynamic_styles .= ' border-bottom: 15px solid transparent;';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' position: absolute;';
			if ( isset( $badge->badgePositionX ) ) {
			$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '-14px' ) . ';';
			$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? '-14px' : '' ) . ';';
			$dynamic_styles .= ' border-top-left-radius: ' . ( $badge->badgePositionX == 'right' ? '0px' : '1px' ) . ';';
			$dynamic_styles .= ' border-bottom-left-radius: ' . ( $badge->badgePositionX == 'right' ? '0px' : '1px' ) . ';';
			$dynamic_styles .= ' border-top-right-radius: ' . ( $badge->badgePositionX == 'right' ? '1px' : '' ) . ';';
			$dynamic_styles .= ' border-bottom-right-radius: ' . ( $badge->badgePositionX == 'right' ? '1px' : '' ) . ';';
			$dynamic_styles .= ' border-left: ' . ( $badge->badgePositionX == 'right' ? 'none' : '15px solid' . $badge->badgeColor . ' }' ) . ';';
			$dynamic_styles .= ' border-right: ' . ( $badge->badgePositionX == 'right' ? '15px solid' . $badge->badgeColor . ' }' : '' ) . ';';
			}
			$dynamic_styles .= '}';
		break;
		case 'badge5':
			$badge_css ='b5';
			$dynamic_styles .= '.asnp-esb-productBadge-'. $badge_css .' {';
				if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $widthContBadge . ';';
				}
				if ( isset( $badge->heightBadge ) ) {
					$dynamic_styles .= ' height: ' . $heightContBadge . ';';
				}
				if ( isset( $badge->badgePositionTop ) ) {
						$dynamic_styles .= ' inset: ' . $insetProperty . ';';
				}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .' {';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' overflow: hidden;';
			$dynamic_styles .= ' z-index: 10;';

			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $badge->widthBadge . 'px;';
			}
			if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $badge->widthBadge . 'px;';
			}
			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->lineHeightText ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightText . 'px;';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->zIndex ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}

			$transform = '';

			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}
			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}
			if ( ( isset( $badge->badgePositionY ) && $badge->badgePositionY == 'bottom' ) && ( isset( $badge->badgePositionX ) && $badge->badgePositionX == 'left' ) ) {
				$transform .= ' rotateZ(270deg) !important';
			}elseif( ( isset( $badge->badgePositionY ) && $badge->badgePositionY == 'bottom' ) && ( isset( $badge->badgePositionX ) && $badge->badgePositionX == 'right' ) ){
				$transform .= ' rotateZ(90deg) !important';
			}

			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-inner-span1-'. $badge_css .' {';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' z-index: 12;';
			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background: ' . $badge->badgeColor . ';';
			}

			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' transform: ' . ( $badge->badgePositionX == 'right' ? 'rotate(45deg)' : 'rotate(315deg)' ) . ';';
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? '' : '-'. $badge->widthBadge / 2.4  .'px' ) . ';';
				$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? '-'. $badge->widthBadge / 2.22  .'px' : '' ) . ';';
			}

			if ( isset( $badge->widthBadge ) ) {
				$dynamic_styles .= ' width: ' . $badge->widthBadge* 1.5 . 'px;';
				$dynamic_styles .= ' top: ' . $badge->widthBadge/12 . 'px;';
			}
			$dynamic_styles .= '}';
		break;

		case 'badge6':
			$badge_css ='b6';
			$dynamic_styles .= '.asnp-esb-productBadge-'. $badge_css .' {';
				if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $widthContBadge . ';';
				}
				if ( isset( $badge->heightBadge ) ) {
					$dynamic_styles .= ' height: ' . $heightContBadge . ';';
				}
				if ( isset( $badge->badgePositionTop ) ) {
						$dynamic_styles .= ' inset: ' . $insetProperty . ';';
				}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .' {';
			$dynamic_styles .= ' margin: 0;';
			$dynamic_styles .= ' padding: 0;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' top: 0px;';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' border-radius: 0;';
			$dynamic_styles .= ' box-sizing: border-box;';

			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $badge->widthBadge . 'px;';
			}
			if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $badge->widthBadge . 'px;';
			}
			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->lineHeightText ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightText . 'px;';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->zIndex ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}
			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? '0px' : 'auto' ) . ';';
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '0px' ) . ';';
			}

			$transform = '';

			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}
			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}
			if ( ( isset( $badge->badgePositionY ) && $badge->badgePositionY == 'bottom' ) && isset( $badge->badgePositionX ) && $badge->badgePositionX == 'left' ) {
				$transform .= ' rotateZ(270deg) !important';
			} elseif( isset( $badge->badgePositionY ) && $badge->badgePositionY == 'bottom' && isset( $badge->badgePositionX ) && $badge->badgePositionX == 'right' ) {
				$transform .= ' rotateZ(90deg) !important';
			}

			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-inner-span2-'. $badge_css .' {';
				$dynamic_styles .= ' width: 0;';
				$dynamic_styles .= ' height: 0;';
				$dynamic_styles .= ' display: block;';
				$dynamic_styles .= ' z-index: 12;';

				if ( isset( $badge->badgePositionX ) ) {
					$dynamic_styles .= ' border-right: ' . ( $badge->badgePositionX == 'right' ? '' . $badge->widthBadge .'px solid'. $badge->badgeColor . '' : 'none' ) . ';';
					$dynamic_styles .= ' border-left: ' . ( $badge->badgePositionX == 'right' ? '' : '' . $badge->widthBadge .'px solid'. $badge->badgeColor . '' ) . ';';
				}

				if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' border-bottom: ' . $badge->widthBadge . 'px solid transparent;';
				}
				$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-inner-span1-'. $badge_css .' {';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' z-index: 14;';
			$dynamic_styles .= ' top: 4.02px;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' display: block;';

			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' transform: ' . ( $badge->badgePositionX == 'right' ? 'rotate(45deg)' : 'rotate(315deg)' ) . ';';
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? '0px' : 'auto' ) . ';';
				$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? '' : '0px' ) . ';';
			}

			if ( isset( $badge->widthBadge ) ) {
				$dynamic_styles .= ' width: ' . $badge->widthBadge* 1.5 . 'px !important;';
			}
			$dynamic_styles .= '}';
		break;

		case 'badge7':
			$badge_css ='b7';
			$dynamic_styles .= '.asnp-esb-productBadge-'. $badge_css .' {';
				if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $widthContBadge . ';';
				}
				if ( isset( $badge->heightBadge ) ) {
					$dynamic_styles .= ' height: ' . $heightContBadge . ';';
				}
				if ( isset( $badge->badgePositionTop ) ) {
						$dynamic_styles .= ' inset: ' . $insetProperty . ';';
				}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .' {';
			$dynamic_styles .= ' top: 0px;';
			$dynamic_styles .= ' z-index: 99;';
			$dynamic_styles .= ' border-radius: 3px;;';
			$dynamic_styles .= ' text-align: center;';

			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->badgeColor . ';';
			}
			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $badge->widthBadge . 'px;';
			}
			if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $badge->widthBadge . 'px;';
			}
			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->lineHeightText ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightText . 'px;';
			}
			if ( isset( $badge->topLeftRadius ) ) {
				$dynamic_styles .= ' border-top-left-radius: ' . $badge->topLeftRadius . 'px;';
			}
			if ( isset( $badge->topRightRadius ) ) {
				$dynamic_styles .= ' border-top-right-radius: ' . $badge->topRightRadius . 'px;';
			}
			if ( isset( $badge->bottomLeftRadius ) ) {
				$dynamic_styles .= ' border-bottom-left-radius: ' . $badge->bottomLeftRadius . 'px;';
			}
			if ( isset( $badge->bottomRightRadius ) ) {
				$dynamic_styles .= ' border-bottom-right-radius: ' . $badge->bottomRightRadius . 'px;';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->zIndex ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}
			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '0px' ) . ';';
				$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? '0px' : '' ) . ';';
			}

			$transform = '';

			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}

			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}

			if ( isset( $badge->rotationZ ) ) {
				$transform .= ' rotateZ(' . esc_html( $badge->rotationZ ) . 'deg);';
			}

			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-inner-span1-'. $badge_css .' {';
			$dynamic_styles .= ' transform: translateY(-50%);';
			$dynamic_styles .= ' position: relative;';
			$dynamic_styles .= ' line-height: 16px;';
			$dynamic_styles .= ' top: 50%;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= '}';
		break;

		case 'badge8':
			$badge_css ='b8';
			$dynamic_styles .= '.asnp-esb-productBadge-'. $badge_css .' {';
				if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $widthContBadge . ';';
				}
				if ( isset( $badge->heightBadge ) ) {
					$dynamic_styles .= ' height: ' . $heightContBadge . ';';
				}
				if ( isset( $badge->badgePositionTop ) ) {
						$dynamic_styles .= ' inset: ' . $insetProperty . ';';
				}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .' {';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' top: 0px;';
			$dynamic_styles .= ' left: 0px;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' border-radius: 50% !important;';
			$dynamic_styles .= '  z-index: 99;';

			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->badgeColor . ';';
			}
			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $badge->widthBadge . 'px;';
			}
			if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $badge->widthBadge . 'px;';
			}
			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->lineHeightText ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightText . 'px;';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->zIndex ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}
			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '0px' ) . ';';
				$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? '0px' : '' ) . ';';
			}

			$transform = '';

			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}

			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}

			if ( isset( $badge->rotationZ ) ) {
				$transform .= ' rotateZ(' . esc_html( $badge->rotationZ ) . 'deg);';
			}

			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-inner-span1-'. $badge_css .' {';
			$dynamic_styles .= ' transform: translateY(-50%);';
			$dynamic_styles .= ' position: relative;';
			$dynamic_styles .= ' line-height: 16px;';
			$dynamic_styles .= ' top: 50%;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= '}';
		break;

		case 'badge9':
			$badge_css ='b9';
			$dynamic_styles .= '.asnp-esb-productBadge-'. $badge_css .' {';
				if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $widthContBadge . ';';
				}
				if ( isset( $badge->heightBadge ) ) {
					$dynamic_styles .= ' height: ' . $heightContBadge . ';';
				}
				if ( isset( $badge->badgePositionTop ) ) {
						$dynamic_styles .= ' inset: ' . $insetProperty . ';';
				}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .' {';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' top: 0px;';
			$dynamic_styles .= ' left: 0px;';
			$dynamic_styles .= ' transform: translate3d(0, 0, 0);';
			$dynamic_styles .= '  border-top-right-radius: 3px;';
			$dynamic_styles .= '  border-top-left-radius: 3px;';
			$dynamic_styles .= '  text-align: center;';

			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->badgeColor . ';';
			}
			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $badge->widthBadge / 1.66  . 'px !important;';
			}
			if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $badge->widthBadge . 'px;';
			}
			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->lineHeightText ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightText . 'px;';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->zIndex ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}
			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '0px' ) . ';';
				$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? '0px' : '' ) . ';';
			}

			$transform = '';

			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}

			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}

			if ( isset( $badge->rotationZ ) ) {
				$transform .= ' rotateZ(' . esc_html( $badge->rotationZ ) . 'deg);';
			}

			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .'::after {';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' height: 0;';
			$dynamic_styles .= ' width: 0;';
			$dynamic_styles .= ' left: 0;';
			if ( isset( $badge->widthBadge ) ) {
			$dynamic_styles .= ' border-top: ' .   $badge->widthBadge / 4  . 'px solid' .   $badge->badgeColor  . '!important;';
			$dynamic_styles .= ' border-right: ' .   $badge->widthBadge / 2  . 'px solid transparent !important;';
			$dynamic_styles .= ' border-left: ' .   $badge->widthBadge / 2  . 'px solid transparent !important;';
			$dynamic_styles .= ' top: ' .   $badge->widthBadge / 1.66  . 'px !important;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-inner-span1-'. $badge_css .' {';
			$dynamic_styles .= ' transform: translateY(-50%);';
			$dynamic_styles .= ' position: relative;';
			$dynamic_styles .= ' line-height: 16px;';
			$dynamic_styles .= ' top: 50%;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= '}';
		break;

		case 'badge10':
			$badge_css ='b10';
			$dynamic_styles .= '.asnp-esb-productBadge-'. $badge_css .' {';
				if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $widthContBadge . ';';
				}
				if ( isset( $badge->heightBadge ) ) {
					$dynamic_styles .= ' height: ' . $heightContBadge . ';';
				}
				if ( isset( $badge->badgePositionTop ) ) {
						$dynamic_styles .= ' inset: ' . $insetProperty . ';';
				}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge {';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' top: 0px;';
			$dynamic_styles .= ' left: 0px;';
			$dynamic_styles .= ' transform: translate3d(0, 0, 0);';
			$dynamic_styles .= ' border-top-right-radius: 3px;';
			$dynamic_styles .= ' border-top-left-radius: 3px;';
			$dynamic_styles .= ' text-align: center;';

			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->badgeColor . ';';
			}
			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $badge->widthBadge / 1.083  . 'px !important;';
			}
			if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $badge->widthBadge . 'px;';
					$dynamic_styles .= ' border-radius: 3px 3px ' .   $badge->widthBadge / 2.38  . 'px ' .   $badge->widthBadge / 2.38  . 'px !important;';
			}
			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->lineHeightText ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightText . 'px;';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->zIndex ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}

			$transform = '';

			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}

			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}

			if ( isset( $badge->rotationZ ) ) {
				$transform .= ' rotateZ(' . esc_html( $badge->rotationZ ) . 'deg);';
			}

			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-inner-span1-'. $badge_css .' {';
			$dynamic_styles .= ' transform: translateY(-50%);';
			$dynamic_styles .= ' position: relative;';
			$dynamic_styles .= ' line-height: 16px;';
			$dynamic_styles .= ' top: 50%;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= '}';
		break;
		case 'badge11':
			$badge_css ='b11';
			$dynamic_styles .= '.asnp-esb-productBadge-'. $badge_css .' {';
				if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $widthContBadge . ';';
				}
				if ( isset( $badge->heightBadge ) ) {
					$dynamic_styles .= ' height: ' . $heightContBadge . ';';
				}
				if ( isset( $badge->badgePositionTop ) ) {
						$dynamic_styles .= ' inset: ' . $insetProperty . ';';
				}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .' {';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' width: 100%;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' top: 0px;';
			$dynamic_styles .= ' left: 0px;';
			$dynamic_styles .= ' vertical-align: middle;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' text-shadow: none;';
			$dynamic_styles .= ' border-radius: 0px;';

			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->badgeColor . ';';
			}
			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $badge->heightBadge  . 'px ;';
			}
			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->lineHeightText ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightText . 'px;';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->zIndex ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}

			$transform = '';

			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}

			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}

			if ( isset( $badge->rotationZ ) ) {
				$transform .= ' rotateZ(' . esc_html( $badge->rotationZ ) . 'deg);';
			}

			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-inner-span1-'. $badge_css .' {';
			$dynamic_styles .= ' transform: translateY(-50%);';
			$dynamic_styles .= ' position: relative;';
			$dynamic_styles .= ' line-height: 16px;';
			$dynamic_styles .= ' top: 50%;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= '}';
		break;

		case 'badge12':
			$badge_css ='b12';
			$dynamic_styles .= '.asnp-esb-productBadge-'. $badge_css .' {';
			if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $widthContBadge . ';';
			}
			if ( isset( $badge->badgePositionTop ) ) {
						$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .' {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 0px 7px;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' position: relative;';
			$dynamic_styles .= ' font-size: 14px;';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' height:  30px !important;';
			$dynamic_styles .= ' line-height: 30px !important;';
			$dynamic_styles .= ' transform: rotate(-20deg) skew(-20deg, 10deg) !important;';

			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->badgeColor . ';';
			}
			if ( isset( $badge->widthBadge ) ) {
				$dynamic_styles .= ' width: ' . $badge->widthBadge  . 'px ;';
			}
			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->lineHeightText ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightText . 'px;';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->zIndex ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}

			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '12px' ) . ';';
				$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? '12px' : 'auto' ) . ';';
			}

			if ( isset( $badge->badgePositionY ) ) {
				$dynamic_styles .= ' top: ' . ( $badge->badgePositionX == 'bottom' ? 'auto' : '15px' ) . ';';
				$dynamic_styles .= ' bottom: ' . ( $badge->badgePositionX == 'bottom' ? '15px' : '' ) . ';';
			}

			$transform = '';

			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}

			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}

			if ( isset( $badge->rotationZ ) ) {
				$transform .= ' rotateZ(' . esc_html( $badge->rotationZ ) . 'deg);';
			}

			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .'::after {';
			$dynamic_styles .= ' right: -5px;';
			$dynamic_styles .= ' top: -5px;';
			$dynamic_styles .= ' width: 0;';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' height: 17px;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' border-style: solid;';
			$dynamic_styles .= ' border-width: 5px;';
			$dynamic_styles .= ' z-index: -1;';
			$dynamic_styles .= ' transform: translateZ(-10px) !important;';
			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background: ' . $badge->badgeColor . ';';
				$dynamic_styles .= ' border-color: ' . $badge->badgeColor . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .'::before {';
			$dynamic_styles .= ' left: -7px;';
			$dynamic_styles .= ' top: 8px;';
			$dynamic_styles .= ' width: 0;';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' height: 17px;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' border-style: solid;';
			$dynamic_styles .= ' border-width: 5px;';
			$dynamic_styles .= ' z-index: -1;';
			$dynamic_styles .= ' transform: translateZ(-10px) !important;';
			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background: ' . $badge->badgeColor . ';';
				$dynamic_styles .= ' border-color: ' . $badge->badgeColor . ';';
			}

			$dynamic_styles .= '}';

		break;
		case 'badge13':
			$badge_css ='b13';
			$dynamic_styles .= '.asnp-esb-productBadge-'. $badge_css .' {';
				if ( isset( $badge->widthBadge ) ) {
					$dynamic_styles .= ' width: ' . $widthContBadge . ';';
				}
				if ( isset( $badge->heightBadge ) ) {
					$dynamic_styles .= ' height: ' . $heightContBadge . ';';
				}
				if ( isset( $badge->badgePositionTop ) ) {
						$dynamic_styles .= ' inset: ' . $insetProperty . ';';
				}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .' {';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' top: 0px;';
			$dynamic_styles .= ' border-radius: 3px;';

			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background: ' . $badge->badgeColor . ';';
			}
			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $badge->heightBadge * 1.5  . 'px ;';
			}
			if ( isset( $badge->widthBadge ) ) {
				$dynamic_styles .= ' width: ' . $badge->widthBadge  . 'px ;';
			}
			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->lineHeightText ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightText * 1.66 . 'px;';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->zIndex ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}

			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '0px' ) . ';';
				$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? '0px' : '' ) . ';';
			}

			$transform = '';

			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}

			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}

			if ( isset( $badge->rotationZ ) ) {
				$transform .= ' rotateZ(' . esc_html( $badge->rotationZ ) . 'deg);';
			}

			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .'::before {';
			$dynamic_styles .= ' border-left-color: transparent !important;';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' border: 9px solid transparent;';
			$dynamic_styles .= ' border-width: 25px 25px;';
			$dynamic_styles .= ' z-index:-1;';

			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' border-color: ' . $badge->badgeColor . ';';
			}
			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' top: ' . $badge->heightBadge * 1.47 . 'px ;';
			}

			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '0px' ) . ';';
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? '0px' : '0px' ) . ';';
				$dynamic_styles .= ' transform: ' . ( $badge->badgePositionX == 'right' ? 'rotate(270deg)' : 'rotate(270deg)' ) . ';';
			}

			$dynamic_styles .= '}';

		break;

		default:
			$badge_css ='b1';
			$dynamic_styles .= '.asnp-esb-productBadge-'. $badge_css .' {';
			if ( isset( $badge->widthBadge ) ) {
				$dynamic_styles .= ' width: ' . $widthContBadge . ';';
			}
			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $heightContBadge . ';';
			}
			if ( isset( $badge->badgePositionTop ) ) {
				$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .' {';
			if ( isset( $badge->badgeColor ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->badgeColor . ';';
			}
			if ( isset( $badge->heightBadge ) ) {
				$dynamic_styles .= ' height: ' . $badge->heightBadge . 'px;';
			}
			if ( isset( $badge->widthBadge ) ) {
				$dynamic_styles .= ' width: ' . $badge->widthBadge . 'px;';
			}
			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '0px' ) . ';';
			}
			if ( isset( $badge->badgePositionX ) && 'right' === $badge->badgePositionX ) {
				$dynamic_styles .= ' right: 0px;';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			if ( isset( $badge->lineHeightText ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightText . 'px;';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->topLeftRadius ) ) {
				$dynamic_styles .= ' border-top-left-radius: ' . $badge->topLeftRadius . 'px;';
			}
			if ( isset( $badge->topRightRadius ) ) {
				$dynamic_styles .= ' border-top-right-radius: ' . $badge->topRightRadius . 'px;';
			}
			if ( isset( $badge->bottomLeftRadius ) ) {
				$dynamic_styles .= ' border-bottom-left-radius: ' . $badge->bottomLeftRadius . 'px;';
			}
			if ( isset( $badge->bottomRightRadius ) ) {
				$dynamic_styles .= ' border-bottom-right-radius: ' . $badge->bottomRightRadius . 'px;';
			}
			if ( isset( $badge->zIndex ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}

			$transform = '';
			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}
			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}
			if ( isset( $badge->rotationZ ) ) {
				$transform .= ' rotateZ(' . esc_html( $badge->rotationZ ) . 'deg);';
			}
			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}

			$dynamic_styles .= '}';
			break;
	}


	$dynamic_styles = apply_filters( 'asnp_wesb_css_badge_styles', $dynamic_styles, $badge, $hide );

	add_custom_style( $dynamic_styles );

	$class_names = 'asnp-esb-badge-element asnp-esb-productBadge asnp-esb-productBadge-'. $badge_css .' ';
	if ( $hide ) {
		$class_names .= ' asnp-esb-badge-hidden';
	}

	$class_names = apply_filters( 'asnp_wesb_css_badge_class_names', $class_names, $badge, $hide );

	// Css Badge
	$output = '<div class="' . esc_attr( $class_names ) . '"' . ( $hide ? ' style="display: none;"' : '' ) . '>';
	$output .= '<div class="asnp-esb-badge-'. $badge_css .'">';
	$output .= '<span class="asnp-esb-inner-span2-'. $badge_css .'"></span>';
	$output .= '<div class="asnp-esb-inner-span1-'. $badge_css .'">';
	$output .= '<div style="transform: ' . esc_attr( $horizAndvert ) . '">' . esc_html__( $badge->badgeLabel, 'asnp-easy-whatsapp' ) . '</div>';
	$output .= '</div>';
	$output .= '</div>';
	$output .= '</div>';

	$output = apply_filters( 'asnp_wesb_css_badge', $output, $badge, $hide );

	echo $output;
}

function output_timer_badge( $badge, $hide = false ) {
	if ( ! $badge ) {
		return;
	}

	$insetProperty = '';
	if ( ! empty( $badge->badgePositionX ) && ! empty( $badge->badgePositionY ) ) {
		if ( 'top' === $badge->badgePositionY ) {
			if ( 'left' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionTop ) && isset( $badge->badgePositionLeft ) ) {
					$insetProperty = $badge->badgePositionTop . 'px auto auto ' . $badge->badgePositionLeft . 'px';
				}
			} elseif ( 'right' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionTop ) && isset( $badge->badgePositionRight ) ) {
					$insetProperty = $badge->badgePositionTop . 'px ' . $badge->badgePositionRight . 'px auto auto';
				}
			} elseif ( 'center' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionTop ) ) {
					$insetProperty = $badge->badgePositionTop . 'px auto auto 55px';
				}
			}
		} elseif ( 'bottom' === $badge->badgePositionY ) {
			if ( 'left' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionBottom ) && isset( $badge->badgePositionLeft ) ) {
					$insetProperty = 'auto auto ' . $badge->badgePositionBottom . 'px ' . $badge->badgePositionLeft . 'px';
				}
			} elseif ( 'right' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionBottom ) && isset( $badge->badgePositionRight ) ) {
					$insetProperty = 'auto ' . $badge->badgePositionRight . 'px ' . $badge->badgePositionBottom . 'px auto';
				}
			} elseif ( 'center' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionBottom ) ) {
					$insetProperty = 'auto auto ' . $badge->badgePositionBottom . 'px 55px';
				}
			}
		} elseif ( 'center' === $badge->badgePositionY ) {
			if ( 'left' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionLeft ) ) {
					$insetProperty = '70px auto auto ' . $badge->badgePositionLeft . 'px';
				}
			} elseif ( 'right' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionRight ) ) {
					$insetProperty = '70px ' . $badge->badgePositionRight . 'auto auto';
				}
			}
		}
 	}

			$dynamic_styles = '';

			switch ( $badge->badgeTimer ) {
			case 'timer1':

			$dynamic_styles .= '.asnp-esb-productBadgeTimer {';
			if ( isset( $badge->zIndex ) ) {
					$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->badgePositionTop ) ) {
			$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer1 {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' border-radius: 10px;';

			if ( isset( $badge->bgColorTimer ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->bgColorTimer . ';';
			}
			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer2 {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 6px 11px;';
			$dynamic_styles .= ' width: 59px;';
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3 {';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' font-weight: 700;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';

			if ( isset( $badge->fontSizeLabelTimer ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeLabelTimer . 'px;';
			}
			if ( isset( $badge->lineHeightLabelTimer ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightLabelTimer . 'px;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer4 {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;

			case 'timer2':
			$dynamic_styles .= '.asnp-esb-productBadgeTimer {';
			if ( isset( $badge->zIndex ) ) {
					$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->badgePositionTop ) ) {
			$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer1 {';
			$dynamic_styles .= ' display: grid;';
			$dynamic_styles .= ' gap: 5px;';
			$dynamic_styles .= ' grid-template-columns: 1fr 1fr 1fr 1fr;';


			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer2 {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 6px 11px;';
			$dynamic_styles .= ' width: 59px;';
			$dynamic_styles .= ' border-radius: 12px;';

			if ( isset( $badge->bgColorTimer ) ) {
				$dynamic_styles .= ' border: 2px solid ' . $badge->bgColorTimer . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3 {';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' font-weight: 700;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';

			if ( isset( $badge->fontSizeLabelTimer ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeLabelTimer . 'px;';
			}
			if ( isset( $badge->lineHeightLabelTimer ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightLabelTimer . 'px;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer4 {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;

			case 'timer3':
			$dynamic_styles .= '.asnp-esb-productBadgeTimer {';
			if ( isset( $badge->zIndex ) ) {
					$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->badgePositionTop ) ) {
			$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer1 {';
			$dynamic_styles .= ' display: grid;';
			$dynamic_styles .= ' gap: 5px;';
			$dynamic_styles .= ' width: 100px;';
			$dynamic_styles .= ' grid-template-columns: 1fr 1fr 1fr 1fr;';


			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer2 {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 3px 15px;';
			$dynamic_styles .= ' width: 59px;';
			$dynamic_styles .= ' border-radius: 50%;';

			if ( isset( $badge->bgColorTimer ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->bgColorTimer . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3 {';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' font-weight: 700;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';

			if ( isset( $badge->fontSizeLabelTimer ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeLabelTimer . 'px;';
			}
			if ( isset( $badge->lineHeightLabelTimer ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightLabelTimer . 'px;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer4 {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;

			case 'timer4':
			$dynamic_styles .= '.asnp-esb-productBadgeTimer {';
			if ( isset( $badge->zIndex ) ) {
					$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->badgePositionTop ) ) {
			$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer1 {';
			$dynamic_styles .= ' display: grid;';
			$dynamic_styles .= ' gap: 5px;';
			$dynamic_styles .= ' grid-template-columns: 1fr 1fr 1fr 1fr;';


			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer2 {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 3px 13px;';
			$dynamic_styles .= ' width: 59px;';
			$dynamic_styles .= ' border-radius: 50%;';

			if ( isset( $badge->bgColorTimer ) ) {
				$dynamic_styles .= ' border: 2px solid ' . $badge->bgColorTimer . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3 {';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' font-weight: 700;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';

			if ( isset( $badge->fontSizeLabelTimer ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeLabelTimer . 'px;';
			}
			if ( isset( $badge->lineHeightLabelTimer ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightLabelTimer . 'px;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer4 {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;
			case 'timer5':
			$dynamic_styles .= '.asnp-esb-productBadgeTimer {';
			if ( isset( $badge->zIndex ) ) {
					$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->badgePositionTop ) ) {
			$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer1 {';
			$dynamic_styles .= ' display: grid;';
			$dynamic_styles .= ' border-radius: 10px;';
			$dynamic_styles .= ' width: 55px;';

			if ( isset( $badge->bgColorTimer ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->bgColorTimer . ';';
			}

			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer2 {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 6px 13px;';
			$dynamic_styles .= ' width: 55px;';

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3 {';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' font-weight: 700;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';

			if ( isset( $badge->fontSizeLabelTimer ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeLabelTimer . 'px;';
			}
			if ( isset( $badge->lineHeightLabelTimer ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightLabelTimer . 'px;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer4 {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;

			case 'timer6':
			$dynamic_styles .= '.asnp-esb-productBadgeTimer {';
			if ( isset( $badge->zIndex ) ) {
					$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->badgePositionTop ) ) {
			$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer1 {';
			$dynamic_styles .= ' display: grid;';
			$dynamic_styles .= ' gap: 5px;';
			$dynamic_styles .= ' width: 55px;';


			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer2 {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 6px 13px;';
			$dynamic_styles .= ' height: 55px;';
			$dynamic_styles .= ' border-radius: 10px;';

			if ( isset( $badge->bgColorTimer ) ) {
				$dynamic_styles .= ' border: 2px solid ' . $badge->bgColorTimer . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3 {';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' font-weight: 700;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';

			if ( isset( $badge->fontSizeLabelTimer ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeLabelTimer . 'px;';
			}
			if ( isset( $badge->lineHeightLabelTimer ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightLabelTimer . 'px;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer4 {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;
			case 'timer7':
			$dynamic_styles .= '.asnp-esb-productBadgeTimer {';
			if ( isset( $badge->zIndex ) ) {
					$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->badgePositionTop ) ) {
			$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer1 {';
			$dynamic_styles .= ' display: grid;';
			$dynamic_styles .= ' gap: 7px;';
			$dynamic_styles .= ' width: 55px;';


			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer2 {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 7px 19px;';
			$dynamic_styles .= ' border-radius: 50%;';
			$dynamic_styles .= ' height: 55px;';


			if ( isset( $badge->bgColorTimer ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->bgColorTimer . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3 {';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' font-weight: 700;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';

			if ( isset( $badge->fontSizeLabelTimer ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeLabelTimer . 'px;';
			}
			if ( isset( $badge->lineHeightLabelTimer ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightLabelTimer . 'px;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer4 {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;

			case 'timer8':
			$dynamic_styles .= '.asnp-esb-productBadgeTimer {';
			if ( isset( $badge->zIndex ) ) {
					$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}
			if ( isset( $badge->badgePositionTop ) ) {
			$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer1 {';
			$dynamic_styles .= ' display: grid;';
			$dynamic_styles .= ' gap: 7px;';
			$dynamic_styles .= ' width: 55px;';


			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->opacity ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer2 {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 7px 19px;';
			$dynamic_styles .= ' border-radius: 50%;';
			$dynamic_styles .= ' height: 55px;';

			if ( isset( $badge->bgColorTimer ) ) {
				$dynamic_styles .= ' border: 2px solid ' . $badge->bgColorTimer . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3 {';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' font-weight: 700;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';

			if ( isset( $badge->fontSizeLabelTimer ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeLabelTimer . 'px;';
			}
			if ( isset( $badge->lineHeightLabelTimer ) ) {
				$dynamic_styles .= ' line-height: ' . $badge->lineHeightLabelTimer . 'px;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer4 {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;

			default:
			$dynamic_styles .= '.asnp-esb-productBadgeTimer {';
				if ( isset( $badge->zIndex ) ) {
						$dynamic_styles .= ' z-index: ' . $badge->zIndex . ';';
				}
				if ( isset( $badge->opacity ) ) {
					$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
				}
				if ( isset( $badge->badgePositionTop ) ) {
				$dynamic_styles .= ' inset: ' . $insetProperty . ';';
				}
				$dynamic_styles .= '}';

				$dynamic_styles .= '.asnp-esb-timer1 {';
				$dynamic_styles .= ' display: inline-block;';
				$dynamic_styles .= ' border-radius: 10px;';

				if ( isset( $badge->bgColorTimer ) ) {
					$dynamic_styles .= ' background-color: ' . $badge->bgColorTimer . ';';
				}
				if ( isset( $badge->textColor ) ) {
					$dynamic_styles .= ' color: ' . $badge->textColor . ';';
				}
				if ( isset( $badge->opacity ) ) {
					$dynamic_styles .= ' opacity: ' . $badge->opacity . ';';
				}

				$dynamic_styles .= '}';

				$dynamic_styles .= '.asnp-esb-timer2 {';
				$dynamic_styles .= ' display: inline-block;';
				$dynamic_styles .= ' padding: 6px 11px;';
				$dynamic_styles .= ' width: 59px;';
				$dynamic_styles .= '}';

				$dynamic_styles .= '.asnp-esb-timer3 {';
				$dynamic_styles .= ' display: block;';
				$dynamic_styles .= ' font-weight: 700;';
				$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';

				if ( isset( $badge->fontSizeLabelTimer ) ) {
					$dynamic_styles .= ' font-size: ' . $badge->fontSizeLabelTimer . 'px;';
				}
				if ( isset( $badge->lineHeightLabelTimer ) ) {
					$dynamic_styles .= ' line-height: ' . $badge->lineHeightLabelTimer . 'px;';
				}
				$dynamic_styles .= '}';

				$dynamic_styles .= '.asnp-esb-timer4 {';
				$dynamic_styles .= ' font-weight: 400;';
				$dynamic_styles .= ' font-size: 10px;';
				$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
				$dynamic_styles .= '}';

				break;
			}


			$dynamic_styles = apply_filters( 'asnp_wesb_timer_badge_styles', $dynamic_styles, $badge, $hide );

			add_custom_style( $dynamic_styles );

			$class_names = 'asnp-esb-badge-element asnp-esb-productBadgeTimer';

			if ( $hide ) {
				$timer_position = get_plugin()->settings->get_setting( 'timerPosition', 'outOfImage' );
				if ( 'outOfImage' === $timer_position ) {
					$class_names .= ' asnp-esb-badge-timer-out-of-image';
					$hide        = false;
				} elseif ( 'onImage' === $timer_position ) {
					$class_names .= ' asnp-esb-badge-hidden asnp-esb-badge-timer-on-image';
				}
			}

			$class_names = apply_filters( 'asnp_wesb_timer_badge_class_names', $class_names, $badge, $hide );

			// Timer Badge
			$output = '<div class="' . esc_attr( $class_names ) . '"' . ( $hide ? ' style="display: none;"' : '' ) . '>';
			$output .= '<div class="asnp-esb-timer1">';
			$output .= '<div class="asnp-esb-timer2">';
			$output .= '<div class="asnp-esb-timer3">3</div>';
			$output .= '<div class="asnp-esb-timer4">' . esc_html__( $badge->labelDayTimer, 'asnp-easy-whatsapp' ) . '</div>';
			$output .= '</div>';
			$output .= '<div class="asnp-esb-timer2">';
			$output .= '<div class="asnp-esb-timer3">15</div>';
			$output .= '<div class="asnp-esb-timer4">' . esc_html__( $badge->labelHoursTimer, 'asnp-easy-whatsapp' ) . '</div>';
			$output .= '</div>';
			$output .= '<div class="asnp-esb-timer2">';
			$output .= '<div class="asnp-esb-timer3">20</div>';
			$output .= '<div class="asnp-esb-timer4">' . esc_html__( $badge->labelMinTimer, 'asnp-easy-whatsapp' ) . '</div>';
			$output .= '</div>';
			$output .= '<div class="asnp-esb-timer2">';
			$output .= '<div class="asnp-esb-timer3">15</div>';
			$output .= '<div class="asnp-esb-timer4">' . esc_html__( $badge->labelSecTimer, 'asnp-easy-whatsapp' ) . '</div>';
			$output .= '</div>';
			$output .= '</div>';
			$output .= '</div>';

			$output = apply_filters( 'asnp_wesb_timer_badge', $output, $badge, $hide );

			echo $output;
}

function output_image_badge( $badge, $hide = false ) {
	if ( ! $badge ) {
		return;
	}

	$insetProperty = '';
	if ( ! empty( $badge->badgePositionX ) && ! empty( $badge->badgePositionY ) ) {
		if ( 'top' === $badge->badgePositionY ) {
			if ( 'left' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionTop ) && isset( $badge->badgePositionLeft ) ) {
					$insetProperty = $badge->badgePositionTop . 'px auto auto ' . $badge->badgePositionLeft . 'px';
				}
			} elseif ( 'right' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionTop ) && isset( $badge->badgePositionRight ) ) {
					$insetProperty = $badge->badgePositionTop . 'px ' . $badge->badgePositionRight . 'px auto auto';
				}
			} elseif ( 'center' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionTop ) ) {
					$insetProperty = $badge->badgePositionTop . 'px auto auto 55px';
				}
			}
		} elseif ( 'bottom' === $badge->badgePositionY ) {
			if ( 'left' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionBottom ) && isset( $badge->badgePositionLeft ) ) {
					$insetProperty = 'auto auto ' . $badge->badgePositionBottom . 'px ' . $badge->badgePositionLeft . 'px';
				}
			} elseif ( 'right' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionBottom ) && isset( $badge->badgePositionRight ) ) {
					$insetProperty = 'auto ' . $badge->badgePositionRight . 'px ' . $badge->badgePositionBottom . 'px auto';
				}
			} elseif ( 'center' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionBottom ) ) {
					$insetProperty = 'auto auto ' . $badge->badgePositionBottom . 'px 55px';
				}
			}
		}
 	}

	 $dynamic_styles = '';

	$dynamic_styles = '.asnp-esb-imgBadge {';
	if ( isset( $badge->widthBadgeImg ) ) {
		$dynamic_styles .= ' height: ' . $badge->widthBadgeImg . 'px;';
	}
	if ( isset( $badge->widthBadgeImg ) ) {
		$dynamic_styles .= ' width: ' . $badge->widthBadgeImg . 'px;';
	}
	if ( isset( $badge->badgePositionTop ) ) {
		$dynamic_styles .= ' inset: ' . $insetProperty . ';';
	}
	if ( isset( $badge->zIndexImg ) ) {
		$dynamic_styles .= ' z-index: ' . $badge->zIndexImg . ';';
	}
	if ( isset( $badge->opacityImg ) ) {
		$dynamic_styles .= ' opacity: ' . $badge->opacityImg . ';';
	}

	$dynamic_styles .= '}';

	$dynamic_styles .= '.asnp-esb-badgeImg {';

	
	$transform = '';
	if ( isset( $badge->rotationXImg ) ) {
		$transform .= ' rotateX(' . esc_html( $badge->rotationXImg ) . 'deg)';
	}
	if ( isset( $badge->rotationYImg ) ) {
		$transform .= ' rotateY(' . esc_html( $badge->rotationYImg ) . 'deg) ';
	}
	if ( isset( $badge->rotationZImg ) ) {
		$transform .= ' rotateZ(' . esc_html( $badge->rotationZImg ) . 'deg);';
	}
	if ( ! empty( $transform ) ) {
		$dynamic_styles .= ' transform:' . $transform;
	}

	$dynamic_styles .= '}';

	$dynamic_styles = apply_filters( 'asnp_wesb_image_badge_styles', $dynamic_styles, $badge, $hide );

	add_custom_style( $dynamic_styles );

	$image = '';
	if ( ! empty( $badge->badgeImage ) ) {
		$image = '<img src="' . esc_url( ASNP_EWHATSAPP_PLUGIN_URL ) . 'assets/images/' . esc_attr( $badge->badgeImage ) . '.png" />';
	}

	$class_names = 'asnp-esb-badge-element asnp-esb-imgBadge';
	if ( $hide ) {
		$class_names .= ' asnp-esb-badge-hidden';
	}

	$class_names = apply_filters( 'asnp_wesb_image_badge_class_names', $class_names, $badge, $hide );

	// Image Badge
	$output = '<div class="' . esc_attr( $class_names ) . '"' . ( $hide ? ' style="display: none;"' : '' ) . '>';
	$output .= '<span class="asnp-esb-badgeImg">';
	$output .= $image;
	$output .= '</span>';
	$output .= '</div>';

	$output = apply_filters( 'asnp_wesb_image_badge', $output, $badge, $hide );

	echo $output;
}

function output_image_adv_badge( $badge, $hide = false ) {
	if ( ! $badge ) {
		return;
	}


	$insetProperty = '';
	if ( ! empty( $badge->badgePositionX ) && ! empty( $badge->badgePositionY ) ) {
		if ( 'top' === $badge->badgePositionY ) {
			if ( 'left' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionTop ) && isset( $badge->badgePositionLeft ) ) {
					$insetProperty = $badge->badgePositionTop . 'px auto auto ' . $badge->badgePositionLeft . 'px';
				}
			} elseif ( 'right' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionTop ) && isset( $badge->badgePositionRight ) ) {
					$insetProperty = $badge->badgePositionTop . 'px ' . $badge->badgePositionRight . 'px auto auto';
				}
			} elseif ( 'center' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionTop ) ) {
					$insetProperty = $badge->badgePositionTop . 'px auto auto 55px';
				}
			}
		} elseif ( 'bottom' === $badge->badgePositionY ) {
			if ( 'left' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionBottom ) && isset( $badge->badgePositionLeft ) ) {
					$insetProperty = 'auto auto ' . $badge->badgePositionBottom . 'px ' . $badge->badgePositionLeft . 'px';
				}
			} elseif ( 'right' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionBottom ) && isset( $badge->badgePositionRight ) ) {
					$insetProperty = 'auto ' . $badge->badgePositionRight . 'px ' . $badge->badgePositionBottom . 'px auto';
				}
			} elseif ( 'center' === $badge->badgePositionX ) {
				if ( isset( $badge->badgePositionBottom ) ) {
					$insetProperty = 'auto auto ' . $badge->badgePositionBottom . 'px 55px';
				}
			}
		}
 	}

	 $horizAndvert = '';
	 if ( ! empty( $badge->horizontal ) ) {
		 if ( ! empty( $badge->vertical ) ) {
			 $horizAndvert = 'scaleX(-1) scaleY(-1)';
		 } else {
			 $horizAndvert = 'scaleX(-1)';
		 }
	 } elseif ( ! empty( $badge->vertical ) ) {
		 $horizAndvert = 'scaleY(-1)';
	 }

	 if (
		 isset( $badge->badgeStyles ) && $badge->badgeStyles == 'badge5' &&
		 isset( $badge->badgePositionY ) && $badge->badgePositionY == 'bottom' &&
		 (
			 ( isset( $badge->badgePositionX ) && $badge->badgePositionX == 'left' ) ||
			 ( isset( $badge->badgePositionX ) && $badge->badgePositionX == 'right' )
		 )
	 ) {
		 $horizAndvert = 'scaleX(-1) scaleY(-1)';
	 } elseif (
		 isset( $badge->badgeStyles ) && $badge->badgeStyles == 'badge6' &&
		 isset( $badge->badgePositionY ) && $badge->badgePositionY == 'bottom' &&
		 (
			 ( isset( $badge->badgePositionX ) && $badge->badgePositionX == 'left' ) ||
			 ( isset( $badge->badgePositionX ) && $badge->badgePositionX == 'right' )
		 )
	 ) {
		 $horizAndvert = 'scaleX(-1) scaleY(-1)';
	 }

	 $dynamic_styles = '';
	 $svgAdv='';

	 switch ( $badge->badgeAdv ) {
		case 'bdgAdvanced1':
			$dynamic_styles .= '.asnp-esb-advBadge {';
			if ( isset( $badge->widthBadgeImg ) ) {
				$dynamic_styles .= ' width: ' . $badge->widthBadgeImg . ';';
			}
			if ( isset( $badge->badgePositionTop ) ) {
					$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			$dynamic_styles .= ' height: 90px;';

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-advbadgeCont {';
			$dynamic_styles .= ' height: 90px;';
			$dynamic_styles .= ' position: absolute;';


			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
			}
			if ( isset( $badge->opacityImg ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacityImg . ';';
			}
			if ( isset( $badge->zIndexImg ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndexImg . ';';
			}

			$transform = '';
			if ( isset( $badge->rotationX ) ) {
				$transform .= ' rotateX(' . esc_html( $badge->rotationX ) . 'deg)';
			}
			if ( isset( $badge->rotationY ) ) {
				$transform .= ' rotateY(' . esc_html( $badge->rotationY ) . 'deg) ';
			}
			if ( isset( $badge->rotationZ ) ) {
				$transform .= ' rotateZ(' . esc_html( $badge->rotationZ ) . 'deg);';
			}
			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-advbadge1 {';
			$dynamic_styles .= ' position: relative;';
			$dynamic_styles .= ' letter-spacing: 0.52px;';
			$dynamic_styles .= ' display: flex;';
			$dynamic_styles .= ' justify-content: center;';
			$dynamic_styles .= ' align-items: center;';
			$dynamic_styles .= ' text-decoration: none;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' font-size: 14px;';

			if ( isset( $badge->opacityImg ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacityImg . ';';
			}
			if ( isset( $badge->badgePositionY ) ) {
				$dynamic_styles .= ' top: ' . ( $badge->badgePositionY == 'bottom' ? '36px' : '23px' ) . ';';
			}
			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? '5px' : '13px' ) . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-advbadge2 {';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' padding: 0px 5px;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' width: 72px;';
			$dynamic_styles .= ' margin-top:10px;';
			$dynamic_styles .= ' line-height: 20px;';
			$dynamic_styles .= ' text-transform: uppercase;';

			if ( isset( $badge->secondBg ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->secondBg . ';';
			}
			$dynamic_styles .= '}';
			$dynamic_styles .= '.asnp-esb-advbadge2::after {';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' width: 0;';
			$dynamic_styles .= ' height: 0;';
			$dynamic_styles .= ' top: 5px;';
			$dynamic_styles .= ' right: -11px;';
			$dynamic_styles .= ' border-width: 10px 6px;';
			$dynamic_styles .= ' border-style: solid;';

			if ( isset( $badge->secondBg ) ) {
				$dynamic_styles .= ' border-color: ' . $badge->secondBg . ' transparent ' . $badge->secondBg . ' ' . $badge->secondBg . ' !important;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-advbadge2::before {';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' width: 0;';
			$dynamic_styles .= ' height: 0;';
			$dynamic_styles .= ' top: 5px;';
			$dynamic_styles .= ' z-index: -1;';
			$dynamic_styles .= ' border-width: 10px 6px;';
			$dynamic_styles .= ' border-style: solid;';
			$dynamic_styles .= ' left: -11px;';

			if ( isset( $badge->secondBg ) ) {
				$dynamic_styles .= ' border-color: ' . $badge->secondBg . '  ' . $badge->secondBg . ' ' . $badge->secondBg . ' transparent !important;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-advbadge3 {';
			$dynamic_styles .= ' font-weight: 700;';
			$dynamic_styles .= ' transform: ' . $horizAndvert . 'px;';

			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			$dynamic_styles .= '}';

			$svgAdv.='
			<svg
			class="asnp-esb-svg1"
			width="94"
			height="101"
			viewBox="0 0 94 101"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			>
			<path
			d="M85.0357 7.89259C63.8562 14.5349 46.91 0 46.91 0C46.91 0 29.9638 14.5349 8.78433 7.89259C-2.00019 18.2728 -12.0121 76.002 46.91 100.09C105.826 76.002 95.8137 18.2728 85.0357 7.89259Z"
			fill="' . $badge->mainBg . '" />
			<path
			d="M46.91 93.5128C19.4455 81.4656 10.4011 62.1704 7.68057 47.9156C4.92114 33.4523 7.95327 20.5845 11.1672 14.7628C14.1019 15.3749 17.0886 15.6875 20.0818 15.6875C20.0818 15.6875 20.0818 15.6875 20.0883 15.6875C32.1194 15.6875 41.8067 10.7318 46.91 7.44326C52.0133 10.7318 61.7006 15.6875 73.7317 15.6875C76.7249 15.6875 79.7116 15.3749 82.6463 14.7628C85.8603 20.5845 88.8924 33.4458 86.1329 47.9156C83.419 62.1704 74.3745 81.4721 46.91 93.5128Z"
			stroke="#EBEBEB"
			strokeWidth="4"
			strokeMiterlimit="10"
			/>
			</svg>';
			break;

		}

	$dynamic_styles = apply_filters( 'asnp_wesb_advanced_badge_styles', $dynamic_styles, $badge, $hide );

	add_custom_style( $dynamic_styles );



	$class_names = 'asnp-esb-badge-element asnp-esb-advBadge';
	if ( $hide ) {
		$class_names .= ' asnp-esb-badge-hidden';
	}

	$class_names = apply_filters( 'asnp_wesb_advanced_badge_class_names', $class_names, $badge, $hide );

	// Advanced Badge
	$output = '<div class="' . esc_attr( $class_names ) . '"' . ( $hide ? ' style="display: none;"' : '' ) . '>';
	$output .= '<span class="asnp-esb-advbadgeCont">';
	$output .= '<div class="asnp-esb-advbadge1">';
	$output .= $svgAdv;
	$output .= '<div class="asnp-esb-advbadge2">';
	$output .= '<div class="asnp-esb-advbadge3">' . esc_html__( $badge->badgeLabel, 'asnp-easy-whatsapp' ) . '</div>';
	$output .= '</div>';
	$output .= '</div>';
	$output .= '</span>';
	$output .= '</div>';

	$output = apply_filters( 'asnp_wesb_advanced_badge', $output, $badge, $hide );

	echo $output;
}
