<?php
namespace AsanaPlugins\WooCommerce\SaleBadges\Models;

defined( 'ABSPATH' ) || exit;

/**
 * Base Model.
 *
 * @since   1.0.0
 * @author  Asana Plugins
 */
abstract class BaseModel {

	/**
	 * The name of our database table
	 *
	 * @access  public
	 * @since   1.0.0
	 */
	public $table_name;

	/**
	 * The version of our database table
	 *
	 * @access  public
	 * @since   1.0.0
	 */
	public $version;

	/**
	 * The name of the primary column
	 *
	 * @access  public
	 * @since   1.0.0
	 */
	public $primary_key;

	/**
	 * Get things started
	 *
	 * @access  public
	 * @since   1.0.0
	 */
	public function __construct() {}

	/**
	 * Whitelist of columns
	 *
	 * @access  public
	 * @since   1.0.0
	 * @return  array
	 */
	public function get_columns() {
		return array();
	}

	/**
	 * Default column values
	 *
	 * @access  public
	 * @since   1.0.0
	 * @return  array
	 */
	public function get_column_defaults() {
		return array();
	}

	/**
	 * Retrieve a row by the primary key
	 *
	 * @access  public
	 * @since   1.0.0
	 * @return  object
	 */
	public function get( $row_id ) {
		global $wpdb;
		return $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $this->table_name WHERE $this->primary_key = %s LIMIT 1;", $row_id ) );
	}

	/**
	 * Retrieve a row by a specific column / value
	 *
	 * @access  public
	 * @since   1.0.0
	 * @return  object
	 */
	public function get_by( $column, $row_id ) {
		global $wpdb;
		$column = esc_sql( $column );
		return $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $this->table_name WHERE $column = %s LIMIT 1;", $row_id ) );
	}

	/**
	 * Retrieve a specific column's value by the primary key
	 *
	 * @access  public
	 * @since   1.0.0
	 * @return  string
	 */
	public function get_column( $column, $row_id ) {
		global $wpdb;
		$column = esc_sql( $column );
		return $wpdb->get_var( $wpdb->prepare( "SELECT $column FROM $this->table_name WHERE $this->primary_key = %s LIMIT 1;", $row_id ) );
	}

	/**
	 * Retrieve a specific column's value by the the specified column / value
	 *
	 * @access  public
	 * @since   1.0.0
	 * @return  string
	 */
	public function get_column_by( $column, $column_where, $column_value ) {
		global $wpdb;
		$column_where = esc_sql( $column_where );
		$column       = esc_sql( $column );
		return $wpdb->get_var( $wpdb->prepare( "SELECT $column FROM $this->table_name WHERE $column_where = %s LIMIT 1;", $column_value ) );
	}

	/**
	 * Insert a new row
	 *
	 * @access  public
	 * @since   1.0.0
	 * @return  int
	 */
	public function insert( $data, $type = '' ) {
		global $wpdb;

		// Set default values
		$data = wp_parse_args( $data, $this->get_column_defaults() );

		do_action( 'asnp_wesb_pre_insert_' . $type, $data );

		// Initialise column format array
		$column_formats = $this->get_columns();

		// White list columns
		$data = array_intersect_key( $data, $column_formats );

		// Reorder $column_formats to match the order of columns given in $data
		$data_keys      = array_keys( $data );
		$column_formats = array_merge( array_flip( $data_keys ), $column_formats );

		$wpdb->insert( $this->table_name, $data, $column_formats );

		do_action( 'asnp_wesb_post_insert_' . $type, $wpdb->insert_id, $data );

		return (int) $wpdb->insert_id;
	}

	/**
	 * Update a row
	 *
	 * @access  public
	 * @since   1.0.0
	 * @return  bool
	 */
	public function update( $row_id, $data = array(), $where = '' ) {
		global $wpdb;

		// Row ID must be positive integer
		$row_id = absint( $row_id );

		if ( empty( $row_id ) ) {
			return false;
		}

		if ( empty( $where ) ) {
			$where = $this->primary_key;
		}

		// Initialise column format array
		$column_formats = $this->get_columns();

		// White list columns
		$data = array_intersect_key( $data, $column_formats );

		// Reorder $column_formats to match the order of columns given in $data
		$data_keys      = array_keys( $data );
		$column_formats = array_merge( array_flip( $data_keys ), $column_formats );

		if ( false === $wpdb->update( $this->table_name, $data, array( $where => $row_id ), $column_formats ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Delete a row identified by the primary key
	 *
	 * @access  public
	 * @since   1.0.0
	 * @return  bool
	 */
	public function delete( $row_id ) {
		global $wpdb;

		// Row ID must be positive integer
		$row_id = absint( $row_id );

		if ( empty( $row_id ) ) {
			return false;
		}

		if ( false === $wpdb->query( $wpdb->prepare( "DELETE FROM $this->table_name WHERE $this->primary_key = %d", $row_id ) ) ) {
			return false;
		}

		return true;
	}

	/**
	 * Check if the given table exists
	 *
	 * @since  1.0.0
	 * @param  string $table The table name
	 * @return bool          If the table name exists
	 */
	public function table_exists( $table ) {
		global $wpdb;
		$table = sanitize_text_field( $table );

		return $wpdb->get_var( $wpdb->prepare( 'SHOW TABLES LIKE %s', $table ) ) === $table;
	}

	/**
	 * Check if table of current model was ever installed.
	 *
	 * @since  1.0.0
	 * @return bool Returns if the customers table was installed and upgrade routine run
	 */
	public function installed() {
		if ( empty( $this->table_name ) ) {
			return false;
		}

		return $this->table_exists( $this->table_name );
	}

	public function count( $where = array() ) {
        global $wpdb;

        $where_clause = '';
        $placeholders = array();

        if ( ! empty( $where ) && is_array( $where ) ) {
            $conditions = array();

            foreach ( $where as $column => $value ) {
                $conditions[]    = "{$column} = %s";
                $placeholders[]  = $value;
            }

            $where_clause = 'WHERE ' . implode( ' AND ', $conditions );
        }

        // Construct the SQL query.
        $sql = $wpdb->prepare(
            "SELECT COUNT(*) FROM {$this->table_name} {$where_clause}",
            $placeholders
        );

        // Execute the query and return the count.
        return (int) $wpdb->get_var( $sql );
    }

}
