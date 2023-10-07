import React, { useContext, useState } from 'react';
import { DropContext } from '../context/DropContext';
import MenuItem from './MenuItem';
import { __ } from '@wordpress/i18n';
import { LockClosedIcon } from '@heroicons/react/solid';

const NavMenu = ( props ) => {
	const [ activeStatus, setActiveStatus ] = useState( '1' );
	const [ activeMenu, setActiveMenu ] = useContext( DropContext );

	const setPage = ( status, page ) => {
		setActiveStatus( status );
		setActiveMenu( page );
	};

	return (
		<div className="asnp-bg-white asnp-p-4">
			<nav className="asnp-flex asnp-flex-col sm:asnp-flex-row ">
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setPage( '1', 'cssLabel' );
					} }
					className={
						( 'cssLabel' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __( 'CSS Labels', 'asnp-easy-sale-badge' ) }
				</a>

				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setPage( '2', 'schedule' );
					} }
					className={
						( 'schedule' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __( 'Schedule', 'asnp-easy-sale-badge' ) }
				</a>
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setPage( '3', 'products' );
					} }
					className={
						( 'products' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __( 'Products', 'asnp-easy-sale-badge' ) }
				</a>
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setPage( '4', 'imageLabels' );
					} }
					className={
						( 'imageLabels' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) +
						' asnp-nav-tab-item asnp-flex asnp-text-red-600'
					}
				>
					{ __( 'Image Labels', 'asnp-easy-sale-badge' ) }
					<div className="asnp-ml-[0.3rem]">
						{ __( '(Pro)', 'asnp-easy-sale-badge' ) }
					</div>
					<LockClosedIcon width="20" height="20" />
				</a>
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setPage( '5', 'advancedLabels' );
					} }
					className={
						( 'advancedLabels' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) +
						' asnp-nav-tab-item asnp-flex asnp-text-red-600'
					}
				>
					{ __( 'Advanced Labels', 'asnp-easy-sale-badge' ) }
					<div className="asnp-ml-[0.3rem]">
						{ __( '(Pro)', 'asnp-easy-sale-badge' ) }
					</div>
					<LockClosedIcon width="20" height="20" />
				</a>
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setPage( '6', 'timer' );
					} }
					className={
						( 'timer' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) +
						' asnp-nav-tab-item asnp-flex asnp-text-red-600'
					}
				>
					{ __( 'Timer', 'asnp-easy-sale-badge' ) }
					<div className="asnp-ml-[0.3rem]">
						{ __( '(Pro)', 'asnp-easy-sale-badge' ) }
					</div>
						<LockClosedIcon width="20" height="20" />
				</a>
			</nav>
			<div className="asnp-w-[45rem] md:asnp-w-[48rem] lg:asnp-w-[52rem]">
				<MenuItem
					badge={ props.badge }
					onChange={ props.onChange }
					updateDays={ props.updateDays }
					addWooCommerceItem={ props.addWooCommerceItem }
					updateWooCommerceItem={ props.updateWooCommerceItem }
					deleteWooCommerceItem={ props.deleteWooCommerceItem }
					addWooCommerceItemOr={ props.addWooCommerceItemOr }
					updateWooCommerceItemOr={ props.updateWooCommerceItemOr }
					deleteWooCommerceItemOr={ props.deleteWooCommerceItemOr }
					addExludedPageUrl={ props.addExludedPageUrl }
					deleteExludedPageUrl={ props.deleteExludedPageUrl }
					updateExcludedPagesUrl={ props.updateExcludedPagesUrl }
					addPagesUrl={ props.addPagesUrl }
					deletePageUrl={ props.deletePageUrl }
					updatePagesUrl={ props.updatePagesUrl }
					updateAvailability={ props.updateAvailability }
					activeStatus={ activeStatus }
				/>
			</div>
		</div>
	);
};

export default NavMenu;
