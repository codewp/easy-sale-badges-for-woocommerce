export * from './constants';

export const getContainerElement = (
	whatsapp,
	cssSelector = '',
	after = true
) => {
	if ( ! whatsapp ) {
		return null;
	}

	let el = document.getElementById(
		'asnp-easy-sale-badge' + ( whatsapp.id ? '-' + whatsapp.id : '' )
	);

	return el
		? el
		: createContainerElement( whatsapp, cssSelector || '', after );
};

export const createContainerElement = (
	whatsapp,
	cssSelector = '',
	after = true
) => {
	if ( ! whatsapp ) {
		return null;
	}

	let el = null;
	let type = whatsapp.type || 'sticky';
	if ( 'sticky' === type ) {
		el = document.createElement( 'div' );
		el.id = 'asnp-easy-sale-badge' + ( whatsapp.id ? '-' + whatsapp.id : '' );
		document.body.appendChild( el );
	} else if ( cssSelector.trim().length ) {
		let selected = document.querySelector( cssSelector.trim() );
		if ( ! selected ) {
			return null;
		}

		el = document.createElement( 'div' );
		el.id = 'asnp-easy-sale-badge' + ( whatsapp.id ? '-' + whatsapp.id : '' );
		after ? selected.after( el ) : selected.before( el );
	}

	return el;
};

export const getTimeZone = () => {
	if (
		easyWhatsappData &&
		easyWhatsappData.settings &&
		easyWhatsappData.settings.timezone &&
		'' !== easyWhatsappData.settings.timezone
	) {
		return easyWhatsappData.settings.timezone;
	}

	return 'UTC';
};

export const getSettings = () => {
	if ( easyWhatsappData && easyWhatsappData.settings ) {
		return easyWhatsappData.settings;
	}
	return null;
};
