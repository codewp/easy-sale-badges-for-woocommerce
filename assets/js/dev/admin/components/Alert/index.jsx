import React from 'react';
import { __ } from '@wordpress/i18n';

const Alert = ( { title, message } ) => {
	return (
		<div className="asnp-bg-blue-100 asnp-border-blue-400 asnp-text-blue-700 asnp-border asnp-w-full md:asnp-w-3/4 xl:asnp-w-1/2 asnp-my-4 asnp-px-4 asnp-py-3 asnp-rounded asnp-relative">
			<strong className="asnp-font-bold asnp-text-blue-500">
				{ title }
			</strong>
			<span className="asnp-block sm:asnp-inline asnp-ml-1">
				{ message }
			</span>
		</div>
	);
};

export default Alert;
