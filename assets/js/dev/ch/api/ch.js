import apiFetch from '@wordpress/api-fetch';

const API_ROOT = '/asnp-easy-sale-badge/v1';

export const applyCh = async ( data ) => {
	if ( ! data || ! data.action || ! data.action.length ) {
		throw new Error( 'Action is required.' );
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/ch`,
			method: 'POST',
			data,
		} );

		if ( response ) {
			return response;
		}

		throw new Error( 'There was an error on applying changes.' );
	} catch ( error ) {
		throw error;
	}
};
