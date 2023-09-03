import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';

const Position = ( props ) => {
	const [ disablePositionButtom, setDisablePositionButtom ] = useState(
		false
	);
	const [ disablePositionTop, setDisablePositionTop ] = useState( false );
	const [ disablePositionLeft, setDisablePositionLeft ] = useState( false );
	const [ disablePositionRight, setDisablePositionRight ] = useState( false );
	const [ disEleven, setDisEleven ] = useState( false );

	useEffect( () => {
		if ( props.badgePositionY === 'top' ) {
			setDisablePositionButtom( true );
			setDisablePositionTop( false );
		} else {
			setDisablePositionTop( true );
			setDisablePositionButtom( false );
		}
	}, [ props.badgePositionY ] );

	useEffect( () => {
		if ( props.badgePositionX === 'left' ) {
			setDisablePositionRight( true );
			setDisablePositionLeft( false );
		} else {
			setDisablePositionLeft( true );
			setDisablePositionRight( false );
		}
	}, [ props.badgePositionX ] );

	useEffect( () => {
		if (
			props.badgeStyles === 'badge11' &&
			( props.badgePositionY === 'top' ||
				props.badgePositionY === 'bottom' )
		) {
			setDisEleven( true );
			setDisablePositionRight( true );
			setDisablePositionLeft( true );
		} else {
			setDisEleven( false );
		}
	}, [ props.badgeStyles ] );

	return (
		<div className="asnp-ew-line">
			<div className="asnp-mt-8">
				<span className="asnp-field-title asnp-text-base asnp-font-semibold">
					{ __( 'Label Position', 'asnp-easy-sale-badge' ) }
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
							{ __( 'Top', 'asnp-easy-sale-badge' ) }
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
							{ __( 'Bottom', 'asnp-easy-sale-badge' ) }
						</button>
					</div>
					<div className="asnp-w-[10rem] asnp-flex" role="group">
						<button
							disabled={ disEleven }
							type="button"
							className={
								disEleven
									? 'asnp-opacity-20 asnp-cursor-not-allowed asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200'
									: 'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
									  ( props.badgePositionX == 'left' &&
											'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
							}
							onClick={ () => {
								props.onChange( 'badgePositionX', 'left' );
							} }
						>
							{ __( 'Left', 'asnp-easy-sale-badge' ) }
						</button>

						<button
							disabled={ disEleven }
							type="button"
							className={
								disEleven
									? 'asnp-opacity-20 asnp-cursor-not-allowed asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200'
									: 'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
									  ( props.badgePositionX == 'right' &&
											'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
							}
							onClick={ () => {
								props.onChange( 'badgePositionX', 'right' );
							} }
						>
							{ __( 'Right', 'asnp-easy-sale-badge' ) }
						</button>
					</div>
				</div>
			</div>
			<div className="asnp-mt-8">
				<span className="asnp-field-title asnp-text-base asnp-font-semibold">
					{ __( 'Label Position (Pixel)', 'asnp-easy-sale-badge' ) }
				</span>
			</div>
			<div className="asnp-flex asnp-mt-3 asnp-mb-8">
				<label>
					<span className="asnp-field-title asnp-ml-4">
						{ __( 'Top', 'asnp-easy-sale-badge' ) }
					</span>
					<div className="asnp-w-[10rem] asnp-ml-4">
						<input
							disabled={ disablePositionTop }
							type="number"
							min="0"
							max="200"
							className={
								disablePositionTop
									? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
									: 'asnp-text-field'
							}
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
						{ __( 'Bottom', 'asnp-easy-sale-badge' ) }
					</span>
					<div className="asnp-w-[10rem] asnp-ml-4">
						<input
							disabled={ disablePositionButtom }
							type="number"
							min="0"
							max="200"
							className={
								disablePositionButtom
									? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
									: 'asnp-text-field'
							}
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
				<label>
					<span className="asnp-field-title asnp-ml-4">
						{ __( 'Left', 'asnp-easy-sale-badge' ) }
					</span>
					<div className="asnp-w-[10rem] asnp-ml-4">
						<input
							disabled={ disablePositionLeft }
							type="number"
							min="0"
							max="200"
							className={
								disablePositionLeft
									? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
									: 'asnp-text-field'
							}
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
						{ __( 'Right', 'asnp-easy-sale-badge' ) }
					</span>
					<div className="asnp-w-[10rem] asnp-ml-4">
						<input
							disabled={ disablePositionRight }
							type="number"
							min="0"
							max="200"
							className={
								disablePositionRight
									? 'asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed'
									: 'asnp-text-field'
							}
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
