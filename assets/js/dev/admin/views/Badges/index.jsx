import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import * as BadgeApi from '@easy-whatsapp/api/badge';
import {
	WhatsAppsContext,
	fetchItemsIfNeeded,
	Action,
} from '../../contexts/WhatsApps';
import Toggle from '../../components/Toggle';
import WarningModal from '../../components/WarningModal';
import { AppContext } from '../../contexts/App';
import { TrashIcon, PencilIcon, DuplicateIcon } from '@heroicons/react/solid';
import Alert from '../../components/Alert';

export default function Badges() {
	const { state, dispatch } = useContext( WhatsAppsContext );
	const { loading, setLoading, setMessage } = useContext( AppContext );
	const [ showDeleteModal, setShowDeleteModal ] = useState( false );
	const [ deleteId, setDeleteId ] = useState( 0 );

	useEffect( () => {
		setLoading( state.isLoading );
	}, [ state.isLoading ] );

	const duplicate = async ( id ) => {
		setLoading( true );
		try {
			let response = await BadgeApi.duplicate( id );
			if ( response && response.id ) {
				await fetchItemsIfNeeded( state, dispatch, { force: true } );
				setMessage( {
					message: __(
						'Duplicated Successfully.',
						'asnp-easy-whatsapp'
					),
					type: 'success',
				} );
			} else {
				setMessage( {
					message: __(
						'Error occurred on duplicating the item.',
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

	const showDeleteWarning = ( id ) => {
		setDeleteId( id * 1 );
		setShowDeleteModal( true );
	};

	const cancelDelete = () => {
		setDeleteId( 0 );
		setShowDeleteModal( false );
	};

	const deleteItem = async () => {
		setShowDeleteModal( false );
		if ( ! deleteId ) {
			return;
		}

		setLoading( true );

		try {
			let response = await BadgeApi.deleteItem( deleteId );
			setLoading( false );
			if ( response && response.id ) {
				dispatch( {
					type: Action.DELETE_ITEM,
					payload: deleteId,
				} );
				setMessage( {
					message: __(
						'Deleted Successfully.',
						'asnp-easy-whatsapp'
					),
					type: 'success',
				} );
			} else {
				setMessage( {
					message: __(
						'Error occurred on deleting the item.',
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
		setDeleteId( 0 );
	};

	const updateItem = async ( item, field, value ) => {
		dispatch( {
			type: Action.UPDATE_ITEM,
			payload: { ...item, [ field ]: value },
		} );
		setLoading( true );
		try {
			let response = await BadgeApi.update( {
				id: item.id,
				[ field ]: value,
			} );
			setLoading( false );
			if ( response && response.item ) {
				dispatch( {
					type: Action.UPDATE_ITEM,
					payload: response.item,
				} );
				setMessage( {
					message: __(
						'Updated Successfully.',
						'asnp-easy-whatsapp'
					),
					type: 'success',
				} );
			} else {
				setMessage( {
					message: __(
						'Error occurred on updating the item.',
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

	return (
		<div>
			<div className="asnp-flex asnp-space-x-2">
				<h1 className="asnp-heading-inline">
					{ __( 'Badges', 'asnp-easy-whatsapp' ) }
				</h1>
				<Link to={ `/badge/new` } className="asnp-btn asnp-btn-primary">
					{ __( 'Add New', 'asnp-easy-whatsapp' ) }
				</Link>
			</div>
			{ ! state.isLoading && ! loading && ! state.items.length && (
				<Alert
					message={ __(
						'There is not any Item.',
						'asnp-easy-whatsapp'
					) }
					title={ __( 'Info!', 'asnp-easy-whatsapp' ) }
				/>
			) }
			{ 0 < state.items.length && (
				<div className="asnp-flex asnp-flex-col">
					<div className="asnp-my-2 asnp-overflow-x-auto sm:asnp-mx-6 lg:asnp-mx-8">
						<div className="asnp-py-2 asnp-align-middle asnp-inline-block asnp-min-w-full sm:asnp-px-6 lg:asnp-px-8">
							<div className="asnp-shadow hover:asnp-shadow-md asnp-overflow-hidden asnp-border-b asnp-border-gray-200 sm:asnp-rounded-lg">
								<table
									id="whatsapp-list-table"
									className="asnp-min-w-full asnp-divide-y asnp-divide-gray-200"
								>
									<thead className="asnp-bg-gray-50">
										<tr>
											<th
												scope="col"
												className="asnp-px-6 asnp-py-3 asnp-text-left asnp-text-xs asnp-font-medium asnp-text-gray-500 asnp-uppercase asnp-tracking-wider"
											>
												{ __(
													'ID',
													'asnp-easy-whatsapp'
												) }
											</th>
											<th
												scope="col"
												className="asnp-px-6 asnp-py-3 asnp-text-left asnp-text-xs asnp-font-medium asnp-text-gray-500 asnp-uppercase asnp-tracking-wider"
											>
												{ __(
													'Name',
													'asnp-easy-whatsapp'
												) }
											</th>
											<th
												scope="col"
												className="asnp-px-6 asnp-py-3 asnp-text-left asnp-text-xs asnp-font-medium asnp-text-gray-500 asnp-uppercase asnp-tracking-wider"
											>
												{ __(
													'Shortcode',
													'asnp-easy-whatsapp'
												) }
											</th>
											<th
												scope="col"
												className="asnp-px-6 asnp-py-3 asnp-text-left asnp-text-xs asnp-font-medium asnp-text-gray-500 asnp-uppercase asnp-tracking-wider"
											>
												{ __(
													'Status',
													'asnp-easy-whatsapp'
												) }
											</th>
											<th
												scope="col"
												className="asnp-px-6 asnp-py-3 asnp-text-left asnp-text-xs asnp-font-medium asnp-text-gray-500 asnp-uppercase asnp-tracking-wider"
											>
												{ __(
													'Actions',
													'asnp-easy-whatsapp'
												) }
											</th>
										</tr>
									</thead>
									<tbody className="asnp-bg-white asnp-divide-y asnp-divide-gray-200">
										{ state.items.map( ( item ) => (
											<tr key={ item.id }>
												<td className="asnp-px-6 asnp-py-4 asnp-whitespace-nowrap">
													{ item.id }
												</td>
												<td className="asnp-px-6 asnp-py-4 asnp-whitespace-nowrap">
													<Link
														to={ `/badge/${ item.id }` }
													>
														{ __(
															item.name,
															'asnp-easy-whatsapp'
														) }
													</Link>
												</td>
												<td className="asnp-px-6 asnp-py-4 asnp-whitespace-nowrap">
													<code>
														[asnp_chat id="
														{ item.id }"]
													</code>
												</td>
												<td className="asnp-px-6 asnp-py-4 asnp-whitespace-nowrap">
													<Toggle
														value={
															1 == item.status
														}
														onChange={ ( value ) =>
															updateItem(
																item,
																'status',
																value ? 1 : 0
															)
														}
													/>
												</td>
												<td className="asnp-inline-flex asnp-space-x-1 asnp-px-6 asnp-py-4 asnp-whitespace-nowrap">
													<Link
														to={ `/badge/${ item.id }` }
														className="asnp-btn asnp-btn-primary"
													>
														<PencilIcon className="asnp-h-5 asnp-w-4 " />
													</Link>
													<button
														className="asnp-btn asnp-btn-primary"
														onClick={ () =>
															duplicate( item.id )
														}
														title={ __(
															'Duplicate',
															'asnp-easy-whatsapp'
														) }
													>
														<DuplicateIcon className="asnp-h-5 asnp-w-4 " />
													</button>
													<button
														className="asnp-btn asnp-btn-delete"
														onClick={ () =>
															showDeleteWarning(
																item.id
															)
														}
														title={ __(
															'Delete',
															'asnp-easy-whatsapp'
														) }
													>
														<TrashIcon className="asnp-h-5 asnp-w-4 " />
													</button>
												</td>
											</tr>
										) ) }
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			) }
			{ showDeleteModal && (
				<WarningModal
					onApply={ deleteItem }
					onCancel={ cancelDelete }
				/>
			) }
		</div>
	);
}
