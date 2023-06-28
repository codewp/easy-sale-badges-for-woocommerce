import React, { useState } from 'react';
import { PencilIcon, XIcon } from '@heroicons/react/solid';
import { __ } from '@wordpress/i18n';

const SpecificPagesListItem = ( { url, deletePageUrl, updatePagesUrl } ) => {
	const [ edit, setEdit ] = useState( false );
	const [ editInput, setEditInput ] = useState( url );

	return (
		<>
			{ edit === false && (
				<div className="asnp-mt-2 asnp-border-2 asnp-border-dashed asnp-border-indigo-500 asnp-rounded-md asnp-mr-2">
					<div className="asnp-flex asnp-pl-4 asnp-pt-2 asnp-pb-2 asnp-pr-2 asnp-w-full">
						<div className="asnp-w-[19rem] asnp-flex asnp-justify-start">
							<div className="asnp-text-base">{ url.trim() }</div>
						</div>
						<div className="asnp-w-[2rem] asnp-flex asnp-justify-end">
							<div
								className=" asnp-cursor-pointer"
								onClick={ () => setEdit( true ) }
								title={ __( 'Edit', 'asnp-easy-whatsapp' ) }
							>
								<PencilIcon className="asnp-h-4 asnp-w-4 " />
							</div>
							<div
								className=" asnp-cursor-pointer "
								onClick={ deletePageUrl }
								title={ __( 'Delete', 'asnp-easy-whatsapp' ) }
							>
								<XIcon
									className="asnp-h-4 asnp-w-4 "
									color="red"
								/>
							</div>
						</div>
					</div>
				</div>
			) }
			{ edit === true && (
				<div>
					<div>
						<input
							className="asnp-block asnp-text-field"
							type="text"
							value={ editInput }
							placeholder={ __( 'URL', 'asnp-easy-whatsapp' ) }
							name="text"
							onChange={ ( e ) => setEditInput( e.target.value ) }
						/>
					</div>
					<div className="asnp-flex asnp-mt-1">
						<button
							className="asnp-btn-green asnp-px-2 asnp-py-2  asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
							onClick={ () => {
								updatePagesUrl( editInput );
								setEdit( false );
							} }
						>
							{ __( 'Apply', 'asnp-easy-whatsapp' ) }
						</button>

						<button
							className="asnp-ml-1 asnp-btn-delete  asnp-px-2 asnp-py-2 asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
							onClick={ () => setEdit( false ) }
						>
							{ __( 'Cancel', 'asnp-easy-whatsapp' ) }
						</button>
					</div>
				</div>
			) }
		</>
	);
};

export default SpecificPagesListItem;
