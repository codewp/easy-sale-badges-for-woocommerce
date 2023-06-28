/**
 * Convert value to a boolean value.
 *
 * @param {string | number | boolean} value
 *
 * @returns {boolean}
 */
export const toBool = ( value ) => {
	if ( 'boolean' === typeof value ) {
		return value;
	} else if ( 'number' === typeof value ) {
		return 1 === value;
	}

	return (
		'1' === value ||
		'true' === value.toLowerCase() ||
		'yes' === value.toLowerCase() ||
		'enabled' === value.toLowerCase() ||
		'on' === value.toLowerCase()
	);
};

export const isMobile = () => {
	return (
		window.matchMedia( 'only screen and (max-width: 760px)' ).matches &&
		( 'ontouchstart' in window ||
			navigator.maxTouchPoints > 0 ||
			navigator.msMaxTouchPoints > 0 )
	);
};

export const isPhoneNumber = ( number ) => {
	return /^\+?[0-9]{10,13}$/.test( number );
};

export const isGroupChatUrl = ( url ) => {
	return /^https:\/\/chat\.whatsapp\.com\/.+$/.test( url );
};

export const showWhatsAppOnDevice = ( whatsapp ) => {
	if ( ! whatsapp ) {
		return false;
	}

	if ( whatsapp.mobile && 'false' === whatsapp.mobile && isMobile() ) {
		return false;
	}

	if ( whatsapp.desktop && 'false' === whatsapp.desktop && ! isMobile() ) {
		return false;
	}

	return true;
};

const title = document.title;
export const notificationTitle = () => {
	document.title = '(1) ' + title;
};

export const originalTitle = () => {
	document.title = title;
};

export const showWhatsAppToVisitor = ( whatsapp ) => {
	if ( ! whatsapp ) {
		return false;
	}

	let time =
		window.localStorage.getItem( 'asnp_easy_whatsapp_visitor_time' ) ||
		null;

	if ( 'new' === whatsapp.visitors && time ) {
		return false;
	}

	if ( 'returning' === whatsapp.visitors && ! time ) {
		return false;
	}

	return true;
};
