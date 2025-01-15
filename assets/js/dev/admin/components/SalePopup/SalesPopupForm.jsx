import React from 'react';
import Toggle from '../Toggle';
import { __ } from '@wordpress/i18n';

const SalesPopupForm = () => {
	return (
		<div className="asnp-p-4">
			<div className="asnp-w-[20rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
				{ __( 'General', 'easy-sale-badges-for-woocommerce' ) }
			</div>
			<div className="asnp-flex asnp-mt-4">
				<div className="asnp-flex">
					<label className="asnp-flex asnp-cursor-pointer">
						<input
							className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4 asnp-border asnp-border-gray-300 asnp-rounded-sm !asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
							type="checkbox"
							id="inlineCheckbox3"
							checked={ 0 }
						/>
						<div className="asnp-field-title asnp-mt-[2px]">
							{ __(
								'Random Order',
								'easy-sale-badges-for-woocommerce'
							) }
						</div>
					</label>
				</div>
				<div className="asnp-ml-10 asnp-flex">
					<label className="asnp-flex asnp-cursor-pointer">
						<input
							className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4 asnp-border asnp-border-gray-300 asnp-rounded-sm !asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
							type="checkbox"
							id="inlineCheckbox3"
							checked={ 0 }
						/>
						<div className="asnp-field-title asnp-mt-[2px]">
							{ __(
								'Loop Popup',
								'easy-sale-badges-for-woocommerce'
							) }
						</div>
					</label>
				</div>
			</div>
			<div className="asnp-flex asnp-mt-6">
				<div className="asnp-flex">
					<label className="asnp-flex asnp-cursor-pointer">
						<input
							className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4 asnp-border asnp-border-gray-300 asnp-rounded-sm !asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
							type="checkbox"
							id="inlineCheckbox3"
							checked={ 0 }
						/>
						<div className="asnp-field-title asnp-mt-[2px]">
							{ __(
								'Add Close Icon',
								'easy-sale-badges-for-woocommerce'
							) }
						</div>
					</label>
				</div>
				<div className="asnp-ml-10 asnp-flex">
					<label className="asnp-flex asnp-cursor-pointer">
						<input
							className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4 asnp-border asnp-border-gray-300 asnp-rounded-sm !asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
							type="checkbox"
							id="inlineCheckbox3"
							checked={ 0 }
						/>
						<div className="asnp-field-title asnp-mt-[2px]">
							{ __(
								'Open Link In New Tab',
								'easy-sale-badges-for-woocommerce'
							) }
						</div>
					</label>
				</div>
			</div>
			<div className="asnp-mt-6">
				<label>
					<span className="asnp-field-title">
						{ __(
							'Order Status',
							'easy-sale-badges-for-woocommerce'
						) }
					</span>
					<div className="asnp-mt-1">
						<select className="asnp-select-field asnp-mt-2">
							<option>
								{ __(
									'Completed',
									'easy-sale-badges-for-woocommerce'
								) }
							</option>
						</select>
					</div>
				</label>
			</div>
			<div className="asnp-mt-6">
				<span className="asnp-field-title">
					{ __(
						'Product Filter',
						'easy-sale-badges-for-woocommerce'
					) }
				</span>
				<div className="asnp-w-full asnp-flex">
					<select className="asnp-select-field asnp-mt-2">
						<option>
							{ __(
								'All Products',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option>
							{ __(
								'Products',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option>
							{ __(
								'Categories',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
					</select>
				</div>
			</div>
			<div className="asnp-mt-6 asnp-flex">
				<div>
					<label className="asnp-block asnp-space-y-1">
						<div className="asnp-field-title asnp-ml-1">
							{ __(
								'Display The Last',
								'easy-sale-badges-for-woocommerce'
							) }
						</div>
						<div className="asnp-w-[17rem]">
							<input
								type="number"
								className="asnp-block asnp-text-field"
							/>
						</div>
					</label>
				</div>
				<div className="asnp-ml-10">
					<label className="asnp-block asnp-space-y-1">
						<div className="asnp-field-title asnp-ml-1">
							{ __(
								'Display from the last (days)',
								'easy-sale-badges-for-woocommerce'
							) }
						</div>
						<div className="asnp-w-[17rem]">
							<input
								type="number"
								className="asnp-block asnp-text-field"
							/>
						</div>
					</label>
				</div>
			</div>
			<div className="asnp-mt-6">
				<label className="asnp-inline-flex asnp-space-x-2 asnp-items-center">
					<span className="asnp-field-title">
						{ __(
							'Group Text for Multiple Orders',
							'easy-sale-badges-for-woocommerce'
						) }
					</span>
					<Toggle
						value={ 0 }
						onChange={ ( value ) =>
							onChange( 'multiOrder', value ? 1 : 0 )
						}
					/>
				</label>
			</div>
			<div className="asnp-w-[20rem] asnp-mt-6 asnp-text-lg asnp-font-semibold">
				{ __( 'Timing', 'easy-sale-badges-for-woocommerce' ) }
			</div>
			<div className="asnp-mt-4">
				<div>
					<label className="asnp-block asnp-space-y-1">
						<div className="asnp-field-title asnp-ml-1">
							{ __(
								'Display time (seconds)',
								'easy-sale-badges-for-woocommerce'
							) }
						</div>
						<div className="asnp-w-[17rem]">
							<input
								type="number"
								className="asnp-block asnp-text-field"
							/>
						</div>
					</label>
					<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
						<p className="asnp-text-xs asnp-text-gray-500">
							{ __(
								'Show the popup display time on the screen.',
								'easy-sale-badges-for-woocommerce'
							) }
						</p>
					</label>
				</div>
				<div className="asnp-mt-6">
					<label className="asnp-block asnp-space-y-1">
						<div className="asnp-field-title asnp-ml-1">
							{ __(
								'Delay before first Popup shows (seconds)',
								'easy-sale-badges-for-woocommerce'
							) }
						</div>
						<div className="asnp-w-[17rem]">
							<input
								type="number"
								className="asnp-block asnp-text-field"
							/>
						</div>
					</label>
					<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
						<p className="asnp-text-xs asnp-text-gray-500">
							{ __(
								'Delay before first pop shows.',
								'easy-sale-badges-for-woocommerce'
							) }
						</p>
					</label>
				</div>
				<div className="asnp-mt-6">
					<label className="asnp-block asnp-space-y-1">
						<div className="asnp-field-title asnp-ml-1">
							{ __(
								'Delay time between 2 Popup (seconds)',
								'easy-sale-badges-for-woocommerce'
							) }
						</div>
						<div className="asnp-w-[17rem]">
							<input
								type="number"
								className="asnp-block asnp-text-field"
							/>
						</div>
					</label>
					<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
						<p className="asnp-text-xs asnp-text-gray-500">
							{ __(
								'Interval between two popups appearing on the screen.',
								'easy-sale-badges-for-woocommerce'
							) }
						</p>
					</label>
				</div>
			</div>
			<div className="asnp-w-[20rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
				{ __(
					'Position in Desktop',
					'easy-sale-badges-for-woocommerce'
				) }
			</div>
			<div className="asnp-mt-4">
				<div className="asnp-w-full asnp-flex asnp-rounded-md">
					<div className="asnp-w-[10rem] asnp-flex" role="group">
						<button
							type="button"
							className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
						>
							{ __( 'Top', 'easy-sale-badges-for-woocommerce' ) }
						</button>
						<button
							type="button"
							className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
						>
							{ __(
								'Bottom',
								'easy-sale-badges-for-woocommerce'
							) }
						</button>
					</div>
					<div className="asnp-w-[10rem] asnp-flex" role="group">
						<button
							type="button"
							className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
						>
							{ __( 'Left', 'easy-sale-badges-for-woocommerce' ) }
						</button>
						<button
							type="button"
							className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
						>
							{ __(
								'Right',
								'easy-sale-badges-for-woocommerce'
							) }
						</button>
					</div>
				</div>
			</div>
			<div className="asnp-w-[20rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
				{ __(
					'Position in Mobile',
					'easy-sale-badges-for-woocommerce'
				) }
			</div>
			<div className="asnp-w-full asnp-flex asnp-rounded-md asnp-mt-4">
				<div className="asnp-w-[10rem] asnp-flex" role="group">
					<button
						type="button"
						className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
					>
						{ __( 'Top', 'easy-sale-badges-for-woocommerce' ) }
					</button>
					<button
						type="button"
						className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
					>
						{ __( 'Bottom', 'easy-sale-badges-for-woocommerce' ) }
					</button>
				</div>
			</div>
			<div className="asnp-w-[20rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
				{ __( 'Link', 'easy-sale-badges-for-woocommerce' ) }
			</div>
			<div className="asnp-mt-4">
				<label>
					<span className="asnp-field-title">
						{ __(
							'Link Options',
							'easy-sale-badges-for-woocommerce'
						) }
					</span>
					<div>
						<select className="asnp-select-field asnp-mt-1">
							<option>
								{ __(
									'None',
									'easy-sale-badges-for-woocommerce'
								) }
							</option>
							<option>
								{ __(
									'Product Page',
									'easy-sale-badges-for-woocommerce'
								) }
							</option>
						</select>
					</div>
				</label>
			</div>
			<div className="asnp-mt-6">
				<label className="asnp-inline-flex asnp-space-x-2 asnp-items-center">
					<span className="asnp-field-title">
						{ __(
							'Add Buy Button',
							'easy-sale-badges-for-woocommerce'
						) }
					</span>
					<Toggle value={ 1 } />
				</label>
			</div>
		</div>
	);
};

export default SalesPopupForm;
