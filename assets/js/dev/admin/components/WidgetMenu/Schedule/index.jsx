import React, { useState, useContext } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import Datetime from 'react-datetime';
import ItemSelect from '../../ItemSelect';
import TimePicker from './../../TimePicker';
import { BadgeContext } from '../../../contexts/Badge';

import 'react-datetime/css/react-datetime.css';
import './style.scss';

const Schedule = () => {
	const {
		addGroupSchedule,
		badge,
		addSchedule,
		updateSchedule,
		updateDaysSchedule,
		deleteSchedule,
	} = useContext( BadgeContext );

	const updateTime = ( field, value ) => {
		setSelectTime( ( prev ) => ( {
			...prev,
			[ field ]: value,
		} ) );
	};

	return (
		<div className="asnp-w-full">
			<div className="asnp-w-[25rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
				{ __( 'Schedule', 'asnp-easy-whatsapp' ) }
			</div>

			{ badge.schedule.map( ( group, groupIndex ) => (
				<div key={ groupIndex }>
					{ groupIndex >= 1 && (
						<label className="asnp-block asnp-space-y-1">
							<span className="asnp-field-title">
								{ __( 'Or', 'asnp-easy-whatsapp' ) }
							</span>
						</label>
					) }
					{ group.map( ( time, index ) => (
						<div
							key={ index }
							className="asnp-w-full asnp-mb-4 asnp-flex asnp-mt-5"
						>
							<select
								className="asnp-select-field !asnp-w-48 asnp-mt-5"
								value={
									badge.schedule[ groupIndex ][ index ].type
								}
								onChange={ ( e ) =>
									updateSchedule(
										groupIndex,
										index,
										'type',
										e.target.value
									)
								}
							>
								<option value={ 'date' }>
									{ __( 'Date', 'asnp-easy-whatsapp' ) }
								</option>

								<option value={ 'dateTime' }>
									{ __( 'Date Time', 'asnp-easy-whatsapp' ) }
								</option>

								<option value={ 'time' }>
									{ __( 'Time', 'asnp-easy-whatsapp' ) }
								</option>
								<option value={ 'days' }>
									{ __( 'Days', 'asnp-easy-whatsapp' ) }
								</option>
							</select>
							{ badge.schedule[ groupIndex ][ index ].type ===
								'date' && (
								<div className="asnp-flex asnp-ml-8">
									<div>
										<label className="asnp-block asnp-space-y-1">
											<span className="asnp-field-title">
												{ __(
													'From Date',
													'asnp-easy-whatsapp'
												) }
											</span>
											<Datetime
												dateFormat="YYYY-MM-DD"
												timeFormat={ false }
												onChange={ ( momentObj ) =>
													updateSchedule(
														groupIndex,
														index,
														'start',
														momentObj.format(
															'YYYY-MM-DD'
														)
													)
												}
											/>
										</label>
									</div>
									<div className="asnp-ml-8">
										<label className="asnp-block asnp-space-y-1">
											<span className="asnp-field-title">
												{ __(
													'To Date',
													'asnp-easy-whatsapp'
												) }
											</span>
											<Datetime
												dateFormat="YYYY-MM-DD"
												timeFormat={ false }
												onChange={ ( momentObj ) =>
													updateSchedule(
														groupIndex,
														index,
														'end',
														momentObj.format(
															'YYYY-MM-DD'
														)
													)
												}
											/>
										</label>
									</div>
								</div>
							) }
							{ badge.schedule[ groupIndex ][ index ].type ===
								'dateTime' && (
								<div className="asnp-flex asnp-ml-8">
									<div>
										<label className="asnp-block asnp-space-y-1">
											<span className="asnp-field-title">
												{ __(
													'From Date / Time',
													'asnp-easy-whatsapp'
												) }
											</span>
											<Datetime
												onChange={ ( momentObj ) =>
													updateSchedule(
														groupIndex,
														index,
														'start',
														momentObj.format(
															'YYYY-MM-DD HH:mm'
														)
													)
												}
											/>
										</label>
									</div>
									<div className="asnp-ml-8">
										<label className="asnp-block asnp-space-y-1">
											<span className="asnp-field-title">
												{ __(
													'To Date / Time',
													'asnp-easy-whatsapp'
												) }
											</span>
											<Datetime
												onChange={ ( momentObj ) =>
													updateSchedule(
														groupIndex,
														index,
														'end',
														momentObj.format(
															'YYYY-MM-DD HH:mm'
														)
													)
												}
											/>
										</label>
									</div>
								</div>
							) }
							{ badge.schedule[ groupIndex ][ index ].type ===
								'days' && (
								<div className="asnp-flex asnp-ml-8 asnp-mt-4 asnp-inputWeek">
									<ItemSelect
										items={
											badge.items[ groupIndex ][ index ]
												.days
										}
										type="days"
										onChange={ ( value ) =>
											updateDaysSchedule(
												groupIndex,
												index,
												'days',
												value
											)
										}
									/>
								</div>
							) }
							{ badge.schedule[ groupIndex ][ index ].type ===
								'time' && (
								<div className="asnp-flex asnp-ml-8 asnp-mt-6">
									<TimePicker
										badge={ badge }
										onChange={ updateSchedule }
										groupIndex={ groupIndex }
										index={ index }
									/>
								</div>
							) }

							<div className="asnp-itemselect asnp-ml-5 asnp-flex asnp-mt-4">
								<button
									className="asnp-mb-4 asnp-ml-3 asnp-mt-2 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
									onClick={ () =>
										addSchedule( groupIndex, index + 1 )
									}
								>
									{ __( 'Add', 'asnp-easy-whatsapp' ) }
								</button>
								<button
									className="asnp-mb-4 asnp-mt-2 asnp-ml-3 asnp-btn-delete asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
									onClick={ () =>
										deleteSchedule( groupIndex, index )
									}
								>
									{ __( 'Delete', 'asnp-easy-whatsapp' ) }
								</button>
							</div>
						</div>
					) ) }
				</div>
			) ) }
			<div className="asnp-mt-4 asnp-block asnp-h-auto asnp-space-y-2">
				<label className="asnp-block asnp-space-y-1">
					<span className="asnp-field-title">
						{ __( 'Or', 'asnp-easy-whatsapp' ) }
					</span>
				</label>
				<button
					className="asnp-mb-4 asnp-ml-3 asnp-mt-2 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[8rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
					onClick={ () => {
						addGroupSchedule();
					} }
				>
					{ badge.schedule.length
						? sprintf( __( '%s Or Group', 'asnp-easy-whatsapp' ), '+' )
						: __( 'Schedule', 'asnp-easy-whatsapp' ) }
				</button>
			</div>
		</div>
	);
};

export default Schedule;
