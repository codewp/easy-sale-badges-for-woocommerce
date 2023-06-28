import React, { useContext, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { IMAGES_URL, WHATSAPPS } from '../../utils/constants';
import {
	getCurrentWhatsApp,
	resetCurrentWhatsApp,
	setCurrentWhatsApp,
	getCurrentWhatsAppData,
} from '../../utils/CurrentWhatsApp';
import { AppContext } from '../../contexts/App';

const Template = ( { whatsapp, setWhatsapp, setTemplate } ) => {
	const [ selected, setSelected ] = useState( null );
	const { setMessage } = useContext( AppContext );

	const set = ( template ) => {
		let currentWhatsApp = getCurrentWhatsApp();
		if ( ! currentWhatsApp ) {
			setCurrentWhatsApp( whatsapp );
		}

		let data = getCurrentWhatsAppData();
		if ( data ) {
			template = { ...template, ...data };
		}

		setWhatsapp( template );
	};

	const cancel = () => {
		let currentWhatsApp = getCurrentWhatsApp();
		if ( currentWhatsApp ) {
			setWhatsapp( currentWhatsApp );
		}
		resetCurrentWhatsApp();
	};

	return (
		<div className="asnp-absolute asnp-h-full md:asnp-w-[19rem] lg:asnp-w-[24rem] asnp-w-[17rem] asnp-bg-white	asnp-p-[1rem]">
			<div className="asnp-flex  asnp-mb-3">
				<button
					className="asnp-py-2 asnp-px-3 asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none asnp-btn-primary"
					type="button"
					onClick={ () => {
						setTemplate( false );
						resetCurrentWhatsApp();
					} }
				>
					{ __( 'Apply', 'asnp-easy-whatsapp' ) }
				</button>
				<button
					className="asnp-py-2 asnp-px-3 asnp-ml-2 asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none asnp-btn-secondary"
					type="button"
					onClick={ () => {
						setTemplate( false );
						cancel();
					} }
				>
					{ __( 'Cancel', 'asnp-easy-whatsapp' ) }
				</button>
			</div>
			<h1 className="asnp-w-full asnp-pl-5 asnp-pt-1 asnp-mb-2 asnp-ml-10">
				{ __(
					'Select a template to start with',
					'asnp-easy-whatsapp'
				) }
			</h1>
			<div className="asnp-h-[46rem] asnp-pr-1 asnp-overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!bg-slate-300">
				<div className="asnp-flex asnp-flex-row asnp-h-[11rem] asnp-space-x-1">
					<div
						onClick={ () => {
							set( { ...WHATSAPPS[ 7 ] } );
							setSelected( 1 );
						} }
						className={
							( selected === 1
								? 'asnp-border-indigo-700'
								: 'asnp-border-white' ) +
							' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<img
							className="asnp-object-cover asnp-h-[9.7rem]"
							src={ IMAGES_URL + 'temp0.png' }
						/>
					</div>
					<div
						onClick={ () => {
							set( { ...WHATSAPPS[ 0 ] } );
							setSelected( 2 );
						} }
						className={
							( selected === 2
								? 'asnp-border-indigo-700'
								: 'asnp-border-white ' ) +
							' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<img
							className="asnp-object-cover asnp-h-[9.7rem]"
							src={ IMAGES_URL + 'temp1.png' }
						/>
					</div>
				</div>
				<div className="asnp-flex asnp-flex-row asnp-h-[11rem] asnp-mt-2 asnp-space-x-1">
					<div
						onClick={ () => {
							set( { ...WHATSAPPS[ 1 ] } );
							setSelected( 3 );
						} }
						className={
							( selected === 3
								? 'asnp-border-indigo-700'
								: 'asnp-border-white' ) +
							' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<img
							className="asnp-object-cover asnp-h-[9.7rem]"
							src={ IMAGES_URL + 'temp2.png' }
						/>
					</div>
					<div
						onClick={ () => {
							set( { ...WHATSAPPS[ 2 ] } );
							setSelected( 4 );
						} }
						className={
							( selected === 4
								? 'asnp-border-indigo-700'
								: 'asnp-border-white' ) +
							' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<img
							className="asnp-object-cover asnp-h-[9rem]"
							src={ IMAGES_URL + 'te5.png' }
						/>
					</div>
				</div>
				<div className="asnp-flex asnp-flex-row asnp-h-[11rem] asnp-mt-2 asnp-space-x-1">
					<div
						onClick={ () => {
							set( { ...WHATSAPPS[ 3 ] } );
							setSelected( 5 );
						} }
						className={
							( selected === 5
								? 'asnp-border-indigo-700'
								: 'asnp-border-white' ) +
							' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<img
							className="asnp-object-cover asnp-h-[9.7rem]"
							src={ IMAGES_URL + 'tem.png' }
						/>
					</div>
					<div
						onClick={ () => {
							set( { ...WHATSAPPS[ 4 ] } );
							setSelected( 6 );
						} }
						className={
							( selected === 6
								? 'asnp-border-indigo-700'
								: 'asnp-border-white' ) +
							' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<img
							className="asnp-object-cover asnp-h-[9rem]"
							src={ IMAGES_URL + 'te7.png' }
						/>
					</div>
				</div>
				<div className="asnp-flex asnp-flex-row asnp-h-[11rem] asnp-mt-2 asnp-space-x-1">
					<div
						onClick={ () => {
							set( { ...WHATSAPPS[ 5 ] } );
							setSelected( 7 );
						} }
						className={
							( selected === 7
								? 'asnp-border-indigo-700'
								: 'asnp-border-white' ) +
							' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<img
							className="asnp-object-cover asnp-h-[9.7rem]"
							src={ IMAGES_URL + 'te9.png' }
						/>
					</div>
					<div
						onClick={ () => {
							set( { ...WHATSAPPS[ 6 ] } );
							setSelected( 8 );
						} }
						className={
							( selected === 8
								? 'asnp-border-indigo-700'
								: 'asnp-border-white' ) +
							' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<img
							className="asnp-object-cover asnp-h-[9rem]"
							src={ IMAGES_URL + 'temp10.png' }
						/>
					</div>
				</div>
				<div className="asnp-flex asnp-flex-row asnp-h-[11rem] asnp-mt-2 asnp-mb-2 asnp-space-x-1">
					<div
						onClick={ () => {
							set( { ...WHATSAPPS[ 8 ] } );
							setSelected( 9 );
						} }
						className={
							( selected === 9
								? 'asnp-border-indigo-700'
								: 'asnp-border-white' ) +
							' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<img
							className="asnp-object-cover asnp-h-[9.7rem]"
							src={ IMAGES_URL + 'temp11.png' }
						/>
					</div>
					<div
						onClick={ () => {
							set( { ...WHATSAPPS[ 9 ] } );
							setSelected( 10 );
						} }
						className={
							( selected === 10
								? 'asnp-border-indigo-700'
								: 'asnp-border-white' ) +
							' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<img
							className="asnp-object-cover asnp-h-[9rem]"
							src={ IMAGES_URL + 'temp122.png' }
						/>
					</div>
				</div>
				<div className="asnp-flex asnp-flex-row asnp-h-[11rem] asnp-mt-2 asnp-mb-2 asnp-space-x-1">
					<div
						onClick={ () => {
							setMessage( {
								message: __(
									'Available in the Pro Version',
									'asnp-easy-whatsapp'
								),
								type: 'info',
							} );
						} }
						className={
							'asnp-border-white asnp-bg-gray-200 asnp-relative asnp-overflow-hidden asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<span className="asnp-absolute asnp-h-[1.7rem] asnp-top-0 asnp-right-0 asnp-w-full  asnp-text-center asnp-text-white  asnp-bg-pink-600 asnp-text-base asnp-rotate-45 asnp-translate-x-1/4 asnp-pl-[2.2rem] asnp-uppercase">
							Pro
						</span>
						<img
							className="asnp-object-cover asnp-h-[9.7rem]"
							src={ IMAGES_URL + 'temp14.png' }
						/>
					</div>
						<div
							onClick={ () => {
								set( { ...WHATSAPPS[ 10 ] } );
								setSelected( 11 );
							} }
							className={
								( selected === 11
									? 'asnp-border-indigo-700'
									: 'asnp-border-white' ) +
								' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
							}
						>
							<img
								className="asnp-object-cover asnp-h-[9.7rem]"
								src={ IMAGES_URL + 'temp15.png' }
							/>
						</div>
				</div>
				<div className="asnp-flex asnp-flex-row asnp-h-[11rem] asnp-mt-2 asnp-mb-2 asnp-space-x-1">
					<div
						onClick={ () => {
							set( { ...WHATSAPPS[ 11 ] } );
							setSelected( 12 );
						} }
						className={
							( selected === 12
								? 'asnp-border-indigo-700'
								: 'asnp-border-white' ) +
							' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-2 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<img
							className="asnp-object-cover asnp-h-[9.7rem]"
							src={ IMAGES_URL + 'temp16.png' }
						/>
					</div>
					<div
						onClick={ () => {
							set( { ...WHATSAPPS[ 12 ] } );
							setSelected( 13 );
						} }
						className={
							( selected === 13
								? 'asnp-border-indigo-700'
								: 'asnp-border-white' ) +
							' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<img
							className="asnp-object-cover asnp-h-[9rem]"
							src={ IMAGES_URL + 'temp18.png' }
						/>
					</div>
				</div>
				<div className="asnp-flex asnp-flex-row asnp-h-[11rem] asnp-mt-2 asnp-mb-2 asnp-space-x-1">
					<div
						onClick={ () => {
							set( { ...WHATSAPPS[ 13 ] } );
							setSelected( 14 );
						} }
						className={
							( selected === 14
								? 'asnp-border-indigo-700'
								: 'asnp-border-white' ) +
							' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<img
							className="asnp-object-cover asnp-h-[9.7rem]"
							src={ IMAGES_URL + 'temp19.png' }
						/>
					</div>
					<div
						onClick={ () => {
							set( { ...WHATSAPPS[ 14 ] } );
							setSelected( 15 );
						} }
						className={
							( selected === 15
								? 'asnp-border-indigo-700'
								: 'asnp-border-white' ) +
							' asnp-bg-gray-200  asnp-border-2  asnp-w-[11rem] asnp-p-4 asnp-cursor-pointer hover:asnp-border-indigo-700'
						}
					>
						<img
							className="asnp-object-cover asnp-h-[9rem]"
							src={ IMAGES_URL + 'temp20.png' }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Template;
