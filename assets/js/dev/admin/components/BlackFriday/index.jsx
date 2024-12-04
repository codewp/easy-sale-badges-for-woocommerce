import React from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../utils/constants';

const BlackFriday = () => {
	return (
		<div className="asnp-bg-white asnp-rounded-lg asnp-shadow-2xl asnp-text-gray-800 asnp-min-h-screen asnp-flex asnp-flex-col asnp-items-center asnp-py-12 asnp-px-4">
			<h1 className="asnp-text-5xl md:asnp-text-6xl asnp-font-bold asnp-text-center asnp-mb-6 asnp-text-black">
				{ __(
					'Boost Your Christmas Sales with Powerful Tools!',
					'easy-sale-badges-for-woocommerce'
				) }
			</h1>

			<p className="asnp-text-lg md:asnp-text-xl asnp-text-gray-600 asnp-text-center asnp-mb-10 asnp-max-w-2xl">
				{ __(
					'Drive higher visibility and sales impact this Christmas with eye-catching sale badges and notification bars, crafted to capture attention and boost conversion rates for WooCommerce.',
					'easy-sale-badges-for-woocommerce'
				) }
			</p>

			<div className="asnp-mb-10">
				<img
					src={ IMAGES_URL + 'Christmas-bn.png' }
					alt="Christmas Badges"
					className="asnp-w-full asnp-max-w-6xl asnp-rounded-lg asnp-shadow-lg asnp-cursor-pointer hover:asnp-shadow-2xl"
				/>
			</div>

			<div className="asnp-mb-10">
				<img
					src={ IMAGES_URL + 'CountdownTimer-Banner.png' }
					alt="Countdown Timers"
					className="asnp-w-full asnp-max-w-6xl asnp-rounded-lg asnp-shadow-lg asnp-cursor-pointer hover:asnp-shadow-2xl"
				/>
			</div>

			<div className="asnp-max-w-3xl asnp-w-full asnp-mb-10">
				<h2 className="asnp-text-3xl asnp-font-semibold asnp-mb-6 asnp-text-center asnp-text-black">
					{ __(
						'Features and Benefits',
						'easy-sale-badges-for-woocommerce'
					) }
				</h2>

				<div className="asnp-bg-yellow-50 asnp-p-6 asnp-rounded-lg asnp-shadow-lg">
					<div>
						<h3 className="asnp-text-2xl asnp-font-bold asnp-text-green-600 asnp-mb-2">
							{ __(
								'Pro Version - Unlock Full Potential!',
								'easy-sale-badges-for-woocommerce'
							) }
						</h3>
						<ul className="asnp-list-disc asnp-pl-6 asnp-text-gray-700">
							<li>
								{ __(
									'Advanced sale badges with animations',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Premium notification bars with countdowns',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Complete customization for colors, fonts, etc.',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Advanced countdown timer displayed on image and off the image',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Expanded product conditions for greater flexibility',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Conditions based on user login status, user roles, and total money spent',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Over 10 Animation Effects',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Rotate CSS Labels, Image Labels, and Advanced Labels',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Sale Image Labels',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Percentage Off Image Labels',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Coming Soon Image Labels',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Pre-Order Image Labels',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Free Image Labels',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Black Friday Image Labels',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Cyber Monday Image Labels',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Xmas Image Labels',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Buy 2 Get 1 Free Image Labels',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Shipping Image Labels',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
							<li>
								{ __(
									'Custom image upload for badges',
									'easy-sale-badges-for-woocommerce'
								) }
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="asnp-flex asnp-space-x-4">
				<a
					href="https://pricing-and-discounts.asanaplugins.com/"
					target="_blank"
					className="asnp-bg-black hover:asnp-bg-gray-800 asnp-text-white asnp-font-semibold asnp-py-3 asnp-px-6 asnp-rounded-lg asnp-shadow-md asnp-transition asnp-duration-200"
				>
					{ __( 'Try Pro', 'easy-sale-badges-for-woocommerce' ) }
				</a>
				<a
					href="https://www.asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/"
					target="_blank"
					className="asnp-bg-red-600 hover:asnp-bg-red-700 asnp-text-white asnp-font-semibold asnp-py-3 asnp-px-6 asnp-rounded-lg asnp-shadow-md asnp-transition asnp-duration-200"
				>
					{ __(
						'Upgrade to Pro',
						'easy-sale-badges-for-woocommerce'
					) }
				</a>
			</div>
		</div>
	);
};

export default BlackFriday;
