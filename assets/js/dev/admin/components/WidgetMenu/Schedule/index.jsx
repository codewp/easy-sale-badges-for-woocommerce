import React from 'react';
import { __ } from '@wordpress/i18n';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import Toggle from './../../Toggle/index';
import AvailabilityDay from '../../AvailabilityDay';
import TimeZone from './../../TimeZone/index';

const Schedule = ( props ) => {

	let timeItems = [];
	for ( let dayName in props.availability ) {
		timeItems.push(
			<AvailabilityDay
				key={ dayName }
				name={ dayName }
				day={ props.availability[ dayName ] }
				updateAvailability={ props.updateAvailability }
			/>
		);
	}
	return (
		<div className="asnp-w-full">
			<div className="asnp-w-[25rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
				{ __( 'Schedule', 'asnp-easy-whatsapp' ) }
			</div>

			<div className="asnp-flex">
				<div className="asnp-mt-3">
					<label className="asnp-block asnp-space-y-1">
						<span className="asnp-field-title">
							{ __( 'From Date / Time', 'asnp-easy-whatsapp' ) }
						</span>
						<Datetime />
					</label>
				</div>
				<div className="asnp-mt-3 asnp-ml-8">
					<label className="asnp-block asnp-space-y-1">
						<span className="asnp-field-title">
							{ __( 'To Date / Time', 'asnp-easy-whatsapp' ) }
						</span>
						<Datetime />
					</label>
				</div>
			</div>
			<div className="asnp-ew-line"></div>
			<div className="asnp-w-[25rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
				{ __(
					'RESTRICT SCHEDULE ONLY ON WEEKDAYS',
					'asnp-easy-whatsapp'
				) }
				<div className="asnp-space-y-1 asnp-mt-6">
					<label className="asnp-inline-flex asnp-space-x-2 asnp-items-center">
						<h2 className="asnp-field-title">
							{ __( 'All Days', 'asnp-easy-whatsapp' ) }
						</h2>
						<Toggle
							value={ 1 == props.alwaysOnline }
							onChange={ ( value ) =>
								props.onChange( 'alwaysOnline', value ? 1 : 0 )
							}
						/>
					</label>
				</div>
			</div>
			{ 0 == props.alwaysOnline && (
				<div className="asnp-block  asnp-bg-white asnp-py-4 asnp-px-2 asnp-mt-8">
					<label className="asnp-field-title">
						{ __( 'Custom Availability', 'asnp-easy-whatsapp' ) }
					</label>
					<div>{ timeItems }</div>
					<div className="asnp-mt-8">
						<label className="asnp-inline-flex asnp-space-x-2 asnp-items-center">
							<h2 className="asnp-field-title asnp-w-[8rem]">
								{ __( 'Use Timezone', 'asnp-easy-whatsapp' ) }
							</h2>
							<Toggle
								value={ 1 == props.useTimezone }
								onChange={ ( value ) =>
									props.onChange(
										'useTimezone',
										value ? 1 : 0
									)
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
					{ 1 == props.useTimezone && (
						<div className="asnp-mt-4 asnp-max-w-lg">
							<TimeZone onChange={ props.onChange } />
						</div>
					) }
				</div>
			) }
		</div>
	);
};

export default Schedule;
