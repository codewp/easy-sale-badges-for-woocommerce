import React, { useContext } from 'react';
import { __ } from '@wordpress/i18n';
import { BadgeContext } from '../../contexts/Badge';
import Select from 'react-select';

import './index.scss';

const translationLang = [
	{ value: 'af', label: 'Afrikaans', lang: 'af' },
	{ value: 'am', label: 'አማርኛ', lang: 'am' },
	{ value: 'an', label: 'Aragonés', lang: 'an' },
	{ value: 'ar', label: 'العربية', lang: 'ar' },
	{ value: 'ary', label: 'العربية المغربية', lang: 'ar' },
	{ value: 'as', label: 'অসমীয়া', lang: 'as' },
	{ value: 'azb', label: 'گؤنئی آذربایجان', lang: 'az' },
	{ value: 'az', label: 'Azərbaycan dili', lang: 'az' },
	{ value: 'be', label: 'Беларуская мова', lang: 'be' },
	{ value: 'bg_BG', label: 'Български', lang: 'bg' },
	{ value: 'bn_BD', label: 'বাংলা', lang: 'bn' },
	{ value: 'bo', label: 'བོད་ཡིག', lang: 'bo' },
	{ value: 'bs_BA', label: 'Bosanski', lang: 'bs' },
	{ value: 'ca', label: 'Català', lang: 'ca' },
	{ value: 'ceb', label: 'Cebuano', lang: 'ceb' },
	{ value: 'cs_CZ', label: 'Čeština', lang: 'cs' },
	{ value: 'cy', label: 'Cymraeg', lang: 'cy' },
	{ value: 'da_DK', label: 'Dansk', lang: 'da' },
	{ value: 'de_DE', label: 'Deutsch', lang: 'de' },
	{ value: 'de_AT', label: 'Deutsch (Österreich)', lang: 'de' },
	{ value: 'de_CH_informal', label: 'Deutsch (Schweiz, Du)', lang: 'de' },
	{ value: 'de_DE_formal', label: 'Deutsch (Sie)', lang: 'de' },
	{ value: 'de_CH', label: 'Deutsch (Schweiz)', lang: 'de' },
	{ value: 'dsb', label: 'Dolnoserbšćina', lang: 'dsb' },
	{ value: 'dzo', label: 'རྫོང་ཁ', lang: 'dz' },
	{ value: 'el', label: 'Ελληνικά', lang: 'el' },
	{ value: 'en_AU', label: 'English (Australia)', lang: 'en' },
	{ value: 'en_GB', label: 'English (UK)', lang: 'en' },
	{ value: 'en_US', label: 'English (United States)', lang: 'en' },
	{ value: 'en_CA', label: 'English (Canada)', lang: 'en' },
	{ value: 'en_ZA', label: 'English (South Africa)', lang: 'en' },
	{ value: 'en_NZ', label: 'English (New Zealand)', lang: 'en' },
	{ value: 'eo', label: 'Esperanto', lang: 'eo' },
	{ value: 'es_ES', label: 'Español', lang: 'es' },
	{ value: 'es_MX', label: 'Español de México', lang: 'es' },
	{ value: 'es_VE', label: 'Español de Venezuela', lang: 'es' },
	{ value: 'es_AR', label: 'Español de Argentina', lang: 'es' },
	{ value: 'es_EC', label: 'Español de Ecuador', lang: 'es' },
	{ value: 'es_CO', label: 'Español de Colombia', lang: 'es' },
	{ value: 'es_DO', label: 'Español de República Dominicana', lang: 'es' },
	{ value: 'es_PE', label: 'Español de Perú', lang: 'es' },
	{ value: 'es_UY', label: 'Español de Uruguay', lang: 'es' },
	{ value: 'es_CL', label: 'Español de Chile', lang: 'es' },
	{ value: 'es_PR', label: 'Español de Puerto Rico', lang: 'es' },
	{ value: 'es_GT', label: 'Español de Guatemala', lang: 'es' },
	{ value: 'es_CR', label: 'Español de Costa Rica', lang: 'es' },
	{ value: 'et', label: 'Eesti', lang: 'et' },
	{ value: 'eu', label: 'Euskara', lang: 'eu' },
	{ value: 'fa_IR', label: 'فارسی', lang: 'fa' },
	{ value: 'fa_AF', label: '(فارسی (افغانستان', lang: 'fa' },
	{ value: 'fi', label: 'Suomi', lang: 'fi' },
	{ value: 'fr_FR', label: 'Français', lang: 'fr' },
	{ value: 'fr_CA', label: 'Français du Canada', lang: 'fr' },
	{ value: 'fr_BE', label: 'Français de Belgique', lang: 'fr' },
	{ value: 'fur', label: 'Friulian', lang: 'fur' },
	{ value: 'fy', label: 'Frysk', lang: 'fy' },
	{ value: 'gd', label: 'Gàidhlig', lang: 'gd' },
	{ value: 'gl_ES', label: 'Galego', lang: 'gl' },
	{ value: 'gu', label: 'ગુજરાતી', lang: 'gu' },
	{ value: 'haz', label: 'هزاره گی', lang: 'haz' },
	{ value: 'he_IL', label: 'עִבְרִית', lang: 'he' },
	{ value: 'hi_IN', label: 'हिन्दी', lang: 'hi' },
	{ value: 'hr', label: 'Hrvatski', lang: 'hr' },
	{ value: 'hsb', label: 'Hornjoserbšćina', lang: 'hsb' },
	{ value: 'hu_HU', label: 'Magyar', lang: 'hu' },
	{ value: 'hy', label: 'Հայերեն', lang: 'hy' },
	{ value: 'it_IT', label: 'Italiano', lang: 'it' },
	{ value: 'id_ID', label: 'Bahasa Indonesia', lang: 'id' },
	{ value: 'is_IS', label: 'Íslenska', lang: 'is' },
	{ value: 'ja', label: '日本語', lang: 'ja' },
	{ value: 'jv_ID', label: 'Basa Jawa', lang: 'jv' },
	{ value: 'ka_GE', label: 'ქართული', lang: 'ka' },
	{ value: 'kab', label: 'Taqbaylit', lang: 'kab' },
	{ value: 'kk', label: 'Қазақ тілі', lang: 'kk' },
	{ value: 'km', label: 'ភាសាខ្មែរ', lang: 'km' },
	{ value: 'kn', label: 'ಕನ್ನಡ', lang: 'kn' },
	{ value: 'ko_KR', label: '한국어', lang: 'ko' },
	{ value: 'ckb', label: 'كوردی‎', lang: 'ku' },
	{ value: 'kir', label: 'Кыргызча', lang: 'ky' },
	{ value: 'lo', label: 'ພາສາລາວ', lang: 'lo' },
	{ value: 'lt_LT', label: 'Lietuvių kalba', lang: 'lt' },
	{ value: 'lv', label: 'Latviešu valoda', lang: 'lv' },
	{ value: 'mk_MK', label: 'Македонски јазик', lang: 'mk' },
	{ value: 'ml_IN', label: 'മലയാളം', lang: 'ml' },
	{ value: 'mn', label: 'Монгол', lang: 'mn' },
	{ value: 'mr', label: 'मराठी', lang: 'mr' },
	{ value: 'ms_MY', label: 'Bahasa Melayu', lang: 'ms' },
	{ value: 'my_MM', label: 'ဗမာစာ', lang: 'my' },
	{ value: 'nb_NO', label: 'Norsk bokmål', lang: 'nb' },
	{ value: 'ne_NP', label: 'नेपाली', lang: 'ne' },
	{ value: 'nl_NL_formal', label: 'Nederlands (Formeel)', lang: 'nl' },
	{ value: 'nl_BE', label: 'Nederlands (België)', lang: 'nl' },
	{ value: 'nl_NL', label: 'Nederlands', lang: 'nl' },
	{ value: 'nn_NO', label: 'Norsk nynorsk', lang: 'nn' },
	{ value: 'oci', label: 'Occitan', lang: 'oc' },
	{ value: 'pa_IN', label: 'ਪੰਜਾਬੀ', lang: 'pa' },
	{ value: 'pl_PL', label: 'Polski', lang: 'pl' },
	{ value: 'ps', label: 'پښتو', lang: 'ps' },
	{ value: 'pt_PT', label: 'Português', lang: 'pt' },
	{ value: 'pt_AO', label: 'Português de Angola', lang: 'pt' },
	{ value: 'pt_PT_ao90', label: 'Português (AO90)', lang: 'pt' },
	{ value: 'pt_BR', label: 'Português do Brasil', lang: 'pt' },
	{ value: 'rhg', label: 'Ruáinga', lang: 'rhg' },
	{ value: 'ro_RO', label: 'Română', lang: 'ro' },
	{ value: 'ru_RU', label: 'Русский', lang: 'ru' },
	{ value: 'sah', label: 'Сахалыы', lang: 'sah' },
	{ value: 'snd', label: 'سنڌي', lang: 'sd' },
	{ value: 'si_LK', label: 'සිංහල', lang: 'si' },
	{ value: 'sk_SK', label: 'Slovenčina', lang: 'sk' },
	{ value: 'skr', label: 'سرائیکی', lang: 'skr' },
	{ value: 'sl_SI', label: 'Slovenščina', lang: 'sl' },
	{ value: 'sq', label: 'Shqip', lang: 'sq' },
	{ value: 'sr_RS', label: 'Српски језик', lang: 'sr' },
	{ value: 'sv_SE', label: 'Svenska', lang: 'sv' },
	{ value: 'sw', label: 'Kiswahili', lang: 'sw' },
	{ value: 'szl', label: 'Ślōnskŏ gŏdka', lang: 'szl' },
	{ value: 'ta_IN', label: 'தமிழ்', lang: 'ta' },
	{ value: 'ta_LK', label: 'தமிழ்', lang: 'ta' },
	{ value: 'te', label: 'తెలుగు', lang: 'te' },
	{ value: 'th', label: 'ไทย', lang: 'th' },
	{ value: 'tl', label: 'Tagalog', lang: 'tl' },
	{ value: 'tr_TR', label: 'Türkçe', lang: 'tr' },
	{ value: 'tt_RU', label: 'Татар теле', lang: 'tt' },
	{ value: 'tah', label: 'Reo Tahiti', lang: 'ty' },
	{ value: 'ug_CN', label: 'ئۇيغۇرچە', lang: 'ug' },
	{ value: 'uk', label: 'Українська', lang: 'uk' },
	{ value: 'ur', label: 'اردو', lang: 'ur' },
	{ value: 'uz_UZ', label: 'O‘zbekcha', lang: 'uz' },
	{ value: 'vi', label: 'Tiếng Việt', lang: 'vi' },
	{ value: 'zh_TW', label: '繁體中文', lang: 'zh' },
	{ value: 'zh_CN', label: '简体中文', lang: 'zh' },
	{ value: 'zh_HK', label: '香港中文', lang: 'zh' },
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
									onChange={ ( e ) => setLangTrans( e.lang ) }
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
														deleteTranslation(
															lang
														)
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
		</div>
	);
};

export default LabelTranslation;
