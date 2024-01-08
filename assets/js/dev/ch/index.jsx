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

const maybeShow = () => {
	if ( '1' === localStorage.getItem( 'asnp_wesb_show_ch' ) ) {
		return true;
	}

	const max = 4;
	const num = Math.floor( max / 2 );
	const ch = Math.floor( Math.random() * max ) + 1;
	return ch == num;
};

domReady( function () {
	if ( ! maybeShow() ) {
		return;
	}

	localStorage.setItem( 'asnp_wesb_show_ch', '1' );

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
