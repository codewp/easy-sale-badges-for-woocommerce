import React, { useContext } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import ItemSelect from './../../../ItemSelect';
import { BadgeContext } from '../../../../contexts/Badge';

import './style.scss';

const WooCommerce = () => {
	const { addGroup, badge, addItem, updateItem, deleteItem } = useContext(
		BadgeContext
	);

	return (
		<div className="asnp-mt-4">
			<div className="asnp-w-full asnp-mb-4">
				{ badge.items.map( ( group, groupIndex ) => (
					<div key={ groupIndex }>
						{ groupIndex >= 1 && (
							<label className="asnp-block asnp-space-y-1">
								<span className="asnp-field-title">
									{ __( 'Or', 'asnp-easy-whatsapp' ) }
								</span>
							</label>
						) }
						{ group.map( ( item, index ) => (
							<div key={ index }>
								<div className="asnp-w-full asnp-mb-4 asnp-flex asnp-mt-5">
									<select
										className="asnp-select-field !asnp-w-48 asnp-mt-2"
										value={
											badge.items[ groupIndex ][ index ]
												.type
										}
										onChange={ ( e ) =>
											updateItem(
												groupIndex,
												index,
												'type',
												e.target.value
											)
										}
									>
										<option value={ 'products' }>
											{ __(
												'Products',
												'asnp-easy-whatsapp'
											) }
										</option>
										<option value={ 'stockstatus' }>
											{ __(
												'Stock status',
												'asnp-easy-whatsapp'
											) }
										</option>
										<option value={ 'isonsale' }>
											{ __(
												'Is On Sale',
												'asnp-easy-whatsapp'
											) }
										</option>

										<option value={ 'categories' }>
											{ __(
												'Categories',
												'asnp-easy-whatsapp'
											) }
										</option>

										<option value={ 'tags' }>
											{ __(
												'Tags',
												'asnp-easy-whatsapp'
											) }
										</option>
									</select>
									{ badge.items[ groupIndex ][ index ].type ==
									'isonsale' ? (
										''
									) : (
										<select
											className="asnp-select-field !asnp-w-48 asnp-mt-2 asnp-ml-4"
											value={
												badge.items[ groupIndex ][
													index
												].selectType
											}
											onChange={ ( e ) =>
												updateItem(
													groupIndex,
													index,
													'selectType',
													e.target.value
												)
											}
										>
											<option value="included">
												{ __(
													'Included',
													'asnp-easy-whatsapp'
												) }
											</option>
											<option value="excluded">
												{ __(
													'Excluded',
													'asnp-easy-whatsapp'
												) }
											</option>
										</select>
									) }

									<div className="asnp-ml-5 asnp-flex">
										{ ( badge.items[ groupIndex ][ index ]
											.type === 'products' ||
											badge.items[ groupIndex ][ index ]
												.type === 'categories' ||
											badge.items[ groupIndex ][ index ]
												.type === 'tags' ) && (
											<ItemSelect
												items={
													badge.items[ groupIndex ][
														index
													].items
												}
												type={
													badge.items[ groupIndex ][
														index
													].type
												}
												onChange={ ( value ) =>
													updateItem(
														groupIndex,
														index,
														'items',
														value
													)
												}
												cacheOptions={ false }
											/>
										) }
										{ badge.items[ groupIndex ][ index ]
											.type == 'stockstatus' && (
											<select
												className="asnp-select-field !asnp-w-[16rem] asnp-mt-2 asnp-ml-4"
												value={
													badge.items[ groupIndex ][
														index
													].items
												}
												onChange={ ( e ) =>
													updateItem(
														groupIndex,
														index,
														'items',
														e.target.value
													)
												}
											>
												<option value="instock">
													{ __(
														'In Stock',
														'asnp-easy-whatsapp'
													) }
												</option>
												<option value="outofstock ">
													{ __(
														'Out of Stock',
														'asnp-easy-whatsapp'
													) }
												</option>
											</select>
										) }
										{ badge.items[ groupIndex ][ index ]
											.type == 'isonsale' && (
											<select
												className="asnp-select-field !asnp-w-48 asnp-mt-2 asnp-ml-4"
												value={
													badge.items[ groupIndex ][
														index
													].items
												}
												onChange={ ( e ) =>
													updateItem(
														groupIndex,
														index,
														'items',
														e.target.value
													)
												}
											>
												<option value="yes">
													{ __(
														'Yes',
														'asnp-easy-whatsapp'
													) }
												</option>
												<option value="outofstock ">
													{ __(
														'No',
														'asnp-easy-whatsapp'
													) }
												</option>
											</select>
										) }
									</div>
									<div className="asnp-flex">
										<button
											className="asnp-mb-4 asnp-ml-3 asnp-mt-2 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
											onClick={ () =>
												addItem( groupIndex, index + 1 )
											}
										>
											{ __(
												'And',
												'asnp-easy-whatsapp'
											) }
										</button>
										<button
											className="asnp-mb-4 asnp-mt-2 asnp-ml-3 asnp-btn-delete asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
											onClick={ () =>
												deleteItem( groupIndex, index )
											}
										>
											{ __(
												'Delete',
												'asnp-easy-whatsapp'
											) }
										</button>
									</div>
								</div>
							</div>
						) ) }
					</div>
				) ) }
				<div className="asnp-mt-4 asnp-block asnp-h-auto asnp-space-y-2">
					{ badge.items.length > 1 && (
						<label className="asnp-block asnp-space-y-1">
							<span className="asnp-field-title">
								{ __( 'Or', 'asnp-easy-whatsapp' ) }
							</span>
						</label>
					) }
					<button
						className="asnp-mb-4 asnp-ml-3 asnp-mt-2 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[8rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
						onClick={ () => {
							addGroup();
						} }
					>
						{ sprintf(
							__( '%s Or Group', 'asnp-easy-whatsapp' ),
							'+'
						) }
					</button>
				</div>
			</div>
		</div>
	);
};

export default WooCommerce;
