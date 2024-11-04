import React from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../utils/constants';

const plugins = [
	{
		id: 1,
		name: 'WooCommerce Dynamic Pricing and Discounts Plugin',
		description:
			'Use WooCommerce Dynamic Pricing and Discounts Plugin to create WooCommerce cart discount rules, WooCommerce dynamic pricing for products and WooCommerce dynamic shipping methods with a conditional system. It is easy to use and works out of the box for beginners, and has advanced features for professional users.',
		imageUrl:
			IMAGES_URL +
			'Discount-Rules-and-Dynamic-Pricing-for-WooCommerce.webp',
		activeInstall: '10,000+',
		free_link: 'https://wordpress.org/plugins/easy-woocommerce-discounts/',
		pro_link:
			'https://www.asanaplugins.com/product/woocommerce-dynamic-pricing-and-discounts-plugin/',
	},
	{
		id: 2,
		name: 'WooCommerce Product Bundles',
		description:
			'WooCommerce Product Bundles plugin allows you to bundle your products together, offer them at a discount, and increase sales. Today everyone is using product bundles to up-sell and cross-sell their products. WooCommerce Product Bundles cover almost every bundling use case like discount packages, Assembled Products,   custom products, gift products, bulk offers, BOGO.',
		imageUrl: IMAGES_URL + 'woocommerce-product-bundles.webp',
		activeInstall: '3,000+',
		free_link:
			'https://wordpress.org/plugins/easy-product-bundles-for-woocommerce/',
		pro_link:
			'https://www.asanaplugins.com/product/woocommerce-product-bundles/',
	},
	{
		id: 3,
		name: 'Auto Add Products to Cart for WooCommerce',
		description:
			'WooCommerce Automatically Add Products to Cart is a discount plugin that can add products to the cart automatically based on conditions with a discount or without. You can use it to automatically add gift products to the cart in WooCommerce.',
		imageUrl: IMAGES_URL + 'Auto-add-products-to-cart-for-WooCommerce.png',
		activeInstall: '',
		free_link: '',
		pro_link: '',
	},
	{
		id: 4,
		name: 'Shipping Discount for WooCommerce',
		description:
			'WooCommerce Shipping Discount plugin is a coupon plugin that can add a discount for shipping methods based on conditions. With the Shipping Coupon for WooCommerce, you can offer a deal for your customers to spend more on your store to get a discount on the shipping or free shipping.',
		imageUrl: IMAGES_URL + 'Shipping-Discount.png',
		activeInstall: '',
		free_link: '',
		pro_link:
			'https://www.asanaplugins.com/product/shipping-discount-woocommerce/',
	},
	{
		id: 5,
		name: 'URL Coupons for WooCommerce',
		description:
			'URL Coupons for WooCommerce adds unique URLs for coupons and when a customer visits that unique URL it will apply the discount to the cart. You can use the WooCommerce URL Coupons plugin to automate coupons on your site. WooCommerce URL Coupons plugin is a useful tool to create marketing…',
		imageUrl: IMAGES_URL + 'URL-Coupons-for-WooCommerce.png',
		activeInstall: '',
		free_link: '',
		pro_link:
			'https://www.asanaplugins.com/product/url-coupons-for-woocommerce/',
	},
	{
		id: 6,
		name: 'ChatGPT AI Content Writing and WhatsApp for WordPress',
		description:
			'ChatGpt and WhatsApp Chat for WordPress Plugin allow you to support your customers via WhatsApp and AI Bot. You can add the WhatsApp floating button, ChatGPT AI BOT, ChatGPT AI Assistant, widget, and chat button to your website easily. Engage your customers and give the best support to them by…',
		imageUrl: IMAGES_URL + 'AI-Content-Writing-and-Chat-with-ChatGPT.png',
		activeInstall: '200+',
		free_link: 'https://wordpress.org/plugins/live-chat-button/',
		pro_link:
			'https://www.asanaplugins.com/product/whatsapp-chat-wordpress/',
	},
];

const AppPlugins = () => {
	return (
		<div>
			<h1 className="asnp-heading-inline asnp-text-lg">
				{ __(
					'Apps you might like',
					'easy-sale-badges-for-woocommerce'
				) }
			</h1>
			<div className="asnp-grid asnp-grid-cols-1 sm:asnp-grid-cols-1 lg:asnp-grid-cols-2 xl:asnp-grid-cols-3 2xl:asnp-grid-cols-4 asnp-gap-6 asnp-p-4">
				{ plugins.map( ( plugin ) => (
					<div
						key={ plugin.id }
						className="asnp-bg-white asnp-rounded-lg asnp-shadow-lg asnp-p-6 asnp-flex asnp-flex-col asnp-items-center"
					>
						<img
							src={ plugin.imageUrl }
							alt={ plugin.name }
							className="asnp-w-full asnp-h-[11rem] asnp-object-cover asnp-mb-4 asnp-rounded-md"
						/>
						<h3 className="asnp-text-xl asnp-font-semibold asnp-mb-2">
							{ __(
								plugin.name,
								'easy-sale-badges-for-woocommerce'
							) }
						</h3>
						<p className="asnp-text-gray-600 asnp-mb-4 asnp-text-center">
							{ __(
								plugin.description,
								'easy-sale-badges-for-woocommerce'
							) }
						</p>
						{ plugin.activeInstall != '' && (
							<div className="asnp-flex asnp-items-center asnp-mb-4">
								<span className="asnp-text-yellow-500 asnp-font-bold asnp-text-lg asnp-mr-1">
									{ __(
										plugin.activeInstall,
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
								<span className="asnp-text-gray-700 asnp-font-semibold">
									{ __(
										'Active Installations',
										'easy-sale-badges-for-woocommerce'
									) }
								</span>
							</div>
						) }

						<div className="asnp-flex asnp-space-x-4">
							{ plugin.free_link != '' && (
								<a
									target="_blank"
									href={ plugin.free_link }
									className="asnp-bg-indigo-500 asnp-text-white asnp-px-4 asnp-py-2 asnp-rounded-lg"
								>
									{ __(
										'Free Version',
										'easy-sale-badges-for-woocommerce'
									) }
								</a>
							) }

							<a
								target="_blank"
								href={ plugin.pro_link }
								className="asnp-bg-red-500 asnp-text-white asnp-px-4 asnp-py-2 asnp-rounded-lg"
							>
								{ __(
									'Buy Pro',
									'easy-sale-badges-for-woocommerce'
								) }
							</a>
						</div>
					</div>
				) ) }
			</div>
		</div>
	);
};

export default AppPlugins;
