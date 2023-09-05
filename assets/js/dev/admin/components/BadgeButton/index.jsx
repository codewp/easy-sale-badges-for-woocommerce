import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import styled, { StyleSheetManager } from 'styled-components';
import { toBool } from './../../utils';
import BadgeCssandAdv from '../../utils/constants';

import './style.scss';

const Span = styled.div`
	${ ( props ) => props.badgeIcon }
`;

const Div = styled.div`
	${ ( props ) => props.badgeTimerDiv }
`;

const DivOne = styled.div`
	${ ( props ) => props.badgeTimerCont }
`;

const Time = styled.div`
	${ ( props ) => props.TimerDate }
`;

const LabelTimer = styled.div`
	${ ( props ) => props.Label }
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

const StyledSpanDiv = ( props ) => (
	<StyleSheetManager
		shouldForwardProp={ ( prop ) => prop !== 'badgeTimerDiv' }
	>
		<Div { ...props } />
	</StyleSheetManager>
);

const StyledSpanDivOne = ( props ) => (
	<StyleSheetManager
		shouldForwardProp={ ( prop ) => prop !== 'badgeTimerCont' }
	>
		<DivOne { ...props } />
	</StyleSheetManager>
);

const StyledSpanTime = ( props ) => (
	<StyleSheetManager shouldForwardProp={ ( prop ) => prop !== 'TimerDate' }>
		<Time { ...props } />
	</StyleSheetManager>
);
const StyledSpanLabelTimer = ( props ) => (
	<StyleSheetManager shouldForwardProp={ ( prop ) => prop !== 'Label' }>
		<LabelTimer { ...props } />
	</StyleSheetManager>
);

const BadgeButton = ( { badge, IMAGES_URL = '', updateBadge } ) => {
	const {
		badgeIcon,
		badgeIconOne,
		badgeIconTwo,
		bdgeAdvanced,
		badgeTimerDiv,
		badgeTimerCont,
		TimerDate,
		Label,
	} = BadgeCssandAdv( badge );

	const [ horiz, setHoriz ] = useState( toBool( badge.horizontal ) );
	const [ vert, setVert ] = useState( toBool( badge.vertical ) );
	const [ rotationz, setRotationz ] = useState( badge.rotationZ );
	const [ timer, setTimer ] = useState( {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	} );

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
			updateBadge( 'widthBadge', '50' );
		}
	}, [ badge.badgeStyles, badge.badgePositionX ] );

	useEffect( () => {
		if ( badge.useTimerBadge == 1 ) {
			const interval = setInterval( updateTimer, 1000 );
			return () => clearInterval( interval );
		}
	}, [ badge.selectedDateTo ] );

	const updateTimer = () => {
		const toDate = new Date( badge.selectedDateTo );
		const now = new Date( whatsappData.now );
		const timeDifference = toDate - now;

		if ( timeDifference > 0 ) {
			const days = Math.floor( timeDifference / ( 1000 * 60 * 60 * 24 ) );
			const hours = Math.floor(
				( timeDifference % ( 1000 * 60 * 60 * 24 ) ) /
					( 1000 * 60 * 60 )
			);
			const minutes = Math.floor(
				( timeDifference % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 )
			);
			const seconds = Math.floor(
				( timeDifference % ( 1000 * 60 ) ) / 1000
			);

			setTimer( {
				days,
				hours,
				minutes,
				seconds,
			} );
		}
	};

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

	return (
		<div className="asnp-esb-wrapper">
			<div className="asnp-esb-containerAd">
				<div className="asnp-esb-product">
					<label className="asnp-esb-productLable">
						{ __( 'Preview', 'asnp-easy-sale-badge' ) }
					</label>
					<div className="asnp-esb-product2">
						<div
							className="asnp-esb-productImg"
							style={ {
								backgroundImage: `url(${ IMAGES_URL }headphone-k.png)`,
							} }
						>
							{ badge.imgbadge == 1 && (
								<div
									className="asnp-esb-productBadge"
									style={ {
										width: `${ badge.widthBadgeImg }px`,
										height: `${ badge.widthBadgeImg }px`,
										inset: `${ insetProperty }`,
									} }
								>
									<span
										style={ {
											opacity: `${ badge.opacityImg }`,
											zIndex: `${ badge.zIndexImg }`,
											position: 'absolute',
											transform: `rotateX(${ badge.rotationXImg }deg) rotateY(${ badge.rotationYImg }deg) rotateZ(${ badge.rotationZImg }deg)`,
										} }
									>
										<img src={ badge.badgeImage } />
									</span>
								</div>
							) }
							{ badge.imgbadgeAdv == 1 && (
								<div
									className="asnp-esb-productBadge"
									style={ {
										width: `90px`,
										height: '90px',
										inset: `${ insetProperty }`,
									} }
								>
									<span
										style={ {
											color: `${ badge.textColor }`,
											height: '90px',
											opacity: `${ badge.opacityImg }`,
											zIndex: `${ badge.zIndexImg }`,
											position: 'absolute',
										} }
									>
										<StyledSpanOne
											badgeIconOne={ badgeIconOne }
										>
											{ bdgeAdvanced }
											<StyledSpanTwo
												badgeIconTwo={ badgeIconTwo }
											>
												<div
													style={ {
														fontSize: `${ badge.fontSizeText }px`,
														fontWeight: '700',
													} }
												>
													{ badge.badgeLabelAdv }
												</div>
											</StyledSpanTwo>
										</StyledSpanOne>
									</span>
								</div>
							) }
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
													} }
												>
													{ badge.badgeLabel }
												</div>
											</StyledSpanOne>
										</StyledSpan>
									</div>
								) }
							{ badge.useTimerBadge == 1 && (
								<div
									className="asnp-esb-productBadge"
									style={ {
										inset: `${ insetProperty }`,
										opacity: `${ badge.opacity }`,
										zIndex: `${ badge.zIndex }`,
									} }
								>
									<StyledSpanDiv
										badgeTimerDiv={ badgeTimerDiv }
									>
										<StyledSpanDivOne
											badgeTimerCont={ badgeTimerCont }
										>
											<StyledSpanTime
												TimerDate={ TimerDate }
												style={ {
													fontSize: `${ badge.fontSizeLabelTimer }px`,
													lineHeight: `${ badge.lineHeightLabelTimer }px`,
												} }
											>
												{ timer.days }
											</StyledSpanTime>
											<StyledSpanLabelTimer
												Label={ Label }
											>
												{ badge.labelDayTimer }
											</StyledSpanLabelTimer>
										</StyledSpanDivOne>
										<StyledSpanDivOne
											badgeTimerCont={ badgeTimerCont }
										>
											<StyledSpanTime
												TimerDate={ TimerDate }
												style={ {
													fontSize: `${ badge.fontSizeLabelTimer }px`,
													lineHeight: `${ badge.lineHeightLabelTimer }px`,
												} }
											>
												{ timer.hours }
											</StyledSpanTime>
											<StyledSpanLabelTimer
												Label={ Label }
											>
												{ badge.labelHoursTimer }
											</StyledSpanLabelTimer>
										</StyledSpanDivOne>
										<StyledSpanDivOne
											badgeTimerCont={ badgeTimerCont }
										>
											<StyledSpanTime
												TimerDate={ TimerDate }
												style={ {
													fontSize: `${ badge.fontSizeLabelTimer }px`,
													lineHeight: `${ badge.lineHeightLabelTimer }px`,
												} }
											>
												{ timer.minutes }
											</StyledSpanTime>
											<StyledSpanLabelTimer
												Label={ Label }
											>
												{ badge.labelMinTimer }
											</StyledSpanLabelTimer>
										</StyledSpanDivOne>
										<StyledSpanDivOne
											badgeTimerCont={ badgeTimerCont }
										>
											<StyledSpanTime
												TimerDate={ TimerDate }
												style={ {
													fontSize: `${ badge.fontSizeLabelTimer }px`,
													lineHeight: `${ badge.lineHeightLabelTimer }px`,
												} }
											>
												{ timer.seconds }
											</StyledSpanTime>
											<StyledSpanLabelTimer
												Label={ Label }
											>
												{ badge.labelSecTimer }
											</StyledSpanLabelTimer>
										</StyledSpanDivOne>
									</StyledSpanDiv>
								</div>
							) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BadgeButton;
