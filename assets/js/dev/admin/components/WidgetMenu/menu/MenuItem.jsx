import React, { useContext } from 'react';
import { __ } from '@wordpress/i18n';
import TextOptions from './../CssBadgesMenu/TextOptions/index';
import BadgeStyles from '../CssBadgesMenu/BadgeStyles';
import StyleOptions from '../CssBadgesMenu/StyleOptions';
import Opacity from '../CssBadgesMenu/Opacity/index';
import Position from '../CssBadgesMenu/Position';
import ProductsSelection from '../ProductsSelection';
import UploadImage from '../ImageBadges/UploadImage';
import Options from '../ImageBadges/OptionsImageBadges';
import AdvancedTextOption from '../AdvancedBadges/AdvancedTextOption';
import AdvancedOptions from '../AdvancedBadges/AdvancedOptions';
import AdvancedBadgeStyle from '../AdvancedBadges/AdvancedBadgeStyle';
import BadgeImageStyle from './../ImageBadges/BadgeImageStyle/index';
import Schedule from '../Schedule';
import AdvancedOpacityAndPos from '../AdvancedBadges/AdvancedOpacityAndPos';
import { BadgeContext } from '../../../contexts/Badge';
import Timer from '../Timer';

import './style.scss';

const MenuItem = ( props ) => {
	const { badgeImageFile, setBadgeImageFile } = useContext( BadgeContext );

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
				<div className="asnp-mt-3">
					<BadgeImageStyle
						onChange={ props.onChange }
						badgeImage={ props.badge.badgeImage }
						imgbadge={ props.badge.imgbadge }
					/>
					<UploadImage
						badgeImageFile={ badgeImageFile }
						setBadgeImageFile={ setBadgeImageFile }
					/>
					<Options
						onChange={ props.onChange }
						badgePositionY={ props.badge.badgePositionY }
						badgePositionX={ props.badge.badgePositionX }
						badgePositionTop={ props.badge.badgePositionTop }
						badgePositionBottom={ props.badge.badgePositionBottom }
						badgePositionLeft={ props.badge.badgePositionLeft }
						badgePositionRight={ props.badge.badgePositionRight }
						widthBadgeImg={ props.badge.widthBadgeImg }
						zIndexImg={ props.badge.zIndexImg }
						opacityImg={ props.badge.opacityImg }
						rotationXImg={ props.badge.rotationXImg }
						rotationYImg={ props.badge.rotationYImg }
						rotationZImg={ props.badge.rotationZImg }
					/>
				</div>
			) }
			{ props.activeStatus == 3 && (
				<div className="asnp-mt-3">
					<AdvancedTextOption
						onChange={ props.onChange }
						badgeLabel={ props.badge.badgeLabel }
						textColor={ props.badge.textColor }
						fontSizeText={ props.badge.fontSizeText }
						lineHeightText={ props.badge.lineHeightText }
					/>
					<AdvancedBadgeStyle
						onChange={ props.onChange }
						badgeAdv={ props.badge.badgeAdv }
						imgbadgeAdv={ props.badge.imgbadgeAdv }
					/>
					<AdvancedOptions
						onChange={ props.onChange }
						mainBg={ props.badge.mainBg }
						secondBg={ props.badge.secondBg }
						zIndexAdv={ props.badge.zIndexAdv }
					/>
					<AdvancedOpacityAndPos
						onChange={ props.onChange }
						opacity={ props.badge.opacity }
					/>
					<Position
						onChange={ props.onChange }
						badgePositionY={ props.badge.badgePositionY }
						badgePositionX={ props.badge.badgePositionX }
						badgePositionTop={ props.badge.badgePositionTop }
						badgePositionBottom={ props.badge.badgePositionBottom }
						badgePositionLeft={ props.badge.badgePositionLeft }
						badgePositionRight={ props.badge.badgePositionRight }
					/>
				</div>
			) }

			{ props.activeStatus == 4 && (
				<Schedule
					selectedDateFrom={ props.badge.selectedDateFrom }
					selectedDateTo={ props.badge.selectedDateTo }
					updateAvailability={ props.updateAvailability }
					availability={ props.badge.availability }
					alwaysOnline={ props.badge.alwaysOnline }
					useTimezone={ props.badge.useTimezone }
					onChange={ props.onChange }
				/>
			) }
			{ props.activeStatus == 5 && (
				<ProductsSelection
					onChange={ props.onChange }
					useProductFilter={ props.badge.useProductFilter }
				/>
			) }
			{ props.activeStatus == 6 && (
				<Timer
					onChange={ props.onChange }
					useTimerBadge={ props.badge.useTimerBadge }
					textColor={ props.badge.textColor }
					fontSizeLabelTimer={ props.badge.fontSizeLabelTimer }
					lineHeightLabelTimer={ props.badge.lineHeightLabelTimer }
					badgePositionY={ props.badge.badgePositionY }
					badgePositionX={ props.badge.badgePositionX }
					badgePositionTop={ props.badge.badgePositionTop }
					badgePositionBottom={ props.badge.badgePositionBottom }
					badgePositionLeft={ props.badge.badgePositionLeft }
					badgePositionRight={ props.badge.badgePositionRight }
					zIndexAdv={ props.badge.zIndexAdv }
					opacity={ props.badge.opacity }
					labelDayTimer={ props.badge.labelDayTimer }
					labelHoursTimer={ props.badge.labelHoursTimer }
					labelMinTimer={ props.badge.labelMinTimer }
					labelSecTimer={ props.badge.labelSecTimer }
				/>
			) }
		</div>
	);
};

export default MenuItem;
