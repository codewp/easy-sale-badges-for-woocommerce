import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from './../../utils/constants';

const BlackFridayBanner = () => {
	const [ show, setShow ] = useState( true );

	const deleteBanner = ( e ) => {
		e.preventDefault();
		setShow( false );
	};

	return (
		<div
			className="asnp-m-4 asnp-relative"
			style={ { display: `${ show === false ? 'none' : 'block' }` } }
		>
			<a
				className="focus:asnp-shadow-none focus:asnp-outline-none"
				href="https://www.asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/"
				target="_blank"
			>
				<img
					src={ IMAGES_URL + 'Black-Friday-badge.png' }
					alt="Black Friday OFFER"
				/>
			</a>
			<button
				type="button"
				className="notice-dismiss focus:asnp-shadow-none focus:asnp-outline-none"
				onClick={ deleteBanner }
			>
				<span className="screen-reader-text">
					{ __( 'Maybe Later', 'asnp-easy-product-bundles' ) }
				</span>
			</button>
		</div>
	);
};
export default BlackFridayBanner;
