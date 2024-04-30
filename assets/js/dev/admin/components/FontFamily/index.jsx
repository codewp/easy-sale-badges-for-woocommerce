import React from 'react';
import { __ } from '@wordpress/i18n';

const FontFamily = ( props ) => {
	return (
		<select
			className="asnp-select-field !asnp-w-40 asnp-mt-2"
			value={ props.fontFamilyLabel }
			onChange={ ( e ) =>
				props.onChange( 'fontFamilyLabel', e.target.value )
			}
		>
			<option value="">
				{ __( 'Default', 'easy-sale-badges-for-woocommerce' ) }
			</option>
			<option value="ABeeZee">ABeeZee</option>
			<option value="Abel">Abel</option>
			<option value="Abhaya Libre">Abhaya Libre</option>
			<option value="Abril Fatface">Abril Fatface</option>
			<option value="Amatic SC">Amatic SC</option>
			<option value="Amethysta">Amethysta</option>
			<option value="Amiko">Amiko</option>
			<option value="Amiri">Amiri</option>
		</select>
	);
};

export default FontFamily;
