import React from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from '../../Toggle';

const General = ( props ) => {
	return (
		<div className="asnp-max-w-lg asnp-grid asnp-grid-cols-1 asnp-gap-8">
			<div>
				<div className="asnp-flex asnp-flex-row md:asnp-w-[21rem] asnp-w-[20rem] asnp-justify-between">
					<div className="asnp-field-title md:asnp-min-w-1/3">
						{ __(
							'Hide WooCommerce On Sale Badges',
							'easy-sale-badges-for-woocommerce'
						) }
					</div>
					<div>
						<Toggle
							value={ 1 == props.hideWooCommerceBadges }
							onChange={ ( value ) =>
								props.onChange(
									'hideWooCommerceBadges',
									value ? 1 : 0
								)
							}
						/>
					</div>
				</div>
				<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
					<p className="asnp-text-xs asnp-text-gray-400">
						{ __(
							'Enable/Disable',
							'easy-sale-badges-for-woocommerce'
						) }
					</p>
				</label>
			</div>
			<div>
				<label className="asnp-block asnp-space-y-2 asnp-max-w-lg">
					<div className="asnp-flex">
						<div className="asnp-field-title asnp-ml-1 md:asnp-min-w-1/3 ">
							{ __(
								'Sale Badge ',
								'easy-sale-badges-for-woocommerce'
							) }
							<strong>
								{ __(
									'On Image',
									'easy-sale-badges-for-woocommerce'
								) }
							</strong>
							{ __(
								' Position On ',
								'easy-sale-badges-for-woocommerce'
							) }
							<strong>
								{ __(
									'Archive Page',
									'easy-sale-badges-for-woocommerce'
								) }
							</strong>
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
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="before_shop_loop_item_thumbnail">
							{ __(
								'Before product thumbnail',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_shop_loop_item_thumbnail">
							{ __(
								'After product thumbnail',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="before_shop_loop_item_title">
							{ __(
								'Before product title',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_shop_loop_item_title">
							{ __(
								'After product title',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>

						<option value="before_shop_loop_item_rating">
							{ __(
								'Before product rating',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_shop_loop_item_rating">
							{ __(
								'After product rating',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="before_shop_loop_item_price">
							{ __(
								'Before product price',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_shop_loop_item_price">
							{ __(
								'After product price',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_shop_loop_item">
							{ __(
								'After shop loop item',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="shop_loop">
							{ __(
								'Shop loop',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="post_thumbnail_html">
							{ __(
								'Post thumbnail html',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="none">
							{ __( 'None', 'easy-sale-badges-for-woocommerce' ) }
						</option>
					</select>
				</label>
				<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
					<p className="asnp-text-xs asnp-text-gray-400">
						{ __(
							'Sale badge position for bulk, tiered, purchase, products group rules in the archive page.',
							'easy-sale-badges-for-woocommerce'
						) }
					</p>
				</label>
			</div>
			<div>
				<label className="asnp-block asnp-space-y-2 asnp-max-w-lg">
					<div className="asnp-flex">
						<div className="asnp-field-title asnp-ml-1 md:asnp-min-w-1/3 ">
							{ __(
								'Sale Badge ',
								'easy-sale-badges-for-woocommerce'
							) }
							<strong>
								{ __(
									'Out Of Image',
									'easy-sale-badges-for-woocommerce'
								) }
							</strong>
							{ __(
								' Position On ',
								'easy-sale-badges-for-woocommerce'
							) }
							<strong>
								{ __(
									'Archive Page',
									'easy-sale-badges-for-woocommerce'
								) }
							</strong>
						</div>
					</div>
					<select
						className="asnp-block asnp-select-field md:asnp-w-2/3"
						value={ props.loopOutOfImagePosition }
						onChange={ ( e ) =>
							props.onChange(
								'loopOutOfImagePosition',
								e.target.value
							)
						}
					>
						<option value="woocommerce_product_get_image">
							{ __(
								'Product get image',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="before_shop_loop_item_thumbnail">
							{ __(
								'Before product thumbnail',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_shop_loop_item_thumbnail">
							{ __(
								'After product thumbnail',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="before_shop_loop_item_title">
							{ __(
								'Before product title',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_shop_loop_item_title">
							{ __(
								'After product title',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>

						<option value="before_shop_loop_item_rating">
							{ __(
								'Before product rating',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_shop_loop_item_rating">
							{ __(
								'After product rating',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="before_shop_loop_item_price">
							{ __(
								'Before product price',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_shop_loop_item_price">
							{ __(
								'After product price',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_shop_loop_item">
							{ __(
								'After shop loop item',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="shop_loop">
							{ __(
								'Shop loop',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="post_thumbnail_html">
							{ __(
								'Post thumbnail html',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="none">
							{ __( 'None', 'easy-sale-badges-for-woocommerce' ) }
						</option>
					</select>
				</label>
				<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
					<p className="asnp-text-xs asnp-text-gray-400">
						{ __(
							'Sale badge position for bulk, tiered, purchase, products group rules in the archive page.',
							'easy-sale-badges-for-woocommerce'
						) }
					</p>
				</label>
			</div>
			<div>
				<label className="asnp-block asnp-space-y-1">
					<div className="asnp-field-title asnp-ml-1">
						{ __(
							'Archive Loop Custom Hooks',
							'easy-sale-badges-for-woocommerce'
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
							'easy-sale-badges-for-woocommerce'
						) }
					</p>
				</label>
			</div>
			<div>
				<label className="asnp-block asnp-space-y-2 asnp-max-w-lg">
					<div className="asnp-flex">
						<div className="asnp-field-title asnp-ml-1 md:asnp-min-w-1/3 ">
							{ __(
								'Sale Badge ',
								'easy-sale-badges-for-woocommerce'
							) }
							<strong>
								{ __(
									'On Image',
									'easy-sale-badges-for-woocommerce'
								) }
							</strong>
							{ __(
								' Position On ',
								'easy-sale-badges-for-woocommerce'
							) }
							<strong>
								{ __(
									'Product Page',
									'easy-sale-badges-for-woocommerce'
								) }
							</strong>
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
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_single_item_images">
							{ __(
								'After product images',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="before_single_item_title">
							{ __(
								'Before product title',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_single_item_title">
							{ __(
								'After product title',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="before_single_item_price">
							{ __(
								'Before product price',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_single_item_price">
							{ __(
								'After product price',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="post_thumbnail_html">
							{ __(
								'Post thumbnail html',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="none">
							{ __( 'None', 'easy-sale-badges-for-woocommerce' ) }
						</option>
					</select>
				</label>
				<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
					<p className="asnp-text-xs asnp-text-gray-400">
						{ __(
							'Sale badge position for bulk, tiered, purchase, products group rules in the product page.',
							'easy-sale-badges-for-woocommerce'
						) }
					</p>
				</label>
			</div>
			<div>
				<label className="asnp-block asnp-space-y-2 asnp-max-w-lg">
					<div className="asnp-flex">
						<div className="asnp-field-title asnp-ml-1 md:asnp-min-w-1/3 ">
							{ __(
								'Sale Badge ',
								'easy-sale-badges-for-woocommerce'
							) }
							<strong>
								{ __(
									'Out of Image',
									'easy-sale-badges-for-woocommerce'
								) }
							</strong>
							{ __(
								' Position On ',
								'easy-sale-badges-for-woocommerce'
							) }
							<strong>
								{ __(
									'Product Page',
									'easy-sale-badges-for-woocommerce'
								) }
							</strong>
						</div>
					</div>
					<select
						className="asnp-block asnp-select-field md:asnp-w-2/3"
						value={ props.singleOutOfImagePosition }
						onChange={ ( e ) =>
							props.onChange(
								'singleOutOfImagePosition',
								e.target.value
							)
						}
					>
						<option value="before_single_item_images">
							{ __(
								'Before product images',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_single_item_images">
							{ __(
								'After product images',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="before_single_item_title">
							{ __(
								'Before product title',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_single_item_title">
							{ __(
								'After product title',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="before_single_item_price">
							{ __(
								'Before product price',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="after_single_item_price">
							{ __(
								'After product price',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="post_thumbnail_html">
							{ __(
								'Post thumbnail html',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option value="none">
							{ __( 'None', 'easy-sale-badges-for-woocommerce' ) }
						</option>
					</select>
				</label>
				<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
					<p className="asnp-text-xs asnp-text-gray-400">
						{ __(
							'Sale badge position for bulk, tiered, purchase, products group rules in the product page.',
							'easy-sale-badges-for-woocommerce'
						) }
					</p>
				</label>
			</div>
			<div>
				<label className="asnp-block asnp-space-y-1">
					<div className="asnp-field-title asnp-ml-1">
						{ __(
							'Single Product Custom Hooks',
							'easy-sale-badges-for-woocommerce'
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
							'easy-sale-badges-for-woocommerce'
						) }
					</p>
				</label>
			</div>

			<button
				className="asnp-btn asnp-btn-primary asnp-mb-2 asnp-w-[8rem]"
				type="button"
				onClick={ () => props.onSave() }
			>
				{ __( 'Save Changes', 'easy-sale-badges-for-woocommerce' ) }
			</button>
		</div>
	);
};

export default General;
