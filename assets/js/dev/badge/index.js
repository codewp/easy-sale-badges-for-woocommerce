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
