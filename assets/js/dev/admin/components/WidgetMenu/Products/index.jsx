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
				<div className="asnp-flex">
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
			</div>
		</div>
	);
};

export default Products;
