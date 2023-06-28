import React, { Fragment, useContext, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { DropContext } from '../context/DropContext';
import ButtonItem from '../ButtonItem';
import { __ } from '@wordpress/i18n';
import MultiSelectSort from './../../MultiSelectSort';
import Tippy from '@tippyjs/react';
import { IMAGES_URL } from '../../../utils/constants';
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

const MenuItem = ( props ) => {
	const [ activeMenu, setActiveMenu ] = useContext( DropContext );

	return (
		<div>
			<CSSTransition
				in={ activeMenu === 'cssBadges' }
				unmountOnExit
				timeout={ 500 }
				classNames="menu-primary"
			>
				<div className="menu">
					<div className="asnp-flex">
						<label className="asnp-space-y-1">
							<span className="asnp-field-title asnp-ml-2">
								{ __( 'Accounts', 'asnp-easy-whatsapp' ) }
							</span>
						</label>
						<div className="asnp-ml-1 asnp-cursor-pointer">
							<Tippy
								interactive={ true }
								placement={ 'top-end' }
								content={
									<div className="asnp-h-auto asnp-w-[14rem] asnp-bg-green-500 asnp-rounded-lg asnp-p-[0.4rem] asnp-text-white asnp-rounded-bl-none asnp-ml-3">
										{ __(
											'Select accounts you want to display in WhatsApp Chat Widget',
											'asnp-easy-whatsapp'
										) }
									</div>
								}
							>
								<img src={ IMAGES_URL + 'quest.svg' } />
							</Tippy>
						</div>
					</div>
					<div className="asnp-itemselect asnp-mt-1">
						<MultiSelectSort
							items={ props.badge.accounts }
							type="accounts"
							onChange={ ( value ) =>
								props.onChange( 'accounts', value )
							}
							cacheOptions={ true }
						/>
					</div>

					<div className="asnp-mt-3">
						<TextOptions
							onChange={ props.onChange }
							badgeLabel={ props.badge.badgeLabel }
							textColor={ props.badge.textColor }
							fontSizeText={ props.badge.fontSizeText }
							lineHeightText={ props.badge.lineHeightText }
						/>
						<BadgeStyles
							onChange={ props.onChange }
							badgeStyles={ props.badge.badgeStyles }
							imgbadge={ props.badge.imgbadge }
						/>
						<StyleOptions
							onChange={ props.onChange }
							badgeColor={ props.badge.badgeColor }
							widthBadge={ props.badge.widthBadge }
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
			</CSSTransition>

			<CSSTransition
				in={ activeMenu === 'imageBadges' }
				unmountOnExit
				timeout={ 500 }
				classNames="menu-primary"
			>
				<div className="menu">
					<div className="asnp-mt-3">
						<BadgeImageStyle
							onChange={ props.onChange }
							badgeImage={ props.badge.badgeImage }
							imgbadge={ props.badge.imgbadge }
						/>
						<UploadImage />
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
			</CSSTransition>
			<CSSTransition
				in={ activeMenu === 'advancedBadges' }
				unmountOnExit
				timeout={ 500 }
				classNames="menu-primary"
			>
				<div className="menu">
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
							SecondBg={ props.badge.SecondBg }
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
			</CSSTransition>

			<CSSTransition
				in={ activeMenu === 'schedule' }
				unmountOnExit
				timeout={ 500 }
				classNames="menu-secondary"
			>
				<div className="menu">
					<Schedule />
				</div>
			</CSSTransition>
			<CSSTransition
				in={ activeMenu === 'productsSelection' }
				unmountOnExit
				timeout={ 500 }
				classNames="menu-primary"
			>
				<div className="menu">
					<ProductsSelection
						onChange={ props.onChange }
						useProductFilter={ props.badge.useProductFilter }
					/>
				</div>
			</CSSTransition>
		</div>
	);
};

export default MenuItem;
