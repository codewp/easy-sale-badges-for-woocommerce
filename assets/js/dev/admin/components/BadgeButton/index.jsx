import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import styled, { StyleSheetManager } from 'styled-components';
import { toBool } from './../../utils';
import BadgeCssandAdv, {
	getRemainingTime,
	initTimes,
	getNow,
} from '../../utils/constants';
import TimerStyle3 from './TimerStyle3';

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
		badgeTimerDiv,
		badgeTimerCont,
		TimerDate,
		Label,
	} = BadgeCssandAdv( badge );

	useEffect( () => {
		initTimes();
	}, [] );

	const [ horiz, setHoriz ] = useState( toBool( badge.horizontal ) );
	const [ vert, setVert ] = useState( toBool( badge.vertical ) );
	const [ rotationz, setRotationz ] = useState( badge.rotationZ );
	const [ timer, setTimer ] = useState( {
		days: '00',
		hours: '00',
		minutes: '00',
		seconds: '00',
		progress: 0,
	} );
	const [ endTime, setEndTime ] = useState( null );

	/**
	 * Updates the timer based on the badge's timerMode and other settings.
	 */
	const updateTimer = () => {
		let timeDifference;
		let progress = 0;

		const timerMode = badge?.timerMode || 'fromToDate';
		if ( timerMode === 'fromToDate' ) {
			const toDate = new Date(
				badge.selectedDateTo.replace( /-/g, '/' )
			);
			timeDifference = getRemainingTime( toDate );

			if (
				typeof badge.badgeTimer !== 'undefined' &&
				badge.badgeTimer === 'style2'
			) {
				const currentDate = getNow();
				const startDate = new Date(
					badge.selectedDateFrom.replace( /-/g, '/' )
				);
				const elapsed = currentDate - startDate;
				const total = toDate - startDate;
				progress = 100 - ( elapsed / total ) * 100;
			}
		} else if ( timerMode === 'evergreen' && endTime ) {
			const now = Date.now();
			timeDifference = endTime - now;

			if ( badge.badgeTimer === 'style2' ) {
				const evergreenTime = badge.evergreen * 60 * 1000;
				const elapsed = evergreenTime - timeDifference;
				progress = Math.max(
					0,
					100 - ( elapsed / evergreenTime ) * 100
				);
			}
		} else {
			return; // Unsupported timer mode or missing endTime
		}

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
				days: String( days ).padStart( 2, '0' ),
				hours: String( hours ).padStart( 2, '0' ),
				minutes: String( minutes ).padStart( 2, '0' ),
				seconds: String( seconds ).padStart( 2, '0' ),
				progress,
			} );
		} else {
			setTimer( {
				days: '00',
				hours: '00',
				minutes: '00',
				seconds: '00',
				progress: 0,
			} );
		}
	};

	// UseEffect to manage timer updates
	useEffect( () => {
		let interval;

		const timerMode = badge?.timerMode || 'fromToDate';
		if ( timerMode === 'fromToDate' ) {
			interval = setInterval( updateTimer, 1000 );
		}

		return () => clearInterval( interval );
	}, [
		badge.timerMode,
		badge.selectedDateTo,
		badge.selectedDateFrom,
		endTime,
	] );

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
		badge.badgeStyles == 'badge8' ||
		badge.badgeStyles == 'badge14' ||
		badge.badgeStyles == 'badge15' ||
		badge.badgeStyles == 'badge16' ||
		badge.badgeStyles == 'badge17' ||
		badge.badgeStyles == 'badge18'
	) {
		heightContBadge = `${ badge.widthBadge }px`;
		heightContBadge = `${ badge.singleWidthBadge }px`;
	} else if (
		badge.badgeStyles == 'badge9' ||
		badge.badgeStyles == 'badge10'
	) {
		heightContBadge = `${ badge.widthBadge - 15 }px`;
		heightContBadge = `${ badge.singleWidthBadge - 15 }px`;
	} else if ( badge.badgeStyles == 'badge12' ) {
		heightContBadge = '';
	} else {
		heightContBadge = `${ badge.heightBadge }px`;
		heightContBadge = `${ badge.singleHeightBadge }px`;
	}

	if ( badge.badgeStyles == 'badge11' ) {
		widthContBadge = '100%';
	} else {
		widthContBadge = `${ badge.widthBadge }px`;
		widthContBadge = `${ badge.singleWidthBadge }px`;
	}

	useEffect( () => {
		if (
			( badge.badgeStyles === 'badge2' ||
				badge.badgeStyles === 'badge3' ||
				badge.badgeStyles === 'badge4' ) &&
			badge.badgePositionX === 'left'
		) {
			updateBadge( 'heightBadge', '30' );
			updateBadge( 'singleHeightBadge', '30' );
			updateBadge( 'topRightRadius', '0' );
			updateBadge( 'bottomRightRadius', '0' );
		} else if (
			( badge.badgeStyles === 'badge2' ||
				badge.badgeStyles === 'badge3' ||
				badge.badgeStyles === 'badge4' ) &&
			badge.badgePositionX === 'right'
		) {
			updateBadge( 'heightBadge', '30' );
			updateBadge( 'singleHeightBadge', '30' );
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

		if ( badge.badgeStyles === 'badge14' ) {
			updateBadge( 'badgeColor', '#e56211' );
			updateBadge( 'borderColor', '#e88b01' );
		} else if ( badge.badgeStyles === 'badge15' ) {
			updateBadge( 'badgeColor', '#fa1731' );
			updateBadge( 'borderColor', '#ce3749' );
		} else if ( badge.badgeStyles === 'badge16' ) {
			updateBadge( 'badgeColor', '#21c599' );
			updateBadge( 'borderColor', '#17bc33' );
		} else if ( badge.badgeStyles === 'badge17' ) {
			updateBadge( 'badgeColor', '#20cae1' );
			updateBadge( 'borderColor', '#73a59a' );
		} else if ( badge.badgeStyles === 'badge18' ) {
			updateBadge( 'badgeColor', '#aa2bee' );
			updateBadge( 'borderColor', '#760789' );
		}
	}, [ badge.badgeStyles ] );

	const updatedBadgeLabel = badge.badgeLabel
		.replace( /\{regular_price\}/g, '100$' )
		.replace( /\{price\}/g, '80$' )
		.replace( /\{sale_price\}/g, '80$' )
		.replace( /\{saved_percent\}/g, '20%' )
		.replace( /\{saved_price\}/g, '20$' )
		.replace( /\{sale_ends\}/g, '8 days' )
		.replace( /\{currency\}/g, '$' )
		.replace( /\{qty\}/g, '11' )
		.replace( /\{sku\}/g, 'sku' )
		.replace( /\{br\}/g, '<br />' );

	let textPrev = '(Archive Page)';
	if ( badge?.sizePage === 'archivePage' ) {
		textPrev = '(Archive Page)';
	} else {
		textPrev = '(Product Page)';
	}

	return (
		<div>
			<div className="asnp-esb-containerAd">
				<div className="asnp-esb-product">
					<div>
						<select
							className="asnp-select-field"
							value={ badge?.sizePage }
							onChange={ ( e ) =>
								updateBadge( 'sizePage', e.target.value )
							}
						>
							<option value="archivePage">
								{ __(
									'Archive Page',
									'easy-sale-badges-for-woocommerce'
								) }
							</option>
							<option value="singlePage">
								{ __(
									'Product Page',
									'easy-sale-badges-for-woocommerce'
								) }
							</option>
						</select>
					</div>
					<label className="asnp-esb-productLable asnp-mt-4">
						{ __( 'Preview ', 'easy-sale-badges-for-woocommerce' ) }
						{ __( textPrev, 'easy-sale-badges-for-woocommerce' ) }
					</label>
					<div className="asnp-esb-product2">
						<div className="asnp-esb-productImg">
							<img src={ IMAGES_URL + 'headphone-k.png' } />
							{ badge.imgbadge == 0 &&
								badge.imgbadgeAdv == 0 &&
								badge.useTimerBadge == 0 &&
								badge.cssLabelPosition == 'onImage' && (
									<div
										className="asnp-esb-productBadge"
										style={ {
											width: `${ widthContBadge }`,
											height: `${ heightContBadge }`,
											inset: `${ insetProperty }`,
											filter: `drop-shadow(${ badge.badgeColorShadow } ${ badge.boxShadowWidth }px ${ badge.boxShadowWidth }px ${ badge.boxShadowWidth }px)`,
										} }
									>
										<StyledSpan
											badgeIcon={ badgeIcon }
											className="asnp-esb-productBadge2"
											style={ {
												color: `${ badge.textColor }`,
												fontSize: `${
													badge?.sizePage ===
													'archivePage'
														? `${ badge.fontSizeText }px`
														: `${ badge?.singleFontSizeText }px`
												}`,
												fontWeight: `${
													badge?.sizePage ===
													'archivePage'
														? `${ badge.fontWeightLabel }`
														: `${ badge?.singleFontWeightLabel }`
												}`,
												lineHeight: `${
													badge?.sizePage ===
													'archivePage'
														? `${ badge.lineHeightText }px`
														: `${ badge?.singleLineHeightText }px`
												}`,
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
													dangerouslySetInnerHTML={ {
														__html: updatedBadgeLabel,
													} }
													style={ {
														transform: `${ horizAndvert }`,
														whiteSpace: `${ textNoWrap }`,
													} }
												></div>
											</StyledSpanOne>
										</StyledSpan>
									</div>
								) }
							{ badge.useTimerBadge == 1 &&
								badge.timerPosition == 'onImage' &&
								badge.badgeTimer == 'style3' && (
									<div
										className="asnp-esb-timerStyle3ContainerOn"
										style={ {
											inset: `${ insetProperty }`,
											opacity: `${ badge.opacityTimer }`,
											zIndex: `${ badge.zIndex }`,
											animationName: `${ badge.animationSelectTimer }`,
											animationDuration: `${ badge.animateDurationTimer }s`,
											animationIterationCount: `${ badge.animationCountTimer }`,
										} }
									>
										<TimerStyle3
											timer={ timer }
											badge={ badge }
										/>
									</div>
								) }

							{ badge.useTimerBadge == 1 &&
								badge.timerPosition == 'onImage' &&
								[
									'timer1',
									'timer2',
									'timer3',
									'timer4',
									'timer5',
									'timer6',
									'timer7',
									'timer8',
								].includes( badge.badgeTimer ) && (
									<div
										className="asnp-esb-productBadge"
										style={ {
											inset: `${ insetProperty }`,
											opacity: `${ badge.opacityTimer }`,
											zIndex: `${ badge.zIndex }`,
											animationName: `${ badge.animationSelectTimer }`,
											animationDuration: `${ badge.animateDurationTimer }s`,
											animationIterationCount: `${ badge.animationCountTimer }`,
										} }
									>
										<StyledSpanDiv
											badgeTimerDiv={ badgeTimerDiv }
										>
											<StyledSpanDivOne
												style={ {
													padding: `${ badge.paddingTopBottom }px ${ badge.paddingRightLeft }px`,
												} }
												badgeTimerCont={
													badgeTimerCont
												}
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
												style={ {
													padding: `${ badge.paddingTopBottom }px ${ badge.paddingRightLeft }px`,
												} }
												badgeTimerCont={
													badgeTimerCont
												}
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
												style={ {
													padding: `${ badge.paddingTopBottom }px ${ badge.paddingRightLeft }px`,
												} }
												badgeTimerCont={
													badgeTimerCont
												}
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
												style={ {
													padding: `${ badge.paddingTopBottom }px ${ badge.paddingRightLeft }px`,
												} }
												badgeTimerCont={
													badgeTimerCont
												}
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
					{ badge.imgbadge == 0 &&
						badge.imgbadgeAdv == 0 &&
						badge.useTimerBadge == 0 &&
						badge.cssLabelPosition == 'outOfImage' && (
							<div
								className="asnp-esb-productBadgeOut"
								style={ {
									width: `100%`,
									display: 'flex',
									justifyContent:
										badge.badgePositionOutofImage,
									height: `${ heightContBadge }`,
									inset: `${ insetProperty }`,
									filter: `drop-shadow(${ badge.badgeColorShadow } ${ badge.boxShadowWidth }px ${ badge.boxShadowWidth }px ${ badge.boxShadowWidth }px)`,
								} }
							>
								<StyledSpan
									badgeIcon={ badgeIcon }
									className="asnp-esb-productBadge2out"
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
											dangerouslySetInnerHTML={ {
												__html: updatedBadgeLabel,
											} }
											style={ {
												transform: `${ horizAndvert }`,
												whiteSpace: `${ textNoWrap }`,
											} }
										></div>
									</StyledSpanOne>
								</StyledSpan>
							</div>
						) }
					{ badge.useTimerBadge == 1 &&
						badge.timerPosition == 'outOfImage' &&
						[
							'timer1',
							'timer2',
							'timer3',
							'timer4',
							'timer5',
							'timer6',
							'timer7',
							'timer8',
						].includes( badge.badgeTimer ) && (
							<div
								className={
									[
										'timer1',
										'timer2',
										'timer3',
										'timer4',
									].includes( badge.badgeTimer )
										? 'asnp-esb-productBadgeOutTimer'
										: 'asnp-esb-productBadgeOutTimerVertical'
								}
								style={ {
									inset: `${ insetProperty }`,
									opacity: `${ badge.opacityTimer }`,
									zIndex: `${ badge.zIndex }`,
									animationName: `${ badge.animationSelectTimer }`,
									animationDuration: `${ badge.animateDurationTimer }s`,
									animationIterationCount: `${ badge.animationCountTimer }`,
								} }
							>
								<StyledSpanDiv badgeTimerDiv={ badgeTimerDiv }>
									<StyledSpanDivOne
										style={ {
											padding: `${ badge.paddingTopBottom }px ${ badge.paddingRightLeft }px`,
										} }
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
										<StyledSpanLabelTimer Label={ Label }>
											{ badge.labelDayTimer }
										</StyledSpanLabelTimer>
									</StyledSpanDivOne>
									<StyledSpanDivOne
										style={ {
											padding: `${ badge.paddingTopBottom }px ${ badge.paddingRightLeft }px`,
										} }
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
										<StyledSpanLabelTimer Label={ Label }>
											{ badge.labelHoursTimer }
										</StyledSpanLabelTimer>
									</StyledSpanDivOne>
									<StyledSpanDivOne
										style={ {
											padding: `${ badge.paddingTopBottom }px ${ badge.paddingRightLeft }px`,
										} }
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
										<StyledSpanLabelTimer Label={ Label }>
											{ badge.labelMinTimer }
										</StyledSpanLabelTimer>
									</StyledSpanDivOne>
									<StyledSpanDivOne
										style={ {
											padding: `${ badge.paddingTopBottom }px ${ badge.paddingRightLeft }px`,
										} }
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
										<StyledSpanLabelTimer Label={ Label }>
											{ badge.labelSecTimer }
										</StyledSpanLabelTimer>
									</StyledSpanDivOne>
								</StyledSpanDiv>
							</div>
						) }

					{ badge.useTimerBadge == 1 &&
						badge.timerPosition == 'outOfImage' &&
						badge.badgeTimer == 'style3' && (
							<div
								className="asnp-esb-timerStyle3ContainerOut"
								style={ {
									opacity: `${ badge.opacityTimer }`,
									zIndex: `${ badge.zIndex }`,
									animationName: `${ badge.animationSelectTimer }`,
									animationDuration: `${ badge.animateDurationTimer }s`,
									animationIterationCount: `${ badge.animationCountTimer }`,
								} }
							>
								<TimerStyle3 timer={ timer } badge={ badge } />
							</div>
						) }

					<div className="asnp-mt-4 asnp-flex asnp-justify-center asnp-w-full asnp-text-base asnp-text-black">
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
