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
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' text-shadow: none;';
			$dynamic_styles .= ' font-weight: 600;';
			
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
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' text-shadow: none;';
			$dynamic_styles .= ' font-weight: 600;';
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
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' text-shadow: none;';
			$dynamic_styles .= ' font-weight: 600;';
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
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' text-shadow: none;';
			$dynamic_styles .= ' font-weight: 600;';
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
			$dynamic_styles .= ' border-left: ' . ( $badge->badgePositionX == 'right' ? 'none' : '15px solid' . $badge->badgeColor . '' ) . ';';
			$dynamic_styles .= ' border-right: ' . ( $badge->badgePositionX == 'right' ? '15px solid' . $badge->badgeColor . '' : 'none' ) . ';';
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
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' text-shadow: none;';
			$dynamic_styles .= ' font-weight: 600;';
			$dynamic_styles .= ' display: block;';
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
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' text-shadow: none;';
			$dynamic_styles .= ' font-weight: 600;';
			$dynamic_styles .= ' margin: 0;';
			$dynamic_styles .= ' padding: 0;';
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
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' text-shadow: none;';
			$dynamic_styles .= ' font-weight: 600;';
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
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' text-shadow: none;';
			$dynamic_styles .= ' font-weight: 600;';
			$dynamic_styles .= ' top: 0px;';
			$dynamic_styles .= ' left: 0px;';
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
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' text-shadow: none;';
			$dynamic_styles .= ' font-weight: 600;';
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

			$dynamic_styles .= '.asnp-esb-badge-'. $badge_css .' {';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' text-shadow: none;';
			$dynamic_styles .= ' font-weight: 600;';
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
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' text-shadow: none;';
			$dynamic_styles .= ' font-weight: 600;';
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
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' text-align: center;';
			$dynamic_styles .= ' text-shadow: none;';
			$dynamic_styles .= ' font-weight: 600;';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 0px 7px;';
			$dynamic_styles .= ' text-align: center;';
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
			$dynamic_styles .= ' text-shadow: none;';
			$dynamic_styles .= ' font-weight: 600;';
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
	$output .= '<div style="transform: ' . esc_attr( $horizAndvert ) . '">' . esc_html__( $badge->badgeLabel, 'asnp-easy-sale-badge' ) . '</div>';
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
			$timer_uniq = '';

			switch ( $badge->badgeTimer ) {
			case 'timer1':
			$timer_uniq = 't1';

			$dynamic_styles .= '.asnp-esb-productBadgeTimer-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer1-'. $timer_uniq .' {';
				$dynamic_styles .= ' display: grid;';
				$dynamic_styles .= ' gap: 5px;';
				$dynamic_styles .= ' grid-template-columns: 1fr 1fr 1fr 1fr;';
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

			$dynamic_styles .= '.asnp-esb-timer2-'. $timer_uniq .' {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 6px 11px;';
			$dynamic_styles .= ' width: 56px;';
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer4-'. $timer_uniq .' {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;

			case 'timer2':
			$timer_uniq = 't2';

			$dynamic_styles .= '.asnp-esb-productBadgeTimer-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer1-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer2-'. $timer_uniq .' {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 6px 11px;';
			$dynamic_styles .= ' width: 57px;';
			$dynamic_styles .= ' border-radius: 12px;';

			if ( isset( $badge->bgColorTimer ) ) {
				$dynamic_styles .= ' border: 2px solid ' . $badge->bgColorTimer . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer4-'. $timer_uniq .' {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;

			case 'timer3':
			$timer_uniq = 't3';
			$dynamic_styles .= '.asnp-esb-productBadgeTimer-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer1-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer2-'. $timer_uniq .' {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 3px 14px;';
			$dynamic_styles .= ' width: 56px;';
			$dynamic_styles .= ' border-radius: 50%;';

			if ( isset( $badge->bgColorTimer ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->bgColorTimer . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer4-'. $timer_uniq .' {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;

			case 'timer4':
			$timer_uniq = 't4';
			$dynamic_styles .= '.asnp-esb-productBadgeTimer-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer1-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer2-'. $timer_uniq .' {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 3px 13px;';
			$dynamic_styles .= ' width: 56px;';
			$dynamic_styles .= ' border-radius: 50%;';

			if ( isset( $badge->bgColorTimer ) ) {
				$dynamic_styles .= ' border: 2px solid ' . $badge->bgColorTimer . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer4-'. $timer_uniq .' {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;
			case 'timer5':
			$timer_uniq = 't5';
			$dynamic_styles .= '.asnp-esb-productBadgeTimer-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer1-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer2-'. $timer_uniq .' {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 6px 13px;';
			$dynamic_styles .= ' width: 55px;';

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer4-'. $timer_uniq .' {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;

			case 'timer6':
			$timer_uniq = 't6';
			$dynamic_styles .= '.asnp-esb-productBadgeTimer-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer1-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer2-'. $timer_uniq .' {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 6px 13px;';
			$dynamic_styles .= ' height: 55px;';
			$dynamic_styles .= ' border-radius: 10px;';

			if ( isset( $badge->bgColorTimer ) ) {
				$dynamic_styles .= ' border: 2px solid ' . $badge->bgColorTimer . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer4-'. $timer_uniq .' {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;
			case 'timer7':
			$timer_uniq = 't7';
			$dynamic_styles .= '.asnp-esb-productBadgeTimer-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer1-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer2-'. $timer_uniq .' {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 5px 13px;';
			$dynamic_styles .= ' border-radius: 50%;';
			$dynamic_styles .= ' height: 52px;';


			if ( isset( $badge->bgColorTimer ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->bgColorTimer . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer4-'. $timer_uniq .' {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;

			case 'timer8':
			$timer_uniq = 't8';
			$dynamic_styles .= '.asnp-esb-productBadgeTimer-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer1-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer2-'. $timer_uniq .' {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 2px 13px;';
			$dynamic_styles .= ' border-radius: 50%;';
			$dynamic_styles .= ' height: 52px;';

			if ( isset( $badge->bgColorTimer ) ) {
				$dynamic_styles .= ' border: 2px solid ' . $badge->bgColorTimer . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer4-'. $timer_uniq .' {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

			break;

			default:
			$timer_uniq = 't1';
			$dynamic_styles .= '.asnp-esb-productBadgeTimer-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer1-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer2-'. $timer_uniq .' {';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 6px 11px;';
			$dynamic_styles .= ' width: 56px;';
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-timer3-'. $timer_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-timer4-'. $timer_uniq .' {';
			$dynamic_styles .= ' font-weight: 400;';
			$dynamic_styles .= ' font-size: 10px;';
			$dynamic_styles .= ' text-shadow: 0px 2px 1px rgba(0,0,0,0.15);';
			$dynamic_styles .= '}';

				break;
			}


			$dynamic_styles = apply_filters( 'asnp_wesb_timer_badge_styles', $dynamic_styles, $badge, $hide );

			add_custom_style( $dynamic_styles );

			$class_names = 'asnp-esb-badge-element asnp-esb-productBadgeTimer asnp-esb-productBadgeTimer-'. $timer_uniq .'';

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
			$output .= '<div class="asnp-esb-timer1-'. $timer_uniq .'">';
			$output .= '<div class="asnp-esb-timer2-'. $timer_uniq .'">';
			$output .= '<div class="asnp-esb-timer3-'. $timer_uniq .'">3</div>';
			$output .= '<div class="asnp-esb-timer4-'. $timer_uniq .'">' . esc_html__( $badge->labelDayTimer, 'asnp-easy-sale-badge' ) . '</div>';
			$output .= '</div>';
			$output .= '<div class="asnp-esb-timer2-'. $timer_uniq .'">';
			$output .= '<div class="asnp-esb-timer3-'. $timer_uniq .'">15</div>';
			$output .= '<div class="asnp-esb-timer4-'. $timer_uniq .'">' . esc_html__( $badge->labelHoursTimer, 'asnp-easy-sale-badge' ) . '</div>';
			$output .= '</div>';
			$output .= '<div class="asnp-esb-timer2-'. $timer_uniq .'">';
			$output .= '<div class="asnp-esb-timer3-'. $timer_uniq .'">20</div>';
			$output .= '<div class="asnp-esb-timer4-'. $timer_uniq .'">' . esc_html__( $badge->labelMinTimer, 'asnp-easy-sale-badge' ) . '</div>';
			$output .= '</div>';
			$output .= '<div class="asnp-esb-timer2-'. $timer_uniq .'">';
			$output .= '<div class="asnp-esb-timer3-'. $timer_uniq .'">15</div>';
			$output .= '<div class="asnp-esb-timer4-'. $timer_uniq .'">' . esc_html__( $badge->labelSecTimer, 'asnp-easy-sale-badge' ) . '</div>';
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
	 $txt_uniq=$badge->badgeImage;
	 $parts = explode('/', $txt_uniq);
	 $fileImageName = end($parts);
	 $fileImageName2 = pathinfo($fileImageName, PATHINFO_FILENAME);
	 $img_uniq = $fileImageName2;

	$dynamic_styles = '.asnp-esb-imgBadge-'. $img_uniq .' {';
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

	$dynamic_styles .= '.asnp-esb-badgeImg-'. $img_uniq .' {';

	
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
		$image = '<img src="' . esc_attr( $badge->badgeImage ) . '" />';
	}

	$class_names = 'asnp-esb-badge-element asnp-esb-imgBadge asnp-esb-imgBadge-'. $img_uniq .' ';
	if ( $hide ) {
		$class_names .= ' asnp-esb-badge-hidden';
	}

	$class_names = apply_filters( 'asnp_wesb_image_badge_class_names', $class_names, $badge, $hide );

	// Image Badge
	$output = '<div class="' . esc_attr( $class_names ) . '"' . ( $hide ? ' style="display: none;"' : '' ) . '>';
	$output .= '<span class="asnp-esb-badgeImg-'. $img_uniq .'">';
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
	 $adv_uniq='';

	 switch ( $badge->badgeAdv ) {
		 case 'bdgAdvanced1':
			$adv_uniq='a1';
			$dynamic_styles .= '.asnp-esb-advBadge-'. $adv_uniq .' {';
			if ( isset( $badge->badgePositionTop ) ) {
					$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			if ( isset( $badge->opacityImg ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacityImg . ';';
			}
			if ( isset( $badge->zIndexImg ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndexImg . ';';
			}
			$dynamic_styles .= ' height: 90px;';
			$dynamic_styles .= ' width: 90px;';


			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-advbadgeCont-'. $adv_uniq .' {';
			$dynamic_styles .= ' height: 90px;';


			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
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

			$dynamic_styles .= '.asnp-esb-advbadge1-'. $adv_uniq .' {';
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

			$dynamic_styles .= '.asnp-esb-advbadge2-'. $adv_uniq .' {';
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
			$dynamic_styles .= '.asnp-esb-advbadge2-'. $adv_uniq .'::after {';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' width: 0;';
			$dynamic_styles .= ' height: 0;';
			$dynamic_styles .= ' top: 5px;';
			$dynamic_styles .= ' right: -3px;';
			$dynamic_styles .= ' border-width: 10px 6px;';
			$dynamic_styles .= ' border-style: solid;';

			if ( isset( $badge->secondBg ) ) {
				$dynamic_styles .= ' border-color: ' . $badge->secondBg . ' transparent ' . $badge->secondBg . ' ' . $badge->secondBg . ' !important;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-advbadge2-'. $adv_uniq .'::before {';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' width: 0;';
			$dynamic_styles .= ' height: 0;';
			$dynamic_styles .= ' top: 5px;';
			$dynamic_styles .= ' z-index: -1;';
			$dynamic_styles .= ' border-width: 10px 6px;';
			$dynamic_styles .= ' border-style: solid;';
			$dynamic_styles .= ' left: -3px;';

			if ( isset( $badge->secondBg ) ) {
				$dynamic_styles .= ' border-color: ' . $badge->secondBg . '  ' . $badge->secondBg . ' ' . $badge->secondBg . ' transparent !important;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-advbadge3-'. $adv_uniq .' {';
			$dynamic_styles .= ' font-weight: 700;';
			$dynamic_styles .= ' transform: ' . $horizAndvert . ';';

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
		case 'bdgAdvanced2':
			$adv_uniq='a2';
			$dynamic_styles .= '.asnp-esb-advBadge-'. $adv_uniq .' {';
			if ( isset( $badge->badgePositionTop ) ) {
					$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			if ( isset( $badge->opacityImg ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacityImg . ';';
			}
			if ( isset( $badge->zIndexImg ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndexImg . ';';
			}
			$dynamic_styles .= ' height: 90px;';
			$dynamic_styles .= ' width: 90px;';
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-advbadgeCont-'. $adv_uniq .' {';
			$dynamic_styles .= ' height: 90px;';


			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
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

			$dynamic_styles .= '.asnp-esb-advbadge1-'. $adv_uniq .' {';
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
				$dynamic_styles .= ' top: ' . ( $badge->badgePositionY == 'bottom' ? '36px' : '28px' ) . ';';
			}
			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? '5px' : '13px' ) . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-advbadge2-'. $adv_uniq .' {';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' padding: 0px 5px;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' width: 80px;';
			$dynamic_styles .= ' height: 22px;';
			$dynamic_styles .= ' margin-top:5px;';
			$dynamic_styles .= ' line-height: 20px;';
			$dynamic_styles .= ' text-transform: uppercase;';

			if ( isset( $badge->secondBg ) ) {
				$dynamic_styles .= ' background-color: ' . $badge->secondBg . ';';
			}
			$dynamic_styles .= '}';
			$dynamic_styles .= '.asnp-esb-advbadge2-'. $adv_uniq .'::after {';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' width: 0;';
			$dynamic_styles .= ' height: 0;';
			$dynamic_styles .= ' top: 0px;';
			$dynamic_styles .= ' right: -7px;';
			$dynamic_styles .= ' border-width: 10px 6px;';
			$dynamic_styles .= ' border-style: solid;';

			if ( isset( $badge->secondBg ) ) {
				$dynamic_styles .= ' border-color: ' . $badge->secondBg . ' transparent ' . $badge->secondBg . ' ' . $badge->secondBg . ' !important;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-advbadge2-'. $adv_uniq .'::before {';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' position: absolute;';
			$dynamic_styles .= ' width: 0;';
			$dynamic_styles .= ' height: 0;';
			$dynamic_styles .= ' top: 0px;';
			$dynamic_styles .= ' z-index: -1;';
			$dynamic_styles .= ' border-width: 10px 6px;';
			$dynamic_styles .= ' border-style: solid;';
			$dynamic_styles .= ' left: -7px;';

			if ( isset( $badge->secondBg ) ) {
				$dynamic_styles .= ' border-color: ' . $badge->secondBg . '  ' . $badge->secondBg . ' ' . $badge->secondBg . ' transparent !important;';
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-advbadge3-'. $adv_uniq .' {';
			$dynamic_styles .= ' font-weight: 700;';
			$dynamic_styles .= ' transform: ' . $horizAndvert . ';';

			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			$dynamic_styles .= '}';

			$svgAdv.='
			<svg
			class="asnp-esb-svg1"
			width="135"
			height="142"
			viewBox="0 0 135 142"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			>
			<path
				d="M67.5 141.44C58.3874 141.44 49.548 139.57 41.2232 135.881C33.1853 132.317 25.9671 127.222 19.7691 120.728C13.571 114.234 8.70276 106.672 5.30544 98.2503C1.78517 89.5284 0 80.2673 0 70.72C0 61.1726 1.78517 51.9116 5.30544 43.1897C8.70731 34.7683 13.571 27.2059 19.7691 20.7121C25.9671 14.2184 33.1853 9.11792 41.2232 5.55855C49.548 1.87034 58.3874 0 67.5 0C76.6126 0 85.452 1.87034 93.7768 5.55855C101.815 9.1227 109.033 14.2184 115.231 20.7121C121.429 27.2059 126.297 34.7683 129.695 43.1897C133.215 51.9116 135 61.1726 135 70.72C135 80.2673 133.215 89.5284 129.695 98.2503C126.293 106.672 121.429 114.234 115.231 120.728C109.033 127.222 101.815 132.322 93.7768 135.881C85.452 139.57 76.6126 141.44 67.5 141.44Z"
				fill="' . $badge->mainBg . '" />
				/>
			<path
				d="M68.347 9.53781C69.0028 10.1151 69.0848 11.1362 68.5383 11.8233C67.9873 12.5103 67.0127 12.5962 66.3569 12.0236C65.7011 11.4463 65.6192 10.4253 66.1656 9.7382C66.7167 9.05113 67.6912 8.96049 68.347 9.53781Z"
				fill="white"
			/>
			<path
				d="M68.347 129.412C69.0028 129.989 69.0848 131.01 68.5383 131.697C67.9873 132.384 67.0127 132.47 66.3569 131.897C65.7011 131.32 65.6192 130.299 66.1656 129.612C66.7167 128.925 67.6912 128.839 68.347 129.412Z"
				fill="white"
			/>
			<path
				d="M11.1392 67.8524C11.7949 68.4298 11.8769 69.4508 11.3304 70.1379C10.7794 70.825 9.80483 70.9108 9.14904 70.3383C8.49326 69.761 8.4113 68.7399 8.95778 68.0529C9.50427 67.3658 10.4834 67.2751 11.1392 67.8524Z"
				fill="white"
			/>
			<path
				d="M12.6875 56.8976C13.3433 57.4749 13.4253 58.496 12.8788 59.183C12.3278 59.8701 11.3532 59.956 10.6974 59.3834C10.0416 58.8061 9.95968 57.785 10.5062 57.098C11.0527 56.4109 12.0318 56.3203 12.6875 56.8976Z"
				fill="white"
			/>
			<path
				d="M13.2022 82.2808C13.3843 83.154 12.856 84.0224 12.0226 84.2132C11.1893 84.4041 10.3604 83.8506 10.1783 82.9774C9.9961 82.1043 10.5244 81.2359 11.3578 81.0451C12.1957 80.8542 13.02 81.4077 13.2022 82.2808Z"
				fill="white"
			/>
			<path
				d="M17.9976 96.0794C18.1797 96.9526 17.6515 97.8209 16.8181 98.0118C15.9847 98.2026 15.1558 97.6492 14.9737 96.776C14.7915 95.9029 15.3198 95.0345 16.1532 94.8436C16.9911 94.648 17.8154 95.2015 17.9976 96.0794Z"
				fill="white"
			/>
			<path
				d="M26.2313 109.969C26.4134 110.842 25.8852 111.71 25.0518 111.901C24.2184 112.092 23.3895 111.538 23.2074 110.665C23.0252 109.792 23.5535 108.924 24.3869 108.733C25.2203 108.537 26.0491 109.091 26.2313 109.969Z"
				fill="white"
			/>
			<path
				d="M38.0399 120.227C38.2221 121.1 37.6938 121.968 36.8604 122.159C36.027 122.35 35.1982 121.797 35.016 120.923C34.8338 120.05 35.3621 119.182 36.1955 118.991C37.0335 118.796 37.8577 119.349 38.0399 120.227Z"
				fill="white"
			/>
			<path
				d="M52.3123 127.274C52.4944 128.147 51.9661 129.016 51.1328 129.206C50.2994 129.397 49.4705 128.844 49.2884 127.971C49.1062 127.098 49.6345 126.229 50.4679 126.038C51.3013 125.847 52.1301 126.401 52.3123 127.274Z"
				fill="white"
			/>
			<path
				d="M15.9346 45.3129C16.5904 45.8902 16.6723 46.9113 16.1258 47.5984C15.5748 48.2854 14.6002 48.3713 13.9445 47.7987C13.2887 47.2214 13.2067 46.2004 13.7532 45.5133C14.2997 44.8262 15.2788 44.7356 15.9346 45.3129Z"
				fill="white"
			/>
			<path
				d="M21.5861 34.8399C22.2419 35.4173 22.3239 36.4383 21.7774 37.1254C21.2264 37.8125 20.2518 37.8983 19.596 37.3258C18.9402 36.7485 18.8583 35.7274 19.4048 35.0403C19.9512 34.3485 20.9303 34.2626 21.5861 34.8399Z"
				fill="white"
			/>
			<path
				d="M28.4218 26.3089C29.0775 26.8862 29.1595 27.9072 28.613 28.5943C28.062 29.2814 27.0874 29.3673 26.4316 28.7947C25.7759 28.2174 25.6939 27.1963 26.2404 26.5093C26.7914 25.8222 27.7705 25.7315 28.4218 26.3089Z"
				fill="white"
			/>
			<path
				d="M37.5253 18.3885C38.1811 18.9659 38.2631 19.9869 37.7166 20.674C37.1655 21.3611 36.1909 21.447 35.5352 20.8744C34.8794 20.2971 34.7974 19.276 35.3439 18.5889C35.8904 17.9019 36.8695 17.8112 37.5253 18.3885Z"
				fill="white"
			/>
			<path
				d="M47.5897 13.3644C48.2455 13.9417 48.3275 14.9628 47.781 15.6498C47.23 16.3369 46.2554 16.4228 45.5996 15.8502C44.9438 15.2729 44.8619 14.2519 45.4083 13.5648C45.9594 12.8777 46.9385 12.7918 47.5897 13.3644Z"
				fill="white"
			/>
			<path
				d="M57.9684 10.473C58.6242 11.0503 58.7061 12.0714 58.1596 12.7584C57.6086 13.4455 56.634 13.5314 55.9783 12.9588C55.3225 12.3815 55.2405 11.3605 55.787 10.6734C56.338 9.98632 57.3126 9.89566 57.9684 10.473Z"
				fill="white"
			/>
			<path
				d="M123.865 67.8524C123.21 68.4298 123.128 69.4508 123.674 70.1379C124.225 70.825 125.2 70.9108 125.855 70.3383C126.511 69.761 126.593 68.7399 126.047 68.0529C125.496 67.3658 124.517 67.2751 123.865 67.8524Z"
				fill="white"
			/>
			<path
				d="M122.317 56.8976C121.661 57.4749 121.579 58.496 122.126 59.183C122.677 59.8701 123.651 59.956 124.307 59.3834C124.963 58.8061 125.045 57.785 124.498 57.098C123.947 56.4109 122.968 56.3203 122.317 56.8976Z"
				fill="white"
			/>
			<path
				d="M121.798 82.2808C121.616 83.154 122.144 84.0224 122.977 84.2132C123.811 84.4041 124.64 83.8506 124.822 82.9774C125.004 82.1043 124.476 81.2359 123.642 81.0451C122.809 80.8542 121.98 81.4077 121.798 82.2808Z"
				fill="white"
			/>
			<path
				d="M117.002 96.0794C116.82 96.9526 117.349 97.8209 118.182 98.0118C119.015 98.2026 119.844 97.6492 120.026 96.776C120.208 95.9029 119.68 95.0345 118.847 94.8436C118.009 94.648 117.185 95.2015 117.002 96.0794Z"
				fill="white"
			/>
			<path
				d="M108.769 109.969C108.587 110.842 109.115 111.71 109.948 111.901C110.782 112.092 111.61 111.538 111.793 110.665C111.975 109.792 111.446 108.924 110.613 108.733C109.78 108.537 108.951 109.091 108.769 109.969Z"
				fill="white"
			/>
			<path
				d="M96.9601 120.227C96.7779 121.1 97.3062 121.968 98.1396 122.159C98.973 122.35 99.8018 121.797 99.984 120.923C100.166 120.05 99.6378 119.182 98.8044 118.991C97.9711 118.8 97.1422 119.349 96.9601 120.227Z"
				fill="white"
			/>
			<path
				d="M82.6877 127.274C82.5056 128.147 83.0338 129.016 83.8672 129.206C84.7006 129.397 85.5294 128.844 85.7116 127.971C85.8938 127.098 85.3655 126.229 84.5321 126.038C83.6987 125.847 82.8699 126.401 82.6877 127.274Z"
				fill="white"
			/>
			<path
				d="M119.065 45.3129C118.41 45.8902 118.328 46.9113 118.874 47.5984C119.425 48.2854 120.4 48.3713 121.056 47.7987C121.711 47.2214 121.793 46.2004 121.247 45.5133C120.7 44.8262 119.721 44.7356 119.065 45.3129Z"
				fill="white"
			/>
			<path
				d="M113.418 34.8399C112.763 35.4173 112.681 36.4383 113.227 37.1254C113.778 37.8125 114.753 37.8983 115.408 37.3258C116.064 36.7485 116.146 35.7274 115.6 35.0403C115.049 34.3485 114.07 34.2626 113.418 34.8399Z"
				fill="white"
			/>
			<path
				d="M106.578 26.3089C105.922 26.8862 105.84 27.9073 106.387 28.5943C106.938 29.2814 107.913 29.3673 108.568 28.7947C109.224 28.2174 109.306 27.1964 108.76 26.5093C108.209 25.8222 107.234 25.7316 106.578 26.3089Z"
				fill="white"
			/>
			<path
				d="M97.4792 18.3885C96.8235 18.9659 96.7415 19.9869 97.288 20.674C97.839 21.3611 98.8136 21.447 99.4693 20.8744C100.125 20.2971 100.207 19.276 99.6606 18.5889C99.1096 17.9019 98.1305 17.8112 97.4792 18.3885Z"
				fill="white"
			/>
			<path
				d="M87.4103 13.3644C86.7545 13.9417 86.6725 14.9628 87.219 15.6498C87.77 16.3369 88.7446 16.4228 89.4004 15.8502C90.0562 15.2729 90.1381 14.2519 89.5917 13.5648C89.0406 12.8777 88.0661 12.7918 87.4103 13.3644Z"
				fill="white"
			/>
			<path
				d="M77.0316 10.473C76.3758 11.0503 76.2938 12.0714 76.8403 12.7584C77.3914 13.4455 78.3659 13.5314 79.0217 12.9588C79.6775 12.3815 79.7595 11.3605 79.213 10.6734C78.662 9.98632 77.6874 9.89566 77.0316 10.473Z"
				fill="white"
			/>
			</svg>';
			break;
		case 'bdgAdvanced3':
			$adv_uniq='a2';
			$dynamic_styles .= '.asnp-esb-advBadge-'. $adv_uniq .' {';
			if ( isset( $badge->badgePositionTop ) ) {
					$dynamic_styles .= ' inset: ' . $insetProperty . ';';
			}
			if ( isset( $badge->opacityImg ) ) {
				$dynamic_styles .= ' opacity: ' . $badge->opacityImg . ';';
			}
			if ( isset( $badge->zIndexImg ) ) {
				$dynamic_styles .= ' z-index: ' . $badge->zIndexImg . ';';
			}
			$dynamic_styles .= ' height: 90px;';
			$dynamic_styles .= ' width: 90px;';

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-advbadgeCont-'. $adv_uniq .' {';
			$dynamic_styles .= ' height: 90px;';


			if ( isset( $badge->textColor ) ) {
				$dynamic_styles .= ' color: ' . $badge->textColor . ';';
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

			$dynamic_styles .= '.asnp-esb-advbadge1-'. $adv_uniq .' {';
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
				$dynamic_styles .= ' top: ' . ( $badge->badgePositionY == 'bottom' ? '36px' : '28px' ) . ';';
			}
			if ( isset( $badge->badgePositionX ) ) {
				$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? '20px' : '' ) . ';';
			}

			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-advbadge2-'. $adv_uniq .' {';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= ' padding-left: 13px;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' width: 140px;';
			$dynamic_styles .= ' height: 30px;';
			$dynamic_styles .= ' margin-top:5px;';
			$dynamic_styles .= ' line-height: 20px;';
			$dynamic_styles .= ' text-transform: uppercase;';

			$dynamic_styles .= '}';
			
			$dynamic_styles .= '.asnp-esb-advbadge3-'. $adv_uniq .' {';
			$dynamic_styles .= ' font-weight: 700;';
			$dynamic_styles .= ' transform: ' . $horizAndvert . ';';

			if ( isset( $badge->fontSizeText ) ) {
				$dynamic_styles .= ' font-size: ' . $badge->fontSizeText . 'px;';
			}
			$dynamic_styles .= '}';

			$svgAdv.='
			<svg
			class="asnp-esb-svg2"
			width="201"
			height="201"
			viewBox="0 0 180 201"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12.2796 86.187C11.5283 86.187 10.8168 85.75 10.3798 85.0143L1.80153 70.596C1.29225 69.7392 1.22724 68.6271 1.62816 67.6967C2.02908 66.762 2.8237 66.1822 3.70138 66.1822H196.544C197.421 66.1822 198.216 66.762 198.617 67.6967C199.018 68.6314 198.953 69.7435 198.444 70.596L189.865 85.0143C189.428 85.75 188.717 86.187 187.965 86.187H12.2796Z"
				fill="' . $badge->secondBg . '" />
			/>
			<path
				d="M199.722 67.013C199.105 65.5807 197.887 64.6893 196.544 64.6893H130.15H58.6418H3.70137C2.35775 64.6893 1.13693 65.5807 0.522914 67.013C-0.0947194 68.4453 0.0100218 70.1502 0.79019 71.4614L9.36842 85.8797C10.0366 87.0048 11.1274 87.6755 12.2796 87.6755H58.6454H130.154H187.969C189.121 87.6755 190.212 87.0048 190.88 85.8797L199.455 71.4614C200.239 70.1502 200.34 68.4453 199.722 67.013ZM197.429 69.7305L188.85 84.1488C188.648 84.4907 188.316 84.6941 187.965 84.6941H130.15H58.6418H12.2796C11.9293 84.6941 11.597 84.4907 11.3947 84.1488L2.81645 69.7305C2.30357 68.8694 2.81646 67.6707 3.70137 67.6707H58.6418H130.15H196.544C197.429 67.6707 197.942 68.8694 197.429 69.7305Z"
				fill="#414042"
			/>
			<path
				d="M187.969 85.7585H12.2796C11.6403 85.7585 11.0407 85.3864 10.6687 84.7633L2.09048 70.3449C1.66067 69.618 1.60287 68.679 1.94239 67.8871C2.28191 67.0952 2.95733 66.6062 3.69776 66.6062H196.54C197.284 66.6062 197.956 67.0995 198.295 67.8871C198.635 68.679 198.581 69.6223 198.147 70.3449L189.569 84.7633C189.208 85.3864 188.605 85.7585 187.969 85.7585ZM3.70138 68.7352C3.62192 68.7352 3.56052 68.7785 3.5244 68.865C3.48828 68.9516 3.49189 69.0338 3.53884 69.1117L12.1171 83.53C12.1532 83.5906 12.2146 83.6296 12.2796 83.6296H187.969C188.034 83.6296 188.092 83.5906 188.132 83.53L196.71 69.1117C196.757 69.0338 196.76 68.9516 196.724 68.865C196.688 68.7785 196.627 68.7352 196.547 68.7352H3.70138Z"
				fill="white"
			/>
			<path
				d="M26.5321 110.584C25.7808 110.584 25.0692 110.147 24.6322 109.411L16.054 94.9928C15.5447 94.136 15.4797 93.0239 15.8806 92.0936C16.2815 91.1589 17.0761 90.579 17.9538 90.579H182.291C183.169 90.579 183.963 91.1589 184.364 92.0936C184.765 93.0283 184.7 94.1404 184.191 94.9928L175.613 109.411C175.176 110.147 174.468 110.584 173.713 110.584H26.5321Z"
				fill="' . $badge->secondBg . '" />
			/>
			<path
				d="M185.47 91.4098C184.852 89.9775 183.635 89.0861 182.291 89.0861H130.15H58.6419H17.9539C16.6103 89.0861 15.3895 89.9775 14.7755 91.4098C14.1578 92.8422 14.2626 94.5471 15.0428 95.8583L23.621 110.277C24.2892 111.402 25.38 112.072 26.5322 112.072H58.6455H130.154H173.72C174.872 112.072 175.963 111.402 176.631 110.277L185.21 95.8583C185.986 94.5471 186.087 92.8422 185.47 91.4098ZM183.176 94.1317L174.598 108.55C174.396 108.892 174.063 109.095 173.713 109.095H130.15H58.6419H26.5286C26.1782 109.095 25.8459 108.892 25.6436 108.55L17.0654 94.1317C16.5525 93.2706 17.0654 92.0719 17.9503 92.0719H58.6383H130.146H182.288C183.176 92.0719 183.689 93.2662 183.176 94.1317Z"
				fill="#414042"
			/>
			<path
				d="M173.717 110.16H26.5321C25.8928 110.16 25.2932 109.788 24.9212 109.165L16.343 94.7462C15.9132 94.0192 15.8554 93.0802 16.1949 92.2883C16.5344 91.4964 17.2098 91.0074 17.9503 91.0074H182.288C183.032 91.0074 183.703 91.5008 184.043 92.2883C184.382 93.0802 184.328 94.0235 183.895 94.7462L175.317 109.165C174.955 109.788 174.352 110.16 173.717 110.16ZM17.9539 93.1364C17.8744 93.1364 17.813 93.1797 17.7769 93.2663C17.7408 93.3528 17.7444 93.435 17.7914 93.5129L26.3696 107.931C26.4057 107.996 26.4671 108.031 26.5321 108.031H173.717C173.782 108.031 173.839 107.992 173.879 107.931L182.457 93.5129C182.504 93.435 182.508 93.3528 182.472 93.2663C182.436 93.1797 182.374 93.1364 182.295 93.1364H17.9539Z"
				fill="white"
			/>
			<path
				d="M41.5395 134.985C40.7882 134.985 40.0767 134.548 39.6397 133.812L31.0614 119.394C30.5521 118.537 30.4871 117.43 30.888 116.495C31.289 115.56 32.0836 114.98 32.9613 114.98H167.284C168.161 114.98 168.956 115.56 169.357 116.495C169.758 117.43 169.693 118.542 169.184 119.394L160.605 133.812C160.168 134.548 159.46 134.985 158.706 134.985H41.5395Z"
				fill="' . $badge->secondBg . '" />
			/>
			<path
				d="M170.462 115.811C169.845 114.379 168.627 113.487 167.284 113.487H130.15H58.6418H32.9613C31.6176 113.487 30.3968 114.379 29.7828 115.811C29.1652 117.243 29.2699 118.948 30.0501 120.26L38.6283 134.678C39.2965 135.803 40.3873 136.474 41.5395 136.474H58.6454H130.154H158.713C159.865 136.474 160.956 135.803 161.624 134.678L170.199 120.26C170.979 118.948 171.08 117.243 170.462 115.811ZM168.169 118.529L159.59 132.947C159.388 133.289 159.056 133.492 158.706 133.492H130.146H58.6418H41.5359C41.1855 133.492 40.8532 133.289 40.651 132.947L32.0727 118.529C31.5598 117.668 32.0727 116.469 32.9576 116.469H58.6382H130.146H167.28C168.169 116.469 168.682 117.668 168.169 118.529Z"
				fill="#414042"
			/>
			<path
				d="M158.709 134.557H41.5395C40.9002 134.557 40.3006 134.185 39.9286 133.562L31.3504 119.143C30.9205 118.416 30.8628 117.477 31.2023 116.685C31.5418 115.893 32.2172 115.4 32.9577 115.4H167.28C168.024 115.4 168.696 115.893 169.036 116.681C169.375 117.473 169.321 118.416 168.887 119.139L160.309 133.557C159.948 134.185 159.345 134.557 158.709 134.557ZM32.9613 117.533C32.8818 117.533 32.8204 117.577 32.7843 117.663C32.7482 117.75 32.7518 117.832 32.7987 117.91L41.377 132.328C41.4131 132.389 41.4745 132.428 41.5395 132.428H158.709C158.774 132.428 158.832 132.389 158.872 132.328L167.45 117.91C167.497 117.832 167.5 117.75 167.464 117.663C167.428 117.577 167.367 117.533 167.287 117.533H32.9613Z"
				fill="white"
			/>
			<path
				d="M141.856 150.582C164.905 122.968 164.905 78.1964 141.856 50.5821C118.807 22.9679 81.4364 22.9679 58.3872 50.5822C35.3379 78.1964 35.3379 122.968 58.3872 150.582C81.4364 178.196 118.807 178.196 141.856 150.582Z"
				fill="' . $badge->mainBg . '" />
			/>
			<path
				d="M155.65 72.4783C152.616 63.88 148.271 56.1603 142.737 49.5309C137.204 42.9016 130.76 37.696 123.584 34.0611C116.154 30.2964 108.258 28.3881 100.124 28.3881C91.9904 28.3881 84.0984 30.2964 76.6651 34.0611C69.4883 37.696 63.0447 42.9016 57.5113 49.5309C51.9779 56.1603 47.6328 63.88 44.5988 72.4783C41.4564 81.3794 39.8636 90.8387 39.8636 100.584C39.8636 110.329 41.4564 119.784 44.5988 128.689C47.6328 137.287 51.9779 145.007 57.5113 151.636C63.0447 158.266 69.4883 163.471 76.6651 167.106C84.0948 170.871 91.9904 172.779 100.124 172.779C108.258 172.779 116.15 170.871 123.584 167.106C130.76 163.471 137.204 158.266 142.737 151.636C148.271 145.007 152.616 137.287 155.65 128.689C158.792 119.788 160.385 110.329 160.385 100.584C160.389 90.8387 158.796 81.3794 155.65 72.4783ZM100.124 169.802C68.2169 169.802 42.3486 138.81 42.3486 100.584C42.3486 62.3569 68.2169 31.3652 100.124 31.3652C132.032 31.3652 157.9 62.3569 157.9 100.584C157.9 138.81 132.032 169.802 100.124 169.802Z"
				fill="#414042"
			/>
			<path
				d="M100.124 170.867C67.7763 170.867 41.4601 139.338 41.4601 100.584C41.4601 61.8289 67.7763 30.3007 100.124 30.3007C132.472 30.3007 158.789 61.8289 158.789 100.584C158.789 139.338 132.472 170.867 100.124 170.867ZM100.124 32.4297C68.7551 32.4297 43.2371 63.0016 43.2371 100.584C43.2371 138.166 68.7551 168.738 100.124 168.738C131.494 168.738 157.012 138.166 157.012 100.584C157.012 63.0016 131.49 32.4297 100.124 32.4297Z"
				fill="white"
			/>
		</svg>';
			break;

		}

	$dynamic_styles = apply_filters( 'asnp_wesb_advanced_badge_styles', $dynamic_styles, $badge, $hide );

	add_custom_style( $dynamic_styles );



	$class_names = 'asnp-esb-badge-element asnp-esb-advBadge asnp-esb-advBadge-'. $adv_uniq .'';
	if ( $hide ) {
		$class_names .= ' asnp-esb-badge-hidden';
	}

	$class_names = apply_filters( 'asnp_wesb_advanced_badge_class_names', $class_names, $badge, $hide );

	// Advanced Badge
	$output = '<div class="' . esc_attr( $class_names ) . '"' . ( $hide ? ' style="display: none;"' : '' ) . '>';
	$output .= '<span class="asnp-esb-advbadgeCont-'. $adv_uniq .'">';
	$output .= '<div class="asnp-esb-advbadge1-'. $adv_uniq .'">';
	$output .= $svgAdv;
	$output .= '<div class="asnp-esb-advbadge2-'. $adv_uniq .'">';
	$output .= '<div class="asnp-esb-advbadge3-'. $adv_uniq .'">' . esc_html__( $badge->badgeLabel, 'asnp-easy-sale-badge' ) . '</div>';
	$output .= '</div>';
	$output .= '</div>';
	$output .= '</span>';
	$output .= '</div>';

	$output = apply_filters( 'asnp_wesb_advanced_badge', $output, $badge, $hide );

	echo $output;
}
