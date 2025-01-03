import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import Tippy from '@tippyjs/react';
import ColorPicker from 'react-best-gradient-color-picker';
import { customColor } from '../../../../utils/constants';

const StyleOptions = ( props ) => {
	const [ disableHeight, setDisableHeight ] = useState( false );
	const [ disableWidth, setDisabeWidth ] = useState( false );
	const [ disableR, setDisableR ] = useState( false );
	const [ disableL, setDisableL ] = useState( false );
	const [ showBorder, setShowBorder ] = useState( false );
	const [ disableLineHeight, setDisableLineHeight ] = useState( false );

	useEffect( () => {
		if (
			props.badgeStyles == 'badge7' ||
			props.badgeStyles == 'badge8' ||
			props.badgeStyles == 'badge9' ||
			props.badgeStyles == 'badge10' ||
			props.badgeStyles == 'badge11' ||
			props.badgeStyles == 'badge12'
		) {
			setDisableLineHeight( true );
		} else {
			setDisableLineHeight( false );
		}
	}, [ props.badgeStyles ] );

	useEffect( () => {
		if (
			props.badgeStyles == 'badge2' ||
			props.badgeStyles == 'badge3' ||
			props.badgeStyles == 'badge4' ||
			props.badgeStyles == 'badge5' ||
			props.badgeStyles == 'badge6' ||
			props.badgeStyles == 'badge7' ||
			props.badgeStyles == 'badge8' ||
			props.badgeStyles == 'badge9' ||
			props.badgeStyles == 'badge10' ||
			props.badgeStyles == 'badge12'
		) {
			setDisableHeight( true );
		} else {
			setDisableHeight( false );
		}

		if (
			props.badgePositionX == 'left' &&
			( props.badgeStyles == 'badge2' ||
				props.badgeStyles == 'badge3' ||
				props.badgeStyles == 'badge4' )
		) {
			setDisableR( true );
			setDisableL( false );
		} else if (
			props.badgePositionX == 'right' &&
			( props.badgeStyles == 'badge2' ||
				props.badgeStyles == 'badge3' ||
				props.badgeStyles == 'badge4' )
		) {
			setDisableR( false );
			setDisableL( true );
		} else if (
			props.badgeStyles == 'badge5' ||
			props.badgeStyles == 'badge6' ||
			props.badgeStyles == 'badge8' ||
			props.badgeStyles == 'badge9' ||
			props.badgeStyles == 'badge10' ||
			props.badgeStyles == 'badge11' ||
			props.badgeStyles == 'badge12' ||
			props.badgeStyles == 'badge13' ||
			props.badgeStyles == 'badge14' ||
			props.badgeStyles == 'badge15' ||
			props.badgeStyles == 'badge16' ||
			props.badgeStyles == 'badge17' ||
			props.badgeStyles == 'badge18' ||
			props.badgeStyles == 'badge19'
		) {
			setDisableR( true );
			setDisableL( true );
		} else if (
			props.badgeStyles == 'badge1' ||
			props.badgeStyles == 'badge7' ||
			props.badgeStyles == 'badge20'
		) {
			setDisableR( false );
			setDisableL( false );
		}

		if ( props.badgeStyles == 'badge11' ) {
			setDisabeWidth( true );
		} else if ( props.badgeStyles == 'badge13' ) {
			setDisabeWidth( true );
		} else {
			setDisabeWidth( false );
		}
	}, [ props.badgeStyles, props.badgePositionX ] );

	useEffect( () => {
		if (
			props.badgeStyles == 'badge14' ||
			props.badgeStyles == 'badge15' ||
			props.badgeStyles == 'badge16' ||
			props.badgeStyles == 'badge17' ||
			props.badgeStyles == 'badge18'
		) {
			setShowBorder( true );
		} else {
			setShowBorder( false );
		}
	}, [ props.badgeStyles ] );

	return (
		<div className="asnp-ew-line">
			<div className="asnp-w-[25rem]">
				<div className="asnp-mt-[1rem]">
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div className="asnp-p-4">
								<ColorPicker
									value={ props.badgeColor }
									onChange={ ( color ) => {
										props.onChange( 'badgeColor', color );
									} }
									hideColorTypeBtns={ true }
									presets={ customColor }
								/>
							</div>
						}
					>
						<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
							<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className="asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Label Color',
											'easy-sale-badges-for-woocommerce'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ props.badgeColor }`,
										} }
										className={
											'asnp-flex asnp-w-7 asnp-h-6 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
				</div>
				{ showBorder === true && (
					<div className="asnp-mt-[1rem]">
						<Tippy
							trigger="click"
							interactive={ true }
							placement={ 'bottom' }
							content={
								<div className="asnp-p-4">
									<ColorPicker
										value={ props.borderColor }
										onChange={ ( color ) => {
											props.onChange(
												'borderColor',
												color
											);
										} }
										hideColorTypeBtns={ true }
										presets={ customColor }
									/>
								</div>
							}
						>
							<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
								<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
									<div className="asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
										<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
											{ __(
												'Border Color',
												'easy-sale-badges-for-woocommerce'
											) }
										</span>
										<div
											style={ {
												backgroundColor: `${ props.borderColor }`,
											} }
											className={
												'asnp-flex asnp-w-7 asnp-h-6 asnp-rounded-full asnp-my-2 '
											}
										></div>
									</div>
								</div>
							</label>
						</Tippy>
					</div>
				) }
				<div className="asnp-w-[25rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
					{ __(
						'Archive Page Styles',
						'easy-sale-badges-for-woocommerce'
					) }
				</div>
				<div className="asnp-flex asnp-mt-[2rem] asnp-w-full">
					<label>
						<span className="asnp-field-title">
							{ __(
								'Font Size (Pixel)',
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
								value={ props.fontSizeText }
								onChange={ ( e ) =>
									props.onChange(
										'fontSizeText',
										e.target.value
									)
								}
							/>
						</div>
					</label>
					<label className="asnp-ml-10">
						<span className="asnp-field-title">
							{ __(
								'Line Height (Pixel)',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div>
							<input
								disabled={ disableLineHeight }
								type="number"
								className={
									disableLineHeight
										? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
										: 'asnp-text-field'
								}
								min="0"
								max="100"
								placeholder="0"
								value={ props.lineHeightText }
								onChange={ ( e ) =>
									props.onChange(
										'lineHeightText',
										e.target.value
									)
								}
							/>
						</div>
					</label>
					<label className="asnp-ml-10">
						<span className="asnp-field-title">
							{ __(
								'Font Weight',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div>
							<select
								className="asnp-select-field asnp-mt-1"
								value={ props.fontWeightLabel }
								onChange={ ( e ) =>
									props.onChange(
										'fontWeightLabel',
										e.target.value
									)
								}
							>
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
						</div>
					</label>
				</div>
				<div className="asnp-flex asnp-mt-[2rem]">
					<label>
						<span className="asnp-field-title">
							{ __(
								'Width (Pixel)',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="asnp-w-[11rem]">
							<input
								disabled={ disableWidth }
								type="number"
								min="0"
								max="400"
								className={
									disableWidth
										? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
										: 'asnp-text-field'
								}
								placeholder="0"
								value={ props.widthBadge }
								onChange={ ( e ) =>
									props.onChange(
										'widthBadge',
										e.target.value
									)
								}
							/>
						</div>
					</label>
					<label>
						<span className="asnp-field-title asnp-ml-4">
							{ __(
								'Height (Pixel)',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="asnp-w-[11rem] asnp-ml-4">
							<input
								disabled={ disableHeight }
								type="number"
								min="0"
								max="400"
								className={
									disableHeight
										? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
										: 'asnp-text-field'
								}
								placeholder="0"
								value={ props.heightBadge }
								onChange={ ( e ) =>
									props.onChange(
										'heightBadge',
										e.target.value
									)
								}
							/>
						</div>
					</label>
					{ ( props.badgeStyles === 'badge19' ||
						props.badgeStyles === 'badge20' ||
						showBorder === true ) && (
						<label>
							<span className="asnp-field-title asnp-ml-4">
								{ __(
									'Border Width',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-[7rem] asnp-ml-4">
								<input
									type="number"
									min="0"
									max="400"
									className="asnp-text-field"
									placeholder="0"
									value={ props.borderWidth }
									onChange={ ( e ) =>
										props.onChange(
											'borderWidth',
											e.target.value
										)
									}
								/>
							</div>
						</label>
					) }
				</div>
				<div className="asnp-w-[25rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
					{ __(
						'Product Page Styles',
						'easy-sale-badges-for-woocommerce'
					) }
				</div>
				<div className="asnp-flex asnp-mt-[2rem] asnp-w-full">
					<label>
						<span className="asnp-field-title">
							{ __(
								'Font Size (Pixel)',
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
								value={ props?.singleFontSizeText }
								onChange={ ( e ) =>
									props.onChange(
										'singleFontSizeText',
										e.target.value
									)
								}
							/>
						</div>
					</label>
					<label className="asnp-ml-10">
						<span className="asnp-field-title">
							{ __(
								'Line Height (Pixel)',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div>
							<input
								disabled={ disableLineHeight }
								type="number"
								className={
									disableLineHeight
										? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
										: 'asnp-text-field'
								}
								min="0"
								max="100"
								placeholder="0"
								value={ props?.singleLineHeightText }
								onChange={ ( e ) =>
									props.onChange(
										'singleLineHeightText',
										e.target.value
									)
								}
							/>
						</div>
					</label>
					<label className="asnp-ml-10">
						<span className="asnp-field-title">
							{ __(
								'Font Weight',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div>
							<select
								className="asnp-select-field asnp-mt-1"
								value={ props?.singleFontWeightLabel }
								onChange={ ( e ) =>
									props.onChange(
										'singleFontWeightLabel',
										e.target.value
									)
								}
							>
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
						</div>
					</label>
				</div>
				<div className="asnp-flex asnp-mt-[2rem]">
					<label>
						<span className="asnp-field-title">
							{ __(
								'Width (Pixel)',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="asnp-w-[11rem]">
							<input
								disabled={ disableWidth }
								type="number"
								min="0"
								max="400"
								className={
									disableWidth
										? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
										: 'asnp-text-field'
								}
								placeholder="0"
								value={ props?.singleWidthBadge }
								onChange={ ( e ) =>
									props.onChange(
										'singleWidthBadge',
										e.target.value
									)
								}
							/>
						</div>
					</label>
					<label>
						<span className="asnp-field-title asnp-ml-4">
							{ __(
								'Height (Pixel)',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="asnp-w-[11rem] asnp-ml-4">
							<input
								disabled={ disableHeight }
								type="number"
								min="0"
								max="400"
								className={
									disableHeight
										? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
										: 'asnp-text-field'
								}
								placeholder="0"
								value={ props?.singleHeightBadge }
								onChange={ ( e ) =>
									props.onChange(
										'singleHeightBadge',
										e.target.value
									)
								}
							/>
						</div>
					</label>
				</div>
				<div className="asnp-w-[25rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
					{ __(
						'Border Radius (Pixel)',
						'easy-sale-badges-for-woocommerce'
					) }
				</div>
				<div className="asnp-flex asnp-mt-2">
					<label>
						<span className="asnp-field-title asnp-ml-4">
							{ __(
								'Top Left',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="asnp-w-[6rem] xl:asnp-w-[8rem] asnp-ml-4">
							<input
								disabled={ disableL }
								type="number"
								className={
									disableL
										? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
										: 'asnp-text-field'
								}
								placeholder="0"
								min="0"
								value={ props.topLeftRadius }
								onChange={ ( e ) =>
									props.onChange(
										'topLeftRadius',
										e.target.value
									)
								}
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
								disabled={ disableR }
								type="number"
								className={
									disableR
										? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
										: 'asnp-text-field'
								}
								placeholder="0"
								min="0"
								value={ props.topRightRadius }
								onChange={ ( e ) =>
									props.onChange(
										'topRightRadius',
										e.target.value
									)
								}
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
								disabled={ disableL }
								type="number"
								className={
									disableL
										? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
										: 'asnp-text-field'
								}
								placeholder="0"
								min="0"
								value={ props.bottomLeftRadius }
								onChange={ ( e ) =>
									props.onChange(
										'bottomLeftRadius',
										e.target.value
									)
								}
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
								disabled={ disableR }
								type="number"
								className={
									disableR
										? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
										: 'asnp-text-field'
								}
								placeholder="0"
								min="0"
								value={ props.bottomRightRadius }
								onChange={ ( e ) =>
									props.onChange(
										'bottomRightRadius',
										e.target.value
									)
								}
							/>
						</div>
					</label>
				</div>
				<div className="asnp-w-[25rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
					{ __( 'Extra Styles', 'easy-sale-badges-for-woocommerce' ) }
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
								value={ props.zIndex }
								onChange={ ( e ) =>
									props.onChange( 'zIndex', e.target.value )
								}
							/>
						</div>
					</label>
				</div>
			</div>
		</div>
	);
};

export default StyleOptions;
