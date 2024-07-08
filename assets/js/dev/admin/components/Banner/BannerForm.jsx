import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from './../Toggle/index';
import Tippy from '@tippyjs/react';
import ColorPicker from 'react-best-gradient-color-picker';

const BannerForm = () => {
	const [ activeMenu, setActiveMenu ] = useState( 'content' );

	return (
		<div className="asnp-p-4">
			<nav className="asnp-flex asnp-flex-col sm:asnp-flex-row asnp-w-full">
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setActiveMenu( 'content' );
					} }
					className={
						( 'content' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __( 'Content', 'easy-sale-badges-for-woocommerce' ) }
				</a>

				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setActiveMenu( 'bannerTimer' );
					} }
					className={
						( 'bannerTimer' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __(
						'Countdown Timer',
						'easy-sale-badges-for-woocommerce'
					) }
				</a>

				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setActiveMenu( 'styles' );
					} }
					className={
						( 'styles' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __( 'Colors', 'easy-sale-badges-for-woocommerce' ) }
				</a>
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setActiveMenu( 'animation' );
					} }
					className={
						( 'animation' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __( 'Animation', 'easy-sale-badges-for-woocommerce' ) }
				</a>
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setActiveMenu( 'schedule' );
					} }
					className={
						( 'schedule' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __( 'Schedule', 'easy-sale-badges-for-woocommerce' ) }
				</a>
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setActiveMenu( 'pages' );
					} }
					className={
						( 'pages' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __( 'Targeting', 'easy-sale-badges-for-woocommerce' ) }
				</a>
			</nav>
			{ activeMenu === 'content' && (
				<div className="asnp-p-4">
					<div className="asnp-mt-4 asnp-mb-2 asnp-flex">
						<label className="asnp-w-[40rem]">
							<span className="asnp-field-title">
								{ __(
									'Text',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<textarea
								placeholder="All Products 30% OFF"
								className="asnp-ew-textAreaBlock4"
								disabled
							/>
						</label>
					</div>

					<div className="asnp-flex asnp-mt-6">
						<label className="asnp-mt-10 asnp-flex asnp-cursor-pointer asnp-w-[7rem]">
							<input
								className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4 asnp-border asnp-border-gray-300 asnp-rounded-sm !asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
								type="checkbox"
								id="inlineCheckbox3"
							/>
							<div className="asnp-field-title asnp-mt-[2px]">
								{ __(
									'Add X Button',
									'easy-sale-badges-for-woocommerce'
								) }
							</div>
						</label>

						<div className="asnp-flex">
							<label className="asnp-ml-10 asnp-mt-10 asnp-flex asnp-cursor-pointer asnp-w-[7rem]">
								<input
									className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4 asnp-border asnp-border-gray-300 asnp-rounded-sm !asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
									type="checkbox"
									id="inlineCheckbox3"
								/>
								<div className="asnp-field-title asnp-mt-[2px]">
									{ __(
										'Add Button',
										'easy-sale-badges-for-woocommerce'
									) }
								</div>
							</label>
							<div className="asnp-flex asnp-ml-6">
								<label className="asnp-w-[15rem]">
									<span className="asnp-field-title">
										{ __(
											'Text Button',
											'easy-sale-badges-for-woocommerce'
										) }
									</span>
									<input
										type="text"
										className="asnp-text-field"
										placeholder="Text"
									/>
								</label>
								<label className="asnp-w-[15rem] asnp-ml-8">
									<span className="asnp-field-title">
										{ __(
											'Text Button URL',
											'easy-sale-badges-for-woocommerce'
										) }
									</span>
									<input
										type="text"
										className="asnp-text-field"
										placeholder="Url"
									/>
								</label>
							</div>
						</div>
					</div>
					<div className="asnp-w-[25rem] asnp-text-lg asnp-font-semibold asnp-mt-6">
						{ __( 'Styles', 'easy-sale-badges-for-woocommerce' ) }
					</div>
					<div className="asnp-flex asnp-mt-2">
						<label className="asnp-w-[10rem]">
							<span className="asnp-field-title">
								{ __(
									'Font Size (Pixel)',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<input
								type="number"
								min="0"
								max="100"
								className="asnp-text-field"
								placeholder="0"
							/>
						</label>
						<label className="asnp-w-[10rem] asnp-ml-6">
							<span className="asnp-field-title">
								{ __(
									'Font Weight',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<select className="asnp-select-field asnp-mt-2">
								<option value="500">
									{ __(
										'500',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option value="600">
									{ __(
										'600',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option value="normal">
									{ __(
										'Normal',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option value="bold">
									{ __(
										'Bold',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option value="bolder">
									{ __(
										'Bolder',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option value="lighter">
									{ __(
										'Lighter',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
							</select>
						</label>
					</div>
					<div className="asnp-w-[25rem] asnp-text-lg asnp-font-semibold asnp-mt-6">
						{ __( 'Position', 'easy-sale-badges-for-woocommerce' ) }
					</div>
					<div className="asnp-flex asnp-mt-2">
						<div className="asnp-flex">
							<label className="asnp-w-[15rem]">
								<span className="asnp-field-title">
									{ __(
										'Banner Position',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<select className="asnp-select-field asnp-mt-2">
									<option value={ 'top' }>
										{ __(
											'Top',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value={ 'bottom' }>
										{ __(
											'Bottom',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
								</select>
							</label>
						</div>
						<div className="asnp-flex asnp-ml-6">
							<label className="asnp-w-[15rem]">
								<span className="asnp-field-title">
									{ __(
										'Text Position',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<select className="asnp-select-field asnp-mt-2">
									<option value={ 'flex-start' }>
										{ __(
											'Left',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value={ 'center' }>
										{ __(
											'Center',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value={ 'flex-end' }>
										{ __(
											'Right',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
								</select>
							</label>
						</div>
						<div className="asnp-flex asnp-ml-6">
							<label className="asnp-w-[15rem]">
								<span className="asnp-field-title">
									{ __(
										'Banner Fixed',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<select className="asnp-select-field asnp-mt-2">
									<option value={ 1 }>
										{ __(
											'Yes',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value={ 0 }>
										{ __(
											'No',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
								</select>
							</label>
						</div>
						<div className="asnp-flex asnp-ml-6">
							<label className="asnp-w-[10rem]">
								<span className="asnp-field-title">
									{ __(
										'Show Bar (Sec)',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<input
									type="Number"
									className="asnp-text-field asnp-w-10"
								/>
							</label>
						</div>
						<div className="asnp-flex asnp-ml-6">
							<label className="asnp-w-[10rem]">
								<span className="asnp-field-title">
									{ __(
										'Z-Index',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<input
									type="Number"
									className="asnp-text-field asnp-w-10"
								/>
							</label>
						</div>
					</div>

					<div className="asnp-mt-6">
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
				</div>
			) }
			{ activeMenu === 'bannerTimer' && (
				<div className="asnp-p-4">
					<div className="asnp-flex asnp-mt-4">
						<label className="asnp-w-[15rem]">
							<span className="asnp-field-title asnp-text-lg asnp-font-semibold">
								{ __(
									'Countdown Timer Mode',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<select className="asnp-select-field asnp-mt-2">
								<option>
									{ __(
										'Till End Date',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'Evergreen',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
							</select>
						</label>
					</div>
					<>
						<div className="asnp-flex">
							<div className="asnp-mt-4 asnp-text-lg asnp-font-semibold">
								{ __(
									'Pick A Start / End Date',
									'easy-sale-badges-for-woocommerce'
								) }
							</div>
							<div className="asnp-mt-5"></div>
						</div>
						<div className="asnp-flex asnp-mt-2">
							<div>
								<label className="asnp-block asnp-space-y-1">
									<span className="asnp-field-title">
										{ __(
											'From Date / Time',
											'easy-sale-badges-for-woocommerce'
										) }
									</span>
								</label>
							</div>
							<div className="asnp-ml-6">
								<label className="asnp-block asnp-space-y-1">
									<span className="asnp-field-title">
										{ __(
											'To Date / Time',
											'easy-sale-badges-for-woocommerce'
										) }
									</span>
								</label>
							</div>
						</div>
					</>

					<div className="asnp-mt-4">
						<span className="asnp-field-title asnp-text-base asnp-font-semibold">
							{ __(
								'Labels',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
					</div>
					<div className="asnp-space-y-1 asnp-mt-2">
						<label className="asnp-inline-flex asnp-space-x-2 asnp-items-center">
							<span className="asnp-field-title">
								{ __(
									'Countdown Timer Label',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<Toggle value={ 1 } />
						</label>
						<div className="asnp-block">
							{ __(
								'Enable or disable it.',
								'easy-sale-badges-for-woocommerce'
							) }
						</div>
					</div>
					<div className="asnp-flex asnp-mt-4 asnp-mb-6">
						<label>
							<span className="asnp-field-title">
								{ __(
									'Days',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[11rem]">
								<input
									type="text"
									className="asnp-text-field"
								/>
							</div>
						</label>
						<label>
							<span className="asnp-field-title asnp-ml-7">
								{ __(
									'Hours',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[11rem] asnp-ml-7">
								<input
									type="text"
									className="asnp-text-field"
								/>
							</div>
						</label>
						<label>
							<span className="asnp-field-title asnp-ml-7">
								{ __(
									'Minutes',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[11rem] asnp-ml-7">
								<input
									type="text"
									className="asnp-text-field"
								/>
							</div>
						</label>
						<label>
							<span className="asnp-field-title asnp-ml-7">
								{ __(
									'Seconds',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[11rem] asnp-ml-7">
								<input
									type="text"
									className="asnp-text-field"
								/>
							</div>
						</label>
					</div>
					<div className="asnp-mt-2">
						<span className="asnp-field-title asnp-text-base asnp-font-semibold">
							{ __(
								'Position & Style',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
					</div>
					<div className="asnp-flex asnp-mt-4">
						<label className="asnp-w-[15rem]">
							<span className="asnp-field-title">
								{ __(
									'Countdown Timer Style',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<select className="asnp-select-field asnp-mt-2">
								<option value={ 'classicTimer' }>
									{ __(
										'Style 1',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option value={ 'simple' }>
									{ __(
										'Style 2',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option value={ 'timerBn1' }>
									{ __(
										'Style 3',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option value={ 'timerBn2' }>
									{ __(
										'Style 4',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
							</select>
						</label>
						<label className="asnp-ml-8 asnp-w-[15rem]">
							<span className="asnp-field-title">
								{ __(
									'Countdown Timer Position',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<select className="asnp-select-field asnp-mt-2">
								<option>
									{ __(
										'Left',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'Center',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'Right',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
							</select>
						</label>
						<label className="asnp-ml-8 asnp-w-[10rem]">
							<span className="asnp-field-title">
								{ __(
									'Padding Top/Bottom',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<input
								type="number"
								min="0"
								max="40"
								className="asnp-text-field"
							/>
						</label>
						<label className="asnp-ml-8 asnp-w-[10rem]">
							<span className="asnp-field-title">
								{ __(
									'Padding Right/Left',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<input
								type="number"
								className="asnp-text-field"
								min="0"
								max="100"
							/>
						</label>
						<label className="asnp-w-[10rem] asnp-ml-8">
							<span className="asnp-field-title">
								{ __(
									'Font Size (Pixel)',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<input
								type="number"
								min="0"
								max="40"
								className="asnp-text-field"
								placeholder="0"
							/>
						</label>
						<label className="asnp-w-[10rem] asnp-ml-8">
							<span className="asnp-field-title">
								{ __(
									'Line Height (Pixel)',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<input
								type="number"
								min="0"
								max="40"
								className="asnp-text-field"
								placeholder="0"
							/>
						</label>
					</div>
				</div>
			) }
			{ activeMenu === 'styles' && (
				<div className="asnp-p-4 asnp-h-[50rem]">
					<div className="asnp-w-[20rem] asnp-text-lg asnp-font-semibold">
						{ __( 'Colors', 'easy-sale-badges-for-woocommerce' ) }
					</div>
					<div className="asnp-mt-4 asnp-flex">
						<div className="asnp-flex">
							<div className="asnp-w-[14rem]">
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
															'Bar Color',
															'easy-sale-badges-for-woocommerce'
														) }
													</span>
													<div className="asnp-flex asnp-w-7 asnp-h-6 asnp-rounded-full asnp-my-2 "></div>
												</div>
											</div>
										</label>
									</Tippy>
								</div>
							</div>
							<div className="asnp-w-[14rem] asnp-ml-4">
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
															'easy-sale-badges-for-woocommerce'
														) }
													</span>
													<div className="asnp-flex asnp-w-7 asnp-h-6 asnp-rounded-full asnp-my-2 "></div>
												</div>
											</div>
										</label>
									</Tippy>
								</div>
							</div>
							<div className="asnp-w-[14rem] asnp-ml-4">
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
															'Button Color',
															'easy-sale-badges-for-woocommerce'
														) }
													</span>
													<div className="asnp-flex asnp-w-7 asnp-h-6 asnp-rounded-full asnp-my-2 "></div>
												</div>
											</div>
										</label>
									</Tippy>
								</div>
							</div>
							<div className="asnp-w-[14rem] asnp-ml-4">
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
															'Countdown Timer Color',
															'easy-sale-badges-for-woocommerce'
														) }
													</span>
													<div className="asnp-flex asnp-w-7 asnp-h-6 asnp-rounded-full asnp-my-2 "></div>
												</div>
											</div>
										</label>
									</Tippy>
								</div>
							</div>
						</div>
					</div>
				</div>
			) }
			{ activeMenu === 'schedule' && (
				<div className="asnp-p-4">
					<div className="asnp-w-[20rem] asnp-text-lg asnp-font-semibold">
						{ __( 'Schedule', 'easy-sale-badges-for-woocommerce' ) }
					</div>
					<div>
						<div>
							<div className="asnp-w-full asnp-mb-4">
								<div className="asnp-w-full asnp-mb-4 asnp-flex">
									<select className="asnp-select-field !asnp-w-48 asnp-mt-2">
										<option>
											{ __(
												'Date',
												'easy-sale-badges-for-woocommerce'
											) }
										</option>

										<option>
											{ __(
												'Date Time',
												'easy-sale-badges-for-woocommerce'
											) }
										</option>

										<option>
											{ __(
												'Time',
												'easy-sale-badges-for-woocommerce'
											) }
										</option>
										<option>
											{ __(
												'Days',
												'easy-sale-badges-for-woocommerce'
											) }
										</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
			) }
			{ activeMenu === 'pages' && (
				<div className="asnp-p-4">
					<div className="asnp-w-[20rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
						{ __( 'Devices', 'easy-sale-badges-for-woocommerce' ) }
					</div>
					<div className="asnp-flex">
						<div className="asnp-mt-4 asnp-flex">
							<label className="asnp-flex asnp-cursor-pointer asnp-w-[7rem]">
								<input
									className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4 asnp-border asnp-border-gray-300 asnp-rounded-sm !asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
									type="checkbox"
									id="inlineCheckbox3"
								/>
								<div className="asnp-field-title asnp-mt-[2px]">
									{ __(
										'Desktop',
										'easy-sale-badges-for-woocommerce'
									) }
								</div>
							</label>
						</div>
						<div className="asnp-mt-4 asnp-ml-4">
							<label className="asnp-flex asnp-cursor-pointer asnp-w-[7rem]">
								<input
									className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4 asnp-border asnp-border-gray-300 asnp-rounded-sm !asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
									type="checkbox"
									id="inlineCheckbox2"
								/>
								<div className="asnp-field-title asnp-mt-[2px]">
									{ __(
										'Mobile',
										'easy-sale-badges-for-woocommerce'
									) }
								</div>
							</label>
						</div>
					</div>
					<div className="asnp-w-[20rem] asnp-text-lg asnp-font-semibold asnp-mt-8">
						{ __(
							'Pages & Products',
							'easy-sale-badges-for-woocommerce'
						) }
					</div>
					<div>
						<div className="asnp-mt-4">
							<div className="asnp-w-full asnp-mb-4">
								<div className="asnp-w-full asnp-mb-4 asnp-flex asnp-mt-5">
									<select className="asnp-select-field !asnp-w-48 asnp-mt-2">
										<optgroup
											label={ __(
												'Pages',
												'easy-sale-badges-for-woocommerce'
											) }
										>
											<option>
												{ __(
													'All Pages',
													'easy-sale-badges-for-woocommerce'
												) }
											</option>
											<option>
												{ __(
													'Pages',
													'easy-sale-badges-for-woocommerce'
												) }
											</option>
											<option>
												{ __(
													'Posts',
													'easy-sale-badges-for-woocommerce'
												) }
											</option>
										</optgroup>
										<optgroup
											label={ __(
												'Products',
												'easy-sale-badges-for-woocommerce'
											) }
										>
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
													'Stock status',
													'easy-sale-badges-for-woocommerce'
												) }
											</option>
											<option>
												{ __(
													'Is on sale',
													'easy-sale-badges-for-woocommerce'
												) }
											</option>
											<option>
												{ __(
													'Categories',
													'easy-sale-badges-for-woocommerce'
												) }
											</option>
											<option>
												{ __(
													'Tags',
													'easy-sale-badges-for-woocommerce'
												) }
											</option>
											<option>
												{ __(
													'Discount rules',
													'easy-sale-badges-for-woocommerce'
												) }
											</option>
											<option>
												{ __(
													'Recently Added',
													'easy-sale-badges-for-woocommerce'
												) }
											</option>
										</optgroup>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
			) }
			{ activeMenu === 'animation' && (
				<div className="asnp-p-4">
					<div className="asnp-w-[20rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
						{ __(
							'Animation Effect',
							'easy-sale-badges-for-woocommerce'
						) }
					</div>
					<div className="asnp-flex asnp-mt-2">
						<div className="asnp-flex">
							<label className="asnp-w-[15rem]">
								<span className="asnp-field-title">
									{ __(
										'Banner Animation',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<select className="asnp-select-field asnp-mt-2">
									<option>
										{ __(
											'None',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Zoom In',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Fade In',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Fade Out',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Slide In Left',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Slide In Right',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Flip Animation',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
								</select>
							</label>
						</div>
						<div className="asnp-flex asnp-ml-6">
							<label className="asnp-w-[15rem]">
								<span className="asnp-field-title">
									{ __(
										'Text Animation',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<select className="asnp-select-field asnp-mt-2">
									<option>
										{ __(
											'None',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Typing',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Uplift',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Fade In',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Slide In Left',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
								</select>
							</label>
						</div>
					</div>
				</div>
			) }
		</div>
	);
};

export default BannerForm;
