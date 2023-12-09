import ReactDOM from 'react-dom';
import domReady from '@wordpress/dom-ready';
import { HashRouter as Router } from 'react-router-dom';
import App from './views/App';

// Styles.
import './assets/css/tailwind.scss';
import './assets/css/badge.scss';
import 'tippy.js/dist/tippy.css';
import 'react-datetime/css/react-datetime.css';

domReady( function () {
	if ( 'function' === typeof ReactDOM.createRoot ) {
		ReactDOM.createRoot(
			document.getElementById( 'easy-sale-badges-for-woocommerce' )
		).render(
			<Router>
				<App />
			</Router>
		);
	} else {
		ReactDOM.render(
			<Router>
				<App />
			</Router>,
			document.getElementById( 'easy-sale-badges-for-woocommerce' )
		);
	}
} );
