import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../../../utils/constants';

import './style.scss';

const BadgeImageStyle = ( props ) => {
	const [ selected, setSelected ] = useState( null );

	return (
		<div className="asnp-ew-line">
			<div className="asnp-w-[12rem] asnp-ml-4 asnp-mt-6 asnp-text-black asnp-block asnp-font-medium asnp-text-base">
				<label>{ __( 'Labels', 'asnp-easy-whatsapp' ) }</label>
			</div>
			<div className="asnp-mt-4">
				<div className="asnp-relative asnp-w-[49rem] asnp-mb-3 asnp-mt-3 asnp-h-[37rem] asnp-flex asnp-flex-col asnp-border-2 asnp-rounded-md asnp-pr-1 asnp-pb-4 asnp-scrollBarImageB">
					<div className="asnp-w-full asnp-ml-8 asnp-mt-6 asnp-mb-2 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
						<label>{ __( 'Sale', 'asnp-easy-whatsapp' ) }</label>
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
								props.onChange( 'badgeImage', 'bigSale1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bigSale2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bigSale3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bigSale4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bigSale5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'sale1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'sale2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'sale3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'sale4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'sale5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'sale6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bigSaleCir1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bigSaleCir2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bigSaleCir3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bigSaleCir4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'bigSalBanneer1'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'bigSalBanneerr2'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'bigSalBanneer3'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'bigSalBanneer4'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'bigSalBanneer5'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bigSaleFont1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bigSaleFont2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bigSaleFont3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bigSaleFont4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bigSaleFont5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'hotSale1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'hotSale2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'hotSale3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'hotSale4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'hotSale5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleKind1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleKind2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleKind3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleKind4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleKind5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleKind6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleKindNew1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleKindNew2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleKindNew3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleKindNew4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleKind7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleNew1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleNew2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleNew3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleNew4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleNew5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleNew6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleNew7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleNew8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleNew9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleHuge' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleHuge2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleHuge3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleHuge4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'saleHuge5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
							{ __( 'Percentage Off', 'asnp-easy-whatsapp' ) }
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
									'percentageCircle1'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageCircle2'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageCircle3'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageCircle4'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageCircle5'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageSale1'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageSale2'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageSale3'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageSale4'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageSale5'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageSale6'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageSale7'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageSale8'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageSale9'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageSale10'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageSale11'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
									'percentageSale12'
								);
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'percentage1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'percentage2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'percentage3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'percentage4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'perBanner1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'perBanner2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'perBanner3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bannerPerc1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bannerPerc2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bannerPerc3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bannerPerc4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bannerPerc5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bannerPerc6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bannerPerc7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bannerPerc8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bannerPerc9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bannerPerc10' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bannerPerc11' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bannerPerc12' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'perc1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'perc2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'perc3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'perc4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'perc8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'perc9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'perc10' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'perc11' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'perc12' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
							{ __( 'Coming Soon', 'asnp-easy-whatsapp' ) }
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
								props.onChange( 'badgeImage', 'coming1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming10' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming11' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming12' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming13' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming14' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming15' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'coming16' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
							{ __( 'Pre Order', 'asnp-easy-whatsapp' ) }
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
								props.onChange( 'badgeImage', 'preoOrder1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'preoOrder2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'preoOrder3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'preoOrder4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'preoOrder5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'preoOrder6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'preoOrder7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'preoOrder8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'preoOrder9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'preoOrder10' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'preoOrder11' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'preoOrder12' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'preoOrder13' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'preoOrder14' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'preoOrder15' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
						<label>{ __( 'Free', 'asnp-easy-whatsapp' ) }</label>
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
								props.onChange( 'badgeImage', 'free1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free10' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free11' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free12' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free13' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free14' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free15' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free16' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free17' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free18' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free19' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free20' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free21' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free22' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free23' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free24' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'free25' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
							{ __( 'Black Friday', 'asnp-easy-whatsapp' ) }
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
								props.onChange( 'badgeImage', 'bfriday1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday10' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday11' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday12' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday13' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday14' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday15' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday16' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday17' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'bfriday18' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
							{ __( "Valentine's Day", 'asnp-easy-whatsapp' ) }
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
								props.onChange( 'badgeImage', 'badgeValen1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen10' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen11' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen12' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen13' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen14' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen15' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen16' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen17' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
								props.onChange( 'badgeImage', 'badgeValen18' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'useTimerBadge', 'false' );
								props.onChange( 'imgbadge', 'true' );
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
