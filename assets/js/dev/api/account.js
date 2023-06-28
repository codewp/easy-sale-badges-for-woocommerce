import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
import { API_ROOT } from './constants';

export const getAccounts = async ( data = {} ) => {
	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/account`,
		} );
		if ( response ) {
			return response;
		}

		throw new Error(
			__(
				'There was an error on gettings accounts.',
				'asnp-easy-whatsapp'
			)
		);
	} catch ( error ) {
		throw error;
	}
};

export const getAccount = async ( id ) => {
	id = null != id ? id * 1 : 0;
	if ( isNaN( id ) || 0 >= id ) {
		throw new Error(
			__( 'ID is required to get an account.', 'asnp-easy-whatsapp' )
		);
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/account/${ id }`,
			method: 'GET',
		} );

		if ( response ) {
			return response;
		}

		throw new Error(
			__(
				'There was an error on getting the account.',
				'asnp-easy-whatsapp'
			)
		);
	} catch ( error ) {
		throw error;
	}
};

export const saveAccount = async ( data ) => {
	if ( ! data ) {
		throw new Error( __( 'Data is required.', 'asnp-easy-whatsapp' ) );
	}

	if ( data.id && ! isNaN( data.id * 1 ) && 0 < data.id * 1 ) {
		return updateAccount( data );
	}

	return createAccount( data );
};

export const createAccount = async ( data ) => {
	if ( ! data ) {
		throw new Error(
			__( 'Data is required to create an account.', 'asnp-easy-whatsapp' )
		);
	}

	let form = new FormData();
	for ( let prop in data ) {
		if (
			null != data[ prop ] &&
			'object' === typeof data[ prop ] &&
			! ( data[ prop ] instanceof File ) &&
			! Array.isArray( data[ prop ] )
		) {
			form.append( prop, JSON.stringify( data[ prop ] ) );
		} else {
			form.append( prop, data[ prop ] );
		}
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/account`,
			method: 'POST',
			body: form,
		} );

		if ( response ) {
			return response;
		}

		throw new Error(
			__(
				'There was an error on creating the account.',
				'asnp-easy-whatsapp'
			)
		);
	} catch ( error ) {
		throw error;
	}
};

export const updateAccount = async ( data ) => {
	if ( ! data ) {
		throw new Error(
			__( 'Data is required to update an account.', 'asnp-easy-whatsapp' )
		);
	} else if ( ! data.id || isNaN( data.id * 1 ) || 0 >= data.id * 1 ) {
		throw new Error(
			__( 'Account ID is required to update it.', 'asnp-easy-whatsapp' )
		);
	}

	let form = new FormData();
	for ( let prop in data ) {
		if (
			null != data[ prop ] &&
			'object' === typeof data[ prop ] &&
			! ( data[ prop ] instanceof File ) &&
			! Array.isArray( data[ prop ] )
		) {
			form.append( prop, JSON.stringify( data[ prop ] ) );
		} else {
			form.append( prop, data[ prop ] );
		}
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/account/${ data.id }`,
			method: 'POST',
			body: form,
		} );

		if ( response ) {
			return response;
		}

		throw new Error(
			__(
				'There was an error on updating the account.',
				'asnp-easy-whatsapp'
			)
		);
	} catch ( error ) {
		throw error;
	}
};

export const deleteAccount = async ( id ) => {
	id *= 1;
	if ( isNaN( id ) || 0 >= id ) {
		throw new Error(
			__( 'ID is required to delete an account.', 'asnp-easy-whatsapp' )
		);
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/account/${ id }`,
			method: 'DELETE',
		} );

		if ( response ) {
			return response;
		}

		throw new Error(
			__(
				'There was an error on deleting the account.',
				'asnp-easy-whatsapp'
			)
		);
	} catch ( error ) {
		throw error;
	}
};

export const duplicateAccount = async ( id ) => {
	id *= 1;
	if ( isNaN( id ) || 0 >= id ) {
		throw new Error(
			__(
				'ID is required to duplicate an account.',
				'asnp-easy-whatsapp'
			)
		);
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/account/duplicate/${ id }`,
			method: 'POST',
		} );

		if ( response ) {
			return response;
		}

		throw new Error(
			__(
				'There was an error on duplicating the account.',
				'asnp-easy-whatsapp'
			)
		);
	} catch ( error ) {
		throw error;
	}
};

export const reorderAccounts = async ( data ) => {
	if ( ! data || ! data.items || ! data.items.length ) {
		throw new Error(
			__( 'Accounts are required for reordering.', 'asnp-easy-whatsapp' )
		);
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/account/reorder`,
			method: 'POST',
			data,
		} );

		if ( response ) {
			return response;
		}

		throw new Error(
			__(
				'There was an error on duplicating the account.',
				'asnp-easy-whatsapp'
			)
		);
	} catch ( error ) {
		throw error;
	}
};
