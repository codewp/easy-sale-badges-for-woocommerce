import React from 'react';
import { __ } from '@wordpress/i18n';
import styled from 'styled-components';

const Admin = ( {
	badge,
	IMAGES_URL,
	badgeIcon,
	badgeIconOne,
	badgeIconTwo,
	icon,
	horizAndvert,
	bdgeAdvanced,
	badgeTimerDiv,
	badgeTimerCont,
	Label,
	TimerDate,
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
	}

	let heightContBadge = '';
	let widthContBadge = '';

	if ( badge.badgeStyles == 'badge11' ) {
		widthContBadge = '100%';
	} else {
		widthContBadge = `${ badge.widthBadge }px`;
	}

	if (
		badge.badgeStyles == 'badge5' ||
		badge.badgeStyles == 'badge6' ||
		badge.badgeStyles == 'badge7' ||
		badge.badgeStyles == 'badge8' ||
		badge.badgeStyles == 'badge9' ||
		badge.badgeStyles == 'badge10'
	) {
		heightContBadge = `${ badge.widthBadge }px`;
	} else {
		heightContBadge = `${ badge.heightBadge }px`;
	}

	return (
		<div className="asnp-ew-wrapper">
			<div className="asnp-ew-containerAd">
				<div className="asnp-ew-product">
					<label className="asnp-ew-productLable">Preview</label>
					<div className="asnp-ew-product2">
						<div
							className="asnp-ew-productImg"
							style={ {
								backgroundImage: `url(${ IMAGES_URL }headphone-k.png)`,
							} }
						>
							{ badge.imgbadge == 1 && (
								<div
									className="asnp-ew-productBadge"
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
										<img src={ IMAGES_URL + icon } />
									</span>
								</div>
							) }
							{ badge.imgbadgeAdv == 1 && (
								<div
									className="asnp-ew-productBadge"
									style={ {
										width: `${ badge.widthBadgeImg }px`,
										height: '90px',
										inset: `${ insetProperty }`,
									} }
								>
									<span
										style={ {
											width: `${ widthContBadge + 5 }`,
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
										className="asnp-ew-productBadge"
										style={ {
											width: `${ widthContBadge }`,
											height: `${ heightContBadge }`,
											inset: `${ insetProperty }`,
										} }
									>
										<Span
											className="asnp-ew-productBadge2"
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
									className="asnp-ew-productBadge"
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
												3
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
												12
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
												28
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
												57
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
