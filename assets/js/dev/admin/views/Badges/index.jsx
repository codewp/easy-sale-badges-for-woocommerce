import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import * as BadgeApi from '@easy-sale-badges/api/badge';
import {
	BadgesContext,
	fetchItemsIfNeeded,
	itemRemoved,
	Action,
} from '../../contexts/Badges';
import Toggle from '../../components/Toggle';
import WarningModal from '../../components/WarningModal';
import { AppContext } from '../../contexts/App';
import { TrashIcon, PencilIcon, DuplicateIcon } from '@heroicons/react/solid';
import Alert from '../../components/Alert';
import Pagination from '../../components/Pagination';
import styled, { StyleSheetManager } from 'styled-components';
import BadgePreview from '../../utils/labelPreview';
import ChristmasBanner from '../../components/BlackFriday/ChristmasBanner';

import './style.scss';

const Span = styled.div`
	${ ( props ) => props.badgeIconPr }
`;

const SpanOne = styled.div`
	${ ( props ) => props.badgeIconOnePr }
`;

const SpanTwo = styled.div`
	${ ( props ) => props.badgeIconTwoPr }
`;

const StyledSpan = ( props ) => (
	<StyleSheetManager shouldForwardProp={ ( prop ) => prop !== 'badgeIconPr' }>
		<Span { ...props } />
	</StyleSheetManager>
);

const StyledSpanOne = ( props ) => (
	<StyleSheetManager
		shouldForwardProp={ ( prop ) => prop !== 'badgeIconOnePr' }
	>
		<SpanOne { ...props } />
	</StyleSheetManager>
);

const StyledSpanTwo = ( props ) => (
	<StyleSheetManager
		shouldForwardProp={ ( prop ) => prop !== 'badgeIconTwoPr' }
	>
		<SpanTwo { ...props } />
	</StyleSheetManager>
);

export default function Badges() {
	const { state, dispatch } = useContext( BadgesContext );
	const { loading, setLoading, setMessage } = useContext( AppContext );
	const [ showDeleteModal, setShowDeleteModal ] = useState( false );
	const [ deleteId, setDeleteId ] = useState( 0 );

	useEffect( () => {
		setLoading( state.isLoading );
	}, [ state.isLoading ] );

	useEffect( () => {
		if ( state.itemAdded ) {
			getPageItems( 1, true );
			dispatch( {
				type: Action.ITEM_ADDED,
				payload: false,
			} );
		}
	}, [ state.itemAdded ] );

	const getPageItems = async ( page, force = false ) => {
		try {
			await fetchItemsIfNeeded( state, dispatch, { page, force } );
		} catch ( error ) {
			setLoading( false );
			setMessage( {
				message: error.message,
				type: 'error',
			} );
		}
	};

	const badgePosition = ( badge ) => {
		return 'undefined' !== typeof badge.cssLabelPosition &&
			'outOfImage' === badge.cssLabelPosition
			? __( 'Out of Image', 'easy-sale-badges-for-woocommerce' )
			: __( 'On Image', 'easy-sale-badges-for-woocommerce' );
	};

	const previewImage = ( badge ) => {
		const { badgeIconPr, badgeIconOnePr, badgeIconTwoPr } = BadgePreview(
			badge
		);
		let mtop;
		if (
			badge.badgeStyles == 'badge1' ||
			badge.badgeStyles == 'badge2' ||
			badge.badgeStyles == 'badge3' ||
			badge.badgeStyles == 'badge4' ||
			badge.badgeStyles == 'badge20'
		) {
			mtop = 15;
		} else {
			mtop = 5;
		}

		let previewBadge = (
			<div className="asnp-esb-productPreviewBadge">
				<StyledSpan
					badgeIconPr={ badgeIconPr }
					className="asnp-esb-productPreviewBadge2"
					style={ {
						color: `${ badge.textColor }`,
						fontSize: `${ badge.fontSizeText }px`,
						fontWeight: `${ badge.fontWeightLabel }`,
						lineHeight: `${ badge.lineHeightText }px`,
						borderTopLeftRadius: `${ badge.topLeftRadius }px`,
						borderTopRightRadius: `${ badge.topRightRadius }px`,
						borderBottomLeftRadius: `${ badge.bottomLeftRadius }px`,
						borderBottomRightRadius: `${ badge.bottomRightRadius }px`,
						marginTop: `${ mtop }px`,
					} }
				>
					<StyledSpanTwo
						badgeIconTwoPr={ badgeIconTwoPr }
					></StyledSpanTwo>
					<StyledSpanOne badgeIconOnePr={ badgeIconOnePr }>
						<div>{ badge.badgeLabel }</div>
					</StyledSpanOne>
				</StyledSpan>
			</div>
		);

		if (
			badge.imgbadge === 0 &&
			badge.imgbadgeAdv === 0 &&
			badge.useTimerBadge === 0
		) {
			return previewBadge;
		}

		return '';
	};

	const duplicate = async ( id ) => {
		setLoading( true );
		try {
			let response = await BadgeApi.duplicate( id );
			if ( response && response.id ) {
				await fetchItemsIfNeeded( state, dispatch, {
					force: true,
					page: 1,
				} );
				setMessage( {
					message: __(
						'Duplicated Successfully.',
						'easy-sale-badges-for-woocommerce'
					),
					type: 'success',
				} );
			} else {
				setMessage( {
					message: __(
						'Error occurred on duplicating the item.',
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
			if ( response && response.id ) {
				await itemRemoved( state, dispatch );
				setMessage( {
					message: __(
						'Deleted Successfully.',
						'easy-sale-badges-for-woocommerce'
					),
					type: 'success',
				} );
			} else {
				setMessage( {
					message: __(
						'Error occurred on deleting the item.',
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
						'easy-sale-badges-for-woocommerce'
					),
					type: 'success',
				} );
			} else {
				setMessage( {
					message: __(
						'Error occurred on updating the item.',
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
		<div>
			<ChristmasBanner />
			<div className="asnp-flex asnp-space-x-2">
				<h1 className="asnp-heading-inline">
					{ __( 'Badges', 'easy-sale-badges-for-woocommerce' ) }
				</h1>
				<Link to={ `/badge/new` } className="asnp-btn asnp-btn-primary">
					{ __( 'Add New', 'easy-sale-badges-for-woocommerce' ) }
				</Link>
			</div>
			{ ! state.isLoading && ! loading && ! state.items.length && (
				<Alert
					message={ __(
						'There is not any Item.',
						'easy-sale-badges-for-woocommerce'
					) }
					title={ __( 'Info!', 'easy-sale-badges-for-woocommerce' ) }
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
													'easy-sale-badges-for-woocommerce'
												) }
											</th>
											<th
												scope="col"
												className="asnp-px-6 asnp-py-3 asnp-text-left asnp-text-xs asnp-font-medium asnp-text-gray-500 asnp-uppercase asnp-tracking-wider"
											>
												{ __(
													'Name',
													'easy-sale-badges-for-woocommerce'
												) }
											</th>
											<th
												scope="col"
												className="asnp-px-6 asnp-py-3 asnp-text-left asnp-text-xs asnp-font-medium asnp-text-gray-500 asnp-uppercase asnp-tracking-wider"
											>
												{ __(
													'Shortcode',
													'easy-sale-badges-for-woocommerce'
												) }
											</th>
											<th
												scope="col"
												className="asnp-px-6 asnp-py-3 asnp-text-left asnp-text-xs asnp-font-medium asnp-text-gray-500 asnp-uppercase asnp-tracking-wider"
											>
												{ __(
													'Preview',
													'easy-sale-badges-for-woocommerce'
												) }
											</th>
											<th
												scope="col"
												className="asnp-px-6 asnp-py-3 asnp-text-left asnp-text-xs asnp-font-medium asnp-text-gray-500 asnp-uppercase asnp-tracking-wider"
											>
												{ __(
													'Position',
													'easy-sale-badges-for-woocommerce'
												) }
											</th>
											<th
												scope="col"
												className="asnp-px-6 asnp-py-3 asnp-text-left asnp-text-xs asnp-font-medium asnp-text-gray-500 asnp-uppercase asnp-tracking-wider"
											>
												{ __(
													'Status',
													'easy-sale-badges-for-woocommerce'
												) }
											</th>
											<th
												scope="col"
												className="asnp-px-6 asnp-py-3 asnp-text-left asnp-text-xs asnp-font-medium asnp-text-gray-500 asnp-uppercase asnp-tracking-wider"
											>
												{ __(
													'Actions',
													'easy-sale-badges-for-woocommerce'
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
															item.title,
															'easy-sale-badges-for-woocommerce'
														) }
													</Link>
												</td>
												<td className="asnp-px-6 asnp-py-4 asnp-whitespace-nowrap">
													<code>
														[asnp_badge id="
														{ item.id }"]
													</code>
												</td>
												<td className="asnp-px-6 asnp-whitespace-nowrap">
													<Link
														className="focus:!asnp-shadow-none"
														to={ `/badge/${ item.id }` }
													>
														{ previewImage( item ) }
													</Link>
												</td>
												<td className="asnp-px-6 asnp-whitespace-nowrap">
													<Link
														className="focus:!asnp-shadow-none"
														to={ `/badge/${ item.id }` }
													>
														{ badgePosition(
															item
														) }
													</Link>
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
															'easy-sale-badges-for-woocommerce'
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
															'easy-sale-badges-for-woocommerce'
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
			{ 0 < state.items.length && 1 < state.pages && (
				<Pagination
					current={ state.page }
					total={ state.pages }
					prevText={ __(
						'Prev',
						'easy-sale-badges-for-woocommerce'
					) }
					nextText={ __(
						'Next',
						'easy-sale-badges-for-woocommerce'
					) }
					onClickPage={ ( value ) => getPageItems( value ) }
				/>
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
