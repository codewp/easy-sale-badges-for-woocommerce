import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';

import './style.scss';

const Cybermonday = () => {
	const [ show, setShow ] = useState( true );

	const deleteBanner = ( e ) => {
		e.preventDefault();
		setShow( false );
	};

	return (
		<a
			className="asnp-m-4 asnp-relative"
			style={ { display: `${ show === false ? 'none' : 'block' }` } }
			href="https://www.asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/"
			target="_blank"
		>
			<div className="asnp-banner">
				<h1>
					{ __(
						'Cyber Monday Exclusive',
						'easy-sale-badges-for-woocommerce'
					) }
				</h1>
				<p className="asnp-highlight">
					{ __(
						'Save up to 75% on WooCommerce Sale Badges and Product Labels',
						'easy-sale-badges-for-woocommerce'
					) }
				</p>
				<p className="asnp-text-limit">
					{ __(
						'Limited Time Only!',
						'easy-sale-badges-for-woocommerce'
					) }
				</p>
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
