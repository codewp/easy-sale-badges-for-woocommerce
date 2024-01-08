import React, { useState, useEffect } from 'react';
import { sprintf } from '@wordpress/i18n';
import { applyCh } from '../../api/ch';
import { getId } from '../../utils';

import './style.scss';

const ID = getId();

export default function Ch() {
	const [ show, setShow ] = useState( true );

	const later = async ( e ) => {
		e.preventDefault();

		setShow( false );
		clearStorage();

		try {
			await applyCh( { action: 'later' } );
		} catch ( error ) {
			console.error( error );
		}
	};

	const dismiss = async ( e ) => {
		e.preventDefault();

		setShow( false );
		clearStorage();

		try {
			await applyCh( { action: 'dismiss' } );
		} catch ( error ) {
			console.error( error );
		}
	};

	const clearStorage = () => {
		localStorage.removeItem( 'asnp_wesb_show_ch' );
		localStorage.removeItem( 'asnp_wesb_ch_id' );
	};

	if ( ! show || ! ID ) {
		return null;
	}

	return (
		<div className="asnp-ch">
			<div className="notice-header">
				<h2 className="notice-header-heading">
					Congratulations You Won!
					<img
						draggable="false"
						role="img"
						className="emoji"
						alt="love"
						width="20"
						height="20"
						src="https://s.w.org/images/core/emoji/14.0.0/svg/1f495.svg"
					></img>
				</h2>
			</div>
			<p
				dangerouslySetInnerHTML={ {
					__html: sprintf(
						"You are eligible to download the %1$s for <strong>Free</strong>, If you like it please %2$s and send us your chance number: <code>%3$s</code> for more information.<br/>It is a limited time offer so don't forget to %2$s and send us your chance number: <code>%3$s</code> ASAP.",
						'<a href="https://www.asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/" target="_blank"><strong>WooCommerce Sale Badges PRO Version</strong></a>',
						'<a href="https://www.asanaplugins.com/support/" target="_blank"><strong>Contact US</strong></a>',
						ID
					),
				} }
			></p>
			<ul>
				<li
					style={ { margin: '0 15px 0 0' } }
					className="notice-link-item"
				>
					<a
						href="https://www.asanaplugins.com/support/"
						target="_blank"
					>
						<span
							style={ { marginRight: '5px' } }
							className="dashicons dashicons-external"
						></span>
						OK, I like it!
					</a>
				</li>
				<li
					style={ { margin: '0 15px 0 0' } }
					className="notice-link-item"
				>
					<a href="#" target="_blank" onClick={ dismiss }>
						<span
							style={ { marginRight: '5px' } }
							className="dashicons dashicons-smiley"
						></span>
						I already did
					</a>
				</li>
				<li
					style={ { margin: '0 15px 0 0' } }
					className="notice-link-item"
				>
					<a
						href="#"
						className="dismiss-btn"
						target="_blank"
						data-later="1"
						onClick={ later }
					>
						<span
							style={ { marginRight: '5px' } }
							className="dashicons dashicons-calendar-alt"
						></span>
						Maybe Later
					</a>
				</li>
				<li
					style={ { margin: '0 15px 0 0' } }
					className="notice-link-item"
				>
					<a
						href="https://wordpress.org/support/plugin/easy-sale-badges-for-woocommerce/"
						target="_blank"
					>
						<span
							style={ { marginRight: '5px' } }
							className="dashicons dashicons-sos"
						></span>
						I need help
					</a>
				</li>
				<li
					style={ { margin: '0 15px 0 0' } }
					className="notice-link-item"
				>
					<a href="#" target="_blank" onClick={ dismiss }>
						<span
							style={ { marginRight: '5px' } }
							className="dashicons dashicons-dismiss"
						></span>
						Never show again
					</a>
				</li>
			</ul>
			<button
				type="button"
				className="notice-dismiss"
				title="Never show again"
				onClick={ dismiss }
			>
				<span className="screen-reader-text">Never show again</span>
			</button>
		</div>
	);
}
