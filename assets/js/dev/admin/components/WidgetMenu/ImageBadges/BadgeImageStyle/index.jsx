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
								( selected === 1
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bigSale1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 1 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSale1.png' }
							/>
						</div>
						<div
							className={
								( selected === 2
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bigSale2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 2 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSale2.png' }
							/>
						</div>
						<div
							className={
								( selected === 3
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bigSale3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 3 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSale3.png' }
							/>
						</div>
						<div
							className={
								( selected === 4
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bigSale4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 4 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSale4.png' }
							/>
						</div>
						<div
							className={
								( selected === 5
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bigSale5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 5 );
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
								( selected === 6
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'sale1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 6 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'sale1.png' }
							/>
						</div>
						<div
							className={
								( selected === 7
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'sale2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 7 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'sale2.png' }
							/>
						</div>
						<div
							className={
								( selected === 8
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'sale3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 8 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'sale3.png' }
							/>
						</div>
						<div
							className={
								( selected === 9
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'sale4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 9 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'sale4.png' }
							/>
						</div>
						<div
							className={
								( selected === 10
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'sale5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 10 );
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
								( selected === 11
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'sale6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 11 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'sale6.png' }
							/>
						</div>
						<div
							className={
								( selected === 12
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bigSaleCir1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 12 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleCir1.png' }
							/>
						</div>
						<div
							className={
								( selected === 13
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bigSaleCir2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 13 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleCir2.png' }
							/>
						</div>
						<div
							className={
								( selected === 14
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bigSaleCir3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 14 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleCir3.png' }
							/>
						</div>
						<div
							className={
								( selected === 15
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bigSaleCir4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 15 );
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
								( selected === 16
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 16 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSalBanneer1.png' }
							/>
						</div>
						<div
							className={
								( selected === 17
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 17 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSalBanneerr2.png' }
							/>
						</div>
						<div
							className={
								( selected === 18
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 18 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSalBanneer3.png' }
							/>
						</div>
						<div
							className={
								( selected === 19
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 19 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSalBanneer4.png' }
							/>
						</div>
						<div
							className={
								( selected === 20
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 20 );
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
								( selected === 21
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-pt-6 asnp-pr-2 asnp-pl-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bigSaleFont1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 21 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleFont1.png' }
							/>
						</div>
						<div
							className={
								( selected === 22
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-pt-6 asnp-pr-2 asnp-pl-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bigSaleFont2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 22 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleFont2.png' }
							/>
						</div>
						<div
							className={
								( selected === 23
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-pt-6 asnp-pr-2 asnp-pl-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bigSaleFont3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 23 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleFont3.png' }
							/>
						</div>
						<div
							className={
								( selected === 24
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-pt-6 asnp-pr-2 asnp-pl-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bigSaleFont4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 24 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bigSaleFont4.png' }
							/>
						</div>
						<div
							className={
								( selected === 25
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-pt-6 asnp-pr-2 asnp-pl-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bigSaleFont5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 25 );
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
								( selected === 26
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'hotSale1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 26 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'hotSale1.png' }
							/>
						</div>
						<div
							className={
								( selected === 27
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'hotSale2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 27 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'hotSale2.png' }
							/>
						</div>
						<div
							className={
								( selected === 28
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'hotSale3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 28 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'hotSale3.png' }
							/>
						</div>
						<div
							className={
								( selected === 29
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'hotSale4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 29 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'hotSale4.png' }
							/>
						</div>
						<div
							className={
								( selected === 30
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'hotSale5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 30 );
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
								( selected === 31
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-px-3 asnp-py-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleKind1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 31 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKind1.png' }
							/>
						</div>
						<div
							className={
								( selected === 32
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleKind2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 32 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKind2.png' }
							/>
						</div>
						<div
							className={
								( selected === 33
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleKind3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 33 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKind3.png' }
							/>
						</div>
						<div
							className={
								( selected === 34
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleKind4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 34 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKind4.png' }
							/>
						</div>
						<div
							className={
								( selected === 35
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-h-[8rem] asnp-px-8 asnp-py-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleKind5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 35 );
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
								( selected === 36
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleKind6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 36 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKind6.png' }
							/>
						</div>
						<div
							className={
								( selected === 37
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleKindNew1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 37 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKindNew1.png' }
							/>
						</div>
						<div
							className={
								( selected === 38
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleKindNew2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 38 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKindNew2.png' }
							/>
						</div>
						<div
							className={
								( selected === 39
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleKindNew3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 39 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKindNew3.png' }
							/>
						</div>
						<div
							className={
								( selected === 40
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleKindNew4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 40 );
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
								( selected === 41
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleKind7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 41 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleKind7.png' }
							/>
						</div>
						<div
							className={
								( selected === 42
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleNew1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 42 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew1.png' }
							/>
						</div>
						<div
							className={
								( selected === 43
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleNew2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 43 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew2.png' }
							/>
						</div>
						<div
							className={
								( selected === 44
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleNew3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 44 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew3.png' }
							/>
						</div>
						<div
							className={
								( selected === 45
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleNew4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 45 );
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
								( selected === 46
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleNew5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 46 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew5.png' }
							/>
						</div>
						<div
							className={
								( selected === 47
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleNew6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 47 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew6.png' }
							/>
						</div>
						<div
							className={
								( selected === 48
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleNew7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 48 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew7.png' }
							/>
						</div>
						<div
							className={
								( selected === 49
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleNew8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 49 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleNew8.png' }
							/>
						</div>
						<div
							className={
								( selected === 50
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleNew9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 50 );
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
								( selected === 51
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-px-6 asnp-py3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleHuge' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 51 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleHuge.png' }
							/>
						</div>
						<div
							className={
								( selected === 52
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-px-6 asnp-py3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleHuge2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 52 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleHuge2.png' }
							/>
						</div>
						<div
							className={
								( selected === 53
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-px-6 asnp-py3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleHuge3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 53 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleHuge3.png' }
							/>
						</div>
						<div
							className={
								( selected === 54
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-px-6 asnp-py3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleHuge4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 54 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'saleHuge4.png' }
							/>
						</div>
						<div
							className={
								( selected === 55
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-px-6 asnp-py3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'saleHuge5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 55 );
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
								( selected === 56
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 56 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageCircle1.png' }
							/>
						</div>
						<div
							className={
								( selected === 57
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 57 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageCircle2.png' }
							/>
						</div>
						<div
							className={
								( selected === 58
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 58 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageCircle3.png' }
							/>
						</div>
						<div
							className={
								( selected === 59
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 59 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageCircle4.png' }
							/>
						</div>
						<div
							className={
								( selected === 60
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 60 );
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
								( selected === 61
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 61 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale1.png' }
							/>
						</div>
						<div
							className={
								( selected === 62
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 62 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale2.png' }
							/>
						</div>
						<div
							className={
								( selected === 63
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 63 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale3.png' }
							/>
						</div>
						<div
							className={
								( selected === 64
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 64 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale4.png' }
							/>
						</div>
						<div
							className={
								( selected === 65
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 65 );
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
								( selected === 66
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 66 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale6.png' }
							/>
						</div>
						<div
							className={
								( selected === 67
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 67 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale7.png' }
							/>
						</div>
						<div
							className={
								( selected === 68
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 68 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale8.png' }
							/>
						</div>
						<div
							className={
								( selected === 69
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 69 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale9.png' }
							/>
						</div>
						<div
							className={
								( selected === 70
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 70 );
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
								( selected === 71
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 71 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale11.png' }
							/>
						</div>
						<div
							className={
								( selected === 72
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
								props.onChange( 'imgbadge', 'true' );
								setSelected( 72 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentageSale12.png' }
							/>
						</div>
						<div
							className={
								( selected === 73
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'percentage1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 73 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentage1.png' }
							/>
						</div>
						<div
							className={
								( selected === 74
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'percentage2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 74 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentage2.png' }
							/>
						</div>
						<div
							className={
								( selected === 75
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'percentage3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 75 );
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
								( selected === 76
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'percentage4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 76 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'percentage4.png' }
							/>
						</div>
						<div
							className={
								( selected === 77
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'perBanner1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 77 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perBanner1.png' }
							/>
						</div>
						<div
							className={
								( selected === 78
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'perBanner2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 78 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perBanner2.png' }
							/>
						</div>
						<div
							className={
								( selected === 79
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-3 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'perBanner3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 79 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perBanner3.png' }
							/>
						</div>
						<div
							className={
								( selected === 80
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bannerPerc1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 80 );
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
								( selected === 81
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bannerPerc2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 81 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc2.png' }
							/>
						</div>
						<div
							className={
								( selected === 82
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bannerPerc3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 82 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc3.png' }
							/>
						</div>
						<div
							className={
								( selected === 83
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bannerPerc4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 83 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc4.png' }
							/>
						</div>
						<div
							className={
								( selected === 84
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bannerPerc5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 84 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc5.png' }
							/>
						</div>
						<div
							className={
								( selected === 85
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bannerPerc6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 85 );
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
								( selected === 86
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bannerPerc7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 86 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc7.png' }
							/>
						</div>
						<div
							className={
								( selected === 87
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bannerPerc8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 87 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc8.png' }
							/>
						</div>
						<div
							className={
								( selected === 88
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bannerPerc9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 88 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc9.png' }
							/>
						</div>
						<div
							className={
								( selected === 89
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bannerPerc10' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 89 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc10.png' }
							/>
						</div>
						<div
							className={
								( selected === 90
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bannerPerc11' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 90 );
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
								( selected === 91
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bannerPerc12' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 91 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bannerPerc12.png' }
							/>
						</div>
						<div
							className={
								( selected === 92
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'perc1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 92 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc1.png' }
							/>
						</div>
						<div
							className={
								( selected === 93
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'perc2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 93 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc2.png' }
							/>
						</div>
						<div
							className={
								( selected === 94
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'perc3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 94 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc3.png' }
							/>
						</div>
						<div
							className={
								( selected === 95
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'perc4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 95 );
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
								( selected === 96
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'perc8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 96 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc8.png' }
							/>
						</div>
						<div
							className={
								( selected === 97
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'perc9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 97 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc9.png' }
							/>
						</div>
						<div
							className={
								( selected === 98
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'perc10' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 98 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc10.png' }
							/>
						</div>
						<div
							className={
								( selected === 99
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'perc11' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 99 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'perc11.png' }
							/>
						</div>
						<div
							className={
								( selected === 100
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'perc12' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 100 );
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
								( selected === 101
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 101 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming1.png' }
							/>
						</div>
						<div
							className={
								( selected === 102
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 102 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming2.png' }
							/>
						</div>
						<div
							className={
								( selected === 103
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 103 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming3.png' }
							/>
						</div>
						<div
							className={
								( selected === 104
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 104 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming4.png' }
							/>
						</div>
						<div
							className={
								( selected === 105
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 105 );
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
								( selected === 106
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 106 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming6.png' }
							/>
						</div>
						<div
							className={
								( selected === 107
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 107 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming7.png' }
							/>
						</div>
						<div
							className={
								( selected === 108
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 108 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming8.png' }
							/>
						</div>
						<div
							className={
								( selected === 109
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 109 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming9.png' }
							/>
						</div>
						<div
							className={
								( selected === 110
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming10' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 110 );
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
								( selected === 111
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming11' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 111 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming11.png' }
							/>
						</div>
						<div
							className={
								( selected === 112
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming12' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 112 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming12.png' }
							/>
						</div>
						<div
							className={
								( selected === 113
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming13' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 113 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming13.png' }
							/>
						</div>
						<div
							className={
								( selected === 114
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming14' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 114 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'coming14.png' }
							/>
						</div>
						<div
							className={
								( selected === 115
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming15' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 115 );
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
								( selected === 116
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-2 asnp-px-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'coming16' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 116 );
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
								( selected === 117
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 117 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder1.png' }
							/>
						</div>
						<div
							className={
								( selected === 118
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 118 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder2.png' }
							/>
						</div>
						<div
							className={
								( selected === 119
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 119 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder3.png' }
							/>
						</div>
						<div
							className={
								( selected === 120
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 120 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder4.png' }
							/>
						</div>
						<div
							className={
								( selected === 121
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 121 );
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
								( selected === 122
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 122 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder6.png' }
							/>
						</div>
						<div
							className={
								( selected === 123
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 123 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder7.png' }
							/>
						</div>
						<div
							className={
								( selected === 124
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 124 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder8.png' }
							/>
						</div>
						<div
							className={
								( selected === 125
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 125 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder9.png' }
							/>
						</div>
						<div
							className={
								( selected === 126
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder10' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 126 );
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
								( selected === 127
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder11' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 127 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder11.png' }
							/>
						</div>
						<div
							className={
								( selected === 128
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder12' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 128 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder12.png' }
							/>
						</div>
						<div
							className={
								( selected === 129
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder13' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 129 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder13.png' }
							/>
						</div>
						<div
							className={
								( selected === 130
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder14' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 130 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'preoOrder14.png' }
							/>
						</div>
						<div
							className={
								( selected === 131
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'preoOrder15' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 131 );
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
								( selected === 132
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 132 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free1.png' }
							/>
						</div>
						<div
							className={
								( selected === 133
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 133 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free2.png' }
							/>
						</div>
						<div
							className={
								( selected === 134
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 134 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free3.png' }
							/>
						</div>
						<div
							className={
								( selected === 135
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 135 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free4.png' }
							/>
						</div>
						<div
							className={
								( selected === 136
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 136 );
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
								( selected === 137
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 137 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free6.png' }
							/>
						</div>
						<div
							className={
								( selected === 138
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 138 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free7.png' }
							/>
						</div>
						<div
							className={
								( selected === 139
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 139 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free8.png' }
							/>
						</div>
						<div
							className={
								( selected === 140
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 140 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free9.png' }
							/>
						</div>
						<div
							className={
								( selected === 141
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-8 asnp-px-2 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free10' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 141 );
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
								( selected === 142
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free11' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 142 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free11.png' }
							/>
						</div>
						<div
							className={
								( selected === 143
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free12' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 143 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free12.png' }
							/>
						</div>
						<div
							className={
								( selected === 144
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free13' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 144 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free13.png' }
							/>
						</div>
						<div
							className={
								( selected === 145
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free14' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 145 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free14.png' }
							/>
						</div>
						<div
							className={
								( selected === 146
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free15' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 146 );
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
								( selected === 147
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free16' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 147 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free16.png' }
							/>
						</div>
						<div
							className={
								( selected === 148
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free17' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 148 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free17.png' }
							/>
						</div>
						<div
							className={
								( selected === 149
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-4 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free18' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 149 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free18.png' }
							/>
						</div>
						<div
							className={
								( selected === 150
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free19' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 150 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free19.png' }
							/>
						</div>
						<div
							className={
								( selected === 151
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free20' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 151 );
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
								( selected === 152
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free21' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 152 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free21.png' }
							/>
						</div>
						<div
							className={
								( selected === 153
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-py-4 asnp-px-9 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free22' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 153 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free22.png' }
							/>
						</div>
						<div
							className={
								( selected === 154
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free23' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 154 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free23.png' }
							/>
						</div>
						<div
							className={
								( selected === 155
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free24' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 155 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free24.png' }
							/>
						</div>
						<div
							className={
								( selected === 156
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free25' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 156 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free25.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-ml-8 asnp-mt-6 asnp-mb-2 asnp-text-gray-700 asnp-block asnp-font-medium asnp-text-base">
						<label>{ __( 'Black Friday', 'asnp-easy-whatsapp' ) }</label>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div
							className={
								( selected === 157
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 157 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday1.png' }
							/>
						</div>
						<div
							className={
								( selected === 158
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 158 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday2.png' }
							/>
						</div>
						<div
							className={
								( selected === 159
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 159 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday3.png' }
							/>
						</div>
						<div
							className={
								( selected === 160
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 160 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday4.png' }
							/>
						</div>
						<div
							className={
								( selected === 161
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 161 );
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
								( selected === 162
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 162 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday6.png' }
							/>
						</div>
						<div
							className={
								( selected === 163
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 163 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday7.png' }
							/>
						</div>
						<div
							className={
								( selected === 164
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 164 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday8.png' }
							/>
						</div>
						<div
							className={
								( selected === 165
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 165 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday9.png' }
							/>
						</div>
						<div
							className={
								( selected === 166
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday10' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 166 );
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
								( selected === 167
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday11' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 167 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday11.png' }
							/>
						</div>
						<div
							className={
								( selected === 168
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday12' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 168 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday12.png' }
							/>
						</div>
						<div
							className={
								( selected === 169
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday13' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 169 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday13.png' }
							/>
						</div>
						<div
							className={
								( selected === 170
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday14' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 170 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday14.png' }
							/>
						</div>
						<div
							className={
								( selected === 171
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday15' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 171 );
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
								( selected === 172
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday16' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 172 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday16.png' }
							/>
						</div>
						<div
							className={
								( selected === 173
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday17' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 173 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday17.png' }
							/>
						</div>
						<div
							className={
								( selected === 174
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-5 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bfriday18' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 174 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bfriday18.png' }
							/>
						</div>
						<div
							className={
								( selected === 155
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free24' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 155 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free24.png' }
							/>
						</div>
						<div
							className={
								( selected === 156
									? 'asnp-border-indigo-700'
									: 'asnp-border-gray-400' ) +
								' asnp-p-6 asnp-containerImage hover:asnp-border-indigo-700'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'free25' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 156 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'free25.png' }
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BadgeImageStyle;
