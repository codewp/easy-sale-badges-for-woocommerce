import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../../../utils/constants';

const BadgeStyles = ( props ) => {
	const [ selected, setSelected ] = useState( null );

	return (
		<div className="asnp-ew-line">
			<div className="asnp-mt-2">
			<div className="asnp-w-[25rem] asnp-text-lg asnp-font-semibold">
					{ __( 'Badge Styles', 'asnp-easy-whatsapp' ) }
				</div>
				<div className="asnp-relative asnp-mb-3 asnp-mt-3 asnp-h-auto asnp-flex asnp-flex-col asnp-border-2 asnp-border-gray-300 asnp-border-dashed asnp-rounded-md">
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-h-24  asnp-justify-around">
						<div
							className={
								( selected === 1
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[8rem] asnp-h-[4.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge1' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								setSelected( 1 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover"
								src={ IMAGES_URL + 'badge1.svg' }
							/>
						</div>
						<div
							className={
								( selected === 2
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[8rem] asnp-h-[4.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge2' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								setSelected( 2 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover"
								src={ IMAGES_URL + 'badge2.svg' }
							/>
						</div>
						<div
							className={
								( selected === 3
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[8rem] asnp-h-[4.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge3' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								setSelected( 3 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover"
								src={ IMAGES_URL + 'badge3.svg' }
							/>
						</div>
						<div
							className={
								( selected === 4
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[8rem] asnp-h-[4.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge4' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								setSelected( 4 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover"
								src={ IMAGES_URL + 'badge4.svg' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-2 asnp-h-24 asnp-justify-around">
						<div
							className={
								( selected === 5
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[8rem] asnp-h-[4.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge5' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								setSelected( 5 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badge5.svg' }
							/>
						</div>
						<div
							className={
								( selected === 6
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[8rem] asnp-h-[4.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge6' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								setSelected( 6 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none asnp-object-cover"
								src={ IMAGES_URL + 'badge6.svg' }
							/>
						</div>
						<div
							className={
								( selected === 7
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[8rem] asnp-h-[4.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge7' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								setSelected( 7 );
							} }
						>
							<img
								className="asnp-h-[4rem] asnp-w-[4rem] asnp-border-none asnp-object-cover"
								src={ IMAGES_URL + 'badge7.svg' }
							/>
						</div>
						<div
							className={
								( selected === 8
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[8rem] asnp-h-[4.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge8' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								setSelected( 8 );
							} }
						>
							<img
								className="asnp-h-[4rem] asnp-w-[4rem] asnp-border-none asnp-object-cover"
								src={ IMAGES_URL + 'badge8.svg' }
							/>
						</div>
					</div>
					<div className="asnp-w-full asnp-flex asnp-py-4 asnp-h-24 asnp-justify-around">
						<div
							className={
								( selected === 9
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[8rem] asnp-h-[4.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge9' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								setSelected( 9 );
							} }
						>
							<img
								className="asnp-h-[4rem] asnp-w-[4rem] asnp-border-none asnp-object-cover"
								src={ IMAGES_URL + 'badge9.svg' }
							/>
						</div>
						<div
							className={
								( selected === 10
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[8rem] asnp-h-[4.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge10' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								setSelected( 10 );
							} }
						>
							<img
								className="asnp-h-[4rem] asnp-w-[4rem] asnp-border-none asnp-object-cover"
								src={ IMAGES_URL + 'badge10.svg' }
							/>
						</div>
						<div
							className={
								( selected === 11
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[8rem] asnp-h-[4.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge11' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								setSelected( 11 );
							} }
						>
							<img
								className="asnp-h-[2rem] asnp-w-[9rem] asnp-border-none asnp-object-cover"
								src={ IMAGES_URL + 'badge11.svg' }
							/>
						</div>
						<div
							className={
								( selected === 12
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-w-[8rem] asnp-h-[4.5rem] asnp-flex asnp-justify-center asnp-border-2 hover:asnp-border-indigo-700 asnp-cursor-pointer'
							}
							onClick={ () => {
								props.onChange( 'badgeStyles', 'badge12' );
								props.onChange( 'imgbadge', 'false' );
								props.onChange( 'imgbadgeAdv', 'false' );
								setSelected( 12 );
							} }
						>
							<img
								className="asnp-h-[4rem] asnp-w-[7rem] asnp-border-none asnp-object-cover"
								src={ IMAGES_URL + 'badge12.svg' }
							/>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default BadgeStyles;
