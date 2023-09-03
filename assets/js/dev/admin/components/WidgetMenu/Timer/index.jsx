import React, { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from '../../Toggle';
import Datetime from 'react-datetime';
import { IMAGES_URL } from './../../../utils/constants';
import Tippy from '@tippyjs/react';
import ColorPicker from 'react-best-gradient-color-picker';

import './style.scss';

const Timer = ( props ) => {
	const [ selected, setSelected ] = useState( null );
	const [ selectHorizVert, setSelectHorizVert ] = useState( 'horiz' );
	const [ disablePositionButtom, setDisablePositionButtom ] = useState(
		false
	);
	const [ disablePositionTop, setDisablePositionTop ] = useState( false );
	const [ disablePositionLeft, setDisablePositionLeft ] = useState( false );
	const [ disablePositionRight, setDisablePositionRight ] = useState( false );

	useEffect( () => {
		if ( props.badgePositionY === 'top' ) {
			setDisablePositionButtom( true );
			setDisablePositionTop( false );
		} else if ( props.badgePositionY === 'center' ) {
			setDisablePositionTop( true );
			setDisablePositionButtom( true );
		} else {
			setDisablePositionTop( true );
			setDisablePositionButtom( false );
		}
	}, [ props.badgePositionY ] );

	useEffect( () => {
		if ( props.badgePositionX === 'left' ) {
			setDisablePositionRight( true );
			setDisablePositionLeft( false );
		} else if ( props.badgePositionX === 'center' ) {
			setDisablePositionRight( true );
			setDisablePositionLeft( true );
		} else {
			setDisablePositionLeft( true );
			setDisablePositionRight( false );
		}
	}, [ props.badgePositionX ] );

	useEffect( () => {
		if (
			props.badgeTimer == 'timer1' ||
			props.badgeTimer == 'timer2' ||
			props.badgeTimer == 'timer3' ||
			props.badgeTimer == 'timer4'
		) {
			setSelectHorizVert( 'horiz' );
		} else {
			setSelectHorizVert( 'vert' );
		}
	}, [ props.badgeTimer ] );

	return (
		<div>
			<div className="asnp-w-[25rem] asnp-mt-2 asnp-text-lg asnp-font-semibold">
				{ __( 'Timer', 'asnp-easy-sale-badge' ) }
			</div>
			<div className="asnp-space-y-1 asnp-mt-4 ">
				<label className="asnp-inline-flex asnp-space-x-2 asnp-items-center">
					<span className="asnp-field-title">
						{ __( 'Status', 'asnp-easy-sale-badge' ) }
					</span>
					<Toggle
						value={ 1 == props.useTimerBadge }
						onChange={ ( value ) =>
							props.onChange( 'useTimerBadge', value ? 1 : 0 )
						}
					/>
				</label>
				<div className="asnp-block">
					{ __( 'Enable or disable it.', 'asnp-easy-sale-badge' ) }
				</div>
			</div>
			<div className="asnp-w-[25rem] asnp-mt-4 asnp-text-lg asnp-font-semibold">
				{ __( 'Pick A Start / End Date', 'asnp-easy-sale-badge' ) }
			</div>
			<div className="asnp-flex">
				<div className="asnp-mt-3">
					<label className="asnp-block asnp-space-y-1">
						<span className="asnp-field-title">
							{ __( 'From Date / Time', 'asnp-easy-sale-badge' ) }
						</span>
						<Datetime
							initialValue={ props.selectedDateFrom }
							onChange={ ( momentObj ) =>
								props.onChange(
									'selectedDateFrom',
									momentObj.format( 'YYYY-MM-DD HH:mm' )
								)
							}
						/>
					</label>
				</div>
				<div className="asnp-mt-3 asnp-ml-8">
					<label className="asnp-block asnp-space-y-1">
						<span className="asnp-field-title">
							{ __( 'To Date / Time', 'asnp-easy-sale-badge' ) }
						</span>
						<Datetime
							initialValue={ props.selectedDateTo }
							onChange={ ( momentObj ) =>
								props.onChange(
									'selectedDateTo',
									momentObj.format( 'YYYY-MM-DD HH:mm' )
								)
							}
						/>
					</label>
				</div>
			</div>
			<div className="asnp-ew-line">
				<div className="asnp-mt-2">
					<div className="asnp-w-[25rem] asnp-text-lg asnp-font-semibold">
						{ __( 'Timer Styles', 'asnp-easy-sale-badge' ) }
					</div>
					<div className="asnp-relative asnp-mb-3 asnp-mt-3 asnp-h-[30rem] asnp-flex asnp-flex-col asnp-border-2 asnp-rounded-md asnp-pr-1 asnp-scrollBarImageB">
						<div className="asnp-w-full asnp-ml-8 asnp-mt-4 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
							<label>
								{ __( 'Horizontal', 'asnp-easy-sale-badge' ) }
							</label>
						</div>
						<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-1">
							<div
								className={
									( selected === 1
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-py-8 asnp-px-4 asnp-containerBadgeTimer hover:asnp-border-indigo-700'
								}
								onClick={ () => {
									props.onChange( 'badgeStyles', '' );
									props.onChange( 'badgeAdv', '' );
									props.onChange( 'badgeTimer', 'timer1' );
									props.onChange( 'useTimerBadge', 1 );
									props.onChange( 'imgbadge', 0 );
									props.onChange( 'imgbadgeAdv', 0 );
									setSelected( 1 );
								} }
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badgeTimer1.png' }
								/>
							</div>
							<div
								className={
									( selected === 2
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-py-8 asnp-px-4 asnp-containerBadgeTimer hover:asnp-border-indigo-700'
								}
								onClick={ () => {
									props.onChange( 'badgeStyles', '' );
									props.onChange( 'badgeAdv', '' );
									props.onChange( 'badgeTimer', 'timer2' );
									props.onChange( 'useTimerBadge', 1 );
									props.onChange( 'imgbadge', 0 );
									props.onChange( 'imgbadgeAdv', 0 );
									setSelected( 2 );
								} }
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badgeTimer2.png' }
								/>
							</div>
						</div>
						<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-1">
							<div
								className={
									( selected === 3
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-py-8 asnp-px-4 asnp-containerBadgeTimer hover:asnp-border-indigo-700'
								}
								onClick={ () => {
									props.onChange( 'badgeStyles', '' );
									props.onChange( 'badgeAdv', '' );
									props.onChange( 'badgeTimer', 'timer3' );
									props.onChange( 'useTimerBadge', 1 );
									props.onChange( 'imgbadge', 0 );
									props.onChange( 'imgbadgeAdv', 0 );
									setSelected( 3 );
								} }
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badgeTimer3.png' }
								/>
							</div>
							<div
								className={
									( selected === 4
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-py-8 asnp-px-4 asnp-containerBadgeTimer hover:asnp-border-indigo-700'
								}
								onClick={ () => {
									props.onChange( 'badgeStyles', '' );
									props.onChange( 'badgeAdv', '' );
									props.onChange( 'badgeTimer', 'timer4' );
									props.onChange( 'useTimerBadge', 1 );
									props.onChange( 'imgbadge', 0 );
									props.onChange( 'imgbadgeAdv', 0 );
									setSelected( 4 );
								} }
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badgeTimer4.png' }
								/>
							</div>
						</div>
						<div className="asnp-w-full asnp-ml-8 asnp-mt-1 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
							<label>
								{ __( 'Vertical', 'asnp-easy-sale-badge' ) }
							</label>
						</div>
						<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-1">
							<div
								className={
									( selected === 5
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-p-4 asnp-containerBadgeTimerV hover:asnp-border-indigo-700'
								}
								onClick={ () => {
									props.onChange( 'badgeStyles', '' );
									props.onChange( 'badgeAdv', '' );
									props.onChange( 'badgeTimer', 'timer5' );
									props.onChange( 'useTimerBadge', 1 );
									props.onChange( 'imgbadge', 0 );
									props.onChange( 'imgbadgeAdv', 0 );
									setSelected( 5 );
								} }
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badgeTimerV1.png' }
								/>
							</div>
							<div
								className={
									( selected === 6
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-p-4 asnp-containerBadgeTimerV hover:asnp-border-indigo-700'
								}
								onClick={ () => {
									props.onChange( 'badgeStyles', '' );
									props.onChange( 'badgeAdv', '' );
									props.onChange( 'badgeTimer', 'timer6' );
									props.onChange( 'useTimerBadge', 1 );
									props.onChange( 'imgbadge', 0 );
									props.onChange( 'imgbadgeAdv', 0 );
									setSelected( 6 );
								} }
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badgeTimerV2.png' }
								/>
							</div>
							<div
								className={
									( selected === 7
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-p-4 asnp-containerBadgeTimerV hover:asnp-border-indigo-700'
								}
								onClick={ () => {
									props.onChange( 'badgeStyles', '' );
									props.onChange( 'badgeAdv', '' );
									props.onChange( 'badgeTimer', 'timer7' );
									props.onChange( 'useTimerBadge', 1 );
									props.onChange( 'imgbadge', 0 );
									props.onChange( 'imgbadgeAdv', 0 );
									setSelected( 7 );
								} }
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badgeTimerV3.png' }
								/>
							</div>
							<div
								className={
									( selected === 8
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-p-4 asnp-containerBadgeTimerV hover:asnp-border-indigo-700'
								}
								onClick={ () => {
									props.onChange( 'badgeStyles', '' );
									props.onChange( 'badgeAdv', '' );
									props.onChange( 'badgeTimer', 'timer8' );
									props.onChange( 'useTimerBadge', 1 );
									props.onChange( 'imgbadge', 0 );
									props.onChange( 'imgbadgeAdv', 0 );
									setSelected( 8 );
								} }
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badgeTimerV4.png' }
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
									<div className="asnp-p-4">
										<ColorPicker
											value={ props.bgColorTimer }
											onChange={ ( color ) => {
												props.onChange(
													'bgColorTimer',
													color
												);
											} }
										/>
									</div>
								</div>
							}
						>
							<label className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2">
								<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
									<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
										<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
											{ __(
												'Background Color',
												'asnp-easy-sale-badge'
											) }
										</span>
										<div
											style={ {
												backgroundColor: `${ props.bgColorTimer }`,
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
					<div className="asnp-mt-3">
						<Tippy
							trigger="click"
							interactive={ true }
							placement={ 'bottom' }
							content={
								<div className="asnp-p-4">
									<ColorPicker
										value={ props.textColor }
										onChange={ ( color ) => {
											props.onChange(
												'textColor',
												color
											);
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
									value={ props.fontSizeLabelTimer }
									onChange={ ( e ) =>
										props.onChange(
											'fontSizeLabelTimer',
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
									value={ props.lineHeightLabelTimer }
									onChange={ ( e ) =>
										props.onChange(
											'lineHeightLabelTimer',
											e.target.value
										)
									}
								/>
							</div>
						</label>
					</div>
				</div>
				<div className="asnp-w-[25rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
					{ __( 'Additional Styles', 'asnp-easy-sale-badge' ) }
				</div>

				<div className="asnp-flex asnp-mt-2">
					<label>
						<span className="asnp-field-title">
							{ __( 'z-index', 'asnp-easy-sale-badge' ) }
						</span>
						<div className="asnp-w-[25rem]">
							<input
								type="number"
								className="asnp-text-field"
								value={ props.zIndexTimer }
								onChange={ ( e ) =>
									props.onChange(
										'zIndexTimer',
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
						{ __( 'Opacity', 'asnp-easy-sale-badge' ) }
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
						{ __( 'Label Position', 'asnp-easy-sale-badge' ) }
					</span>
					{ selectHorizVert === 'horiz' && (
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
										props.onChange(
											'badgePositionY',
											'bottom'
										);
									} }
								>
									{ __( 'Bottom', 'asnp-easy-sale-badge' ) }
								</button>
							</div>
							<div
								className="asnp-w-[10rem] asnp-flex asnp-ml-24"
								role="group"
							>
								<button
									type="button"
									className={
										'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
										( props.badgePositionX == 'left' &&
											'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
									}
									onClick={ () => {
										props.onChange(
											'badgePositionX',
											'left'
										);
									} }
								>
									{ __( 'Left', 'asnp-easy-sale-badge' ) }
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
									{ __( 'Center', 'asnp-easy-sale-badge' ) }
								</button>
								<button
									type="button"
									className={
										'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
										( props.badgePositionX == 'right' &&
											'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
									}
									onClick={ () => {
										props.onChange(
											'badgePositionX',
											'right'
										);
									} }
								>
									{ __( 'Right', 'asnp-easy-sale-badge' ) }
								</button>
							</div>
						</div>
					) }
					{ selectHorizVert === 'vert' && (
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
									{ __( 'Top', 'asnp-easy-sale-badge' ) }
								</button>
								<button
									type="button"
									className={
										'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
										( props.badgePositionY == 'center' &&
											'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
									}
									onClick={ () => {
										props.onChange(
											'badgePositionY',
											'center'
										);
									} }
								>
									{ __( 'Center', 'asnp-easy-sale-badge' ) }
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
									{ __( 'Bottom', 'asnp-easy-sale-badge' ) }
								</button>
							</div>
							<div
								className="asnp-w-[10rem] asnp-flex asnp-ml-24"
								role="group"
							>
								<button
									type="button"
									className={
										'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
										( props.badgePositionX == 'left' &&
											'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
									}
									onClick={ () => {
										props.onChange(
											'badgePositionX',
											'left'
										);
									} }
								>
									{ __( 'Left', 'asnp-easy-sale-badge' ) }
								</button>

								<button
									type="button"
									className={
										'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
										( props.badgePositionX == 'right' &&
											'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
									}
									onClick={ () => {
										props.onChange(
											'badgePositionX',
											'right'
										);
									} }
								>
									{ __( 'Right', 'asnp-easy-sale-badge' ) }
								</button>
							</div>
						</div>
					) }
				</div>
				<div className="asnp-mt-8">
					<span className="asnp-field-title asnp-text-base asnp-font-semibold">
						{ __(
							'Label Position (Pixel)',
							'asnp-easy-sale-badge'
						) }
					</span>
				</div>
				<div className="asnp-flex asnp-mt-3">
					<label>
						<span className="asnp-field-title">
							{ __( 'Top', 'asnp-easy-sale-badge' ) }
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
							{ __( 'Bottom', 'asnp-easy-sale-badge' ) }
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
							{ __( 'Left', 'asnp-easy-sale-badge' ) }
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
							{ __( 'Right', 'asnp-easy-sale-badge' ) }
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
						{ __( 'Labels', 'asnp-easy-sale-badge' ) }
					</span>
				</div>
				<div className="asnp-flex asnp-mt-3">
					<label>
						<span className="asnp-field-title">
							{ __( 'Days', 'asnp-easy-sale-badge' ) }
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
							{ __( 'Hours', 'asnp-easy-sale-badge' ) }
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
							{ __( 'Minutes', 'asnp-easy-sale-badge' ) }
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
							{ __( 'Seconds', 'asnp-easy-sale-badge' ) }
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
