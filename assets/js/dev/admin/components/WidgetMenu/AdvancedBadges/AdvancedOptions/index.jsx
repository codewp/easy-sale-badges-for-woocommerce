import React from 'react';
import { __ } from '@wordpress/i18n';
import Tippy from '@tippyjs/react';
import ColorPicker from 'react-best-gradient-color-picker';

const AdvancedOptions = () => {
	return (
		<div className="asnp-ew-line">
			<div className="asnp-w-[25rem]">
				<div className="asnp-mt-[1rem]">
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<div className="asnp-p-4">
									<ColorPicker hideColorTypeBtns={ true } />
								</div>
							</div>
						}
					>
						<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
							<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className="asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Main Badge Color',
											'easy-sale-badges-for-woocommerce'
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
				<div className="asnp-mt-[1rem]">
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div className="asnp-p-4">
								<ColorPicker hideColorTypeBtns={ true } />
							</div>
						}
					>
						<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
							<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className="asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Secondary Badge Color',
											'easy-sale-badges-for-woocommerce'
										) }
									</span>
									<div className="asnp-flex asnp-w-7 asnp-h-6 asnp-rounded-full asnp-my-2"></div>
								</div>
							</div>
						</label>
					</Tippy>
				</div>
				<div className="asnp-w-[25rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
					{ __( 'Extra Styles', 'easy-sale-badges-for-woocommerce' ) }
				</div>

				<div className="asnp-flex asnp-mt-2">
					<label>
						<span className="asnp-field-title">
							{ __( 'z-index', 'easy-sale-badges-for-woocommerce' ) }
						</span>
						<div className="asnp-w-[25rem]">
							<input type="number" className="asnp-text-field" />
						</div>
					</label>
				</div>
			</div>
		</div>
	);
};

export default AdvancedOptions;
