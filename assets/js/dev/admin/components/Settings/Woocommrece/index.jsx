import React from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from '../../Toggle';

const WooCommerce = ( props ) => {
	return (
		<>
			<h2>
				{ __(
					'WhatsApp on WooCommerce product pages',
					'asnp-easy-whatsapp'
				) }
			</h2>
			<div className="asnp-flex asnp-mt-10 md:asnp-w-[9rem] asnp-w-[5rem]  asnp-justify-between">
				<h2 className="asnp-field-title asnp-font-bold md:asnp-min-w-1/3">
					{ __( 'Enabled', 'asnp-easy-whatsapp' ) }
				</h2>
				<div>
					<Toggle
						value={ 'true' == props.enabled }
						onChange={ ( value ) =>
							props.onChange(
								'woocommerceEnabled',
								value ? 'true' : 'false'
							)
						}
					/>
				</div>
			</div>
			<label className="asnp-block asnp-space-y-2 asnp-mt-10 asnp-max-w-lg">
				<div className="asnp-flex">
					<h2 className="asnp-field-title asnp-ml-1 md:asnp-min-w-1/3 ">
						{ __( 'Button position', 'asnp-easy-whatsapp' ) }
					</h2>
				</div>
				<select
					className="asnp-block asnp-select-field md:asnp-w-2/3"
					value={ props.btnPosition }
					onChange={ ( e ) =>
						props.onChange(
							'woocommerceBtnPosition',
							e.target.value
						)
					}
				>
					<option disabled className="asnp-text-red-600">
						{ __(
							'Before Add to Cart button(Pro)',
							'asnp-easy-whatsapp'
						) }
					</option>
					<option value="after_add_to_cart_button">
						{ __(
							'After Add to Cart button',
							'asnp-easy-whatsapp'
						) }
					</option>
					<option disabled className="asnp-text-red-600">
						{ __(
							'Before Add to Cart form(Pro)',
							'asnp-easy-whatsapp'
						) }
					</option>
					<option disabled className="asnp-text-red-600">
						{ __(
							'After Add to Cart form(Pro)',
							'asnp-easy-whatsapp'
						) }
					</option>
					<option disabled className="asnp-text-red-600">
						{ __(
							'Before product excerpt(Pro)',
							'asnp-easy-whatsapp'
						) }
					</option>
					<option disabled className="asnp-text-red-600">
						{ __(
							'After product excerpt(Pro)',
							'asnp-easy-whatsapp'
						) }
					</option>
					<option disabled className="asnp-text-red-600">
						{ __(
							'After product meta(Pro)',
							'asnp-easy-whatsapp'
						) }
					</option>
					<option disabled className="asnp-text-red-600">
						{ __(
							'Before CSS selector(Pro)',
							'asnp-easy-whatsapp'
						) }
					</option>
					<option disabled className="asnp-text-red-600">
						{ __(
							'After CSS selector(Pro)',
							'asnp-easy-whatsapp'
						) }
					</option>
				</select>
			</label>

			<div
				className="asnp-flex asnp-mt-10 ]  md:asnp-w-[24rem] asnp-w-[20rem]  asnp-justify-between"
				style={ {
					display:
						-1 <
						[ 'before_css_selector', 'after_css_selector' ].indexOf(
							props.btnPosition
						)
							? 'block'
							: 'none',
				} }
			>
				<h2 className="asnp-field-title asnp-font-bold md:asnp-min-w-1/3">
					{ __( 'CSS Selector', 'asnp-easy-whatsapp' ) }
				</h2>
				<input
					type="text"
					className="asnp-block asnp-text-field md:asnp-w-2/3"
					value={ props.cssSelector }
					onChange={ ( e ) =>
						props.onChange(
							'woocommerceCssSelector',
							e.target.value
						)
					}
				/>
			</div>
			<button
				className="asnp-btn asnp-btn-primary asnp-mt-10 asnp-mb-4"
				type="button"
				onClick={ () => props.onSave() }
			>
				{ __( 'Save Changes', 'asnp-easy-whatsapp' ) }
			</button>
		</>
	);
};

export default WooCommerce;
