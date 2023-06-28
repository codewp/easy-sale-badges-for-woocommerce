import React from 'react';
import { DropProvider } from '../context/DropContext';
import { __ } from '@wordpress/i18n';
import NavMenu from './NavMenu';

const Menu = ( props ) => {
	return (
		<DropProvider>
			<div>
				<div className="asnp-w-25 asnp-h-10 asnp-p-0">
					<button
						className="asnp-font-semibold asnp-shadow-md focus:asnp-shadow-none asnp-h-8 asnp-btn-custom asnp-bg-green-500 hover:asnp-bg-green-500 asnp-w-24 "
						type="button"
						onClick={ () => {
							props.setTemplate( true );
						} }
					>
						{ __( 'Template', 'asnp-easy-whatsapp' ) }
					</button>
				</div>
				<NavMenu
					badge={ props.badge }
					onChange={ props.onChange }
					updateAvailability={props.updateAvailability}
					updateDays={ props.updateDays }
					addWooCommerceItem={ props.addWooCommerceItem }
					addWooCommerceItemOr={ props.addWooCommerceItemOr }
					updateWooCommerceItem={ props.updateWooCommerceItem }
					updateWooCommerceItemOr={ props.updateWooCommerceItemOr }
					deleteWooCommerceItem={ props.deleteWooCommerceItem }
					deleteWooCommerceItemOr={ props.deleteWooCommerceItemOr }
					addExludedPageUrl={ props.addExludedPageUrl }
					deleteExludedPageUrl={ props.deleteExludedPageUrl }
					updateExcludedPagesUrl={ props.updateExcludedPagesUrl }
					addPagesUrl={ props.addPagesUrl }
					deletePageUrl={ props.deletePageUrl }
					updatePagesUrl={ props.updatePagesUrl }
				/>
			</div>
		</DropProvider>
	);
};

export default Menu;
