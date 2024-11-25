import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from './../../utils/constants';

const BlackFridayBanner = () => {
	const [ show, setShow ] = useState( true );
	const [ bannerData, setBannerData ] = useState( null );

	const offers = [
		{
			id: 'black_friday',
			startDate: `${ new Date().getFullYear() }-11-20`,
			endDate: `${ new Date().getFullYear() }-11-30`,
			imgSrc: 'Black-Friday-badge.png',
			altText: 'Black Friday OFFER',
			link:
				'https://www.asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/',
		},
		{
			id: 'cyber_monday',
			startDate: `${ new Date().getFullYear() }-12-01`,
			endDate: `${ new Date().getFullYear() }-12-10`,
			imgSrc: 'Cyber-Monday-badge.png',
			altText: 'Cyber Monday OFFER',
			link:
				'https://asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/',
		},
		// Add other offers here
	];

	useEffect( () => {
		const today = new Date();
		const closedUntil = localStorage.getItem( 'bannerClosedUntil' );
		const closedDate = closedUntil ? new Date( closedUntil ) : null;

		// Check if the banner should remain hidden
		if ( closedDate && today < closedDate ) {
			setShow( false );
		} else {
			const activeOffer = offers.find( ( offer ) => {
				const start = new Date( offer.startDate );
				const end = new Date( offer.endDate );
				return today >= start && today <= end;
			} );
			setBannerData( activeOffer || null );
		}
	}, [ offers ] );

	const deleteBanner = ( e ) => {
		e.preventDefault();
		const tomorrow = new Date();
		tomorrow.setDate( tomorrow.getDate() + 1 );
		localStorage.setItem( 'bannerClosedUntil', tomorrow.toISOString() );
		setShow( false );
	};

	if ( ! show || ! bannerData ) {
		return null;
	}

	return (
		<div className="asnp-m-4 asnp-relative">
			<a
				className="focus:asnp-shadow-none focus:asnp-outline-none"
				href={ bannerData.link }
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={ `${ IMAGES_URL }${ bannerData.imgSrc }` }
					alt={ bannerData.altText }
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
