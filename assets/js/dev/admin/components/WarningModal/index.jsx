import React from 'react';
import { __ } from '@wordpress/i18n';

import './style.scss';

export default function WarningModal( props ) {
	const message = props.message
		? props.message
		: __( 'Are you sure to delete?', 'asnp-easy-sale-badge' );

	return (
		<div className="asnp-modal-mask">
			<div className="asnp-modal-wrapper">
				<div className="asnp-modal-container">
					<div className="asnp-modal-header">
						<h3 className="asnp-modal-warning-header asnp-font-bold">
							{ __( 'Warning!', 'asnp-easy-sale-badge' ) }
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
								{ __( 'Yes', 'asnp-easy-sale-badge' ) }
							</button>
							<button
								className="asnp-btn asnp-btn-secondary"
								onClick={ () => props.onCancel() }
							>
								{ __( 'Cancel', 'asnp-easy-sale-badge' ) }
							</button>
						</div>
						<div className="clear"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
