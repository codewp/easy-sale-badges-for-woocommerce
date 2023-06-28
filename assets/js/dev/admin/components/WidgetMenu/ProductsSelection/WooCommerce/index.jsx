import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import WooCommerceList from './WooCommerceList';
import './style.scss';
import ItemSelect from './../../../ItemSelect/index';

const WooCommerce = ( {
	woocommerceItems,
	woocommerceItemsOr,
	updateWooCommerceItem,
	addWooCommerceItem,
	deleteWooCommerceItem,
	updateWooCommerceItemOr,
	addWooCommerceItemOr,
	deleteWooCommerceItemOr,
	onChange,
} ) => {
	const [ type, setType ] = useState( 'products' );
	const [ items, setItems ] = useState( [] );
	const [ or, setOr ] = useState( false );

	const updateType = ( value ) => {
		setItems( [] );
		setType( value );
	};

	const add = () => {
		addWooCommerceItem( { type, items } );
		setItems( [] );
	};
	const addOr = () => {
		addWooCommerceItemOr( { type, items } );
		setItems( [] );
	};

	return (
		<div className="asnp-mt-4">
			<div className="asnp-w-full asnp-mb-4">
				<div className="asnp-flex">
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
								items={ items }
								type={ type }
								onChange={ setItems }
							/>
						}
						<button
							className="asnp-mb-4 asnp-ml-3 asnp-mt-2 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
							onClick={ add }
						>
							{ __( 'and', 'asnp-easy-whatsapp' ) }
						</button>
					</div>
				</div>
				<div className="asnp-block asnp-h-auto asnp-space-y-2">
					{ woocommerceItems.map( ( item, index ) => (
						<div key={ index }>
							<WooCommerceList
								add={ add }
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
				<div className="asnp-mt-4 asnp-block asnp-h-auto asnp-space-y-2">
					<label className="asnp-block asnp-space-y-1">
						<span className="asnp-field-title">
							{ __( 'Or', 'asnp-easy-whatsapp' ) }
						</span>
					</label>
					<button
						className="asnp-mb-4 asnp-ml-3 asnp-mt-2 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[8rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
						onClick={ () => {
							addOr();
							setOr( true );
						} }
					>
						{ __( 'Add "Or" Group', 'asnp-easy-whatsapp' ) }
					</button>
					{ woocommerceItemsOr.map( ( item, index ) => (
						<div key={ index }>
							{ or ? (
								<label className="asnp-block asnp-space-y-1">
									<span className="asnp-field-title">
										{ __( 'Or', 'asnp-easy-whatsapp' ) }
									</span>
								</label>
							) : (
								''
							) }
							<WooCommerceList
								add={ () => {
									addOr();
									setOr( false );
								} }
								item={ item }
								onDelete={ () =>
									deleteWooCommerceItemOr( index )
								}
								onChange={ ( value ) =>
									updateWooCommerceItemOr(
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
