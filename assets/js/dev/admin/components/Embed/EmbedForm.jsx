import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';

const EmbedForm = () => {
	const [ activeMenuEmbeds, setActiveMenuEmbeds ] = useState(
		'embedContent'
	);
	return (
		<div className="asnp-p-4">
			<nav className="asnp-flex asnp-flex-row asnp-flex-wrap">
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setActiveMenuEmbeds( 'embedContent' );
					} }
					className={
						( 'embedContent' === activeMenuEmbeds
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __( 'Content', 'easy-sale-badges-for-woocommerce' ) }
				</a>
				{ embed.type === 'countdownTimer' && (
					<a
						href="#"
						onClick={ ( e ) => {
							e.preventDefault();
							setActiveMenuEmbeds( 'embedTimer' );
						} }
						className={
							( 'embedTimer' === activeMenuEmbeds
								? ' asnp-nav-tab-active'
								: '' ) + ' asnp-nav-tab-item'
						}
					>
						{ __(
							'Countdown Timer',
							'easy-sale-badges-for-woocommerce'
						) }
					</a>
				) }
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setActiveMenuEmbeds( 'embedTheme' );
					} }
					className={
						( 'embedTheme' === activeMenuEmbeds
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __(
						'Theme & Styles',
						'easy-sale-badges-for-woocommerce'
					) }
				</a>

				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setActiveMenuEmbeds( 'embedColors' );
					} }
					className={
						( 'embedColors' === activeMenuEmbeds
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
						setActiveMenuEmbeds( 'embedSchedule' );
					} }
					className={
						( 'embedSchedule' === activeMenuEmbeds
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
						setActiveMenuEmbeds( 'embedTargeting' );
					} }
					className={
						( 'embedTargeting' === activeMenuEmbeds
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __(
						'Targeting',
						'easy-sale-badges-for-woocommerce'
					) }
				</a>
			</nav>
			{ activeMenuEmbeds === 'embedContent' && (
				<div>
					<div className="asnp-mt-6">
						<span className="asnp-field-title">
							{ __(
								'Top Message',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<textarea
							type="text"
							className="asnp-block asnp-text-field !asnp-w-[25rem]"
						/>
					</div>
					<div className="asnp-mt-6">
						<span className="asnp-field-title">
							{ __(
								'Bottom Message',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<textarea
							type="text"
							className="asnp-block asnp-text-field !asnp-w-[25rem]"
						/>
					</div>
					<div className="asnp-flex asnp-mt-8">
						<label className="asnp-w-[15rem]">
							<span className="asnp-field-title">
								{ __(
									'Add Action',
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
										'Button',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'Coupon',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
							</select>
						</label>
					</div>
				</div>
			) }
			{ activeMenuEmbeds === 'embedTimer' && (
				<div className="asnp-p-4">
					<div className="asnp-flex asnp-mt-4">
						<label className="asnp-w-[15rem]">
							<span className="asnp-field-title asnp-text-base asnp-font-semibold">
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

					<div>
						<div className="asnp-mt-6">
							<span className="asnp-field-title asnp-text-base asnp-font-semibold">
								{ __(
									'Labels',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
						</div>
						<div className="asnp-flex asnp-mt-2">
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
						</div>
						<div className="asnp-flex asnp-mt-4">
							<label>
								<span className="asnp-field-title">
									{ __(
										'Minutes',
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
					</div>
					<div className="asnp-mt-8">
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
								<option>
									{ __(
										'Style 1',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'Style 2',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
							</select>
						</label>
						<label className="asnp-ml-8 asnp-w-[10rem]">
							<span className="asnp-field-title">
								{ __(
									'Width (Size)',
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
					</div>
					<div className="asnp-flex asnp-mt-4">
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
								max="40"
								className="asnp-text-field"
								placeholder="0"
							/>
						</label>
					</div>
				</div>
			) }
			{ activeMenuEmbeds === 'embedTheme' && (
				<div>
					<div className="asnp-mt-4 asnp-text-lg asnp-font-semibold">
						{ __(
							'Gradient Palette',
							'easy-sale-badges-for-woocommerce'
						) }
					</div>
					<div className="asnp-relative asnp-w-[30rem] asnp-mb-3 asnp-mt-3 asnp-h-auto asnp-flex asnp-flex-col asnp-border-gray-300 asnp-border-[1px] asnp-rounded-2xl asnp-p-2">
						<div className="asnp-flex asnp-flex-wrap">
							<div
								className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
								style={ {
									background:
										'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(250, 23, 49) 100%)',
								} }
							></div>
							<div
								className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
								style={ {
									background:
										'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(33, 197, 153) 100%)',
								} }
							></div>
							<div
								className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
								style={ {
									background:
										'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(100, 92, 187) 100%)',
								} }
							></div>
							<div
								className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
								style={ {
									background:
										'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(100, 187, 92) 100%)',
								} }
							></div>
							<div className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"></div>
							<div
								className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
								style={ {
									background:
										'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(251, 114, 17) 100%)',
								} }
							></div>
							<div
								className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
								style={ {
									background:
										'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(23, 19, 174) 100%)',
								} }
							></div>
							<div
								className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
								style={ {
									background:
										'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 135, 135) 100%)',
								} }
							></div>
							<div
								className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
								style={ {
									background:
										'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(188, 226, 158) 100%)',
								} }
							></div>
							<div
								className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
								style={ {
									background:
										'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(231, 220, 26) 100%)',
								} }
							></div>
						</div>
					</div>
					<div className="asnp-w-[20rem] asnp-mt-6 asnp-text-lg asnp-font-semibold">
						{ __(
							'Font Size (Pixel)',
							'easy-sale-badges-for-woocommerce'
						) }
					</div>
					<div className="asnp-flex asnp-mt-4 asnp-w-full">
						<label>
							<span className="asnp-field-title">
								{ __(
									'Font Size Top Message (Pixel)',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div>
								<input
									type="number"
									min="0"
									max="40"
									className="asnp-text-field"
									placeholder="0"
								/>
							</div>
						</label>
						<label className="asnp-ml-10">
							<span className="asnp-field-title">
								{ __(
									'Font Size Bottom Message (Pixel)',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div>
								<input
									type="number"
									min="0"
									max="40"
									className="asnp-text-field"
									placeholder="0"
								/>
							</div>
						</label>
					</div>
					<div className="asnp-w-[20rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
						{ __( 'Font', 'easy-sale-badges-for-woocommerce' ) }
					</div>
					<div className="asnp-flex asnp-mt-4 asnp-w-full">
						<label>
							<span className="asnp-field-title">
								{ __(
									'Font Top Message',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div>
								<select className="asnp-select-field xl:!asnp-w-48 asnp-mt-2">
									<option>
										{ __(
											'inherit',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Arial',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Helvetica',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Times New Roman',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Georgia',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Verdana',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Trebuchet MS',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Courier New',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Tahoma',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Lucida Sans Unicode',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Open Sans',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
								</select>
							</div>
						</label>
						<label className="asnp-ml-10">
							<span className="asnp-field-title">
								{ __(
									'Font Bottom Message',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div>
								<select className="asnp-select-field xl:!asnp-w-48 asnp-mt-2">
									<option>
										{ __(
											'inherit',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Arial',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Helvetica',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Times New Roman',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Georgia',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Verdana',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Trebuchet MS',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Courier New',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Tahoma',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Lucida Sans Unicode',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Open Sans',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
								</select>
							</div>
						</label>
					</div>
					<div className="asnp-w-[20rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
						{ __(
							'Font Weight',
							'easy-sale-badges-for-woocommerce'
						) }
					</div>
					<div className="asnp-flex asnp-mt-4 asnp-w-full">
						<label>
							<span className="asnp-field-title">
								{ __(
									'Font Weight Top Message',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div>
								<select className="asnp-select-field xl:!asnp-w-48 asnp-mt-2">
									<option>
										{ __(
											'400',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'500',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'600',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'700',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'800',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Normal',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Bold',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Bolder',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Lighter',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
								</select>
							</div>
						</label>
						<label className="asnp-ml-10">
							<span className="asnp-field-title">
								{ __(
									'Font Weight Bottom Message',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div>
								<select className="asnp-select-field xl:!asnp-w-48 asnp-mt-2">
									<option>
										{ __(
											'400',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'500',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'600',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'700',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'800',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Normal',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Bold',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Bolder',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option>
										{ __(
											'Lighter',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
								</select>
							</div>
						</label>
					</div>
					<div className="asnp-w-[20rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
						{ __(
							'Extra Styles',
							'easy-sale-badges-for-woocommerce'
						) }
					</div>
					<div className="asnp-flex asnp-mt-4 asnp-w-full">
						<label>
							<span className="asnp-field-title">
								{ __(
									'Margin Top (Pixel)',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[6rem] xl:asnp-w-[8rem]">
								<input
									type="number"
									min="0"
									max="40"
									className="asnp-text-field"
									placeholder="0"
								/>
							</div>
						</label>
						<label>
							<span className="asnp-field-title asnp-ml-8">
								{ __(
									'Margin Bottom (Pixel)',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[6rem] xl:asnp-w-[8rem] asnp-ml-8">
								<input
									type="number"
									min="0"
									max="40"
									className="asnp-text-field"
									placeholder="0"
								/>
							</div>
						</label>
						<label>
							<span className="asnp-field-title asnp-ml-8">
								{ __(
									'Border Radius (Pixel)',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[6rem] xl:asnp-w-[8rem] asnp-ml-8">
								<input
									type="number"
									className="asnp-text-field"
									placeholder="0"
									min="0"
								/>
							</div>
						</label>
					</div>
					<div className="asnp-flex asnp-mt-6 asnp-w-full">
						<label>
							<span className="asnp-field-title">
								{ __(
									'Width Size For Desktop (Percentage)',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div>
								<input
									type="number"
									min="0"
									max="100"
									className="asnp-text-field"
									placeholder="0"
								/>
							</div>
						</label>
					</div>
					<div className="asnp-flex asnp-mt-6 asnp-w-full">
						<label>
							<span className="asnp-field-title">
								{ __(
									'Width Size For Mobile (Percentage)',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div>
								<input
									type="number"
									min="0"
									max="100"
									className="asnp-text-field"
									placeholder="0"
								/>
							</div>
						</label>
					</div>
				</div>
			) }
			{ activeMenuEmbeds === 'embedColors' && (
				<div className="asnp-p-4 asnp-h-auto">
					<div className="asnp-text-lg asnp-font-semibold">
						{ __( 'Colors', 'easy-sale-badges-for-woocommerce' ) }
					</div>
					<div className="asnp-mt-4 asnp-grid asnp-gap-4 md:asnp-grid-cols-1 lg:asnp-grid-cols-1 xl:asnp-grid-cols-1 2xl:asnp-grid-cols-3">
						<div className="asnp-flex">
							<div className="asnp-w-[18rem]">
								<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
									<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600">
										<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
											<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
												{ __(
													'Background Color',
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<div className="asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2"></div>
										</div>
									</div>
								</label>
							</div>
						</div>
						<div className="asnp-flex">
							<div className="asnp-w-[18rem] asnp-ml-4">
								<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
									<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600">
										<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
											<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
												{ __(
													'Top Message Color',
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<div className="asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2"></div>
										</div>
									</div>
								</label>
							</div>
						</div>
						<div className="asnp-w-[18rem] asnp-ml-4">
							<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
								<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600">
									<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
										<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
											{ __(
												'Bottom Message Color',
												'easy-sale-badges-for-woocommerce'
											) }
										</span>
										<div className="asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2"></div>
									</div>
								</div>
							</label>
						</div>
						<div className="asnp-w-[18rem]">
							<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
								<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600">
									<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
										<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
											{ __(
												'Timer Text Color',
												'easy-sale-badges-for-woocommerce'
											) }
										</span>
										<div className="asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2"></div>
									</div>
								</div>
							</label>
						</div>
						<div className="asnp-w-[18rem] asnp-ml-4">
							<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
								<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600">
									<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
										<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
											{ __(
												'Button Color',
												'easy-sale-badges-for-woocommerce'
											) }
										</span>
										<div className="asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2"></div>
									</div>
								</div>
							</label>
						</div>
						<div className="asnp-w-[18rem] asnp-ml-4">
							<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
								<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600">
									<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
										<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
											{ __(
												'Button Text Color',
												'easy-sale-badges-for-woocommerce'
											) }
										</span>
										<div className="asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2"></div>
									</div>
								</div>
							</label>
						</div>
					</div>
					<div className="asnp-mt-4 asnp-flex">
						<div className="asnp-w-[18rem]">
							<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
								<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600">
									<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
										<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
											{ __(
												'Coupon Border Color',
												'easy-sale-badges-for-woocommerce'
											) }
										</span>
										<div className="asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2"></div>
									</div>
								</div>
							</label>
						</div>
					</div>
				</div>
			) }
			{ activeMenuEmbeds === 'embedSchedule' && (
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
			{ activeMenuEmbeds === 'embedTargeting' && (
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
									</select>
								</div>
							</div>
						</div>
						<div className="asnp-mt-8 asnp-border-t-2 asnp-border-solid asnp-border-gray-400 asnp-w-full"></div>
						<div className="asnp-mt-6">
							<div className="asnp-w-[25rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
								{ __(
									'Conditions',
									'easy-sale-badges-for-woocommerce'
								) }
							</div>
							<div className="asnp-w-full asnp-mt-2 asnp-mb-4">
								<select
									className="asnp-select-field !asnp-w-48 asnp-mt-2"
									defaultValue="Is logged in"
								>
									<optgroup
										label={ __(
											'Customer',
											'easy-sale-badges-for-woocommerce'
										) }
									>
										<option disabled>
											{ __(
												'Is logged in',
												'easy-sale-badges-for-woocommerce'
											) }
										</option>
										<option disabled>
											{ __(
												'User role',
												'easy-sale-badges-for-woocommerce'
											) }
										</option>
									</optgroup>
									<optgroup
										label={ __(
											'Customer value',
											'easy-sale-badges-for-woocommerce'
										) }
									>
										<option disabled>
											{ __(
												'Money spent',
												'easy-sale-badges-for-woocommerce'
											) }
										</option>
									</optgroup>
								</select>
							</div>
						</div>
					</div>
				</div>
			) }
		</div>
	);
};

export default EmbedForm;
