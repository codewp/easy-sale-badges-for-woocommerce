import React from 'react';
import { __ } from '@wordpress/i18n';
import Tippy from '@tippyjs/react';
import Toggle from '../../Toggle';
import TimeZone from '../../TimeZone';
import { IMAGES_URL } from '../../../utils/constants';

const General = ( props ) => {
	return (
		<div>
			<div className="asnp-flex asnp-flex-row md:asnp-w-[23rem] asnp-w-[16rem] asnp-justify-between">
				<h2 className="asnp-field-title md:asnp-min-w-1/3">
					{ __( 'Show default "Sale" label', 'asnp-easy-whatsapp' ) }
				</h2>
				<div>
					<Toggle
						value={ 'true' == props.showLabel }
						onChange={ ( value ) =>
							props.onChange(
								'showLabel',
								value ? 'true' : 'false'
							)
						}
					/>
				</div>
			</div>
			<div className="asnp-flex asnp-flex-row asnp-mt-10 md:asnp-w-[23rem] asnp-w-[17rem]">
				<h2 className="asnp-field-title md:asnp-min-w-1/3">
					{ __(
						'Product Display for a Single Item',
						'asnp-easy-whatsapp'
					) }
				</h2>
				<div className="asnp-ml-[0.5rem] asnp-cursor-pointer asnp-mt-[0.2rem]">
					<Tippy
						interactive={ true }
						placement={ 'top-start' }
						content={
							<div className="asnp-h-auto asnp-w-[15rem] asnp-bg-green-500 asnp-rounded-lg asnp-p-[0.4rem] asnp-text-white asnp-rounded-bl-none asnp-ml-3">
								{ __(
									'Disable powered by message in the pro version',
									'asnp-easy-whatsapp'
								) }
							</div>
						}
					>
						<div className="asnp-w-5 asnp-h-4">
							<img src={ IMAGES_URL + 'quest.svg' } />
						</div>
					</Tippy>
				</div>
				<div className="asnp-ml-[53px]">
					<Toggle
						value={ 'true' == props.showSingleProduct }
						onChange={ ( value ) =>
							props.onChange(
								'showSingleProduct',
								value ? 'true' : 'false'
							)
						}
					/>
				</div>
			</div>
			<div className="asnp-flex  asnp-mt-10 lg:asnp-w-[20rem] asnp-justify-between md:asnp-w-[20rem]">
				<h2 className="asnp-field-title asnp-py-1 asnp-font-bold md:asnp-min-w-1/3">
					{ __( 'Desktop Url', 'asnp-easy-whatsapp' ) }
				</h2>
				<div
					className="asnp-inline-flex asnp-rounded-md asnp-shadow-sm"
					role="group"
				>
					<Tippy
						interactive={ true }
						placement={ 'left' }
						content={
							<div className="asnp-bg-slate-500 asnp-p-2 asnp-rounded-lg">
								<p className="asnp-text-white">
									{ __(
										'https://api.whatsapp.com/',
										'asnp-easy-whatsapp'
									) }
								</p>
							</div>
						}
					>
						<button
							type="button"
							className={
								'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border   asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
								( props.urlDesktop == 'API' &&
									'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700  ' )
							}
							onClick={ () => {
								props.onChange( 'urlDesktop', 'API' );
							} }
						>
							API
						</button>
					</Tippy>
					<Tippy
						interactive={ true }
						placement={ 'right' }
						content={
							<div className="asnp-bg-slate-500 asnp-p-2 asnp-rounded-lg">
								<p className="asnp-text-white">
									{ __(
										'https://web.whatsapp.com/',
										'asnp-easy-whatsapp'
									) }
								</p>
							</div>
						}
					>
						<button
							type="button"
							className={
								'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
								( props.urlDesktop == 'Web' &&
									'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700  ' )
							}
							onClick={ () => {
								props.onChange( 'urlDesktop', 'Web' );
							} }
						>
							{ __( 'Web', 'asnp-easy-whatsapp' ) }
						</button>
					</Tippy>
				</div>
			</div>

			<div className="asnp-flex asnp-mt-10 lg:asnp-w-[21.5rem] asnp-justify-between md:asnp-w-[20rem] ">
				<h2 className="asnp-field-title asnp-py-1 asnp-font-bold md:asnp-min-w-1/3">
					{ __( 'Mobile Url', 'asnp-easy-whatsapp' ) }
				</h2>
				<div
					className="asnp-inline-flex asnp-rounded-md asnp-shadow-sm"
					role="group"
				>
					<Tippy
						interactive={ true }
						placement={ 'left' }
						content={
							<div className="asnp-bg-slate-500 asnp-p-2 asnp-rounded-lg">
								<p className="asnp-text-white">
									{ __(
										'https://api.whatsapp.com/',
										'asnp-easy-whatsapp'
									) }
								</p>
							</div>
						}
					>
						<button
							type="button"
							className={
								'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-l-lg asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
								( props.urlMobile == 'API' &&
									'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700  ' )
							}
							onClick={ () => {
								props.onChange( 'urlMobile', 'API' );
							} }
						>
							{ __( 'API', 'asnp-easy-whatsapp' ) }
						</button>
					</Tippy>
					<Tippy
						interactive={ true }
						placement={ 'right' }
						content={
							<div className="asnp-bg-slate-500 asnp-p-2 asnp-rounded-lg">
								<p className="asnp-text-white">
									{ __(
										'whatsapp://send?phone=',
										'asnp-easy-whatsapp'
									) }
								</p>
							</div>
						}
					>
						<button
							type="button"
							className={
								'asnp-py-2 asnp-px-4 asnp-text-sm asnp-font-medium asnp-text-gray-900 asnp-bg-white asnp-rounded-r-md asnp-border asnp-border-gray-200 hover:asnp-bg-gray-100 hover:asnp-text-blue-700' +
								( props.urlMobile == 'Protocol' &&
									'asnp-border-blue-700 asnp-z-10 asnp-ring-2 asnp-ring-blue-700 asnp-text-blue-700  ' )
							}
							onClick={ () => {
								props.onChange( 'urlMobile', 'Protocol' );
							} }
						>
							{ __( 'Protocol', 'asnp-easy-whatsapp' ) }
						</button>
					</Tippy>
				</div>
			</div>
			<div className="asnp-mt-[2rem] asnp-max-w-lg">
				<TimeZone
					timezone={ props.settings.timezone }
					onChange={ props.onChange }
				/>
			</div>
			<button
				className="asnp-btn asnp-btn-primary asnp-mt-10 asnp-mb-4"
				type="button"
				onClick={ () => props.onSave() }
			>
				{ __( 'Save Changes', 'asnp-easy-whatsapp' ) }
			</button>
		</div>
	);
};

export default General;
