import React from 'react';
import { __ } from '@wordpress/i18n';
import Tippy from '@tippyjs/react';
import ColorPicker from 'react-best-gradient-color-picker';
import { IMAGES_URL } from '../../../../utils/constants';

const AdvancedTextOption = () => {
	return (
		<div>
			<div className="asnp-mt-8 asnp-flex asnp-w-full">
				<label className="asnp-w-[20rem]">
					<span className="asnp-field-title">
						{ __( 'Badge Label', 'asnp-easy-sale-badge' ) }
					</span>
					<input
						type="text"
						className="asnp-text-field"
						placeholder="Badge Label"
						disabled
					/>
				</label>
				<label className="asnp-ml-10 asnp-mt-8 asnp-flex">
					<input
						className="asnp-form-check-input asnp-appearance-none asnp-h-4 asnp-w-4 asnp-border asnp-border-gray-300 asnp-rounded-sm asnp-bg-white checked:asnp-bg-indigo-600 checked:asnp-border-indigo-600 focus:asnp-outline-none asnp-transition asnp-duration-200 asnp-mt-1 asnp-align-top asnp-bg-no-repeat asnp-bg-center asnp-bg-contain asnp-float-left asnp-mr-2 asnp-cursor-pointer"
						type="checkbox"
						disabled
					/>
					<div className="asnp-flex asnp-font-semibold asnp-text-base">
						{ __(
							'Percentage Discount amount',
							'asnp-easy-whatsapp'
						) }
						<div className="asnp-text-red-600 asnp-text-base asnp-uppercase asnp-ml-[0.3rem]">
							{ __( '(Pro)', 'asnp-easy-whatsapp' ) }
						</div>
						<div className="asnp-ml-1 asnp-cursor-pointer asnp-mt-[0.2rem]">
							<Tippy
								interactive={ true }
								placement={ 'top-start' }
								content={
									<div className="asnp-h-auto asnp-w-[15rem] asnp-rounded-lg asnp-p-[0.4rem] asnp-text-white asnp-rounded-bl-none asnp-ml-3">
										{ __(
											'Instead of displaying the label, showcase the percentage discount amount for products that are on sale.',
											'asnp-easy-whatsapp'
										) }
									</div>
								}
							>
								<img src={ IMAGES_URL + 'quest.svg' } />
							</Tippy>
						</div>
					</div>
				</label>
			</div>
			<div className="asnp-mt-3 asnp-w-[25rem]">
				<Tippy
					trigger="click"
					interactive={ true }
					placement={ 'bottom' }
					content={
						<div className="asnp-p-4">
							<ColorPicker />
						</div>
					}
				>
					<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
						<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
							<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
								<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
									{ __(
										'Text Color',
										'asnp-easy-sale-badge'
									) }
								</span>
								<div
									className={
										'asnp-flex asnp-w-7 asnp-h-6 asnp-rounded-full asnp-my-2 '
									}
								></div>
							</div>
						</div>
					</label>
				</Tippy>
			</div>
			<div className="asnp-flex asnp-mt-[1rem] asnp-w-full">
				<label>
					<span className="asnp-field-title">
						{ __( 'Font Size (Pixel)', 'asnp-easy-sale-badge' ) }
					</span>
					<div className="asnp-w-[10rem]">
						<input
							type="number"
							min="0"
							max="40"
							className="asnp-text-field"
							placeholder="0"
							disabled
						/>
					</div>
				</label>
				<label className="asnp-ml-10">
					<span className="asnp-field-title">
						{ __( 'Line Height (Pixel)', 'asnp-easy-sale-badge' ) }
					</span>
					<div className="asnp-w-[10rem]">
						<input
							type="number"
							className="asnp-text-field"
							min="0"
							max="100"
							placeholder="0"
							disabled
						/>
					</div>
				</label>
			</div>
		</div>
	);
};

export default AdvancedTextOption;
