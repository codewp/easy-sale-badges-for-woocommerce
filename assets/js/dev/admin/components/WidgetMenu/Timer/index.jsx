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
				<a className="asnp-float-right asnp-top-16 asnp-z-50 asnp-sticky asnp-mt-10 asnp-mr-[40%]">
					<button className="asnp-btn asnp-btn-delete !asnp-w-[14rem] asnp-flex asnp-text-center asnp-justify-center">
						{ __( 'Go Pro', 'asnp-easy-sale-badge' ) }
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
					{ __( 'Timer', 'asnp-easy-sale-badge' ) }
				</div>
				<div className="asnp-space-y-1 asnp-mt-4 ">
					<label className="asnp-inline-flex asnp-space-x-2 asnp-items-center">
						<span className="asnp-field-title">
							{ __( 'Status', 'asnp-easy-sale-badge' ) }
						</span>
						<Toggle value="1" />
					</label>
					<div className="asnp-block">
						{ __(
							'Enable or disable it.',
							'asnp-easy-sale-badge'
						) }
					</div>
				</div>
				<div className="asnp-w-[25rem] asnp-mt-4 asnp-text-lg asnp-font-semibold">
					{ __( 'Pick A Start / End Date', 'asnp-easy-sale-badge' ) }
				</div>
				<div className="asnp-flex">
					<div className="asnp-mt-3">
						<label className="asnp-block asnp-space-y-1">
							<span className="asnp-field-title">
								{ __(
									'From Date / Time',
									'asnp-easy-sale-badge'
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
									'asnp-easy-sale-badge'
								) }
							</span>
							<Datetime disabled />
						</label>
					</div>
				</div>
				<div className="asnp-ew-line">
					<div className="asnp-mt-2">
						<div className="asnp-w-[25rem] asnp-text-lg asnp-font-semibold">
							{ __( 'Timer Styles', 'asnp-easy-sale-badge' ) }
						</div>
						<div className="asnp-relative asnp-mb-3 asnp-mt-3 asnp-h-[30rem] asnp-flex asnp-flex-col asnp-border-2 asnp-rounded-md asnp-pr-1 asnp-scrollBarImageB">
							<div className="asnp-w-full asnp-ml-8 asnp-mt-4 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
								<label>
									{ __(
										'Horizontal',
										'asnp-easy-sale-badge'
									) }
								</label>
							</div>
							<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-1">
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
							</div>
							<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-1">
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
									{ __( 'Vertical', 'asnp-easy-sale-badge' ) }
								</label>
							</div>
							<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-1 asnp-mb-4">
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
											<ColorPicker />
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
													'asnp-easy-sale-badge'
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
										<ColorPicker />
									</div>
								}
							>
								<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
									<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
										<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
											<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
												{ __(
													'Text Color',
													'asnp-easy-sale-badge'
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
										'asnp-easy-sale-badge'
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
										'asnp-easy-sale-badge'
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
										'asnp-easy-sale-badge'
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
										'asnp-easy-sale-badge'
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
						{ __( 'Additional Styles', 'asnp-easy-sale-badge' ) }
					</div>

					<div className="asnp-flex asnp-mt-2">
						<label>
							<span className="asnp-field-title">
								{ __( 'z-index', 'asnp-easy-sale-badge' ) }
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
							{ __( 'Opacity', 'asnp-easy-sale-badge' ) }
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
							{ __( 'Label Position', 'asnp-easy-sale-badge' ) }
						</span>
						<div className="asnp-w-full asnp-flex asnp-rounded-md asnp-mt-3">
							<div
								className="asnp-w-[10rem] asnp-flex"
								role="group"
							>
								<button
									type="button"
									className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
								>
									{ __( 'Top', 'asnp-easy-sale-badge' ) }
								</button>

								<button
									type="button"
									className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
								>
									{ __( 'Bottom', 'asnp-easy-sale-badge' ) }
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
									{ __( 'Left', 'asnp-easy-sale-badge' ) }
								</button>
								<button
									type="button"
									className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
								>
									{ __( 'Center', 'asnp-easy-sale-badge' ) }
								</button>
								<button
									type="button"
									className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
								>
									{ __( 'Right', 'asnp-easy-sale-badge' ) }
								</button>
							</div>
						</div>
					</div>
					<div className="asnp-mt-8">
						<span className="asnp-field-title asnp-text-base asnp-font-semibold">
							{ __(
								'Label Position (Pixel)',
								'asnp-easy-sale-badge'
							) }
						</span>
					</div>
					<div className="asnp-flex asnp-mt-3">
						<label>
							<span className="asnp-field-title asnp-ml-6">
								{ __(
									'Top',
									'asnp-easy-sale-badge asnp-ml-6'
								) }
							</span>
							<div className="asnp-w-[10rem]">
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
								{ __( 'Bottom', 'asnp-easy-sale-badge' ) }
							</span>
							<div className="asnp-w-[10rem] asnp-ml-6">
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
								{ __( 'Left', 'asnp-easy-sale-badge' ) }
							</span>
							<div className="asnp-w-[10rem] asnp-ml-6">
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
								{ __( 'Right', 'asnp-easy-sale-badge' ) }
							</span>
							<div className="asnp-w-[10rem] asnp-ml-6">
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
							{ __( 'Labels', 'asnp-easy-sale-badge' ) }
						</span>
					</div>
					<div className="asnp-flex asnp-mt-3 asnp-mb-6">
						<label>
							<span className="asnp-field-title">
								{ __( 'Days', 'asnp-easy-sale-badge' ) }
							</span>
							<div className="asnp-w-[11rem]">
								<input
									type="text"
									className="asnp-text-field"
									disabled
								/>
							</div>
						</label>
						<label>
							<span className="asnp-field-title asnp-ml-7">
								{ __( 'Hours', 'asnp-easy-sale-badge' ) }
							</span>
							<div className="asnp-w-[11rem] asnp-ml-7">
								<input
									type="text"
									className="asnp-text-field"
									disabled
								/>
							</div>
						</label>
						<label>
							<span className="asnp-field-title asnp-ml-7">
								{ __( 'Minutes', 'asnp-easy-sale-badge' ) }
							</span>
							<div className="asnp-w-[11rem] asnp-ml-7">
								<input
									type="text"
									className="asnp-text-field"
									disabled
								/>
							</div>
						</label>
						<label>
							<span className="asnp-field-title asnp-ml-7">
								{ __( 'Seconds', 'asnp-easy-sale-badge' ) }
							</span>
							<div className="asnp-w-[11rem] asnp-ml-7">
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
		</div>
	);
};

export default Timer;
