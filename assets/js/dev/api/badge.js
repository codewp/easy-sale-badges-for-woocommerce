import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
import { API_ROOT } from './constants';

export const getItems = async ( data = {} ) => {
	try {
		let query = '';
		if (
			null != data.page &&
			! isNaN( data.page * 1 ) &&
			0 < data.page * 1
		) {
			query += '?page=' + data.page * 1;
		}

		if ( null != data.search ) {
			query += ( query.length ? '&' : '?' ) + 'search=' + data.search;
		}

		const response = await apiFetch( {
			path: `${ API_ROOT }/badge${ query }`,
		} );
		if ( response ) {
			return response;
		}

		throw new Error(
			__( 'There was an error on gettings items.', 'asnp-easy-sale-badge' )
		);
	} catch ( error ) {
		throw error;
	}
};

export const getItem = async ( id ) => {
	id = null != id ? id * 1 : 0;
	if ( isNaN( id ) || 0 >= id ) {
		throw new Error(
			__( 'ID is required to get an item.', 'asnp-easy-sale-badge' )
		);
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/badge/${ id }`,
			method: 'GET',
		} );

		if ( response ) {
			return response;
		}

		throw new Error(
			__(
				'There was an error on getting the item.',
				'asnp-easy-sale-badge'
			)
		);
	} catch ( error ) {
		throw error;
	}
};

export const save = async ( data ) => {
	if ( ! data ) {
		throw new Error( __( 'Data is required.', 'asnp-easy-sale-badge' ) );
	}

	if ( data.id && ! isNaN( data.id * 1 ) && 0 < data.id * 1 ) {
		return update( data );
	}

	return create( data );
};

export const create = async ( data ) => {
	if ( ! data ) {
		throw new Error(
			__( 'Data is required to create an item.', 'asnp-easy-sale-badge' )
		);
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/badge`,
			method: 'POST',
			data,
		} );

		if ( response ) {
			return response;
		}

		throw new Error(
			__(
				'There was an error on creating the item.',
				'asnp-easy-sale-badge'
			)
		);
	} catch ( error ) {
		throw error;
	}
};

export const update = async ( data ) => {
	if ( ! data ) {
		throw new Error(
			__( 'Data is required to update an item.', 'asnp-easy-sale-badge' )
		);
	} else if ( ! data.id || isNaN( data.id * 1 ) || 0 >= data.id * 1 ) {
		throw new Error(
			__( 'Item ID is required to update it.', 'asnp-easy-sale-badge' )
		);
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/badge/${ data.id }`,
			method: 'POST',
			data,
		} );

		if ( response ) {
			return response;
		}

		throw new Error(
			__(
				'There was an error on updating the item.',
				'asnp-easy-sale-badge'
			)
		);
	} catch ( error ) {
		throw error;
	}
};

export const deleteItem = async ( id ) => {
	id *= 1;
	if ( isNaN( id ) || 0 >= id ) {
		throw new Error(
			__( 'ID is required to delete an item.', 'asnp-easy-sale-badge' )
		);
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/badge/${ id }`,
			method: 'DELETE',
		} );

		if ( response ) {
			return response;
		}

		throw new Error(
			__(
				'There was an error on deleting the item.',
				'asnp-easy-sale-badge'
			)
		);
	} catch ( error ) {
		throw error;
	}
};

export const duplicate = async ( id ) => {
	id *= 1;
	if ( isNaN( id ) || 0 >= id ) {
		throw new Error(
			__( 'ID is required to duplicate an item.', 'asnp-easy-sale-badge' )
		);
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/badge/duplicate/${ id }`,
			method: 'POST',
		} );

		if ( response ) {
			return response;
		}

		throw new Error(
			__(
				'There was an error on duplicating the item.',
				'asnp-easy-sale-badge'
			)
		);
	} catch ( error ) {
		throw error;
	}
};

export const reorder = async ( data ) => {
	if ( ! data || ! data.items || ! data.items.length ) {
		throw new Error(
			__( 'Items is required for reordering.', 'asnp-easy-sale-badge' )
		);
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/badge/reorder`,
			method: 'POST',
			data,
		} );

		if ( response ) {
			return response;
		}

		throw new Error(
			__(
				'There was an error on duplicating the item.',
				'asnp-easy-sale-badge'
			)
		);
	} catch ( error ) {
		throw error;
	}
};
