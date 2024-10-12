import React, { useState, useEffect } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import Tippy from '@tippyjs/react';
import ColorPicker from 'react-best-gradient-color-picker';
import { IMAGES_URL, customColor } from '../../../../utils/constants';
import LabelTranslation from '../../../LabelTranslation';

const TextOptions = ( props ) => {
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

	return (
		<div className="asnp-ew-line">
			<div className="asnp-mt-6 asnp-flex">
				<div className="md:asnp-w-[15rem] lg:asnp-w-[20rem] xl:asnp-w-[25rem]">
					<label>
						<span className="asnp-field-title">
							{ __(
								'Label',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<input
							type="text"
							className="asnp-text-field"
							placeholder="Label"
							value={ props.badgeLabel }
							onChange={ ( e ) =>
								props.onChange( 'badgeLabel', e.target.value )
							}
						/>
					</label>
					<div className="asnp-block asnp-space-y-1 asnp-mt-1 asnp-w-[30rem]">
						<p
							className="asnp-text-sm asnp-text-gray-400"
							dangerouslySetInnerHTML={ {
								__html: __(
									"Use the following placeholders to display dynamic values. For example:<br/><strong className='asnp-text-[#483d8b]'>'Sale {saved_percent}'</strong> will be rendered as <strong className='asnp-text-[#483d8b]'>'Sale 20%'</strong>",
									'easy-sale-badges-for-woocommerce'
								),
							} }
						></p>
						<p className="asnp-text-sm asnp-text-gray-400">
							{ __(
								'Placeholders:',
								'easy-sale-badges-for-woocommerce'
							) + ' ' }
							<strong className="asnp-text-[#483d8b]">
								{
									'{price} {regular_price} {sale_price} {saved_percent} {saved_price} {sale_ends} {qty} {currency} {sku} {br}'
								}
							</strong>
						</p>
					</div>
				</div>
				<button
					className="asnp-ml-6 asnp-mt-7 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[6rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
					onClick={ () => props.setShow( true ) }
				>
					{ __( 'Translate', 'easy-sale-badges-for-woocommerce' ) }
				</button>
			</div>
			<label className="asnp-mt-8 asnp-flex">
				<input
					className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4 asnp-border asnp-border-gray-300 asnp-rounded-sm !asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
					type="checkbox"
					id="inlineCheckbox3"
					checked={ 1 == props.percentageDiscount }
					onChange={ ( e ) =>
						props.onChange(
							'percentageDiscount',
							e.target.checked ? 1 : 0
						)
					}
				/>
				<div className="asnp-flex asnp-font-semibold asnp-text-base asnp-cursor-pointer">
					{ __(
						'Percentage Discount amount',
						'easy-sale-badges-for-woocommerce'
					) }
					<div className="asnp-ml-1 asnp-cursor-pointer asnp-mt-[0.2rem]">
						<Tippy
							interactive={ true }
							placement={ 'top-start' }
							content={
								<div className="asnp-h-auto asnp-w-[15rem] asnp-rounded-lg asnp-p-[0.4rem] asnp-text-white asnp-rounded-bl-none asnp-ml-3">
									{ __(
										'Instead of displaying the label, showcase the percentage discount amount for products that are on sale.',
										'easy-sale-badges-for-woocommerce'
									) }
								</div>
							}
						>
							<img src={ IMAGES_URL + 'quest.svg' } />
						</Tippy>
					</div>
				</div>
			</label>
			<div className="asnp-mt-3 asnp-w-[25rem]">
				<Tippy
					trigger="click"
					interactive={ true }
					placement={ 'bottom' }
					content={
						<div className="asnp-p-4">
							<ColorPicker
								value={ props.textColor }
								onChange={ ( color ) => {
									props.onChange( 'textColor', color );
								} }
								hideColorTypeBtns={ true }
								presets={ customColor }
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
									style={ {
										backgroundColor: `${ props.textColor }`,
									} }
									className={
										'asnp-flex asnp-w-7 asnp-h-6 asnp-rounded-full asnp-my-2'
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
								props.onChange( 'fontSizeText', e.target.value )
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
			{ props.show === true && (
				<LabelTranslation
					show={ props.show }
					setShow={ props.setShow }
					labelTranslate={ props.labelTranslate }
				/>
			) }
		</div>
	);
};

export default TextOptions;
