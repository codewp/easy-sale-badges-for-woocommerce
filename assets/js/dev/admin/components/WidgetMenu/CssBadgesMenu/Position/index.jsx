import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import Tippy from '@tippyjs/react';
import ColorPicker from 'react-best-gradient-color-picker';
import { customColor } from '../../../../utils/constants';

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
		<div>
			<div className="asnp-ew-line">
				{ props.cssLabelPosition == 'onImage' ? (
					<div>
						<div className="asnp-mt-8">
							<span className="asnp-field-title asnp-text-base asnp-font-semibold">
								{ __(
									'Label Position',
									'easy-sale-badges-for-woocommerce'
								) }
							</span>
							<div className="asnp-w-full asnp-flex asnp-rounded-md asnp-mt-3">
								<div
									className="asnp-w-[10rem] asnp-flex"
									role="group"
								>
									<button
										type="button"
										className={
											'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
											( props.badgePositionY == 'top' &&
												'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
										}
										onClick={ () => {
											props.onChange(
												'badgePositionY',
												'top'
											);
										} }
									>
										{ __(
											'Top',
											'easy-sale-badges-for-woocommerce'
										) }
									</button>

									<button
										type="button"
										className={
											'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
											( props.badgePositionY ==
												'bottom' &&
												'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
										}
										onClick={ () => {
											props.onChange(
												'badgePositionY',
												'bottom'
											);
										} }
									>
										{ __(
											'Bottom',
											'easy-sale-badges-for-woocommerce'
										) }
									</button>
								</div>
								<div
									className="asnp-w-[10rem] asnp-flex"
									role="group"
								>
									<button
										disabled={ disEleven }
										type="button"
										className={
											disEleven
												? 'asnp-opacity-20 asnp-cursor-not-allowed asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200'
												: 'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
												  ( props.badgePositionX ==
														'left' &&
														'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
										}
										onClick={ () => {
											props.onChange(
												'badgePositionX',
												'left'
											);
										} }
									>
										{ __(
											'Left',
											'easy-sale-badges-for-woocommerce'
										) }
									</button>

									<button
										disabled={ disEleven }
										type="button"
										className={
											disEleven
												? 'asnp-opacity-20 asnp-cursor-not-allowed asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200'
												: 'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
												  ( props.badgePositionX ==
														'right' &&
														'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
										}
										onClick={ () => {
											props.onChange(
												'badgePositionX',
												'right'
											);
										} }
									>
										{ __(
											'Right',
											'easy-sale-badges-for-woocommerce'
										) }
									</button>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className=" asnp-mt-6">
						<span className="asnp-field-title asnp-text-base asnp-font-semibold">
							{ __(
								'Label Position',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div
							className="asnp-w-[10rem] asnp-flex asnp-mt-2"
							role="group"
						>
							<button
								type="button"
								className={
									'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
									( props.badgePositionOutofImage ==
										'flex-start' &&
										'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
								}
								onClick={ () => {
									props.onChange(
										'badgePositionOutofImage',
										'flex-start'
									);
								} }
							>
								{ __(
									'Left',
									'easy-sale-badges-for-woocommerce-pro'
								) }
							</button>
							<button
								type="button"
								className={
									'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
									( props.badgePositionOutofImage ==
										'center' &&
										'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
								}
								onClick={ () => {
									props.onChange(
										'badgePositionOutofImage',
										'center'
									);
								} }
							>
								{ __(
									'Center',
									'easy-sale-badges-for-woocommerce-pro'
								) }
							</button>
							<button
								type="button"
								className={
									'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
									( props.badgePositionOutofImage ==
										'flex-end' &&
										'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
								}
								onClick={ () => {
									props.onChange(
										'badgePositionOutofImage',
										'flex-end'
									);
								} }
							>
								{ __(
									'Right',
									'easy-sale-badges-for-woocommerce-pro'
								) }
							</button>
						</div>
					</div>
				) }
				<div className="asnp-mt-8">
					<span className="asnp-field-title asnp-text-base asnp-font-semibold">
						{ __(
							'Label Position (Pixel)',
							'easy-sale-badges-for-woocommerce'
						) }
					</span>
				</div>
				<div className="asnp-flex asnp-mt-3 asnp-mb-8">
					<label>
						<span className="asnp-field-title asnp-ml-6">
							{ __( 'Top', 'easy-sale-badges-for-woocommerce' ) }
						</span>
						<div className="asnp-w-[10rem] asnp-ml-6">
							<input
								disabled={ disablePositionTop }
								type="number"
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
						<span className="asnp-field-title asnp-ml-6">
							{ __(
								'Bottom',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="asnp-w-[10rem] asnp-ml-6">
							<input
								disabled={ disablePositionButtom }
								type="number"
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
						<span className="asnp-field-title asnp-ml-6">
							{ __( 'Left', 'easy-sale-badges-for-woocommerce' ) }
						</span>
						<div className="asnp-w-[10rem] asnp-ml-6">
							<input
								disabled={ disablePositionLeft }
								type="number"
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
						<span className="asnp-field-title asnp-ml-6">
							{ __(
								'Right',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="asnp-w-[10rem] asnp-ml-6">
							<input
								disabled={ disablePositionRight }
								type="number"
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
				<div className="asnp-flex asnp-mt-[2rem] asnp-w-full">
					<div>
						<Tippy
							trigger="click"
							interactive={ true }
							placement={ 'bottom' }
							content={
								<div className="asnp-p-4">
									<ColorPicker
										value={ props.badgeColorShadow }
										onChange={ ( color ) => {
											props.onChange(
												'badgeColorShadow',
												color
											);
										} }
										hideColorTypeBtns={ true }
										presets={ customColor }
									/>
								</div>
							}
						>
							<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
								<div className="asnp-h-15 asnp-w-[20rem] asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
									<div className="asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
										<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
											{ __(
												'Shadow Color',
												'easy-sale-badges-for-woocommerce'
											) }
										</span>
										<div
											style={ {
												backgroundColor: `${ props.badgeColorShadow }`,
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
					<label className="asnp-ml-6">
						<span className="asnp-field-title">
							{ __(
								'Shadow',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="asnp-w-[10rem]">
							<input
								type="number"
								min="0"
								max="40"
								className="asnp-text-field"
								placeholder="0"
								value={ props.boxShadowWidth }
								onChange={ ( e ) =>
									props.onChange(
										'boxShadowWidth',
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

export default Position;
