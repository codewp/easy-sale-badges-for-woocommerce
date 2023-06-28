import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import ItemSelect from '../../../../ItemSelect';
import WooCommerceList from './WooCommerceList';
import './style.scss';

const WooCommerce = ( {
	woocommerceItems,
	woocommerceItemsConditions,
	updateWooCommerceItem,
	addWooCommerceItem,
	deleteWooCommerceItem,
	onChange,
} ) => {
	const [ type, setType ] = useState( 'products' );
	const [ items, setItems ] = useState( [] );

	const updateType = ( value ) => {
		setItems( [] );
		setType( value );
	};

	const add = () => {
		addWooCommerceItem( { type, items } );
		setItems( [] );
	};

	return (
		<div className="asnp-mt-4">
			<div className="asnp-w-full asnp-space-y-2 asnp-mb-4">
				<select
					className="asnp-select-field asnp-mb-4"
					value={ woocommerceItemsConditions }
					onChange={ ( e ) => {
						onChange(
							'woocommerceItemsConditions',
							e.target.value
						);
					} }
				>
					<option value={ 'any' }>
						{ __(
							'One condition should match',
							'asnp-easy-whatsapp'
						) }
					</option>
					<option value={ 'all' }>
						{ __(
							'All conditions should match',
							'asnp-easy-whatsapp'
						) }
					</option>
				</select>
				<select
					className="asnp-select-field"
					onChange={ ( e ) => {
						updateType( e.target.value );
					} }
				>
					<option value={ 'products' }>
						{ __( 'Products', 'asnp-easy-whatsapp' ) }
					</option>
					<option disabled className="asnp-text-red-600">
						{ __( 'Excluded Products(Pro)', 'asnp-easy-whatsapp' ) }
					</option>
					<option disabled className="asnp-text-red-600">
						{ __( 'Categories(Pro)', 'asnp-easy-whatsapp' ) }
					</option>
					<option disabled className="asnp-text-red-600">
						{ __(
							'Excluded Categories(Pro)',
							'asnp-easy-whatsapp'
						) }
					</option>
					<option disabled className="asnp-text-red-600">
						{ __( 'Tags(Pro)', 'asnp-easy-whatsapp' ) }
					</option>
					<option disabled className="asnp-text-red-600">
						{ __( 'Excluded Tags(Pro)', 'asnp-easy-whatsapp' ) }
					</option>
				</select>

				<div className="asnp-itemselect">
					{
						<ItemSelect
							items={ items }
							type={ type }
							onChange={ setItems }
						/>
					}
					<button
						className="asnp-mt-2 asnp-mb-4 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
						onClick={ add }
					>
						{ __( 'Add', 'asnp-easy-whatsapp' ) }
					</button>
				</div>
				<div className="asnp-overflow-auto asnp-h-[18rem] asnp-space-y-2 scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!bg-slate-300 ">
					{ woocommerceItems.map( ( item, index ) => (
						<div
							key={ index }
							className="asnp-border-2 asnp-border-indigo-500 asnp-rounded-md asnp-mr-1"
						>
							<WooCommerceList
								item={ item }
								onDelete={ () =>
									deleteWooCommerceItem( index )
								}
								onChange={ ( value ) =>
									updateWooCommerceItem(
										index,
										'items',
										value
									)
								}
							/>
						</div>
					) ) }
				</div>
			</div>
		</div>
	);
};

export default WooCommerce;
