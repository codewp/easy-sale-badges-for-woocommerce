import React, { useState, useEffect, useRef } from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from '../../Toggle';
import Datetime from 'react-datetime';
import moment from 'moment';
import { IMAGES_URL, customColor } from './../../../utils/constants';
import Tippy from '@tippyjs/react';
import ColorPicker from 'react-best-gradient-color-picker';
import CurrentServerTime from '../../CurrentServerTime';

import 'react-datetime/css/react-datetime.css';
import './style.scss';

const Timer = ( props ) => {
	const [ selected, setSelected ] = useState( null );
	const [ selectHorizVert, setSelectHorizVert ] = useState( 'horiz' );
	const [ showColor, setShowColor ] = useState( false );
	const [ disablePositionButtom, setDisablePositionButtom ] = useState(
		false
	);
	const [ disablePositionTop, setDisablePositionTop ] = useState( false );
	const [ disablePositionLeft, setDisablePositionLeft ] = useState( false );
	const [ disablePositionRight, setDisablePositionRight ] = useState( false );
	const colorPickerRef = useRef( null );
	const buttonRef = useRef( null );

	useEffect( () => {
		const handleClickOutside = ( event ) => {
			if (
				colorPickerRef.current &&
				! colorPickerRef.current.contains( event.target ) &&
				buttonRef.current &&
				! buttonRef.current.contains( event.target )
			) {
				setShowColor( false );
			}
		};

		document.addEventListener( 'click', handleClickOutside );

		return () => {
			document.removeEventListener( 'click', handleClickOutside );
		};
	}, [] );

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
			<div>
				<div className="asnp-mt-4">
					<div className="asnp-w-[25rem] asnp-text-lg asnp-font-semibold">
						{ __(
							'Countdown Timer Position',
							'easy-sale-badges-for-woocommerce'
						) }
					</div>
					<div className="asnp-mt-2 asnp-mb-6">
						<label className="asnp-block asnp-space-y-2 asnp-max-w-lg">
							<select
								className="asnp-block asnp-select-field md:asnp-w-2/3 !asnp-h-12"
								value={ props.timerPosition }
								onChange={ ( e ) =>
									props.onChange(
										'timerPosition',
										e.target.value
									)
								}
							>
								<option value="onImage">
									{ __(
										'On Image',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option value="outOfImage">
									{ __(
										'Out of Image',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
							</select>
						</label>
					</div>
				</div>
				<div className="asnp-mt-2">
					<div className="asnp-w-[25rem] asnp-text-lg asnp-font-semibold">
						{ __(
							'Timer Styles',
							'easy-sale-badges-for-woocommerce'
						) }
					</div>
					<div className="asnp-relative asnp-inline-block asnp-mb-3 asnp-mt-3 asnp-h-[30rem] asnp-border-2 asnp-rounded-md asnp-p-4 asnp-scrollBarImageB">
						<div className="asnp-w-full asnp-ml-8 asnp-mt-4 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
							<label>
								{ __(
									'Horizontal',
									'easy-sale-badges-for-woocommerce'
								) }
							</label>
						</div>
						<div className="asnp-grid asnp-gap-4 asnp-grid-cols-1 xl:asnp-grid-cols-2 sm:asnp-grid-cols-1">
							<div
								className={
									( selected === 11
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-p-10 asnp-containerBadgeTimer hover:asnp-border-indigo-700'
								}
								onClick={ () => {
									props.onChange( 'badgeStyles', '' );
									props.onChange( 'badgeAdv', '' );
									props.onChange( 'badgeTimer', 'style3' );
									props.onChange( 'useTimerBadge', 1 );
									props.onChange( 'imgbadge', 0 );
									props.onChange( 'imgbadgeAdv', 0 );
									setSelected( 11 );
								} }
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover"
									src={ IMAGES_URL + 'countdownTimer3.png' }
								/>
							</div>
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
								style={ {
									cursor: 'not-allowed',
									opacity: '0.5',
								} }
								className={
									( selected === 12
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-p-8 asnp-containerBadgeTimer hover:asnp-border-indigo-700'
								}
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover"
									src={ IMAGES_URL + 'countdownTimer4.png' }
								/>
							</div>
							<div
								style={ {
									cursor: 'not-allowed',
									opacity: '0.5',
								} }
								className={
									( selected === 13
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-p-10 asnp-containerBadgeTimer hover:asnp-border-indigo-700'
								}
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover"
									src={ IMAGES_URL + 'countdownTimer5.png' }
								/>
							</div>
							<div
								style={ {
									cursor: 'not-allowed',
									opacity: '0.5',
								} }
								className={
									( selected === 14
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-p-10 asnp-containerBadgeTimer hover:asnp-border-indigo-700'
								}
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover"
									src={ IMAGES_URL + 'countdownTimer6.png' }
								/>
							</div>
							<div
								style={ {
									cursor: 'not-allowed',
									opacity: '0.5',
								} }
								className={
									( selected === 15
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-p-8 asnp-containerBadgeTimer hover:asnp-border-indigo-700'
								}
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'countdownTimer7.png' }
								/>
							</div>

							<div
								style={ {
									cursor: 'not-allowed',
									opacity: '0.5',
								} }
								className={
									( selected === 2
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-py-8 asnp-px-4 asnp-containerBadgeTimer hover:asnp-border-indigo-700'
								}
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badgeTimer2.png' }
								/>
							</div>
							<div
								style={ {
									cursor: 'not-allowed',
									opacity: '0.5',
								} }
								className={
									( selected === 3
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-py-8 asnp-px-4 asnp-containerBadgeTimer hover:asnp-border-indigo-700'
								}
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badgeTimer3.png' }
								/>
							</div>
							<div
								style={ {
									cursor: 'not-allowed',
									opacity: '0.5',
								} }
								className={
									( selected === 4
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-py-8 asnp-px-4 asnp-containerBadgeTimer hover:asnp-border-indigo-700'
								}
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badgeTimer4.png' }
								/>
							</div>
							{ 'undefined' !== typeof props.timerPosition &&
								props.timerPosition === 'outOfImage' && (
									<div
										style={ {
											cursor: 'not-allowed',
											opacity: '0.5',
										} }
										className={
											( selected === 9
												? 'asnp-border-indigo-700'
												: 'asnp-border-gray-400' ) +
											' asnp-py-8 asnp-px-4 asnp-containerBadgeTimer hover:asnp-border-indigo-700'
										}
									>
										<img
											className="asnp-h-full asnp-w-full asnp-border-none"
											src={
												IMAGES_URL +
												'countdownTimer1.png'
											}
										/>
									</div>
								) }
							{ 'undefined' !== typeof props.timerPosition &&
								props.timerPosition === 'outOfImage' && (
									<div
										style={ {
											cursor: 'not-allowed',
											opacity: '0.5',
										} }
										className={
											( selected === 10
												? 'asnp-border-indigo-700'
												: 'asnp-border-gray-400' ) +
											' asnp-py-8 asnp-px-4 asnp-containerBadgeTimer hover:asnp-border-indigo-700'
										}
									>
										<img
											className="asnp-h-full asnp-w-full asnp-border-none"
											src={
												IMAGES_URL +
												'countdownTimer2.png'
											}
										/>
									</div>
								) }
						</div>
						<div className="asnp-w-full asnp-ml-8 asnp-mt-1 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
							<label>
								{ __(
									'Vertical',
									'easy-sale-badges-for-woocommerce'
								) }
							</label>
						</div>
						<div className="asnp-grid asnp-gap-4 xl:asnp-grid-cols-4 lg:asnp-grid-cols-3 md:asnp-grid-cols-2 sm:asnp-grid-cols-1">
							<div
								style={ {
									cursor: 'not-allowed',
									opacity: '0.5',
								} }
								className={
									( selected === 5
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-p-4 asnp-containerBadgeTimerV hover:asnp-border-indigo-700'
								}
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badgeTimerV1.png' }
								/>
							</div>
							<div
								style={ {
									cursor: 'not-allowed',
									opacity: '0.5',
								} }
								className={
									( selected === 6
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-p-4 asnp-containerBadgeTimerV hover:asnp-border-indigo-700'
								}
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badgeTimerV2.png' }
								/>
							</div>
							<div
								style={ {
									cursor: 'not-allowed',
									opacity: '0.5',
								} }
								className={
									( selected === 7
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-p-4 asnp-containerBadgeTimerV hover:asnp-border-indigo-700'
								}
							>
								<img
									className="asnp-h-full asnp-w-full asnp-border-none"
									src={ IMAGES_URL + 'badgeTimerV3.png' }
								/>
							</div>
							<div
								style={ {
									cursor: 'not-allowed',
									opacity: '0.5',
								} }
								className={
									( selected === 8
										? 'asnp-border-indigo-700'
										: 'asnp-border-gray-400' ) +
									' asnp-p-4 asnp-containerBadgeTimerV hover:asnp-border-indigo-700'
								}
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
			<div className="asnp-flex asnp-mt-4">
				<label className="asnp-w-[15rem]">
					<span className="asnp-field-title asnp-text-lg asnp-font-semibold">
						{ __(
							'Countdown Timer Mode',
							'easy-sale-badges-for-woocommerce'
						) }
					</span>
					<select
						className="asnp-select-field asnp-mt-2"
						value={ props.timerMode }
						onChange={ ( e ) =>
							props.onChange( 'timerMode', e.target.value )
						}
					>
						<option value={ 'fromToDate' }>
							{ __(
								'Pick A Start / End Date',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
						<option disabled>
							{ __(
								'Evergreen (Pro Version)',
								'easy-sale-badges-for-woocommerce'
							) }
						</option>
					</select>
				</label>
			</div>
			{ props?.timerMode === 'fromToDate' && (
				<div>
					<div className="asnp-flex">
						<div className="asnp-mt-4 asnp-text-lg asnp-font-semibold">
							{ __(
								'Pick A Start / End Date',
								'easy-sale-badges-for-woocommerce'
							) }
						</div>
						<div className="asnp-mt-5">
							<CurrentServerTime />
						</div>
					</div>
					<div className="asnp-flex">
						<div className="asnp-mt-3">
							<label className="asnp-block asnp-space-y-1">
								<span className="asnp-field-title">
									{ __(
										'From Date / Time',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<Datetime
									dateFormat="YYYY-MM-DD"
									timeFormat="hh:mm A"
									value={ props.selectedDateFrom }
									onChange={ ( momentObj ) =>
										props.onChange(
											'selectedDateFrom',
											moment( momentObj ).format(
												'YYYY-MM-DD hh:mm A'
											)
										)
									}
								/>
							</label>
						</div>
						<div className="asnp-mt-3 asnp-ml-8">
							<label className="asnp-block asnp-space-y-1">
								<span className="asnp-field-title">
									{ __(
										'To Date / Time',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<Datetime
									dateFormat="YYYY-MM-DD"
									timeFormat="hh:mm A"
									value={ props.selectedDateTo }
									onChange={ ( momentObj ) =>
										props.onChange(
											'selectedDateTo',
											moment( momentObj ).format(
												'YYYY-MM-DD hh:mm A'
											)
										)
									}
								/>
							</label>
						</div>
					</div>
				</div>
			) }
			<div className="asnp-ew-line">
				<div className="asnp-w-[25rem] asnp-mt-8">
					<label
						className="asnp-inline-flex asnp-items-center asnp-w-full asnp-h-14 asnp-my-2"
						onClick={ () => setShowColor( ! showColor ) }
						ref={ buttonRef }
						htmlFor="colorPickerInput"
					>
						<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
							<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
								<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
									{ __(
										'Background Color',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<div
									style={ {
										background: `${ props.bgColorTimer }`,
									} }
									className={
										'asnp-flex asnp-w-7 asnp-h-6 asnp-rounded-full asnp-my-2'
									}
								></div>
							</div>
						</div>
					</label>
					{ showColor == true && (
						<div
							id="colorPickerInput"
							ref={ colorPickerRef }
							className="asnp-mt-4 asnp-p-3 asnp-rounded-md asnp-bg-slate-700 asnp-w-[20rem]"
						>
							<ColorPicker
								value={ props.bgColorTimer }
								onChange={ ( color ) => {
									props.onChange( 'bgColorTimer', color );
								} }
								presets={ customColor }
							/>
						</div>
					) }

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
												'easy-sale-badges-for-woocommerce'
											) }
										</span>
										<div
											style={ {
												backgroundColor: `${ props.textColor }`,
											} }
											className="asnp-flex asnp-w-7 asnp-h-6 asnp-rounded-full asnp-my-2"
										></div>
									</div>
								</div>
							</label>
						</Tippy>
					</div>
					{ 'undefined' !== typeof props.badgeTimer &&
						( props.badgeTimer === 'style1' ||
							props.badgeTimer === 'style2' ) && (
							<div className="asnp-mt-3">
								<Tippy
									trigger="click"
									interactive={ true }
									placement={ 'bottom' }
									content={
										<div className="asnp-p-4">
											<ColorPicker
												value={
													props.textColorTimerStyle1
												}
												onChange={ ( color ) => {
													props.onChange(
														'textColorTimerStyle1',
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
										<div className="asnp-h-15 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
											<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
												<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
													{ __(
														'Message Color',
														'easy-sale-badges-for-woocommerce'
													) }
												</span>
												<div
													style={ {
														backgroundColor: `${ props.textColorTimerStyle1 }`,
													} }
													className="asnp-flex asnp-w-7 asnp-h-6 asnp-rounded-full asnp-my-2"
												></div>
											</div>
										</div>
									</label>
								</Tippy>
							</div>
						) }
					{ 'undefined' !== typeof props.badgeTimer &&
						( props.badgeTimer === 'style1' ||
							props.badgeTimer === 'style2' ) && (
							<div className="asnp-flex asnp-mt-[2rem] asnp-w-full">
								<label>
									<span className="asnp-field-title">
										{ __(
											'Message',
											'easy-sale-badges-for-woocommerce'
										) }
									</span>
									<div className="asnp-w-[25rem]">
										<input
											type="text"
											className="asnp-text-field"
											value={ props.textTimerStyle1 }
											onChange={ ( e ) =>
												props.onChange(
													'textTimerStyle1',
													e.target.value
												)
											}
										/>
									</div>
								</label>
							</div>
						) }
					{ 'undefined' !== typeof props.badgeTimer &&
					( props.badgeTimer === 'style1' ||
						props.badgeTimer === 'style2' ||
						props.badgeTimer === 'style3' ||
						props.badgeTimer === 'style4' ||
						props.badgeTimer === 'style5' ||
						props.badgeTimer === 'style6' ||
						props.badgeTimer === 'style7' ) ? (
						<div className="asnp-flex asnp-mt-[2rem] asnp-w-full">
							<label>
								<span className="asnp-field-title">
									{ __(
										'Font Size Timer (Pixel)',
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
										value={ props.fontSizeLabelTimerStyle1 }
										onChange={ ( e ) =>
											props.onChange(
												'fontSizeLabelTimerStyle1',
												e.target.value
											)
										}
									/>
								</div>
							</label>
							{ props.badgeTimer !== 'style3' &&
								props.badgeTimer !== 'style4' &&
								props.badgeTimer !== 'style5' &&
								props.badgeTimer !== 'style6' &&
								props.badgeTimer !== 'style7' && (
									<label className="asnp-ml-6">
										<span className="asnp-field-title">
											{ __(
												'Font Size Message (Pixel)',
												'easy-sale-badges-for-woocommerce'
											) }
										</span>
										<div className="asnp-w-[10rem]">
											<input
												type="number"
												className="asnp-text-field"
												min="0"
												max="100"
												placeholder="0"
												value={
													props.fontSizeMessageTimerStyle1
												}
												onChange={ ( e ) =>
													props.onChange(
														'fontSizeMessageTimerStyle1',
														e.target.value
													)
												}
											/>
										</div>
									</label>
								) }
						</div>
					) : (
						<div>
							<div className="asnp-flex asnp-mt-[2rem] asnp-w-full">
								<label>
									<span className="asnp-field-title">
										{ __(
											'Padding Top/Bottom',
											'easy-sale-badges-for-woocommerce'
										) }
									</span>
									<div className="asnp-w-[10rem]">
										<input
											type="number"
											min="0"
											max="40"
											className="asnp-text-field"
											value={ props.paddingTopBottom }
											onChange={ ( e ) =>
												props.onChange(
													'paddingTopBottom',
													e.target.value
												)
											}
										/>
									</div>
								</label>
								<label className="asnp-ml-6">
									<span className="asnp-field-title">
										{ __(
											'Padding Right/Left',
											'easy-sale-badges-for-woocommerce'
										) }
									</span>
									<div className="asnp-w-[10rem]">
										<input
											type="number"
											className="asnp-text-field"
											min="0"
											max="100"
											value={ props.paddingRightLeft }
											onChange={ ( e ) =>
												props.onChange(
													'paddingRightLeft',
													e.target.value
												)
											}
										/>
									</div>
								</label>
							</div>
							<div className="asnp-flex asnp-mt-[2rem] asnp-w-full">
								<label>
									<span className="asnp-field-title">
										{ __(
											'Font Size (Pixel)',
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
								<label className="asnp-ml-6">
									<span className="asnp-field-title">
										{ __(
											'Line Height (Pixel)',
											'easy-sale-badges-for-woocommerce'
										) }
									</span>
									<div className="asnp-w-[10rem]">
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
					) }
					{ 'undefined' !== typeof props.badgeTimer &&
						( props.badgeTimer === 'style3' ||
							props.badgeTimer === 'style4' ||
							props.badgeTimer === 'style5' ||
							props.badgeTimer === 'style6' ||
							props.badgeTimer === 'style7' ) && (
							<div className="asnp-flex asnp-mt-[2rem] asnp-w-full">
								<label>
									<span className="asnp-field-title">
										{ __(
											'Width (Size)',
											'easy-sale-badges-for-woocommerce'
										) }
									</span>
									<div className="asnp-w-[10rem]">
										<input
											type="number"
											min="0"
											max="40"
											className="asnp-text-field"
											value={ props.paddingTimerStyle }
											onChange={ ( e ) =>
												props.onChange(
													'paddingTimerStyle',
													e.target.value
												)
											}
										/>
									</div>
								</label>
							</div>
						) }
				</div>
				<div className="asnp-w-[25rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
					{ __( 'Extra Styles', 'easy-sale-badges-for-woocommerce' ) }
				</div>

				<div className="asnp-flex asnp-mt-2">
					<label>
						<span className="asnp-field-title">
							{ __(
								'z-index',
								'easy-sale-badges-for-woocommerce'
							) }
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
						{ __( 'Opacity', 'easy-sale-badges-for-woocommerce' ) }
					</span>
				</label>
				<div className="asnp-relative asnp-pt-1">
					<input
						type="range"
						className="asnp-form-range asnp-w-[21rem] asnp-h-6 asnp-p-0 asnp-bg-transparent focus:asnp-outline-none focus:asnp-ring-0 focus:asnp-shadow-none asnp-cursor-pointer"
						min="0"
						max="1"
						step="0.01"
						value={ props.opacityTimer }
						onChange={ ( e ) =>
							props.onChange( 'opacityTimer', e.target.value )
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
					{ selectHorizVert === 'horiz' &&
						props.timerPosition === 'onImage' && (
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
										{ __(
											'Left',
											'easy-sale-badges-for-woocommerce'
										) }
									</button>
									<button
										type="button"
										className={
											'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
											( props.badgePositionX ==
												'center' &&
												'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
										}
										onClick={ () => {
											props.onChange(
												'badgePositionX',
												'center'
											);
										} }
									>
										{ __(
											'Center',
											'easy-sale-badges-for-woocommerce'
										) }
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
										{ __(
											'Right',
											'easy-sale-badges-for-woocommerce'
										) }
									</button>
								</div>
							</div>
						) }
					{ selectHorizVert === 'vert' &&
						props.timerPosition === 'onImage' && (
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
											'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
											( props.badgePositionY ==
												'center' &&
												'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700' )
										}
										onClick={ () => {
											props.onChange(
												'badgePositionY',
												'center'
											);
										} }
									>
										{ __(
											'Center',
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
										{ __(
											'Left',
											'easy-sale-badges-for-woocommerce'
										) }
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
										{ __(
											'Right',
											'easy-sale-badges-for-woocommerce'
										) }
									</button>
								</div>
							</div>
						) }
				</div>
				<div className="asnp-mt-8">
					<span className="asnp-field-title asnp-text-base asnp-font-semibold">
						{ __(
							'Timer Position (Pixel)',
							'easy-sale-badges-for-woocommerce'
						) }
					</span>
				</div>
				<div className="asnp-flex asnp-mt-3">
					<label>
						<span className="asnp-field-title">
							{ __( 'Top', 'easy-sale-badges-for-woocommerce' ) }
						</span>
						<div className="asnp-w-[7rem] xl:asnp-w-[8rem]">
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
						<span className="asnp-field-title asnp-ml-6">
							{ __(
								'Bottom',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
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
						<span className="asnp-field-title asnp-ml-6">
							{ __( 'Left', 'easy-sale-badges-for-woocommerce' ) }
						</span>
						<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
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
						<span className="asnp-field-title asnp-ml-6">
							{ __(
								'Right',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
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
						{ __( 'Labels', 'easy-sale-badges-for-woocommerce' ) }
					</span>
				</div>
				<div className="asnp-flex asnp-mt-3 asnp-mb-6">
					<label>
						<span className="asnp-field-title asnp-ml-4">
							{ __( 'Days', 'easy-sale-badges-for-woocommerce' ) }
						</span>
						<div className="asnp-w-[7rem] xl:asnp-w-[8rem]">
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
						<span className="asnp-field-title asnp-ml-4 xl:asnp-ml-6">
							{ __(
								'Hours',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
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
						<span className="asnp-field-title asnp-ml-4 xl:asnp-ml-6">
							{ __(
								'Minutes',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
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
						<span className="asnp-field-title asnp-ml-4 xl:asnp-ml-6">
							{ __(
								'Seconds',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
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
			<div>
				<div className="asnp-w-[25rem] asnp-mt-8 asnp-text-lg asnp-font-semibold">
					{ __(
						'Animation Effects (Pro Version)',
						'easy-sale-badges-for-woocommerce'
					) }
				</div>
				<div className="asnp-flex asnp-mt-[2rem] asnp-w-full">
					<label>
						<span className="asnp-field-title">
							{ __(
								'Animation',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="xl:asnp-w-[10rem]">
							<select
								disabled
								className="asnp-select-field xl:!asnp-w-48 asnp-mt-2 !asnp-h-[2.4rem]"
							>
								<option>
									{ __(
										'None',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'Swing',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'Flicker',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'Pulse',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'Rotate',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'Flash',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option v>
									{ __(
										'Jump',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'Pop',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'Spring',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'Wobble',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'Flip',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
							</select>
						</div>
					</label>
					<label className="asnp-ml-14">
						<span className="asnp-field-title">
							{ __(
								'Iteration Count',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="xl:asnp-w-[10rem]">
							<select
								disabled
								className="asnp-select-field xl:!asnp-w-48 asnp-mt-2 !asnp-h-[2.4rem]"
							>
								<option>
									{ __(
										'Infinite',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'1',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'2',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'3',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'4',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
								<option>
									{ __(
										'5',
										'easy-sale-badges-for-woocommerce'
									) }
								</option>
							</select>
						</div>
					</label>
					<label className="asnp-ml-14">
						<span className="asnp-field-title">
							{ __(
								'Duration',
								'easy-sale-badges-for-woocommerce'
							) }
						</span>
						<div className="xl:asnp-w-[10rem]">
							<input
								disabled
								type="number"
								min="0"
								max="40"
								className="asnp-text-field"
								placeholder="0"
							/>
						</div>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Timer;
