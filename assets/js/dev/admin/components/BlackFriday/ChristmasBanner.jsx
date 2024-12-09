import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../utils/constants';

const ChristmasBanner = () => {
	const [ show, setShow ] = useState( true );

	useEffect( () => {
		const closeBannerDate = localStorage.getItem( 'bannerHiddenUntil' ); //Get banner close date from localStorage
		const nowDate = new Date(); // Get now date and time
		if ( closeBannerDate ) {
			const storedBannerDate = new Date( closeBannerDate ); // Convert string back to Date object
			// Check if less than 24 hours have passed since the banner was closed
			if ( nowDate - storedBannerDate < 24 * 60 * 60 * 1000 ) {
				setShow( false ); // Hide the banner if less than 24 hours
			}
		}
	}, [] );

	const deleteBanner = ( e ) => {
		e.preventDefault();
		setShow( false ); // Hide the banner immediately
		const closeDate = new Date();
		localStorage.setItem( 'bannerHiddenUntil', closeDate.toISOString() ); // Save the banner close date in ISO format
	};

	const isApplicable = () => {
		const currentDate = new Date();
		const year = currentDate.getFullYear();

		const start = new Date( `${ year }-11-20T00:00:00` );
		const end = new Date( `${ year }-12-31T23:59:59` );

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
					src={ IMAGES_URL + 'Christmas-banner-badge.png' }
					alt="Christmas OFFER"
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

export default ChristmasBanner;
