<?php

namespace AsanaPlugins\WooCommerce\SaleBadges\Admin;

defined( 'ABSPATH' ) || exit;

class Menu {


	protected $menus = array();

	public function init() {
		add_action( 'admin_menu', array( $this, 'menus' ) );
	}

	/**
	 * Getting all of admin-face menus of plugin.
	 *
	 * @since  1.0.0
	 * @return array
	 */
	public function get_menus() {
		return $this->menus;
	}

	public function menus() {
		$this->menus['whatsapp'] = add_menu_page(
			__( 'Product Label', 'asnp-easy-sale-badge' ),
			__( 'Product Label', 'asnp-easy-sale-badge' ),
			apply_filters( 'asnp_wesb_sale_badge_menu_capability', 'manage_options' ),
			'asnp-easy-sale-badge',
			array( $this, 'create_menu' ),
			ASNP_WESB_PLUGIN_URL . 'assets/images/menu-icon.svg'
		);
	}

	public function create_menu() {
		?>
		<div id="asnp-badge-wrapper" class="asnp-badge-wrapper">
			<div id="asnp-easy-sale-badges">
			</div>
		</div>
		<?php
	}

}
