<?php

namespace AsanaPlugins\WhatsApp;

defined( 'ABSPATH' ) || exit;

class Install {

	/**
	 * Plugin version option name.
	 */
	const VERSION_OPTION = 'asnp_ewhatsapp_version';

	public static function init() {
		add_action( 'init', array( __CLASS__, 'check_version' ), 5 );
		add_filter( 'wpmu_drop_tables', array( __CLASS__, 'wpmu_drop_tables' ) );
	}

	/**
	 * Check URL Coupons version and run the updater is required.
	 *
	 * This check is done on all requests and runs if the versions do not match.
	 */
	public static function check_version() {
		if ( defined( 'IFRAME_REQUEST' ) ) {
			return;
		}

		$version_option  = get_option( self::VERSION_OPTION );
		$requires_update = version_compare( get_option( self::VERSION_OPTION ), get_plugin()->version, '<' );

		if ( ! $version_option || $requires_update ) {
			self::install();
			do_action( 'asnp_ewhatsapp_updated' );
		}
	}

	public static function install() {
		if ( ! is_blog_installed() ) {
			return;
		}

		// Check if we are not already running this routine.
		if ( 'yes' === get_transient( 'asnp_ewhatsapp_installing' ) ) {
			return;
		}

		// If we made it till here nothing is running yet, lets set the transient now.
		set_transient( 'asnp_ewhatsapp_installing', 'yes', MINUTE_IN_SECONDS * 10 );

		if ( ! defined( 'ASNP_EWHATSAPP_INSTALLING' ) ) {
			define( 'ASNP_EWHATSAPP_INSTALLING', true );
		}

		self::create_tables();
		self::update_version();
		self::maybe_update_db_version();

		delete_transient( 'asnp_ewhatsapp_installing' );

		do_action( 'asnp_ewhatsapp_installed' );
	}

	public static function create_tables() {
		global $wpdb;

		$wpdb->hide_errors();

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';

		dbDelta( self::get_schema() );
	}

	protected static function get_schema() {
		global $wpdb;

		$collate = '';
		if ( $wpdb->has_cap( 'collation' ) ) {
			$collate = $wpdb->get_charset_collate();
		}

		$tables = "
CREATE TABLE {$wpdb->prefix}asnp_ewhatsapp_whatsapp (
	id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
	name varchar(200) NOT NULL DEFAULT '',
	type varchar(20) NOT NULL DEFAULT '',
	status TINYINT NOT NULL DEFAULT '1',
	options longtext NULL,
	PRIMARY KEY  (id)
) $collate;
CREATE TABLE {$wpdb->prefix}asnp_ewhatsapp_account (
	id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
	name varchar(200) NOT NULL DEFAULT '',
	type varchar(10) NOT NULL DEFAULT '',
	accountNumber text NULL,
	caption varchar(20) NOT NULL DEFAULT '',
	customCaption text NULL,
	alwaysOnline TINYINT NOT NULL DEFAULT '1',
	avatar text NULL,
	availability text NULL,
	textMessage longtext NULL,
	useTimezone TINYINT NOT NULL DEFAULT '0',
	timezone varchar(50) NOT NULL DEFAULT '',
	PRIMARY KEY  (id)
) $collate;
		";

		return $tables;
	}

	/**
	 * Update plugin version to current.
	 */
	private static function update_version() {
		update_option( self::VERSION_OPTION, get_plugin()->version );
	}

	/**
	 * See if we need to show or run database updates during install.
	 *
	 * @since 1.0.0
	 */
	private static function maybe_update_db_version() {
		self::update_db_version();
	}

	/**
	 * Update DB version to current.
	 *
	 * @param string|null $version New URL Coupons DB version or null.
	 */
	public static function update_db_version( $version = null ) {
		update_option( 'asnp_ewhatsapp_db_version', is_null( $version ) ? get_plugin()->version : $version );
	}

	/**
	 * Return a list of WooCommerce tables. Used to make sure all WC tables are dropped when uninstalling the plugin
	 * in a single site or multi site environment.
	 *
	 * @return array WC tables.
	 */
	public static function get_tables() {
		global $wpdb;

		$tables = array(
			"{$wpdb->prefix}asnp_ewhatsapp_whatsapp",
		);

		/**
		 * Filter the list of known WooCommerce tables.
		 *
		 * If WooCommerce plugins need to add new tables, they can inject them here.
		 *
		 * @param array $tables An array of WooCommerce-specific database table names.
		 */
		$tables = apply_filters( 'asnp_ewhatsapp_install_get_tables', $tables );

		return $tables;
	}

	/**
	 * Uninstall tables when MU blog is deleted.
	 *
	 * @param array $tables List of tables that will be deleted by WP.
	 *
	 * @return string[]
	 */
	public static function wpmu_drop_tables( $tables ) {
		return array_merge( $tables, self::get_tables() );
	}
}
