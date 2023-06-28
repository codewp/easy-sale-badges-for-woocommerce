import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import Admin from './Admin';
import Front from './Front';

import './style.scss';
import { toBool } from '../../utils';
import BadgeCssandAdv from '../../../admin/utils/constants';

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
	} else if ( badge.badgeAdv == 'bdgAdvanced5' ) {
		badge.mainBg = '#141E27';
		badge.SecondBg = '#EB144C';
	} else if ( badge.badgeAdv == 'bdgAdvanced6' ) {
		badge.mainBg = '#006D77';
		badge.SecondBg = '#E5E7EB';
	} else if ( badge.badgeAdv == 'bdgAdvanced7' ) {
		badge.mainBg = '#F77F00';
		badge.SecondBg = '#EB144C';
	} else if ( badge.badgeAdv == 'bdgAdvanced8' ) {
		badge.mainBg = '#F78DA7';
		badge.SecondBg = '#006D77';
	} else if ( badge.badgeAdv == 'bdgAdvanced9' ) {
		badge.mainBg = '#141E27';
		badge.SecondBg = '#EB144C';
	} else if ( badge.badgeAdv == 'bdgAdvanced10' ) {
		badge.mainBg = '#006D77';
		badge.SecondBg = '#FFD488';
	} else if ( badge.badgeAdv == 'bdgAdvanced11' ) {
		badge.mainBg = '#6A20C8';
		badge.SecondBg = '#A43BC9';
	} else if ( badge.badgeAdv == 'bdgAdvanced12' ) {
		badge.mainBg = '#D05262';
		badge.SecondBg = '#6C1907';
	}

	if ( badge.badgeStyles === 'badge2' ) {
		badge.heightBadge = '30';
	} else if ( badge.badgeStyles === 'badge3' ) {
		badge.heightBadge = '30';
	} else if ( badge.badgeStyles === 'badge4' ) {
		badge.heightBadge = '30';
	} else if ( badge.badgeStyles === 'badge13' ) {
		badge.widthBadge = '50';
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

	const {
		badgeIcon,
		badgeIconOne,
		badgeIconTwo,
		bdgeAdvanced,
		icon,
	} = BadgeCssandAdv( badge );

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
			icon={ icon }
			badgeIcon={ badgeIcon }
			badgeIconOne={ badgeIconOne }
			badgeIconTwo={ badgeIconTwo }
			bdgeAdvanced={ bdgeAdvanced }
			horizAndvert={ horizAndvert }
		/>
	);
};

export default WhatsAppButton;
