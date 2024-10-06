import React from 'react';
import { __ } from '@wordpress/i18n';

const PositionDisable = () => {
	return (
		<div className="asnp-ew-line">
			<div className="asnp-mt-8">
				<span className="asnp-field-title asnp-text-base asnp-font-semibold">
					{ __(
						'Label Position',
						'easy-sale-badges-for-woocommerce'
					) }
				</span>
				<div className="asnp-w-full asnp-flex asnp-rounded-md asnp-mt-3">
					<div className="asnp-w-[10rem] asnp-flex" role="group">
						<button
							type="button"
							className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
						>
							{ __( 'Top', 'easy-sale-badges-for-woocommerce' ) }
						</button>

						<button
							type="button"
							className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
						>
							{ __(
								'Bottom',
								'easy-sale-badges-for-woocommerce'
							) }
						</button>
					</div>
					<div className="asnp-w-[10rem] asnp-flex" role="group">
						<button
							disabled
							type="button"
							className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
						>
							{ __( 'Left', 'easy-sale-badges-for-woocommerce' ) }
						</button>

						<button
							disabled
							type="button"
							className="asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-lg asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700"
						>
							{ __(
								'Right',
								'easy-sale-badges-for-woocommerce'
							) }
						</button>
					</div>
				</div>
			</div>
			<div className="asnp-mt-8">
				<span className="asnp-field-title asnp-text-base asnp-font-semibold">
					{ __(
						'Label Position (Pixel)',
						'easy-sale-badges-for-woocommerce'
					) }
				</span>
			</div>
			<div className="asnp-flex asnp-mt-3 asnp-mb-8">
				<label>
					<span className="asnp-field-title asnp-ml-6">
						{ __( 'Top', 'easy-sale-badges-for-woocommerce' ) }
					</span>
					<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
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
						{ __( 'Bottom', 'easy-sale-badges-for-woocommerce' ) }
					</span>
					<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
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
						{ __( 'Left', 'easy-sale-badges-for-woocommerce' ) }
					</span>
					<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
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
						{ __( 'Right', 'easy-sale-badges-for-woocommerce' ) }
					</span>
					<div className="asnp-w-[7rem] asnp-ml-4 xl:asnp-w-[8rem] xl:asnp-ml-6">
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
