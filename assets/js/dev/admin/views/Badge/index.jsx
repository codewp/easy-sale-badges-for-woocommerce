import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import * as BadgeApi from '@easy-sale-badges/api/badge';
import Menu from '../../components/WidgetMenu/menu/Menu';
import { BadgesContext, Action } from '../../contexts/Badges';
import Toggle from '../../components/Toggle';
import { AppContext } from './../../contexts/App';
import { IMAGES_URL } from './../../utils/constants';
import { BadgeContext } from '../../contexts/Badge';
import BadgeButton from '../../components/BadgeButton';

const initialItem = {
	type: 'all_products',
	selectType: 'included',
	items: [],
};

const initialDateTime = {
	type: 'date',
	start: '',
	end: '',
	startTime: '00:00',
	endTime: '00:00',
	date: '',
	days: [],
};

const defaultBadge = {
	title: 'Badge',
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
	zIndex: '5',
	horizontal: 0,
	vertical: 0,
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
	imgbadge: 0,
	imgbadgeAdv: 0,
	useTimerBadge: 0,
	woocommerceItemsConditions: 'any',
	items: [ [ { ...initialItem } ] ],
	schedule: [],
	fontWeightLabel: '600',
	percentageDiscount: 0,
	labelTranslate: {},
	badgeColorShadow: '#807e7e',
	boxShadowWidth: '0',
	showOnProductPage: 1,
	showOnArchivePage: 1,
	cssLabelPosition: 'onImage',
	badgePositionOutofImage: 'flex-start',
	borderWidth: '2',
	borderColor: '#9819fc',
};

export default function Badge() {
	const params = useParams();
	const [ badge, setBadge ] = useState( { ...defaultBadge } );
	const { getItem, dispatch } = useContext( BadgesContext );
	const { setLoading, setMessage } = useContext( AppContext );
	const [ langTrans, setLangTrans ] = useState( '' );
	const [ valueTrans, setValueTrans ] = useState( '' );

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
					let response = await BadgeApi.getItem( id );
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

	const addGroup = () => {
		setBadge( ( prev ) => ( {
			...prev,
			items: [ ...prev.items, [ initialItem ] ],
		} ) );
	};

	const addGroupSchedule = () => {
		setBadge( ( prev ) => ( {
			...prev,
			schedule: [ ...prev.schedule, [ initialDateTime ] ],
		} ) );
	};

	const deleteGroup = ( index ) => {
		setBadge( ( prev ) => {
			const updatedItems = [ ...prev.items ];
			const filteredItems = updatedItems.filter(
				( item, idx ) => idx !== index
			);

			return {
				...prev,
				items: filteredItems,
			};
		} );
	};

	const addItem = ( groupIndex, index ) => {
		setBadge( ( prev ) => {
			const updatedItems = prev.items.map( ( group, i ) =>
				i === groupIndex
					? [
							...group.slice( 0, index ),
							{ ...initialItem },
							...group.slice( index ),
					  ]
					: group
			);
			return { ...prev, items: updatedItems };
		} );
	};

	const addSchedule = ( groupIndex, index ) => {
		setBadge( ( prev ) => {
			const updatedSchedules = prev.schedule.map( ( group, i ) =>
				i === groupIndex
					? [
							...group.slice( 0, index ),
							{ ...initialDateTime },
							...group.slice( index ),
					  ]
					: group
			);
			return { ...prev, schedule: updatedSchedules };
		} );
	};

	const updateDaysSchedule = ( groupIndex, index, field, value ) => {
		setBadge( ( prev ) => {
			const updatedSchedules = prev.schedule.map( ( group, i ) =>
				i === groupIndex
					? [
							...group.slice( 0, index ),
							{ ...group[ index ], [ field ]: value },
							...group.slice( index + 1 ),
					  ]
					: group
			);
			return { ...prev, schedule: updatedSchedules };
		} );
	};

	const updateItem = ( groupIndex, index, field, value ) => {
		let update = { [ field ]: value };
		if ( 'type' === field ) {
			if ( 'stock_status' === value ) {
				update.items = 'instock';
			} else if ( 'is_on_sale' === value ) {
				update.items = 'yes';
			} else {
				update.items = [];
			}
		}

		setBadge( ( prev ) => {
			const updatedItems = prev.items.map( ( group, i ) =>
				i === groupIndex
					? [
							...group.slice( 0, index ),
							{ ...group[ index ], ...update },
							...group.slice( index + 1 ),
					  ]
					: group
			);
			return { ...prev, items: updatedItems };
		} );
	};

	const updateSchedule = ( groupIndex, index, field, value ) => {
		setBadge( ( prev ) => {
			const updatedSchedules = prev.schedule.map( ( group, i ) =>
				i === groupIndex
					? [
							...group.slice( 0, index ),
							{ ...group[ index ], [ field ]: value },
							...group.slice( index + 1 ),
					  ]
					: group
			);
			return { ...prev, schedule: updatedSchedules };
		} );
	};

	const deleteItem = ( groupIndex, index ) => {
		setBadge( ( prev ) => {
			let items = [ ...prev.items ];
			let group = [ ...items[ groupIndex ] ];
			group = group.filter( ( item, idx ) => idx !== index );
			if ( ! group.length ) {
				items = items.filter( ( item, idx ) => idx !== groupIndex );
			} else {
				items[ groupIndex ] = group;
			}
			return {
				...prev,
				items,
			};
		} );
	};

	const deleteSchedule = ( groupIndex, index ) => {
		setBadge( ( prev ) => {
			let schedule = [ ...prev.schedule ];
			let group = [ ...schedule[ groupIndex ] ];
			group = group.filter( ( item, idx ) => idx !== index );
			if ( ! group.length ) {
				schedule = schedule.filter(
					( item, idx ) => idx !== groupIndex
				);
			} else {
				schedule[ groupIndex ] = group;
			}
			return {
				...prev,
				schedule,
			};
		} );
	};

	const addTranslation = ( translations ) => {
		const updatedBadge = {
			...badge,
			labelTranslate: {
				...badge.labelTranslate,
				...translations.reduce( ( acc, { lang, value } ) => {
					if ( ! acc[ lang ] ) {
						acc[ lang ] = value;
					}
					return acc;
				}, {} ),
			},
		};

		setBadge( updatedBadge );
		setValueTrans( '' );
	};

	const updateTranslation = ( langToUpdate, newTranslation ) => {
		const updatedLabelTranslate = {
			...badge.labelTranslate,
			[ langToUpdate ]: newTranslation,
		};

		setBadge( {
			...badge,
			labelTranslate: updatedLabelTranslate,
		} );
	};

	const deleteTranslation = ( langToDelete ) => {
		const updatedLabelTranslate = { ...badge.labelTranslate };

		delete updatedLabelTranslate[ langToDelete ];

		setBadge( {
			...badge,
			labelTranslate: updatedLabelTranslate,
		} );
	};

	const save = async () => {
		try {
			setLoading( true );
			let response = await BadgeApi.save( badge );
			setLoading( false );
			if ( response && response.item ) {
				let update = { ...defaultBadge, ...response.item };
				setBadge( update );
				if ( ! params.id || 'new' === params.id ) {
					dispatch( {
						type: Action.ITEM_ADDED,
						payload: true,
					} );
				} else {
					dispatch( {
						type: Action.UPDATE_ITEM,
						payload: update,
					} );
				}

				setMessage( {
					message: __(
						'Saved Successfully.',
						'easy-sale-badges-for-woocommerce'
					),
					type: 'success',
				} );
			} else {
				setMessage( {
					message: __(
						'Error occurred on saving the Badge.',
						'easy-sale-badges-for-woocommerce'
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

	return (
		<BadgeContext.Provider
			value={ {
				badge,
				updateBadge,
				addGroup,
				deleteGroup,
				addItem,
				updateItem,
				deleteItem,
				addSchedule,
				updateSchedule,
				addGroupSchedule,
				updateDaysSchedule,
				deleteSchedule,
				addTranslation,
				langTrans,
				setLangTrans,
				valueTrans,
				setValueTrans,
				deleteTranslation,
				updateTranslation,
			} }
		>
			<div className="asnp-relative">
				<div>
					<div className="asnp-max-w-lg asnp-grid asnp-grid-cols-1 asnp-gap-6">
						<div className="asnp-badge-actions asnp-space-x-2 ">
							<h1 className="asnp-heading-inline">
								{ __(
									'Badges',
									'easy-sale-badges-for-woocommerce'
								) }
							</h1>
							<button
								className="asnp-btn asnp-btn-primary asnp-w-[86.68px] asnp-h-[35.5px]"
								type="button"
								onClick={ save }
							>
								{ __(
									'Save',
									'easy-sale-badges-for-woocommerce'
								) }
							</button>
							<Link
								to={ `/` }
								className="asnp-py-2 asnp-px-6 asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none asnp-btn-secondary asnp-w-[86.68px] asnp-h-[35.5px]"
							>
								{ __(
									'Cancel',
									'easy-sale-badges-for-woocommerce'
								) }
							</Link>
						</div>
						<label className="asnp-block asnp-space-y-1">
							<span className="asnp-field-title">
								{ __(
									'Name',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<input
								type="text"
								className="asnp-block asnp-text-field"
								value={ badge.title }
								placeholder="Name"
								onChange={ ( e ) =>
									updateBadge( 'title', e.target.value )
								}
							/>
						</label>
						<div className="asnp-space-y-1">
							<label className="asnp-inline-flex asnp-space-x-2 asnp-items-center">
								<span className="asnp-field-title">
									{ __(
										'Status',
										'easy-sale-badges-for-woocommerce'
									) }
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
									'easy-sale-badges-for-woocommerce'
								) }
							</label>
						</div>
						<div className="asnp-flex">
							<div className="asnp-flex">
								<label className="asnp-flex asnp-cursor-pointer">
									<input
										className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4 asnp-border asnp-border-gray-300 asnp-rounded-sm !asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
										type="checkbox"
										id="inlineCheckbox3"
										checked={ 1 == badge.showOnArchivePage }
										onChange={ ( e ) =>
											updateBadge(
												'showOnArchivePage',
												e.target.checked ? 1 : 0
											)
										}
									/>
									<div className="asnp-field-title asnp-mt-[2px]">
										{ __(
											'Display on Archive Page',
											'easy-sale-badges-for-woocommerce-pro'
										) }
									</div>
								</label>
							</div>
							<div className="asnp-ml-6">
								<label className="asnp-flex asnp-cursor-pointer">
									<input
										className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4 asnp-border asnp-border-gray-300 asnp-rounded-sm !asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
										type="checkbox"
										id="inlineCheckbox2"
										checked={ 1 == badge.showOnProductPage }
										onChange={ ( e ) =>
											updateBadge(
												'showOnProductPage',
												e.target.checked ? 1 : 0
											)
										}
									/>
									<div className="asnp-field-title asnp-mt-[2px]">
										{ __(
											'Display on Product Page',
											'easy-sale-badges-for-woocommerce-pro'
										) }
									</div>
								</label>
							</div>
						</div>
					</div>
					<div className="asnp-relative asnp-h-full asnp-w-full asnp-flex asnp-flex-col-reverse md:asnp-flex-row">
						<div className="asnp-relative asnp-w-[68%] asnp-flex asnp-bg-white asnp-border-2 asnp-my-4">
							<Menu badge={ badge } onChange={ updateBadge } />
						</div>
						<div className="asnp-flex">
							<BadgeButton
								IMAGES_URL={ IMAGES_URL }
								badge={ badge }
								updateBadge={ updateBadge }
							/>
						</div>
					</div>
				</div>
			</div>
		</BadgeContext.Provider>
	);
}
