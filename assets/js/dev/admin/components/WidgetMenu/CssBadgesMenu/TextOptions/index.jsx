import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import Tippy from '@tippyjs/react';
import { TwitterPicker, ChromePicker } from 'react-color';
import { PlusIcon } from '@heroicons/react/solid';

const TextOptions = ( props ) => {
	const [ selectedTextColor, setSelectedTextColor ] = useState(
		props.textColor
	);
	const colors = [
		'#095e54',
		'#9333ea',
		'#22c55e',
		'#00D084',
		'#8ED1FC',
		'#0693E3',
		'#ABB8C3',
		'#EB144C',
		'#F78DA7',
		'#9900EF',
		'#cb997e',
		'#ddbea9',
		'#b7b7a4',
		'#bb3e03',
		'#d8e2dc',
		'#0096c7',
		'#e5989b',
		'#006d77',
		'#f77f00',
		'#6930c3',
		'#87bba2',
		'#8e94f2',
		'#43aa8b',
		'#ffa6c1',
		'#723c70',
		'#e574bc',
		'#7bdff2',
		'#e4ff1a',
		'#dabeca',
		'#344e41',
		'#a3b18a',
		'#141E27',
		'#ffffff',
		'#e5e7eb',
		'#FFF3E4',
	];
	const [ disableLineHeight, setDisableLineHeight ] = useState( false );

	useEffect( () => {
		if (
			props.badgeStyles == 'badge7' ||
			props.badgeStyles == 'badge8' ||
			props.badgeStyles == 'badge9' ||
			props.badgeStyles == 'badge10' ||
			props.badgeStyles == 'badge11' ||
			props.badgeStyles == 'badge12'
		) {
			setDisableLineHeight( true );
		} else {
			setDisableLineHeight( false );
		}
	}, [ props.badgeStyles ] );

	return (
		<div className="asnp-ew-line">
			<div className="asnp-w-[25rem]">
				<div className="asnp-mt-[1rem]">
					<label>
						<span className="asnp-field-title">
							{ __( 'Label', 'asnp-easy-sale-badge' ) }
						</span>
						<input
							type="text"
							className="asnp-text-field"
							placeholder="Label"
							value={ props.badgeLabel }
							onChange={ ( e ) =>
								props.onChange( 'badgeLabel', e.target.value )
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
							<div>
								<TwitterPicker
									color={ selectedTextColor }
									onChangeComplete={ ( color ) =>
										setSelectedTextColor( color.hex )
									}
									onChange={ ( color ) => {
										props.onChange(
											'textColor',
											color.hex
										);
									} }
									colors={ colors }
								/>
								<Tippy
									trigger="click"
									interactive={ true }
									placement={ 'bottom' }
									content={
										<div>
											<ChromePicker
												color={ selectedTextColor }
												onChangeComplete={ ( color ) =>
													setSelectedTextColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'textColor',
														color.hex
													);
												} }
											/>
										</div>
									}
								>
									<div className="asnp-h-7 asnp-w-7 asnp-bg-slate-300  asnp-flex asnp-justify-center asnp-items-center asnp-cursor-pointer">
										<PlusIcon className="asnp-h-4 asnp-w-4" />
									</div>
								</Tippy>
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
											backgroundColor: `${ selectedTextColor }`,
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
								disabled={ disableLineHeight }
								type="number"
								className={
									disableLineHeight
										? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
										: 'asnp-text-field'
								}
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

export default TextOptions;
