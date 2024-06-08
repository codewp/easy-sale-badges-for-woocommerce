export default function BadgePreview( badge ) {
	let badgeIconPr = '';
	let badgeIconOnePr = '';
	let badgeIconTwoPr = '';
	switch ( badge.badgeStyles ) {
		case 'badge1':
			badgeIconPr = `background: ${ badge.badgeColor };
			top: 0px;
            height: 30px;
			width: 60px;
			position: absolute;
			opacity: ${ badge.opacity };
			text-align: center;
            text-shadow: none;
            
			`;
			break;
		case 'badge2':
			badgeIconPr = `
			text-align: center;
			display: inline-block;
			position: absolute;
			opacity: ${ badge.opacity };
			top: 0px;
			height: 30px;
			width: 60px;
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
			badgeIconPr = `
			position: absolute;
			background: ${ badge.badgeColor };
			text-align: center;
			border-radius: 3px;
			opacity: ${ badge.opacity };
            height:  30px;
			width: 60px;
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
			badgeIconPr = `
			border-radius: 3px;
			padding: 0px 15px;
			position: absolute;
			opacity: ${ badge.opacity };
			display: inline-block;
			background: ${ badge.badgeColor };
			top: 0px;
			height:  30px;
			width: 60px;
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
			badgeIconPr = `
				position: absolute;
				display: block;
				width: 60px;
				height: 60px;
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
			badgeIconOnePr = `
				background: ${ badge.badgeColor };
				position: absolute;
				text-align: center;
				z-index: 12;
				transform:${
					badge.badgePositionX == 'right'
						? 'rotate(45deg)'
						: `rotate(315deg)`
				} ;
				width: ${ 60 * 1.5 }px;
				left: ${ badge.badgePositionX == 'right' ? '' : `-${ 60 / 2.4 }px` };
				right: ${ badge.badgePositionX == 'right' ? `-${ 60 / 2.22 }px` : '' };
				top: ${ 60 / 7 }px ;

			`;
			break;
		case 'badge6':
			badgeIconPr = `
			position: absolute;
			height: 60px;
			padding: 0;
			opacity: ${ badge.opacity };
			text-align: center;
			top: 0px;
			width: 60px;
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
			badgeIconOnePr = `
			position: absolute;
			z-index: 14;
			top: 4.02px;
			transform: ${
				badge.badgePositionX == 'right'
					? 'rotate(45deg)'
					: 'rotate(315deg)'
			} ;
			width: ${ 60 * 1.5 }px !important;
			text-align: center;
			display: block;
			left: ${ badge.badgePositionX == 'right' ? '0px' : 'auto' };
			right: ${ badge.badgePositionX == 'right' ? '' : '0px' };
		`;
			badgeIconTwoPr = `width: 0;
		    height: 0;
		    border-right:${
				badge.badgePositionX == 'right'
					? `60px solid ${ badge.badgeColor }`
					: 'none'
			} ;
		    border-bottom: 60px solid transparent;
			border-left:${
				badge.badgePositionX == 'right'
					? ''
					: `60px solid  ${ badge.badgeColor }`
			} ;
		    z-index: 12;
		    display: block;`;
			break;
		case 'badge7':
			badgeIconPr = `
			background: ${ badge.badgeColor };
			position: absolute;
			z-index: 99;
			top: 0px;
			height: 60px;
			width: 60px;
			border-radius: 3px;
			text-align: center;`;
			badgeIconOnePr = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge8':
			badgeIconPr = `
			background: ${ badge.badgeColor };
			height: 60px;
			width: 60px;
            position: absolute;
            z-index: 99;
            top: 0px;
            border-radius: 50% !important;
            text-align: center;`;
			badgeIconOnePr = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge9':
			badgeIconPr = `
			display: block;
			height: ${ 60 / 1.66 }px !important;
			width: 60px;
			background: ${ badge.badgeColor };
			position: absolute;
			z-index: 1;
			opacity: ${ badge.opacity };
			top: 0px;
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
			badgeIconOnePr = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge10':
			badgeIconPr = `
			display: block;
			height: ${ 60 / 1.083 }px !important;
			width: 60px;            
			background: ${ badge.badgeColor };
			position: absolute;
			z-index: 1;
			opacity: ${ badge.opacity };
			top: 0px;
			text-align: center;
			border-radius: 3px 3px ${ 60 / 2.38 }px ${ 60 / 2.38 }px !important;
			`;
			badgeIconOnePr = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge14':
			badgeIconPr = `
			background: ${ badge.badgeColor };
			height: 60px;
			width: 60px;
            position: absolute;
            z-index: 99;
            top: 0px;
            border-radius: 61% 60% 63% 53%/66% 31% 92% 34% !important;
			border:${ badge.borderWidth }px solid ${ badge.borderColor };
            text-align: center;`;
			badgeIconOnePr = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge15':
			badgeIconPr = `
			background: ${ badge.badgeColor };
			height: 60px;
			width: 60px;
            position: absolute;
            z-index: 99;
            top: 0px;
            border-radius: 19% 93% 55% 60%/50% 49% 61% 60% !important;
			border:${ badge.borderWidth }px solid ${ badge.borderColor };
            text-align: center;`;
			badgeIconOnePr = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge16':
			badgeIconPr = `
			background: ${ badge.badgeColor };
			height: 60px;
			width: 60px;
            position: absolute;
            z-index: 99;
            top: 0px;
			border-radius: 70% 30% 30% 70% / 60% 40% 60% 40% !important;
			border:${ badge.borderWidth }px solid ${ badge.borderColor };
			text-align: center;`;
			badgeIconOnePr = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge17':
			badgeIconPr = `
			background: ${ badge.badgeColor };
			height: 60px;
			width: 60px;
            position: absolute;
            z-index: 99;
            top: 0px;
            border-radius: 20% 80% 80% 20% / 50% 50% 50% 50% !important;
			border:${ badge.borderWidth }px solid ${ badge.borderColor };
			text-align: center;`;
			badgeIconOnePr = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge18':
			badgeIconPr = `
			background: ${ badge.badgeColor };
			height: 60px;
			width: 60px;
            position: absolute;
            z-index: 99;
            top: 0px;
            border-radius: 50% 60% 60% 60% / 15% 66% 15% 66% !important;
			border:${ badge.borderWidth }px solid ${ badge.borderColor };
			text-align: center;`;
			badgeIconOnePr = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge19':
			badgeIconPr = `
			border-bottom: solid ${ badge.borderWidth }px ${ badge.badgeColor };
			border-radius: 0 !important;
			top: 0px;
            height: 30px;
			width: 60px;
			position: absolute;
			opacity: ${ badge.opacity };
			text-align: center;
            text-shadow: none;
			`;
			break;
		case 'badge20':
			badgeIconPr = `
			border: solid ${ badge.borderWidth }px ${ badge.badgeColor };
			top: 0px;
            height: 30px;
			width: 60px;
			position: absolute;
			opacity: ${ badge.opacity };
			text-align: center;
            text-shadow: none;
			`;
			break;
	}

	return {
		badgeIconPr,
		badgeIconOnePr,
		badgeIconTwoPr,
	};
}
