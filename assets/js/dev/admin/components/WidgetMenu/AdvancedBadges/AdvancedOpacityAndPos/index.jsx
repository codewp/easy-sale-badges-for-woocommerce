import React from 'react';
import { __ } from '@wordpress/i18n';

const AdvancedOpacityAndPos = () => {
	return (
		<div className="asnp-ew-line asnp-mt-4">
			<label className="asnp-space-y-1">
				<span className="asnp-field-title asnp-text-base asnp-font-semibold">
					{ __( 'Opacity', 'easy-sale-badges-for-woocommerce' ) }
				</span>
			</label>
			<div className="asnp-relative asnp-pt-1">
				<input
					type="range"
					className="asnp-form-range asnp-w-[21rem] asnp-h-6 asnp-p-0 asnp-bg-transparent focus:asnp-outline-none focus:asnp-ring-0 focus:asnp-shadow-none asnp-cursor-pointer"
					min="0"
					max="1"
					step="0.01"
					disabled
				/>
				<div className="asnp-w-[21rem] asnp-flex asnp-justify-between asnp-text-xs asnp-px-2">
					<span>0%</span>
					<span>25%</span>
					<span>50%</span>
					<span>75%</span>
					<span>100%</span>
				</div>
			</div>
		</div>
	);
};

export default AdvancedOpacityAndPos;
