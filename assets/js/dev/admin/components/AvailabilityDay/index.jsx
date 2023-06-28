import React, { useContext, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { AppContext } from '../../contexts/App';
import TimePicker from '../TimePicker';

const AvailabilityDay = ( { day, name } ) => {
	return (
		<div className="asnp-w-full  asnp-pt-2 asnp-ml-2 asnp-block md:asnp-flex asnp-my-3 asnp-h-auto md:asnp-h-10">
			<div className="asnp-form-check asnp-form-check-inline asnp-block md:asnp-flex">
				<div className="asnp-w-[8rem]">
					<input
						className=" asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4  asnp-border asnp-border-gray-300 asnp-rounded-sm asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-[0.6rem] asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
						type="checkbox"
						disabled
					/>
					<label
						className="asnp-mt-[0.5rem] asnp-form-check-label asnp-inline-block asnp-text-gray-800 asnp-cursor-pointer"
						htmlFor={ name }
					>
						{ __( name, 'asnp-easy-whatsapp' ) }
					</label>
				</div>
				{ day.times.map( ( time, index ) => (
					<div className="asnp-flex" key={ index }>
						<div className="asnp-ml-2">
							<TimePicker index={ index } />
						</div>
						{ 0 === index ? (
							<button disabled className="asnp-ml-3  asnp-mb-4 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none">
								{ __( 'Add', 'asnp-easy-whatsapp' ) }
							</button>
						) : (
							<button className="asnp-ml-4  asnp-mb-4 asnp-btn-delete asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none">
								{ __( 'Remove', 'asnp-easy-whatsapp' ) }
							</button>
						) }
					</div>
				) ) }
			</div>
		</div>
	);
};

export default AvailabilityDay;
