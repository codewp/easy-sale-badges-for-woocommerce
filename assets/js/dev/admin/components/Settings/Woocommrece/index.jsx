import React from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from './../../Toggle';

const WooCommerce = ( props ) => {
	return (
		<div className="asnp-max-w-lg asnp-grid asnp-grid-cols-1 asnp-gap-8">
			<div>
				<div className="asnp-flex asnp-flex-row md:asnp-w-[27rem] asnp-w-[20rem] asnp-justify-between">
					<div className="asnp-field-title md:asnp-min-w-1/3">
						{ __(
							'Display the Default "WooCommerce / Theme Sale Badges"',
							'asnp-easy-sale-badge'
						) }
					</div>
					<div>
						<Toggle
							value={ 1 == props.showLabel }
							onChange={ ( value ) =>
								props.onChange( 'showLabel', value ? 1 : 0 )
							}
						/>
					</div>
				</div>
				<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
					<p className="asnp-text-xs asnp-text-gray-400">
						{ __( 'Enable/Disable', 'asnp-easy-sale-badge' ) }
					</p>
				</label>
			</div>
			<div>
				<label className="asnp-block asnp-space-y-2 asnp-max-w-lg">
					<div className="asnp-flex">
						<div className="asnp-field-title asnp-ml-1 md:asnp-min-w-1/3 ">
							{ __(
								'Sale Badge Position On Archive Page',
								'asnp-easy-sale-badge'
							) }
						</div>
					</div>
					<select
						className="asnp-block asnp-select-field md:asnp-w-2/3"
						value={ props.loopPosition }
						onChange={ ( e ) =>
							props.onChange( 'loopPosition', e.target.value )
						}
					>
						<option value="woocommerce_product_get_image">
							{ __(
								'Product get image',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="before_shop_loop_item_thumbnail">
							{ __(
								'Before product thumbnail',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="after_shop_loop_item_thumbnail">
							{ __(
								'After product thumbnail',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="before_shop_loop_item_title">
							{ __(
								'Before product title',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="after_shop_loop_item_title">
							{ __(
								'After product title',
								'asnp-easy-sale-badge'
							) }
						</option>

						<option value="before_shop_loop_item_rating">
							{ __(
								'Before product rating',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="after_shop_loop_item_rating">
							{ __(
								'After product rating',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="before_shop_loop_item_price">
							{ __(
								'Before product price',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="after_shop_loop_item_price">
							{ __(
								'After product price',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="after_shop_loop_item">
							{ __(
								'After shop loop item',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="shop_loop">
							{ __( 'Shop loop', 'asnp-easy-sale-badge' ) }
						</option>
						<option value="none">
							{ __( 'None', 'asnp-easy-sale-badge' ) }
						</option>
					</select>
				</label>
				<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
					<p className="asnp-text-xs asnp-text-gray-400">
						{ __(
							'Sale badge position for bulk, tiered, purchase, products group rules in the archive page.',
							'asnp-easy-sale-badge'
						) }
					</p>
				</label>
			</div>
			<div>
				<label className="asnp-block asnp-space-y-1">
					<div className="asnp-field-title asnp-ml-1">
						{ __(
							'Archive Loop Custom Hooks',
							'asnp-easy-sale-badge'
						) }
					</div>
					<input
						type="text"
						className="asnp-block asnp-text-field"
						value={ props.loopCustomHooks }
						onChange={ ( e ) =>
							props.onChange( 'loopCustomHooks', e.target.value )
						}
					/>
				</label>
				<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
					<p className="asnp-text-xs asnp-text-gray-400">
						{ __(
							'comma separated hooks.',
							'asnp-easy-sale-badge'
						) }
					</p>
				</label>
			</div>
			<div>
				<label className="asnp-block asnp-space-y-2 asnp-max-w-lg">
					<div className="asnp-flex">
						<div className="asnp-field-title asnp-ml-1 md:asnp-min-w-1/3 ">
							{ __(
								'Sale Badge Position On Product Page',
								'asnp-easy-sale-badge'
							) }
						</div>
					</div>
					<select
						className="asnp-block asnp-select-field md:asnp-w-2/3"
						value={ props.singlePosition }
						onChange={ ( e ) =>
							props.onChange( 'singlePosition', e.target.value )
						}
					>
						<option value="before_single_item_images">
							{ __(
								'Before product images',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="after_single_item_images">
							{ __(
								'After product images',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="before_single_item_title">
							{ __(
								'Before product title',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="after_single_item_title">
							{ __(
								'After product title',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="before_single_item_price">
							{ __(
								'Before product price',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="after_single_item_price">
							{ __(
								'After product price',
								'asnp-easy-sale-badge'
							) }
						</option>
						<option value="none">
							{ __( 'None', 'asnp-easy-sale-badge' ) }
						</option>
					</select>
				</label>
				<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
					<p className="asnp-text-xs asnp-text-gray-400">
						{ __(
							'Sale badge position for bulk, tiered, purchase, products group rules in the product page.',
							'asnp-easy-sale-badge'
						) }
					</p>
				</label>
			</div>
			<div>
				<label className="asnp-block asnp-space-y-1">
					<div className="asnp-field-title asnp-ml-1">
						{ __(
							'Single Product Custom Hooks',
							'asnp-easy-sale-badge'
						) }
					</div>
					<input
						type="text"
						className="asnp-block asnp-text-field"
						value={ props.singleCustomHooks }
						onChange={ ( e ) =>
							props.onChange(
								'singleCustomHooks',
								e.target.value
							)
						}
					/>
				</label>
				<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
					<p className="asnp-text-xs asnp-text-gray-400">
						{ __(
							'comma separated hooks.',
							'asnp-easy-sale-badge'
						) }
					</p>
				</label>
			</div>

			<div>
				<label className="asnp-block asnp-space-y-2 asnp-max-w-lg">
					<div className="asnp-flex">
						<div className="asnp-field-title asnp-ml-1 md:asnp-min-w-1/3 ">
							{ __(
								'Timer badge position',
								'asnp-easy-sale-badge'
							) }
						</div>
					</div>
					<select
						className="asnp-block asnp-select-field md:asnp-w-2/3 !asnp-h-12"
						value={ props.timerPosition }
						onChange={ ( e ) =>
							props.onChange( 'timerPosition', e.target.value )
						}
					>
						<option value="onImage">
							{ __( 'On image', 'asnp-easy-sale-badge' ) }
						</option>
						<option value="outOfImage">
							{ __( 'Out of image', 'asnp-easy-sale-badge' ) }
						</option>
					</select>
				</label>
			</div>

			<button
				className="asnp-btn asnp-btn-primary asnp-mb-2 asnp-w-[8rem]"
				type="button"
				onClick={ () => props.onSave() }
			>
				{ __( 'Save Changes', 'asnp-easy-sale-badge' ) }
			</button>
		</div>
	);
};

export default WooCommerce;
