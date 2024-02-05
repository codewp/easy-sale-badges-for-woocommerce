import ReactDOM from 'react-dom';
import domReady from '@wordpress/dom-ready';
import Ch from './components/Ch';

const createElement = () => {
	const heading = document.querySelector( '#wpbody .wrap h1' );
	if ( ! heading ) {
		return null;
	}

	const element = document.createElement( 'div' );
	element.classList.add( 'asnp-ch-container' );

	heading.after( element );

	return element;
};

domReady( function () {
	const element = createElement();
	if ( ! element ) {
		return;
	}

	if ( 'function' === typeof ReactDOM.createRoot ) {
		ReactDOM.createRoot( element ).render( <Ch /> );
	} else {
		ReactDOM.render( <Ch />, element );
	}
} );
