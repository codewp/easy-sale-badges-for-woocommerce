import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from './../../utils/constants';

const BlackFridayBanner = () => {
	const [ show, setShow ] = useState( true );

	const deleteBanner = ( e ) => {
		e.preventDefault();
		setShow( false );
	};

	const isApplicable = () => {
		const currentDate = new Date();
		const year = currentDate.getFullYear();

		const start = new Date( `${ year }-11-20T00:00:00` );
		const end = new Date( `${ year }-12-10T23:59:59` );

		return currentDate >= start && currentDate <= end;
	};

	if ( ! isApplicable() ) {
		return null;
	}

	return (
		<div
			className="asnp-m-4 asnp-relative"
			style={ { display: `${ show === false ? 'none' : 'block' }` } }
		>
			<a
				className="focus:asnp-shadow-none focus:asnp-outline-none"
				href="https://asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/"
				target="_blank"
			>
				<img
					className="asnp-rounded"
					src={ IMAGES_URL + 'CB-BF-Badge.png' }
					alt="Black Friday OFFER"
				/>
			</a>
			<button
				type="button"
				className="notice-dismiss focus:asnp-shadow-none focus:asnp-outline-none"
				onClick={ deleteBanner }
			>
				<span className="screen-reader-text">
					{ __( 'Maybe Later', 'easy-sale-badges-for-woocommerce' ) }
				</span>
			</button>
		</div>
	);
};

export default BlackFridayBanner;
