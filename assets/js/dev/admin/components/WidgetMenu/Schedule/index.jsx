import React, { useContext } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import moment from 'moment';
import Datetime from 'react-datetime';
import TimePicker from './../../TimePicker';
import { BadgeContext } from '../../../contexts/Badge';
import DaysOfWeekSelect from '../../DaysOfWeek';
import CurrentServerTime from '../../CurrentServerTime';

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

	return (
		<div className="asnp-w-full">
			<div className="asnp-flex">
				<div className="asnp-mt-2 asnp-text-lg asnp-font-semibold">
					{ __( 'Schedule', 'easy-sale-badges-for-woocommerce' ) }
				</div>
				<div className="asnp-mt-3">
					<CurrentServerTime />
				</div>
			</div>

			{ badge.schedule.map( ( group, groupIndex ) => (
				<div key={ groupIndex }>
					{ groupIndex >= 1 && (
						<label className="asnp-block asnp-space-y-1">
							<span className="asnp-field-title">
								{ __(
									'Or',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
						</label>
					) }
					{ group.map( ( time, index ) => (
						<div
							key={ index }
							className="asnp-w-full asnp-mb-4 asnp-flex asnp-mt-5"
						>
							<select
								className="asnp-select-field xl:!asnp-w-28 asnp-mt-5"
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
									{ __(
										'Date',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>

								<option value={ 'dateTime' }>
									{ __(
										'Date Time',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>

								<option value={ 'time' }>
									{ __(
										'Time',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option value={ 'days' }>
									{ __(
										'Days',
										'easy-sale-badges-for-woocommerce'
									) }
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
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<Datetime
												dateFormat="YYYY-MM-DD"
												timeFormat={ false }
												value={
													badge.schedule[
														groupIndex
													][ index ].start
												}
												onChange={ ( momentObj ) =>
													updateSchedule(
														groupIndex,
														index,
														'start',
														moment(
															momentObj
														).format( 'YYYY-MM-DD' )
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
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<Datetime
												dateFormat="YYYY-MM-DD"
												timeFormat={ false }
												value={
													badge.schedule[
														groupIndex
													][ index ].end
												}
												onChange={ ( momentObj ) =>
													updateSchedule(
														groupIndex,
														index,
														'end',
														moment(
															momentObj
														).format( 'YYYY-MM-DD' )
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
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<Datetime
												dateFormat="YYYY-MM-DD"
												timeFormat="hh:mm A"
												value={
													badge.schedule[
														groupIndex
													][ index ].start
												}
												onChange={ ( momentObj ) =>
													updateSchedule(
														groupIndex,
														index,
														'start',
														moment(
															momentObj
														).format(
															'YYYY-MM-DD hh:mm A'
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
													'easy-sale-badges-for-woocommerce'
												) }
											</span>
											<Datetime
												dateFormat="YYYY-MM-DD"
												timeFormat="hh:mm A"
												value={
													badge.schedule[
														groupIndex
													][ index ].end
												}
												onChange={ ( momentObj ) =>
													updateSchedule(
														groupIndex,
														index,
														'end',
														moment(
															momentObj
														).format(
															'YYYY-MM-DD hh:mm A'
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
									<DaysOfWeekSelect
										value={ badge.schedule[ groupIndex ][
											index
										].days.flatMap(
											( innerArray ) => innerArray
										) }
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

							<div className="asnp-itemselect asnp-ml-4 asnp-flex asnp-mt-4">
								<button
									className="asnp-mb-4 asnp-ml-3 asnp-mt-2 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
									onClick={ () =>
										addSchedule( groupIndex, index + 1 )
									}
								>
									{ __(
										'And',
										'easy-sale-badges-for-woocommerce'
									) }
								</button>
								<button
									className="asnp-mb-4 asnp-mt-2 asnp-ml-3 asnp-btn-delete asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
									onClick={ () =>
										deleteSchedule( groupIndex, index )
									}
								>
									{ __(
										'Delete',
										'easy-sale-badges-for-woocommerce'
									) }
								</button>
							</div>
						</div>
					) ) }
				</div>
			) ) }

			<div className="asnp-mt-4 asnp-block asnp-h-auto asnp-space-y-2">
				{ badge.schedule.length > 1 && (
					<label className="asnp-block asnp-space-y-1">
						<span className="asnp-field-title">
							{ __( 'Or', 'easy-sale-badges-for-woocommerce' ) }
						</span>
					</label>
				) }
				<button
					className="asnp-mb-4 asnp-ml-3 asnp-mt-2 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[8rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
					onClick={ () => {
						addGroupSchedule();
					} }
				>
					{ badge.schedule.length
						? sprintf(
								__(
									'%s Or Group',
									'easy-sale-badges-for-woocommerce'
								),
								'+'
						  )
						: __(
								'Add Schedule',
								'easy-sale-badges-for-woocommerce'
						  ) }
				</button>
			</div>
		</div>
	);
};

export default Schedule;
