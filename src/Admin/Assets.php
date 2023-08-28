<?php

namespace AsanaPlugins\WhatsApp\Admin;

defined( 'ABSPATH' ) || exit;

use AsanaPlugins\WhatsApp;

class Assets {

	public function init() {
		add_action( 'admin_enqueue_scripts', array( $this, 'load_scripts' ), 15 );
	}

	public function load_scripts() {
		$screen    = get_current_screen();
		$screen_id = $screen ? $screen->id : '';

		if ( 'toplevel_page_asnp-whatsapp' === $screen_id ) {
			WhatsApp\register_polyfills();

			wp_enqueue_style(
				'asnp-whatsapp-admin',
				apply_filters( 'asnp_ewhatsapp_whatsapp_admin_style', $this->get_url( 'admin/style', 'css' ) )
			);
			wp_enqueue_script(
				'asnp-whatsapp-admin',
				apply_filters( 'asnp_ewhatsapp_whatsapp_admin_script', $this->get_url( 'admin/admin/index', 'js' ) ),
				array(
					'react-dom',
					'wp-hooks',
					'wp-i18n',
					'wp-api-fetch',
				),
				ASNP_EWHATSAPP_VERSION,
				true
			);

			wp_localize_script(
				'asnp-whatsapp-admin',
				'whatsappData',
				array(
					'pluginUrl' => ASNP_EWHATSAPP_PLUGIN_URL,
					'timezone'  => WhatsApp\get_timezone_string(),
				)
			);

			if ( function_exists( 'wp_set_script_translations' ) ) {
				wp_set_script_translations(
					'asnp-whatsapp-admin',
					'asnp-easy-sale-badge',
					apply_filters( 'asnp_ewhatsapp_whatsapp_admin_script_translations', ASNP_EWHATSAPP_ABSPATH . 'languages' )
				);
			}
		}
	}

	public function get_url( $file, $ext ) {
		return plugins_url( $this->get_path( $ext ) . $file . '.' . $ext, ASNP_EWHATSAPP_PLUGIN_FILE );
	}

	protected function get_path( $ext ) {
		return 'css' === $ext ? 'assets/css/' : 'assets/js/';
	}
}
