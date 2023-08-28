import React from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from '../Toggle';
import Tippy from '@tippyjs/react';
import { IMAGES_URL } from '../../utils/constants';

const Analytics = ( props ) => {
	return (
		<div>
			<h2>
				{ __( 'Enable Analytics on WhatsApp', 'asnp-easy-sale-badge' ) }
			</h2>
			<div className="asnp-flex asnp-mt-10 md:asnp-w-[15rem] asnp-w-[12rem]">
				<h2 className="asnp-field-title asnp-font-bold md:asnp-min-w-[8rem]">
					{ __( 'Google Analytics', 'asnp-easy-sale-badge' ) }
				</h2>
				<div className="asnp-text-red-600 asnp-text-base asnp-uppercase asnp-ml-[0.3rem]">
					{ __( '(Pro)', 'asnp-easy-sale-badge' ) }
				</div>
				<div className="asnp-ml-1 asnp-cursor-pointer asnp-mt-[0.2rem]">
					<Tippy
						interactive={ true }
						placement={ 'top-start' }
						content={
							<div className="asnp-h-auto asnp-w-[15rem] asnp-bg-green-500 asnp-rounded-lg asnp-p-[0.4rem] asnp-text-white asnp-rounded-bl-none asnp-ml-3">
								{ __(
									'View WhatsApp tracking on Google Analytics > Behavior > Events',
									'asnp-easy-sale-badge'
								) }
							</div>
						}
					>
						<div className="asnp-w-5 asnp-h-4">
							<img src={ IMAGES_URL + 'quest.svg' } />
						</div>
					</Tippy>
				</div>
				<div className="asnp-ml-[2rem]">
					<Toggle
						value={ 0 }
						onChange={ ( value ) => ( value ? 1 : 0 ) }
					/>
				</div>
			</div>
			<div className="asnp-flex asnp-mt-10 md:asnp-w-[15rem] asnp-w-[12rem]">
				<h2 className="asnp-field-title asnp-font-bold md:asnp-min-w-[8rem]">
					{ __( 'Facebook Pixel', 'asnp-easy-sale-badge' ) }
				</h2>
				<div className="asnp-text-red-600 asnp-text-base asnp-uppercase asnp-ml-[0.3rem]">
					{ __( '(Pro)', 'asnp-easy-sale-badge' ) }
				</div>
				<div className="asnp-ml-1 asnp-cursor-pointer asnp-mt-[0.2rem]">
					<Tippy
						interactive={ true }
						placement={ 'top-start' }
						content={
							<div className="asnp-h-auto asnp-w-[15rem] asnp-bg-green-500 asnp-rounded-lg asnp-p-[0.4rem] asnp-text-white asnp-rounded-bl-none asnp-ml-3">
								{ __(
									'View WhatsApp recorded events in Event Manager of Facebook for Business',
									'asnp-easy-sale-badge'
								) }
							</div>
						}
					>
						<div className="asnp-w-5 asnp-h-4">
							<img src={ IMAGES_URL + 'quest.svg' } />
						</div>
					</Tippy>
				</div>
				<div className="asnp-ml-[2.1rem]">
					<Toggle
						value={ 0 }
						onChange={ ( value ) => ( value ? 1 : 0 ) }
					/>
				</div>
			</div>
			<button
				className="asnp-btn asnp-btn-primary asnp-mt-10 asnp-mb-4"
				type="button"
				onClick={ () => props.onSave() }
			>
				{ __( 'Save Changes', 'asnp-easy-sale-badge' ) }
			</button>
		</div>
	);
};

export default Analytics;
