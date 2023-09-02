import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import Admin from './Admin';
import BadgeCssandAdv from '../../../admin/utils/constants';
import { toBool } from '../../utils';

import './style.scss';

const BadgeButton = ( { badge, IMAGES_URL = '', updateBadge } ) => {
	const [ horiz, setHoriz ] = useState( toBool( badge.horizontal ) );
	const [ vert, setVert ] = useState( toBool( badge.vertical ) );
	const [ rotationz, setRotationz ] = useState( badge.rotationZ );

	useEffect( () => {
		if ( badge.badgeAdv == 'bdgAdvanced1' ) {
			updateBadge( 'mainBg', '#141E27' );
			updateBadge( 'secondBg', '#AD2525' );
		} else if ( badge.badgeAdv == 'bdgAdvanced2' ) {
			updateBadge( 'mainBg', '#F78DA7' );
			updateBadge( 'secondBg', '#006D77' );
		} else if ( badge.badgeAdv == 'bdgAdvanced3' ) {
			updateBadge( 'mainBg', '#006D77' );
			updateBadge( 'secondBg', '#FFD488' );
		} else if ( badge.badgeAdv == 'bdgAdvanced4' ) {
			updateBadge( 'mainBg', '#f0672e' );
			updateBadge( 'secondBg', '#242015' );
		}
	}, [ badge.badgeAdv ] );

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
			updateBadge={ updateBadge }
		/>
	);
};

export default BadgeButton;
