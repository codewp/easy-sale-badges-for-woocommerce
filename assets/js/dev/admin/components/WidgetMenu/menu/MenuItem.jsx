import React, { useContext, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { LockClosedIcon } from '@heroicons/react/solid';
import TextOptions from './../CssBadgesMenu/TextOptions';
import BadgeStyles from '../CssBadgesMenu/BadgeStyles';
import StyleOptions from '../CssBadgesMenu/StyleOptions';
import Opacity from '../CssBadgesMenu/Opacity';
import PositionDisable from '../CssBadgesMenu/PositionDisable';
import Position from './../CssBadgesMenu/Position';
import Products from '../Products';
import Options from '../ImageBadges/OptionsImageBadges';
import AdvancedTextOption from '../AdvancedBadges/AdvancedTextOption';
import AdvancedOptions from '../AdvancedBadges/AdvancedOptions';
import AdvancedBadgeStyle from '../AdvancedBadges/AdvancedBadgeStyle';
import BadgeImageStyle from './../ImageBadges/BadgeImageStyle';
import Schedule from '../Schedule';
import AdvancedOpacityAndPos from '../AdvancedBadges/AdvancedOpacityAndPos';
import Timer from '../Timer';

import './style.scss';

const MenuItem = ( props ) => {
	const [ showTextImg, setShowTextImg ] = useState( true );

	return (
		<div className="asnp-w-full">
			{ props.activeStatus == 1 && (
				<div className="asnp-mt-3">
					<TextOptions
						onChange={ props.onChange }
						badgeLabel={ props.badge.badgeLabel }
						badgeStyles={ props.badge.badgeStyles }
						textColor={ props.badge.textColor }
						fontSizeText={ props.badge.fontSizeText }
						lineHeightText={ props.badge.lineHeightText }
					/>
					<BadgeStyles
						onChange={ props.onChange }
						badgeStyles={ props.badge.badgeStyles }
					/>
					<StyleOptions
						onChange={ props.onChange }
						badgeColor={ props.badge.badgeColor }
						widthBadge={ props.badge.widthBadge }
						badgeStyles={ props.badge.badgeStyles }
						badgePositionX={ props.badge.badgePositionX }
						heightBadge={ props.badge.heightBadge }
						topLeftRadius={ props.badge.topLeftRadius }
						topRightRadius={ props.badge.topRightRadius }
						bottomLeftRadius={ props.badge.bottomLeftRadius }
						bottomRightRadius={ props.badge.bottomRightRadius }
						zIndex={ props.badge.zIndex }
					/>
					<Opacity
						onChange={ props.onChange }
						opacity={ props.badge.opacity }
						rotationX={ props.badge.rotationX }
						rotationY={ props.badge.rotationY }
						rotationZ={ props.badge.rotationZ }
						horizontal={ props.badge.horizontal }
						vertical={ props.badge.vertical }
					/>
					<Position
						onChange={ props.onChange }
						badgeStyles={ props.badge.badgeStyles }
						badgePositionY={ props.badge.badgePositionY }
						badgePositionX={ props.badge.badgePositionX }
						badgePositionTop={ props.badge.badgePositionTop }
						badgePositionBottom={ props.badge.badgePositionBottom }
						badgePositionLeft={ props.badge.badgePositionLeft }
						badgePositionRight={ props.badge.badgePositionRight }
					/>
				</div>
			) }

			{ props.activeStatus == 2 && (
				<Schedule
					selectedDateFrom={ props.badge.selectedDateFrom }
					selectedDateTo={ props.badge.selectedDateTo }
					alwaysOnline={ props.badge.alwaysOnline }
					useTimezone={ props.badge.useTimezone }
					onChange={ props.onChange }
				/>
			) }
			{ props.activeStatus == 3 && (
				<Products onChange={ props.onChange } />
			) }
			{ props.activeStatus == 4 && (
				<div className="asnp-relative asnp-mt-3">
					{ showTextImg == true && (
						<a
							className="asnp-float-right asnp-top-16 asnp-z-50 asnp-sticky asnp-mr-[40%]"
							href="https://www.asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/"
							target="_blank"
						>
							<button className="asnp-btn asnp-btn-delete !asnp-w-[14rem] asnp-flex asnp-text-center asnp-justify-center">
								{ __( 'Go Pro', 'easy-sale-badges-for-woocommerce' ) }
								<LockClosedIcon
									width="17"
									height="17"
									className="asnp-ml-1"
								/>
							</button>
						</a>
					) }
					<div className="asnp-opacity-50">
						<BadgeImageStyle />
						<div>
							<label className="asnp-block asnp-text-sm asnp-font-medium asnp-text-gray-700">
								{ __( 'Custom Image', 'easy-sale-badges-for-woocommerce' ) }
							</label>
							<button className="asnp-btn asnp-btn-primary asnp-mt-4 asnp-mb-4">
								{ __( 'Upload Image', 'easy-sale-badges-for-woocommerce' ) }
							</button>
						</div>
						<Options />
					</div>
				</div>
			) }
			{ props.activeStatus == 5 && (
				<div className="asnp-relative asnp-mt-3">
					{ showTextImg == true && (
						<a
							className="asnp-float-right asnp-top-16 asnp-z-50 asnp-sticky asnp-mr-[40%]"
							target="_blank"
							href="https://www.asanaplugins.com/product/woocommerce-sale-badges-and-product-labels/"
						>
							<button className="asnp-btn asnp-btn-delete !asnp-w-[14rem] asnp-flex asnp-text-center asnp-justify-center">
								{ __( 'Go Pro', 'easy-sale-badges-for-woocommerce' ) }
								<LockClosedIcon
									width="17"
									height="17"
									className="asnp-ml-1"
								/>
							</button>
						</a>
					) }
					<div className="asnp-opacity-50">
						<AdvancedTextOption />
						<AdvancedBadgeStyle />
						<AdvancedOptions />
						<AdvancedOpacityAndPos />
						<PositionDisable />
					</div>
				</div>
			) }
			{ props.activeStatus == 6 && <Timer /> }
		</div>
	);
};

export default MenuItem;
