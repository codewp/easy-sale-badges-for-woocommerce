import React from 'react';
import WhatsAppButton from '@easy-whatsapp/base-components/WhatsAppButton';
import { getSettings, IMAGES_URL } from '../../utils';

export default function App( { whatsapp } ) {
	return (
		<WhatsAppButton
			whatsapp={ whatsapp }
			site="front"
			settings={ getSettings() }
			IMAGES_URL={ IMAGES_URL }
		/>
	);
}
