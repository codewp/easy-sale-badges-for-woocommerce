import React from 'react';
import { __ } from '@wordpress/i18n';
import Tippy from '@tippyjs/react';
import ColorPicker from 'react-best-gradient-color-picker';

const AdvancedTextOption = ( props ) => {
	return (
		<div className="asnp-ew-line">
			<div className="asnp-w-[25rem]">
				<div className="asnp-mt-[1rem]">
					<label>
						<span className="asnp-field-title">
							{ __( 'Badge Label', 'asnp-easy-sale-badge' ) }
						</span>
						<input
							type="text"
							className="asnp-text-field"
							placeholder="Badge Label"
							value={ props.badgeLabelAdv }
							onChange={ ( e ) =>
								props.onChange( 'badgeLabelAdv', e.target.value )
							}
						/>
					</label>
				</div>
				<div className="asnp-mt-3">
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div className="asnp-bg-gray-300 asnp-w-[22rem] asnp-h-[39rem] asnp-rounded-lg asnp-px-6 asnp-py-6">
								<ColorPicker
									value={ props.textColor }
									onChange={ ( color ) => {
										props.onChange( 'textColor', color );
									} }
									hideColorTypeBtns={ true }
								/>
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
										style={ {
											backgroundColor: `${ props.textColor }`,
										} }
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
							{ __(
								'Font Size (Pixel)',
								'asnp-easy-sale-badge'
							) }
						</span>
						<div className="asnp-w-[25rem]">
							<input
								type="number"
								min="0"
								max="40"
								className="asnp-text-field"
								placeholder="0"
								value={ props.fontSizeText }
								onChange={ ( e ) =>
									props.onChange(
										'fontSizeText',
										e.target.value
									)
								}
							/>
						</div>
					</label>
				</div>
				<div className="asnp-flex asnp-mt-[1rem] asnp-w-full">
					<label>
						<span className="asnp-field-title">
							{ __(
								'Line Height (Pixel)',
								'asnp-easy-sale-badge'
							) }
						</span>
						<div className="asnp-w-[25rem]">
							<input
								type="number"
								className="asnp-text-field"
								min="0"
								max="100"
								placeholder="0"
								value={ props.lineHeightText }
								onChange={ ( e ) =>
									props.onChange(
										'lineHeightText',
										e.target.value
									)
								}
							/>
						</div>
					</label>
				</div>
			</div>
		</div>
	);
};

export default AdvancedTextOption;
