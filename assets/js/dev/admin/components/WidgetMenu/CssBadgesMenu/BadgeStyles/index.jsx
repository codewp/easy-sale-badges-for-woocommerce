import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../../../utils/constants';

import './style.scss';

const BadgeStyles = ( props ) => {
	return (
		<div className="asnp-ew-line">
			<div className="asnp-mt-2">
				<div className="asnp-w-[25rem] asnp-text-lg asnp-font-semibold">
					{ __( 'Label Styles', 'asnp-easy-whatsapp' ) }
				</div>
				<div className="asnp-relative asnp-mb-3 asnp-mt-3 asnp-h-[25rem] asnp-pb-2 asnp-flex asnp-flex-col asnp-border-[1px] asnp-border-gray-300 asnp-rounded-2xl">
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-1">
						<div
							className={
								( props.badgeStyles === 'badge1'
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								'  asnp-containerBadgeStyle hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge1' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge1.svg' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge2'
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-py-6 asnp-px-2 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge2' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge2.svg' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge3'
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-py-6 asnp-px-2 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge3' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge3.svg' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge4'
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-py-6 asnp-px-2 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge4' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge4.svg' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge5'
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-py-4 asnp-px-6 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge5' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge5.svg' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-1">
						<div
							className={
								( props.badgeStyles === 'badge6'
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-p-2 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge6' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge6.svg' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge7'
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-p-5 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge7' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge7.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge8'
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-p-5 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge8' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge8.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge9'
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-p-5 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge9' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge9.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge10'
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-p-5 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge10' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge10.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-1">
						<div
							className={
								( props.badgeStyles === 'badge11'
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-py-2 asnp-px-1 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge11' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge11.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge12'
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-py-4 asnp-px-1 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge12' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge12.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge13'
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-py-1 asnp-px-5 asnp-containerBadgeStyle hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge13' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge13.png' }
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BadgeStyles;
