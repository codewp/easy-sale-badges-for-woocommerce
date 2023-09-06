import React, { useContext, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { LockClosedIcon } from '@heroicons/react/solid';
import TextOptions from './../CssBadgesMenu/TextOptions';
import BadgeStyles from '../CssBadgesMenu/BadgeStyles';
import StyleOptions from '../CssBadgesMenu/StyleOptions';
import Opacity from '../CssBadgesMenu/Opacity';
import Position from '../CssBadgesMenu/Position';
import Products from '../Products';
import UploadImage from '../ImageBadges/UploadImage';
import Options from '../ImageBadges/OptionsImageBadges';
import AdvancedTextOption from '../AdvancedBadges/AdvancedTextOption';
import AdvancedOptions from '../AdvancedBadges/AdvancedOptions';
import AdvancedBadgeStyle from '../AdvancedBadges/AdvancedBadgeStyle';
import BadgeImageStyle from './../ImageBadges/BadgeImageStyle';
import Schedule from '../Schedule';
import AdvancedOpacityAndPos from '../AdvancedBadges/AdvancedOpacityAndPos';
import { BadgeContext } from '../../../contexts/Badge';
import Timer from '../Timer';

import './style.scss';

const MenuItem = ( props ) => {
	const { badgeImageFile, setBadgeImageFile } = useContext( BadgeContext );
	const [ showTextImg, setShowTextImg ] = useState( false );

	const handleMouseEnter = () => {
		setShowTextImg( true );
	};

	const handleMouseLeave = () => {
		setShowTextImg( false );
	};

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
					updateAvailability={ props.updateAvailability }
					availability={ props.badge.availability }
					alwaysOnline={ props.badge.alwaysOnline }
					useTimezone={ props.badge.useTimezone }
					onChange={ props.onChange }
				/>
			) }
			{ props.activeStatus == 3 && (
				<Products onChange={ props.onChange } />
			) }
			{ props.activeStatus == 4 && (
				<div
					className="asnp-relative asnp-mt-3"
					onMouseEnter={ handleMouseEnter }
					onMouseLeave={ handleMouseLeave }
				>
					{ showTextImg == true && (
						<a className="asnp-float-right asnp-top-16 asnp-z-50 asnp-sticky asnp-mr-[40%]">
							<button className="asnp-btn asnp-btn-delete !asnp-w-[14rem] asnp-flex asnp-text-center asnp-justify-center">
								{ __( 'Go Pro', 'asnp-easy-sale-badge' ) }
								<LockClosedIcon
									width="17"
									height="17"
									className="asnp-ml-1"
								/>
							</button>
						</a>
					) }
					<div
						className={
							showTextImg == true
								? 'asnp-opacity-50 asnp-cursor-pointer'
								: ''
						}
					>
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
							badgePositionBottom={
								props.badge.badgePositionBottom
							}
							badgePositionLeft={ props.badge.badgePositionLeft }
							badgePositionRight={
								props.badge.badgePositionRight
							}
							widthBadgeImg={ props.badge.widthBadgeImg }
							zIndexImg={ props.badge.zIndexImg }
							opacityImg={ props.badge.opacityImg }
							rotationXImg={ props.badge.rotationXImg }
							rotationYImg={ props.badge.rotationYImg }
							rotationZImg={ props.badge.rotationZImg }
						/>
					</div>
				</div>
			) }
			{ props.activeStatus == 5 && (
				<div
					className="asnp-relative asnp-mt-3"
					onMouseEnter={ handleMouseEnter }
					onMouseLeave={ handleMouseLeave }
				>
					{ showTextImg == true && (
						<a className="asnp-float-right asnp-top-16 asnp-z-50 asnp-sticky asnp-mr-[40%]">
							<button className="asnp-btn asnp-btn-delete !asnp-w-[14rem] asnp-flex asnp-text-center asnp-justify-center">
								{ __( 'Go Pro', 'asnp-easy-sale-badge' ) }
								<LockClosedIcon
									width="17"
									height="17"
									className="asnp-ml-1"
								/>
							</button>
						</a>
					) }
					<div
						className={
							showTextImg == true
								? 'asnp-opacity-50 asnp-cursor-pointer'
								: ''
						}
					>
						<AdvancedTextOption
							onChange={ props.onChange }
							badgeLabelAdv={ props.badge.badgeLabelAdv }
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
							opacityAdvImg={ props.badge.opacityAdvImg }
						/>
						<Position
							onChange={ props.onChange }
							badgePositionY={ props.badge.badgePositionY }
							badgePositionX={ props.badge.badgePositionX }
							badgePositionTop={ props.badge.badgePositionTop }
							badgePositionBottom={
								props.badge.badgePositionBottom
							}
							badgePositionLeft={ props.badge.badgePositionLeft }
							badgePositionRight={
								props.badge.badgePositionRight
							}
						/>
					</div>
				</div>
			) }
			{ props.activeStatus == 6 && (
				<Timer
					onChange={ props.onChange }
					useTimerBadge={ props.badge.useTimerBadge }
					textColor={ props.badge.textColor }
					bgColorTimer={ props.badge.bgColorTimer }
					fontSizeLabelTimer={ props.badge.fontSizeLabelTimer }
					lineHeightLabelTimer={ props.badge.lineHeightLabelTimer }
					badgePositionY={ props.badge.badgePositionY }
					badgePositionX={ props.badge.badgePositionX }
					badgePositionTop={ props.badge.badgePositionTop }
					badgePositionBottom={ props.badge.badgePositionBottom }
					badgePositionLeft={ props.badge.badgePositionLeft }
					badgePositionRight={ props.badge.badgePositionRight }
					zIndexTimer={ props.badge.zIndexTimer }
					opacityTimer={ props.badge.opacityTimer }
					labelDayTimer={ props.badge.labelDayTimer }
					labelHoursTimer={ props.badge.labelHoursTimer }
					labelMinTimer={ props.badge.labelMinTimer }
					labelSecTimer={ props.badge.labelSecTimer }
					selectedDateFrom={ props.badge.selectedDateFrom }
					selectedDateTo={ props.badge.selectedDateTo }
					badgeTimer={ props.badge.badgeTimer }
				/>
			) }
		</div>
	);
};

export default MenuItem;
