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
	}
);
