jQuery( window ).on(
	'load berocket_ajax_products_infinite_loaded',
	function () {
		const getTime = ( timer ) => {
			if ( 0 >= timer.remainingTime * 1 ) {
				return null;
			}

			timer.remainingTime *= 1;

			const days = Math.floor(
				timer.remainingTime / ( 1000 * 60 * 60 * 24 )
			);
			const hours = Math.floor(
				( timer.remainingTime % ( 1000 * 60 * 60 * 24 ) ) /
					( 1000 * 60 * 60 )
			);
			const minutes = Math.floor(
				( timer.remainingTime % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 )
			);
			const seconds = Math.floor(
				( timer.remainingTime % ( 1000 * 60 ) ) / 1000
			);

			return {
				days,
				hours,
				minutes,
				seconds,
			};
		};

		const timerBadge = ( timer ) => {
			if ( ! timer || ! timer.id ) {
				return;
			}

			const element = document.getElementById(
				'asnp-esb-timer-badge-' + timer.id
			);
			if ( ! element ) {
				return;
			}

			const interval = setInterval( () => {
				const time = getTime( timer );

				if ( time ) {
					const selectTimerDays = element.querySelector(
						'.asnp-esb-daysT'
					);
					selectTimerDays.innerText = time.days;
					const selectTimerHours = element.querySelector(
						'.asnp-esb-hoursT'
					);
					selectTimerHours.innerText = time.hours;
					const selectTimerMin = element.querySelector(
						'.asnp-esb-minT'
					);
					selectTimerMin.innerText = time.minutes;
					const selectTimerSec = element.querySelector(
						'.asnp-esb-secT'
					);
					selectTimerSec.innerText = time.seconds;

					if ( 'none' === element.style.display ) {
						element.style.display = 'block';
					}
				} else {
					clearInterval( interval );
				}
			}, 1000 );
		};

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
			if (
				'undefined' !== typeof asnpWesbBadgeData &&
				'undefined' !== typeof asnpWesbBadgeData.timers &&
				asnpWesbBadgeData.timers.length
			) {
				asnpWesbBadgeData.timers.map( ( timer ) =>
					timerBadge( timer )
				);
			}

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
