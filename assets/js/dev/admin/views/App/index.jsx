import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Content from './Content';
import Badges from '../Badges';
import Badge from '../../views/Badge';
import Settings from '../../views/Settings';
import Loading from '../../components/Loading';
import Snackbar from './../../components/Snackbar';
import { WhatsAppsContextProvider } from '../../contexts/WhatsApps';
import { AppContext } from '../../contexts/App';
import { defaultSettings } from '../../utils/constants';
import * as SettingsApi from '@easy-whatsapp/api/settings';

export default function App() {
	const location = useLocation();
	const [ loading, setLoading ] = useState( false );
	const [ message, setMessage ] = useState( null );
	const [ settings, setSettings ] = useState( { ...defaultSettings } );

	useEffect( () => {
		setLoading( true );
		SettingsApi.getSettings()
			.then( ( response ) => {
				if ( response ) {
					setSettings( { ...defaultSettings, ...response } );
				}
				setLoading( false );
			} )
			.catch( ( error ) => {
				console.error( error );
				setLoading( false );
			} );
	}, [] );

	return (
		<div className="asnp-app">
			<div className="asnp-bg-white">
				<nav className="asnp-flex asnp-flex-col sm:asnp-flex-row">
					<NavLink
						to="/"
						className={ ( { isActive } ) =>
							'asnp-nav-tab-item' +
							( isActive ||
							-1 !== location.pathname.search( 'badge/' )
								? ' asnp-nav-tab-active'
								: '' )
						}
					>
						{ __( 'Badges', 'asnp-easy-whatsapp' ) }
					</NavLink>
					<NavLink
						to="/settings"
						className={ ( { isActive } ) =>
							'asnp-nav-tab-item' +
							( isActive ? ' asnp-nav-tab-active' : '' )
						}
					>
						{ __( 'Settings', 'asnp-easy-whatsapp' ) }
					</NavLink>
					<a
						target="_blank"
						href="https://www.asanaplugins.com/product/whatsapp-chat-wordpress?utm_source=whatsapp-chat-wordpress&utm_campaign=go-pro&utm_medium=link"
						className="asnp-nav-tab-item asnp-ew-goPro"
					>
						{ __( 'Go Pro', 'asnp-easy-whatsapp' ) }
					</a>
				</nav>
			</div>
			<AppContext.Provider
				value={ {
					loading,
					setLoading,
					message,
					setMessage,
					settings,
					setSettings,
				} }
			>
					<WhatsAppsContextProvider>
						<Loading loading={ loading } />
						<Snackbar
							message={ message }
							setMessage={ setMessage }
						/>
						<TransitionGroup component={ null }>
							<CSSTransition
								key={ location.pathname }
								classNames="asnp-ew-fade"
								timeout={ 500 }
							>
								<Routes location={ location }>
									<Route path="/" element={ <Content /> }>
										<Route
											index
											element={ <Badges /> }
										/>
										<Route
											path="badge"
											element={ <Badges /> }
										/>
										<Route
											path="badge/:id"
											element={ <Badge /> }
										/>
										<Route
											path="settings"
											element={ <Settings /> }
										/>
									</Route>
								</Routes>
							</CSSTransition>
						</TransitionGroup>
					</WhatsAppsContextProvider>
			</AppContext.Provider>
		</div>
	);
}
