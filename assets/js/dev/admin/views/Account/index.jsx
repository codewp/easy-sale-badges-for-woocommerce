import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import * as AccountApi from '@easy-whatsapp/api/account';
import Toggle from '../../components/Toggle';
import AvailabilityDay from './../../components/AvailabilityDay';
import AccountsProfile from '../../components/AccountsProfile';
import { IMAGES_URL } from '../../utils/constants';
import { AppContext } from './../../contexts/App';
import { AccountsContext, Action } from '../../contexts/Accounts';
import { WhatsAppsContext, fetchItemsIfNeeded } from '../../contexts/WhatsApps';
import Tippy from '@tippyjs/react';
import TimeZoneAccount from '../../components/TimeZoneAccount';
import { isPhoneNumber, isGroupChatUrl } from '@easy-whatsapp/base/utils';

const defaultAccount = {
	type: 'whatsapp',
	name: '',
	accountNumber: '',
	textMessage: '',
	caption: 'minutes',
	customCaption: '',
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
	avatar: IMAGES_URL + 'male3.jpg',
	timezone: whatsappData.timezone,
	useTimezone: 0,
};

const Account = () => {
	const params = useParams();
	const [ account, setAccount ] = useState( { ...defaultAccount } );
	const [ avatarFile, setAvatarFile ] = useState( null );
	const [ avatarType, setAvatarType ] = useState( 'image' );
	const { getItem, dispatch } = useContext( AccountsContext );
	const { setLoading, setMessage } = useContext( AppContext );
	const whatsappsContext = useContext( WhatsAppsContext );
	const [ selected, setSelected ] = useState( 1 );
	const [ selectedTimezone, setSelectedTimezone ] = useState( 1 );

	useEffect( () => {
		setAvatarFile( null );
		if ( ! params.id || 'new' === params.id ) {
			setAccount( { ...defaultAccount } );
			return;
		}

		let id = params.id * 1;
		if ( isNaN( id ) || 0 >= id ) {
			setAccount( { ...defaultAccount } );
			return;
		}

		let item = getItem( id );
		if ( item ) {
			setAccount( { ...defaultAccount, ...item } );
		} else {
			const fetchItem = async ( id ) => {
				setLoading( true );
				try {
					let response = await AccountApi.getAccount( id );
					if ( response && response.item ) {
						setAccount( { ...defaultAccount, ...response.item } );
					}
				} catch ( error ) {
					console.log( error.message );
				}
				setLoading( false );
			};
			fetchItem( id );
		}
	}, [ params.id ] );

	useEffect( () => {
		// Avatar file deleted.
		if ( '' === avatarFile ) {
			updateAccount( 'avatar', '' );
			return;
		} else if ( ! avatarFile ) {
			return;
		}

		const reader = new FileReader();
		reader.readAsDataURL( avatarFile );
		reader.onload = function () {
			updateAccount( 'avatar', reader.result );
		};

		return () => reader.abort();
	}, [ avatarFile ] );

	const updateAccount = ( field, value ) => {
		setAccount( ( prev ) => ( {
			...prev,
			[ field ]: value,
		} ) );
	};

	const checkRequiredFields = () => {
		if ( ! account.name || '' === account.name.trim() ) {
			setMessage( {
				message: __(
					'Account name is required.',
					'asnp-easy-whatsapp'
				),
				type: 'error',
			} );
			return false;
		}

		if ( ! account.accountNumber || '' === account.accountNumber.trim() ) {
			setMessage( {
				message: __(
					'Account number is required.',
					'asnp-easy-whatsapp'
				),
				type: 'error',
			} );
			return false;
		}

		if (
			! isPhoneNumber( account.accountNumber ) &&
			! isGroupChatUrl( account.accountNumber )
		) {
			setMessage( {
				message: __(
					'Please enter a valid phone number or group chat url.',
					'asnp-easy-whatsapp'
				),
				type: 'error',
			} );
			return false;
		}

		return true;
	};

	const save = async () => {
		if ( ! checkRequiredFields() ) {
			return;
		}

		setLoading( true );

		let data = { ...account };
		if ( avatarFile ) {
			data.easyWhatsappAccountAvatarFile = avatarFile;
		}

		try {
			let response = await AccountApi.saveAccount( data );
			if ( response && response.item ) {
				setAccount( { ...defaultAccount, ...response.item } );
				setAvatarFile( null );
				setAvatarType( 'image' );
				dispatch( {
					type: Action.ADD_ITEM,
					payload: response.item,
				} );
				// Account updated.
				if ( data.id ) {
					await fetchItemsIfNeeded(
						whatsappsContext.state,
						whatsappsContext.dispatch,
						{ force: true }
					);
				}
				setLoading( false );
				setMessage( {
					message: __( 'Saved Successfully.', 'asnp-easy-whatsapp' ),
					type: 'success',
				} );
			} else {
				setLoading( false );
				setMessage( {
					message: __(
						'Error occurred on saving the account.',
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

	let timeItems = [];
	for ( let dayName in account.availability ) {
		timeItems.push(
			<AvailabilityDay
				key={ dayName }
				name={ dayName }
				day={ account.availability[ dayName ] }
			/>
		);
	}

	return (
		<div className="asnp-relative">
			<div className="asnp-max-w-lg asnp-grid asnp-grid-cols-1 asnp-gap-6">
				<div className="asnp-whatsapp-actions asnp-space-x-2 ">
					<h1 className="asnp-heading-inline">
						{ __( 'Account', 'asnp-easy-whatsapp' ) }
					</h1>
					<button
						className="asnp-btn asnp-btn-primary asnp-w-[86.68px] asnp-h-[35.5px]"
						type="button"
						onClick={ save }
					>
						{ __( 'Save', 'asnp-easy-whatsapp' ) }
					</button>
					<Link
						to={ `/` }
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
						value={ account.name }
						onChange={ ( e ) =>
							updateAccount( 'name', e.target.value )
						}
					/>
				</label>
				<label className="asnp-block asnp-space-y-1">
					<span className="asnp-field-title">
						{ __(
							'Account Number or group chat URL',
							'asnp-easy-whatsapp'
						) }
					</span>
					<input
						type="text"
						className="asnp-block asnp-text-field"
						value={ account.accountNumber }
						onChange={ ( e ) =>
							updateAccount( 'accountNumber', e.target.value )
						}
					/>
				</label>
				<label className="asnp-block asnp-space-y-1">
					<div className="asnp-flex">
						<span className="asnp-field-title">
							{ __(
								'Text Message to WhatsApp',
								'asnp-easy-whatsapp'
							) }
						</span>
						<Tippy
							interactive={ true }
							placement={ 'top-start' }
							content={
								<div className="asnp-h-auto asnp-w-[15rem] asnp-bg-green-500 asnp-rounded-lg asnp-p-[0.4rem] asnp-text-white asnp-rounded-bl-none asnp-ml-3">
									{ __(
										'A predefined text message that user can send to you when contacting with WhatsApp',
										'asnp-easy-whatsapp'
									) }
								</div>
							}
						>
							<img src={ IMAGES_URL + 'quest.svg' } />
						</Tippy>
					</div>
					<textarea
						className="
        asnp-form-control
        asnp-block
        asnp-w-full
        asnp-px-3
        asnp-py-1.5
        asnp-text-base
        asnp-font-normal
        asnp-text-gray-700
        asnp-bg-white asnp-bg-clip-padding
        asnp-border asnp-border-solid asnp-border-gray-300 asnp-rounded asnp-m-0 focus:asnp-text-gray-700 focus:asnp-bg-white hover:asnp-border-b-2  hover:asnp-border-b-indigo-400 focus:asnp-border-b-2 focus:asnp-border-b-indigo-600 focus:asnp-shadow-none"
						value={ account.textMessage }
						onChange={ ( e ) =>
							updateAccount( 'textMessage', e.target.value )
						}
						id="exampleFormControlTextarea1"
						rows="3"
					></textarea>
				</label>
				<label className="asnp-block asnp-space-y-1">
					<span className="asnp-field-title">
						{ __( 'Caption', 'asnp-easy-whatsapp' ) }
					</span>
					<select
						className="asnp-block asnp-select-field"
						value={ account.caption }
						onChange={ ( e ) => {
							updateAccount( 'caption', e.target.value );
						} }
					>
						<option value="minutes">
							{ __(
								'Typically replies in minutes',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="few_hours">
							{ __(
								'Typically replies in a few hours',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="within_hours">
							{ __(
								'Typically replies within an hour',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="instantly">
							{ __(
								'Typically replies instantly',
								'asnp-easy-whatsapp'
							) }
						</option>
						<option value="custom">
							{ __( 'Custom caption', 'asnp-easy-whatsapp' ) }
						</option>
					</select>
				</label>
				{ 'custom' === account.caption && (
					<label className="asnp-block asnp-space-y-1">
						<span className="asnp-field-title">
							{ __( 'Custom Caption', 'asnp-easy-whatsapp' ) }
						</span>
						<input
							type="text"
							className="asnp-block asnp-text-field"
							value={ account.customCaption }
							onChange={ ( e ) =>
								updateAccount( 'customCaption', e.target.value )
							}
						/>
					</label>
				) }

				<AccountsProfile
					onChange={ updateAccount }
					avatarFile={ avatarFile }
					setAvatarFile={ setAvatarFile }
					avatar={ account.avatar }
					avatarType={ avatarType }
					setAvatarType={ setAvatarType }
					accountSelectPicture={ account.accountSelectPicture }
				/>
				<div className="asnp-space-y-1">
					<label className="asnp-inline-flex asnp-space-x-2 asnp-items-center">
						<h2 className="asnp-field-title">
							{ __(
								'Always available online',
								'asnp-easy-whatsapp'
							) }
						</h2>
						<Toggle
							value={ 1 == selected }
							onChange={ ( value ) =>
								setSelected( value ? 1 : 0 )
							}
						/>
					</label>
					<label className="asnp-block">
						{ __( 'Enable or disable it.', 'asnp-easy-whatsapp' ) }
					</label>
				</div>
			</div>
			{ 0 == selected && (
				<div className="asnp-block  asnp-bg-white asnp-py-4 asnp-px-2 asnp-mt-2">
					<div className="asnp-flex">
						<label className="asnp-field-title">
							{ __(
								'Custom Availability',
								'asnp-easy-whatsapp'
							) }
						</label>
						<div className="asnp-text-red-600 asnp-text-base asnp-uppercase asnp-ml-2">
							{ __( '(Pro)', 'asnp-easy-whatsapp' ) }
						</div>
					</div>
					<div>{ timeItems }</div>
					<div className="asnp-mt-8">
						<label className="asnp-inline-flex asnp-space-x-2 asnp-items-center">
							<h2 className="asnp-field-title asnp-w-[7rem]">
								{ __( 'Use Timezone', 'asnp-easy-whatsapp' ) }
							</h2>
							<Toggle
								value={ 1 == selectedTimezone }
								onChange={ ( value ) =>
									setSelectedTimezone( value ? 1 : 0 )
								}
							/>
						</label>
						<label className="asnp-block">
							{ __(
								'Use specific timezone for this account',
								'asnp-easy-whatsapp'
							) }
						</label>
					</div>
					{ 1 === selectedTimezone && (
						<div className="asnp-mt-4 asnp-max-w-lg">
							<TimeZoneAccount />
						</div>
					) }
				</div>
			) }
		</div>
	);
};

export default Account;
