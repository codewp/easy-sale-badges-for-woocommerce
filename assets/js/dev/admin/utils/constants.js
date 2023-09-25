import { __ } from '@wordpress/i18n';

export const defaultSettings = {
	hideWooCommerceBadges: 0,
	singlePosition: 'before_single_item_images',
	loopPosition: 'woocommerce_product_get_image',
	singleCustomHooks: '',
	loopCustomHooks: '',
	showBadgeProductPage: '',
	singleContainer: '',
	timerPosition: 'outOfImage',
};
export const PLUGIN_URL = saleBadgeData.pluginUrl;
export const IMAGES_URL = `${ PLUGIN_URL }assets/images/`;


export const customColor = [
	'rgb(255, 148, 148)',
	'rgb(177, 178, 255)',
	'rgb(170, 196, 255)',
	'rgb(96, 150, 180)',
	'rgb(129, 91, 91)',
	'rgb(255, 255, 255)',
	'rgb(96, 153, 102)',
	'rgb(64, 81, 59)',
	'rgb(133, 88, 111)',
	'rgb(142, 195, 176)',
	'rgb(32, 82, 149)',
	'rgb(20, 66, 114)',
	'rgb(177, 178, 255)',
	'rgb(255, 135, 135)',
	'rgb(188, 226, 158)',
	'rgb(100, 92, 187)',
	'rgb(183, 196, 207)',
	'rgb(229, 186, 115)',
];


export default function BadgeCssandAdv( badge ) {
	let badgeIcon = '';
	let badgeIconOne = '';
	let badgeIconTwo = '';
	switch ( badge.badgeStyles ) {
		case 'badge1':
			badgeIcon = `background: ${ badge.badgeColor };
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
            height: ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			position: absolute;
			opacity: ${ badge.opacity };
			text-align: center;
            text-shadow: none;
			`;
			break;
		case 'badge2':
			badgeIcon = `
			text-align: center;
			display: inline-block;
			position: absolute;
			opacity: ${ badge.opacity };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
			top: 0px;
			height: ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			background:  ${ badge.badgeColor };
			border-radius: 3px;
			&::before {
				border-left-color: transparent !important;
				display: inline-block;
				content: '';
				position: absolute;
				right: ${ badge.badgePositionX == 'right' ? 'auto' : '-20px' };
				left: ${ badge.badgePositionX == 'right' ? '-20px' : '' };
				top: 0;
				border: 9px solid transparent;
				border-width: 15px 15px;
				border-color: ${ badge.badgeColor };
				transform: ${
					badge.badgePositionX == 'right'
						? 'rotate(0)'
						: 'rotate(180deg)'
				};
			}
		`;
			break;
		case 'badge3':
			badgeIcon = `
			position: absolute;
			background: ${ badge.badgeColor };
			text-align: center;
			border-radius: 3px;
			opacity: ${ badge.opacity };
			top: 0px;
			left: 0px;
            height:  ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			line-height: 30px;
			color: #fff;
			&::after {
				content: '';
				position: absolute;
				bottom: 0px;
				transform: ${
					badge.badgePositionX == 'right'
						? 'skew( -1055deg )'
						: 'skew( -15deg )'
				};
				right: ${ badge.badgePositionX == 'right' ? 'auto' : '-10px' };
				left: ${ badge.badgePositionX == 'right' ? '-10px' : '' };
				width: 20px;
				height: 100%;
				background: ${ badge.badgeColor };
				border-radius: ${
					badge.badgePositionX == 'right'
						? '3px 0px 0px 3px'
						: '0 3px 3px 0'
				};
			}
		`;
			break;
		case 'badge4':
			badgeIcon = `
			border-radius: 3px;
			padding: 0px 15px;
			position: absolute;
			opacity: ${ badge.opacity };
			display: inline-block;
			background: ${ badge.badgeColor };
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
			height:  ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			line-height: 30px;
			box-sizing: border-box;
			border-bottom-right-radius: '1px !important';
			border-top-right-radius: '1px !important';
			&::before {
				position: absolute;
				right: ${ badge.badgePositionX == 'right' ? 'auto' : '-14px' };
				left: ${ badge.badgePositionX == 'right' ? '-14px' : '' };
				top: 0px;
				border-top-left-radius: ${ badge.badgePositionX == 'right' ? '0px' : '1px' };
				border-bottom-left-radius: ${ badge.badgePositionX == 'right' ? '0px' : '1px' };
				border-top-right-radius: ${ badge.badgePositionX == 'right' ? '1px' : '' };
				border-bottom-right-radius: ${ badge.badgePositionX == 'right' ? '1px' : '' };
				content: '';
				display: block;
				width: 0;
				height: 0;
				border-top: 15px solid transparent;
				border-left: ${
					badge.badgePositionX == 'right'
						? 'none'
						: `15px solid ${ badge.badgeColor }`
				};
				border-bottom: 15px solid transparent;
				border-right: ${
					badge.badgePositionX == 'right'
						? `15px solid ${ badge.badgeColor }`
						: ''
				};
			}
			&::after {
				display: block;
				content: '';
				position: absolute;
				background: #ffffff;
				width: 7px;
				height: 7px;
				border-radius: 10px;
				right: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
				left: ${ badge.badgePositionX == 'right' ? '0px' : '' };
				top: calc( 100% / 2 - 4px );
			}
		`;
			break;
		case 'badge5':
			badgeIcon = `
				position: absolute;
				display: block;
				width: ${ badge.widthBadge }px;
				height: ${ badge.widthBadge }px;
				text-align: center;
				opacity: ${ badge.opacity };
				overflow: hidden;
				z-index: 10;
				transform: ${
					( badge.badgePositionY == 'bottom' &&
						badge.badgePositionX == 'left' &&
						`rotateZ(270deg) !important` ) ||
					( badge.badgePositionY == 'bottom' &&
						badge.badgePositionX == 'right' &&
						`rotateZ(90deg) !important` )
				};
			`;
			badgeIconOne = `
				background: ${ badge.badgeColor };
				position: absolute;
				text-align: center;
				z-index: 12;
				transform:${
					badge.badgePositionX == 'right'
						? 'rotate(45deg)'
						: `rotate(315deg)`
				} ;
				width: ${ badge.widthBadge * 1.5 }px;
				left: ${
					badge.badgePositionX == 'right'
						? ''
						: `-${ badge.widthBadge / 2.4 }px`
				};
				right: ${
					badge.badgePositionX == 'right'
						? `-${ badge.widthBadge / 2.22 }px`
						: ''
				};
				top: ${ badge.widthBadge / 7 }px ;

			`;
			break;
		case 'badge6':
			badgeIcon = `
			position: absolute;
			height: ${ badge.widthBadge }px;
			margin: 0;
			padding: 0;
			opacity: ${ badge.opacity };
			text-align: center;
			top: 0px;
			right: ${ badge.badgePositionX == 'right' ? '0px' : 'auto' };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			width: ${ badge.widthBadge }px;
			font-weight: 400;
			border-radius: 0;
			box-sizing: border-box;
			transform: ${
				( badge.badgePositionY == 'bottom' &&
					badge.badgePositionX == 'left' &&
					`rotateZ(270deg) !important` ) ||
				( badge.badgePositionY == 'bottom' &&
					badge.badgePositionX == 'right' &&
					`rotateZ(90deg) !important` )
			};


		`;
			badgeIconOne = `
			position: absolute;
			z-index: 14;
			top: 4.02px;
			transform: ${
				badge.badgePositionX == 'right'
					? 'rotate(45deg)'
					: 'rotate(315deg)'
			} ;
			width: ${ badge.widthBadge * 1.5 }px !important;
			text-align: center;
			display: block;
			left: ${ badge.badgePositionX == 'right' ? '0px' : 'auto' };
			right: ${ badge.badgePositionX == 'right' ? '' : '0px' };
		`;
			badgeIconTwo = `width: 0;
		    height: 0;
		    border-right:${
				badge.badgePositionX == 'right'
					? `${ badge.widthBadge }px solid ${ badge.badgeColor }`
					: 'none'
			} ;
		    border-bottom:${ badge.widthBadge }px solid transparent;
			border-left:${
				badge.badgePositionX == 'right'
					? ''
					: `${ badge.widthBadge }px solid  ${ badge.badgeColor }`
			} ;
		    z-index: 12;
		    display: block;`;
			break;
		case 'badge7':
			badgeIcon = `
			background: ${ badge.badgeColor };
			position: absolute;
			z-index: 99;
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right:${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.widthBadge }px;
			width: ${ badge.widthBadge }px;
			border-radius: 3px;
			text-align: center;`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge8':
			badgeIcon = `
			background: ${ badge.badgeColor };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right:${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.widthBadge }px;
			width: ${ badge.widthBadge }px;
            position: absolute;
            z-index: 99;
            top: 0px;
            left: 0px;
            border-radius: 50% !important;
            text-align: center;`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge9':
			badgeIcon = `
			display: block;
			height: ${ badge.widthBadge / 1.66 }px !important;
			width: ${ badge.widthBadge }px;
			background: ${ badge.badgeColor };
			position: absolute;
			z-index: 1;
			opacity: ${ badge.opacity };
			top: 0px;
			left: 0px;
			transform: translate3d(0, 0, 0);
			border-top-right-radius: 3px;
			border-top-left-radius: 3px;
			text-align: center;
			&::after {
			border-top: ${ badge.widthBadge / 4 }px solid ${ badge.badgeColor } !important;
			border-right: ${ badge.widthBadge / 2 }px solid transparent !important;
			border-left: ${ badge.widthBadge / 2 }px solid transparent !important;
			top: ${ badge.widthBadge / 1.66 }px !important;
			content: "";
			width: 0;
			height: 0;
			position: absolute;
			left: 0;
			}
			`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge10':
			badgeIcon = `
			display: block;
			height: ${ badge.widthBadge / 1.083 }px !important;
			width: ${ badge.widthBadge }px;
			background: ${ badge.badgeColor };
			position: absolute;
			z-index: 1;
			opacity: ${ badge.opacity };
			top: 0px;
			left: 0px;
			text-align: center;
			border-radius: 3px 3px ${ badge.widthBadge / 2.38 }px ${
				badge.widthBadge / 2.38
			}px !important;
			`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge11':
			badgeIcon = `
			display: block;
			height: ${ badge.heightBadge }px;
			width: 100%;
			background: ${ badge.badgeColor };
			position: absolute;
			z-index: 1;
			top: 0px;
			left: 0px;
			line-height: 30px;
			vertical-align: middle;
			text-align: center;
			text-shadow: none;
			border-radius: 0px;
			`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge12':
			badgeIcon = `
			display: inline-block;
			padding: 0px 7px;
			text-align: center;
			position: relative;
			font-size: 14px;
			font-weight: 400;
			opacity: ${ badge.opacity };
			background: ${ badge.badgeColor };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '12px' };
			right: ${ badge.badgePositionX == 'right' ? '12px' : 'auto' };
			height:  30px !important;
			width: ${ badge.widthBadge }px;
			line-height: 30px !important;
			transform: rotate(-20deg) skew(-20deg, 10deg) !important;
			top:${ badge.badgePositionY == 'bottom' ? 'auto' : '15px' } ;
			bottom:${ badge.badgePositionY == 'bottom' ? '15px' : '' } ;
			&::before {
				content: "";
                width: 0;
                height: 27px;
                display: block;
				position: absolute;
                border-style: solid;
                border-width: 5px;
                z-index: -1;
				background: ${ badge.badgeColor } !important;
                border-color: ${ badge.badgeColor } !important;
				transform: translateZ(-10px) !important;
				left: -7px;
                top: 8px;
			}
			&::after {
				right: -5px;
				top: -5px;
				content: "";
				width: 0;
				height: 26px;
				display: block;
				position: absolute;
				border-style: solid;
				border-width: 5px;
				z-index: -1;
				transform: translateZ(-10px) !important;
				background: ${ badge.badgeColor } !important;
                border-color: ${ badge.badgeColor } !important;
			}
		`;
			break;
		case 'badge13':
			badgeIcon = `
			text-align: center;
			display: inline-block;
			position: absolute;
			opacity: ${ badge.opacity };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
			line-height: ${ badge.lineHeightText * 1.66 }px !important;
			top: 0px;
			height: ${ badge.heightBadge * 1.5 }px;
			width: ${ badge.widthBadge }px;
			background:  ${ badge.badgeColor };
			border-radius: 3px;
			&::before {
				border-left-color: transparent !important;
				display: inline-block;
				content: '';
				position: absolute;
				top:${ badge.heightBadge * 1.47 }px;
				border: 9px solid transparent;
				right: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
				left: ${ badge.badgePositionX == 'right' ? '0px' : '0px' };
				border-width: 25px 25px;
				z-index:-1;
				border-color: ${ badge.badgeColor };
				transform: ${
					badge.badgePositionX == 'right'
						? 'rotate(270deg)'
						: 'rotate(270deg)'
				};
				};
			}
		`;
			break;
		default:
			badgeIcon = `padding: 0 15px;
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			opacity: ${ badge.opacity };
			background: ${ badge.badgeColor };`;
	}

	return {
		badgeIcon,
		badgeIconOne,
		badgeIconTwo,
	};
}
