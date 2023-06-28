import React from 'react';
import { __ } from '@wordpress/i18n';

const Devices = ( props ) => {
	return (
		<>
			<div className="asnp-w-full asnp-ml-2">
				{ __( 'Display Widget On', 'asnp-easy-whatsapp' ) }
			</div>
			<div className="asnp-w-full asnp-h-10 asnp-pt-2 asnp-ml-2">
				<div className="asnp-form-check asnp-form-check-inline">
					<input
						className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4  asnp-border asnp-border-gray-300 asnp-rounded-sm asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
						type="checkbox"
						id="inlineCheckbox1"
						value="true"
						checked={ 'true' === props.mobile }
						onChange={ ( e ) =>
							props.onChange(
								'mobile',
								e.target.checked ? 'true' : 'false'
							)
						}
					/>
					<label
						className="asnp-form-check-label asnp-inline-block asnp-text-gray-800 asnp-cursor-pointer"
						htmlFor="inlineCheckbox1"
					>
						{ __( 'Mobile	', 'asnp-easy-whatsapp' ) }
					</label>
				</div>
			</div>
			<div className="asnp-w-full asnp-h-10 asnp-pt-2 asnp-ml-2">
				<div className="asnp-form-check asnp-form-check-inline">
					<input
						className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4  asnp-border asnp-border-gray-300 asnp-rounded-sm asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
						type="checkbox"
						id="inlineCheckbox2"
						value="true"
						checked={ 'true' === props.desktop }
						onChange={ ( e ) =>
							props.onChange(
								'desktop',
								e.target.checked ? 'true' : 'false'
							)
						}
					/>
					<label
						className="asnp-form-check-label asnp-inline-block asnp-text-gray-800 asnp-cursor-pointer"
						htmlFor="inlineCheckbox2"
					>
						{ __( 'Desktop', 'asnp-easy-whatsapp' ) }
					</label>
				</div>
			</div>
		</>
	);
};

export default Devices;
