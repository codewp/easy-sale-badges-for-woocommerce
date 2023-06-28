import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../../../utils/constants';
import './style.scss';

const BadgeImageStyle = ( props ) => {
	const [ selected, setSelected ] = useState( null );

	return (
		<div className="asnp-ew-line">
			<div className="asnp-mt-4">
				<div className="asnp-relative asnp-mb-3 asnp-mt-3 asnp-h-[33rem] asnp-flex asnp-flex-col asnp-border-2 asnp-rounded-md asnp-pr-1 asnp-overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!bg-slate-300">
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-justify-around">
						<div
							className={
								( selected === 1
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg1' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 1 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg1.png' }
							/>
						</div>
						<div
							className={
								( selected === 2
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg2' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 2 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg2.png' }
							/>
						</div>
						<div
							className={
								( selected === 3
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg3' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 3 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg3.png' }
							/>
						</div>
						<div
							className={
								( selected === 4
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg4' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 4 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg4.png' }
							/>
						</div>
						<div
							className={
								( selected === 5
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg5' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 5 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg5.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-justify-around">
						<div
							className={
								( selected === 6
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg6' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 6 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg6.1.png' }
							/>
						</div>
						<div
							className={
								( selected === 7
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg7' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 7 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg7.png' }
							/>
						</div>
						<div
							className={
								( selected === 8
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg8' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 8 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg8.png' }
							/>
						</div>
						<div
							className={
								( selected === 9
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg9' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 9 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg9.png' }
							/>
						</div>
						<div
							className={
								( selected === 10
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg10' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 10 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg10.1.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-justify-around">
						<div
							className={
								( selected === 11
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg11' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 11 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg11.png' }
							/>
						</div>
						<div
							className={
								( selected === 12
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg12' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 12 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg12.png' }
							/>
						</div>
						<div
							className={
								( selected === 13
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg13' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 13 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg13.png' }
							/>
						</div>
						<div
							className={
								( selected === 14
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg14' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 14 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg14.png' }
							/>
						</div>
						<div
							className={
								( selected === 15
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg15' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 15 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg15.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-justify-around">
						<div
							className={
								( selected === 16
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg16' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 16 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg16.png' }
							/>
						</div>
						<div
							className={
								( selected === 17
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg17' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 17 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg17.png' }
							/>
						</div>
						<div
							className={
								( selected === 18
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg18' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 18 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg18.png' }
							/>
						</div>
						<div
							className={
								( selected === 19
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg19' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 19 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg19.png' }
							/>
						</div>
						<div
							className={
								( selected === 20
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg20' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 20 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg20.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-justify-around">
						<div
							className={
								( selected === 21
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg21' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 21 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg21.png' }
							/>
						</div>
						<div
							className={
								( selected === 22
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg22' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 22 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg22.png' }
							/>
						</div>
						<div
							className={
								( selected === 23
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg23' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 23 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg23.png' }
							/>
						</div>
						<div
							className={
								( selected === 24
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg24' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 24 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg24.png' }
							/>
						</div>
						<div
							className={
								( selected === 25
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg25' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 25 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg25.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-justify-around">
						<div
							className={
								( selected === 26
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg26' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 26 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg26.png' }
							/>
						</div>
						<div
							className={
								( selected === 27
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg27' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 27 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg27.png' }
							/>
						</div>
						<div
							className={
								( selected === 28
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg28' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 28 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg28.png' }
							/>
						</div>
						<div
							className={
								( selected === 29
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg29' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 29 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg29.png' }
							/>
						</div>
						<div
							className={
								( selected === 30
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[6rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeImage', 'bdg30' );
								props.onChange( 'imgbadgeAdv', 'false' );
								props.onChange( 'imgbadge', 'true' );
								setSelected( 30 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdg30.png' }
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BadgeImageStyle;
