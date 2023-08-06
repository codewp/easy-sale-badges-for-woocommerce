import React from 'react';
import { __ } from '@wordpress/i18n';

const Opacity = ( props ) => {
	return (
		<div className='asnp-ew-line asnp-mt-6'>
			<label className="asnp-space-y-1">
				<span className="asnp-field-title asnp-text-base asnp-font-semibold">
					{ __( 'Opacity', 'asnp-easy-whatsapp' ) }
				</span>
			</label>
			<div className="asnp-relative asnp-pt-1">
				<input
					type="range"
					className="asnp-form-range asnp-w-[21rem] asnp-h-6 asnp-p-0 asnp-bg-transparent focus:asnp-outline-none focus:asnp-ring-0 focus:asnp-shadow-none asnp-cursor-pointer"
					min="0"
					max="1"
					step="0.01"
					value={ props.opacity }
					onChange={ ( e ) =>
						props.onChange( 'opacity', e.target.value )
					}
				/>
				<div className="asnp-w-[21rem] asnp-flex asnp-justify-between asnp-text-xs asnp-px-2">
					<span>0%</span>
					<span>25%</span>
					<span>50%</span>
					<span>75%</span>
					<span>100%</span>
				</div>
			</div>
			<div className="asnp-flex asnp-w-full asnp-mt-6">
				<div className="asnp-w-full">
					<label>
						<span className="asnp-field-title asnp-text-base asnp-font-semibold">
							{ __( 'Rotation', 'asnp-easy-whatsapp' ) }
						</span>
					</label>
					<div className="asnp-flex">
						<div className="asnp-relative asnp-pt-1">
							<input
								type="range"
								className="asnp-form-range asnp-w-[21rem] asnp-h-6 asnp-p-0 asnp-bg-transparent focus:asnp-outline-none focus:asnp-ring-0 focus:asnp-shadow-none asnp-cursor-pointer"
								min="0"
								max="360"
								step="3.6"
								value={ props.rotationX }
								onChange={ ( e ) =>
									props.onChange(
										'rotationX',
										e.target.value
									)
								}
							/>
							<div className="asnp-w-[21rem] asnp-flex asnp-text-xs">
								<span className="asnp-w-[10.5rem] asnp-flex asnp-justify-start">
									0%
								</span>

								<span className="asnp-w-[10.5rem] asnp-flex asnp-justify-end">
									100%
								</span>
							</div>
						</div>
						<div className="asnp-relative asnp-pt-1 asnp-ml-8">
							<input
								type="range"
								className="asnp-form-range asnp-w-[21rem] asnp-h-6 asnp-p-0 asnp-bg-transparent focus:asnp-outline-none focus:asnp-ring-0 focus:asnp-shadow-none asnp-cursor-pointer"
								min="0"
								max="360"
								step="3.6"
								value={ props.rotationY }
								onChange={ ( e ) =>
									props.onChange(
										'rotationY',
										e.target.value
									)
								}
							/>
							<div className="asnp-w-[21rem] asnp-flex asnp-text-xs">
								<span className="asnp-w-[10.5rem] asnp-flex asnp-justify-start">
									0%
								</span>

								<span className="asnp-w-[10.5rem] asnp-flex asnp-justify-end">
									100%
								</span>
							</div>
						</div>
					</div>
					<div className="asnp-relative asnp-pt-1 asnp-mt-4">
						<input
							type="range"
							className="asnp-form-range asnp-w-[21rem] asnp-h-6 asnp-p-0 asnp-bg-transparent focus:asnp-outline-none focus:asnp-ring-0 focus:asnp-shadow-none asnp-cursor-pointer"
							min="0"
							max="360"
							step="3.6"
							value={ props.rotationZ }
							onChange={ ( e ) =>
								props.onChange( 'rotationZ', e.target.value )
							}
						/>
						<div className="asnp-w-[21rem] asnp-flex asnp-text-xs">
							<span className="asnp-w-[10.5rem] asnp-flex asnp-justify-start">
								0%
							</span>

							<span className="asnp-w-[10.5rem] asnp-flex asnp-justify-end">
								100%
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="asnp-mt-6">
				<span className="asnp-field-title asnp-text-base asnp-font-semibold">
					{ __( 'Flip Text', 'asnp-easy-whatsapp' ) }
				</span>
				<div className="asnp-flex asnp-mt-2">
					<div className="asnp-w-40">
						<div className="asnp-form-check asnp-form-check-inline">
							<input
								className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4  asnp-border asnp-border-gray-300 asnp-rounded-sm asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
								type="checkbox"
								id="inlineCheckbox1"
								value="true"
								checked={ 1 == props.horizontal }
								onChange={ ( e ) =>
									props.onChange(
										'horizontal',
										e.target.checked ? 1 : 0
									)
								}
							/>
							<label
								className="asnp-form-check-label asnp-inline-block asnp-text-gray-800 asnp-cursor-pointer asnp-text-base asnp-font-normal"
								htmlFor="inlineCheckbox1"
							>
								{ __( 'Horizontal', 'asnp-easy-whatsapp' ) }
							</label>
						</div>
					</div>
					<div className="asnp-w-40">
						<div className="asnp-form-check asnp-form-check-inline">
							<input
								className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4  asnp-border asnp-border-gray-300 asnp-rounded-sm asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
								type="checkbox"
								id="inlineCheckbox2"
								value="true"
								checked={ 1 == props.vertical }
								onChange={ ( e ) =>
									props.onChange(
										'vertical',
										e.target.checked ? 1 : 0
									)
								}
							/>
							<label
								className="asnp-form-check-label asnp-inline-block asnp-text-gray-800 asnp-cursor-pointer asnp-text-base asnp-font-normal"
								htmlFor="inlineCheckbox2"
							>
								{ __( 'Vertical', 'asnp-easy-whatsapp' ) }
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Opacity;
