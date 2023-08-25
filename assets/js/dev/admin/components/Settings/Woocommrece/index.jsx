import React from 'react';
import { __ } from '@wordpress/i18n';

const WooCommerce = ( props ) => {
	
	return (
		<div className="asnp-max-w-lg asnp-grid asnp-grid-cols-1 asnp-gap-8">
			<div>
				<label className="asnp-block asnp-space-y-2 asnp-max-w-lg">
					<div className="asnp-flex">
						<h2 className="asnp-field-title asnp-ml-1 md:asnp-min-w-1/3 ">
							{ __(
								'Sale Badge Position On Archive Page',
								'asnp-easy-whatsapp'
							) }
						</h2>
					</div>
					<select
						className="asnp-block asnp-select-field md:asnp-w-2/3"
						value={ props.loopPosition }
						onChange={ ( e ) =>
							props.onChange( 'loopPosition', e.target.value )
						}
					>
						<option value="before_shop_loop_item_thumbnail">
							{ __(
								'Before product thumbnail',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="after_shop_loop_item_thumbnail">
							{ __(
								'After product thumbnail',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="before_shop_loop_item_title">
							{ __(
								'Before product title',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="after_shop_loop_item_title">
							{ __(
								'After product title',
								'asnp-easy-whatsapp'
							) }
						</option>

						<option value="before_shop_loop_item_rating">
							{ __(
								'Before product rating',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="after_shop_loop_item_rating">
							{ __(
								'After product rating',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="before_shop_loop_item_price">
							{ __(
								'Before product price',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="after_shop_loop_item_price">
							{ __(
								'After product price',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="after_shop_loop_item">
							{ __(
								'After shop loop item',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="shop_loop">
							{ __( 'Shop loop', 'asnp-easy-whatsapp' ) }
						</option>
						<option value="none">
							{ __( 'None', 'asnp-easy-whatsapp' ) }
						</option>
					</select>
				</label>
				<label className="asnp-block asnp-space-y-1 asnp-italic asnp-text-gray-500">
					<p>
						{ __(
							'Sale badge position for bulk, tiered, purchase, products group rules in the archive page.',
							'asnp-easy-whatsapp'
						) }
					</p>
				</label>
			</div>
			<div>
				<label className="asnp-block asnp-space-y-1">
					<h2 className="asnp-field-title asnp-ml-1">
						{ __(
							'Archive Loop Custom Hooks',
							'asnp-easy-whatsapp'
						) }
					</h2>
					<input
						type="text"
						className="asnp-block asnp-text-field"
						value={ props.loopCustomHooks }
						onChange={ ( e ) =>
							props.onChange( 'loopCustomHooks', e.target.value )
						}
					/>
				</label>
				<label className="asnp-block asnp-space-y-1 asnp-italic asnp-text-gray-500">
					<p>
						{ __( 'comma separated hooks.', 'asnp-easy-whatsapp' ) }
					</p>
				</label>
			</div>
			<div>
				<label className="asnp-block asnp-space-y-2 asnp-max-w-lg">
					<div className="asnp-flex">
						<h2 className="asnp-field-title asnp-ml-1 md:asnp-min-w-1/3 ">
							{ __(
								'Sale Badge Position On Product Page',
								'asnp-easy-whatsapp'
							) }
						</h2>
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
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="after_single_item_images">
							{ __(
								'After product images',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="before_single_item_title">
							{ __(
								'Before product title',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="after_single_item_title">
							{ __(
								'After product title',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="before_single_item_price">
							{ __(
								'Before product price',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="after_single_item_price">
							{ __(
								'After product price',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="none">
							{ __( 'None', 'asnp-easy-whatsapp' ) }
						</option>
					</select>
				</label>
				<label className="asnp-block asnp-space-y-1 asnp-italic asnp-text-gray-500">
					<p>
						{ __(
							'Sale badge position for bulk, tiered, purchase, products group rules in the product page.',
							'asnp-easy-whatsapp'
						) }
					</p>
				</label>
			</div>
			<div>
				<label className="asnp-block asnp-space-y-1">
					<h2 className="asnp-field-title asnp-ml-1">
						{ __(
							'Single Product Custom Hooks',
							'asnp-easy-whatsapp'
						) }
					</h2>
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
				<label className="asnp-block asnp-space-y-1 asnp-italic asnp-text-gray-500">
					<p>
						{ __( 'comma separated hooks.', 'asnp-easy-whatsapp' ) }
					</p>
				</label>
			</div>

			<div>
				<label className="asnp-block asnp-space-y-2 asnp-max-w-lg">
					<div className="asnp-flex">
						<h2 className="asnp-field-title asnp-ml-1 md:asnp-min-w-1/3 ">
							{ __(
								'Timer badge position',
								'asnp-easy-whatsapp'
							) }
						</h2>
					</div>
					<select
						className="asnp-block asnp-select-field md:asnp-w-2/3 !asnp-h-12"
						value={ props.timerPosition }
						onChange={ ( e ) =>
							props.onChange( 'timerPosition', e.target.value )
						}
					>
						<option value="onimage">
							{ __(
								'On image',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="outofimage">
							{ __(
								'Out of image',
								'asnp-easy-whatsapp'
							) }
						</option>	
					</select>
				</label>		
			</div>

			<button
				className="asnp-btn asnp-btn-primary asnp-mb-2 asnp-w-[8rem]"
				type="button"
				onClick={ () => props.onSave() }
			>
				{ __( 'Save Changes', 'asnp-easy-whatsapp' ) }
			</button>
		</div>
	);
};

export default WooCommerce;
