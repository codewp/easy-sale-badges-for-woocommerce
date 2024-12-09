import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../utils/constants';

const ChristmasBanner = () => {
	const [ show, setShow ] = useState( true );

	useEffect( () => {
		const neverShow = localStorage.getItem( 'ChristmasBannerNeverShow' );
		if ( neverShow === 'true' ) {
			setShow( false );
		}
	}, [] );

	const deleteBanner = ( e ) => {
		e.preventDefault();
		setShow( false );
	};

	const neverShowAgain = ( e ) => {
		e.preventDefault();
		localStorage.setItem( 'ChristmasBannerNeverShow', 'true' );
		setShow( false );
	};

	const isApplicable = () => {
		const currentDate = new Date();
		const year = currentDate.getFullYear();

		const start = new Date( `${ year }-11-20T00:00:00` );
		const end = new Date( `${ year }-12-31T23:59:59` );

		return currentDate >= start && currentDate <= end;
	};

	if ( ! isApplicable() || ! show ) {
		return null;
	}

	return (
		<a
			className="asnp-m-4 asnp-relative asnp-rounded"
			style={ {
				backgroundImage: `url(${ IMAGES_URL }/Christmas-banner-badge.png)`,
				display: 'block',
				width: '100%',
				height: '168px',
			} }
			href="https://asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="asnp-flex asnp-gap-2 asnp-float-right">
				<button
					type="button"
					className="notice-dismiss focus:asnp-shadow-none focus:asnp-outline-none"
					onClick={ deleteBanner }
				>
					<span className="screen-reader-text">
						{ __(
							'Maybe Later',
							'easy-sale-badges-for-woocommerce'
						) }
					</span>
				</button>
				<button
					type="button"
					className="asnp-relative asnp-top-1 asnp-right-10 asnp-btn-delete asnp-btn focus:asnp-shadow-none focus:asnp-outline-none"
					onClick={ neverShowAgain }
				>
					<span>
						{ __(
							'Never Show Again',
							'easy-sale-badges-for-woocommerce'
						) }
					</span>
				</button>
			</div>
		</a>
	);
};

export default ChristmasBanner;
