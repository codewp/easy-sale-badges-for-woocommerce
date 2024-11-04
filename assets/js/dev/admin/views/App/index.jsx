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
import { BadgesContextProvider } from '../../contexts/Badges';
import { AppContext } from '../../contexts/App';
import { defaultSettings } from '../../utils/constants';
import Banner from '../../components/Banner';
import * as SettingsApi from '@easy-sale-badges/api/settings';
import BlackFriday from '../../components/BlackFriday';

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
				<div className="asnp-float-right asnp-pt-3 asnp-pr-6">
					<a
						target="_blank"
						href="https://wordpress.org/support/plugin/easy-sale-badges-for-woocommerce/reviews/"
					>
						<button className="asnp-btn asnp-btn-primary asnp-ml-2 asnp-w-[8rem]">
							{ __(
								'5-Star Review',
								'easy-sale-badges-for-woocommerce'
							) }
						</button>
					</a>
					<a
						target="_blank"
						href="https://wordpress.org/support/plugin/easy-sale-badges-for-woocommerce/"
					>
						<button className="asnp-btn asnp-btn-primary asnp-ml-2 asnp-w-[8rem]">
							{ __(
								'Need help?',
								'easy-sale-badges-for-woocommerce'
							) }
						</button>
					</a>
				</div>
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
						{ __( 'Badges', 'easy-sale-badges-for-woocommerce' ) }
					</NavLink>
					<NavLink
						to="/banners"
						className={ ( { isActive } ) =>
							'asnp-nav-tab-item' +
							( isActive ||
							-1 !== location.pathname.search( 'banner/' )
								? ' asnp-nav-tab-active'
								: '' )
						}
					>
						{ __(
							'Notification Bar',
							'easy-sale-badges-for-woocommerce'
						) }
					</NavLink>
					<NavLink
						to="/settings"
						className={ ( { isActive } ) =>
							'asnp-nav-tab-item' +
							( isActive ? ' asnp-nav-tab-active' : '' )
						}
					>
						{ __( 'Settings', 'easy-sale-badges-for-woocommerce' ) }
					</NavLink>
					<NavLink
						to="/blackFriday"
						className={ ( { isActive } ) =>
							'asnp-ew-blFriday asnp-nav-tab-item' +
							( isActive ? ' asnp-nav-tab-active' : '' )
						}
					>
						{ __( 'Black Friday!', 'easy-sale-badges-for-woocommerce' ) }
					</NavLink>
					<a
						target="_blank"
						className="asnp-nav-tab-item asnp-ew-goPro"
						href="https://www.asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/"
					>
						{ __(
							'Go PRO UP to 75% OFF',
							'easy-sale-badges-for-woocommerce'
						) }
					</a>
					<a
						target="_blank"
						className="asnp-nav-tab-item asnp-ew-tryPro"
						href="https://pricing-and-discounts.asanaplugins.com/"
					>
						{ __( 'Try Pro', 'easy-sale-badges-for-woocommerce' ) }
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
				<BadgesContextProvider>
					<Loading loading={ loading } />
					<Snackbar message={ message } setMessage={ setMessage } />
					<TransitionGroup component={ null }>
						<CSSTransition
							key={ location.pathname }
							classNames="asnp-ew-fade"
							timeout={ 500 }
						>
							<Routes location={ location }>
								<Route path="/" element={ <Content /> }>
									<Route index element={ <Badges /> } />
									<Route
										path="badges"
										element={ <Badges /> }
									/>
									<Route
										path="badge/:id"
										element={ <Badge /> }
									/>
									<Route
										path="banners"
										element={ <Banner /> }
									/>
									<Route
										path="settings"
										element={ <Settings /> }
									/>
									<Route
										path="blackFriday"
										element={ <BlackFriday /> }
									/>
								</Route>
							</Routes>
						</CSSTransition>
					</TransitionGroup>
				</BadgesContextProvider>
			</AppContext.Provider>
		</div>
	);
}
