import React from 'react';
import { __ } from '@wordpress/i18n';

import './style.scss';

export default function WarningModal( props ) {
	const message = props.message
		? props.message
		: __( 'Are you sure to delete?', 'easy-sale-badges-for-woocommerce' );

	return (
		<div className="asnp-modal-mask">
			<div className="asnp-modal-wrapper">
				<div className="asnp-modal-container">
					<div className="asnp-modal-header">
						<h3 className="asnp-modal-warning-header asnp-font-bold">
							{ __( 'Warning!', 'easy-sale-badges-for-woocommerce' ) }
						</h3>
					</div>
					<div className="asnp-modal-body">
						<p>{ message }</p>
					</div>
					<div className="asnp-modal-footer">
						<div className="asnp-modal-footer-buttons asnp-inline-flex asnp-space-x-1 asnp-whitespace-nowrap">
							<button
								className="asnp-btn asnp-btn-delete"
								onClick={ () => props.onApply() }
							>
								{ __( 'Yes', 'easy-sale-badges-for-woocommerce' ) }
							</button>
							<button
								className="asnp-btn asnp-btn-secondary"
								onClick={ () => props.onCancel() }
							>
								{ __( 'Cancel', 'easy-sale-badges-for-woocommerce' ) }
							</button>
						</div>
						<div className="clear"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
