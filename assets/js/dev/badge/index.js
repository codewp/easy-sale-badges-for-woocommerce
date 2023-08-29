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

		let timerData = {
			days,
			hours,
			minutes,
			seconds,
		};

		return timerData;
	}

	return null;
};

export const updateTimer = ( data ) => {
	const interval = setInterval( () => {
		const updatedResult = timerBadge( {
			from: data.fromTimer,
			to: data.toTimer,
			now: new Date().toISOString(),
		} );

		if ( updatedResult ) {
			const selectTimerDays = document.querySelector( '.asnp-esb-daysT' );
			selectTimerDays.innerText = updatedResult.days;
			const selectTimerHours = document.querySelector(
				'.asnp-esb-hoursT'
			);
			selectTimerHours.innerText = updatedResult.hours;
			const selectTimerMin = document.querySelector( '.asnp-esb-minT' );
			selectTimerMin.innerText = updatedResult.minutes;
			const selectTimerSec = document.querySelector( '.asnp-esb-secT' );
			selectTimerSec.innerText = updatedResult.seconds;
		} else {
			clearInterval( interval );
		}
	}, 1000 );
};
updateTimer( {
	fromTimer: '2023-08-29',
	toTimer: '2023-08-31 20:00',
} );
