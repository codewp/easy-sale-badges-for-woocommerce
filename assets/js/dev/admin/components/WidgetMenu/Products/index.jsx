import React from 'react';
import { __ } from '@wordpress/i18n';
import WooCommerce from './WooCommerce';

const Products = ( props ) => {
	return (
		<div>
			<div className="asnp-w-[25rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
				{ __( 'Products', 'easy-sale-badges-for-woocommerce' ) }
			</div>
			<div className="asnp-mt-3">
				<div className="asnp-flex asnp-flex-wrap">
					<p className="asnp-field-title">
						{ __(
							'To select the',
							'easy-sale-badges-for-woocommerce'
						) }
					</p>
					<a
						className="asnp-ml-1"
						href="https://www.asanaplugins.com/product/woocommerce-dynamic-pricing-and-discounts-plugin/?utm_source=sale-badges-for-woocommerce&utm_campaign=discount-rule-condition&utm_medium=link"
						target="_blank"
					>
						{ __(
							'“Discount Rules and Dynamic Pricing for WooCommerce“',
							'easy-sale-badges-for-woocommerce'
						) }
					</a>
					<p className="asnp-field-title asnp-ml-1">
						{ __(
							'rule, you can utilize the “Discount rule” condition.',
							'easy-sale-badges-for-woocommerce'
						) }
					</p>
				</div>
				<WooCommerce onChange={ props.onChange } />
				<div className="asnp-border-t-2 asnp-border-solid asnp-border-gray-400 asnp-w-full"></div>
				<div className="asnp-mt-4">
					<div className="asnp-w-[25rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
						{ __(
							'Conditions (Pro)',
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
	);
};

export default Products;
