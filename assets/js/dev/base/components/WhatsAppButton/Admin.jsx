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
	badgeTimerDays,
	badgeTimerHours,
	badgeTimerMin,
	badgeTimerSec,
} ) => {
	const Span = styled.div`
		${ badgeIcon }
	`;
	const Div = styled.div`
		${ badgeTimerDiv }
	`;
	const DivOne = styled.div`
		${ badgeTimerDays }
	`;
	const DivTwo = styled.div`
		${ badgeTimerHours }
	`;
	const DivThree = styled.div`
		${ badgeTimerMin }
	`;
	const DivFour = styled.div`
		${ badgeTimerSec }
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
							{ badge.imgbadge == 'true' && (
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
							{ badge.imgbadgeAdv == 'true' && (
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
							{ badge.imgbadge == 'false' &&
								badge.imgbadgeAdv == 'false' &&
								badge.useTimerBadge == 'false' && (
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
							{ badge.useTimerBadge == 'true' && (
								<div
									className="asnp-ew-productBadge"
									style={ {
										inset: `${ insetProperty }`,
									} }
								>
									<Div
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
										<DivOne>
											<span>1</span>
											<span>2</span>
										</DivOne>
										<DivTwo>
											<span>1</span>
											<span>2</span>
										</DivTwo>
										<DivThree>
											<span>1</span>
											<span>2</span>
										</DivThree>
										<DivFour>
											<span>1</span>
											<span>2</span>
										</DivFour>
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
