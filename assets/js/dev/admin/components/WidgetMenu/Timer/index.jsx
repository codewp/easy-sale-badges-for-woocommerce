import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from '../../Toggle';
import Datetime from 'react-datetime';
import { IMAGES_URL } from './../../../utils/constants';

const Timer = ( { onChange, useTimer } ) => {
	const [ selected, setSelected ] = useState( null );

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
						value={ 'true' == useTimer }
						onChange={ ( value ) =>
							onChange( 'useTimer', value ? 'true' : 'false' )
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
								onChange(
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
								onChange(
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
									onChange( 'badgeStyles', '' );
									onChange( 'badgeAdv', '' );
									onChange( 'badgeTimer', 'timer1' );
									onChange( 'useTimerBadge', 'true' );
									onChange( 'imgbadge', 'false' );
									onChange( 'imgbadgeAdv', 'false' );
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
									onChange( 'badgeStyles', '' );
									onChange( 'badgeAdv', '' );
									onChange( 'badgeTimer', 'timer2' );
									onChange( 'useTimerBadge', 'true' );
									onChange( 'imgbadge', 'false' );
									onChange( 'imgbadgeAdv', 'false' );
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
									onChange( 'badgeStyles', '' );
									onChange( 'badgeAdv', '' );
									onChange( 'badgeTimer', 'timer3' );
									onChange( 'useTimerBadge', 'true' );
									onChange( 'imgbadge', 'false' );
									onChange( 'imgbadgeAdv', 'false' );
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
									onChange( 'badgeStyles', '' );
									onChange( 'badgeAdv', '' );
									onChange( 'badgeTimer', 'timer4' );
									onChange( 'useTimerBadge', 'true' );
									onChange( 'imgbadge', 'false' );
									onChange( 'imgbadgeAdv', 'false' );
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
									onChange( 'badgeStyles', '' );
									onChange( 'badgeAdv', '' );
									onChange( 'badgeTimer', 'timer5' );
									onChange( 'useTimerBadge', 'true' );
									onChange( 'imgbadge', 'false' );
									onChange( 'imgbadgeAdv', 'false' );
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
		</div>
	);
};

export default Timer;
