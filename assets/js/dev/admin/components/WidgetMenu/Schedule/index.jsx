import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import Datetime from 'react-datetime';
import ItemSelect from '../../ItemSelect';
import TimePicker from './../../TimePicker';

import 'react-datetime/css/react-datetime.css';
import './style.scss';

const initialDateTime = {
	type: 'date',
	start: '',
	end: '',
	startTime: '00:00',
	endTime: '00:00',
	date: '',
	days: [],
};

const Schedule = ( props ) => {
	const [ selectTime, setSelectTime ] = useState( { ...initialDateTime } );

	const updateTime = ( field, value ) => {
		setSelectTime( ( prev ) => ( {
			...prev,
			[ field ]: value,
		} ) );
	};

	const updateDays = ( item ) => {
		setSelectTime( ( prev ) => ( {
			...prev,
			days: [ item ],
		} ) );
	};

	console.log( selectTime );

	return (
		<div className="asnp-w-full">
			<div className="asnp-w-[25rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
				{ __( 'Schedule', 'asnp-easy-whatsapp' ) }
			</div>

			<div className="asnp-w-full asnp-mb-4 asnp-flex asnp-mt-5">
				<select
					className="asnp-select-field !asnp-w-48 asnp-mt-5"
					value={ selectTime.type }
					onChange={ ( e ) => updateTime( 'type', e.target.value ) }
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
				{ selectTime.type === 'date' && (
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
									dateFormat="YYYY-MM-DD"
									timeFormat={ false }
									onChange={ ( momentObj ) =>
										updateTime(
											'start',
											momentObj.format( 'YYYY-MM-DD' )
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
									dateFormat="YYYY-MM-DD"
									timeFormat={ false }
									onChange={ ( momentObj ) =>
										updateTime(
											'end',
											momentObj.format( 'YYYY-MM-DD' )
										)
									}
								/>
							</label>
						</div>
					</div>
				) }
				{ selectTime.type === 'dateTime' && (
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
										updateTime(
											'start',
											momentObj.format(
												'YYYY-MM-DD HH:mm:ss'
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
										updateTime(
											'end',
											momentObj.format(
												'YYYY-MM-DD HH:mm:ss'
											)
										)
									}
								/>
							</label>
						</div>
					</div>
				) }
				{ selectTime.type === 'days' && (
					<div className="asnp-flex asnp-ml-8 asnp-mt-4 asnp-inputWeek">
						<ItemSelect
							items={ selectTime.days }
							type="days"
							onChange={ ( selectedDays ) =>
								updateDays( selectedDays )
							}
						/>
					</div>
				) }
				{ selectTime.type === 'time' && (
					<div className="asnp-flex asnp-ml-8 asnp-mt-6">
						<TimePicker
							selectTime={ selectTime }
							onChange={ updateTime }
						/>
					</div>
				) }

				<div className="asnp-itemselect asnp-ml-5 asnp-flex asnp-mt-4">
					<button
						className="asnp-mb-4 asnp-ml-3 asnp-mt-2 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
						onClick={ () => addItem( groupIndex, index + 1 ) }
					>
						{ __( 'Add', 'asnp-easy-whatsapp' ) }
					</button>
					<button
						className="asnp-mb-4 asnp-mt-2 asnp-ml-3 asnp-btn-delete asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
						onClick={ () => deleteItem( groupIndex, index ) }
					>
						{ __( 'Delete', 'asnp-easy-whatsapp' ) }
					</button>
				</div>
			</div>
		</div>
	);
};

export default Schedule;
