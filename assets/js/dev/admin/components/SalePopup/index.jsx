import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../utils/constants';
import SalesPopupForm from './SalesPopupForm';
import Toggle from '../Toggle';
import { LockClosedIcon } from '@heroicons/react/solid';

import './style.scss';

const SalePopup = () => {
	const [ activeMenuPopup, setActiveMenuPopup ] = useState( 'content' );

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
								'Sales Popup',
								'easy-sale-badges-for-woocommerce'
							) }
						</h1>
						<button
							className="asnp-btn asnp-btn-primary asnp-w-[86.68px] asnp-h-[35.5px]"
							type="button"
						>
							{ __( 'Save', 'easy-sale-badges-for-woocommerce' ) }
						</button>
						<button className="asnp-py-2 asnp-px-6 asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none asnp-btn-secondary asnp-w-[86.68px] asnp-h-[35.5px]">
							{ __(
								'Cancel',
								'easy-sale-badges-for-woocommerce'
							) }
						</button>
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
					<div className="asnp-w-full">
						<div className="asnp-w-full asnp-text-lg asnp-font-semibold">
							{ __(
								'Templates',
								'easy-sale-badges-for-woocommerce'
							) }
						</div>
						<div className="asnp-relative asnp-w-full asnp-bg-white asnp-mb-3 asnp-mt-1 asnp-border-2 asnp-rounded-md asnp-p-4">
							<div className="asnp-flex asnp-flex-wrap">
								<div className="asnp-border-gray-400 asnp-p-3 asnp-esb-salespopupTemplate hover:asnp-border-indigo-700">
									<img
										src={ IMAGES_URL + 'salepop1.png' }
										className="asnp-h-full asnp-w-full asnp-border-none"
									/>
								</div>
								<div className="asnp-border-gray-400 asnp-p-3 asnp-esb-salespopupTemplate hover:asnp-border-indigo-700">
									<img
										src={ IMAGES_URL + 'salepop2.png' }
										className="asnp-h-full asnp-w-full asnp-border-none"
									/>
								</div>
								<div className="asnp-border-gray-400 asnp-p-3 asnp-esb-salespopupTemplate hover:asnp-border-indigo-700">
									<img
										src={ IMAGES_URL + 'salepop3.png' }
										className="asnp-h-full asnp-w-full asnp-border-none"
									/>
								</div>
								<div className="asnp-border-gray-400 asnp-p-3 asnp-esb-salespopupTemplate hover:asnp-border-indigo-700">
									<img
										src={ IMAGES_URL + 'salepop4.png' }
										className="asnp-h-full asnp-w-full asnp-border-none"
									/>
								</div>

								<div className="asnp-border-gray-400 asnp-p-3 asnp-esb-salespopupTemplate hover:asnp-border-indigo-700">
									<img
										src={ IMAGES_URL + 'salepop5.png' }
										className="asnp-h-full asnp-w-full asnp-border-none"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="asnp-relative asnp-h-full asnp-w-full asnp-my-4 asnp-flex">
					<div className="asnp-relative asnp-flex asnp-w-[65%] asnp-bg-white">
						<div className="asnp-p-4">
							<nav className="asnp-flex asnp-flex-row asnp-flex-wrap">
								<a
									href="#"
									onClick={ ( e ) => {
										e.preventDefault();
										setActiveMenuPopup( 'content' );
									} }
									className={
										( 'content' === activeMenuPopup
											? ' asnp-nav-tab-active'
											: '' ) + ' asnp-nav-tab-item'
									}
								>
									{ __(
										'Content',
										'easy-sale-badges-for-woocommerce'
									) }
								</a>
								<a
									href="#"
									onClick={ ( e ) => {
										e.preventDefault();
										setActiveMenuPopup( 'general' );
									} }
									className={
										( 'general' === activeMenuPopup
											? ' asnp-nav-tab-active'
											: '' ) + ' asnp-nav-tab-item'
									}
								>
									{ __(
										'General',
										'easy-sale-badges-for-woocommerce'
									) }
								</a>
								<a
									href="#"
									onClick={ ( e ) => {
										e.preventDefault();
										setActiveMenuPopup( 'colors' );
									} }
									className={
										( 'colors' === activeMenuPopup
											? ' asnp-nav-tab-active'
											: '' ) + ' asnp-nav-tab-item'
									}
								>
									{ __(
										'Colors',
										'easy-sale-badges-for-woocommerce'
									) }
								</a>
								<a
									href="#"
									onClick={ ( e ) => {
										e.preventDefault();
										setActiveMenuPopup( 'theme' );
									} }
									className={
										( 'theme' === activeMenuPopup
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
										setActiveMenuPopup( 'schedule' );
									} }
									className={
										( 'schedule' === activeMenuPopup
											? ' asnp-nav-tab-active'
											: '' ) + ' asnp-nav-tab-item'
									}
								>
									{ __(
										'Schedule',
										'easy-sale-badges-for-woocommerce'
									) }
								</a>
								<a
									href="#"
									onClick={ ( e ) => {
										e.preventDefault();
										setActiveMenuPopup( 'targeting' );
									} }
									className={
										( 'targeting' === activeMenuPopup
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
							{ activeMenuPopup === 'content' && (
								<div className="asnp-p-4">
									<div className="asnp-mt-4 asnp-flex">
										<label>
											<span className="asnp-field-title asnp-text-lg asnp-font-semibold">
												{ __(
													'Top Message',
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<textarea
												type="text"
												className="asnp-block asnp-text-field !asnp-w-[25rem]"
												placeholder="Top Message"
											/>
										</label>
									</div>
									<div className="asnp-block asnp-space-y-1 asnp-mt-1">
										<p
											className="asnp-text-sm asnp-text-gray-600"
											dangerouslySetInnerHTML={ {
												__html: __(
													'Use the following placeholders to display dynamic values.',
													'easy-sale-badges-for-woocommerce'
												),
											} }
										></p>
										<p className="asnp-text-sm asnp-text-gray-600">
											{ __(
												'Placeholders:',
												'easy-sale-badges-for-woocommerce'
											) + ' ' }
											<strong className="asnp-text-[#483d8b]">
												{
													'{name} {first_name} {last_name} {city}'
												}
											</strong>
										</p>
									</div>
									<div className="asnp-mt-8 asnp-flex">
										<label>
											<span className="asnp-field-title asnp-text-lg asnp-font-semibold">
												{ __(
													'Content Message',
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<textarea
												type="text"
												className="asnp-block asnp-text-field !asnp-w-[25rem]"
												placeholder="Content Message"
											/>
										</label>
									</div>
									<div className="asnp-block asnp-space-y-1 asnp-mt-1">
										<p
											className="asnp-text-sm asnp-text-gray-600"
											dangerouslySetInnerHTML={ {
												__html: __(
													'Use the following placeholders to display dynamic values.',
													'easy-sale-badges-for-woocommerce'
												),
											} }
										></p>
										<p className="asnp-text-sm asnp-text-gray-600">
											{ __(
												'Placeholders:',
												'easy-sale-badges-for-woocommerce'
											) + ' ' }
											<strong className="asnp-text-[#483d8b]">
												{
													'{product_title} {product_title_raw}'
												}
											</strong>
										</p>
									</div>
									<div className="asnp-mt-8 asnp-flex">
										<label>
											<span className="asnp-field-title asnp-text-lg asnp-font-semibold">
												{ __(
													'Time',
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<textarea
												type="text"
												className="asnp-block asnp-text-field !asnp-w-[25rem]"
												placeholder="Time"
											/>
										</label>
									</div>
									<div className="asnp-block asnp-space-y-1 asnp-mt-1">
										<p
											className="asnp-text-sm asnp-text-gray-600"
											dangerouslySetInnerHTML={ {
												__html: __(
													'Use the following placeholders to display dynamic values.',
													'easy-sale-badges-for-woocommerce'
												),
											} }
										></p>
										<p className="asnp-text-sm asnp-text-gray-600">
											{ __(
												'Placeholders:',
												'easy-sale-badges-for-woocommerce'
											) + ' ' }
											<strong className="asnp-text-[#483d8b]">
												{ '{time}' }
											</strong>
										</p>
									</div>
								</div>
							) }
							{ activeMenuPopup === 'general' && (
								<SalesPopupForm />
							) }
							{ activeMenuPopup === 'theme' && (
								<div className="asnp-p-4">
									<div className="asnp-text-lg asnp-font-semibold">
										{ __(
											'Image',
											'easy-sale-badges-for-woocommerce'
										) }
									</div>
									<div className="xl:asnp-w-[10rem]">
										<select className="asnp-select-field xl:!asnp-w-48 asnp-mt-2 !asnp-h-[2.4rem]">
											<option value="productImage">
												{ __(
													'Product Image',
													'easy-sale-badges-for-woocommerce'
												) }
											</option>
											<option value="avatar">
												{ __(
													'Library',
													'easy-sale-badges-for-woocommerce'
												) }
											</option>
										</select>
									</div>
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
														'linear-gradient(90deg, rgb(255, 255, 255) 37%, rgb(250, 23, 49) 100%)',
												} }
											></div>
											<div
												className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
												style={ {
													background:
														'linear-gradient(90deg, rgb(255, 255, 255) 37%, rgb(33, 197, 153) 100%)',
												} }
											></div>
											<div
												className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
												style={ {
													background:
														'linear-gradient(90deg, rgb(255, 255, 255) 37%, rgb(100, 92, 187) 100%)',
												} }
											></div>
											<div
												className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
												style={ {
													background:
														'linear-gradient(90deg, rgb(255, 255, 255) 37%, rgb(100, 187, 92) 100%)',
												} }
											></div>
											<div className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"></div>
											<div
												className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
												style={ {
													background:
														'linear-gradient(90deg, rgb(255, 255, 255) 37%, rgb(251, 114, 17) 100%)',
												} }
											></div>
											<div
												className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
												style={ {
													background:
														'linear-gradient(90deg, rgb(255, 255, 255) 37%, rgb(23, 19, 174) 100%)',
												} }
											></div>
											<div
												className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
												style={ {
													background:
														'linear-gradient(90deg, rgb(255, 255, 255) 37%, rgb(255, 135, 135) 100%)',
												} }
											></div>
											<div
												className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
												style={ {
													background:
														'linear-gradient(90deg, rgb(255, 255, 255) 37%, rgb(188, 226, 158) 100%)',
												} }
											></div>
											<div
												className="asnp-border-gray-400 asnp-p-5 asnp-pallettePopCont hover:asnp-border-indigo-700"
												style={ {
													background:
														'linear-gradient(90deg, rgb(255, 255, 255) 37%, rgb(231, 220, 26) 100%)',
												} }
											></div>
										</div>
									</div>
									<div className="asnp-mt-6 asnp-text-lg asnp-font-semibold">
										{ __(
											'Themes',
											'easy-sale-badges-for-woocommerce'
										) }
									</div>
									<div className="asnp-relative asnp-w-[38rem] asnp-mb-3 asnp-mt-3 asnp-h-[10rem] asnp-flex asnp-flex-col  asnp-border-gray-300 asnp-border-[1px] asnp-rounded-2xl asnp-pr-1">
										<div className="asnp-w-[38rem]  asnp-ml-8 asnp-mt-8 asnp-mb-2 asnp-text-red-700 asnp-flex asnp-justify-center asnp-font-medium asnp-text-base">
											<a
												target="_blank"
												href="https://www.asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/"
											>
												<button className="asnp-btn asnp-btn-primary">
													{ __(
														'+15 Theme on Pro Version',
														'easy-sale-badges-for-woocommerce'
													) }
												</button>
											</a>
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
													'Font Size Content Message (Pixel)',
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
													'Font Weight Content Message',
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
											'Border Radius (Pixel)',
											'easy-sale-badges-for-woocommerce'
										) }
									</div>

									<div className="asnp-flex asnp-mt-4">
										<label>
											<span className="asnp-field-title">
												{ __(
													'Top Left',
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<div className="asnp-w-[6rem] xl:asnp-w-[8rem]">
												<input
													type="number"
													className="asnp-text-field"
													placeholder="0"
													min="0"
												/>
											</div>
										</label>
										<label>
											<span className="asnp-field-title asnp-ml-8 xl:asnp-ml-4">
												{ __(
													'Top Right',
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<div className="asnp-w-[6rem] xl:asnp-w-[8rem] asnp-ml-8 xl:asnp-ml-4">
												<input
													type="number"
													className="asnp-text-field"
													placeholder="0"
													min="0"
												/>
											</div>
										</label>
										<label>
											<span className="asnp-field-title asnp-ml-8 xl:asnp-ml-4">
												{ __(
													'Bottom Left',
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<div className="asnp-w-[6rem] xl:asnp-w-[8rem] asnp-ml-8 xl:asnp-ml-4">
												<input
													type="number"
													className="asnp-text-field"
													placeholder="0"
													min="0"
												/>
											</div>
										</label>
										<label>
											<span className="asnp-field-title asnp-ml-8 xl:asnp-ml-4">
												{ __(
													'Bottom Right',
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<div className="asnp-w-[6rem] xl:asnp-w-[8rem] asnp-ml-8 xl:asnp-ml-4">
												<input
													type="number"
													className="asnp-text-field"
													placeholder="0"
													min="0"
												/>
											</div>
										</label>
									</div>

									<div>
										<div className="asnp-mt-6 asnp-text-lg asnp-font-semibold">
											{ __(
												'Animation Effects',
												'easy-sale-badges-for-woocommerce'
											) }
										</div>
										<div className="asnp-flex asnp-mt-4 asnp-w-full">
											<label>
												<span className="asnp-field-title">
													{ __(
														'Animation',
														'easy-sale-badges-for-woocommerce'
													) }
												</span>
												<div className="xl:asnp-w-[10rem]">
													<select className="asnp-select-field xl:!asnp-w-48 asnp-mt-2 !asnp-h-[2.4rem]">
														<option value="none">
															{ __(
																'None',
																'easy-sale-badges-for-woocommerce'
															) }
														</option>
														<option value="fade">
															{ __(
																'Fade',
																'easy-sale-badges-for-woocommerce'
															) }
														</option>
														<option value="slide-right">
															{ __(
																'Slide Right',
																'easy-sale-badges-for-woocommerce'
															) }
														</option>
														<option value="slide-left">
															{ __(
																'Slide Left',
																'easy-sale-badges-for-woocommerce'
															) }
														</option>
														<option value="slide-bottom">
															{ __(
																'Slide Bottom',
																'easy-sale-badges-for-woocommerce'
															) }
														</option>
													</select>
												</div>
											</label>
										</div>
									</div>
								</div>
							) }
							{ activeMenuPopup === 'colors' && (
								<div className="asnp-p-4 asnp-h-auto">
									<div className="asnp-text-lg asnp-font-semibold">
										{ __(
											'Colors',
											'easy-sale-badges-for-woocommerce'
										) }
									</div>
									<div className="asnp-mt-4 asnp-grid asnp-gap-4 md:asnp-grid-cols-1 lg:asnp-grid-cols-1 xl:asnp-grid-cols-1 2xl:asnp-grid-cols-3">
										<div className="asnp-flex">
											<div className="asnp-w-[18rem]">
												<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
													<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600">
														<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
															<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
																{ __(
																	'Title Color',
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
																	'Product Text Color',
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
																'Close Color',
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
																'Background Color',
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
																'Time Text Color',
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
									</div>
									<div className="asnp-mt-4 asnp-flex">
										<div className="asnp-w-[18rem]">
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
								</div>
							) }
							{ activeMenuPopup === 'schedule' && (
								<div className="asnp-p-4">
									<div className="asnp-w-[20rem] asnp-text-lg asnp-font-semibold">
										{ __(
											'Schedule',
											'easy-sale-badges-for-woocommerce'
										) }
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
							{ activeMenuPopup === 'targeting' && (
								<div className="asnp-p-4">
									<div className="asnp-w-[20rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
										{ __(
											'Devices',
											'easy-sale-badges-for-woocommerce'
										) }
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
																	'Cart page',
																	'easy-sale-badges-for-woocommerce'
																) }
															</option>
															<option>
																{ __(
																	'Checkout page',
																	'easy-sale-badges-for-woocommerce'
																) }
															</option>
															<option>
																{ __(
																	'Shop page',
																	'easy-sale-badges-for-woocommerce'
																) }
															</option>
															<option>
																{ __(
																	'Product page',
																	'easy-sale-badges-for-woocommerce'
																) }
															</option>
															<option>
																{ __(
																	'Product category page',
																	'easy-sale-badges-for-woocommerce'
																) }
															</option>
															<option>
																{ __(
																	'Home page',
																	'easy-sale-badges-for-woocommerce'
																) }
															</option>
															<option>
																{ __(
																	'Front page',
																	'easy-sale-badges-for-woocommerce'
																) }
															</option>
														</optgroup>
														<optgroup
															label={ __(
																'Posts',
																'easy-sale-badges-for-woocommerce'
															) }
														>
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
													defaultValue="Is logged in (Pro)"
												>
													<optgroup
														label={ __(
															'Customer',
															'easy-sale-badges-for-woocommerce'
														) }
													>
														<option disabled>
															{ __(
																'Is logged in (Pro)',
																'easy-sale-badges-for-woocommerce'
															) }
														</option>
														<option disabled>
															{ __(
																'User role (Pro)',
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
																'Money spent (Pro)',
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
					</div>
					<div className="asnp-w-[30%] asnp-flex">
						<div className="asnp-esb-salesPopupCont">
							<div className="asnp-esb-salesPopupPr">
								<label className="asnp-esb-salesPopupPreLa">
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

export default SalePopup;
