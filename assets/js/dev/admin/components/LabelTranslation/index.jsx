import React, { useContext } from 'react';
import { __ } from '@wordpress/i18n';
import Select from 'react-select';
import { BadgeContext } from '../../contexts/Badge';
import { translationLang } from '../../utils/constants';
import { XIcon } from '@heroicons/react/solid';

import './index.scss';

const LabelTranslation = ( { show, setShow, labelTranslate } ) => {
	const {
		addTranslation,
		deleteTranslation,
		langTrans,
		setLangTrans,
		valueTrans,
		setValueTrans,
		updateTranslation,
	} = useContext( BadgeContext );

	return (
		<div
			className="asnp-ew-modal-mask"
			style={ { display: show ? 'block' : 'none' } }
		>
			<div
				onClick={ () => setShow( false ) }
				className="asnp-ew-modal-wrapper"
			>
				<div
					className="asnp-ew-modal-container asnp-scrollBarTrans"
					onClick={ ( e ) => {
						e.stopPropagation();
					} }
				>
					<div className="asnp-ew-modal-body">
						<div className="asnp-flex asnp-relative">
							<div className="asnp-field-title asnp-ml-2 asnp-text-lg asnp-font-bold">
								{ __(
									'Translate Label',
									'easy-sale-badges-for-woocommerce'
								) }
							</div>
							<div className="asnp-right-1 asnp-absolute">
								<div
									className="asnp-cursor-pointer"
									onClick={ () => setShow( false ) }
								>
									<XIcon
										className="asnp-h-6 asnp-w-6"
										color="red"
									/>
								</div>
							</div>
						</div>
						<div className="asnp-w-full asnp-ml-2 asnp-flex asnp-mt-4 asnp-inputWeek">
							<Select
								className="!asnp-w-[15rem]"
								onChange={ ( selectedOption ) => {
									if ( selectedOption ) {
										setLangTrans( selectedOption.lang );
									}
								} }
								options={ translationLang }
								isClearable={ true }
								isDisabled={ false }
							/>
							<div className="asnp-ml-6">
								<input
									type="text"
									className="asnp-block asnp-text-field !asnp-w-[20rem]"
									value={ valueTrans }
									onChange={ ( e ) =>
										setValueTrans( e.target.value )
									}
								/>
								<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
									<p className="asnp-text-xs asnp-text-gray-400">
										{ __(
											'Add Translate Label.',
											'easy-sale-badges-for-woocommerce'
										) }
									</p>
								</label>
							</div>
							<button
								className="asnp-mb-4 asnp-ml-3 asnp-mt-2 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
								onClick={ () =>
									addTranslation( [
										{
											lang: langTrans,
											value: valueTrans,
										},
									] )
								}
							>
								{ __(
									'Add',
									'easy-sale-badges-for-woocommerce'
								) }
							</button>
						</div>
						{ labelTranslate &&
							Object.entries( labelTranslate ).map(
								( [ lang, translation ], index ) => {
									const foundLang = translationLang.find(
										( item ) => item.value === lang
									);
									return (
										<div
											key={ index }
											className="asnp-w-full asnp-ml-2 asnp-flex asnp-mt-4"
										>
											<div className="asnp-w-[15rem] asnp-mt-1 asnp-h-10 asnp-p-2 asnp-text-lg  asnp-border-b-2 asnp-border-indigo-600">
												<p>
													{ foundLang
														? foundLang.label
														: lang }
												</p>
											</div>
											<div className="asnp-ml-6">
												<input
													type="text"
													className="asnp-block asnp-text-field !asnp-w-[20rem]"
													value={ translation }
													onChange={ ( e ) =>
														updateTranslation(
															lang,
															e.target.value
														)
													}
												/>
												<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
													<p className="asnp-text-xs asnp-text-gray-400">
														{ __(
															'Edit Translate Label.',
															'easy-sale-badges-for-woocommerce'
														) }
													</p>
												</label>
											</div>
											<button
												className="asnp-mb-4 asnp-ml-3 asnp-mt-2 asnp-btn-delete asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none"
												onClick={ () =>
													deleteTranslation( lang )
												}
											>
												{ __(
													'Delete',
													'easy-sale-badges-for-woocommerce'
												) }
											</button>
										</div>
									);
								}
							) }
					</div>
				</div>
			</div>
		</div>
	);
};

export default LabelTranslation;
