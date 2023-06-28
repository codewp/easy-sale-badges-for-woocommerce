import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';

const Position = ( props ) => {
	return (
		<div className="asnp-ew-line">
			<div className="asnp-mt-4">
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

export default Position;
