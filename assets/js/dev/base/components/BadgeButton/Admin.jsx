import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import styled from 'styled-components';

const Admin = ( {
	badge,
	IMAGES_URL,
	badgeIcon,
	badgeIconOne,
	badgeIconTwo,
	horizAndvert,
	bdgeAdvanced,
	badgeTimerDiv,
	badgeTimerCont,
	Label,
	TimerDate,
	updateBadge,
} ) => {
	const Span = styled.div`
		${ badgeIcon }
	`;
	const Div = styled.div`
		${ badgeTimerDiv }
	`;
	const DivOne = styled.div`
		${ badgeTimerCont }
	`;
	const Time = styled.div`
		${ TimerDate }
	`;
	const LabelTimer = styled.div`
		${ Label }
	`;
	const SpanOne = styled.div`
		${ badgeIconOne }
	`;
	const SpanTwo = styled.div`
		${ badgeIconTwo }
	`;
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
		const now = new Date();
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

	return (
		<div className="asnp-esb-wrapper">
			<div className="asnp-esb-containerAd">
				<div className="asnp-esb-product">
					<label className="asnp-esb-productLable">{ __( 'Preview', 'asnp-easy-sale-badge' ) }</label>
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
											transform: `rotateX(${ badge.rotationXImg }deg) rotateY(${ badge.rotationYImg }deg) rotateZ(${ badge.rotationZImg }deg)`,
										} }
									>
										<SpanOne>
											{ bdgeAdvanced }
											<SpanTwo>
												<div
													style={ {
														transform: `${ horizAndvert }`,
														fontSize: `${ badge.fontSizeText }px`,
														fontWeight: '700',
													} }
												>
													{ badge.badgeLabel }
												</div>
											</SpanTwo>
										</SpanOne>
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
										<Span
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
											<SpanTwo></SpanTwo>
											<SpanOne>
												<div
													style={ {
														transform: `${ horizAndvert }`,
													} }
												>
													{ badge.badgeLabel }
												</div>
											</SpanOne>
										</Span>
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
									<Div>
										<DivOne>
											<Time
												style={ {
													fontSize: `${ badge.fontSizeLabelTimer }px`,
													lineHeight: `${ badge.lineHeightLabelTimer }px`,
												} }
											>
												{ timer.days }
											</Time>
											<LabelTimer>
												{ badge.labelDayTimer }
											</LabelTimer>
										</DivOne>
										<DivOne>
											<Time
												style={ {
													fontSize: `${ badge.fontSizeLabelTimer }px`,
													lineHeight: `${ badge.lineHeightLabelTimer }px`,
												} }
											>
												{ timer.hours }
											</Time>
											<LabelTimer>
												{ badge.labelHoursTimer }
											</LabelTimer>
										</DivOne>
										<DivOne>
											<Time
												style={ {
													fontSize: `${ badge.fontSizeLabelTimer }px`,
													lineHeight: `${ badge.lineHeightLabelTimer }px`,
												} }
											>
												{ timer.minutes }
											</Time>
											<LabelTimer>
												{ badge.labelMinTimer }
											</LabelTimer>
										</DivOne>
										<DivOne>
											<Time
												style={ {
													fontSize: `${ badge.fontSizeLabelTimer }px`,
													lineHeight: `${ badge.lineHeightLabelTimer }px`,
												} }
											>
												{ timer.seconds }
											</Time>
											<LabelTimer>
												{ badge.labelSecTimer }
											</LabelTimer>
										</DivOne>
									</Div>
								</div>
							) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Admin;
