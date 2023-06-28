import React from 'react';
import { __ } from '@wordpress/i18n';
import Tippy from '@tippyjs/react';
import { IMAGES_URL } from '../../../../../utils/constants';

const Visitors = ( props ) => {
	return (
		<div>
			<div className="asnp-w-full asnp-text-sm  asnp-p-1 asnp-rounded-md asnp-text-justify">
				{ __(
					'Select type of visitors who can view WhatsApp',
					'asnp-easy-whatsapp'
				) }
			</div>
			<div className="asnp-w-full asnp-font-bold asnp-mt-1">
				{ __( 'Display Chat for', 'asnp-easy-whatsapp' ) }
			</div>

			<div className="asnp-mt-2 asnp-flex asnp-flex-col">
				<label className="asnp-inline-flex asnp-items-center asnp-mt-1">
					<input
						type="radio"
						className="asnp-form-radio"
						name="visitors"
						value="all"
						checked={ 'all' == props.visitors }
						onChange={ () => {
							props.onChange( 'visitors', 'all' );
						} }
					/>
					<span className="asnp-ml-1">
						{ __( 'All Visitors ', 'asnp-easy-whatsapp' ) }
					</span>
				</label>
				<label className="asnp-inline-flex asnp-items-center asnp-mt-1">
					<input
						type="radio"
						className="asnp-form-radio"
						name="visitors"
						value="new"
						checked={ 'new' == props.visitors }
						onChange={ () => {
							props.onChange( 'visitors', 'new' );
						} }
					/>
					<span className="asnp-ml-1">
						{ __( 'New Visitors', 'asnp-easy-whatsapp' ) }
					</span>
					<div className="asnp-ml-1 asnp-cursor-pointer">
						<Tippy
							interactive={ true }
							placement={ 'top-end' }
							content={
								<div className="asnp-h-auto asnp-w-[12rem] asnp-text-justify asnp-bg-green-500 asnp-rounded-lg asnp-p-[0.4rem] asnp-text-white asnp-rounded-bl-none asnp-ml-3">
									{ __(
										'Who come to your Website for the first time',
										'asnp-easy-whatsapp'
									) }
								</div>
							}
						>
							<img src={ IMAGES_URL + 'quest.svg' } />
						</Tippy>
					</div>
				</label>
				<label className="asnp-inline-flex asnp-items-center asnp-mt-1">
					<input
						type="radio"
						className="asnp-form-radio"
						name="visitors"
						value="returning"
						checked={ 'returning' == props.visitors }
						onChange={ () => {
							props.onChange( 'visitors', 'returning' );
						} }
					/>
					<span className="asnp-ml-1">
						{ __( 'Returning Visitors', 'asnp-easy-whatsapp' ) }
					</span>
					<div className="asnp-ml-1 asnp-cursor-pointer">
						<Tippy
							interactive={ true }
							placement={ 'top-end' }
							content={
								<div className="asnp-h-auto asnp-w-[13rem] asnp-bg-green-500 asnp-rounded-lg asnp-p-[0.4rem] asnp-text-white asnp-rounded-bl-none asnp-ml-3">
									{ __(
										'Who had been on your Website before',
										'asnp-easy-whatsapp'
									) }
								</div>
							}
						>
							<img src={ IMAGES_URL + 'quest.svg' } />
						</Tippy>
					</div>
				</label>
				<label className="asnp-inline-flex asnp-items-center asnp-mt-1">
					<input
						type="radio"
						className="asnp-form-radio"
						name="visitors"
						disabled
					/>
					<span className="asnp-ml-1">
						{ __( 'Logged in Users', 'asnp-easy-whatsapp' ) }
					</span>
					<div className="asnp-text-red-600 asnp-uppercase asnp-ml-1">
						{ __( '(Pro)', 'asnp-easy-whatsapp' ) }
					</div>
				</label>
				<label className="asnp-inline-flex asnp-items-center asnp-mt-1">
					<input
						type="radio"
						className="asnp-form-radio"
						name="visitors"
						value="guest"
						disabled
					/>
					<span className="asnp-ml-1">
						{ __( 'Guest Users', 'asnp-easy-whatsapp' ) }
					</span>
					<div className="asnp-text-red-600 asnp-uppercase asnp-ml-1">
						{ __( '(Pro)', 'asnp-easy-whatsapp' ) }
					</div>
				</label>
			</div>
		</div>
	);
};

export default Visitors;
