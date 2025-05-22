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
					badge
						.removeClass( '.asnp-esb-badge-hidden' )
						.prependTo( element )
						.show();
					moved = true;
				}
			} );
			return moved;
		};

		const getTime = ( remainingTime ) => {
			if ( 0 >= remainingTime * 1 ) {
				return null;
			}

			remainingTime *= 1;

			const days = Math.floor( remainingTime / ( 1000 * 60 * 60 * 24 ) );
			const hours = Math.floor(
				( remainingTime % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 )
			);
			const minutes = Math.floor(
				( remainingTime % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 )
			);
			const seconds = Math.floor(
				( remainingTime % ( 1000 * 60 ) ) / 1000
			);

			return {
				days: String( days ).padStart( 2, '0' ),
				hours: String( hours ).padStart( 2, '0' ),
				minutes: String( minutes ).padStart( 2, '0' ),
				seconds: String( seconds ).padStart( 2, '0' ),
			};
		};

		const timerBadge = ( timer ) => {
			if ( ! timer || ! timer.id ) {
				return;
			}

			const elements = document.getElementsByClassName(
				'asnp-esb-productBadgeTimer-' + timer.id
			);
			if ( ! elements.length ) {
				return;
			}

			for ( let i = 0, max = elements.length; i < max; i++ ) {
				let remainingTime;
				let remainingTimeProgress = 0;

				if ( timer.timerMode === 'evergreen' ) {
					const storedEndTimeKey = `everGreenEndTime_${ timer.id }`;
					const storedStartTimeKey = `everGreenStartTime_${ timer.id }`;
					const now = Date.now();
					let storedEndTime = localStorage.getItem(
						storedEndTimeKey
					);
					let storedStartTime = localStorage.getItem(
						storedStartTimeKey
					);
					const evergreenDuration = timer.evergreen; // Already in milliseconds

					if (
						storedEndTime &&
						now < parseInt( storedEndTime, 10 )
					) {
						remainingTime = parseInt( storedEndTime, 10 ) - now;
						if (
							storedStartTime &&
							now > parseInt( storedEndTime, 10 )
						) {
							remainingTimeProgress =
								now - parseInt( storedEndTime, 10 );
						}
					} else {
						const newEndTime = now + evergreenDuration;
						remainingTime = evergreenDuration;
						localStorage.setItem( storedEndTimeKey, newEndTime );
						localStorage.setItem( storedStartTimeKey, now );
					}
				} else {
					remainingTime = timer.remainingTime * 1;
					remainingTimeProgress = timer.remainingTimeProgress * 1;
				}

				const element = elements[ i ];
				const interval = setInterval( () => {
					const time = getTime( remainingTime );
					remainingTime -= 1000;
					remainingTimeProgress += 1000;

					if ( ! time ) {
						if (
							'evergreen' === timer?.timerMode &&
							'repeat' === timer?.evergreenOption
						) {
							const now = Date.now();
							const newEndTime = now + timer.evergreen;
							remainingTime = timer.evergreen;
							remainingTimeProgress = 0;
							localStorage.setItem(
								storedEndTimeKey,
								newEndTime
							);
							localStorage.setItem( storedStartTimeKey, now );
						} else {
							clearInterval( interval );
							element.style.display = 'none';
							return;
						}
					} else {
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

						const progressBar = element.querySelector(
							'.asnp-esb-timerStyle2ProgreesBarCalc'
						);
						if ( progressBar ) {
							const totalDuration =
								timer.timerMode === 'evergreen'
									? timer.evergreen
									: new Date(
											timer.dateTo.replace( /-/g, '/' )
									  ) -
									  new Date(
											timer.dateFrom.replace( /-/g, '/' )
									  );
							const progressPercentage =
								100 -
								( remainingTimeProgress / totalDuration ) * 100;
							progressBar.style.width = progressPercentage + '%';
						}

						if ( 'none' === element.style.display ) {
							element.style.display = 'block';
						}
					}
				}, 1000 );
			}
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
				container = getImageContainer();
				moved = moveBadge( jQuery( container ), badge );
			}

			if ( ! moved ) {
				moved = moveBadge( jQuery( '.images' ), badge );
			}
		};

		const initTimers = () => {
			if (
				'undefined' !== typeof asnpWesbBadgeData &&
				'undefined' !== typeof asnpWesbBadgeData.timers &&
				asnpWesbBadgeData.timers.length
			) {
				asnpWesbBadgeData.timers.map( ( timer ) =>
					timerBadge( timer )
				);
			}
		};

		const getImageContainer = () => {
			const themes = {
				porto: '.woocommerce-product-gallery:first .product-images',
			};

			const stylesheet = asnpWesbBadgeData?.stylesheet;
			const template = asnpWesbBadgeData?.template;

			if ( stylesheet && themes[ stylesheet ] ) {
				if ( jQuery( themes[ stylesheet ] ).length ) {
					return themes[ stylesheet ];
				}
			}

			if ( template && themes[ template ] ) {
				if ( jQuery( themes[ template ] ).length ) {
					return themes[ template ];
				}
			}

			if (
				jQuery( '.woocommerce-product-gallery .flex-viewport' ).length
			) {
				return '.woocommerce-product-gallery .flex-viewport';
			} else {
				return '.woocommerce-product-gallery:first, .woocommerce-product-gallery--with-images:first';
			}
		};

		init();
		initTimers();
	}
);
