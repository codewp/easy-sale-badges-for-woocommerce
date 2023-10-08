import React from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from './../Toggle';

const SinglePage = ( props ) => {
	return (
		<div>
			<div className="asnp-flex asnp-flex-row md:asnp-w-[19rem] asnp-w-[11rem] asnp-justify-between">
				<h2 className="asnp-field-title md:asnp-min-w-1/3">
					{ __(
						'Show Badge on Product Page',
						'asnp-easy-sale-badge'
					) }
				</h2>
				<div>
					<Toggle
						value={ 1 == props.showBadgeProductPage }
						onChange={ ( value ) =>
							props.onChange(
								'showBadgeProductPage',
								value ? 1 : 0
							)
						}
					/>
				</div>
			</div>
			<div className="asnp-mt-8">
				<label className="asnp-block asnp-space-y-1">
					<h2 className="asnp-field-title asnp-ml-1">
						{ __(
							'Product Image Container CSS Selector',
							'asnp-easy-sale-badge'
						) }
					</h2>
					<input
						type="text"
						className="asnp-block asnp-text-field !asnp-w-[20rem]"
						value={ props.singleContainer }
						onChange={ ( e ) =>
							props.onChange( 'singleContainer', e.target.value )
						}
					/>
				</label>
				<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
					<p className="asnp-text-xs asnp-text-gray-400">
						{ __(
							'Images container CSS selector on single product page.',
							'asnp-easy-sale-badge'
						) }
					</p>
				</label>
			</div>
			<button
				className="asnp-btn asnp-btn-primary asnp-mb-2 asnp-mt-8 asnp-w-[8rem]"
				type="button"
				onClick={ () => props.onSave() }
			>
				{ __( 'Save Changes', 'asnp-easy-sale-badge' ) }
			</button>
		</div>
	);
};

export default SinglePage;
