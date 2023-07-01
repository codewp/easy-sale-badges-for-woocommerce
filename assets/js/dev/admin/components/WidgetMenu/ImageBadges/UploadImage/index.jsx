import React from 'react';
import { ImageUpload } from '../../../ImageUpload';
import { __ } from '@wordpress/i18n';

const UploadImage = ( { badgeImageFile, setBadgeImageFile } ) => {
	return (
		<div className="asnp-ew-line">
			<ImageUpload
				file={ badgeImageFile }
				setFile={ setBadgeImageFile }
			/>
		</div>
	);
};

export default UploadImage;
