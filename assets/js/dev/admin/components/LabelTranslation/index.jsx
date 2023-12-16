import React from 'react';
import { __ } from '@wordpress/i18n';

import './index.scss';

const LabelTranslation = ( { show, setShow } ) => {
	return (
		<div style={ { display: show ? 'block' : 'none' } }>
			<div className="asnp-ew-modal-mask">
				<div
					onClick={ () => setShow( false ) }
					className="asnp-ew-modal-wrapper"
				>
					<div
						className="asnp-ew-modal-container"
						onClick={ ( e ) => {
							e.stopPropagation();
						} }
					>
						<div className="asnp-ew-modal-body">
							<div className="asnp-field-title asnp-ml-2">
								{ __(
									'Translate Label',
									'easy-sale-badges-for-woocommerce'
								) }
							</div>
							<div className="asnp-w-full asnp-ml-2 asnp-flex asnp-mt-4">
								<select className="asnp-select-field !asnp-w-60 asnp-mt-2">
									<option value="af" lang="af">
										{ __(
											'Afrikaans',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="am" lang="am">
										{ __(
											'አማርኛ',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="arg" lang="an">
										{ __(
											'Aragonés',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ar" lang="ar">
										{ __(
											'العربية',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ary" lang="ar">
										{ __(
											'العربية المغربية',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="as" lang="as">
										{ __(
											'অসমীয়া',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="azb" lang="az">
										{ __(
											'گؤنئی آذربایجان',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="az" lang="az">
										
										{ __(
											'Azərbaycan dili',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="bel" lang="be">
										
										{ __(
											'Беларуская мова',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="bg_BG" lang="bg">
										
										{ __(
											'Български',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="bn_BD" lang="bn">
										
										{ __(
											'বাংলা',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="bo" lang="bo">
										{ __(
											'བོད་ཡིག',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="bs_BA" lang="bs">
										{ __(
											'Bosanski',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ca" lang="ca">
										{ __(
											'Català',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ceb" lang="ceb">
										{ __(
											'Cebuano',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="cs_CZ" lang="cs">
										{ __(
											'Čeština',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="cy" lang="cy">
										{ __(
											'Cymraeg',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="da_DK" lang="da">
										{ __(
											'Dansk',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="de_AT" lang="de">
										{ __(
											'Deutsch (Österreich)',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="de_CH_informal" lang="de">
										{ __(
											'Deutsch (Schweiz, Du)',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="de_DE_formal" lang="de">
										{ __(
											'Deutsch (Sie)',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="de_CH" lang="de">
										{ __(
											'Deutsch (Schweiz)',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="dsb" lang="dsb">
										{ __(
											'Dolnoserbšćina',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="dzo" lang="dz">
										{ __(
											'རྫོང་ཁ',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="el" lang="el">
										{ __(
											'Ελληνικά',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="en_CA" lang="en">
										{ __(
											'English (Canada)',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="en_ZA" lang="en">
										{ __(
											'English (South Africa)',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="en_NZ" lang="en">
										{ __(
											'English (New Zealand)',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="eo" lang="eo">
										{ __(
											'Esperanto',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="es_ES" lang="es">
										{ __(
											'Español',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="es_MX" lang="es">
										{ __(
											'Español de México',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="es_VE" lang="es">
										{ __(
											'Español de Venezuela',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="es_AR" lang="es">
										{ __(
											'Español de Argentina',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="es_EC" lang="es">
										{ __(
											'Español de Ecuador',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="es_CO" lang="es">
										{ __(
											'Español de Colombia',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="es_DO" lang="es">
										{ __(
											'Español de República Dominicana',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="es_PE" lang="es">
										{ __(
											'Español de Perú',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="es_UY" lang="es">
										{ __(
											'Español de Uruguay',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="es_CL" lang="es">
										{ __(
											'Español de Chile',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="es_PR" lang="es">
										{ __(
											'Español de Puerto Rico',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="es_GT" lang="es">
										{ __(
											'Español de Guatemala',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="es_CR" lang="es">
										{ __(
											'Español de Costa Rica',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="et" lang="et">
										{ __(
											'Eesti',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="eu" lang="eu">
										{ __(
											'Euskara',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="fa_IR" lang="fa">
										{ __(
											'فارسی',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="fa_AF" lang="fa">
										{ __(
											'(فارسی (افغانستان',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="fi" lang="fi">
										{ __(
											'Suomi',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="fr_CA" lang="fr">
										{ __(
											'Français du Canada',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="fr_BE" lang="fr">
										{ __(
											'Français de Belgique',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="fur" lang="fur">
										{ __(
											'Friulian',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="fy" lang="fy">
										{ __(
											'Frysk',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="gd" lang="gd">
										{ __(
											'Gàidhlig',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="gl_ES" lang="gl">
										{ __(
											'Galego',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="gu" lang="gu">
										{ __(
											'ગુજરાતી',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="haz" lang="haz">
										{ __(
											'هزاره گی',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="he_IL" lang="he">
										{ __(
											'עִבְרִית',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="hi_IN" lang="hi">
										{ __(
											'हिन्दी',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="hr" lang="hr">
										{ __(
											'Hrvatski',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="hsb" lang="hsb">
										{ __(
											'Hornjoserbšćina',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="hu_HU" lang="hu">
										{ __(
											'Magyar',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="hy" lang="hy">
										{ __(
											'Հայերեն',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="id_ID" lang="id">
										{ __(
											'Bahasa Indonesia',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="is_IS" lang="is">
										{ __(
											'Íslenska',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ja" lang="ja">
										{ __(
											'日本語',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="jv_ID" lang="jv">
										{ __(
											'Basa Jawa',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ka_GE" lang="ka">
										{ __(
											'ქართული',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="kab" lang="kab">
										{ __(
											'Taqbaylit',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="kk" lang="kk">
										{ __(
											'Қазақ тілі',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="km" lang="km">
										{ __(
											'ភាសាខ្មែរ',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="kn" lang="kn">
										{ __(
											'ಕನ್ನಡ',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ko_KR" lang="ko">
										{ __(
											'한국어',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ckb" lang="ku">
										{ __(
											'كوردی‎',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="kir" lang="ky">
										{ __(
											'Кыргызча',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="lo" lang="lo">
										{ __(
											'ພາສາລາວ',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="lt_LT" lang="lt">
										{ __(
											'Lietuvių kalba',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="lv" lang="lv">
										{ __(
											'Latviešu valoda',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="mk_MK" lang="mk">
										{ __(
											'Македонски јазик',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ml_IN" lang="ml">
										{ __(
											'മലയാളം',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="mn" lang="mn">
										{ __(
											'Монгол',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="mr" lang="mr">
										{ __(
											'मराठी',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ms_MY" lang="ms">
										{ __(
											'Bahasa Melayu',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="my_MM" lang="my">
										{ __(
											'ဗမာစာ',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="nb_NO" lang="nb">
										{ __(
											'Norsk bokmål',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ne_NP" lang="ne">
										{ __(
											'नेपाली',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="nl_NL_formal" lang="nl">
										{ __(
											'Nederlands (Formeel)',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="nl_BE" lang="nl">
										{ __(
											'Nederlands (België)',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="nl_NL" lang="nl">
										{ __(
											'Nederlands',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="nn_NO" lang="nn">
										{ __(
											'Norsk nynorsk',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="oci" lang="oc">
										{ __(
											'Occitan',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="pa_IN" lang="pa">
										{ __(
											'ਪੰਜਾਬੀ',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="pl_PL" lang="pl">
										{ __(
											'Polski',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ps" lang="ps">
										{ __(
											'پښتو',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="pt_PT" lang="pt">
										{ __(
											'Português',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="pt_AO" lang="pt">
										{ __(
											'Português de Angola',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="pt_PT_ao90" lang="pt">
										{ __(
											'Português (AO90)',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="pt_BR" lang="pt">
										{ __(
											'Português do Brasil',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="rhg" lang="rhg">
										{ __(
											'Ruáinga',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ro_RO" lang="ro">
										{ __(
											'Română',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ru_RU" lang="ru">
										{ __(
											'Русский',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="sah" lang="sah">
										{ __(
											'Сахалыы',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="snd" lang="sd">
										{ __(
											'سنڌي',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="si_LK" lang="si">
										{ __(
											'සිංහල',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="sk_SK" lang="sk">
										{ __(
											'Slovenčina',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="skr" lang="skr">
										{ __(
											'سرائیکی',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="sl_SI" lang="sl">
										{ __(
											'Slovenščina',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="sq" lang="sq">
										{ __(
											'Shqip',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="sr_RS" lang="sr">
										{ __(
											'Српски језик',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="sv_SE" lang="sv">
										{ __(
											'Svenska',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="sw" lang="sw">
										{ __(
											'Kiswahili',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="szl" lang="szl">
										Ślōnskŏ gŏdka{ __(
											'Kiswahili',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ta_IN" lang="ta">
										தமிழ்{ __(
											'Kiswahili',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ta_LK" lang="ta">
										தமிழ்{ __(
											'Kiswahili',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="te" lang="te">
										తెలుగు{ __(
											'Kiswahili',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="th" lang="th">
										ไทย{ __(
											'Kiswahili',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="tl" lang="tl">
										Tagalog{ __(
											'Kiswahili',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="tr_TR" lang="tr">
										Türkçe{ __(
											'Kiswahili',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="tt_RU" lang="tt">
										Татар теле{ __(
											'Kiswahili',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="tah" lang="ty">
										{ __(
											'Reo Tahiti',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ug_CN" lang="ug">
										{ __(
											'ئۇيغۇرچە',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="uk" lang="uk">
										{ __(
											'Українська',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="ur" lang="ur">
										{ __(
											'اردو',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="uz_UZ" lang="uz">
										{ __(
											'O‘zbekcha',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="vi" lang="vi">
										{ __(
											'Tiếng Việt',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="zh_TW" lang="zh">
										{ __(
											'繁體中文',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="zh_CN" lang="zh">
										{ __(
											'简体中文',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
									<option value="zh_HK" lang="zh">
										{ __(
											'香港中文',
											'easy-sale-badges-for-woocommerce'
										) }
									</option>
								</select>
								<div className="asnp-ml-6">
									<input
										type="text"
										className="asnp-block asnp-text-field !asnp-w-[20rem]"
									/>
									<label className="asnp-block asnp-space-y-1 asnp-text-gray-500">
										<p className="asnp-text-xs asnp-text-gray-400">
											{ __(
												'Add Translate',
												'easy-sale-badges-for-woocommerce'
											) }
										</p>
									</label>
								</div>
								<button className="asnp-mb-4 asnp-ml-3 asnp-mt-2 asnp-btn-primary asnp-py-1 asnp-h-[2rem] asnp-w-[4rem] asnp-font-semibold asnp-shadow-md asnp-rounded-lg focus:asnp-shadow-none">
									{ __(
										'Add',
										'easy-sale-badges-for-woocommerce'
									) }
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LabelTranslation;
