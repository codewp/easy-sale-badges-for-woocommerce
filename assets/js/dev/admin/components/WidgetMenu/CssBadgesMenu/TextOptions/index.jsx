import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import Tippy from '@tippyjs/react';
import ColorPicker from 'react-best-gradient-color-picker';
import { customColor } from '../../../../utils/constants';

const TextOptions = ( props ) => {
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
			<div className="asnp-mt-[1rem] asnp-w-[25rem]">
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
			<div className="asnp-mt-3 asnp-w-[25rem]">
				<Tippy
					trigger="click"
					interactive={ true }
					placement={ 'bottom' }
					content={
						<div className="asnp-p-4">
							<ColorPicker
								value={ props.textColor }
								onChange={ ( color ) => {
									props.onChange( 'textColor', color );
								} }
								hideColorTypeBtns={ true }
								presets={ customColor }
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
			<div className="asnp-flex asnp-mt-[2rem] asnp-w-full">
				<label>
					<span className="asnp-field-title">
						{ __( 'Font Size (Pixel)', 'asnp-easy-sale-badge' ) }
					</span>
					<div className="asnp-w-[15rem]">
						<input
							type="number"
							min="0"
							max="40"
							className="asnp-text-field"
							placeholder="0"
							value={ props.fontSizeText }
							onChange={ ( e ) =>
								props.onChange( 'fontSizeText', e.target.value )
							}
						/>
					</div>
				</label>
				<label className="asnp-ml-10">
					<span className="asnp-field-title">
						{ __( 'Line Height (Pixel)', 'asnp-easy-sale-badge' ) }
					</span>
					<div className="asnp-w-[15rem]">
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
	);
};

export default TextOptions;
