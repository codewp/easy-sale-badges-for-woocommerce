import React from 'react';
import { __ } from '@wordpress/i18n';

const Options = ( props ) => {
	return (
		<div className="asnp-ew-line">
			<div className="asnp-flex asnp-mt-[1rem]">
				<label>
					<span className="asnp-field-title">
						{ __( 'Size (Pixel)', 'asnp-easy-whatsapp' ) }
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
						{ __( 'z-index', 'asnp-easy-whatsapp' ) }
					</span>
					<div className="asnp-w-[11rem] asnp-ml-4">
						<input
							type="number"
							min="0"
							max="200"
							className="asnp-text-field"
							placeholder="0"
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
						{ __( 'Opacity', 'asnp-easy-whatsapp' ) }
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
							{ __( 'Rotation', 'asnp-easy-whatsapp' ) }
						</span>
					</label>
					<div className="asnp-flex asnp-justify-between">
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
						<div className="asnp-relative asnp-pt-1">
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

			<div className="asnp-mt-8">
				<span className="asnp-field-title asnp-text-base asnp-font-semibold">
					{ __( 'Badge Position', 'asnp-easy-whatsapp' ) }
				</span>
				<div className="asnp-w-full asnp-flex asnp-rounded-md asnp-mt-3">
					<div className="asnp-w-[10rem] asnp-flex" role="group">
						<button
							type="button"
							className={
								'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
								( props.badgePositionY == 'top' &&
									'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
							}
							onClick={ () => {
								props.onChange( 'badgePositionY', 'top' );
							} }
						>
							{ __( 'Top', 'asnp-easy-whatsapp' ) }
						</button>

						<button
							type="button"
							className={
								'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
								( props.badgePositionY == 'bottom' &&
									'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
							}
							onClick={ () => {
								props.onChange( 'badgePositionY', 'bottom' );
							} }
						>
							{ __( 'Bottom', 'asnp-easy-whatsapp' ) }
						</button>
					</div>
					<div className="asnp-w-[10rem] asnp-flex" role="group">
						<button
							type="button"
							className={
								'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
								( props.badgePositionX == 'left' &&
									'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
							}
							onClick={ () => {
								props.onChange( 'badgePositionX', 'left' );
							} }
						>
							{ __( 'Left', 'asnp-easy-whatsapp' ) }
						</button>

						<button
							type="button"
							className={
								'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
								( props.badgePositionX == 'right' &&
									'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
							}
							onClick={ () => {
								props.onChange( 'badgePositionX', 'right' );
							} }
						>
							{ __( 'Right', 'asnp-easy-whatsapp' ) }
						</button>
					</div>
				</div>
			</div>
			<div className="asnp-mt-8">
				<span className="asnp-field-title asnp-text-base asnp-font-semibold">
					{ __( 'Badge Position (Pixel)', 'asnp-easy-whatsapp' ) }
				</span>
			</div>
			<div className="asnp-flex asnp-mt-3">
				<label>
					<span className="asnp-field-title">
						{ __( 'Top', 'asnp-easy-whatsapp' ) }
					</span>
					<div className="asnp-w-[11rem]">
						<input
							type="number"
							min="0"
							max="200"
							className="asnp-text-field"
							placeholder="0"
							value={ props.badgePositionTop }
							onChange={ ( e ) =>
								props.onChange(
									'badgePositionTop',
									e.target.value
								)
							}
						/>
					</div>
				</label>
				<label>
					<span className="asnp-field-title asnp-ml-4">
						{ __( 'Bottom', 'asnp-easy-whatsapp' ) }
					</span>
					<div className="asnp-w-[11rem] asnp-ml-4">
						<input
							type="number"
							min="0"
							max="200"
							className="asnp-text-field"
							placeholder="0"
							value={ props.badgePositionBottom }
							onChange={ ( e ) =>
								props.onChange(
									'badgePositionBottom',
									e.target.value
								)
							}
						/>
					</div>
				</label>
			</div>
			<div className="asnp-flex asnp-mt-[2rem]">
				<label>
					<span className="asnp-field-title">
						{ __( 'Left', 'asnp-easy-whatsapp' ) }
					</span>
					<div className="asnp-w-[11rem]">
						<input
							type="number"
							min="0"
							max="200"
							className="asnp-text-field"
							placeholder="0"
							value={ props.badgePositionLeft }
							onChange={ ( e ) =>
								props.onChange(
									'badgePositionLeft',
									e.target.value
								)
							}
						/>
					</div>
				</label>
				<label>
					<span className="asnp-field-title asnp-ml-4">
						{ __( 'Right', 'asnp-easy-whatsapp' ) }
					</span>
					<div className="asnp-w-[11rem] asnp-ml-4">
						<input
							type="number"
							min="0"
							max="200"
							className="asnp-text-field"
							placeholder="0"
							value={ props.badgePositionRight }
							onChange={ ( e ) =>
								props.onChange(
									'badgePositionRight',
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

export default Options;
