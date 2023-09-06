import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../../../utils/constants';

import './style.scss';

const BadgeImageStyle = ( props ) => {
	const [ selected, setSelected ] = useState( null );

	return (
		<div>
			<div className="asnp-w-[12rem] asnp-ml-4 asnp-mt-6 asnp-text-black asnp-block asnp-font-medium asnp-text-base">
				<label>{ __( 'Image Labels', 'asnp-easy-sale-badge' ) }</label>
			</div>
			<div className="asnp-mt-4">
				<div className="asnp-relative asnp-w-[49rem] asnp-mb-3 asnp-mt-3 asnp-h-[37rem] asnp-flex asnp-flex-col asnp-border-2 asnp-rounded-md asnp-pr-1 asnp-pb-4 asnp-scrollBarImageB">
					<div className="asnp-w-full asnp-ml-8 asnp-mt-6 asnp-mb-2 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
						<label>{ __( 'Sale', 'asnp-easy-sale-badge' ) }</label>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'sale1'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSale1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale1' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSale1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale2'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSale2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale2' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSale2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale3'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSale3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale3' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSale3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale4'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSale4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale4' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSale4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale5'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSale5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale5' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSale5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'sale6'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'sale1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale6' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'sale1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale7'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'sale2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale7' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'sale2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale8'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'sale3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale8' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'sale3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale9'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'sale4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale9' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'sale4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale10'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'sale5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale10' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'sale5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'sale11'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'sale6.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale11' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'sale6.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale12'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSaleCir1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale12' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleCir1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale13'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSaleCir2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale13' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleCir2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale14'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSaleCir3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale14' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleCir3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale15'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSaleCir4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale15' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleCir4.png' }
							/>
						</div>
					</div>

					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'sale16'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' !asnp-h-[8rem] asnp-flex asnp-pr-6 asnp-pl-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSalBanneer1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale16' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSalBanneer1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale17'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' !asnp-h-[8rem] asnp-flex asnp-pr-6 asnp-pl-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSalBanneerr2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale17' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSalBanneerr2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale18'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' !asnp-h-[8rem] asnp-flex asnp-pr-6 asnp-pl-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSalBanneer3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale18' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSalBanneer3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale19'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' !asnp-h-[8rem] asnp-flex  asnp-pr-6 asnp-pl-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSalBanneer4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale19' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSalBanneer4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale20'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' !asnp-h-[8rem] asnp-flex asnp-pr-6 asnp-pl-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSalBanneer5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale20' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSalBanneer5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'sale21'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-pt-6 asnp-pr-2 asnp-pl-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSaleFont1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale21' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleFont1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale22'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-pt-6 asnp-pr-2 asnp-pl-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSaleFont2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale22' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleFont2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale23'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-pt-6 asnp-pr-2 asnp-pl-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSaleFont3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale23' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleFont3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale24'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-pt-6 asnp-pr-2 asnp-pl-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSaleFont4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale24' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleFont4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale25'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-pt-6 asnp-pr-2 asnp-pl-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bigSaleFont5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale25' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleFont5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'sale26'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'hotSale1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale26' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'hotSale1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale27'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'hotSale2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale27' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'hotSale2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale28'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'hotSale3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale28' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'hotSale3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale29'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'hotSale4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale29' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'hotSale4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale30'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'hotSale5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale30' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'hotSale5.png' }
							/>
						</div>
					</div>

					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'sale31'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-px-3 asnp-py-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleKind1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale31' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKind1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale32'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleKind2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale32' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKind2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale33'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleKind3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale33' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKind3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale34'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleKind4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale34' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKind4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale35'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-h-[8rem] asnp-px-8 asnp-py-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleKind5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale35' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKind5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'sale36'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleKind6.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale36' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKind6.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale37'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleKindNew1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale37' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKindNew1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale38'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleKindNew2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale38' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKindNew2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale39'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleKindNew3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale39' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKindNew3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale40'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleKindNew4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale40' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKindNew4.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'sale41'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleKind7.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale41' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKind7.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale42'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleNew1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale42' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale43'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleNew2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale43' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale44'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleNew3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale44' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale45'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleNew4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale45' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew4.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'sale46'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleNew5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale46' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew5.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale47'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleNew6.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale47' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew6.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale48'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleNew7.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale48' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew7.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale49'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleNew8.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale49' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew8.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale50'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleNew9.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale50' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew9.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'sale51'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-px-6 asnp-py3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleHuge.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale51' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleHuge.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale52'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-px-6 asnp-py3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleHuge2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale52' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleHuge2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale53'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-px-6 asnp-py3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleHuge3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale53' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleHuge3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale54'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-px-6 asnp-py3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleHuge4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale54' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleHuge4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'sale55'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-px-6 asnp-py3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'saleHuge5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'sale55' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleHuge5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-ml-8 asnp-mt-6 asnp-mb-2 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
						<label>
							{ __( 'Percentage Off', 'asnp-easy-sale-badge' ) }
						</label>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'percent1'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageCircle1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent1' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageCircle1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent2'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageCircle2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent2' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageCircle2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent3'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageCircle3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent3' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageCircle3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent4'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageCircle4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent4' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageCircle4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent5'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageCircle5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent5' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageCircle5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'percent6'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageSale1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent6' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent7'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageSale2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent7' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent8'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageSale3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent8' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent9'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageSale4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent9' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent10'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageSale5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent10' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'percent11'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageSale6.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent11' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale6.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent12'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageSale7.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent12' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale7.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent13'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageSale8.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent13' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale8.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent14'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageSale9.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent14' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale9.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent15'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageSale10.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent15' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale10.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'percent16'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageSale11.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent16' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale11.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent17'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentageSale12.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent17' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale12.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent18'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentage1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent18' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentage1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent19'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentage2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent19' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentage2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent20'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentage3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent20' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentage3.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'percent21'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'percentage4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent21' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentage4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent22'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'perBanner1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent22' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perBanner1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent23'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'perBanner2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent23' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perBanner2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent24'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'perBanner3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent24' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perBanner3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent25'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bannerPerc1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent25' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc1.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'percent26'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bannerPerc2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent26' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent27'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bannerPerc3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent27' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent28'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bannerPerc4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent28' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent29'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bannerPerc5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent29' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc5.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent30'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bannerPerc6.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent30' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc6.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'percent31'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bannerPerc7.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent31' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc7.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent32'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bannerPerc8.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent32' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc8.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent33'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bannerPerc9.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent33' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc9.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent34'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bannerPerc10.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent34' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc10.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent35'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bannerPerc11.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent35' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc11.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'percent36'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bannerPerc12.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent36' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc12.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent37'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'perc1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent37' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent38'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'perc2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent38' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent39'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'perc3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent39' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent40'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'perc4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent40' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc4.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'percent41'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'perc8.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent41' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc8.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent42'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'perc9.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent42' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc9.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent43'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'perc10.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent43' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc10.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent44'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'perc11.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent44' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc11.png' }
							/>
						</div>
						<div
							className={
								( selected === 'percent45'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'perc12.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'percent45' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc12.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-ml-8 asnp-mt-6 asnp-mb-2 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
						<label>
							{ __( 'Coming Soon', 'asnp-easy-sale-badge' ) }
						</label>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'coming1'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming1' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'coming2'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming2' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'coming3'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming3' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'coming4'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming4' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'coming5'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming5' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'coming6'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming6.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming6' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming6.png' }
							/>
						</div>
						<div
							className={
								( selected === 'coming7'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming7.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming7' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming7.png' }
							/>
						</div>
						<div
							className={
								( selected === 'coming8'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming8.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming8' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming8.png' }
							/>
						</div>
						<div
							className={
								( selected === 'coming9'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming9.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming9' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming9.png' }
							/>
						</div>
						<div
							className={
								( selected === 'coming10'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming10.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming10' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming10.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'coming11'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming11.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming11' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming11.png' }
							/>
						</div>
						<div
							className={
								( selected === 'coming12'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming12.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming12' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming12.png' }
							/>
						</div>
						<div
							className={
								( selected === 'coming13'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming13.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming13' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming13.png' }
							/>
						</div>
						<div
							className={
								( selected === 'coming14'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming14.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming14' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming14.png' }
							/>
						</div>
						<div
							className={
								( selected === 'coming15'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming15.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming15' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming15.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'coming16'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'coming16.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'coming16' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming16.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-ml-8 asnp-mt-6 asnp-mb-2 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
						<label>
							{ __( 'Pre Order', 'asnp-easy-sale-badge' ) }
						</label>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'preOrder1'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder1' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'preOrder2'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder2' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'preOrder3'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder3' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'preOrder4'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder4' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'preOrder5'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder5' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'preOrder6'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder6.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder6' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder6.png' }
							/>
						</div>
						<div
							className={
								( selected === 'preOrder7'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder7.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder7' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder7.png' }
							/>
						</div>
						<div
							className={
								( selected === 'preOrder8'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder8.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder8' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder8.png' }
							/>
						</div>
						<div
							className={
								( selected === 'preOrder9'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder9.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder9' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder9.png' }
							/>
						</div>
						<div
							className={
								( selected === 'preOrder10'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder10.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder10' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder10.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'preOrder11'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder11.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder11' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder11.png' }
							/>
						</div>
						<div
							className={
								( selected === 'preOrder12'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder12.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder12' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder12.png' }
							/>
						</div>
						<div
							className={
								( selected === 'preOrder13'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder13.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder13' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder13.png' }
							/>
						</div>
						<div
							className={
								( selected === 'preOrder14'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder14.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder14' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder14.png' }
							/>
						</div>
						<div
							className={
								( selected === 'preOrder15'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'preoOrder15.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'preOrder15' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder15.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-ml-8 asnp-mt-6 asnp-mb-2 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
						<label>{ __( 'Free', 'asnp-easy-sale-badge' ) }</label>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'free1'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free1' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free2'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free2' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free3'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free3' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free4'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free4' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free5'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free5' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'free6'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free6.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free6' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free6.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free7'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free7.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free7' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free7.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free8'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free8.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free8' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free8.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free9'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free9.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free9' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free9.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free10'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free10.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free10' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free10.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'free11'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free11.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free11' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free11.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free12'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free12.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free12' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free12.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free13'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free13.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free13' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free13.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free14'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free14.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free14' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free14.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free15'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free15.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free15' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free15.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'free16'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free16.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free16' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free16.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free17'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free17.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free17' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free17.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free18'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free18.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free18' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free18.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free19'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free19.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free19' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free19.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free20'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free20.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free20' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free20.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'free21'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free21.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free21' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free21.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free22'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free22.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free22' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free22.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free23'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free23.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free23' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free23.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free24'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free24.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free24' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free24.png' }
							/>
						</div>
						<div
							className={
								( selected === 'free25'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'free25.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'free25' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free25.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-ml-8 asnp-mt-6 asnp-mb-2 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
						<label>
							{ __( 'Black Friday', 'asnp-easy-sale-badge' ) }
						</label>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'blackF1'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF1' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'blackF2'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF2' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'blackF3'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF3' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'blackF4'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF4' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'blackF5'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF5' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'blackF6'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday6.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF6' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday6.png' }
							/>
						</div>
						<div
							className={
								( selected === 'blackF7'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday7.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF7' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday7.png' }
							/>
						</div>
						<div
							className={
								( selected === 'blackF8'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday8.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF8' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday8.png' }
							/>
						</div>
						<div
							className={
								( selected === 'blackF9'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday9.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF9' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday9.png' }
							/>
						</div>
						<div
							className={
								( selected === 'blackF10'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday10.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF10' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday10.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'blackF11'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday11.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF11' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday11.png' }
							/>
						</div>
						<div
							className={
								( selected === 'blackF12'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday12.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF12' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday12.png' }
							/>
						</div>
						<div
							className={
								( selected === 'blackF13'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday13.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF13' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday13.png' }
							/>
						</div>
						<div
							className={
								( selected === 'blackF14'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday14.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF14' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday14.png' }
							/>
						</div>
						<div
							className={
								( selected === 'blackF15'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday15.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF15' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday15.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'blackF16'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday16.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF16' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday16.png' }
							/>
						</div>
						<div
							className={
								( selected === 'blackF17'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday17.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF17' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday17.png' }
							/>
						</div>
						<div
							className={
								( selected === 'blackF18'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'bfriday18.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'blackF' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday18.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-ml-8 asnp-mt-6 asnp-mb-2 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
						<label>
							{ __( "Valentine's Day", 'asnp-easy-sale-badge' ) }
						</label>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'valent1'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen1.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent1' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen1.png' }
							/>
						</div>
						<div
							className={
								( selected === 'valent2'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen2.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent2' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen2.png' }
							/>
						</div>
						<div
							className={
								( selected === 'valent3'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-8 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen3.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent3' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen3.png' }
							/>
						</div>
						<div
							className={
								( selected === 'valent4'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen4.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent4' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen4.png' }
							/>
						</div>
						<div
							className={
								( selected === 'valent5'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-8 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen5.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent5' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'valent6'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen6.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent6' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen6.png' }
							/>
						</div>
						<div
							className={
								( selected === 'valent7'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen7.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent7' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen7.png' }
							/>
						</div>
						<div
							className={
								( selected === 'valent8'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-8 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen8.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent8' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen8.png' }
							/>
						</div>
						<div
							className={
								( selected === 'valent9'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen9.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent9' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen9.png' }
							/>
						</div>
						<div
							className={
								( selected === 'valent10'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen10.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent10' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen10.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'valent11'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen11.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent11' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen11.png' }
							/>
						</div>
						<div
							className={
								( selected === 'valent12'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen12.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent12' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen12.png' }
							/>
						</div>
						<div
							className={
								( selected === 'valent13'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen13.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent13' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen13.png' }
							/>
						</div>
						<div
							className={
								( selected === 'valent14'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen14.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent14' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen14.png' }
							/>
						</div>
						<div
							className={
								( selected === 'valent15'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen15.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent15' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen15.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 'valent16'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen16.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent16' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen16.png' }
							/>
						</div>
						<div
							className={
								( selected === 'valent17'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen17.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent17' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen17.png' }
							/>
						</div>
						<div
							className={
								( selected === 'valent18'
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange(
									'badgeImage',
									IMAGES_URL + 'badgeValen18.png'
								);
								props.onChange( 'imgbadgeAdv', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadge', 1 );
								setSelected( 'valent18' );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeValen18.png' }
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BadgeImageStyle;
