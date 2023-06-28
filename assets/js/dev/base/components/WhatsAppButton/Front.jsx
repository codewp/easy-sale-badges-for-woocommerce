import React, { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { XIcon } from '@heroicons/react/solid';
import { CSSTransition } from 'react-transition-group';
import { ThreeDots } from 'react-loader-spinner';
import { showWhatsAppOnDevice, showWhatsAppToVisitor } from '../../utils';

const Front = ( {
	whatsapp,
	open,
	setOpen,
	loader,
	getCaption,
	icon,
	buttonEl,
	settings,
	getWhatsAppUrl,
	IMAGES_URL,
} ) => {
	useEffect( () => {
		let time =
			window.localStorage.getItem( 'asnp_easy_whatsapp_visitor_time' ) ||
			null;

		const setVisitorTime = () => {
			return (
				time ||
				window.localStorage.setItem(
					'asnp_easy_whatsapp_visitor_time',
					new Date()
				)
			);
		};

		window.addEventListener( 'beforeunload', setVisitorTime );

		return () =>
			window.removeEventListener( 'beforeunload', setVisitorTime );
	}, [] );

	if ( ! showWhatsAppOnDevice( whatsapp ) ) {
		return null;
	}

	if ( ! showWhatsAppToVisitor( whatsapp ) ) {
		return null;
	}

	let buttonPosition = 'flex-end';
	let positionClassName = 'flex-end';
	let right = '1';
	let bottom = '0';
	let left = 'auto';
	let position = 'fixed';
	let r = '0';
	let lef = '0';
	let marginB = '77.4px';
	let mright = '19.2px';
	let mfright = '19.2px';
	let Eright = '0';

	if ( 'center' === whatsapp.stickyPosition && 'sticky' === whatsapp.type ) {
		r = '44%';
		right = '30%';
		mright = '160px';
		mfright = '128px';
	} else if (
		'left' === whatsapp.stickyPosition &&
		'sticky' === whatsapp.type
	) {
		positionClassName = 'flex-start';
		buttonPosition = 'flex-start';
		right = 'auto';
		left = '0';
		lef = '16px';
		mright = '-14.4px';
		mfright = '-14.4px';
	}

	if (
		window.matchMedia( 'only screen and (max-width: 768px)' ).matches &&
		'center' === whatsapp.stickyPosition &&
		'sticky' === whatsapp.type
	) {
		r = '36%';
		right = '30%';
		mright = '-92px';
		mfright = '-89px';
	} else if (
		window.matchMedia( 'only screen and (max-width: 768px)' ).matches &&
		'left' === whatsapp.stickyPosition &&
		'sticky' === whatsapp.type
	) {
		positionClassName = 'flex-start';
		buttonPosition = 'flex-start';
		right = 'auto';
		left = '0';
		lef = '16px';
		mright = '-44.4px';
		mfright = '-26.4px';
	} else if (
		window.matchMedia( 'only screen and (max-width: 768px)' ).matches &&
		'right' === whatsapp.stickyPosition &&
		'sticky' === whatsapp.type
	) {
		mright = '5.2px';
		mfright = '9.2px';
	}

	let embedClassName = 'flex-end';

	if ( 'embedButton' === whatsapp.type ) {
		positionClassName = 'center';
		embedClassName = 'center';
		buttonPosition = 'center';
		right = '0';
		Eright = '0';
		position = 'relative';
	}

	if (
		'right' === whatsapp.embedButtonPosition &&
		'embedButton' === whatsapp.type
	) {
		right = '0';
		Eright = '-114px';
	} else if (
		'left' === whatsapp.embedButtonPosition &&
		'embedButton' === whatsapp.type
	) {
		right = '0';
		Eright = '150px';
	} else if (
		'center' === whatsapp.embedButtonPosition &&
		'embedButton' === whatsapp.type
	) {
		right = '0';
		Eright = '22px';
	}

	let heightIcon = '60.8px';
	let widthIcon = '60.8px';
	let backgroundColorBtn = '';
	let widthBtn = '';
	let heightBtn = '';
	let borderRadiusBtn = '';
	let paddingBtn = '';
	let paddingButton = '';
	let visibilityBtn = '';
	if ( whatsapp.bubbleText && whatsapp.bubbleText.trim().length ) {
		heightIcon = '32px';
		widthIcon = '32px';
		backgroundColorBtn = 'white';
		widthBtn = 'auto';
		heightBtn = '46.4px';
		borderRadiusBtn = '20px';
		paddingBtn = '4px 16px';
		paddingButton = '14.4px 19.2px';
	}

	if ( 'embedChatWindow' === whatsapp.type ) {
		positionClassName = 'center';
		embedClassName = 'center';
		buttonPosition = 'center';
		position = 'relative';
		right = '0';
		visibilityBtn = 'hidden';
	}
	const now = new Date();

	return (
		<div className="asnp-ew-wrapper">
			{ 'button' === whatsapp.type && (
				<div
					style={ {
						alignItems: 'flex-start',
						justifyContent: 'center',
						position: 'relative',
						marginBottom: '8px',
					} }
					className="asnp-ew-container"
				>
					<div
						style={ {
							justifyContent: 'flex-start',
						} }
						className="asnp-ew-wpButton"
					>
						{ whatsapp.accounts.map( ( account, index ) => (
							<a
								key={ index }
								target={
									settings.openNewTab === 'true'
										? '_blank'
										: ''
								}
								href={ getWhatsAppUrl( account ) }
								className="asnp-ew-multiMainBtn2B"
								style={ {
									backgroundColor: `${ whatsapp.buttonBackgroundColor }`,
									borderRadius: `${ whatsapp.startChatButton }px`,
								} }
							>
								<div className="asnp-ew-multiMainImage">
									<img
										style={ {
											borderColor: `${ whatsapp.onlineBorderColor }`,
										} }
										className="asnp-ew-headerBtn2M"
										src={ account.avatar }
										alt="Profile image"
									/>
								</div>
								<div className="asnp-ew-multiMainName">
									<div
										className="asnp-ew-multiMainNameH1B"
										style={ {
											color: `${ whatsapp.buttonNameColor }`,
										} }
									>
										{ account.name }
									</div>
									<div
										style={ {
											color: `${ whatsapp.buttonCaptionColor }`,
										} }
										className="asnp-ew-multiMainNamePBF"
										dangerouslySetInnerHTML={ {
											__html: getCaption( account ),
										} }
									></div>
								</div>
								<div className="asnp-ew-multiMainIconB">
									<svg
										width="40"
										height="30"
										viewBox="0 0 147 137"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M108.772 78.7221C108.486 78.594 97.7694 73.6757 95.8651 73.037C95.0876 72.7768 94.2548 72.5228 93.3689 72.5228C91.9218 72.5228 90.7062 73.1949 89.7593 74.5151C88.6888 75.9981 85.4481 79.5285 84.4468 80.5831C84.316 80.7224 84.1375 80.8887 84.0306 80.8887C83.9347 80.8887 82.2762 80.2522 81.7741 80.0489C70.278 75.3949 61.552 64.2032 60.3555 62.3159C60.1846 62.0445 60.1775 61.9213 60.176 61.9213C60.218 61.7777 60.6046 61.4165 60.8041 61.2301C61.3878 60.6919 62.0202 59.9824 62.6321 59.2961C62.9218 58.9709 63.212 58.6453 63.4969 58.3384C64.3846 57.3759 64.7798 56.6286 65.238 55.763L65.4781 55.3133C66.5968 53.2418 65.6413 51.4938 65.3325 50.9293C65.079 50.4569 60.554 40.2789 60.0729 39.2096C58.916 36.6293 57.3873 35.4278 55.263 35.4278C55.0659 35.4278 55.263 35.4278 54.4363 35.4603C53.4298 35.4999 47.9483 36.1724 45.5247 37.5963C42.9546 39.1064 38.6066 43.9201 38.6066 52.3856C38.6066 60.0047 43.7946 67.1985 46.022 69.9345C46.0774 70.0034 46.179 70.1436 46.3265 70.3446C54.8568 81.9549 65.4909 90.5592 76.2711 94.5727C86.6494 98.4363 91.5639 98.8829 94.3578 98.8829C94.3583 98.8829 94.3583 98.8829 94.3583 98.8829C95.5324 98.8829 96.4722 98.797 97.3012 98.721L97.8271 98.6742C101.412 98.378 109.291 94.5731 111.083 89.9316C112.495 86.2758 112.867 82.2814 111.928 80.8318C111.285 79.8461 110.176 79.3501 108.772 78.7221Z"
											fill={ `${ whatsapp.buttonIconColor }` }
										/>
										<path
											d="M74.805 0C34.9928 0 2.60317 29.9594 2.60317 66.7844C2.60317 78.6949 6.0233 90.3537 12.5023 100.558L0.1013 134.65C-0.1297 135.285 0.0421181 135.988 0.546596 136.467C0.910755 136.813 1.40473 137 1.90921 137C2.10251 137 2.29723 136.973 2.48719 136.916L40.6309 125.62C51.0688 130.818 62.8661 133.561 74.8055 133.561C114.614 133.562 147 103.605 147 66.7844C147 29.9594 114.614 0 74.805 0ZM74.805 119.65C63.5705 119.65 52.6892 116.627 43.3356 110.906C43.021 110.714 42.6559 110.615 42.2884 110.615C42.0942 110.615 41.8994 110.643 41.71 110.699L22.6023 116.359L28.7706 99.3993C28.9701 98.8504 28.8704 98.245 28.5029 97.7771C21.38 88.7066 17.6148 77.9899 17.6148 66.7844C17.6148 37.6305 43.2702 13.9117 74.8046 13.9117C106.335 13.9117 131.988 37.6305 131.988 66.7844C131.988 95.9347 106.336 119.65 74.805 119.65Z"
											fill={ `${ whatsapp.buttonIconColor }` }
										/>
									</svg>
								</div>
							</a>
						) ) }
					</div>
				</div>
			) }
			{ 'button' !== whatsapp.type && (
				<div
					style={ {
						alignItems: `${ positionClassName }`,
						justifyContent: `${ embedClassName }`,
						position:
							'embedButton' === whatsapp.type ? 'relative' : '',
					} }
					className="asnp-ew-container"
				>
					<CSSTransition
						in={ open }
						timeout={ 300 }
						classNames="asnp-ew-open"
						unmountOnExit
					>
						<div
							style={ {
								width:
									1 < whatsapp.accounts.length
										? '416px'
										: '352px',
								position:
									'embedButton' !== whatsapp.type
										? 'fixed'
										: 'absolute',
								bottom: `${ bottom }`,
								left: `${ left }`,
								right: `${ right }`,
								marginBottom: `${ marginB }`,
							} }
							className="asnp-ew-buttonMenu"
						>
							{ 1 < whatsapp.accounts.length ? (
								<div>
									<div
										className="asnp-ew-buttonMenu1F"
										style={ {
											right: `${ Eright }`,
											marginRight: `${ mfright }`,
											marginBottom:
												whatsapp.bubbleText.length > 0
													? `${
															whatsapp.bottom - 14
													  }px`
													: `${ whatsapp.bottom }px`,
										} }
									>
										<div
											style={ {
												backgroundColor: `${ whatsapp.headerColor }`,
											} }
											className="asnp-ew-multiHeaderBtnF"
										>
											<div className="asnp-ew-multiHeaderBtn1F">
												<svg
													className="asnp-ew-multiFooterSvg"
													width="20"
													height="20"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M12.0152 0C5.40739 0 0.028184 5.37405 0.0257838 11.9812C0.0245836 14.0932 0.577819 16.1551 1.62672 17.9719L0 24L6.27952 22.5164C8.03049 23.4716 10.0016 23.973 12.0082 23.9742H12.0129C18.6195 23.9742 23.9964 18.599 24 11.993C24.0024 8.79017 22.7568 5.77888 20.4934 3.51328C18.23 1.24888 15.2219 0.0012 12.0152 0ZM12.0129 2.4C14.5763 2.4012 16.9854 3.40056 18.7964 5.21016C20.6073 7.02216 21.6022 9.42983 21.5998 11.9906C21.5974 17.2754 17.2983 21.5742 12.0105 21.5742C10.4108 21.573 8.82615 21.1714 7.43041 20.4094L6.62174 19.9687L5.72868 20.1797L3.36595 20.7375L3.94257 18.5953L4.20275 17.6344L3.70583 16.7719C2.86815 15.3223 2.42482 13.6648 2.42602 11.9812C2.42842 6.69885 6.72877 2.4 12.0129 2.4ZM7.77263 6.45C7.57221 6.45 7.24816 6.525 6.97334 6.825C6.69851 7.1238 5.92323 7.84749 5.92323 9.32109C5.92323 10.7947 6.99678 12.2191 7.14679 12.4195C7.29561 12.6187 9.219 15.7383 12.2637 16.9383C14.7935 17.9355 15.3074 17.7387 15.857 17.6883C16.4067 17.6391 17.6302 16.9652 17.8799 16.2656C18.1295 15.566 18.1301 14.9642 18.0557 14.8406C17.9813 14.7158 17.7814 14.6414 17.4814 14.4914C17.1826 14.3414 15.7099 13.6183 15.4351 13.5187C15.1603 13.4191 14.9593 13.3687 14.76 13.6687C14.5608 13.9687 13.9883 14.6414 13.8131 14.8406C13.6378 15.041 13.4638 15.068 13.1638 14.918C12.8638 14.7668 11.8991 14.4497 10.7542 13.4297C9.86369 12.6365 9.26282 11.6578 9.08761 11.3578C8.91359 11.059 9.0712 10.8949 9.22121 10.7461C9.35563 10.6117 9.5189 10.3963 9.66891 10.2211C9.81773 10.0459 9.86933 9.92107 9.96894 9.72187C10.0686 9.52267 10.0176 9.34687 9.94316 9.19687C9.86875 9.04687 9.28606 7.5678 9.01963 6.975C8.79521 6.477 8.55818 6.46543 8.34456 6.45703C8.17055 6.44983 7.97185 6.45 7.77263 6.45Z"
														fill={ `${ whatsapp.headerIconColor }` }
													/>
												</svg>
											</div>
											<div className="asnp-ew-multiHeaderNameF">
												<div
													className="asnp-ew-multiHeaderNameH1F"
													style={ {
														color: `${ whatsapp.headerTextColor }`,
													} }
												>
													{ whatsapp.multiHeaderText }
												</div>

												<div
													className="asnp-ew-multiHeaderNameP"
													style={ {
														color: `${ whatsapp.headerCaptionColor }`,
													} }
													dangerouslySetInnerHTML={ {
														__html:
															whatsapp.description,
													} }
												></div>
											</div>
											<div
												style={ {
													visibility: `${ visibilityBtn }`,
												} }
												onClick={ () =>
													setOpen( ! open )
												}
												className={
													whatsapp.headerColor &&
													'rgb(255, 255, 255)' ===
														whatsapp.headerColor
														? 'asnp-ew-gray'
														: 'asnp-ew-headerIcon'
												}
											>
												<XIcon
													className={
														( whatsapp.headerColor &&
														whatsapp.headerColor
															? 'asnp-ew-gray '
															: '' ) +
														'asnp-ew-headerIcon'
													}
												/>
											</div>
											<div className="asnp-ew-asanaF">
												<a
													href="https://www.asanaplugins.com/product/whatsapp-chat-wordpress?utm_source=whatsapp-chat-wordpress&utm_campaign=powered-by-whatsapp-chat-wordpress-free&utm_medium=link"
													target="_blank"
													className="asnp-ew-asanaA"
												>
													{ __(
														'By Asana Plugins',
														'asnp-easy-whatsapp'
													) }
												</a>
											</div>
										</div>

										<div
											className="asnp-ew-multiMainBtn"
											style={ {
												backgroundImage: `url(${ IMAGES_URL }background.png)`,
											} }
										>
											<div
												className="asnp-ew-multiMainBtn1"
												style={ {
													height:
														3 <
														whatsapp.accounts.length
															? 'auto'
															: '290px',
												} }
											>
												{ whatsapp.accounts.map(
													( account, index ) => (
														<div key={ index }>
															<a
																target={
																	settings.openNewTab ===
																	'true'
																		? '_blank'
																		: ''
																}
																href={ getWhatsAppUrl(
																	account
																) }
																className="asnp-ew-multiMainBtn2"
															>
																<div className="asnp-ew-multiMainImage">
																	<img
																		style={ {
																			borderColor: `${ whatsapp.onlineBorderColor }`,
																		} }
																		className="asnp-ew-headerBtn2F"
																		src={
																			account.avatar
																		}
																		alt="Profile image"
																	/>
																</div>
																<div className="asnp-ew-multiMainName">
																	<div className="asnp-ew-multiMainNameH1">
																		{
																			account.name
																		}
																	</div>
																	<div
																		className="asnp-ew-multiMainNameP"
																		dangerouslySetInnerHTML={ {
																			__html: getCaption(
																				account
																			),
																		} }
																	></div>
																</div>
																<div className="asnp-ew-multiMainIcon">
																	<svg
																		width="40"
																		height="30"
																		viewBox="0 0 147 137"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			d="M108.772 78.7221C108.486 78.594 97.7694 73.6757 95.8651 73.037C95.0876 72.7768 94.2548 72.5228 93.3689 72.5228C91.9218 72.5228 90.7062 73.1949 89.7593 74.5151C88.6888 75.9981 85.4481 79.5285 84.4468 80.5831C84.316 80.7224 84.1375 80.8887 84.0306 80.8887C83.9347 80.8887 82.2762 80.2522 81.7741 80.0489C70.278 75.3949 61.552 64.2032 60.3555 62.3159C60.1846 62.0445 60.1775 61.9213 60.176 61.9213C60.218 61.7777 60.6046 61.4165 60.8041 61.2301C61.3878 60.6919 62.0202 59.9824 62.6321 59.2961C62.9218 58.9709 63.212 58.6453 63.4969 58.3384C64.3846 57.3759 64.7798 56.6286 65.238 55.763L65.4781 55.3133C66.5968 53.2418 65.6413 51.4938 65.3325 50.9293C65.079 50.4569 60.554 40.2789 60.0729 39.2096C58.916 36.6293 57.3873 35.4278 55.263 35.4278C55.0659 35.4278 55.263 35.4278 54.4363 35.4603C53.4298 35.4999 47.9483 36.1724 45.5247 37.5963C42.9546 39.1064 38.6066 43.9201 38.6066 52.3856C38.6066 60.0047 43.7946 67.1985 46.022 69.9345C46.0774 70.0034 46.179 70.1436 46.3265 70.3446C54.8568 81.9549 65.4909 90.5592 76.2711 94.5727C86.6494 98.4363 91.5639 98.8829 94.3578 98.8829C94.3583 98.8829 94.3583 98.8829 94.3583 98.8829C95.5324 98.8829 96.4722 98.797 97.3012 98.721L97.8271 98.6742C101.412 98.378 109.291 94.5731 111.083 89.9316C112.495 86.2758 112.867 82.2814 111.928 80.8318C111.285 79.8461 110.176 79.3501 108.772 78.7221Z"
																			fill="#095E54"
																		/>
																		<path
																			d="M74.805 0C34.9928 0 2.60317 29.9594 2.60317 66.7844C2.60317 78.6949 6.0233 90.3537 12.5023 100.558L0.1013 134.65C-0.1297 135.285 0.0421181 135.988 0.546596 136.467C0.910755 136.813 1.40473 137 1.90921 137C2.10251 137 2.29723 136.973 2.48719 136.916L40.6309 125.62C51.0688 130.818 62.8661 133.561 74.8055 133.561C114.614 133.562 147 103.605 147 66.7844C147 29.9594 114.614 0 74.805 0ZM74.805 119.65C63.5705 119.65 52.6892 116.627 43.3356 110.906C43.021 110.714 42.6559 110.615 42.2884 110.615C42.0942 110.615 41.8994 110.643 41.71 110.699L22.6023 116.359L28.7706 99.3993C28.9701 98.8504 28.8704 98.245 28.5029 97.7771C21.38 88.7066 17.6148 77.9899 17.6148 66.7844C17.6148 37.6305 43.2702 13.9117 74.8046 13.9117C106.335 13.9117 131.988 37.6305 131.988 66.7844C131.988 95.9347 106.336 119.65 74.805 119.65Z"
																			fill="#095E54"
																		/>
																	</svg>
																</div>
															</a>
														</div>
													)
												) }
											</div>
										</div>
									</div>
								</div>
							) : (
								<div>
									{ whatsapp.accounts.map(
										( account, index ) => (
											<div
												key={ index }
												style={ {
													right: `${ Eright }`,
													marginRight: `${ mright }`,
													marginBottom:
														whatsapp.bubbleText
															.length > 0
															? `${
																	whatsapp.bottom -
																	14
															  }px`
															: `${ whatsapp.bottom }px`,
												} }
												className="asnp-ew-buttonMenu1FF"
											>
												<div
													style={ {
														backgroundColor: `${ whatsapp.headerColor }`,
													} }
													className={
														'asnp-ew-headerBtn'
													}
												>
													<div className="asnp-ew-headerBtn1">
														<img
															style={ {
																borderColor: `${ whatsapp.onlineBorderColor }`,
															} }
															className="asnp-ew-headerBtn2"
															src={
																account.avatar
															}
															alt="Profile image"
														/>
													</div>

													<div className="asnp-ew-headerName">
														<div
															style={ {
																color: `${ whatsapp.headerTextColor }`,
															} }
															className="asnp-ew-headerNameH1 "
														>
															{ account.name }
														</div>

														<div
															style={ {
																color: `${ whatsapp.headerCaptionColor }`,
															} }
															className="asnp-ew-headerNamePF"
															dangerouslySetInnerHTML={ {
																__html: getCaption(
																	account
																),
															} }
														></div>
													</div>
													<div
														style={ {
															visibility: `${ visibilityBtn }`,
														} }
														onClick={ () =>
															setOpen( ! open )
														}
														className={
															whatsapp.headerColor &&
															'rgb(255, 255, 255)' ===
																whatsapp.headerColor
																? 'asnp-ew-gray'
																: 'asnp-ew-headerIcon'
														}
													>
														<XIcon
															className={
																( whatsapp.headerColor &&
																whatsapp.headerColor
																	? 'asnp-ew-gray '
																	: '' ) +
																'asnp-ew-headerIcon'
															}
														/>
													</div>
												</div>

												<div
													className="asnp-ew-mainBtn"
													style={ {
														backgroundImage: `url(${ IMAGES_URL }background.png)`,
													} }
												>
													{ loader === true && (
														<div className="asnp-ew-loader">
															<ThreeDots
																width={ 30 }
																height={ 20 }
															/>
														</div>
													) }
													{ loader === false && (
														<div className="asnp-ew-mainBtn1">
															<div className="asnp-ew-mainBtn2">
																{ account.name }
															</div>
															<div
																className="asnp-ew-mainBtn3"
																dangerouslySetInnerHTML={ {
																	__html:
																		whatsapp.welcomeMessage,
																} }
															></div>
															<div className="asnp-ew-mainBtn4">
																<div>
																	{ `${ now.getHours() }:${ now.getMinutes() }` }
																</div>
															</div>
														</div>
													) }
													<div className="asnp-ew-asanaF">
														<a
															href="https://www.asanaplugins.com/product/whatsapp-chat-wordpress?utm_source=whatsapp-chat-wordpress&utm_campaign=powered-by-whatsapp-chat-wordpress-free&utm_medium=link"
															target="_blank"
															className="asnp-ew-asanaA"
														>
															{ __(
																'By Asana Plugins',
																'asnp-easy-whatsapp'
															) }
														</a>
													</div>
												</div>
												<div className="asnp-ew-footerBtn">
													<a
														target={
															settings.openNewTab ===
															'true'
																? '_blank'
																: ''
														}
														href={ getWhatsAppUrl(
															account
														) }
														style={ {
															backgroundColor: `${ whatsapp.buttonColor }`,
															borderRadius: `${ whatsapp.startChatButton }px`,
														} }
														className="asnp-ew-footerBtn1"
													>
														{ whatsapp.setShowMessengerIcon ==
															'true' && (
															<div className="asnp-ew-footerBtnn2">
																<svg
																	width="20"
																	height="20"
																	viewBox="0 0 24 24"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M12.0152 0C5.40739 0 0.028184 5.37405 0.0257838 11.9812C0.0245836 14.0932 0.577819 16.1551 1.62672 17.9719L0 24L6.27952 22.5164C8.03049 23.4716 10.0016 23.973 12.0082 23.9742H12.0129C18.6195 23.9742 23.9964 18.599 24 11.993C24.0024 8.79017 22.7568 5.77888 20.4934 3.51328C18.23 1.24888 15.2219 0.0012 12.0152 0ZM12.0129 2.4C14.5763 2.4012 16.9854 3.40056 18.7964 5.21016C20.6073 7.02216 21.6022 9.42983 21.5998 11.9906C21.5974 17.2754 17.2983 21.5742 12.0105 21.5742C10.4108 21.573 8.82615 21.1714 7.43041 20.4094L6.62174 19.9687L5.72868 20.1797L3.36595 20.7375L3.94257 18.5953L4.20275 17.6344L3.70583 16.7719C2.86815 15.3223 2.42482 13.6648 2.42602 11.9812C2.42842 6.69885 6.72877 2.4 12.0129 2.4ZM7.77263 6.45C7.57221 6.45 7.24816 6.525 6.97334 6.825C6.69851 7.1238 5.92323 7.84749 5.92323 9.32109C5.92323 10.7947 6.99678 12.2191 7.14679 12.4195C7.29561 12.6187 9.219 15.7383 12.2637 16.9383C14.7935 17.9355 15.3074 17.7387 15.857 17.6883C16.4067 17.6391 17.6302 16.9652 17.8799 16.2656C18.1295 15.566 18.1301 14.9642 18.0557 14.8406C17.9813 14.7158 17.7814 14.6414 17.4814 14.4914C17.1826 14.3414 15.7099 13.6183 15.4351 13.5187C15.1603 13.4191 14.9593 13.3687 14.76 13.6687C14.5608 13.9687 13.9883 14.6414 13.8131 14.8406C13.6378 15.041 13.4638 15.068 13.1638 14.918C12.8638 14.7668 11.8991 14.4497 10.7542 13.4297C9.86369 12.6365 9.26282 11.6578 9.08761 11.3578C8.91359 11.059 9.0712 10.8949 9.22121 10.7461C9.35563 10.6117 9.5189 10.3963 9.66891 10.2211C9.81773 10.0459 9.86933 9.92107 9.96894 9.72187C10.0686 9.52267 10.0176 9.34687 9.94316 9.19687C9.86875 9.04687 9.28606 7.5678 9.01963 6.975C8.79521 6.477 8.55818 6.46543 8.34456 6.45703C8.17055 6.44983 7.97185 6.45 7.77263 6.45Z"
																		fill="white"
																	/>
																</svg>
															</div>
														) }
														<div className="asnp-ew-footerBtn3">
															{
																whatsapp.buttonText
															}
														</div>
													</a>
												</div>
											</div>
										)
									) }
								</div>
							) }
						</div>
					</CSSTransition>
					<div
						style={ {
							justifyContent: `${ buttonPosition }`,
							visibility: `${ visibilityBtn }`,
							right: `${ r }`,
							position: `${ position }`,
							bottom: `${ bottom }`,
							left: `${ left }`,
							marginLeft: `${ lef }`,
							marginBottom: `${ whatsapp.bottom }px`,
						} }
						className="asnp-ew-wpBtn"
					>
						<div
							style={ {
								height: `${ heightBtn }`,
								width: `${ widthBtn }`,
								backgroundColor: `${ whatsapp.iconBackgroundColor }`,
								borderRadius: `${ borderRadiusBtn }`,
								padding: `${ paddingBtn }`,
							} }
							ref={ buttonEl }
							className="asnp-ew-wpBtn1"
							onClick={ () => {
								setOpen( ! open );
							} }
						>
							<div
								style={ {
									height: `${ heightIcon }`,
									width: `${ widthIcon }`,
								} }
								className="asnp-ew-wpBtn2 "
							>
								{ icon }
							</div>

							{ whatsapp.bubbleNoitficationBadge == 'true' && (
								<span className="asnp-ew-wpBtnSpan"></span>
							) }
							<div className="asnp-ew-wpBtn3">
								<div
									className="asnp-ew-wpBtn4"
									style={ {
										color: `${ whatsapp.iconTextColor }`,
									} }
								>
									{ whatsapp.bubbleText }
								</div>
							</div>
						</div>
					</div>
				</div>
			) }
		</div>
	);
};

export default Front;
