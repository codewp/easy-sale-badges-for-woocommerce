import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import Admin from './Admin';
import Front from './Front';

import './style.scss';
import { toBool } from '../../utils';

const WhatsAppButton = ( {
	badge,
	site = 'admin',
	IMAGES_URL = '',
	updateBadge,
} ) => {
	const [ horiz, setHoriz ] = useState( toBool( badge.horizontal ) );
	const [ vert, setVert ] = useState( toBool( badge.vertical ) );
	const [ rotationz, setRotationz ] = useState( badge.rotationZ );

	if ( badge.badgeAdv == 'bdgAdvanced1' ) {
		badge.mainBg = '#141E27';
		badge.SecondBg = '#AD2525';
	} else if ( badge.badgeAdv == 'bdgAdvanced2' ) {
		badge.mainBg = '#F78DA7';
		badge.SecondBg = '#DABECA';
	} else if ( badge.badgeAdv == 'bdgAdvanced3' ) {
		badge.mainBg = '#37116F';
		badge.SecondBg = '#43AA8B';
	} else if ( badge.badgeAdv == 'bdgAdvanced4' ) {
		badge.mainBg = '#FF9F24';
		badge.SecondBg = '#EADB45';
	}

	if ( badge.badgeStyles === 'badge2' ) {
		badge.heightBadge = '30';
	} else if ( badge.badgeStyles === 'badge3' ) {
		badge.heightBadge = '30';
	} else if ( badge.badgeStyles === 'badge4' ) {
		badge.heightBadge = '30';
	}

	let horizAndvert;
	if ( badge.horizontal === 'true' && badge.vertical === 'true' ) {
		horizAndvert = 'scaleX( -1 ) ScaleY(-1)';
	} else if ( badge.horizontal === 'true' && badge.vertical === 'false' ) {
		horizAndvert = 'scaleX( -1 )';
	} else if ( badge.horizontal === 'false' && badge.vertical === 'true' ) {
		horizAndvert = 'ScaleY(-1)';
	} else {
		horizAndvert = '';
	}
	if (
		badge.badgeStyles == 'badge5' &&
		badge.badgePositionY == 'bottom' &&
		( badge.badgePositionX == 'left' || badge.badgePositionX == 'right' )
	) {
		horizAndvert = 'scaleX( -1 ) ScaleY(-1)';
	} else if (
		badge.badgeStyles == 'badge6' &&
		badge.badgePositionY == 'bottom' &&
		( badge.badgePositionX == 'left' || badge.badgePositionX == 'right' )
	) {
		horizAndvert = 'scaleX( -1 ) ScaleY(-1)';
	}

	let icon = '';
	let bdgeAdvanced = '';
	let badgeIcon = '';
	let badgeIconOne = '';
	let badgeIconTwo = '';
	switch ( badge.badgeStyles ) {
		case 'badge1':
			badgeIcon = `background-color: ${ badge.badgeColor };
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
            height: ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			position: absolute;
			text-align: center;
            text-shadow: none;
			`;
			break;
		case 'badge2':
			badgeIcon = `
			text-align: center;
			display: inline-block;
			position: absolute;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
			top: 0px;
			height: ${ badge.heightBadge - 1 }px;
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
			background-color: ${ badge.badgeColor };
			text-align: center;
			border-radius: 3px;
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
				background-color: ${ badge.badgeColor };
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
			display: inline-block;
			background-color: ${ badge.badgeColor };
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
				top: ${ badge.widthBadge / 12 }px ;

			`;
			break;
		case 'badge6':
			badgeIcon = `
			position: absolute;
			height: ${ badge.widthBadge }px;
			margin: 0;
			padding: 0;
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
			background-color: ${ badge.badgeColor };
			color: #d1d2d8;
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
			background-color: ${ badge.badgeColor };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right:${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.widthBadge }px;
			width: ${ badge.widthBadge }px;		
            color: #d1d2d8;
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
			background-color: ${ badge.badgeColor };
			position: absolute;
			z-index: 1;
			top: 0px;
			left: 0px;
			color: white;
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
			background-color: ${ badge.badgeColor };
			position: absolute;
			z-index: 1;
			top: 0px;
			left: 0px;
			color: white;
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
			background-color: ${ badge.badgeColor };
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
			opacity: 1;
			background-color: ${ badge.badgeColor };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '20px' };
			right: ${ badge.badgePositionX == 'right' ? '20px' : 'auto' };
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
		default:
			badgeIcon = `padding: 0 15px;
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;	
			background-color: ${ badge.badgeColor };`;
	}

	switch ( badge.badgeImage ) {
		case 'bdg1':
			icon = 'bdg1.png';
			break;
		case 'bdg2':
			icon = 'bdg2.png';
			break;
		case 'bdg3':
			icon = 'bdg3.png';
			break;
		case 'bdg4':
			icon = 'bdg4.png';
			break;
		case 'bdg5':
			icon = 'bdg5.png';
			break;
		case 'bdg6':
			icon = 'bdg6.1.png';
			break;
		case 'bdg7':
			icon = 'bdg7.png';
			break;
		case 'bdg8':
			icon = 'bdg8.png';
			break;
		case 'bdg9':
			icon = 'bdg9.png';
			break;
		case 'bdg10':
			icon = 'bdg10.1.png';
			break;
		case 'bdg11':
			icon = 'bdg11.png';
			break;
		case 'bdg12':
			icon = 'bdg12.png';
			break;
		case 'bdg13':
			icon = 'bdg13.png';
			break;
		case 'bdg14':
			icon = 'bdg14.png';
			break;
		case 'bdg15':
			icon = 'bdg15.png';
			break;
		case 'bdg16':
			icon = 'bdg16.png';
			break;
		case 'bdg17':
			icon = 'bdg17.png';
			break;
		case 'bdg18':
			icon = 'bdg18.png';
			break;
		case 'bdg19':
			icon = 'bdg19.png';
			break;
		case 'bdg20':
			icon = 'bdg20.png';
			break;
		case 'bdg21':
			icon = 'bdg21.png';
			break;
		case 'bdg22':
			icon = 'bdg22.png';
			break;
		case 'bdg23':
			icon = 'bdg23.png';
			break;
		case 'bdg24':
			icon = 'bdg24.png';
			break;
		case 'bdg25':
			icon = 'bdg25.png';
			break;
		case 'bdg26':
			icon = 'bdg26.png';
			break;
		case 'bdg27':
			icon = 'bdg27.png';
			break;
		case 'bdg28':
			icon = 'bdg28.png';
			break;
		case 'bdg29':
			icon = 'bdg29.png';
			break;
		case 'bdg30':
			icon = 'bdg30.png';
			break;
		default:
			icon = '';
	}

	switch ( badge.badgeAdv ) {
		case 'bdgAdvanced1':
			bdgeAdvanced = (
				<svg
					className="asnp-ew-svg1"
					width="94"
					height="101"
					viewBox="0 0 94 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M85.0357 7.89259C63.8562 14.5349 46.91 0 46.91 0C46.91 0 29.9638 14.5349 8.78433 7.89259C-2.00019 18.2728 -12.0121 76.002 46.91 100.09C105.826 76.002 95.8137 18.2728 85.0357 7.89259Z"
						fill={ `${ badge.mainBg }` }
					/>
					<path
						d="M46.91 93.5128C19.4455 81.4656 10.4011 62.1704 7.68057 47.9156C4.92114 33.4523 7.95327 20.5845 11.1672 14.7628C14.1019 15.3749 17.0886 15.6875 20.0818 15.6875C20.0818 15.6875 20.0818 15.6875 20.0883 15.6875C32.1194 15.6875 41.8067 10.7318 46.91 7.44326C52.0133 10.7318 61.7006 15.6875 73.7317 15.6875C76.7249 15.6875 79.7116 15.3749 82.6463 14.7628C85.8603 20.5845 88.8924 33.4458 86.1329 47.9156C83.419 62.1704 74.3745 81.4721 46.91 93.5128Z"
						stroke="#EBEBEB"
						strokeWidth="4"
						strokeMiterlimit="10"
					/>
				</svg>
			);
			badgeIconOne = `
			position: relative;
            letter-spacing: 0.52px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-align: center;
            font-size: 14px;
	        opacity: 1;
	        top:${ badge.badgePositionY == 'bottom' ? '36px' : '23px' } ;
			left: ${ badge.badgePositionX == 'right' ? '20px' : '' };
			`;
			badgeIconTwo = `
			background-color: ${ badge.SecondBg };
			display: block;
			padding: 0px 5px;
			z-index: 1;
			width: 72px;
			margin-top:10px;
			line-height: 20px;
			text-transform: uppercase;
			&::before {
				content: '';
				position: absolute;
				width: 0;
				height: 0;
				top: 5px;
				border-width: 10px 6px;
				border-style: solid;
                z-index: -1;
                border-color:${ badge.SecondBg } ${ badge.SecondBg } ${ badge.SecondBg } transparent !important;
				left: -11px;
			}
			&::after {
				content: '';
                position: absolute;
                width: 0;
                height: 0;
                top: 5px;
	            right: -11px;
                border-width: 10px 6px;
                border-style: solid;
                border-color:${ badge.SecondBg } transparent ${ badge.SecondBg } ${ badge.SecondBg }  !important;
			`;
			break;
		case 'bdgAdvanced2':
			bdgeAdvanced = (
				<svg
					className="asnp-ew-svg1"
					width="94"
					height="101"
					viewBox="0 0 94 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M85.0357 7.89259C63.8562 14.5349 46.91 0 46.91 0C46.91 0 29.9638 14.5349 8.78433 7.89259C-2.00019 18.2728 -12.0121 76.002 46.91 100.09C105.826 76.002 95.8137 18.2728 85.0357 7.89259Z"
						fill={ `${ badge.mainBg }` }
					/>
					<path
						d="M46.91 93.5128C19.4455 81.4656 10.4011 62.1704 7.68057 47.9156C4.92114 33.4523 7.95327 20.5845 11.1672 14.7628C14.1019 15.3749 17.0886 15.6875 20.0818 15.6875C20.0818 15.6875 20.0818 15.6875 20.0883 15.6875C32.1194 15.6875 41.8067 10.7318 46.91 7.44326C52.0133 10.7318 61.7006 15.6875 73.7317 15.6875C76.7249 15.6875 79.7116 15.3749 82.6463 14.7628C85.8603 20.5845 88.8924 33.4458 86.1329 47.9156C83.419 62.1704 74.3745 81.4721 46.91 93.5128Z"
						stroke="#EBEBEB"
						strokeWidth="4"
						strokeMiterlimit="10"
					/>
				</svg>
			);
			badgeIconOne = `
			position: relative;
            letter-spacing: 0.52px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-align: center;
            font-size: 14px;
	        opacity: 1;
	        top:${ badge.badgePositionY == 'bottom' ? '36px' : '23px' } ;
			left: ${ badge.badgePositionX == 'right' ? '20px' : '' };
			`;
			badgeIconTwo = `
			background-color: ${ badge.SecondBg };
			display: block;
			padding: 0px 5px;
			z-index: 1;
			width: 72px;
			margin-top:10px;
			line-height: 20px;
			text-transform: uppercase;
			&::before {
				content: '';
				position: absolute;
				width: 0;
				height: 0;
				top: 5px;
				border-width: 10px 6px;
				border-style: solid;
                z-index: -1;
                border-color:${ badge.SecondBg } ${ badge.SecondBg } ${ badge.SecondBg } transparent !important;
				left: -11px;
			}
			&::after {
				content: '';
                position: absolute;
                width: 0;
                height: 0;
                top: 5px;
	            right: -11px;
                border-width: 10px 6px;
                border-style: solid;
                border-color:${ badge.SecondBg } transparent ${ badge.SecondBg } ${ badge.SecondBg }  !important;
			`;
			break;
		case 'bdgAdvanced3':
			bdgeAdvanced = (
				<svg
					className="asnp-ew-svg1"
					width="94"
					height="101"
					viewBox="0 0 94 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M85.0357 7.89259C63.8562 14.5349 46.91 0 46.91 0C46.91 0 29.9638 14.5349 8.78433 7.89259C-2.00019 18.2728 -12.0121 76.002 46.91 100.09C105.826 76.002 95.8137 18.2728 85.0357 7.89259Z"
						fill={ `${ badge.mainBg }` }
					/>
					<path
						d="M46.91 93.5128C19.4455 81.4656 10.4011 62.1704 7.68057 47.9156C4.92114 33.4523 7.95327 20.5845 11.1672 14.7628C14.1019 15.3749 17.0886 15.6875 20.0818 15.6875C20.0818 15.6875 20.0818 15.6875 20.0883 15.6875C32.1194 15.6875 41.8067 10.7318 46.91 7.44326C52.0133 10.7318 61.7006 15.6875 73.7317 15.6875C76.7249 15.6875 79.7116 15.3749 82.6463 14.7628C85.8603 20.5845 88.8924 33.4458 86.1329 47.9156C83.419 62.1704 74.3745 81.4721 46.91 93.5128Z"
						stroke="#EBEBEB"
						strokeWidth="4"
						strokeMiterlimit="10"
					/>
				</svg>
			);
			badgeIconOne = `
			position: relative;
            letter-spacing: 0.52px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-align: center;
            font-size: 14px;
	        opacity: 1;
	        top:${ badge.badgePositionY == 'bottom' ? '36px' : '23px' } ;
			left: ${ badge.badgePositionX == 'right' ? '20px' : '' };
			`;
			badgeIconTwo = `
			background-color: ${ badge.SecondBg };
			display: block;
			padding: 0px 5px;
			z-index: 1;
			width: 72px;
			margin-top:10px;
			line-height: 20px;
			text-transform: uppercase;
			&::before {
				content: '';
				position: absolute;
				width: 0;
				height: 0;
				top: 5px;
				border-width: 10px 6px;
				border-style: solid;
                z-index: -1;
                border-color:${ badge.SecondBg } ${ badge.SecondBg } ${ badge.SecondBg } transparent !important;
				left: -11px;
			}
			&::after {
				content: '';
                position: absolute;
                width: 0;
                height: 0;
                top: 5px;
	            right: -11px;
                border-width: 10px 6px;
                border-style: solid;
                border-color:${ badge.SecondBg } transparent ${ badge.SecondBg } ${ badge.SecondBg }  !important;
			`;
			break;
		case 'bdgAdvanced4':
			bdgeAdvanced = (
				<svg
					className="asnp-ew-svg1"
					width="94"
					height="101"
					viewBox="0 0 94 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M85.0357 7.89259C63.8562 14.5349 46.91 0 46.91 0C46.91 0 29.9638 14.5349 8.78433 7.89259C-2.00019 18.2728 -12.0121 76.002 46.91 100.09C105.826 76.002 95.8137 18.2728 85.0357 7.89259Z"
						fill={ `${ badge.mainBg }` }
					/>
					<path
						d="M46.91 93.5128C19.4455 81.4656 10.4011 62.1704 7.68057 47.9156C4.92114 33.4523 7.95327 20.5845 11.1672 14.7628C14.1019 15.3749 17.0886 15.6875 20.0818 15.6875C20.0818 15.6875 20.0818 15.6875 20.0883 15.6875C32.1194 15.6875 41.8067 10.7318 46.91 7.44326C52.0133 10.7318 61.7006 15.6875 73.7317 15.6875C76.7249 15.6875 79.7116 15.3749 82.6463 14.7628C85.8603 20.5845 88.8924 33.4458 86.1329 47.9156C83.419 62.1704 74.3745 81.4721 46.91 93.5128Z"
						stroke="#EBEBEB"
						strokeWidth="4"
						strokeMiterlimit="10"
					/>
				</svg>
			);
			badgeIconOne = `
			position: relative;
            letter-spacing: 0.52px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-align: center;
            font-size: 14px;
	        opacity: 1;
	        top:${ badge.badgePositionY == 'bottom' ? '36px' : '23px' } ;
			left: ${ badge.badgePositionX == 'right' ? '20px' : '' };
			`;
			badgeIconTwo = `
			background-color: ${ badge.SecondBg };
			display: block;
			padding: 0px 5px;
			z-index: 1;
			width: 72px;
			margin-top:10px;
			line-height: 20px;
			text-transform: uppercase;
			&::before {
				content: '';
				position: absolute;
				width: 0;
				height: 0;
				top: 5px;
				border-width: 10px 6px;
				border-style: solid;
                z-index: -1;
                border-color:${ badge.SecondBg } ${ badge.SecondBg } ${ badge.SecondBg } transparent !important;
				left: -11px;
			}
			&::after {
				content: '';
                position: absolute;
                width: 0;
                height: 0;
                top: 5px;
	            right: -11px;
                border-width: 10px 6px;
                border-style: solid;
                border-color:${ badge.SecondBg } transparent ${ badge.SecondBg } ${ badge.SecondBg }  !important;
			`;
			break;
		case 'bdgAdvanced5':
			bdgeAdvanced = (
				<svg
					className="asnp-ew-svg1"
					width="377"
					height="359"
					viewBox="0 0 377 359"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M188.45 0.599976L246.68 118.58L376.87 137.5L282.66 229.33L304.9 359L188.45 297.78L72 359L94.24 229.33L0.0300293 137.5L130.23 118.58L188.45 0.599976Z"
						fill={ `${ badge.mainBg }` }
					/>
				</svg>
			);
			badgeIconOne = `
			position: relative;
            letter-spacing: 0.52px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-align: center;
            font-size: 14px;
	        opacity: 1;
	        top:${ badge.badgePositionY == 'bottom' ? '29px' : '17px' } ;
			left: ${ badge.badgePositionX == 'right' ? '20px' : '5px' };
			`;
			badgeIconTwo = `
			background-color: ${ badge.SecondBg };
			display: block;
			padding: 0px 5px;
			z-index: 1;
			width: 72px;
			margin-top:30px;
			line-height: 20px;
			text-transform: uppercase;
			&::before {
				content: '';
				position: absolute;
				width: 0;
				height: 0;
				top: 30px;
				border-width: 10px 6px;
				border-style: solid;
                z-index: -1;
                border-color:${ badge.SecondBg } ${ badge.SecondBg } ${ badge.SecondBg } transparent !important;
				left: -11px;
			}
			&::after {
				content: '';
                position: absolute;
                width: 0;
                height: 0;
                top: 30px;
	            right: -11px;
                border-width: 10px 6px;
                border-style: solid;
                border-color:${ badge.SecondBg } transparent ${ badge.SecondBg } ${ badge.SecondBg }  !important;
			`;
			break;
		default:
			bdgeAdvanced = '';
	}

	useEffect( () => {
		if (
			badge.badgeStyles == 'badge5' &&
			badge.badgePositionY == 'bottom' &&
			badge.badgePositionX == 'left'
		) {
			setHoriz( 'true' );
			setVert( 'true' );
			setRotationz( '270' );
		} else if (
			badge.badgeStyles == 'badge5' &&
			badge.badgePositionY == 'bottom' &&
			badge.badgePositionX == 'right'
		) {
			setHoriz( 'true' );
			setVert( 'true' );
			setRotationz( '90' );
		} else {
			setHoriz( 'false' );
			setVert( 'false' );
			setRotationz( '0' );
		}
	}, [ badge.badgeStyles ] );

	if ( 'front' === site ) {
		return (
			<Front
				whatsapp={ whatsapp }
				open={ open }
				setOpen={ setOpen }
				loader={ loader }
				getCaption={ getCaption }
				icon={ icon }
				settings={ settings }
				buttonEl={ buttonEl }
				getWhatsAppUrl={ getWhatsAppUrl }
				IMAGES_URL={ IMAGES_URL }
			/>
		);
	}
	return (
		<Admin
			badge={ badge }
			IMAGES_URL={ IMAGES_URL }
			badgeIcon={ badgeIcon }
			badgeIconOne={ badgeIconOne }
			badgeIconTwo={ badgeIconTwo }
			icon={ icon }
			bdgeAdvanced={ bdgeAdvanced }
			horizAndvert={ horizAndvert }
		/>
	);
};

export default WhatsAppButton;
