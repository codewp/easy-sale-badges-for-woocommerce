import React from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from './../../utils/constants';
import Toggle from '../Toggle';
import BannerForm from './BannerForm';
import { LockClosedIcon } from '@heroicons/react/solid';

import './style.scss';

const Banner = () => {
	return (
		<div className="asnp-relative">
			<a
				className="asnp-float-right asnp-top-[10%] asnp-z-50 asnp-sticky asnp-mr-[46%]"
				href="https://www.asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/"
				target="_blank"
			>
				<button className="asnp-btn asnp-btn-delete !asnp-w-[14rem] asnp-flex asnp-text-center asnp-justify-center">
					{ __( 'Go Pro', 'easy-sale-badges-for-woocommerce' ) }
					<LockClosedIcon
						width="17"
						height="17"
						className="asnp-ml-1"
					/>
				</button>
			</a>
			<div className="asnp-opacity-70">
				<div className="asnp-max-w-lg asnp-grid asnp-grid-cols-1 asnp-gap-6">
					<div className="asnp-badge-actions asnp-space-x-2 ">
						<h1 className="asnp-heading-inline">
							{ __(
								'Notification Bar',
								'easy-sale-badges-for-woocommerce'
							) }
						</h1>
					</div>
					<label className="asnp-block asnp-space-y-1">
						<span className="asnp-field-title">
							{ __( 'Name', 'easy-sale-badges-for-woocommerce' ) }
						</span>
						<input
							type="text"
							className="asnp-block asnp-text-field"
							disabled
						/>
					</label>
					<div className="asnp-space-y-1">
						<label className="asnp-inline-flex asnp-space-x-2 asnp-items-center">
							<span className="asnp-field-title">
								{ __(
									'Status',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<Toggle value={ 1 } />
						</label>
						<label className="asnp-block">
							{ __(
								'Enable or disable it.',
								'easy-sale-badges-for-woocommerce'
							) }
						</label>
					</div>
				</div>
				<div className="asnp-w-full asnp-flex asnp-mt-4">
					<div className="asnp-esb-wrapper">
						<div className="asnp-w-full">
							<div className="asnp-w-full asnp-text-lg asnp-font-semibold">
								{ __(
									'Bar Templates',
									'easy-sale-badges-for-woocommerce'
								) }
							</div>
							<div className="asnp-relative asnp-w-full asnp-bg-white asnp-mb-3 asnp-mt-3 asnp-h-[23rem] asnp-flex asnp-flex-col asnp-border-2 asnp-rounded-md asnp-p-4">
								<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-2">
									<div className="asnp-border-gray-400 asnp-py-8 asnp-px-4 asnp-esb-containerBannerTemplate hover:asnp-border-indigo-700">
										<img
											className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover"
											src={ IMAGES_URL + 'bar1.png' }
										/>
									</div>
									<div className="asnp-border-gray-400 asnp-py-10 asnp-px-4 asnp-esb-containerBannerTemplate hover:asnp-border-indigo-700">
										<img
											className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover"
											src={ IMAGES_URL + 'bar2.png' }
										/>
									</div>
								</div>
								<div className="asnp-w-full asnp-flex asnp-pb-2 asnp-space-x-5 asnp-ml-2">
									<div className="asnp-esb-containerBannerTemplateLabel">
										{ __(
											'Announcement Bar',
											'easy-sale-badges-for-woocommerce'
										) }
									</div>
									<div className="asnp-esb-containerBannerTemplateLabel">
										{ __(
											'Action Bar',
											'easy-sale-badges-for-woocommerce'
										) }
									</div>
								</div>
								<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-2">
									<div className="asnp-border-gray-400 asnp-py-10 asnp-px-4 asnp-esb-containerBannerTemplate hover:asnp-border-indigo-700">
										<img
											className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover"
											src={ IMAGES_URL + 'bar3.png' }
										/>
									</div>
									<div className="asnp-border-gray-400 asnp-py-10 asnp-px-4 asnp-esb-containerBannerTemplate hover:asnp-border-indigo-700">
										<img
											className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover"
											src={ IMAGES_URL + 'bar4.png' }
										/>
									</div>
								</div>
								<div className="asnp-w-full asnp-flex asnp-pb-2 asnp-space-x-5 asnp-ml-2">
									<div className="asnp-esb-containerBannerTemplateLabel">
										{ __(
											'Countdown Timer Bar 1',
											'easy-sale-badges-for-woocommerce'
										) }
									</div>
									<div className="asnp-esb-containerBannerTemplateLabel">
										{ __(
											'Countdown Timer Bar 2',
											'easy-sale-badges-for-woocommerce'
										) }
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="asnp-relative asnp-h-full asnp-w-full asnp-border-2 asnp-my-2">
					<div className="asnp-relative asnp-flex asnp-w-full asnp-bg-white">
						<BannerForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
