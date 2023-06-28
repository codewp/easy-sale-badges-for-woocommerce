import { render } from 'react-dom';
import domReady from '@wordpress/dom-ready';
import App from './views/App';
import { getContainerElement } from './utils';

const displayWhatsApp = () => {
	let whatsapps =
		easyWhatsappData && easyWhatsappData.whatsapps
			? easyWhatsappData.whatsapps
			: [];

	if ( ! whatsapps || ! whatsapps.length ) {
		return;
	}

	whatsapps.map( ( whatsapp ) => {
		const container = getContainerElement(
			whatsapp,
			easyWhatsappData.settings.cssSelector || '',
			easyWhatsappData.settings.cssSelectorPosition &&
				'before' === easyWhatsappData.settings.cssSelectorPosition
				? false
				: true
		);
		if ( container ) {
			render( <App whatsapp={ whatsapp }></App>, container );
		}
	} );
};
window.asnpDisplayWhatsApp = window.asnpDisplayWhatsApp || displayWhatsApp;

domReady( function () {
	displayWhatsApp();
} );
