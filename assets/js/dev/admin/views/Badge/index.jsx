import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import * as WhatsAppApi from '@easy-whatsapp/api/whatsapp';
import Menu from '../../components/WidgetMenu/menu/Menu';
import WhatsAppButton from '@easy-whatsapp/base-components/WhatsAppButton';
import { WhatsAppsContext, Action } from '../../contexts/WhatsApps';
import Toggle from '../../components/Toggle';
import { AppContext } from './../../contexts/App';
import { WhatsAppContext } from '../../contexts/WhatsApp';
import { IMAGES_URL } from './../../utils/constants';

const defaultBadge = {
	title: 'WhatsApp',
	status: 1,
	badgeLabel: 'Sale',
	textColor: '#ffffff',
	fontSizeText: '14',
	lineHeightText: '30',
	badgeStyles: 'badge1',
	badgeColor: '#a12ca1',
	widthBadge: '60',
	heightBadge: '30',
	topLeftRadius: '3',
	topRightRadius: '3',
	bottomLeftRadius: '3',
	bottomRightRadius: '3',
	zIndex: '',
	horizontal: 'false',
	vertical: 'false',
	badgePositionY: 'top',
	badgePositionX: 'left',
	opacity: '1',
	rotationX: '0',
	rotationY: '0',
	rotationZ: '0',
	badgePositionTop: '0',
	badgePositionBottom: '0',
	badgePositionLeft: '0',
	badgePositionRight: '0',
	useProductFilter: 'false',
	badgeImage: '',
	imgbadge: 'false',
	widthBadgeImg: '90',
	zIndexImg: '',
	opacityImg: '1',
	rotationXImg: '0',
	rotationYImg: '0',
	rotationZImg: '0',
	badgeAdv: '',
	imgbadgeAdv: 'false',
	mainBg: '#5F536D',
	SecondBg: '#25ad25',
	zIndexAdv: '',
	alwaysOnline: 1,
	availability: {
		saturday: {
			available: 'true',
			times: [ { start: '09:00', end: '17:00' } ],
		},
		sunday: {
			available: 'true',
			times: [ { start: '09:00', end: '17:00' } ],
		},
		monday: {
			available: 'true',
			times: [ { start: '09:00', end: '17:00' } ],
		},
		tuesday: {
			available: 'true',
			times: [ { start: '09:00', end: '17:00' } ],
		},
		wednesday: {
			available: 'true',
			times: [ { start: '09:00', end: '17:00' } ],
		},
		thursday: {
			available: 'true',
			times: [ { start: '09:00', end: '17:00' } ],
		},
		friday: {
			available: 'true',
			times: [ { start: '09:00', end: '17:00' } ],
		},
	},
	useTimezone: 0,
	timezone: '',
	selectedDateFrom: '',
	selectedDateTo: '',
	woocommerceItems: [],
	woocommerceItemsOr: [],
	woocommerceItemsConditions: 'any',
};

export default function Badge() {
	const params = useParams();
	const [ badge, setBadge ] = useState( { ...defaultBadge } );
	const { getItem, dispatch } = useContext( WhatsAppsContext );
	const [ template, setTemplate ] = useState(
		params.id && ! isNaN( params.id * 1 ) && 0 < params.id * 1
			? false
			: true
	);
	const { setLoading, setMessage, settings } = useContext( AppContext );

	console.log( badge );

	useEffect( () => {
		if ( ! params.id || 'new' === params.id ) {
			setBadge( { ...defaultBadge } );
			return;
		}

		let id = params.id * 1;
		if ( isNaN( id ) || 0 >= id ) {
			setBadge( { ...defaultBadge } );
			return;
		}

		let item = getItem( id );
		if ( item ) {
			setBadge( { ...defaultBadge, ...item } );
		} else {
			const fetchItem = async ( id ) => {
				setLoading( true );
				try {
					let response = await WhatsAppApi.getItem( id );
					if ( response && response.item ) {
						setBadge( { ...defaultBadge, ...response.item } );
					}
				} catch ( error ) {
					console.log( error.message );
				}
				setLoading( false );
			};
			fetchItem( id );
		}
	}, [ params.id ] );

	const updateBadge = ( field, value ) => {
		setBadge( ( prev ) => ( {
			...prev,
			[ field ]: value,
		} ) );
	};

	const save = async () => {
		if ( ! badge.accounts || ! badge.accounts.length ) {
			setMessage( {
				message: __(
					'Please add an account to the whatsapp.',
					'asnp-easy-whatsapp'
				),
				type: 'error',
			} );
			return;
		}

		setLoading( true );

		try {
			let response = await WhatsAppApi.save( badge );
			setLoading( false );
			if ( response && response.item ) {
				setBadge( { ...defaultBadge, ...response.item } );
				dispatch( {
					type: Action.ADD_ITEM,
					payload: response.item,
				} );
				setMessage( {
					message: __( 'Saved Successfully.', 'asnp-easy-whatsapp' ),
					type: 'success',
				} );
			} else {
				setMessage( {
					message: __(
						'Error occurred on saving the whatsapp.',
						'asnp-easy-whatsapp'
					),
					type: 'error',
				} );
			}
		} catch ( error ) {
			setLoading( false );
			setMessage( {
				message: error.message,
				type: 'error',
			} );
			console.error( error.message );
		}
	};

	const addWooCommerceItem = ( item ) => {
		setBadge( ( prev ) => ( {
			...prev,
			woocommerceItems: [ ...prev.woocommerceItems, item ],
		} ) );
	};
	const addWooCommerceItemOr = ( item ) => {
		setBadge( ( prev ) => ( {
			...prev,
			woocommerceItemsOr: [ ...prev.woocommerceItemsOr, item ],
		} ) );
	};

	const updateWooCommerceItem = ( index, field, value ) => {
		let woocommerceItems = [ ...whatsapp.woocommerceItems ];
		let bundle = { ...woocommerceItems[ index ], [ field ]: value };
		woocommerceItems[ index ] = bundle;
		setBadge( ( prev ) => ( { ...prev, woocommerceItems } ) );
	};
	const updateWooCommerceItemOr = ( index, field, value ) => {
		let woocommerceItemsOr = [ ...whatsapp.woocommerceItemsOr ];
		let bundle = { ...woocommerceItemsOr[ index ], [ field ]: value };
		woocommerceItemsOr[ index ] = bundle;
		setBadge( ( prev ) => ( { ...prev, woocommerceItemsOr } ) );
	};

	const deleteWooCommerceItem = ( index ) => {
		setBadge( ( prev ) => {
			return {
				...prev,
				woocommerceItems: prev.woocommerceItems.filter(
					( item, idx ) => index !== idx
				),
			};
		} );
	};
	const deleteWooCommerceItemOr = ( index ) => {
		setBadge( ( prev ) => {
			return {
				...prev,
				woocommerceItemsOr: prev.woocommerceItemsOr.filter(
					( item, idx ) => index !== idx
				),
			};
		} );
	};

	const addExludedPageUrl = ( value ) => {
		setBadge( ( prev ) => ( {
			...prev,
			excludedPagesUrl: [ ...prev.excludedPagesUrl, value ],
		} ) );
	};

	const deleteExludedPageUrl = ( index ) => {
		setBadge( ( prev ) => {
			return {
				...prev,
				excludedPagesUrl: prev.excludedPagesUrl.filter(
					( item, idx ) => index !== idx
				),
			};
		} );
	};

	const updateExcludedPagesUrl = ( index, value ) => {
		let excludedPagesUrl = [ ...whatsapp.excludedPagesUrl ];
		excludedPagesUrl[ index ] = value;
		setBadge( ( prev ) => ( { ...prev, excludedPagesUrl } ) );
	};

	const addPagesUrl = ( value ) => {
		setBadge( ( prev ) => ( {
			...prev,
			pagesUrl: [ ...prev.pagesUrl, value ],
		} ) );
	};

	const deletePageUrl = ( index ) => {
		setBadge( ( prev ) => {
			return {
				...prev,
				pagesUrl: prev.pagesUrl.filter(
					( item, idx ) => index !== idx
				),
			};
		} );
	};

	const updatePagesUrl = ( index, value ) => {
		let pagesUrl = [ ...whatsapp.pagesUrl ];
		pagesUrl[ index ] = value;
		setBadge( ( prev ) => ( { ...prev, pagesUrl } ) );
	};

	const updateAvailability = ( day, field, value ) => {
		if ( ! badge.availability[ day ] ) {
			return;
		}

		let availability = { ...badge.availability };
		let updateDay = { ...badge.availability[ day ], [ field ]: value };
		availability[ day ] = updateDay;
		setBadge( ( prev ) => ( { ...prev, availability } ) );
	};

	return (
		<WhatsAppContext.Provider
			value={ {
				badge,
				updateBadge,
				updateWooCommerceItem,
				setTemplate,
				addWooCommerceItem,
				deleteWooCommerceItem,
				addExludedPageUrl,
				deleteExludedPageUrl,
				updateExcludedPagesUrl,
				addPagesUrl,
				deletePageUrl,
				updatePagesUrl,
			} }
		>
			<div className="asnp-relative">
				<div>
					<div className="asnp-max-w-lg asnp-grid asnp-grid-cols-1 asnp-gap-6">
						<div className="asnp-whatsapp-actions asnp-space-x-2 ">
							<h1 className="asnp-heading-inline">
								{ __( 'Badges', 'asnp-easy-whatsapp' ) }
							</h1>
							<button
								className="asnp-btn asnp-btn-primary asnp-w-[86.68px] asnp-h-[35.5px]"
								type="button"
								onClick={ save }
							>
								{ __( 'Save', 'asnp-easy-whatsapp' ) }
							</button>
							<Link
								to={ `/whatsapp/` }
								className="asnp-py-2 asnp-px-6 asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none asnp-btn-secondary asnp-w-[86.68px] asnp-h-[35.5px]"
							>
								{ __( 'Cancel', 'asnp-easy-whatsapp' ) }
							</Link>
						</div>
						<label className="asnp-block asnp-space-y-1">
							<span className="asnp-field-title">
								{ __( 'Title', 'asnp-easy-whatsapp' ) }
							</span>
							<input
								type="text"
								className="asnp-block asnp-text-field"
								value={ badge.title }
								placeholder="Title"
								onChange={ ( e ) =>
									updateBadge( 'title', e.target.value )
								}
							/>
						</label>
						<div className="asnp-space-y-1">
							<label className="asnp-inline-flex asnp-space-x-2 asnp-items-center">
								<span className="asnp-field-title">
									{ __( 'Status', 'asnp-easy-whatsapp' ) }
								</span>
								<Toggle
									value={ 1 == badge.status }
									onChange={ ( value ) =>
										updateBadge( 'status', value ? 1 : 0 )
									}
								/>
							</label>
							<label className="asnp-block">
								{ __(
									'Enable or disable it.',
									'asnp-easy-whatsapp'
								) }
							</label>
						</div>
					</div>
					<div className="asnp-relative asnp-h-full asnp-w-full asnp-border-2 asnp-my-4 asnp-flex">
						<div className="asnp-relative asnp-flex md:asnp-w-[50rem] lg:asnp-w-[54rem] asnp-w-[47rem] asnp-bg-white">
							<Menu
								badge={ badge }
								onChange={ updateBadge }
								updateAvailability={ updateAvailability }
								updateWooCommerceItem={ updateWooCommerceItem }
								updateWooCommerceItemOr={
									updateWooCommerceItemOr
								}
								setTemplate={ setTemplate }
								addWooCommerceItem={ addWooCommerceItem }
								deleteWooCommerceItem={ deleteWooCommerceItem }
								addWooCommerceItemOr={ addWooCommerceItemOr }
								deleteWooCommerceItemOr={
									deleteWooCommerceItemOr
								}
								addExludedPageUrl={ addExludedPageUrl }
								deleteExludedPageUrl={ deleteExludedPageUrl }
								updateExcludedPagesUrl={
									updateExcludedPagesUrl
								}
								addPagesUrl={ addPagesUrl }
								deletePageUrl={ deletePageUrl }
								updatePagesUrl={ updatePagesUrl }
							/>
						</div>
						<div className="asnp-w-full asnp-bg-gray-200 asnp-flex">
							<WhatsAppButton
								IMAGES_URL={ IMAGES_URL }
								badge={ badge }
								updateBadge={ updateBadge }
							/>
						</div>
					</div>
				</div>
			</div>
		</WhatsAppContext.Provider>
	);
}
