import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../../../utils/constants';

const AdvancedBadgeStyle = ( props ) => {
	const [ selected, setSelected ] = useState( null );

	return (
		<div className="asnp-ew-line">
			<div className="asnp-mt-4">
				<div className="asnp-relative asnp-mb-3 asnp-mt-3 asnp-h-[20rem] asnp-flex asnp-flex-col asnp-border-2 asnp-border-gray-300 asnp-border-dashed asnp-rounded-md asnp-pr-1 asnp-overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!bg-slate-300">
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-justify-around">
						<div
							className={
								( selected === 1
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[7rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeAdv', 'bdgAdvanced1' );
								props.onChange( 'badgeStyles', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'true' );
								setSelected( 1 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdgAdv1.png' }
							/>
						</div>
						<div
							className={
								( selected === 2
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[7rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeAdv', 'bdgAdvanced2' );
								props.onChange( 'badgeStyles', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'true' );
								setSelected( 2 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdgAdv2.png' }
							/>
						</div>
						<div
							className={
								( selected === 3
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[7rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeAdv', 'bdgAdvanced3' );
								props.onChange( 'badgeStyles', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'true' );
								setSelected( 3 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdgAdv3.png' }
							/>
						</div>
						<div
							className={
								( selected === 4
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[7rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeAdv', 'bdgAdvanced4' );
								props.onChange( 'badgeStyles', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'true' );
								setSelected( 4 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdgAdv4.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-justify-around">
						<div
							className={
								( selected === 5
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[7rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeAdv', 'bdgAdvanced5' );
								props.onChange( 'badgeStyles', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'true' );
								setSelected( 5 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdgAdv5.png' }
							/>
						</div>
						<div
							className={
								( selected === 6
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[7rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeAdv', 'bdgAdvanced6' );
								props.onChange( 'badgeStyles', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'true' );
								setSelected( 6 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdgAdv6.png' }
							/>
						</div>
						<div
							className={
								( selected === 7
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[7rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeAdv', 'bdgAdvanced7' );
								props.onChange( 'badgeStyles', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'true' );
								setSelected( 7 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdgAdv7.png' }
							/>
						</div>
						<div
							className={
								( selected === 8
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[7rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeAdv', 'bdgAdvanced8' );
								props.onChange( 'badgeStyles', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'true' );
								setSelected( 8 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdgAdv8.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-justify-around">
						<div
							className={
								( selected === 9
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[7rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeAdv', 'bdgAdvanced9' );
								props.onChange( 'badgeStyles', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'true' );
								setSelected( 9 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdgAdv9.png' }
							/>
						</div>
						<div
							className={
								( selected === 10
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[7rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeAdv', 'bdgAdvanced10' );
								props.onChange( 'badgeStyles', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'true' );
								setSelected( 10 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdgAdv10.png' }
							/>
						</div>
						<div
							className={
								( selected === 11
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[7rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeAdv', 'bdgAdvanced11' );
								props.onChange( 'badgeStyles', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'true' );
								setSelected( 11 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdgAdv11.png' }
							/>
						</div>
						<div
							className={
								( selected === 12
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[7rem] asnp-h-[5.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeAdv', 'bdgAdvanced12' );
								props.onChange( 'badgeStyles', '' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'true' );
								setSelected( 12 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'bdgAdv12.png' }
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdvancedBadgeStyle;
