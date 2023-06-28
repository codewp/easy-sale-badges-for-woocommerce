import React, { Fragment, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { __ } from '@wordpress/i18n';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import Pages from './pages';
import Devices from './devices';
import Visitors from './visitors';
import BackButton from '../../BackButton';
import WooCommerce from './WooCommerce';

import './../style.scss';

const ChatDisplaySetting = ( props ) => {
	const [ activeDisplayChat, setActiveDisplayChat ] = useState(
		'chatDisplaySetting'
	);

	const StartChat = ( props ) => {
		return (
			<button
				className="asnp-h-14 asnp-w-full asnp-my-2  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600 group-hover:asnp-from-green-400 group-hover:asnp-to-blue-600 hover:asnp-text-white  "
				onClick={ () =>
					props.goToMenu && setActiveDisplayChat( props.goToMenu )
				}
			>
				<span className=" asnp-w-full asnp-flex asnp-float-left asnp-relative asnp-px-10 asnp-py-4 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0 ">
					{ props.children }
				</span>
			</button>
		);
	};

	function BackChatDisplay( props ) {
		return (
			<div className="asnp-flex asnp-mb-6 asnp-h-8 asnp-w-full asnp-items-center">
				<button
					className="asnp-h-8 asnp-w-10  asnp-bg-gray-200 asnp-cursor-pointer  asnp-relative asnp-inline-flex asnp-items-center asnp-justify-center asnp-p-0.5 asnp-mb-2 asnp-mr-2 asnp-overflow-hidden asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-rounded-lg asnp-group asnp-bg-gradient-to-br asnp-from-green-400 asnp-to-blue-600 group-hover:asnp-from-green-400 group-hover:asnp-to-blue-600 hover:asnp-text-white   "
					onClick={ () =>
						props.goToMenu && setActiveDisplayChat( props.goToMenu )
					}
				>
					<span className="asnp-w-full asnp-relative asnp-px-1 asnp-py-1 asnp-transition-all asnp-ease-in asnp-duration-75 asnp-bg-white  asnp-rounded-md group-hover:asnp-bg-opacity-0">
						<ArrowLeftIcon className="asnp-h-5 asnp-w-5 " />
					</span>
				</button>
				<div className="asnp-w-full asnp-flex asnp-justify-start asnp-pb-2">
					<h1>{ props.children }</h1>
				</div>
			</div>
		);
	}

	return (
		<div className="asnp-w-full asnp-absolute">
			<CSSTransition
				in={ activeDisplayChat === 'chatDisplaySetting' }
				unmountOnExit
				timeout={ 500 }
				classNames="menu-primary"
			>
				<div className="menu">
					<div>
						<BackButton goToMenu="setting">
							{ __(
								'Display Settings',
								'asnp-easy-whatsapp'
							) }
						</BackButton>

						<div className="asnp-w-full asnp-text-sm asnp-p-2 asnp-rounded-md asnp-text-justify">
							{ __(
								'The settings below are used to activate/deactivate the widget depending on specific parameters.',
								'asnp-easy-whatsapp'
							) }
						</div>

						<StartChat goToMenu="pages">
							{ __( ' Pages', 'asnp-easy-whatsapp' ) }
						</StartChat>
						<StartChat goToMenu="devices">
							{ __( 'Devices', 'asnp-easy-whatsapp' ) }
						</StartChat>
						<StartChat goToMenu="visitors">
							{ __( 'Visitors', 'asnp-easy-whatsapp' ) }
						</StartChat>
					</div>
				</div>
			</CSSTransition>
			<CSSTransition
				in={ activeDisplayChat === 'pages' }
				unmountOnExit
				timeout={ 500 }
				classNames="menu-secondary"
			>
				<div className="menu">
					<BackChatDisplay goToMenu="chatDisplaySetting">
						{ __( 'Pages', 'asnp-easy-whatsapp' ) }
					</BackChatDisplay>
					<Pages
						onChange={ props.onChange }
						pagesType={ props.pagesType }
						addExludedPageUrl={ props.addExludedPageUrl }
						deleteExludedPageUrl={ props.deleteExludedPageUrl }
						excludedPagesUrl={ props.excludedPagesUrl }
						updateExcludedPagesUrl={ props.updateExcludedPagesUrl }
						pagesUrl={ props.pagesUrl }
						addPagesUrl={ props.addPagesUrl }
						deletePageUrl={ props.deletePageUrl }
						updatePagesUrl={ props.updatePagesUrl }
					/>
					{ 'woocommerceProducts' === props.pagesType && (
						<WooCommerce
							onChange={ props.onChange }
							woocommerceItems={ props.woocommerceItems }
							woocommerceItemsConditions={
								props.woocommerceItemsConditions
							}
							addWooCommerceItem={ props.addWooCommerceItem }
							updateWooCommerceItem={
								props.updateWooCommerceItem
							}
							deleteWooCommerceItem={
								props.deleteWooCommerceItem
							}
						/>
					) }
				</div>
			</CSSTransition>
			<CSSTransition
				in={ activeDisplayChat === 'devices' }
				unmountOnExit
				timeout={ 500 }
				classNames="menu-secondary"
			>
				<div className="menu">
					<BackChatDisplay goToMenu="chatDisplaySetting">
						{ __( 'Devices', 'asnp-easy-whatsapp' ) }
					</BackChatDisplay>
					<Devices
						onChange={ props.onChange }
						mobile={ props.mobile }
						desktop={ props.desktop }
					/>
				</div>
			</CSSTransition>
			<CSSTransition
				in={ activeDisplayChat === 'visitors' }
				unmountOnExit
				timeout={ 500 }
				classNames="menu-secondary"
			>
				<div className="menu">
					<BackChatDisplay goToMenu="chatDisplaySetting">
						{ __( 'Visitors', 'asnp-easy-whatsapp' ) }
					</BackChatDisplay>
					<Visitors
						onChange={ props.onChange }
						visitors={ props.visitors }
					/>
				</div>
			</CSSTransition>
		</div>
	);
};

export default ChatDisplaySetting;
