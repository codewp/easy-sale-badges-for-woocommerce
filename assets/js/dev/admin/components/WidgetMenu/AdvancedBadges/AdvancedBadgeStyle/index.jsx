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
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadgeAdv', 1 );
								setSelected( 1 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeAdvance1.png' }
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
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadgeAdv', 1 );
								setSelected( 2 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeAdvance2.png' }
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
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadgeAdv', 1 );
								setSelected( 3 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeAdvance3.png' }
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
								props.onChange( 'imgbadge', 0 );
								props.onChange( 'useTimerBadge', 0 );
								props.onChange( 'imgbadgeAdv', 1 );
								setSelected( 4 );
							} }
						>
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeAdvance1.png' }
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdvancedBadgeStyle;
