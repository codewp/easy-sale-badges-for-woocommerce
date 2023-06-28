import React, { useContext, useState } from 'react';
import { __ } from '@wordpress/i18n';
import All from './All';
import Male from './Male';
import Female from './Female';
import { ImageUpload } from './../ImageUpload';

const AccountsProfile = ( {
	onChange,
	avatar,
	avatarFile,
	setAvatarFile,
	avatarType,
	setAvatarType,
} ) => {
	const [ imageType, setimageType ] = useState( 'all' );

	return (
		<div>
			<label className="asnp-block asnp-space-y-1">
				<span className="asnp-field-title">
					{ __( 'Avatar', 'asnp-easy-whatsapp' ) }
				</span>
				<select
					className="asnp-block asnp-select-field"
					value={ avatarType }
					onChange={ ( e ) => {
						setAvatarType( e.target.value );
					} }
				>
					<option value="image">
						{ __( 'Select From Images', 'asnp-easy-whatsapp' ) }
					</option>
					<option value="upload">
						{ __( 'Upload Image', 'asnp-easy-whatsapp' ) }
					</option>
				</select>
			</label>
			{ 'image' === avatarType && (
				<div className="asnp-mt-2">
					<div className="asnp-mt-1  asnp-items-center asnp-ml-20">
						<div className="asnp-inline-block asnp-h-[7rem] asnp-w-[7rem]  asnp-ml-4 asnp-mt-4 ">
							<img
								className="asnp-rounded-full asnp-h-[7rem] asnp-w-[7rem] asnp-inline-block  asnp-border-none asnp-object-cover"
								src={ avatar }
							/>
						</div>
					</div>
					<div className="asnp-bg-white  asnp-ml-4 asnp-mt-2 asnp-w-[20rem] asnp-h-[20rem] asnp-py-[0.5rem] asnp-px-[0.5rem] asnp-rounded-md asnp-shadow-xl">
						<label className="asnp-inline-flex asnp-items-center">
							<input
								type="radio"
								className="asnp-form-radio"
								name="chatHeaderSelectPicture"
								value="all"
								defaultChecked={ 'all' === imageType }
								onClick={ () => {
									setimageType( 'all' );
								} }
							/>
							<span className="asnp-ml-1">
								{ __( 'All ', 'asnp-easy-whatsapp' ) }
							</span>
						</label>
						<label className="asnp-inline-flex asnp-items-center asnp-ml-4">
							<input
								type="radio"
								className="asnp-form-radio"
								name="chatHeaderSelectPicture"
								value="male"
								defaultChecked={ 'male' === imageType }
								onClick={ () => {
									setimageType( 'male' );
								} }
							/>
							<span className="asnp-ml-1">
								{ __( 'Male ', 'asnp-easy-whatsapp' ) }
							</span>
						</label>
						<label className="asnp-inline-flex asnp-items-center asnp-ml-4">
							<input
								type="radio"
								className="asnp-form-radio"
								name="chatHeaderSelectPicture"
								value="female"
								defaultChecked={ 'female' === imageType }
								onClick={ () => {
									setimageType( 'female' );
								} }
							/>
							<span className="asnp-ml-1">
								{ __( 'Female ', 'asnp-easy-whatsapp' ) }
							</span>
						</label>
						{ imageType == 'all' && <All onChange={ onChange } /> }
						{ imageType == 'male' && (
							<Male onChange={ onChange } />
						) }
						{ imageType == 'female' && (
							<Female onChange={ onChange } />
						) }
					</div>
				</div>
			) }
			{ 'upload' === avatarType && (
				<div className="asnp-w-full asnp-h-auto asnp-pt-2 asnp-my-3">
					<ImageUpload
						file={ avatarFile }
						setFile={ setAvatarFile }
					/>
				</div>
			) }
		</div>
	);
};

export default AccountsProfile;
