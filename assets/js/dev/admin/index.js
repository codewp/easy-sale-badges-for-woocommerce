import { render } from 'react-dom';
import domReady from '@wordpress/dom-ready';
import { HashRouter as Router } from 'react-router-dom';
import App from './views/App';

// Styles.
import './assets/css/tailwind.scss';
import './assets/css/badge.scss';
import 'tippy.js/dist/tippy.css';

domReady( function () {
	render(
		<Router>
			<App />
		</Router>,
		document.getElementById( 'asnp-easy-sale-badge' )
	);
} );
