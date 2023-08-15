import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import * as BadgeApi from '@easy-whatsapp/api/badge';
import Menu from '../../components/WidgetMenu/menu/Menu';
import WhatsAppButton from '@easy-whatsapp/base-components/WhatsAppButton';
import { BadgesContext, Action } from '../../contexts/Badges';
import Toggle from '../../components/Toggle';
import { AppContext } from './../../contexts/App';
import { IMAGES_URL } from './../../utils/constants';
import { BadgeContext } from '../../contexts/Badge';

const initialItem = {
	type: 'products',
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
	zIndex: '',
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
	badgeImage: '',
	imgbadge: 0,
	widthBadgeImg: '90',
	zIndexImg: '',
	opacityImg: '1',
	rotationXImg: '0',
	rotationYImg: '0',
	rotationZImg: '0',
	badgeAdv: '',
	imgbadgeAdv: 0,
	mainBg: '#5F536D',
	secondBg: '#25ad25',
	zIndexAdv: '',
	useTimezone: 0,
	timezone: '',
	selectedDateFrom: '',
	selectedDateTo: '',
	woocommerceItemsConditions: 'any',
	items: [ [ { ...initialItem } ] ],
	useTimerBadge: 0,
	badgeTimer: '',
	labelDayTimer: 'Days',
	labelHoursTimer: 'Hours',
	labelMinTimer: 'Min',
	labelSecTimer: 'Sec',
	fontSizeLabelTimer: '24',
	lineHeightLabelTimer: '30',
	bgColorTimer: '#EB144C',
	schedule: [],
};

export default function Badge() {
	const params = useParams();
	const [ badge, setBadge ] = useState( { ...defaultBadge } );
	const { getItem, dispatch } = useContext( BadgesContext );
	const [ template, setTemplate ] = useState(
		params.id && ! isNaN( params.id * 1 ) && 0 < params.id * 1
			? false
			: true
	);
	const { setLoading, setMessage, settings } = useContext( AppContext );
	const [ badgeImageFile, setBadgeImageFile ] = useState( null );

	console.log( badge );

	useEffect( () => {
		setBadgeImageFile( null );
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

	useEffect( () => {
		// badge file deleted.
		if ( '' === badgeImageFile ) {
			updateBadge( 'badgeImage', '' );
			return;
		} else if ( ! badgeImageFile ) {
			return;
		}

		const reader = new FileReader();
		reader.readAsDataURL( badgeImageFile );
		reader.onload = function () {
			updateBadge( 'badgeImage', reader.result );
		};

		return () => reader.abort();
	}, [ badgeImageFile ] );

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
							{ ...group[ index ], [ field ]: [ value ] },
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
			update.items = [];
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

	const save = async () => {
		setLoading( true );

		try {
			let response = await BadgeApi.save( badge );
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
		<BadgeContext.Provider
			value={ {
				badge,
				updateBadge,
				setTemplate,
				addGroup,
				deleteGroup,
				addItem,
				updateItem,
				deleteItem,
				badgeImageFile,
				setBadgeImageFile,
				addSchedule,
				updateSchedule,
				addGroupSchedule,
				updateDaysSchedule,
				deleteSchedule,
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
								to={ `/badge/` }
								className="asnp-py-2 asnp-px-6 asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none asnp-btn-secondary asnp-w-[86.68px] asnp-h-[35.5px]"
							>
								{ __( 'Cancel', 'asnp-easy-whatsapp' ) }
							</Link>
						</div>
						<label className="asnp-block asnp-space-y-1">
							<span className="asnp-field-title">
								{ __( 'Name', 'asnp-easy-whatsapp' ) }
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
								setTemplate={ setTemplate }
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
		</BadgeContext.Provider>
	);
}
