import React, { useEffect } from 'react';
import { __ } from '@wordpress/i18n';

import './style.scss';

const Snackbar = ( { message, setMessage } ) => {
	if ( ! message ) {
		return null;
	}

	message = { ...{ type: 'success' }, ...message };

	useEffect( () => {
		let timeout = setTimeout( () => {
			setMessage( null );
		}, 2000 );

		return () => {
			clearTimeout( timeout );
		};
	}, [ message ] );

	let classes = 'asnp-text-green-500 asnp-bg-green-100';
	let path =
		'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z';
	if ( 'error' === message.type ) {
		classes = 'asnp-text-red-500 asnp-bg-red-100';
		path =
			'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z';
	} else if ( 'info' === message.type ) {
		classes = 'asnp-text-blue-500 asnp-bg-blue-100';
		path =
			'M12 10C11.7348 10 11.4804 10.1054 11.2929 10.2929C11.1054 10.4804 11 10.7348 11 11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V11C13 10.7348 12.8946 10.4804 12.7071 10.2929C12.5196 10.1054 12.2652 10 12 10ZM12 6C11.7528 6 11.5111 6.07331 11.3055 6.21066C11.1 6.34801 10.9398 6.54324 10.8452 6.77165C10.7505 7.00005 10.7258 7.25139 10.774 7.49386C10.8223 7.73634 10.9413 7.95907 11.1161 8.13388C11.2909 8.3087 11.5137 8.42775 11.7561 8.47598C11.9986 8.52421 12.2499 8.49946 12.4784 8.40485C12.7068 8.31024 12.902 8.15002 13.0393 7.94446C13.1767 7.7389 13.25 7.49723 13.25 7.25C13.25 6.91848 13.1183 6.60054 12.8839 6.36612C12.6495 6.1317 12.3315 6 12 6V6Z';
	}

	return (
		<div className="asnp-snackbar asnp-flex asnp-flex-col asnp-justify-center asnp-fixed">
			<div
				id="toast-success"
				className="asnp-flex asnp-items-center asnp-w-full asnp-max-w-xs asnp-p-4 asnp-mb-4 asnp-text-gray-500 asnp-bg-white asnp-rounded-lg asnp-shadow "
				role="alert"
			>
				<div
					className={ `asnp-inline-flex asnp-items-center asnp-justify-center asnp-flex-shrink-0 asnp-w-8 asnp-h-8 asnp-rounded-lg ${ classes }` }
				>
					<svg
						className="asnp-w-5 asnp-h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d={ path }
							clipRule="evenodd"
						></path>
					</svg>
				</div>

				<div className="asnp-ml-3 asnp-text-sm asnp-font-normal">
					{ message.message }
				</div>
			</div>
		</div>
	);
};

export default Snackbar;
