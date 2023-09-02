import React from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from '../../Toggle';

const General = ( props ) => {
	return (
		<div>
			
			<button
				className="asnp-btn asnp-btn-primary asnp-mt-10 asnp-mb-4"
				type="button"
				onClick={ () => props.onSave() }
			>
				{ __( 'Save Changes', 'asnp-easy-sale-badge' ) }
			</button>
		</div>
	);
};

export default General;
