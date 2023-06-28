import React from 'react';
import { __ } from '@wordpress/i18n';
import { XIcon } from '@heroicons/react/solid';

const MultiAccountBtn = ( {
	accounts,
	headerColor,
	open,
	visibilityBtn,
	setOpen,
	whatsapp,
	getCaption,
	settings,
	getWhatsAppUrl,
	right,
	IMAGES_URL,
} ) => {
	return (
		<div>
			<div
				style={ {
					right: `${ right }`,
					marginBottom: `${ whatsapp.bottom / 15 }px`,
				} }
				className="asnp-ew-buttonMenu1M"
			>
				<div
					style={ {
						backgroundColor: `${ headerColor }`,
					} }
					className="asnp-ew-multiHeaderBtn"
				>
					<div className="asnp-ew-multiHeaderBtn1">
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
					<div className="asnp-ew-multiHeaderName">
						<div
							className="asnp-ew-multiHeaderNameH1"
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
								__html: whatsapp.description,
							} }
						></div>
					</div>
					<div
						style={ {
							visibility: `${ visibilityBtn }`,
						} }
						onClick={ () => setOpen( ! open ) }
						className={
							headerColor && 'rgb(255, 255, 255)' === headerColor
								? 'asnp-ew-gray'
								: 'asnp-ew-headerIcon'
						}
					>
						<XIcon
							className={
								( headerColor && headerColor
									? 'asnp-ew-gray '
									: '' ) + 'asnp-ew-headerIcon'
							}
						/>
					</div>
					<div className="asnp-ew-asana">
						<a
							href="https://www.asanaplugins.com/product/whatsapp-chat-wordpress?utm_source=whatsapp-chat-wordpress&utm_campaign=powered-by-whatsapp-chat-wordpress-free&utm_medium=link"
							target="_blank"
							className="asnp-ew-asanaA"
						>
							{ __( 'By Asana Plugins', 'asnp-easy-whatsapp' ) }
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
							height: 3 < accounts.length ? 'auto' : '290px',
						} }
					>
						{ accounts.map( ( account, index ) => (
							<div key={ index }>
								<a
									target={
										settings.openNewTab === 'true'
											? '_blank'
											: ''
									}
									href={ getWhatsAppUrl( account ) }
									className="asnp-ew-multiMainBtn2"
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
										<div className="asnp-ew-multiMainNameH1">
											{ account.name }
										</div>
										<div
											className="asnp-ew-multiMainNameP"
											dangerouslySetInnerHTML={ {
												__html: getCaption( account ),
											} }
										></div>
									</div>
									<div className="asnp-ew-multiMainIcon">
										<img
											src={ IMAGES_URL + 'wpIcon.svg' }
										/>
									</div>
								</a>
							</div>
						) ) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default MultiAccountBtn;
