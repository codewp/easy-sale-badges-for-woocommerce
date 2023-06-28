import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import BackButton from '../../BackButton';

const StartChatButton = ( props ) => {
	return (
		<div>
			<BackButton goToMenu="styles">
				{ __( 'Button Border Radius', 'asnp-easy-whatsapp' ) }
			</BackButton>
			<label className="asnp-space-y-1">
				<h1 className="asnp-field-title">
					{ __( 'Button Border Radius', 'asnp-easy-whatsapp' ) }
				</h1>
			</label>
			<div className="asnp-relative asnp-pt-1">
				<input
					type="range"
					className="asnp-form-range asnp-w-full asnp-h-6 asnp-p-0 asnp-bg-transparent focus:asnp-outline-none focus:asnp-ring-0 focus:asnp-shadow-none asnp-cursor-pointer"
					min="0"
					max="16"
					step="2"
					value={ props.startChatButton }
					onChange={ ( e ) =>
						props.onChange( 'startChatButton', e.target.value )
					}
				/>
				<div className="asnp-w-full asnp-flex asnp-justify-between asnp-text-xs asnp-px-2">
					<span>0</span>
					<span>25</span>
					<span>50</span>
					<span>75</span>
					<span>100</span>
				</div>
			</div>
		</div>
	);
};

export default StartChatButton;
