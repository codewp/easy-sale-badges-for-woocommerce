import React, { useState, useContext } from 'react';
import { __ } from '@wordpress/i18n';
import General from '../../components/Settings/General';
import WooCommerce from '../../components/Settings/Woocommrece';
import * as SettingsApi from '@easy-whatsapp/api/settings';
import { AppContext } from '../../contexts/App';
import Analytics from '../../components/Analytics';
import SinglePage from './../../components/SinglePage';

export default function Settings() {
	const [ activeMenu, setActiveMenu ] = useState( 'general' );
	const { setMessage, settings, setSettings, setLoading } = useContext(
		AppContext
	);
	const updateSettings = ( field, value ) => {
		setSettings( ( prev ) => ( {
			...prev,
			[ field ]: value,
		} ) );
	};

	const save = async () => {
		setLoading( true );
		try {
			let response = await SettingsApi.saveSettings( settings );
			if ( response ) {
				setMessage( {
					message: __( 'Saved Successfully.', 'asnp-easy-whatsapp' ),
					type: 'success',
				} );
			} else {
				throw new Error(
					__(
						'There was an error on saving the settings.',
						'asnp-easy-whatsapp'
					)
				);
			}
		} catch ( error ) {
			console.log( error.message );
			setMessage( { message: error.message, type: 'error' } );
		}
		setLoading( false );
	};

	return (
		<div>
			<div className="asnp-bg-white asnp-pl-[1rem] asnp-pr-[1rem] asnp-pb-[1rem]">
				<nav className="asnp-flex asnp-flex-col sm:asnp-flex-row ">
					<a
						href="#"
						onClick={ ( e ) => {
							e.preventDefault();
							setActiveMenu( 'general' );
						} }
						className={
							'asnp-nav-tab-item' +
							( 'general' === activeMenu
								? ' asnp-nav-tab-active'
								: '' )
						}
					>
						{ __( 'General ', 'asnp-easy-whatsapp' ) }
					</a>
					<a
						href="#"
						onClick={ ( e ) => {
							e.preventDefault();
							setActiveMenu( 'woocommerce' );
						} }
						className={
							'asnp-nav-tab-item' +
							( 'woocommerce' === activeMenu
								? ' asnp-nav-tab-active'
								: '' )
						}
					>
						{ __( 'WooCommerce ', 'asnp-easy-whatsapp' ) }
					</a>
					<a
						href="#"
						onClick={ ( e ) => {
							e.preventDefault();
							setActiveMenu( 'singlepage' );
						} }
						className={
							'asnp-nav-tab-item' +
							( 'singlepage' === activeMenu
								? ' asnp-nav-tab-active'
								: '' )
						}
					>
						{ __( 'Single Page ', 'asnp-easy-whatsapp' ) }
					</a>
					<a
						href="#"
						onClick={ ( e ) => {
							e.preventDefault();
							setActiveMenu( 'analytics' );
						} }
						className={
							'asnp-nav-tab-item' +
							( 'analytics' === activeMenu
								? ' asnp-nav-tab-active'
								: '' )
						}
					>
						{ __( 'Analytics', 'asnp-easy-whatsapp' ) }
					</a>
				</nav>
			</div>
			<div className="asnp-w-full asnp-h-auto asnp-bg-white asnp-p-5">
				{ 'general' === activeMenu && (
					<General
						settings={ settings }
						onChange={ updateSettings }
						onSave={ save }
						openNewTab={ settings.openNewTab }
						urlDesktop={ settings.urlDesktop }
						urlMobile={ settings.urlMobile }
					/>
				) }
				{ 'woocommerce' === activeMenu && (
					<WooCommerce
						onChange={ updateSettings }
						onSave={ save }
						enabled={ settings.woocommerceEnabled }
						btnPosition={ settings.woocommerceBtnPosition }
						cssSelector={ settings.woocommerceCssSelector }
						loopPosition={ settings.loopPosition }
						singlePosition={ settings.singlePosition }
						singleCustomHooks={ settings.singleCustomHooks }
						loopCustomHooks={ settings.loopCustomHooks }
					/>
				) }
				{ 'singlepage' === activeMenu && (
					<SinglePage
						onChange={ updateSettings }
						onSave={ save }
						showBadgeProductPage={ settings.showBadgeProductPage }
						singleContainer={ settings.singleContainer }
					/>
				) }
				{ 'analytics' === activeMenu && <Analytics onSave={ save } /> }
			</div>
		</div>
	);
}
