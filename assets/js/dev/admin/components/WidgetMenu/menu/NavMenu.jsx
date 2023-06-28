import React, { useContext, useState } from 'react';
import { DropContext } from '../context/DropContext';
import MenuItem from './MenuItem';
import { __ } from '@wordpress/i18n';

const NavMenu = ( props ) => {
	const [ activeStatus, setActiveStatus ] = useState( '1' );
	const [ activeMenu, setActiveMenu ] = useContext( DropContext );

	const setPage = ( status, page ) => {
		setActiveStatus( status );
		setActiveMenu( page );
	};

	return (
		<div className="asnp-bg-white asnp-pl-[1rem] asnp-pr-[1rem] asnp-pb-[1rem]">
			<nav className="asnp-flex asnp-flex-col sm:asnp-flex-row ">
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setPage( '1', 'cssBadges' );
					} }
					className={
						( 'cssBadges' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __( 'CSS Badges', 'asnp-easy-whatsapp' ) }
				</a>
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setPage( '2', 'imageBadges' );
					} }
					className={
						( 'imageBadges' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __( 'Image Badges', 'asnp-easy-whatsapp' ) }
				</a>
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setPage( '3', 'advancedBadges' );
					} }
					className={
						( 'advancedBadges' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __( 'Advanced Badges', 'asnp-easy-whatsapp' ) }
				</a>
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setPage( '4', 'schedule' );
					} }
					className={
						( 'schedule' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __( 'Schedule', 'asnp-easy-whatsapp' ) }
				</a>
				<a
					href="#"
					onClick={ ( e ) => {
						e.preventDefault();
						setPage( '5', 'productsSelection' );
					} }
					className={
						( 'productsSelection' === activeMenu
							? ' asnp-nav-tab-active'
							: '' ) + ' asnp-nav-tab-item'
					}
				>
					{ __( 'Products Selection', 'asnp-easy-whatsapp' ) }
				</a>
			</nav>
			<div className="asnp-w-[38rem] md:asnp-w-[41rem] lg:asnp-w-[45rem]">
				{ activeStatus == 1 && (
					<MenuItem
						badge={ props.badge }
						onChange={ props.onChange }
						updateDays={ props.updateDays }
						addWooCommerceItem={ props.addWooCommerceItem }
						updateWooCommerceItem={ props.updateWooCommerceItem }
						deleteWooCommerceItem={ props.deleteWooCommerceItem }
					/>
				) }
				{ activeStatus == 2 && (
					<MenuItem
						badge={ props.badge }
						onChange={ props.onChange }
						updateDays={ props.updateDays }
						addWooCommerceItem={ props.addWooCommerceItem }
						updateWooCommerceItem={ props.updateWooCommerceItem }
						deleteWooCommerceItem={ props.deleteWooCommerceItem }
						addExludedPageUrl={ props.addExludedPageUrl }
						deleteExludedPageUrl={ props.deleteExludedPageUrl }
						updateExcludedPagesUrl={ props.updateExcludedPagesUrl }
						addPagesUrl={ props.addPagesUrl }
						deletePageUrl={ props.deletePageUrl }
						updatePagesUrl={ props.updatePagesUrl }
					/>
				) }
				{ activeStatus == 3 && (
					<MenuItem
						badge={ props.badge }
						onChange={ props.onChange }
						updateDays={ props.updateDays }
						addWooCommerceItem={ props.addWooCommerceItem }
						updateWooCommerceItem={ props.updateWooCommerceItem }
						deleteWooCommerceItem={ props.deleteWooCommerceItem }
					/>
				) }
				{ activeStatus == 4 && (
					<MenuItem
						badge={ props.badge }
						onChange={ props.onChange }
						updateDays={ props.updateDays }
						addWooCommerceItem={ props.addWooCommerceItem }
						updateWooCommerceItem={ props.updateWooCommerceItem }
						deleteWooCommerceItem={ props.deleteWooCommerceItem }
					/>
				) }
				{ activeStatus == 5 && (
					<MenuItem
						badge={ props.badge }
						onChange={ props.onChange }
						updateDays={ props.updateDays }
						addWooCommerceItem={ props.addWooCommerceItem }
						updateWooCommerceItem={ props.updateWooCommerceItem }
						deleteWooCommerceItem={ props.deleteWooCommerceItem }
					/>
				) }
			</div>
		</div>
	);
};

export default NavMenu;
