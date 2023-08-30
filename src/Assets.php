<?php

namespace AsanaPlugins\WhatsApp;

defined( 'ABSPATH' ) || exit;

class Assets {

	protected $timers = [];

	public function init() {
		add_action( 'wp_enqueue_scripts', array( $this, 'load_scripts' ), 15 );
		add_action( 'wp_footer', array( $this, 'localize_scripts' ), 15 );
	}

	public function load_scripts() {
		if ( has_active_sale_badges() ) {
			wp_enqueue_style(
				'asnp-wesb-badge',
				apply_filters( 'asnp_wesb_badge_style', $this->get_url( 'badge/style', 'css' ) )
			);
			wp_enqueue_script(
				'asnp-wesb-badge',
				apply_filters( 'asnp_wesb_badge_script', $this->get_url( 'badge/index', 'js' ) ),
				array( 'jquery' ),
				ASNP_EWHATSAPP_VERSION,
				true
			);
		}
	}

	public function localize_scripts() {
		if ( ! empty( $this->timers ) ) {
			wp_localize_script(
				'asnp-wesb-badge',
				'asnpWesbBadgeData',
				[
					'timers' => $this->timers,
				]
			);
		}
	}

	public function add_timer( $timer ) {
		$this->timers[] = $timer;
	}

	public function get_url( $file, $ext ) {
		return plugins_url( $this->get_path( $ext ) . $file . '.' . $ext, ASNP_EWHATSAPP_PLUGIN_FILE );
	}

	protected function get_path( $ext ) {
		return 'css' === $ext ? 'assets/css/' : 'assets/js/';
	}

}
