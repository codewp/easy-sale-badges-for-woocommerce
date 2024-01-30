import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import styled, { StyleSheetManager } from 'styled-components';
import { toBool } from './../../utils';
import BadgeCssandAdv from '../../utils/constants';

import './style.scss';

const Span = styled.div`
	${ ( props ) => props.badgeIcon }
`;

const SpanOne = styled.div`
	${ ( props ) => props.badgeIconOne }
`;

const SpanTwo = styled.div`
	${ ( props ) => props.badgeIconTwo }
`;

const StyledSpan = ( props ) => (
	<StyleSheetManager shouldForwardProp={ ( prop ) => prop !== 'badgeIcon' }>
		<Span { ...props } />
	</StyleSheetManager>
);

const StyledSpanOne = ( props ) => (
	<StyleSheetManager
		shouldForwardProp={ ( prop ) => prop !== 'badgeIconOne' }
	>
		<SpanOne { ...props } />
	</StyleSheetManager>
);

const StyledSpanTwo = ( props ) => (
	<StyleSheetManager
		shouldForwardProp={ ( prop ) => prop !== 'badgeIconTwo' }
	>
		<SpanTwo { ...props } />
	</StyleSheetManager>
);

const BadgeButton = ( { badge, IMAGES_URL = '', updateBadge } ) => {
	const { badgeIcon, badgeIconOne, badgeIconTwo } = BadgeCssandAdv( badge );

	const [ horiz, setHoriz ] = useState( toBool( badge.horizontal ) );
	const [ vert, setVert ] = useState( toBool( badge.vertical ) );
	const [ rotationz, setRotationz ] = useState( badge.rotationZ );

	let insetProperty = '';

	if ( badge.badgePositionY == 'top' && badge.badgePositionX == 'left' ) {
		insetProperty = `${ badge.badgePositionTop }px auto auto ${ badge.badgePositionLeft }px`;
	} else if (
		badge.badgePositionY == 'top' &&
		badge.badgePositionX == 'right'
	) {
		insetProperty = `${ badge.badgePositionTop }px ${ badge.badgePositionRight }px auto auto`;
	} else if (
		badge.badgePositionY == 'bottom' &&
		badge.badgePositionX == 'left'
	) {
		insetProperty = `auto auto ${ badge.badgePositionBottom }px ${ badge.badgePositionLeft }px`;
	} else if (
		badge.badgePositionY == 'bottom' &&
		badge.badgePositionX == 'right'
	) {
		insetProperty = `auto ${ badge.badgePositionRight }px ${ badge.badgePositionBottom }px auto`;
	} else if (
		badge.badgePositionY == 'top' &&
		badge.badgePositionX == 'center'
	) {
		insetProperty = `${ badge.badgePositionTop }px auto auto 55px`;
	} else if (
		badge.badgePositionY == 'bottom' &&
		badge.badgePositionX == 'center'
	) {
		insetProperty = `auto auto ${ badge.badgePositionBottom }px 55px`;
	} else if (
		badge.badgePositionY == 'center' &&
		badge.badgePositionX == 'left'
	) {
		insetProperty = `70px auto auto ${ badge.badgePositionLeft }px`;
	} else if (
		badge.badgePositionY == 'center' &&
		badge.badgePositionX == 'right'
	) {
		insetProperty = `70px ${ badge.badgePositionRight }px auto auto`;
	}

	let heightContBadge = '';
	let widthContBadge = '';

	if (
		badge.badgeStyles == 'badge5' ||
		badge.badgeStyles == 'badge6' ||
		badge.badgeStyles == 'badge7' ||
		badge.badgeStyles == 'badge8'
	) {
		heightContBadge = `${ badge.widthBadge }px`;
	} else if (
		badge.badgeStyles == 'badge9' ||
		badge.badgeStyles == 'badge10'
	) {
		heightContBadge = `${ badge.widthBadge - 15 }px`;
	} else if ( badge.badgeStyles == 'badge12' ) {
		heightContBadge = '';
	} else {
		heightContBadge = `${ badge.heightBadge }px`;
	}

	if ( badge.badgeStyles == 'badge11' ) {
		widthContBadge = '100%';
	} else {
		widthContBadge = `${ badge.widthBadge }px`;
	}

	useEffect( () => {
		if (
			( badge.badgeStyles === 'badge2' ||
				badge.badgeStyles === 'badge3' ||
				badge.badgeStyles === 'badge4' ) &&
			badge.badgePositionX === 'left'
		) {
			updateBadge( 'heightBadge', '30' );
			updateBadge( 'topRightRadius', '0' );
			updateBadge( 'bottomRightRadius', '0' );
		} else if (
			( badge.badgeStyles === 'badge2' ||
				badge.badgeStyles === 'badge3' ||
				badge.badgeStyles === 'badge4' ) &&
			badge.badgePositionX === 'right'
		) {
			updateBadge( 'heightBadge', '30' );
			updateBadge( 'topLeftRadius', '0' );
			updateBadge( 'bottomLeftRadius', '0' );
		} else if (
			( badge.badgeStyles === 'badge5' ||
				badge.badgeStyles === 'badge6' ||
				badge.badgeStyles === 'badge8' ||
				badge.badgeStyles === 'badge9' ||
				badge.badgeStyles === 'badge10' ||
				badge.badgeStyles === 'badge11' ||
				badge.badgeStyles === 'badge12' ||
				badge.badgeStyles === 'badge13' ) &&
			( badge.badgePositionX === 'right' ||
				badge.badgePositionX === 'left' )
		) {
			updateBadge( 'topRightRadius', '0' );
			updateBadge( 'bottomRightRadius', '0' );
			updateBadge( 'topLeftRadius', '0' );
			updateBadge( 'bottomLeftRadius', '0' );
		}
		if ( badge.badgeStyles == 'badge13' ) {
			updateBadge( 'widthBadge', '49' );
		}
	}, [ badge.badgeStyles, badge.badgePositionX ] );

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

	let textNoWrap;

	if ( badge.badgeStyles == 'badge13' ) {
		textNoWrap = 'normal';
	} else {
		textNoWrap = 'nowrap';
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

	const updatedBadgeLabel = badge.badgeLabel
		.replace( /\[regular_price\]/g, '100$' )
		.replace( /\[price\]/g, '80$' )
		.replace( /\[sale_price\]/g, '80$' )
		.replace( /\[saved_percent\]/g, '20%' )
		.replace( /\[saved_price\]/g, '20$' )
		.replace( /\[sale_ends\]/g, '8' )
		.replace( /\[currency\]/g, '$' )
		.replace( /\[qty\]/g, '11' )
		.replace( /\[sku\]/g, 'sku' );

	return (
		<div className="asnp-esb-wrapper">
			<div className="asnp-esb-containerAd">
				<div className="asnp-esb-product">
					<label className="asnp-esb-productLable">
						{ __( 'Preview', 'easy-sale-badges-for-woocommerce' ) }
					</label>
					<div className="asnp-esb-product2">
						<div
							className="asnp-esb-productImg"
							style={ {
								backgroundImage: `url(${ IMAGES_URL }headphone-k.png)`,
							} }
						>
							{ badge.imgbadge == 0 &&
								badge.imgbadgeAdv == 0 &&
								badge.useTimerBadge == 0 && (
									<div
										className="asnp-esb-productBadge"
										style={ {
											width: `${ widthContBadge }`,
											height: `${ heightContBadge }`,
											inset: `${ insetProperty }`,
										} }
									>
										<StyledSpan
											badgeIcon={ badgeIcon }
											className="asnp-esb-productBadge2"
											style={ {
												color: `${ badge.textColor }`,
												fontSize: `${ badge.fontSizeText }px`,
												fontWeight: `${ badge.fontWeightLabel }`,
												lineHeight: `${ badge.lineHeightText }px`,
												opacity: `${ badge.opacity }`,
												borderTopLeftRadius: `${ badge.topLeftRadius }px`,
												borderTopRightRadius: `${ badge.topRightRadius }px`,
												borderBottomLeftRadius: `${ badge.bottomLeftRadius }px`,
												borderBottomRightRadius: `${ badge.bottomRightRadius }px`,
												zIndex: `${ badge.zIndex }`,
												transform: `rotateX(${ badge.rotationX }deg) rotateY(${ badge.rotationY }deg) rotateZ(${ badge.rotationZ }deg)`,
											} }
										>
											<StyledSpanTwo
												badgeIconTwo={ badgeIconTwo }
											></StyledSpanTwo>
											<StyledSpanOne
												badgeIconOne={ badgeIconOne }
											>
												<div
													style={ {
														transform: `${ horizAndvert }`,
														whiteSpace: `${ textNoWrap }`,
													} }
												>
													{ updatedBadgeLabel }
												</div>
											</StyledSpanOne>
										</StyledSpan>
									</div>
								) }
						</div>
					</div>
					<div className="asnp-mt-4 asnp-ml-40 asnp-text-base asnp-text-black">
						<del className="asnp-text-gray-400">
							{ __( '$100', 'easy-sale-badges-for-woocommerce' ) }
						</del>
						<span className="asnp-ml-1">
							{ __( '$80', 'easy-sale-badges-for-woocommerce' ) }
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BadgeButton;
