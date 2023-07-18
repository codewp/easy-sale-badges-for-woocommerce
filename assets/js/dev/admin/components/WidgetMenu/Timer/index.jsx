import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from '../../Toggle';
import Datetime from 'react-datetime';
import { IMAGES_URL } from './../../../utils/constants';
import Tippy from '@tippyjs/react';
import { TwitterPicker, ChromePicker } from 'react-color';
import { PlusIcon } from '@heroicons/react/solid';

const Timer = ( props ) => {
	const [ selected, setSelected ] = useState( null );
	const [ selectedTextColor, setSelectedTextColor ] = useState(
		props.textColor
	);
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
	return (
		<div>
			<div className="asnp-w-[25rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
				{ __( 'Timer', 'asnp-easy-whatsapp' ) }
			</div>
			<div className="asnp-space-y-1 asnp-mt-4 ">
				<label className="asnp-inline-flex asnp-space-x-2 asnp-items-center">
					<span className="asnp-field-title">
						{ __( 'Status', 'asnp-easy-whatsapp' ) }
					</span>
					<Toggle
						value={ 'true' == props.useTimer }
						onChange={ ( value ) =>
							props.onChange(
								'useTimer',
								value ? 'true' : 'false'
							)
						}
					/>
				</label>
				<div className="asnp-block">
					{ __( 'Enable or disable it.', 'asnp-easy-whatsapp' ) }
				</div>
			</div>
			<div className="asnp-w-[25rem] asnp-mt-4 asnp-text-lg asnp-font-semibold">
				{ __( 'Pick A Start / End Date', 'asnp-easy-whatsapp' ) }
			</div>
			<div className="asnp-flex">
				<div className="asnp-mt-3">
					<label className="asnp-block asnp-space-y-1">
						<span className="asnp-field-title">
							{ __( 'From Date / Time', 'asnp-easy-whatsapp' ) }
						</span>
						<Datetime
							onChange={ ( momentObj ) =>
								props.onChange(
									'selectedDateFrom',
									momentObj.format( 'YYYY-MM-DD HH:mm:ss' )
								)
							}
						/>
					</label>
				</div>
				<div className="asnp-mt-3 asnp-ml-8">
					<label className="asnp-block asnp-space-y-1">
						<span className="asnp-field-title">
							{ __( 'To Date / Time', 'asnp-easy-whatsapp' ) }
						</span>
						<Datetime
							onChange={ ( momentObj ) =>
								props.onChange(
									'selectedDateTo',
									momentObj.format( 'YYYY-MM-DD HH:mm:ss' )
								)
							}
						/>
					</label>
				</div>
			</div>
			<div className="asnp-ew-line">
				<div className="asnp-mt-2">
					<div className="asnp-w-[25rem] asnp-text-lg asnp-font-semibold">
						{ __( 'Timer Styles', 'asnp-easy-whatsapp' ) }
					</div>
					<div className="asnp-relative asnp-mb-3 asnp-mt-3 asnp-h-[25rem] asnp-pb-2 asnp-flex asnp-flex-col asnp-border-[1px] asnp-border-gray-300 asnp-rounded-2xl">
						<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-1">
							<div
								className={
									( selected === 1
										? 'asnp-border-indigo-700'
										: 'asnp-border-white' ) +
									'  asnp-containerBadgeStyle hover:asnp-border-indigo-700'
								}
								onClick={ () => {
									props.onChange( 'badgeStyles', '' );
									props.onChange( 'badgeAdv', '' );
									props.onChange( 'badgeTimer', 'timer1' );
									props.onChange( 'useTimerBadge', 'true' );
									props.onChange( 'imgbadge', 'false' );
									props.onChange( 'imgbadgeAdv', 'false' );
									setSelected( 1 );
								} }
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badge1.svg' }
								/>
							</div>
							<div
								className={
									( selected === 2
										? 'asnp-border-indigo-700'
										: 'asnp-border-white' ) +
									' asnp-py-6 asnp-px-2 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
								}
								onClick={ () => {
									props.onChange( 'badgeStyles', '' );
									props.onChange( 'badgeAdv', '' );
									props.onChange( 'badgeTimer', 'timer2' );
									props.onChange( 'useTimerBadge', 'true' );
									props.onChange( 'imgbadge', 'false' );
									props.onChange( 'imgbadgeAdv', 'false' );
									setSelected( 2 );
								} }
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badge2.svg' }
								/>
							</div>
							<div
								className={
									( selected === 3
										? 'asnp-border-indigo-700'
										: 'asnp-border-white' ) +
									' asnp-py-6 asnp-px-2 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
								}
								onClick={ () => {
									props.onChange( 'badgeStyles', '' );
									props.onChange( 'badgeAdv', '' );
									props.onChange( 'badgeTimer', 'timer3' );
									props.onChange( 'useTimerBadge', 'true' );
									props.onChange( 'imgbadge', 'false' );
									props.onChange( 'imgbadgeAdv', 'false' );
									setSelected( 3 );
								} }
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badge3.svg' }
								/>
							</div>
							<div
								className={
									( selected === 4
										? 'asnp-border-indigo-700'
										: 'asnp-border-white' ) +
									' asnp-py-6 asnp-px-2 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
								}
								onClick={ () => {
									props.onChange( 'badgeStyles', '' );
									props.onChange( 'badgeAdv', '' );
									props.onChange( 'badgeTimer', 'timer4' );
									props.onChange( 'useTimerBadge', 'true' );
									props.onChange( 'imgbadge', 'false' );
									props.onChange( 'imgbadgeAdv', 'false' );
									setSelected( 4 );
								} }
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badge4.svg' }
								/>
							</div>
							<div
								className={
									( selected === 5
										? 'asnp-border-indigo-700'
										: 'asnp-border-white' ) +
									' asnp-py-4 asnp-px-6 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
								}
								onClick={ () => {
									props.onChange( 'badgeStyles', '' );
									props.onChange( 'badgeAdv', '' );
									props.onChange( 'badgeTimer', 'timer5' );
									props.onChange( 'useTimerBadge', 'true' );
									props.onChange( 'imgbadge', 'false' );
									props.onChange( 'imgbadgeAdv', 'false' );
									setSelected( 5 );
								} }
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badge5.svg' }
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="asnp-ew-line">
				<div className="asnp-w-[25rem]">
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
													onChangeComplete={ (
														color
													) =>
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
												'asnp-easy-whatsapp'
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
									'asnp-easy-whatsapp'
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
									'asnp-easy-whatsapp'
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
				<div className="asnp-w-[25rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
					{ __( 'Additional Styles', 'asnp-easy-whatsapp' ) }
				</div>

				<div className="asnp-flex asnp-mt-2">
					<label>
						<span className="asnp-field-title">
							{ __( 'z-index', 'asnp-easy-whatsapp' ) }
						</span>
						<div className="asnp-w-[25rem]">
							<input
								type="number"
								className="asnp-text-field"
								value={ props.zIndexAdv }
								onChange={ ( e ) =>
									props.onChange(
										'zIndexAdv',
										e.target.value
									)
								}
							/>
						</div>
					</label>
				</div>
			</div>
			<div className="asnp-ew-line asnp-mt-6">
				<label className="asnp-space-y-1">
					<span className="asnp-field-title asnp-text-base asnp-font-semibold">
						{ __( 'Opacity', 'asnp-easy-whatsapp' ) }
					</span>
				</label>
				<div className="asnp-relative asnp-pt-1">
					<input
						type="range"
						className="asnp-form-range asnp-w-[21rem] asnp-h-6 asnp-p-0 asnp-bg-transparent focus:asnp-outline-none focus:asnp-ring-0 focus:asnp-shadow-none asnp-cursor-pointer"
						min="0"
						max="1"
						step="0.01"
						value={ props.opacity }
						onChange={ ( e ) =>
							props.onChange( 'opacity', e.target.value )
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
			</div>
			<div className="asnp-ew-line asnp-mt-6">
				<div className="asnp-mt-4">
					<span className="asnp-field-title asnp-text-base asnp-font-semibold">
						{ __( 'Label Position', 'asnp-easy-whatsapp' ) }
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
									props.onChange(
										'badgePositionY',
										'bottom'
									);
								} }
							>
								{ __( 'Bottom', 'asnp-easy-whatsapp' ) }
							</button>
						</div>
						<div
							className="asnp-w-[10rem] asnp-flex asnp-ml-24"
							role="group"
						>
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
								{ __( 'Left', 'asnp-easy-whatsapp' ) }
							</button>
							<button
								type="button"
								className={
									'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
									( props.badgePositionX == 'center' &&
										'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
								}
								onClick={ () => {
									props.onChange(
										'badgePositionX',
										'center'
									);
								} }
							>
								{ __( 'Center', 'asnp-easy-whatsapp' ) }
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
								{ __( 'Right', 'asnp-easy-whatsapp' ) }
							</button>
						</div>
					</div>
				</div>
				<div className="asnp-mt-8">
					<span className="asnp-field-title asnp-text-base asnp-font-semibold">
						{ __( 'Label Position (Pixel)', 'asnp-easy-whatsapp' ) }
					</span>
				</div>
				<div className="asnp-flex asnp-mt-3">
					<label>
						<span className="asnp-field-title">
							{ __( 'Top', 'asnp-easy-whatsapp' ) }
						</span>
						<div className="asnp-w-[11rem]">
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
							{ __( 'Bottom', 'asnp-easy-whatsapp' ) }
						</span>
						<div className="asnp-w-[11rem] asnp-ml-4">
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
				</div>
				<div className="asnp-flex asnp-mt-[2rem]">
					<label>
						<span className="asnp-field-title">
							{ __( 'Left', 'asnp-easy-whatsapp' ) }
						</span>
						<div className="asnp-w-[11rem]">
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
							{ __( 'Right', 'asnp-easy-whatsapp' ) }
						</span>
						<div className="asnp-w-[11rem] asnp-ml-4">
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
				<div className="asnp-mt-8">
					<span className="asnp-field-title asnp-text-base asnp-font-semibold">
						{ __( 'Labels', 'asnp-easy-whatsapp' ) }
					</span>
				</div>
				<div className="asnp-flex asnp-mt-3">
					<label>
						<span className="asnp-field-title">
							{ __( 'Days', 'asnp-easy-whatsapp' ) }
						</span>
						<div className="asnp-w-[11rem]">
							<input
								type="text"
								className="asnp-text-field"
								value={ props.labelDayTimer }
								onChange={ ( e ) =>
									props.onChange(
										'labelDayTimer',
										e.target.value
									)
								}
							/>
						</div>
					</label>
					<label>
						<span className="asnp-field-title asnp-ml-7">
							{ __( 'Hours', 'asnp-easy-whatsapp' ) }
						</span>
						<div className="asnp-w-[11rem] asnp-ml-7">
							<input
								type="text"
								className="asnp-text-field"
								value={ props.labelHoursTimer }
								onChange={ ( e ) =>
									props.onChange(
										'labelHoursTimer',
										e.target.value
									)
								}
							/>
						</div>
					</label>
					<label>
						<span className="asnp-field-title asnp-ml-7">
							{ __( 'Minutes', 'asnp-easy-whatsapp' ) }
						</span>
						<div className="asnp-w-[11rem] asnp-ml-7">
							<input
								type="text"
								className="asnp-text-field"
								value={ props.labelMinTimer }
								onChange={ ( e ) =>
									props.onChange(
										'labelMinTimer',
										e.target.value
									)
								}
							/>
						</div>
					</label>
					<label>
						<span className="asnp-field-title asnp-ml-7">
							{ __( 'Seconds', 'asnp-easy-whatsapp' ) }
						</span>
						<div className="asnp-w-[11rem] asnp-ml-7">
							<input
								type="text"
								className="asnp-text-field"
								value={ props.labelSecTimer }
								onChange={ ( e ) =>
									props.onChange(
										'labelSecTimer',
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

export default Timer;
