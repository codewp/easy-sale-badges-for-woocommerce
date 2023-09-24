import React from 'react';
import { __ } from '@wordpress/i18n';
import WooCommerce from './WooCommerce';

const Products = ( props ) => {
	return (
		<div>
			<div className="asnp-w-[25rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
				{ __( 'Products', 'asnp-easy-sale-badge' ) }
			</div>
			<div className="asnp-mt-3">
				<label className="asnp-block asnp-space-y-1">
					<span className="asnp-field-title">
						{ __( 'Product List', 'asnp-easy-sale-badge' ) }
					</span>
				</label>
				<WooCommerce onChange={ props.onChange } />
			</div>
		</div>
	);
};

export default Products;
