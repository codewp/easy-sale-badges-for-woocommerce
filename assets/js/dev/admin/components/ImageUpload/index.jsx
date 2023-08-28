import React, { useEffect, useRef, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { TrashIcon } from '@heroicons/react/solid';
import { isImage } from '../../utils';

import './style.scss';

export const ImageUpload = ( { file, setFile } ) => {
	const [ preview, setPreview ] = useState();
	const [ dragActive, setDragActive ] = useState( false );
	const inputRef = useRef( null );

	useEffect( () => {
		if ( ! file ) {
			setPreview( '' );
			return;
		}

		const reader = new FileReader();
		reader.readAsDataURL( file );
		reader.onload = function () {
			setPreview( reader.result );
		};

		return () => reader.abort();
	}, [ file ] );

	const onSelectFile = ( e ) => {
		if ( ! e.target.files || e.target.files.length === 0 ) {
			setFile( '' );
			return;
		}

		if ( isImage( e.target.files[ 0 ] ) ) {
			setFile( e.target.files[ 0 ] );
		}
	};

	const handleDrag = function ( e ) {
		e.preventDefault();
		e.stopPropagation();
		if ( e.type === 'dragenter' || e.type === 'dragover' ) {
			setDragActive( true );
		} else if ( e.type === 'dragleave' ) {
			setDragActive( false );
		}
	};

	const handleDrop = function ( e ) {
		e.preventDefault();
		e.stopPropagation();
		setDragActive( false );
		if ( e.dataTransfer.files && e.dataTransfer.files[ 0 ] ) {
			if ( isImage( e.dataTransfer.files[ 0 ] ) ) {
				setFile( e.dataTransfer.files[ 0 ] );
			}
		}
	};

	const onButtonClick = () => {
		inputRef.current.click();
	};

	return (
		<div>
			<label className="asnp-block asnp-text-sm asnp-font-medium asnp-text-gray-700">
				{ __( 'Custom', 'asnp-easy-sale-badge' ) }
			</label>
			{ ! file && (
				<div>
					<form
						id="form-file-upload"
						onDragEnter={ handleDrag }
						onSubmit={ ( e ) => e.preventDefault() }
					>
						<input
							ref={ inputRef }
							type="file"
							id="input-file-upload"
							multiple={ true }
							onChange={ onSelectFile }
						/>
						<label
							id="label-file-upload"
							htmlFor="input-file-upload"
							className={ dragActive ? 'drag-active' : '' }
						>
							<div className="asnp-space-y-1 asnp-text-center">
								<svg
									className="asnp-mx-auto asnp-h-12 asnp-w-12 asnp-text-gray-400"
									stroke="currentColor"
									fill="none"
									viewBox="0 0 48 48"
									aria-hidden="true"
								>
									<path
										d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
										strokeWidth={ 2 }
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<div className="asnp-flex asnp-text-sm asnp-text-gray-600">
									<div className="asnp-relative asnp-cursor-pointer asnp-rounded-md asnp-font-medium asnp-text-gray-600 hover:asnp-text-gray-500 focus-within:asnp-outline-none focus-within:asnp-ring-2 focus-within:asnp-ring-offset-2 focus-within:asnp-ring-gray-500">
										<span>
											{ __(
												'Upload a file or drag and drop here',
												'asnp-easy-sale-badge'
											) }
										</span>
										<button
											className="upload-button"
											onClick={ onButtonClick }
										>
											Upload a file
										</button>
									</div>
								</div>
								<p className="asnp-text-xs asnp-text-gray-500">
									{ __(
										'PNG, JPG, GIF',
										'asnp-easy-sale-badge'
									) }
								</p>
							</div>
						</label>
						{ dragActive && (
							<div
								id="drag-file-element"
								onDragEnter={ handleDrag }
								onDragLeave={ handleDrag }
								onDragOver={ handleDrag }
								onDrop={ handleDrop }
							></div>
						) }
					</form>
				</div>
			) }

			{ file && (
				<div className="asnp-w-[25rem]">
					<div className="asnp-relative asnp-border-2 asnp-my-2 asnp-border-gray-300 asnp-border-dashed asnp-rounded-md asnp-flex asnp-justify-center">
						<div className="asnp-h-40  asnp-flex asnp-justify-center asnp-pt-3 asnp-pb-3">
							<img
								className="asnp-rounded-full"
								src={ preview }
							/>
						</div>
						<div className="asnp-absolute asnp-right-1 asnp-top-1">
							<TrashIcon
								className="asnp-h-6 asnp-w-6 asnp-cursor-pointer asnp-text-red-500 hover:asnp-text-black "
								onClick={ () => setFile( '' ) }
							/>
						</div>
					</div>
				</div>
			) }
		</div>
	);
};
