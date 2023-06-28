import React from 'react';
import { __ } from '@wordpress/i18n';
import { XIcon } from '@heroicons/react/solid';
import ItemSelect from './../../../../ItemSelect/index';

const types = {
	products: __( 'Products', 'asnp-easy-whatsapp' ),
	excluded_products: __( 'Excluded Products', 'asnp-easy-whatsapp' ),
	categories: __( 'Categories', 'asnp-easy-whatsapp' ),
	excluded_categories: __( 'Excluded Categories', 'asnp-easy-whatsapp' ),
	tags: __( 'Tags', 'asnp-easy-whatsapp' ),
	excluded_tags: __( 'Excluded Tags', 'asnp-easy-whatsapp' ),
};

const WooCommerceList = ( { item, onDelete, onChange, add } ) => {
	return (
		<div className="asnp-w-full asnp-mb-4 asnp-flex asnp-mt-5">
			<select
				className="asnp-select-field !asnp-w-48 asnp-mt-2"
				onChange={ ( e ) => {
					updateType( e.target.value );
				} }
			>
				<option value={ 'products' }>
					{ __( 'Products', 'asnp-easy-whatsapp' ) }
				</option>

				<option value={ 'categories' }>
					{ __( 'Categories', 'asnp-easy-whatsapp' ) }
				</option>

				<option value={ 'tags' }>
					{ __( 'Tags', 'asnp-easy-whatsapp' ) }
				</option>
			</select>
			<select className="asnp-select-field !asnp-w-48 asnp-mt-2 asnp-ml-4">
				<option value={ 'categories' }>
					{ __( 'Included', 'asnp-easy-whatsapp' ) }
				</option>
				<option value={ 'excluded_categories' }>
					{ __( 'Excluded', 'asnp-easy-whatsapp' ) }
				</option>
			</select>
			<div className="asnp-itemselect asnp-ml-5 asnp-flex">
				{
					<ItemSelect
						items={ item.items }
						type={ item.type }
						onChange={ onChange }
					/>
				}
				<button
					className="asnp-mb-4 asnp-ml-3 asnp-mt-2 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
					onClick={ add }
				>
					{ __( 'and', 'asnp-easy-whatsapp' ) }
				</button>
				<button
					className="asnp-mb-4 asnp-mt-2 asnp-ml-3 asnp-btn-delete asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
					onClick={ onDelete }
				>
					{ __( 'Delete', 'asnp-easy-whatsapp' ) }
				</button>
			</div>
		</div>
	);
};

export default WooCommerceList;
