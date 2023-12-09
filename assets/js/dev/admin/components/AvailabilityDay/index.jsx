import React, { useContext } from 'react';
import { __ } from '@wordpress/i18n';
import { AppContext } from '../../contexts/App';
import TimePicker from '../TimePicker';

const AvailabilityDay = ( { updateAvailability, day, name } ) => {
	const { setMessage } = useContext( AppContext );

	const addTime = () => {
		if ( 2 <= day.times.length ) {
			setMessage( {
				message: __(
					'You can only add 2 times per day.',
					'easy-sale-badges-for-woocommerce'
				),
				type: 'info',
			} );
			return;
		}

		updateAvailability( name, 'times', [
			...day.times,
			{ start: '09:00', end: '17:00' },
		] );
	};

	const removeTime = ( index ) => {
		if ( 0 >= index ) {
			return;
		}

		let times = [ ...day.times ];
		updateAvailability(
			name,
			'times',
			times.filter( ( time, i ) => i !== index )
		);
	};

	const updateTime = ( index, field, value ) => {
		let times = [ ...day.times ];
		times[ index ][ field ] = value;
		updateAvailability( name, 'times', times );
	};

	return (
		<div className="asnp-w-full  asnp-pt-2 asnp-ml-2 asnp-block md:asnp-flex asnp-my-3 asnp-h-auto md:asnp-h-10">
			<div className="asnp-form-check asnp-form-check-inline asnp-block md:asnp-flex">
				<div className="asnp-w-[8rem]">
					<input
						className=" asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4  asnp-border asnp-border-gray-300 asnp-rounded-sm asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-[0.6rem] asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
						type="checkbox"
						id={ name }
						value={ name }
						checked={ 1 === day.available }
						onChange={ ( e ) =>
							updateAvailability(
								name,
								'available',
								e.target.checked ? 1 : 0
							)
						}
					/>
					<label
						className="asnp-mt-[0.5rem] asnp-form-check-label asnp-inline-block asnp-text-gray-800 asnp-cursor-pointer"
						htmlFor={ name }
					>
						{ __( name, 'easy-sale-badges-for-woocommerce' ) }
					</label>
				</div>
				{ day.times.map( ( time, index ) => (
					<div className="asnp-flex" key={ index }>
						<div className="asnp-ml-2">
							<TimePicker
								index={ index }
								time={ time }
								updateTime={ updateTime }
							/>
						</div>
						{ 0 === index ? (
							<button
								onClick={ addTime }
								className="asnp-ml-3  asnp-mb-4 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
							>
								{ __( 'Add', 'easy-sale-badges-for-woocommerce' ) }
							</button>
						) : (
							<button
								onClick={ () => removeTime( index ) }
								className="asnp-ml-4  asnp-mb-4 asnp-btn-delete asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
							>
								{ __( 'Remove', 'easy-sale-badges-for-woocommerce' ) }
							</button>
						) }
					</div>
				) ) }
			</div>
		</div>
	);
};

export default AvailabilityDay;
