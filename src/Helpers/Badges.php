<?php

namespace AsanaPlugins\WhatsApp\Helpers\Badges;

defined('ABSPATH') || exit;

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
	if ( ! empty( $badge->badgeStyles ) ) {
		return output_css_badge( $badge );
	} elseif ( isset( $badge->imgbadge ) && $badge->imgbadge == 1 ) {
		return output_image_badge( $badge );
	} elseif ( isset( $badge->imgbadgeAdv ) && $badge->imgbadgeAdv == 1 ) {
		return output_image_adv_badge( $badge );
	} elseif ( isset( $badge->useTimerBadge ) && $badge->useTimerBadge == 1 ) {
		return output_timer_badge( $badge );
	}
}

function output_css_badge( $badge ) {
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
			$badge->badgeStyles == 'badge8' ||
			$badge->badgeStyles == 'badge9' ||
			$badge->badgeStyles == 'badge10'
		)
	) {
		$heightContBadge = $badge->widthBadge . 'px';
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

	switch ( $badge->badgeStyles ) {
		case 'badge1':
			$dynamic_styles .= '.asnp-esb-productBadge {';
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
			$dynamic_styles .= '.asnp-esb-productBadge {';
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

			$dynamic_styles .= '.asnp-esb-badge::before {';
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
			$dynamic_styles .= '.asnp-esb-productBadge {';
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
			$dynamic_styles .= ' border-radius: 3px;';

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

			$dynamic_styles .= '.asnp-esb-badge::after {';
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
			$dynamic_styles .= '.asnp-esb-productBadge {';
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
			$dynamic_styles .= ' border-radius: 3px;';
			$dynamic_styles .= ' display: inline-block;';
			$dynamic_styles .= ' padding: 0px 15px;';
			$dynamic_styles .= ' top: 0px;';
			$dynamic_styles .= ' box-sizing: border-box;';
			$dynamic_styles .= ' border-bottom-right-radius: 1px !important;';
			$dynamic_styles .= ' border-top-right-radius: 1px !important;';
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

			$dynamic_styles .= '.asnp-esb-badge::after {';
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

			$dynamic_styles .= '.asnp-esb-badge::before {';
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
			$dynamic_styles .= '.asnp-esb-productBadge {';
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

			$dynamic_styles .= '.asnp-esb-inner-span1 {';
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
			$dynamic_styles .= '.asnp-esb-productBadge {';
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
			if ( ( isset( $badge->badgePositionY ) && $badge->badgePositionY == 'bottom' ) && ( isset( $badge->badgePositionX ) && $badge->badgePositionX == 'left' ) ) {
				$transform .= ' rotateZ(270deg) !important';
			}elseif( ( isset( $badge->badgePositionY ) && $badge->badgePositionY == 'bottom' ) && ( isset( $badge->badgePositionX ) && $badge->badgePositionX == 'right' ) ){
				$transform .= ' rotateZ(90deg) !important';
			}

			if ( ! empty( $transform ) ) {
				$dynamic_styles .= ' transform:' . $transform;
			}
			$dynamic_styles .= '}';

			$dynamic_styles .= '.asnp-esb-inner-span2 {';
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

			$dynamic_styles .= '.asnp-esb-inner-span1 {';
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
			$dynamic_styles .= '.asnp-esb-productBadge {';
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

			$dynamic_styles .= '.asnp-esb-inner-span1 {';
			$dynamic_styles .= ' transform: translateY(-50%);';
			$dynamic_styles .= ' position: relative;';
			$dynamic_styles .= ' line-height: 16px;';
			$dynamic_styles .= ' top: 50%;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= '}';
		break;

		case 'badge8':
			$dynamic_styles .= '.asnp-esb-productBadge {';
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

			$dynamic_styles .= '.asnp-esb-inner-span1 {';
			$dynamic_styles .= ' transform: translateY(-50%);';
			$dynamic_styles .= ' position: relative;';
			$dynamic_styles .= ' line-height: 16px;';
			$dynamic_styles .= ' top: 50%;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= '}';
		break;

		case 'badge9':
			$dynamic_styles .= '.asnp-esb-productBadge {';
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

			$dynamic_styles .= '.asnp-esb-badge::after {';
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

			$dynamic_styles .= '.asnp-esb-inner-span1 {';
			$dynamic_styles .= ' transform: translateY(-50%);';
			$dynamic_styles .= ' position: relative;';
			$dynamic_styles .= ' line-height: 16px;';
			$dynamic_styles .= ' top: 50%;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= '}';
		break;

		case 'badge10':
			$dynamic_styles .= '.asnp-esb-productBadge {';
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

			$dynamic_styles .= '.asnp-esb-inner-span1 {';
			$dynamic_styles .= ' transform: translateY(-50%);';
			$dynamic_styles .= ' position: relative;';
			$dynamic_styles .= ' line-height: 16px;';
			$dynamic_styles .= ' top: 50%;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= '}';
		break;
		case 'badge11':
			$dynamic_styles .= '.asnp-esb-productBadge {';
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

			$dynamic_styles .= '.asnp-esb-inner-span1 {';
			$dynamic_styles .= ' transform: translateY(-50%);';
			$dynamic_styles .= ' position: relative;';
			$dynamic_styles .= ' line-height: 16px;';
			$dynamic_styles .= ' top: 50%;';
			$dynamic_styles .= ' z-index: 1;';
			$dynamic_styles .= ' display: block;';
			$dynamic_styles .= '}';
		break;

		case 'badge12':
			$dynamic_styles .= '.asnp-esb-productBadge {';
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
				$dynamic_styles .= ' left: ' . ( $badge->badgePositionX == 'right' ? 'auto' : '20px' ) . ';';
				$dynamic_styles .= ' right: ' . ( $badge->badgePositionX == 'right' ? '20px' : 'auto' ) . ';';
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

			$dynamic_styles .= '.asnp-esb-badge::after {';
			$dynamic_styles .= ' right: -5px;';
			$dynamic_styles .= ' top: -5px;';
			$dynamic_styles .= ' width: 0;';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' height: 26px;';
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

			$dynamic_styles .= '.asnp-esb-badge::before {';
			$dynamic_styles .= ' left: -7px;';
			$dynamic_styles .= ' top: 8px;';
			$dynamic_styles .= ' width: 0;';
			$dynamic_styles .= ' content: \'\';';
			$dynamic_styles .= ' height: 27px;';
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
			$dynamic_styles .= '.asnp-esb-productBadge {';
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

			$dynamic_styles .= '.asnp-esb-badge::before {';
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
		$dynamic_styles .= '.asnp-esb-productBadge {';
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


	$dynamic_styles = apply_filters( 'asnp_wesb_css_badge_styles', $dynamic_styles, $badge );

	add_custom_style( $dynamic_styles );

	// Css Badge
	$output = '<div class="asnp-esb-productBadge">';
	$output .= '<div class="asnp-esb-badge">';
	$output .= '<span class="asnp-esb-inner-span2"></span>';
	$output .= '<div class="asnp-esb-inner-span1">';
	$output .= '<div style="transform: ' . esc_attr( $horizAndvert ) . '">' . esc_html__( $badge->badgeLabel, 'asnp-easy-whatsapp' ) . '</div>';
	$output .= '</div>';
	$output .= '</div>';
	$output .= '</div>';

	$output = apply_filters( 'asnp_wesb_css_badge', $output, $badge );

	echo $output;
}

function output_timer_badge( $badge ) {
	if ( ! $badge ) {
		return;
	}

	$dynamic_styles = '';

	add_custom_style( $dynamic_styles );
}

function output_image_badge( $badge ) {
	if ( ! $badge ) {
		return;
	}
}

function output_image_adv_badge( $badge ) {
	if ( ! $badge ) {
		return;
	}
}
