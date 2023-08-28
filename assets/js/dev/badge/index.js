jQuery( window ).on(
	'load berocket_ajax_products_infinite_loaded',
	function () {
		const moveBadge = ( container, badge ) => {
			if ( ! container || ! container.length ) {
				return false;
			}

			if ( ! badge || ! badge.length ) {
				return false;
			}

			let moved = false;
			container.each( function () {
				if ( ! jQuery( this ).is( ':hidden' ) ) {
					let element = jQuery( this );
					element.css( { position: 'relative' } );
					if ( element.parent().hasClass( 'product' ) ) {
						badge
							.removeClass( '.asnp-esb-badge-hidden' )
							.prependTo( element )
							.show();
					} else {
						badge
							.removeClass( '.asnp-esb-badge-hidden' )
							.prependTo( element.parent() )
							.show();
					}
					moved = true;
				}
			} );
			return moved;
		};

		const init = () => {
			let badge = jQuery( '.asnp-esb-badge-hidden' );
			if ( ! badge ) {
				return;
			}

			let container = '';
			if (
				'undefined' !== typeof asnpWesbBadgeData &&
				'undefined' !== typeof asnpWesbBadgeData.singleContainer
			) {
				container = asnpWesbBadgeData.singleContainer.trim();
			}

			let moved = false;
			if ( container.length ) {
				moved = moveBadge( jQuery( container ), badge );
			}

			if ( ! moved ) {
				moved = moveBadge(
					jQuery(
						'.woocommerce-product-gallery:first, .woocommerce-product-gallery--with-images:first'
					),
					badge
				);
			}

			if ( ! moved ) {
				moved = moveBadge( jQuery( '.images' ), badge );
			}
		};

		init();
	}
);

const timerBadge = ( timer ) => {
	const { from, to, now } = timer;

	const toDate = new Date( to );
	const nowDate = new Date( now );
	const timeDifference = toDate - nowDate;

	if ( timeDifference > 0 ) {
		const days = Math.floor( timeDifference / ( 1000 * 60 * 60 * 24 ) );
		const hours = Math.floor(
			( timeDifference % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 )
		);
		const minutes = Math.floor(
			( timeDifference % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 )
		);
		const seconds = Math.floor( ( timeDifference % ( 1000 * 60 ) ) / 1000 );

		const timerData = {
			days,
			hours,
			minutes,
			seconds,
		};

		return timerData;
	}

	return null;
};

const result = timerBadge( {
	from: '2023-08-25',
	to: '2023-08-27',
	now: '2023-08-25',
} );

if ( result ) {
	console.log( 'Timer Data:', result );
} else {
	console.log( 'Timer has expired or is not yet active.' );
}
