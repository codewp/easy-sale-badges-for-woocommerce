import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
import { API_ROOT } from './constants';

const getItemType = ( type ) => {
	switch ( type ) {
		case 'products':
		case 'excluded_products':
			return 'products';
		case 'categories':
		case 'excluded_categories':
			return 'categories';
		case 'tags':
		case 'excluded_tags':
			return 'tags';
	}

	return type;
};

export const getItems = async ( data ) => {
	if ( ! data ) {
		throw new Error( __( 'Data is required.', 'asnp-easy-whatsapp' ) );
	} else if ( ! data.type ) {
		throw new Error( __( 'Type is required.', 'asnp-easy-whatsapp' ) );
	} else if ( ! data.items ) {
		throw new Error( __( 'Items are required.', 'asnp-easy-whatsapp' ) );
	}

	data.type = getItemType( data.type );
	if ( ! data.type.length ) {
		throw new Error( __( 'Invalid type.', 'asnp-easy-whatsapp' ) );
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
			__( 'There was an error on getting items.', 'asnp-easy-whatsapp' )
		);
	} catch ( error ) {
		throw error;
	}
};

export const searchItems = async ( data ) => {
	if ( ! data ) {
		throw new Error( __( 'Data is required.', 'asnp-easy-whatsapp' ) );
	} else if ( ! data.type ) {
		throw new Error( __( 'Type is required.', 'asnp-easy-whatsapp' ) );
	} else if ( ! data.search ) {
		throw new Error(
			__( 'Search value is required.', 'asnp-easy-whatsapp' )
		);
	}

	data.type = getItemType( data.type );
	if ( ! data.type.length ) {
		throw new Error( __( 'Invalid type.', 'asnp-easy-whatsapp' ) );
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
			__( 'There was an error on searching items.', 'asnp-easy-whatsapp' )
		);
	} catch ( error ) {
		throw error;
	}
};
