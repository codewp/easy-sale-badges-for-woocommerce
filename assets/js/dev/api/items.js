import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
import { API_ROOT } from './constants';

export const getItems = async ( data ) => {
	if ( ! data ) {
		throw new Error(
			__( 'Data is required.', 'asnp-easy-product-bundles' )
		);
	} else if ( ! data.type ) {
		throw new Error(
			__( 'Type is required.', 'asnp-easy-product-bundles' )
		);
	} else if ( ! data.items ) {
		throw new Error(
			__( 'Items are required.', 'asnp-easy-product-bundles' )
		);
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/items`,
			method: 'POST',
			data,
		} );

		if ( response && response.items ) {
			return response.items;
		}

		throw new Error(
			__(
				'There was an error on getting items.',
				'asnp-easy-product-bundles'
			)
		);
	} catch ( error ) {
		throw error;
	}
};

export const searchItems = async ( data ) => {
	if ( ! data ) {
		throw new Error(
			__( 'Data is required.', 'asnp-easy-product-bundles' )
		);
	} else if ( ! data.type ) {
		throw new Error(
			__( 'Type is required.', 'asnp-easy-product-bundles' )
		);
	} else if ( null == data.search ) {
		throw new Error(
			__( 'Search value is required.', 'asnp-easy-product-bundles' )
		);
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/items?type=${ data.type }&search=${ data.search }`,
			method: 'GET',
		} );

		if ( response && response.items ) {
			return response.items;
		}

		throw new Error(
			__(
				'There was an error on searching items.',
				'asnp-easy-product-bundles'
			)
		);
	} catch ( error ) {
		throw error;
	}
};
