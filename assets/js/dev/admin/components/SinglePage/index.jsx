import React from 'react';
import { __ } from '@wordpress/i18n';
import Toggle from './../Toggle';

const SinglePage = ( props ) => {
	return (
		<div>
			<div className="asnp-flex asnp-flex-row md:asnp-w-[19rem] asnp-w-[11rem] asnp-justify-between">
				<h2 className="asnp-field-title md:asnp-min-w-1/3">
					{ __( 'Show Badge on Product Page', 'asnp-easy-whatsapp' ) }
				</h2>
				<div>
					<Toggle
						value={ 'true' == props.showBadgeProductPage }
						onChange={ ( value ) =>
							props.onChange(
								'showBadgeProductPage',
								value ? 'true' : 'false'
							)
						}
					/>
				</div>
			</div>
			<div className="asnp-mt-8">
				<label className="asnp-block asnp-space-y-1">
					<h2 className="asnp-field-title asnp-ml-1">
						{ __(
							'Single Container',
							'asnp-easy-whatsapp'
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
				<label className="asnp-block asnp-space-y-1 asnp-italic asnp-text-gray-500">
					<p>
						{ __( 'comma separated hooks.', 'asnp-easy-whatsapp' ) }
					</p>
				</label>
			</div>
		</div>
	);
};

export default SinglePage;
