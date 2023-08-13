import React from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from '../../Toggle';
import WooCommerce from './WooCommerce';

const ProductsSelection = ( props ) => {
	return (
		<div>
			<div className="asnp-w-[25rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
				{ __( 'Products Selection', 'asnp-easy-whatsapp' ) }
			</div>
			<div className="asnp-mt-3">
				<label className="asnp-block asnp-space-y-1">
					<span className="asnp-field-title">
						{ __( 'Product List', 'asnp-easy-whatsapp' ) }
					</span>
				</label>
				<WooCommerce onChange={ props.onChange } />
			</div>
		</div>
	);
};

export default ProductsSelection;
