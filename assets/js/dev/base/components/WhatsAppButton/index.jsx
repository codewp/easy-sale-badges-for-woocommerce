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

	useEffect( () => {
		if ( badge.badgeAdv == 'bdgAdvanced1' ) {
			updateBadge( 'mainBg', '#141E27' );
			updateBadge( 'secondBg', '#AD2525' );
		} else if ( badge.badgeAdv == 'bdgAdvanced2' ) {
			updateBadge( 'mainBg', '#F78DA7' );
			updateBadge( 'secondBg', '#DABECA' );
		} else if ( badge.badgeAdv == 'bdgAdvanced3' ) {
			updateBadge( 'mainBg', '#37116F' );
			updateBadge( 'secondBg', '#43AA8B' );
		} else if ( badge.badgeAdv == 'bdgAdvanced4' ) {
			updateBadge( 'mainBg', '#FF9F24' );
			updateBadge( 'secondBg', '#EADB45' );
		} else if ( badge.badgeAdv == 'bdgAdvanced5' ) {
			updateBadge( 'mainBg', '#141E27' );
			updateBadge( 'secondBg', '#EB144C' );
		} else if ( badge.badgeAdv == 'bdgAdvanced6' ) {
			updateBadge( 'mainBg', '#006D77' );
			updateBadge( 'secondBg', '#E5E7EB' );
		} else if ( badge.badgeAdv == 'bdgAdvanced7' ) {
			updateBadge( 'mainBg', '#F77F00' );
			updateBadge( 'secondBg', '#EB144C' );
		} else if ( badge.badgeAdv == 'bdgAdvanced8' ) {
			updateBadge( 'mainBg', '#F78DA7' );
			updateBadge( 'secondBg', '#006D77' );
		} else if ( badge.badgeAdv == 'bdgAdvanced9' ) {
			updateBadge( 'mainBg', '#141E27' );
			updateBadge( 'secondBg', '#EB144C' );
		} else if ( badge.badgeAdv == 'bdgAdvanced10' ) {
			updateBadge( 'mainBg', '#006D77' );
			updateBadge( 'secondBg', '#FFD488' );
		} else if ( badge.badgeAdv == 'bdgAdvanced11' ) {
			updateBadge( 'mainBg', '#6A20C8' );
			updateBadge( 'secondBg', '#A43BC9' );
		} else if ( badge.badgeAdv == 'bdgAdvanced12' ) {
			updateBadge( 'mainBg', '#D05262' );
			updateBadge( 'secondBg', '#6C1907' );
		}
	}, [ badge.badgeAdv ] );

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
