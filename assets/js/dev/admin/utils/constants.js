import { __ } from '@wordpress/i18n';

export const defaultSettings = {
	hideWooCommerceBadges: 0,
	negativeSign: 1,
	singlePosition: 'before_single_item_images',
	loopPosition: 'woocommerce_product_get_image',
	singleCustomHooks: '',
	loopCustomHooks: '',
	showBadgeProductPage: 1,
	singleContainer: '',
	loopOutOfImagePosition: 'before_shop_loop_item_title',
	singleOutOfImagePosition: 'before_single_item_title',
};
export const PLUGIN_URL = saleBadgeData.pluginUrl;
export const IMAGES_URL = `${ PLUGIN_URL }assets/images/`;

let serverTime = new Date( saleBadgeData.now );
let initialLocalTime = Date.now();

export const getNow = () => {
	return new Date( serverTime.getTime() + ( Date.now() - initialLocalTime ) );
};

export const customColor = [
	'rgb(161, 44, 161)',
	'rgb(255, 148, 148)',
	'rgb(177, 178, 255)',
	'rgb(250, 23, 49)',
	'rgb(246, 24, 197)',
	'rgb(132, 32, 225)',
	'rgb(255, 255, 255)',
	'rgb(33, 197, 153)',
	'rgb(23, 188, 51)',
	'rgb(229, 98, 17)',
	'rgb(0, 132, 255)',
	'rgb(32, 82, 149)',
	'rgb(0, 0, 0)',
	'rgb(255, 135, 135)',
	'rgb(188, 226, 158)',
	'rgb(100, 92, 187)',
	'rgb(183, 196, 207)',
	'rgb(255, 176, 49)',
];

export const translationLang = [
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

export default function BadgeCssandAdv( badge ) {
	let badgeIcon = '';
	let badgeIconOne = '';
	let badgeIconTwo = '';
	switch ( badge.badgeStyles ) {
		case 'badge1':
			badgeIcon = `background: ${ badge.badgeColor };
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
            height: ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			opacity: ${ badge.opacity };
			text-align: center;
            text-shadow: none;
			`;
			break;
		case 'badge2':
			badgeIcon = `
			text-align: center;
			display: inline-block;
			opacity: ${ badge.opacity };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
			top: 0px;
			height: ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			background:  ${ badge.badgeColor };
			border-radius: 3px;
			&::before {
				border-left-color: transparent !important;
				display: inline-block;
				content: '';
				position: absolute;
				right: ${ badge.badgePositionX == 'right' ? 'auto' : '-20px' };
				left: ${ badge.badgePositionX == 'right' ? '-20px' : '' };
				top: 0;
				border: 9px solid transparent;
				border-width: 15px 15px;
				border-color: ${ badge.badgeColor };
				transform: ${
					badge.badgePositionX == 'right'
						? 'rotate(0)'
						: 'rotate(180deg)'
				};
			}
		`;
			break;
		case 'badge3':
			badgeIcon = `
			background: ${ badge.badgeColor };
			text-align: center;
			border-radius: 3px;
			opacity: ${ badge.opacity };
			top: 0px;
			left: 0px;
            height:  ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			line-height: 30px;
			color: #fff;
			&::after {
				content: '';
				position: absolute;
				bottom: 0px;
				transform: ${
					badge.badgePositionX == 'right'
						? 'skew( -1055deg )'
						: 'skew( -15deg )'
				};
				right: ${ badge.badgePositionX == 'right' ? 'auto' : '-10px' };
				left: ${ badge.badgePositionX == 'right' ? '-10px' : '' };
				width: 20px;
				height: 100%;
				background: ${ badge.badgeColor };
				border-radius: ${
					badge.badgePositionX == 'right'
						? '3px 0px 0px 3px'
						: '0 3px 3px 0'
				};
			}
		`;
			break;
		case 'badge4':
			badgeIcon = `
			border-radius: 3px;
			padding: 0px 15px;
			opacity: ${ badge.opacity };
			display: inline-block;
			background: ${ badge.badgeColor };
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
			height:  ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			line-height: 30px;
			box-sizing: border-box;
			border-bottom-right-radius: '1px !important';
			border-top-right-radius: '1px !important';
			&::before {
				position: absolute;
				right: ${ badge.badgePositionX == 'right' ? 'auto' : '-14px' };
				left: ${ badge.badgePositionX == 'right' ? '-14px' : '' };
				top: 0px;
				border-top-left-radius: ${ badge.badgePositionX == 'right' ? '0px' : '1px' };
				border-bottom-left-radius: ${ badge.badgePositionX == 'right' ? '0px' : '1px' };
				border-top-right-radius: ${ badge.badgePositionX == 'right' ? '1px' : '' };
				border-bottom-right-radius: ${ badge.badgePositionX == 'right' ? '1px' : '' };
				content: '';
				display: block;
				width: 0;
				height: 0;
				border-top: 15px solid transparent;
				border-left: ${
					badge.badgePositionX == 'right'
						? 'none'
						: `15px solid ${ badge.badgeColor }`
				};
				border-bottom: 15px solid transparent;
				border-right: ${
					badge.badgePositionX == 'right'
						? `15px solid ${ badge.badgeColor }`
						: ''
				};
			}
			&::after {
				display: block;
				content: '';
				position: absolute;
				background: #ffffff;
				width: 7px;
				height: 7px;
				border-radius: 10px;
				right: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
				left: ${ badge.badgePositionX == 'right' ? '0px' : '' };
				top: calc( 100% / 2 - 4px );
			}
		`;
			break;
		case 'badge5':
			badgeIcon = `
				display: block;
				width: ${ badge.widthBadge }px;
				height: ${ badge.widthBadge }px;
				text-align: center;
				opacity: ${ badge.opacity };
				overflow: hidden;
				z-index: 10;
				transform: ${
					( badge.badgePositionY == 'bottom' &&
						badge.badgePositionX == 'left' &&
						`rotateZ(270deg) !important` ) ||
					( badge.badgePositionY == 'bottom' &&
						badge.badgePositionX == 'right' &&
						`rotateZ(90deg) !important` )
				};
			`;
			badgeIconOne = `
				background: ${ badge.badgeColor };
				position: absolute;
				text-align: center;
				z-index: 12;
				transform:${
					badge.badgePositionX == 'right'
						? 'rotate(45deg)'
						: `rotate(315deg)`
				} ;
				width: ${ badge.widthBadge * 1.5 }px;
				left: ${
					badge.badgePositionX == 'right'
						? ''
						: `-${ badge.widthBadge / 2.4 }px`
				};
				right: ${
					badge.badgePositionX == 'right'
						? `-${ badge.widthBadge / 2.22 }px`
						: ''
				};
				top: ${ badge.widthBadge / 7 }px ;

			`;
			break;
		case 'badge6':
			badgeIcon = `
			height: ${ badge.widthBadge }px;
			margin: 0;
			padding: 0;
			opacity: ${ badge.opacity };
			text-align: center;
			top: 0px;
			right: ${ badge.badgePositionX == 'right' ? '0px' : 'auto' };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			width: ${ badge.widthBadge }px;
			font-weight: 400;
			border-radius: 0;
			box-sizing: border-box;
			transform: ${
				( badge.badgePositionY == 'bottom' &&
					badge.badgePositionX == 'left' &&
					`rotateZ(270deg) !important` ) ||
				( badge.badgePositionY == 'bottom' &&
					badge.badgePositionX == 'right' &&
					`rotateZ(90deg) !important` )
			};


		`;
			badgeIconOne = `
			position: absolute;
			z-index: 14;
			top: 4.02px;
			transform: ${
				badge.badgePositionX == 'right'
					? 'rotate(45deg)'
					: 'rotate(315deg)'
			} ;
			width: ${ badge.widthBadge * 1.5 }px !important;
			text-align: center;
			display: block;
			left: ${ badge.badgePositionX == 'right' ? '0px' : 'auto' };
			right: ${ badge.badgePositionX == 'right' ? '' : '0px' };
		`;
			badgeIconTwo = `width: 0;
		    height: 0;
		    border-right:${
				badge.badgePositionX == 'right'
					? `${ badge.widthBadge }px solid ${ badge.badgeColor }`
					: 'none'
			} ;
		    border-bottom:${ badge.widthBadge }px solid transparent;
			border-left:${
				badge.badgePositionX == 'right'
					? ''
					: `${ badge.widthBadge }px solid  ${ badge.badgeColor }`
			} ;
		    z-index: 12;
		    display: block;`;
			break;
		case 'badge7':
			badgeIcon = `
			background: ${ badge.badgeColor };
			z-index: 99;
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right:${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.widthBadge }px;
			width: ${ badge.widthBadge }px;
			border-radius: 3px;
			text-align: center;`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge8':
			badgeIcon = `
			background: ${ badge.badgeColor };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right:${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.widthBadge }px;
			width: ${ badge.widthBadge }px;
            z-index: 99;
            top: 0px;
            left: 0px;
            border-radius: 50% !important;
            text-align: center;`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge9':
			badgeIcon = `
			display: block;
			height: ${ badge.widthBadge / 1.66 }px !important;
			width: ${ badge.widthBadge }px;
			background: ${ badge.badgeColor };
			z-index: 1;
			opacity: ${ badge.opacity };
			top: 0px;
			left: 0px;
			transform: translate3d(0, 0, 0);
			border-top-right-radius: 3px;
			border-top-left-radius: 3px;
			text-align: center;
			&::after {
			border-top: ${ badge.widthBadge / 4 }px solid ${ badge.badgeColor } !important;
			border-right: ${ badge.widthBadge / 2 }px solid transparent !important;
			border-left: ${ badge.widthBadge / 2 }px solid transparent !important;
			top: ${ badge.widthBadge / 1.66 }px !important;
			content: "";
			width: 0;
			height: 0;
			position: absolute;
			left: 0;
			}
			`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge10':
			badgeIcon = `
			display: block;
			height: ${ badge.widthBadge / 1.083 }px !important;
			width: ${ badge.widthBadge }px;
			background: ${ badge.badgeColor };
			z-index: 1;
			opacity: ${ badge.opacity };
			top: 0px;
			left: 0px;
			text-align: center;
			border-radius: 3px 3px ${ badge.widthBadge / 2.38 }px ${
				badge.widthBadge / 2.38
			}px !important;
			`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge14':
			badgeIcon = `
			background: ${ badge.badgeColor };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right:${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.widthBadge }px;
			width: ${ badge.widthBadge }px;
            z-index: 99;
            top: 0px;
            left: 0px;
            border-radius: 61% 60% 63% 53%/66% 31% 92% 34% !important;
			border:${ badge.borderWidth }px solid ${ badge.borderColor };
            text-align: center;`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge15':
			badgeIcon = `
			background: ${ badge.badgeColor };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right:${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.widthBadge }px;
			width: ${ badge.widthBadge }px;
            z-index: 99;
            top: 0px;
            left: 0px;
            border-radius: 19% 93% 55% 60%/50% 49% 61% 60% !important;
			border:${ badge.borderWidth }px solid ${ badge.borderColor };
            text-align: center;`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge16':
			badgeIcon = `
			background: ${ badge.badgeColor };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right:${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.widthBadge }px;
			width: ${ badge.widthBadge }px;
            z-index: 99;
            top: 0px;
            left: 0px;
            border-radius: 70% 30% 30% 70% / 60% 40% 60% 40% !important;
			border:${ badge.borderWidth }px solid ${ badge.borderColor };
            text-align: center;`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge17':
			badgeIcon = `
			background: ${ badge.badgeColor };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right:${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.widthBadge }px;
			width: ${ badge.widthBadge }px;
            z-index: 99;
            top: 0px;
            left: 0px;
            border-radius: 20% 80% 80% 20% / 50% 50% 50% 50% !important;
			border:${ badge.borderWidth }px solid ${ badge.borderColor };
            text-align: center;`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge18':
			badgeIcon = `
			background: ${ badge.badgeColor };
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right:${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.widthBadge }px;
			width: ${ badge.widthBadge }px;
            z-index: 99;
            top: 0px;
            left: 0px;
            border-radius: 50% 60% 60% 60% / 15% 66% 15% 66% !important;
			border:${ badge.borderWidth }px solid ${ badge.borderColor };
            text-align: center;`;
			badgeIconOne = `
			transform: translateY(-50%);
			position: relative;
			line-height: 16px;
			top: 50%;
			z-index: 1;
			display: block;
			`;
			break;
		case 'badge19':
			badgeIcon = `
			border-bottom: solid ${ badge.borderWidth }px ${ badge.badgeColor };
			border-radius: 0 !important;
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
            height: ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			opacity: ${ badge.opacity };
			text-align: center;
            text-shadow: none;
			`;
			break;
		case 'badge20':
			badgeIcon = `
			border: solid ${ badge.borderWidth }px ${ badge.badgeColor };
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
            height: ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			opacity: ${ badge.opacity };
			text-align: center;
            text-shadow: none;
			`;
			break;
		default:
			badgeIcon = `padding: 0 15px;
			top: 0px;
			left: ${ badge.badgePositionX == 'right' ? 'auto' : '0px' };
			right: ${ badge.badgePositionX == 'right' ? '0px' : '' };
			height: ${ badge.heightBadge }px;
			width: ${ badge.widthBadge }px;
			opacity: ${ badge.opacity };
			background: ${ badge.badgeColor };`;
	}

	return {
		badgeIcon,
		badgeIconOne,
		badgeIconTwo,
	};
}
