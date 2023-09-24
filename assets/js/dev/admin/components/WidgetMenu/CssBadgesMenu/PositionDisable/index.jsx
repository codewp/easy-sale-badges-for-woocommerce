import React from 'react';
import { __ } from '@wordpress/i18n';

const PositionDisable = () => {
	return (
		<div className="asnp-ew-line">
			<div className="asnp-mt-8">
				<span className="asnp-field-title asnp-text-base asnp-font-semibold">
					{ __( 'Label Position', 'asnp-easy-sale-badge' ) }
				</span>
				<div className="asnp-w-full asnp-flex asnp-rounded-md asnp-mt-3">
					<div className="asnp-w-[10rem] asnp-flex" role="group">
						<button
							type="button"
							className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
						>
							{ __( 'Top', 'asnp-easy-sale-badge' ) }
						</button>

						<button
							type="button"
							className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
						>
							{ __( 'Bottom', 'asnp-easy-sale-badge' ) }
						</button>
					</div>
					<div className="asnp-w-[10rem] asnp-flex" role="group">
						<button
							disabled
							type="button"
							className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
						>
							{ __( 'Left', 'asnp-easy-sale-badge' ) }
						</button>

						<button
							disabled
							type="button"
							className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
						>
							{ __( 'Right', 'asnp-easy-sale-badge' ) }
						</button>
					</div>
				</div>
			</div>
			<div className="asnp-mt-8">
				<span className="asnp-field-title asnp-text-base asnp-font-semibold">
					{ __( 'Label Position (Pixel)', 'asnp-easy-sale-badge' ) }
				</span>
			</div>
			<div className="asnp-flex asnp-mt-3 asnp-mb-8">
				<label>
					<span className="asnp-field-title asnp-ml-6">
						{ __( 'Top', 'asnp-easy-sale-badge' ) }
					</span>
					<div className="asnp-w-[10rem] asnp-ml-6">
						<input
							disabled
							type="number"
							min="0"
							max="200"
							className="asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed"
							placeholder="0"
						/>
					</div>
				</label>
				<label>
					<span className="asnp-field-title asnp-ml-6">
						{ __( 'Bottom', 'asnp-easy-sale-badge' ) }
					</span>
					<div className="asnp-w-[10rem] asnp-ml-6">
						<input
							disabled
							type="number"
							min="0"
							max="200"
							className="asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed"
							placeholder="0"
						/>
					</div>
				</label>
				<label>
					<span className="asnp-field-title asnp-ml-6">
						{ __( 'Left', 'asnp-easy-sale-badge' ) }
					</span>
					<div className="asnp-w-[10rem] asnp-ml-6">
						<input
							disabled
							type="number"
							min="0"
							max="200"
							className="asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed"
							placeholder="0"
						/>
					</div>
				</label>
				<label>
					<span className="asnp-field-title asnp-ml-6">
						{ __( 'Right', 'asnp-easy-sale-badge' ) }
					</span>
					<div className="asnp-w-[10rem] asnp-ml-6">
						<input
							disabled
							type="number"
							min="0"
							max="200"
							className="asnp-text-field asnp-opacity-20 asnp-cursor-not-allowed"
							placeholder="0"
						/>
					</div>
				</label>
			</div>
		</div>
	);
};

export default PositionDisable;
