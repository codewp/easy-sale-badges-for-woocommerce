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
		badge.secondBg = '#AD2525';
	} else if ( badge.badgeAdv == 'bdgAdvanced2' ) {
		badge.mainBg = '#F78DA7';
		badge.secondBg = '#DABECA';
	} else if ( badge.badgeAdv == 'bdgAdvanced3' ) {
		badge.mainBg = '#37116F';
		badge.secondBg = '#43AA8B';
	} else if ( badge.badgeAdv == 'bdgAdvanced4' ) {
		badge.mainBg = '#FF9F24';
		badge.secondBg = '#EADB45';
	} else if ( badge.badgeAdv == 'bdgAdvanced5' ) {
		badge.mainBg = '#141E27';
		badge.secondBg = '#EB144C';
	} else if ( badge.badgeAdv == 'bdgAdvanced6' ) {
		badge.mainBg = '#006D77';
		badge.secondBg = '#E5E7EB';
	} else if ( badge.badgeAdv == 'bdgAdvanced7' ) {
		badge.mainBg = '#F77F00';
		badge.secondBg = '#EB144C';
	} else if ( badge.badgeAdv == 'bdgAdvanced8' ) {
		badge.mainBg = '#F78DA7';
		badge.secondBg = '#006D77';
	} else if ( badge.badgeAdv == 'bdgAdvanced9' ) {
		badge.mainBg = '#141E27';
		badge.secondBg = '#EB144C';
	} else if ( badge.badgeAdv == 'bdgAdvanced10' ) {
		badge.mainBg = '#006D77';
		badge.secondBg = '#FFD488';
	} else if ( badge.badgeAdv == 'bdgAdvanced11' ) {
		badge.mainBg = '#6A20C8';
		badge.secondBg = '#A43BC9';
	} else if ( badge.badgeAdv == 'bdgAdvanced12' ) {
		badge.mainBg = '#D05262';
		badge.secondBg = '#6C1907';
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
	if ( badge.horizontal === 1 && badge.vertical === 1 ) {
		horizAndvert = 'scaleX( -1 ) ScaleY(-1)';
	} else if ( badge.horizontal === 1 && badge.vertical === 0 ) {
		horizAndvert = 'scaleX( -1 )';
	} else if ( badge.horizontal === 0 && badge.vertical === 1 ) {
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
			setHoriz( 1 );
			setVert( 1 );
			setRotationz( '270' );
		} else if (
			badge.badgeStyles == 'badge5' &&
			badge.badgePositionY == 'bottom' &&
			badge.badgePositionX == 'right'
		) {
			setHoriz( 1 );
			setVert( 1 );
			setRotationz( '90' );
		} else {
			setHoriz( 0 );
			setVert( 0 );
			setRotationz( '0' );
		}
	}, [ badge.badgeStyles ] );

	const {
		badgeIcon,
		badgeIconOne,
		badgeIconTwo,
		bdgeAdvanced,
		icon,
		badgeTimerDiv,
		badgeTimerCont,
		TimerDate,
		Label,
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
			badgeTimerDiv={ badgeTimerDiv }
			badgeTimerCont={ badgeTimerCont }
			TimerDate={ TimerDate }
			Label={ Label }
			bdgeAdvanced={ bdgeAdvanced }
			horizAndvert={ horizAndvert }
		/>
	);
};

export default WhatsAppButton;
