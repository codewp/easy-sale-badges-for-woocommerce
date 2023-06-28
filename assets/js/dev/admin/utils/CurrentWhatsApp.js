let currentWhatsApp;

export const setCurrentWhatsApp = ( whatsapp ) => {
	currentWhatsApp = whatsapp;
};

export const getCurrentWhatsApp = () => {
	return currentWhatsApp;
};

export const resetCurrentWhatsApp = () => {
	currentWhatsApp = null;
};

export const getCurrentWhatsAppData = ( currentWhatsApp = null ) => {
	currentWhatsApp = currentWhatsApp || getCurrentWhatsApp();
	if ( ! currentWhatsApp ) {
		return null;
	}

	let data = {
		accounts:
			'undefined' !== typeof currentWhatsApp.accounts &&
			currentWhatsApp.accounts.length
				? currentWhatsApp.accounts
				: [],
	};

	if (
		'undefined' !== typeof currentWhatsApp.id &&
		! isNaN( currentWhatsApp.id * 1 ) &&
		0 < currentWhatsApp.id * 1
	) {
		data.id = currentWhatsApp.id * 1;
	}

	let options = [
		'name',
		'status',
		'buttonText',
		'welcomeMessage',
		'mobile',
		'desktop',
		'pagesType',
		'visitors',
		'timeOnPage',
		'setShowMessengerIcon',
		'closeEffect',
		'showNotificationInBrowser',
		'startChatButton',
		'showBtn',
		'woocommerceItems',
		'woocommerceItemsConditions',
		'excludedPagesUrl',
		'pagesUrl',
		'description',
		'multiHeaderText',
		'useScrollbar',
		'scrollbarHeight',
		'bottom',
	];

	options.map( ( option ) => {
		if ( 'undefined' !== typeof currentWhatsApp[ option ] ) {
			data[ option ] = currentWhatsApp[ option ];
		}
	} );

	return data;
};
