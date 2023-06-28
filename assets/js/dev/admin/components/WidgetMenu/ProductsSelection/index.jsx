import React from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from '../../Toggle';

const ProductsSelection = ( props ) => {
	return (
		<div className="asnp-w-[25rem]">
			<div className="asnp-w-[25rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
				{ __( 'Products Selection', 'asnp-easy-whatsapp' ) }
			</div>
			<label className="asnp-block asnp-mt-4 asnp-space-y-2">
				<span className="asnp-field-title asnp-ml-1">
					{ __( 'Use custom product filter', 'asnp-easy-whatsapp' ) }
				</span>
				<div className="asnp-ml-2">
					<Toggle
						value={ 'true' == props.useProductFilter }
						onChange={ ( value ) =>
							props.onChange(
								'useProductFilter',
								value ? 'true' : 'false'
							)
						}
					/>
				</div>
			</label>
			<div className="asnp-mt-3">
				<label className="asnp-block asnp-space-y-1">
					<span className="asnp-field-title">
						{ __( 'Product List', 'asnp-easy-whatsapp' ) }
					</span>
					<select
						className="asnp-block asnp-select-field"
						value={ props.caption }
						onChange={ ( e ) => {
							props.onChange( 'caption', e.target.value );
						} }
					>
						<option value="All">
							{ __( 'All', 'asnp-easy-whatsapp' ) }
						</option>
					</select>
				</label>
			</div>
		</div>
	);
};

export default ProductsSelection;
