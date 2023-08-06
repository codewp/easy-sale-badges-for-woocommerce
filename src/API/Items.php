<?php

namespace AsanaPlugins\WhatsApp\API;

defined( 'ABSPATH' ) || exit;

use AsanaPlugins\WhatsApp\Models\ItemsModel;

class Items extends BaseController {

	protected $rest_base = 'items';

	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'search_items' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => $this->get_collection_params(),
				),
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
				),
			)
		);
	}

	/**
	 * Search items.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function search_items( $request ) {
		try {
			if ( empty( $request['search'] ) ) {
				throw new \Exception( __( 'Search term is required.', 'asnp-easy-whatsapp' ) );
			}

			if ( empty( $request['type'] ) ) {
				throw new \Exception( __( 'Type is required.', 'asnp-easy-whatsapp' ) );
			}

			$search = sanitize_text_field( wp_unslash( $request['search'] ) );
			if ( empty( $search ) ) {
				throw new \Exception( __( 'Search term is required.', 'asnp-easy-whatsapp' ) );
			}

			$items = [];
			if ( 'products' === $request['type'] ) {
				$items = ItemsModel::search_products(
					array(
						'search' => $search,
						'type'   => array(
							'simple',
							'variation',
						),
					)
				);
			} else {
				$items = apply_filters( 'asnp_wesb_items_api_' . __FUNCTION__, $items, $search, $request );
			}

			return rest_ensure_response( [
				'items' => $items,
			] );
		} catch ( \Exception $e ) {
			return new \WP_Error( 'asnp_wesb_rest_items_error', $e->getMessage(), array( 'status' => 400 ) );
		}
	}

	/**
	 * Get items.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_items( $request ) {
		try {
			if ( empty( $request['items'] ) ) {
				throw new \Exception( __( 'Items are required.', 'asnp-easy-whatsapp' ) );
			}

			if ( empty( $request['type'] ) ) {
				throw new \Exception( __( 'Type is required.', 'asnp-easy-whatsapp' ) );
			}

			$items = $request['items'];
			if ( ! is_array( $items ) ) {
				$items = explode( ',', $items );
			}

			if ( 'products' === $request['type'] ) {
				$items = ItemsModel::get_products(
					array(
						'type'    => array( 'simple', 'variation' ),
						'include' => array_filter( array_map( 'absint', $items ) ),
					)
				);
			} else {
				$items = apply_filters( 'asnp_wesb_items_api_' . __FUNCTION__, [], $items, $request );
			}

			return rest_ensure_response( [
				'items' => $items,
			] );
		} catch ( \Exception $e ) {
			return new \WP_Error( 'asnp_wesb_rest_items_error', $e->getMessage(), array( 'status' => 400 ) );
		}
	}

}
