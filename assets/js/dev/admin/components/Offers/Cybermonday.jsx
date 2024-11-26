import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';

import './style.scss';

const Cybermonday = () => {
	const [ show, setShow ] = useState( true );

	useEffect( () => {
		// Check if the banner was dismissed and calculate time elapsed
		const dismissalTime = localStorage.getItem( 'bannerDismissalTime' );
		if ( dismissalTime ) {
			const timeElapsed = Date.now() - parseInt( dismissalTime, 10 );
			// Show the banner again if more than a day has passed
			if ( timeElapsed < 24 * 60 * 60 * 1000 ) {
				setShow( false );
			}
		}
	}, [] );

	const deleteBanner = ( e ) => {
		e.preventDefault();
		setShow( false );
		// Save the dismissal time in localStorage
		localStorage.setItem( 'bannerDismissalTime', Date.now().toString() );
	};

	return (
		<a
			className="asnp-m-4 asnp-relative"
			style={ { display: `${ show === false ? 'none' : 'block' }` } }
			href="https://www.asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/"
			target="_blank"
		>
			<div className="asnp-banner">
				<h1 className="asnp-banner-tp">
					{ __(
						'Cyber Monday Exclusive',
						'easy-sale-badges-for-woocommerce'
					) }
				</h1>
				<p className="asnp-highlight">
					{ __(
						'⚡Save up to 75% on WooCommerce Sale Badges and Product Labels⚡',
						'easy-sale-badges-for-woocommerce'
					) }
				</p>
				<div className="asnp-flex asnp-justify-center">
					<p className="asnp-text-limit">
						{ __(
							'Limited Time Only!',
							'easy-sale-badges-for-woocommerce'
						) }
					</p>
					<button className="asnp-btn asnp-bg-yellow-500 asnp-text-white hover:asnp-text-white hover:asnp-bg-yellow-700 focus:asnp-text-white focus:asnp-outline-none !asnp-ml-4">
						{ __( 'Buy Now!', 'easy-sale-badges-for-woocommerce' ) }
					</button>
				</div>
			</div>
			<button
				type="button"
				className="notice-dismiss focus:asnp-shadow-none focus:asnp-outline-none"
				onClick={ deleteBanner }
			>
				<span className="screen-reader-text">
					{ __( 'Maybe Later', 'asnp-easy-product-bundles' ) }
				</span>
			</button>
		</a>
	);
};

export default Cybermonday;
