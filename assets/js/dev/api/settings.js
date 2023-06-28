import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
import { API_ROOT } from './constants';

export const getSettings = async () => {
	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/settings`,
			method: 'GET',
		} );

		if ( response && response.settings ) {
			return response.settings;
		}

		throw new Error(
			__(
				'There was an error on getting settings.',
				'asnp-easy-whatsapp'
			)
		);
	} catch ( error ) {
		throw error;
	}
};

export const saveSettings = async ( data ) => {
	if ( ! data ) {
		throw new Error( __( 'Data is required.', 'asnp-easy-whatsapp' ) );
	}

	try {
		const response = await apiFetch( {
			path: `${ API_ROOT }/settings`,
			method: 'POST',
			data,
		} );

		if ( response && response.settings ) {
			return response.settings;
		}

		throw new Error(
			__( 'There was an error on saving settings.', 'asnp-easy-whatsapp' )
		);
	} catch ( error ) {
		throw error;
	}
};
