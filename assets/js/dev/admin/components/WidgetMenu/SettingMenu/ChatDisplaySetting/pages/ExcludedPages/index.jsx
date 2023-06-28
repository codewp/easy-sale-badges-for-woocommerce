import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import ExludedPageListItem from './ExludedPageListItem';

const ExcludedPages = ( {
	addExludedPageUrl,
	deleteExludedPageUrl,
	excludedPagesUrl,
	updateExcludedPagesUrl,
} ) => {
	const [ input, setInput ] = useState( '' );

	const add = () => {
		addExludedPageUrl( input );
		setInput( '' );
	};

	return (
		<div className="asnp-mt-2">
			<label className="asnp-block asnp-space-y-1 asnp-mt-4">
				<span className="asnp-field-title asnp-ml-1 asnp-uppercase">
					{ __(
						"Don't display chat on these pages",
						'asnp-easy-whatsapp'
					) }
				</span>

				<input
					className="asnp-block asnp-text-field"
					type="text"
					value={ input }
					placeholder={ __( 'URL', 'asnp-easy-whatsapp' ) }
					name="text"
					onChange={ ( e ) => setInput( e.target.value ) }
				/>
			</label>
			<button
				className="asnp-mt-2 asnp-mb-4 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
				onClick={ add }
			>
				{ __( 'Add', 'asnp-easy-whatsapp' ) }
			</button>

			<div className="asnp-overflow-auto asnp-h-[20rem] asnp-space-y-2 scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!bg-slate-300 ">
				{ excludedPagesUrl.map( ( url, index ) => (
					<ExludedPageListItem
						key={ index }
						url={ url }
						deleteExludedPageUrl={ () =>
							deleteExludedPageUrl( index )
						}
						updateExcludedPagesUrl={ (value) =>
							updateExcludedPagesUrl( index, value )
						}
						input={ input }
						setInput={ setInput }
					/>
				) ) }
			</div>
		</div>
	);
};

export default ExcludedPages;
