import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from '../../Toggle';
import Datetime from 'react-datetime';
import { IMAGES_URL } from './../../../utils/constants';
import Tippy from '@tippyjs/react';
import ColorPicker from 'react-best-gradient-color-picker';

import './style.scss';
import { LockClosedIcon } from '@heroicons/react/solid';

const Timer = () => {
	const [ showText, setShowText ] = useState( true );

	return (
		<div className="asnp-relative">
			{ showText == true && (
				<a
					className="asnp-float-right asnp-top-16 asnp-z-50 asnp-sticky asnp-mt-10 asnp-mr-[40%]"
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
			) }
			<div className="asnp-opacity-50">
				<div className="asnp-w-[25rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
					{ __(
						'Countdown Timer',
						'easy-sale-badges-for-woocommerce'
					) }
				</div>
				<div className="asnp-space-y-1 asnp-mt-4 ">
					<label className="asnp-inline-flex asnp-space-x-2 asnp-items-center">
						<span className="asnp-field-title">
							{ __(
								'Status',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<Toggle value="1" />
					</label>
					<div className="asnp-block">
						{ __(
							'Enable or disable it.',
							'easy-sale-badges-for-woocommerce'
						) }
					</div>
				</div>
				<div className="asnp-w-[25rem] asnp-mt-4 asnp-text-lg asnp-font-semibold">
					{ __(
						'Pick A Start / End Date',
						'easy-sale-badges-for-woocommerce'
					) }
				</div>
				<div className="asnp-flex">
					<div className="asnp-mt-3">
						<label className="asnp-block asnp-space-y-1">
							<span className="asnp-field-title">
								{ __(
									'From Date / Time',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<Datetime disabled />
						</label>
					</div>
					<div className="asnp-mt-3 asnp-ml-8">
						<label className="asnp-block asnp-space-y-1">
							<span className="asnp-field-title">
								{ __(
									'To Date / Time',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<Datetime disabled />
						</label>
					</div>
				</div>
				<div className="asnp-ew-line">
					<div className="asnp-mt-2">
						<div className="asnp-w-[25rem] asnp-text-lg asnp-font-semibold">
							{ __(
								'Timer Styles',
								'easy-sale-badges-for-woocommerce'
							) }
						</div>
						<div className="asnp-relative asnp-inline-block asnp-mb-3 asnp-mt-3 asnp-h-[30rem] asnp-border-2 asnp-rounded-md asnp-p-4 asnp-scrollBarImageB">
							<div className="asnp-w-full asnp-ml-8 asnp-mt-4 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
								<label>
									{ __(
										'Horizontal',
										'easy-sale-badges-for-woocommerce'
									) }
								</label>
							</div>
							<div className="asnp-grid asnp-gap-4 asnp-grid-cols-1 xl:asnp-grid-cols-2 sm:asnp-grid-cols-1">
								<div className="asnp-border-gray-400 asnp-py-8 asnp-px-4 asnp-containerBadgeTimer hover:asnp-border-indigo-700">
									<img
										className="asnp-h-full asnp-w-full asnp-border-none"
										src={ IMAGES_URL + 'badgeTimer1.png' }
									/>
								</div>
								<div className="asnp-border-gray-400 asnp-py-8 asnp-px-4 asnp-containerBadgeTimer hover:asnp-border-indigo-700">
									<img
										className="asnp-h-full asnp-w-full asnp-border-none"
										src={ IMAGES_URL + 'badgeTimer2.png' }
									/>
								</div>
								<div className="asnp-border-gray-400 asnp-py-8 asnp-px-4 asnp-containerBadgeTimer hover:asnp-border-indigo-700">
									<img
										className="asnp-h-full asnp-w-full asnp-border-none"
										src={ IMAGES_URL + 'badgeTimer3.png' }
									/>
								</div>
								<div className="asnp-border-gray-400 asnp-py-8 asnp-px-4 asnp-containerBadgeTimer hover:asnp-border-indigo-700">
									<img
										className="asnp-h-full asnp-w-full asnp-border-none"
										src={ IMAGES_URL + 'badgeTimer4.png' }
									/>
								</div>
							</div>
							<div className="asnp-w-full asnp-ml-8 asnp-mt-1 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
								<label>
									{ __(
										'Vertical',
										'easy-sale-badges-for-woocommerce'
									) }
								</label>
							</div>
							<div className="asnp-grid asnp-gap-4  xl:asnp-grid-cols-4 lg:asnp-grid-cols-3 md:asnp-grid-cols-2 sm:asnp-grid-cols-1">
								<div className="asnp-border-gray-400 asnp-p-4 asnp-containerBadgeTimerV hover:asnp-border-indigo-700">
									<img
										className="asnp-h-full asnp-w-full asnp-border-none"
										src={ IMAGES_URL + 'badgeTimerV1.png' }
									/>
								</div>
								<div className="asnp-border-gray-400 asnp-p-4 asnp-containerBadgeTimerV hover:asnp-border-indigo-700">
									<img
										className="asnp-h-full asnp-w-full asnp-border-none"
										src={ IMAGES_URL + 'badgeTimerV2.png' }
									/>
								</div>
								<div className="asnp-border-gray-400 asnp-p-4 asnp-containerBadgeTimerV hover:asnp-border-indigo-700">
									<img
										className="asnp-h-full asnp-w-full asnp-border-none"
										src={ IMAGES_URL + 'badgeTimerV3.png' }
									/>
								</div>
								<div className="asnp-border-gray-400 asnp-p-4 asnp-containerBadgeTimerV hover:asnp-border-indigo-700">
									<img
										className="asnp-h-full asnp-w-full asnp-border-none"
										src={ IMAGES_URL + 'badgeTimerV4.png' }
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="asnp-ew-line">
					<div className="asnp-w-[25rem]">
						<div className="asnp-mt-3">
							<Tippy
								trigger="click"
								interactive={ true }
								placement={ 'bottom' }
								content={
									<div>
										<div className="asnp-p-4">
											<ColorPicker
												hideColorTypeBtns={ true }
											/>
										</div>
									</div>
								}
							>
								<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
									<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
										<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
											<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
												{ __(
													'Background Color',
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<div
												className={
													'asnp-flex asnp-w-7 asnp-h-6 asnp-rounded-full asnp-my-2 '
												}
											></div>
										</div>
									</div>
								</label>
							</Tippy>
						</div>
						<div className="asnp-mt-3">
							<Tippy
								trigger="click"
								interactive={ true }
								placement={ 'bottom' }
								content={
									<div className="asnp-p-4">
										<ColorPicker
											hideColorTypeBtns={ true }
										/>
									</div>
								}
							>
								<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
									<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
										<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
											<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
												{ __(
													'Text Color',
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<div
												className={
													'asnp-flex asnp-w-7 asnp-h-6 asnp-rounded-full asnp-my-2 '
												}
											></div>
										</div>
									</div>
								</label>
							</Tippy>
						</div>

						<div className="asnp-flex asnp-mt-[2rem] asnp-w-full">
							<label>
								<span className="asnp-field-title">
									{ __(
										'Padding Top/Bottom',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<div className="asnp-w-[10rem]">
									<input
										disabled
										type="number"
										min="0"
										max="40"
										className="asnp-text-field"
									/>
								</div>
							</label>
							<label className="asnp-ml-6">
								<span className="asnp-field-title">
									{ __(
										'Padding Right/Left',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<div className="asnp-w-[10rem]">
									<input
										disabled
										type="number"
										className="asnp-text-field"
										min="0"
										max="100"
									/>
								</div>
							</label>
						</div>
						<div className="asnp-flex asnp-mt-[2rem] asnp-w-full">
							<label>
								<span className="asnp-field-title">
									{ __(
										'Font Size (Pixel)',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<div className="asnp-w-[10rem]">
									<input
										disabled
										type="number"
										min="0"
										max="40"
										className="asnp-text-field"
										placeholder="0"
									/>
								</div>
							</label>
							<label className="asnp-ml-6">
								<span className="asnp-field-title">
									{ __(
										'Line Height (Pixel)',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<div className="asnp-w-[10rem]">
									<input
										disabled
										type="number"
										className="asnp-text-field"
										min="0"
										max="100"
										placeholder="0"
									/>
								</div>
							</label>
						</div>
					</div>
					<div className="asnp-w-[25rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
						{ __(
							'Extra Styles',
							'easy-sale-badges-for-woocommerce'
						) }
					</div>

					<div className="asnp-flex asnp-mt-2">
						<label>
							<span className="asnp-field-title">
								{ __(
									'z-index',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[25rem]">
								<input
									type="number"
									className="asnp-text-field"
									disabled
								/>
							</div>
						</label>
					</div>
				</div>
				<div className="asnp-ew-line asnp-mt-6">
					<label className="asnp-space-y-1">
						<span className="asnp-field-title asnp-text-base asnp-font-semibold">
							{ __(
								'Opacity',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
					</label>
					<div className="asnp-relative asnp-pt-1">
						<input
							type="range"
							className="asnp-form-range asnp-w-[21rem] asnp-h-6 asnp-p-0 asnp-bg-transparent focus:asnp-outline-none focus:asnp-ring-0 focus:asnp-shadow-none asnp-cursor-pointer"
							min="0"
							max="1"
							step="0.01"
							disabled
						/>
						<div className="asnp-w-[21rem] asnp-flex asnp-justify-between asnp-text-xs asnp-px-2">
							<span>0%</span>
							<span>25%</span>
							<span>50%</span>
							<span>75%</span>
							<span>100%</span>
						</div>
					</div>
				</div>
				<div className="asnp-ew-line asnp-mt-6">
					<div className="asnp-mt-4">
						<span className="asnp-field-title asnp-text-base asnp-font-semibold">
							{ __(
								'Timer Position',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="asnp-mt-3 asnp-mb-6">
							<label className="asnp-block asnp-space-y-2 asnp-max-w-lg">
								<select
									className="asnp-block asnp-select-field md:asnp-w-2/3 !asnp-h-12"
									disabled
								>
									<option>
										{ __(
											'On Image',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Out of Image',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
								</select>
							</label>
						</div>
						<div className="asnp-w-full asnp-flex asnp-rounded-md asnp-mt-3">
							<div
								className="asnp-w-[10rem] asnp-flex"
								role="group"
							>
								<button
									type="button"
									className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
								>
									{ __(
										'Top',
										'easy-sale-badges-for-woocommerce'
									) }
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
							<div
								className="asnp-w-[10rem] asnp-flex asnp-ml-24"
								role="group"
							>
								<button
									type="button"
									className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
								>
									{ __(
										'Left',
										'easy-sale-badges-for-woocommerce'
									) }
								</button>
								<button
									type="button"
									className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
								>
									{ __(
										'Center',
										'easy-sale-badges-for-woocommerce'
									) }
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
					<div className="asnp-mt-8">
						<span className="asnp-field-title asnp-text-base asnp-font-semibold">
							{ __(
								'Timer Position (Pixel)',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
					</div>
					<div className="asnp-flex asnp-mt-3">
						<label>
							<span className="asnp-field-title asnp-ml-6">
								{ __(
									'Top',
									'easy-sale-badges-for-woocommerce asnp-ml-6'
								) }
							</span>
							<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
								<input
									className="asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed"
									disabled
									type="number"
									min="0"
									max="200"
									placeholder="0"
								/>
							</div>
						</label>
						<label>
							<span className="asnp-field-title asnp-ml-6">
								{ __(
									'Bottom',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
								<input
									disabled
									type="number"
									min="0"
									max="200"
									className="asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed"
									placeholder="0"
								/>
							</div>
						</label>
						<label>
							<span className="asnp-field-title asnp-ml-6">
								{ __(
									'Left',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
								<input
									disabled
									type="number"
									min="0"
									max="200"
									className="asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed"
									placeholder="0"
								/>
							</div>
						</label>
						<label>
							<span className="asnp-field-title asnp-ml-6">
								{ __(
									'Right',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
								<input
									className="asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed"
									type="number"
									min="0"
									max="200"
									placeholder="0"
									disabled
								/>
							</div>
						</label>
					</div>
					<div className="asnp-mt-8">
						<span className="asnp-field-title asnp-text-base asnp-font-semibold">
							{ __(
								'Labels',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
					</div>
					<div className="asnp-flex asnp-mt-3 asnp-mb-6">
						<label>
							<span className="asnp-field-title asnp-ml-4 xl:asnp-ml-6">
								{ ' ' }
								{ __(
									'Days',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
								<input
									type="text"
									className="asnp-text-field"
									disabled
								/>
							</div>
						</label>
						<label>
							<span className="asnp-field-title asnp-ml-4 xl:asnp-ml-6">
								{ __(
									'Hours',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
								<input
									type="text"
									className="asnp-text-field"
									disabled
								/>
							</div>
						</label>
						<label>
							<span className="asnp-field-title asnp-ml-4 xl:asnp-ml-6">
								{ __(
									'Minutes',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
								<input
									type="text"
									className="asnp-text-field"
									disabled
								/>
							</div>
						</label>
						<label>
							<span className="asnp-field-title asnp-ml-4 xl:asnp-ml-6">
								{ __(
									'Seconds',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
								<input
									type="text"
									className="asnp-text-field"
									disabled
								/>
							</div>
						</label>
					</div>
				</div>
			</div>
			<div className="asnp-w-[25rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
				{ __(
					'Animation Effects (Pro Version)',
					'easy-sale-badges-for-woocommerce'
				) }
			</div>
			<div className="asnp-flex asnp-mt-[2rem] asnp-w-full">
				<label>
					<span className="asnp-field-title">
						{ __(
							'Animation',
							'easy-sale-badges-for-woocommerce'
						) }
					</span>
					<div>
						<select
							className="asnp-select-field asnp-mt-2 !asnp-h-[2.4rem]"
							disabled
						>
							<option value="none">
								{ __(
									'None',
									'easy-sale-badges-for-woocommerce'
								) }
							</option>
						</select>
					</div>
				</label>
				<label className="asnp-ml-14">
					<span className="asnp-field-title">
						{ __(
							'Iteration Count',
							'easy-sale-badges-for-woocommerce'
						) }
					</span>
					<div>
						<select
							className="asnp-select-field asnp-mt-2 !asnp-h-[2.4rem]"
							disabled
						>
							<option value="infinite">
								{ __(
									'Infinite',
									'easy-sale-badges-for-woocommerce'
								) }
							</option>
						</select>
					</div>
				</label>
				<label className="asnp-ml-14">
					<span className="asnp-field-title">
						{ __( 'Duration', 'easy-sale-badges-for-woocommerce' ) }
					</span>
					<div>
						<input
							disabled
							type="number"
							className="asnp-text-field !asnp-w-16"
							placeholder="0"
						/>
					</div>
				</label>
			</div>
		</div>
	);
};

export default Timer;
