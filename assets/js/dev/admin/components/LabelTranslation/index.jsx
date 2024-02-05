import React, { useContext } from 'react';
import { __ } from '@wordpress/i18n';
import { BadgeContext } from '../../contexts/Badge';
import Select from 'react-select';

import './index.scss';

const translationLang = [
	{ value: 'af', label: 'Afrikaans' },
	{ value: 'am', label: 'አማርኛ' },
	{ value: 'an', label: 'Aragonés' },
	{ value: 'ar', label: 'العربية' },
	{ value: 'ary', label: 'العربية المغربية' },
	{ value: 'as', label: 'অসমীয়া' },
	{ value: 'azb', label: 'گؤنئی آذربایجان' },
	{ value: 'az', label: 'Azərbaycan dili' },
	{ value: 'be', label: 'Беларуская мова' },
	{ value: 'bg_BG', label: 'Български' },
	{ value: 'bn_BD', label: 'বাংলা' },
	{ value: 'bo', label: 'བོད་ཡིག' },
	{ value: 'bs_BA', label: 'Bosanski' },
	{ value: 'ca', label: 'Català' },
	{ value: 'ceb', label: 'Cebuano' },
	{ value: 'cs_CZ', label: 'Čeština' },
	{ value: 'cy', label: 'Cymraeg' },
	{ value: 'da_DK', label: 'Dansk' },
	{ value: 'de_DE', label: 'Deutsch' },
	{ value: 'de_AT', label: 'Deutsch (Österreich)' },
	{ value: 'de_CH_informal', label: 'Deutsch (Schweiz, Du)' },
	{ value: 'de_DE_formal', label: 'Deutsch (Sie)' },
	{ value: 'de_CH', label: 'Deutsch (Schweiz)' },
	{ value: 'dsb', label: 'Dolnoserbšćina' },
	{ value: 'dzo', label: 'རྫོང་ཁ' },
	{ value: 'el', label: 'Ελληνικά' },
	{ value: 'en_AU', label: 'English (Australia)' },
	{ value: 'en_GB', label: 'English (UK)' },
	{ value: '', label: 'English (United States)' },
	{ value: 'en_CA', label: 'English (Canada)' },
	{ value: 'en_ZA', label: 'English (South Africa)' },
	{ value: 'en_NZ', label: 'English (New Zealand)' },
	{ value: 'eo', label: 'Esperanto' },
	{ value: 'es_ES', label: 'Español' },
	{ value: 'es_MX', label: 'Español de México' },
	{ value: 'es_VE', label: 'Español de Venezuela' },
	{ value: 'es_AR', label: 'Español de Argentina' },
	{ value: 'es_EC', label: 'Español de Ecuador' },
	{ value: 'es_CO', label: 'Español de Colombia' },
	{ value: 'es_DO', label: 'Español de República Dominicana' },
	{ value: 'es_PE', label: 'Español de Perú' },
	{ value: 'es_UY', label: 'Español de Uruguay' },
	{ value: 'es_CL', label: 'Español de Chile' },
	{ value: 'es_PR', label: 'Español de Puerto Rico' },
	{ value: 'es_GT', label: 'Español de Guatemala' },
	{ value: 'es_CR', label: 'Español de Costa Rica' },
	{ value: 'et', label: 'Eesti' },
	{ value: 'eu', label: 'Euskara' },
	{ value: 'fa_IR', label: 'فارسی' },
	{ value: 'fa_AF', label: '(فارسی (افغانستان' },
	{ value: 'fi', label: 'Suomi' },
	{ value: 'fr_FR', label: 'Français' },
	{ value: 'fr_CA', label: 'Français du Canada' },
	{ value: 'fr_BE', label: 'Français de Belgique' },
	{ value: 'fur', label: 'Friulian' },
	{ value: 'fy', label: 'Frysk' },
	{ value: 'gd', label: 'Gàidhlig' },
	{ value: 'gl_ES', label: 'Galego' },
	{ value: 'gu', label: 'ગુજરાતી' },
	{ value: 'haz', label: 'هزاره گی' },
	{ value: 'he_IL', label: 'עִבְרִית' },
	{ value: 'hi_IN', label: 'हिन्दी' },
	{ value: 'hr', label: 'Hrvatski' },
	{ value: 'hsb', label: 'Hornjoserbšćina' },
	{ value: 'hu_HU', label: 'Magyar' },
	{ value: 'hy', label: 'Հայերեն' },
	{ value: 'it_IT', label: 'Italiano' },
	{ value: 'id_ID', label: 'Bahasa Indonesia' },
	{ value: 'is_IS', label: 'Íslenska' },
	{ value: 'ja', label: '日本語' },
	{ value: 'jv_ID', label: 'Basa Jawa' },
	{ value: 'ka_GE', label: 'ქართული' },
	{ value: 'kab', label: 'Taqbaylit' },
	{ value: 'kk', label: 'Қазақ тілі' },
	{ value: 'km', label: 'ភាសាខ្មែរ' },
	{ value: 'kn', label: 'ಕನ್ನಡ' },
	{ value: 'ko_KR', label: '한국어' },
	{ value: 'ckb', label: 'كوردی‎' },
	{ value: 'kir', label: 'Кыргызча' },
	{ value: 'lo', label: 'ພາສາລາວ' },
	{ value: 'lt_LT', label: 'Lietuvių kalba' },
	{ value: 'lv', label: 'Latviešu valoda' },
	{ value: 'mk_MK', label: 'Македонски јазик' },
	{ value: 'ml_IN', label: 'മലയാളം' },
	{ value: 'mn', label: 'Монгол' },
	{ value: 'mr', label: 'मराठी' },
	{ value: 'ms_MY', label: 'Bahasa Melayu' },
	{ value: 'my_MM', label: 'ဗမာစာ' },
	{ value: 'nb_NO', label: 'Norsk bokmål' },
	{ value: 'ne_NP', label: 'नेपाली' },
	{ value: 'nl_NL_formal', label: 'Nederlands (Formeel)' },
	{ value: 'nl_BE', label: 'Nederlands (België)' },
	{ value: 'nl_NL', label: 'Nederlands' },
	{ value: 'nn_NO', label: 'Norsk nynorsk' },
	{ value: 'oci', label: 'Occitan' },
	{ value: 'pa_IN', label: 'ਪੰਜਾਬੀ' },
	{ value: 'pl_PL', label: 'Polski' },
	{ value: 'ps', label: 'پښتو' },
	{ value: 'pt_PT', label: 'Português' },
	{ value: 'pt_AO', label: 'Português de Angola' },
	{ value: 'pt_PT_ao90', label: 'Português (AO90)' },
	{ value: 'pt_BR', label: 'Português do Brasil' },
	{ value: 'rhg', label: 'Ruáinga' },
	{ value: 'ro_RO', label: 'Română' },
	{ value: 'ru_RU', label: 'Русский' },
	{ value: 'sah', label: 'Сахалыы' },
	{ value: 'snd', label: 'سنڌي' },
	{ value: 'si_LK', label: 'සිංහල' },
	{ value: 'sk_SK', label: 'Slovenčina' },
	{ value: 'skr', label: 'سرائیکی' },
	{ value: 'sl_SI', label: 'Slovenščina' },
	{ value: 'sq', label: 'Shqip' },
	{ value: 'sr_RS', label: 'Српски језик' },
	{ value: 'sv_SE', label: 'Svenska' },
	{ value: 'sw', label: 'Kiswahili' },
	{ value: 'szl', label: 'Ślōnskŏ gŏdka' },
	{ value: 'ta_IN', label: 'தமிழ்' },
	{ value: 'ta_LK', label: 'தமிழ்' },
	{ value: 'te', label: 'తెలుగు' },
	{ value: 'th', label: 'ไทย' },
	{ value: 'tl', label: 'Tagalog' },
	{ value: 'tr_TR', label: 'Türkçe' },
	{ value: 'tt_RU', label: 'Татар теле' },
	{ value: 'tah', label: 'Reo Tahiti' },
	{ value: 'ug_CN', label: 'ئۇيغۇرچە' },
	{ value: 'uk', label: 'Українська' },
	{ value: 'ur', label: 'اردو' },
	{ value: 'uz_UZ', label: 'O‘zbekcha' },
	{ value: 'vi', label: 'Tiếng Việt' },
	{ value: 'zh_TW', label: '繁體中文' },
	{ value: 'zh_CN', label: '简体中文' },
	{ value: 'zh_HK', label: '香港中文' },
];

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
		<div style={ { display: show ? 'block' : 'none' } }>
			<div className="asnp-ew-modal-mask">
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
							<div className="asnp-field-title asnp-ml-2 asnp-text-lg asnp-font-bold">
								{ __(
									'Translate Label',
									'easy-sale-badges-for-woocommerce'
								) }
							</div>
							<div className="asnp-w-full asnp-ml-2 asnp-flex asnp-mt-4 asnp-inputWeek">
								<Select
									className="!asnp-w-[15rem]"
									onChange={ ( e ) =>
										setLangTrans( e.value )
									}
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
									( [ lang, translation ], index ) => (
										<div
											key={ index }
											className="asnp-w-full asnp-ml-2 asnp-flex asnp-mt-4"
										>
											<div className="asnp-w-[15rem] asnp-mt-1 asnp-h-10 asnp-p-2 asnp-text-lg  asnp-border-b-2 asnp-border-indigo-600">
												<p>
													{ (
														translationLang.find(
															( item ) =>
																item.value ===
																lang
														) || {}
													).label || lang }
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
									)
								) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LabelTranslation;
