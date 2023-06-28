import React from 'react';
import { __ } from '@wordpress/i18n';
import { TwitterPicker, ChromePicker } from 'react-color';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import BackButton from '../../BackButton';
import { PlusIcon } from '@heroicons/react/solid';

const Colors = ( props ) => {
	const [ selectedHeaderColor, setSelectedHeaderColor ] = useState(
		props.headerColor
	);
	const [ selectedButtonColor, setSelectedButtonColor ] = useState(
		props.buttonColor
	);
	const [ selectedHeaderTextColor, setSelectedHeaderTextColor ] = useState(
		props.headerTextColor
	);
	const [
		selectedHeaderCaptionColor,
		setSelectedHeaderCaptionColor,
	] = useState( props.headerCaptionColor );
	const [
		selectedIconBackgroundColor,
		setSelectedIconBackgroundColor,
	] = useState( props.iconBackgroundColor );

	const [ selectedIconColor, setSelectedIconColor ] = useState(
		props.iconColor
	);
	const [ selectedHeaderIconColor, setSelectedHeaderIconColor ] = useState(
		props.headerIconColor
	);
	const [ selectedIconTextColor, setSelectedIconTextColor ] = useState(
		props.iconTextColor
	);
	const [ selectedButtonBackground, setSelectedButtonBackground ] = useState(
		props.buttonBackgroundColor
	);
	const [ selectedButtonNameColor, setSelectedButtonNameColor ] = useState(
		props.buttonNameColor
	);

	const [
		selectedButtonCaptionColor,
		setSelectedButtonCaptionColor,
	] = useState( props.buttonCaptionColor );

	const [ selectedButtonIconColor, setSelectedButtonIconColor ] = useState(
		props.buttonIconColor
	);

	const [
		selectedOnlineBorderColor,
		setSelectedOnlineBorderColor,
	] = useState( props.onlineBorderColor );

	const [
		selectedOfflineBorderColor,
		setSelectedOfflineBorderColor,
	] = useState( props.offlineBorderColor );

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
			<BackButton goToMenu="styles">
				{ __( 'Colors', 'asnp-easy-whatsapp' ) }
			</BackButton>
			<div className="asnp-w-full ">
				{ __( ' Colors', 'asnp-easy-whatsapp' ) }
			</div>
			{ 'button' !== props.type && (
				<div className="asnp-h-[39rem] asnp-overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!bg-slate-300">
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedHeaderColor }
									onChangeComplete={ ( color ) =>
										setSelectedHeaderColor( color.hex )
									}
									onChange={ ( color ) => {
										props.onChange(
											'headerColor',
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
												color={ selectedHeaderColor }
												onChangeComplete={ ( color ) =>
													setSelectedHeaderColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'headerColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Header Background Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedHeaderColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedButtonColor }
									onChangeComplete={ ( color ) =>
										setSelectedButtonColor( color.hex )
									}
									onChange={ ( color ) => {
										props.onChange(
											'buttonColor',
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
												color={ selectedButtonColor }
												onChangeComplete={ ( color ) =>
													setSelectedButtonColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'buttonColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Button Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedButtonColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedHeaderTextColor }
									onChangeComplete={ ( color ) =>
										setSelectedHeaderTextColor( color.hex )
									}
									onChange={ ( color ) => {
										props.onChange(
											'headerTextColor',
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
												color={
													selectedHeaderTextColor
												}
												onChangeComplete={ ( color ) =>
													setSelectedHeaderTextColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'headerTextColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Header Text Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedHeaderTextColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedHeaderTextColor }
									onChangeComplete={ ( color ) =>
										setSelectedHeaderIconColor( color.hex )
									}
									onChange={ ( color ) => {
										props.onChange(
											'headerIconColor',
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
												color={
													selectedHeaderIconColor
												}
												onChangeComplete={ ( color ) =>
													setSelectedHeaderIconColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'headerIconColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Header Icon Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedHeaderIconColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedHeaderCaptionColor }
									onChangeComplete={ ( color ) =>
										setSelectedHeaderCaptionColor(
											color.hex
										)
									}
									onChange={ ( color ) => {
										props.onChange(
											'headerCaptionColor',
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
												color={
													selectedHeaderCaptionColor
												}
												onChangeComplete={ ( color ) =>
													setSelectedHeaderCaptionColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'headerCaptionColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Header Caption Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedHeaderCaptionColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedIconBackgroundColor }
									onChangeComplete={ ( color ) =>
										setSelectedIconBackgroundColor(
											color.hex
										)
									}
									onChange={ ( color ) => {
										props.onChange(
											'iconBackgroundColor',
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
												color={
													selectedIconBackgroundColor
												}
												onChangeComplete={ ( color ) =>
													setSelectedIconBackgroundColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'iconBackgroundColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Icon Background Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedIconBackgroundColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedIconColor }
									onChangeComplete={ ( color ) =>
										setSelectedIconColor( color.hex )
									}
									onChange={ ( color ) => {
										props.onChange(
											'iconColor',
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
												color={ selectedIconColor }
												onChangeComplete={ ( color ) =>
													setSelectedIconColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'iconColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Icon Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedIconColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedIconTextColor }
									onChangeComplete={ ( color ) =>
										setSelectedIconTextColor( color.hex )
									}
									onChange={ ( color ) => {
										props.onChange(
											'iconTextColor',
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
												color={ selectedIconTextColor }
												onChangeComplete={ ( color ) =>
													setSelectedIconTextColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'iconTextColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Icon Text Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedIconTextColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedOnlineBorderColor }
									onChangeComplete={ ( color ) =>
										setSelectedOnlineBorderColor(
											color.hex
										)
									}
									onChange={ ( color ) => {
										props.onChange(
											'onlineBorderColor',
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
												color={
													selectedOnlineBorderColor
												}
												onChangeComplete={ ( color ) =>
													setSelectedOnlineBorderColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'onlineBorderColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Online Border Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedOnlineBorderColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedOfflineBorderColor }
									onChangeComplete={ ( color ) =>
										setSelectedOfflineBorderColor(
											color.hex
										)
									}
									onChange={ ( color ) => {
										props.onChange(
											'offlineBorderColor',
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
												color={
													selectedOfflineBorderColor
												}
												onChangeComplete={ ( color ) =>
													setSelectedOfflineBorderColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'offlineBorderColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Offline Border Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedOfflineBorderColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
				</div>
			) }
			{ 'button' === props.type && (
				<div>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedButtonBackground }
									onChangeComplete={ ( color ) =>
										setSelectedButtonBackground( color.hex )
									}
									onChange={ ( color ) => {
										props.onChange(
											'buttonBackgroundColor',
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
												color={
													selectedButtonBackground
												}
												onChangeComplete={ ( color ) =>
													setSelectedButtonBackground(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'buttonBackgroundColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Button Background Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedButtonBackground }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedButtonNameColor }
									onChangeComplete={ ( color ) =>
										setSelectedButtonNameColor( color.hex )
									}
									onChange={ ( color ) => {
										props.onChange(
											'buttonNameColor',
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
												color={
													selectedButtonNameColor
												}
												onChangeComplete={ ( color ) =>
													setSelectedButtonNameColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'buttonNameColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Button Name Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedButtonNameColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedButtonCaptionColor }
									onChangeComplete={ ( color ) =>
										setSelectedButtonCaptionColor(
											color.hex
										)
									}
									onChange={ ( color ) => {
										props.onChange(
											'buttonCaptionColor',
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
												color={
													selectedButtonCaptionColor
												}
												onChangeComplete={ ( color ) =>
													setSelectedButtonCaptionColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'buttonCaptionColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Button Caption Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedButtonCaptionColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedButtonIconColor }
									onChangeComplete={ ( color ) =>
										setSelectedButtonIconColor( color.hex )
									}
									onChange={ ( color ) => {
										props.onChange(
											'buttonIconColor',
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
												color={
													selectedButtonIconColor
												}
												onChangeComplete={ ( color ) =>
													setSelectedButtonIconColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'buttonIconColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Button Icon Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedButtonIconColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedOnlineBorderColor }
									onChangeComplete={ ( color ) =>
										setSelectedOnlineBorderColor(
											color.hex
										)
									}
									onChange={ ( color ) => {
										props.onChange(
											'onlineBorderColor',
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
												color={
													selectedOnlineBorderColor
												}
												onChangeComplete={ ( color ) =>
													setSelectedOnlineBorderColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'onlineBorderColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Online Border Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedOnlineBorderColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
					<Tippy
						trigger="click"
						interactive={ true }
						placement={ 'bottom' }
						content={
							<div>
								<TwitterPicker
									color={ selectedOfflineBorderColor }
									onChangeComplete={ ( color ) =>
										setSelectedOfflineBorderColor(
											color.hex
										)
									}
									onChange={ ( color ) => {
										props.onChange(
											'offlineBorderColor',
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
												color={
													selectedOfflineBorderColor
												}
												onChangeComplete={ ( color ) =>
													setSelectedOfflineBorderColor(
														color.hex
													)
												}
												onChange={ ( color ) => {
													props.onChange(
														'offlineBorderColor',
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
							<div className="asnp-h-14 asnp-w-full asnp-my-4  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600     ">
								<div className=" asnp-w-full asnp-flex asnp-relative asnp-px-5 asnp-py-2 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
									<span className="asnp-flex asnp-w-[25rem] asnp-my-2">
										{ __(
											'Offline Border Color',
											'asnp-easy-whatsapp'
										) }
									</span>
									<div
										style={ {
											backgroundColor: `${ selectedOfflineBorderColor }`,
										} }
										className={
											' asnp-flex asnp-w-8 asnp-h-5 asnp-rounded-full asnp-my-2 '
										}
									></div>
								</div>
							</div>
						</label>
					</Tippy>
				</div>
			) }
		</div>
	);
};

export default Colors;
