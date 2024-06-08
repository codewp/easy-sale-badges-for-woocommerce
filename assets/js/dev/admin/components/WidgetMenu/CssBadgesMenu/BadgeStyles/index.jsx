import React from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../../../utils/constants';

import './style.scss';

const BadgeStyles = ( props ) => {
	return (
		<div className="asnp-ew-line">
			<div className="asnp-mt-2">
				<div className="asnp-w-[25rem] asnp-text-lg asnp-font-semibold">
					{ __( 'Label Styles', 'easy-sale-badges-for-woocommerce' ) }
				</div>
				<div className="asnp-relative asnp-w-[52rem] asnp-mb-3 asnp-mt-3 asnp-h-[33rem] asnp-pb-2 asnp-pt-2 asnp-flex asnp-flex-col asnp-border-[1px] asnp-border-gray-300 asnp-rounded-2xl">
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-8 asnp-ml-4">
						<div
							className={
								( props.badgeStyles === 'badge1'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge1' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge1.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge2'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-6 asnp-px-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge2' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge2.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge3'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-6 asnp-px-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge3' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge3.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge4'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-6 asnp-px-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge4' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge4.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge5'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge5' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-8 asnp-ml-4">
						<div
							className={
								( props.badgeStyles === 'badge6'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge6' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge6.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge7'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge7' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
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
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge8' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
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
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge9' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
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
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge10' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge10.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-8 asnp-ml-4">
						<div
							className={
								( props.badgeStyles === 'badge14'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge14' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge14.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge15'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge15' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge15.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge16'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge16' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge16.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge17'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge17' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge17.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge18'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge18' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge18.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-8 asnp-ml-4">
						<div
							className={
								( props.badgeStyles === 'badge19'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-6 asnp-px-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge19' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge19.png' }
							/>
						</div>
						<div
							className={
								( props.badgeStyles === 'badge20'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-6 asnp-px-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge20' );
								props.onChange( 'badgeAdv', '' );
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge20.png' }
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BadgeStyles;
