<?php

namespace AsanaPlugins\WhatsApp;

defined( 'ABSPATH' ) || exit;

class Assets {

	protected $whatsapps = [];

	public function init() {
		add_action( 'wp_enqueue_scripts', array( $this, 'load_scripts' ), 15 );
		add_action( 'wp_footer', array( $this, 'localize_scripts' ), 15 );
	}

	public function add_whatsapp( $whatsapp, $replace_sticky = true ) {
		if ( ! $whatsapp ) {
			return;
		}

		if ( empty( $this->whatsapps ) ) {
			$this->whatsapps = [ $whatsapp ];
			return;
		}

		$sticky = -1;
		for ( $i = 0; $i < count( $this->whatsapps ); $i++ ) {
			if ( $whatsapp->id == $this->whatsapps[ $i ]->id ) {
				return;
			}
			if (
				$replace_sticky &&
				isset( $whatsapp->type ) &&
				'sticky' === $whatsapp->type &&
				isset( $this->whatsapps[ $i ]->type ) &&
				'sticky' === $this->whatsapps[ $i ]->type
			) {
				$sticky = $i;
			}
		}

		if ( -1 < $sticky ) {
			$this->whatsapps[ $sticky ] = $whatsapp;
		} else {
			$this->whatsapps[] = $whatsapp;
		}
	}

	public function load_scripts() {
	}

	public function localize_scripts() {
	}

	public function get_url( $file, $ext ) {
		return plugins_url( $this->get_path( $ext ) . $file . '.' . $ext, ASNP_EWHATSAPP_PLUGIN_FILE );
	}

	protected function get_path( $ext ) {
		return 'css' === $ext ? 'assets/css/' : 'assets/js/';
	}

}
