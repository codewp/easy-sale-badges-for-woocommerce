import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL } from '../../../../utils/constants';

import './style.scss';

const BadgeImageStyle = () => {
	return (
		<div>
			<div className="asnp-w-[12rem] asnp-ml-4 asnp-mt-6 asnp-text-black asnp-block asnp-font-medium asnp-text-base">
				<label>{ __( 'Image Labels', 'easy-sale-badges-for-woocommerce' ) }</label>
			</div>
			<div className="asnp-mt-4">
				<div className="asnp-relative asnp-w-[49rem] asnp-mb-3 asnp-mt-3 asnp-h-[15rem] asnp-flex asnp-flex-col asnp-border-2 asnp-rounded-md asnp-pr-1 asnp-pb-4 asnp-scrollBarImageB">					
					<div className="asnp-w-[42rem]  asnp-ml-8 asnp-mt-8 asnp-mb-2 asnp-text-red-700 asnp-flex asnp-justify-center asnp-font-medium asnp-text-base">
						<a target='_blank' href='https://www.asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/'>
							<button className="asnp-btn asnp-btn-primary">
								{ __( '+300 Image Labels Available on Pro Version', 'easy-sale-badges-for-woocommerce' ) }
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BadgeImageStyle;
