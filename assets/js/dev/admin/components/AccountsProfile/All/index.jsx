import React from 'react';
import { IMAGES_URL } from '../../../utils/constants';

const All = ( props ) => {
	return (
		<div className="asnp-relative asnp-my-4 asnp-h-auto asnp-flex asnp-flex-col asnp-rounded-md">
			<div className="asnp-w-full asnp-flex asnp-py-2 asnp-h-16  asnp-justify-around">
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer asnp-object-cover"
					src={ IMAGES_URL + 'male1.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'male1.jpg' );
					} }
				/>
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer asnp-object-cover"
					src={ IMAGES_URL + 'male2.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'male2.jpg' );
					} }
				/>
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer asnp-object-cover"
					src={ IMAGES_URL + 'male3.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'male3.jpg' );
					} }
				/>
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer asnp-object-cover"
					src={ IMAGES_URL + 'male4.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'male4.jpg' );
					} }
				/>
			</div>
			<div className="asnp-w-full asnp-flex asnp-py-2 asnp-h-16  asnp-justify-around">
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer asnp-object-cover"
					src={ IMAGES_URL + 'female1.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'female1.jpg' );
					} }
				/>
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer asnp-object-cover"
					src={ IMAGES_URL + 'female2.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'female2.jpg' );
					} }
				/>
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer asnp-object-cover"
					src={ IMAGES_URL + 'female3.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'female3.jpg' );
					} }
				/>
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer asnp-object-cover"
					src={ IMAGES_URL + 'female4.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'female4.jpg' );
					} }
				/>
			</div>
			<div className="asnp-w-full asnp-flex asnp-py-2 asnp-h-16   asnp-justify-around">
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer asnp-object-cover"
					src={ IMAGES_URL + 'male5.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'male5.jpg' );
					} }
				/>
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer asnp-object-cover"
					src={ IMAGES_URL + 'male9.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'male9.jpg' );
					} }
				/>
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer asnp-object-cover"
					src={ IMAGES_URL + 'male7.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'male7.jpg' );
					} }
				/>
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer asnp-object-cover"
					src={ IMAGES_URL + 'male8.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'male8.jpg' );
					} }
				/>
			</div>
			<div className="asnp-w-full asnp-flex asnp-py-2 asnp-h-16 asnp-mb-2  asnp-justify-around">
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer  asnp-object-cover "
					src={ IMAGES_URL + 'female5.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'female5.jpg' );
					} }
				/>
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer  asnp-object-cover"
					src={ IMAGES_URL + 'female6.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'female6.jpg' );
					} }
				/>
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer asnp-object-cover"
					src={ IMAGES_URL + 'female7.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'female7.jpg' );
					} }
				/>
				<img
					className="asnp-h-14 asnp-w-14 asnp-border-none asnp-rounded-full asnp-cursor-pointer asnp-object-cover"
					src={ IMAGES_URL + 'female8.jpg' }
					onClick={ () => {
						props.onChange( 'avatar', IMAGES_URL + 'female8.jpg' );
					} }
				/>
			</div>
		</div>
	);
};

export default All;
