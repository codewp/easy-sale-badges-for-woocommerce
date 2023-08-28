import React from 'react';
import { __ } from '@wordpress/i18n';
import Position from '../../CssBadgesMenu/Position';

const Options = ( props ) => {
	return (
		<div>
			<div className="asnp-flex asnp-mt-[1rem]">
				<label>
					<span className="asnp-field-title">
						{ __( 'Size (Pixel)', 'asnp-easy-sale-badge' ) }
					</span>
					<div className="asnp-w-[11rem]">
						<input
							type="number"
							min="0"
							max="200"
							className="asnp-text-field"
							placeholder="0"
							value={ props.widthBadgeImg }
							onChange={ ( e ) =>
								props.onChange(
									'widthBadgeImg',
									e.target.value
								)
							}
						/>
					</div>
				</label>
				<label>
					<span className="asnp-field-title asnp-ml-4">
						{ __( 'z-index', 'asnp-easy-sale-badge' ) }
					</span>
					<div className="asnp-w-[11rem] asnp-ml-4">
						<input
							type="number"
							min="0"
							max="200"
							className="asnp-text-field"
							value={ props.zIndexImg }
							onChange={ ( e ) =>
								props.onChange( 'zIndexImg', e.target.value )
							}
						/>
					</div>
				</label>
			</div>
			<div className="asnp-mt-4">
				<label className="asnp-space-y-1">
					<span className="asnp-field-title asnp-text-base asnp-font-semibold">
						{ __( 'Opacity', 'asnp-easy-sale-badge' ) }
					</span>
				</label>
			</div>
			<div className="asnp-relative asnp-pt-1">
				<input
					type="range"
					className="asnp-form-range asnp-w-[21rem] asnp-h-6 asnp-p-0 asnp-bg-transparent focus:asnp-outline-none focus:asnp-ring-0 focus:asnp-shadow-none asnp-cursor-pointer"
					min="0"
					max="1"
					step="0.01"
					value={ props.opacityImg }
					onChange={ ( e ) =>
						props.onChange( 'opacityImg', e.target.value )
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
							{ __( 'Rotation', 'asnp-easy-sale-badge' ) }
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
								value={ props.rotationXImg }
								onChange={ ( e ) =>
									props.onChange(
										'rotationXImg',
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
								value={ props.rotationYImg }
								onChange={ ( e ) =>
									props.onChange(
										'rotationYImg',
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
							value={ props.rotationZImg }
							onChange={ ( e ) =>
								props.onChange( 'rotationZImg', e.target.value )
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

			<Position
				onChange={ props.onChange }
				badgePositionY={ props.badgePositionY }
				badgePositionX={ props.badgePositionX }
				badgePositionTop={ props.badgePositionTop }
				badgePositionBottom={ props.badgePositionBottom }
				badgePositionLeft={ props.badgePositionLeft }
				badgePositionRight={ props.badgePositionRight }
			/>
		</div>
	);
};

export default Options;
