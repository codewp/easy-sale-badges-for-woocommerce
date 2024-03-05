import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../../../utils/constants';

import './style.scss';

const AdvancedBadgeStyle = () => {
	return (
		<div className="asnp-ew-line">
			<div className="asnp-mt-6">
				<div className="asnp-text-lg asnp-font-semibold">
					{ __(
						'Modern Badge Styles',
						'easy-sale-badges-for-woocommerce-pro'
					) }
				</div>
				<div className="asnp-relative asnp-w-[47rem] asnp-mb-3 asnp-mt-3 asnp-h-[20rem] asnp-flex asnp-flex-col  asnp-border-gray-300 asnp-border-[1px] asnp-rounded-2xl asnp-pr-1 asnp-overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!bg-slate-300">
					<div className="asnp-w-[45rem] asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div className="asnp-border-gray-400 asnp-p-5 asnp-containerAdvImage hover:asnp-border-indigo-700">
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeAdvance2.png' }
							/>
						</div>
						<div className="asnp-border-gray-400 asnp-p-5 asnp-containerAdvImage hover:asnp-border-indigo-700">
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeAdvance3.png' }
							/>
						</div>
						<div className="asnp-border-gray-400 asnp-px-2 asnp-py-8 asnp-containerAdvImage hover:asnp-border-indigo-700">
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeAdvance4.png' }
							/>
						</div>
						<div className="asnp-border-gray-400 asnp-px-2 asnp-py-8 asnp-containerAdvImage hover:asnp-border-indigo-700">
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeAdvance5.png' }
							/>
						</div>
						<div className="asnp-border-gray-400 asnp-p-6 asnp-containerAdvImage hover:asnp-border-indigo-700">
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeAdvance1.png' }
							/>
						</div>
					</div>
					<div className="asnp-w-[45rem] asnp-flex asnp-py-2 asnp-space-x-5 asnp-ml-4">
						<div className="asnp-border-gray-400 asnp-p-3 asnp-containerAdvImage hover:asnp-border-indigo-700">
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeAdvance101.png' }
							/>
						</div>
						<div className="asnp-border-gray-400 asnp-p-3 asnp-containerAdvImage hover:asnp-border-indigo-700">
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeAdvance102.png' }
							/>
						</div>
						<div className="asnp-border-gray-400 asnp-p-2 asnp-containerAdvImage hover:asnp-border-indigo-700">
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeAdvance103.png' }
							/>
						</div>
						<div className="asnp-border-gray-400 asnp-p-3 asnp-containerAdvImage hover:asnp-border-indigo-700">
							<img
								className="asnp-h-full asnp-w-full asnp-border-none"
								src={ IMAGES_URL + 'badgeAdvance104.png' }
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdvancedBadgeStyle;
