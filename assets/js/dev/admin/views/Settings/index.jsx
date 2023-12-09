import React, { useState, useContext } from 'react';
import { __ } from '@wordpress/i18n';
import General from '../../components/Settings/General';
import * as SettingsApi from '@easy-sale-badges/api/settings';
import { AppContext } from '../../contexts/App';
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
					message: __(
						'Saved Successfully.',
						'easy-sale-badges-for-woocommerce'
					),
					type: 'success',
				} );
			} else {
				throw new Error(
					__(
						'There was an error on saving the settings.',
						'easy-sale-badges-for-woocommerce'
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
						{ __( 'General ', 'easy-sale-badges-for-woocommerce' ) }
					</a>
					<a
						href="#"
						onClick={ ( e ) => {
							e.preventDefault();
							setActiveMenu( 'productPage' );
						} }
						className={
							'asnp-nav-tab-item' +
							( 'productPage' === activeMenu
								? ' asnp-nav-tab-active'
								: '' )
						}
					>
						{ __( 'Product Page', 'easy-sale-badges-for-woocommerce' ) }
					</a>
				</nav>
			</div>
			<div className="asnp-w-full asnp-h-auto asnp-bg-white asnp-p-5">
				{ 'general' === activeMenu && (
					<General
						onChange={ updateSettings }
						onSave={ save }
						loopPosition={ settings.loopPosition }
						singlePosition={ settings.singlePosition }
						singleCustomHooks={ settings.singleCustomHooks }
						loopCustomHooks={ settings.loopCustomHooks }
						timerPosition={ settings.timerPosition }
						hideWooCommerceBadges={ settings.hideWooCommerceBadges }
					/>
				) }
				{ 'productPage' === activeMenu && (
					<SinglePage
						onChange={ updateSettings }
						onSave={ save }
						showBadgeProductPage={ settings.showBadgeProductPage }
						singleContainer={ settings.singleContainer }
					/>
				) }
			</div>
		</div>
	);
}
