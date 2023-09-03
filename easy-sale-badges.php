<?php
/**
 * @wordpress-plugin
 * Plugin Name: Easy Sale Badges For Woocommerce
 * Plugin URI: https://www.asanaplugins.com/product/whatsapp-chat-wordpress/?utm_source=whatsapp-chat-wordpress&utm_campaign=live-chat-button&utm_medium=link
 * Description: WhatsApp Chat for WordPress and WooCommerce
 * Tags: whatsapp, whatsapp chat, whatsapp floating button, whatsapp support, whatsapp message, whatsapp business, whatsapp group, WhatsApp WooCommerce, whatsapp WordPress, whatsapp icon, click to chat
 * Version: 1.2.0
 * Author: Asana Plugins
 * Author URI: http://www.asanaplugins.com/
 * License: http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: asnp-easy-sale-badge
 * Domain Path: /languages
 * WC requires at least: 3.0
 * WC tested up to: 7.0.0
 *
 * Copyright 2022 Asana Plugins (http://www.asanaplugins.com/)
 */

defined( 'ABSPATH' ) || exit;

use AsanaPlugins\WooCommerce\SaleBadges\Plugin;

// Plugin version.
if ( ! defined( 'ASNP_WESB_VERSION' ) ) {
	define( 'ASNP_WESB_VERSION', '1.2.0' );
}

/**
 * Autoload packages.
 *
 * We want to fail gracefully if `composer install` has not been executed yet, so we are checking for the autoloader.
 * If the autoloader is not present, let's log the failure and display a nice admin notice.
 */
$autoloader = __DIR__ . '/vendor/autoload.php';
if ( is_readable( $autoloader ) ) {
	require $autoloader;
} else {
	if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
		error_log(  // phpcs:ignore
			sprintf(
				/* translators: 1: composer command. 2: plugin directory */
				esc_html__( 'Your installation of the Live Chat Button plugin is incomplete. Please run %1$s within the %2$s directory.', 'asnp-easy-sale-badge' ),
				'`composer install`',
				'`' . esc_html( str_replace( ABSPATH, '', __DIR__ ) ) . '`'
			)
		);
	}
	/**
	 * Outputs an admin notice if composer install has not been ran.
	 */
	add_action(
		'admin_notices',
		function() {
			?>
			<div class="notice notice-error">
				<p>
					<?php
					printf(
						/* translators: 1: composer command. 2: plugin directory */
						esc_html__( 'Your installation of the Live Chat Button plugin is incomplete. Please run %1$s within the %2$s directory.', 'asnp-easy-sale-badge' ),
						'<code>composer install</code>',
						'<code>' . esc_html( str_replace( ABSPATH, '', __DIR__ ) ) . '</code>'
					);
					?>
				</p>
			</div>
			<?php
		}
	);
	return;
}

/**
 * The main function for that returns Plugin
 *
 * The main function responsible for returning the one true Plugin
 * Instance to functions everywhere.
 *
 * Use this function like you would a global variable, except without needing
 * to declare the global.
 *
 * Example: <?php $plugin = ASNP_WESB(); ?>
 *
 * @since  1.0.0
 * @return object|Plugin The one true Plugin Instance.
 */
function ASNP_WESB() {
	return Plugin::instance();
}
ASNP_WESB()->init();