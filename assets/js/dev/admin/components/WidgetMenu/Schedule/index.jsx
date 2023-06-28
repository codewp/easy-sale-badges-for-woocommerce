import React from 'react';
import { __ } from '@wordpress/i18n';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import Toggle from './../../Toggle/index';

const Schedule = ( props ) => {
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
			<div className="asnp-w-[25rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
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
							value={ 'true' == props.useProductFilter }
							onChange={ ( value ) =>
								props.onChange(
									'useProductFilter',
									value ? 'true' : 'false'
								)
							}
						/>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Schedule;
