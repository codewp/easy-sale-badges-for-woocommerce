import React from 'react';
import BadgeButton from '@easy-whatsapp/base-components/BadgeButton';
import { getSettings, IMAGES_URL } from '../../utils';

export default function App( { whatsapp } ) {
	return (
		<BadgeButton
			whatsapp={ whatsapp }
			site="front"
			settings={ getSettings() }
			IMAGES_URL={ IMAGES_URL }
		/>
	);
}
