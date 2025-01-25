import React from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../utils/constants';
import Toggle from '../Toggle';
import { LockClosedIcon } from '@heroicons/react/solid';

import './style.scss';
import EmbedForm from './EmbedForm';

const Embed = () => {
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
								'Embed',
								'easy-sale-badges-for-woocommerce'
							) }
						</h1>
					</div>
					<label className="asnp-block asnp-space-y-1">
						<span className="asnp-field-title">
							{ __( 'Name', 'easy-sale-badges-for-woocommerce' ) }
						</span>
						<input
							disabled
							type="text"
							className="asnp-block asnp-text-field"
							placeholder="Name"
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
					<div className="asnp-w-full asnp-text-lg asnp-font-semibold">
						{ __(
							'Embed Type',
							'easy-sale-badges-for-woocommerce'
						) }
					</div>
					<div className="asnp-relative asnp-w-full asnp-bg-white asnp-mb-3 asnp-mt-1 asnp-border-2 asnp-rounded-md asnp-p-4">
						<div className="asnp-flex asnp-flex-wrap">
							<div className="asnp-text-center asnp-mb-5">
								<div className="asnp-border-gray-400 asnp-p-4 asnp-esb-embedTemplate hover:asnp-border-indigo-700">
									<img className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover" />
								</div>
								<div className="asnp-mt-2">
									{ __(
										'Countdown Timer',
										'easy-sale-badges-for-woocommerce'
									) }
								</div>
							</div>

							<div className="asnp-text-center asnp-mb-5">
								<div className="asnp-border-gray-400 asnp-p-4 asnp-esb-embedTemplate hover:asnp-border-indigo-700">
									<img className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover" />
								</div>
								<div className="asnp-mt-2">
									{ __(
										'Countdown Stock',
										'easy-sale-badges-for-woocommerce'
									) }
								</div>
							</div>

							<div className="asnp-text-center asnp-mb-5">
								<div className="asnp-border-gray-400 asnp-p-4 asnp-esb-embedTemplate hover:asnp-border-indigo-700">
									<img className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover" />
								</div>
								<div className="asnp-mt-2">
									{ __(
										'Announcement',
										'easy-sale-badges-for-woocommerce'
									) }
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="asnp-relative asnp-h-full asnp-w-full asnp-my-4 asnp-flex">
					<div className="asnp-relative asnp-flex asnp-w-[60%] asnp-bg-white">
						<EmbedForm />
					</div>
					<div className="asnp-w-[30%] asnp-flex">
						<div className="asnp-esb-embedCont">
							<div className="asnp-esb-embedPr">
								<label className="asnp-esb-embedPreLa">
									{ __(
										'Preview',
										'easy-sale-badges-for-woocommerce'
									) }
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Embed;
