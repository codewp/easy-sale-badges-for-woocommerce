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

const getTime = () => {
	if ( 0 >= timer.remainingTime ) {
		return;
	}
	const days = Math.floor( remainingTime / ( 1000 * 60 * 60 * 24 ) );
	const hours = Math.floor(
		( remainingTime % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 )
	);
	const minutes = Math.floor(
		( remainingTime % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 )
	);
	const seconds = Math.floor( ( remainingTime % ( 1000 * 60 ) ) / 1000 );

	return {
		days,
		hours,
		minutes,
		seconds,
	};
};

export const timerBadge = ( data ) => {
	const interval = setInterval( () => {
		const updatedResult = getTime();

		if ( updatedResult ) {
			const showTimer = document.getElementById(
				'asnp-esb-timer-badge-' + data.id
			);
			showTimer.style.display = '';
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
