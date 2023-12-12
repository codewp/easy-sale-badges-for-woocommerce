import React from 'react';
import { DropProvider } from '../context/DropContext';
import { __ } from '@wordpress/i18n';
import NavMenu from './NavMenu';

const Menu = ( props ) => {
	return (
		<DropProvider>
			<NavMenu
				badge={ props.badge }
				onChange={ props.onChange }
				updateDays={ props.updateDays }
			/>
		</DropProvider>
	);
};

export default Menu;
