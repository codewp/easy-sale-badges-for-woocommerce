<?php

namespace AsanaPlugins\WhatsApp\API;

defined( 'ABSPATH' ) || exit;

use AsanaPlugins\WhatsApp\Models\ItemsModel;

class ItemsHooks {

	public static function init() {
		add_filter( 'asnp_wesb_items_api_search_items', array( __CLASS__, 'search_items' ), 10, 3 );
		add_filter( 'asnp_wesb_items_api_get_items', array( __CLASS__, 'get_items' ), 10, 3 );
	}

	/**
	 * Search items.
	 *
	 * @param array           $items
	 * @param string          $search
	 * @param WP_REST_Request $request Full details about the request.
	 *
	 * @return array
	 */
	public static function search_items( $items, $search, $request ) {
		if ( empty( $request['type'] ) || empty( $search ) ) {
			return $items;
		}

		if ( 'products' === $request['type'] ) {
			$items = ItemsModel::get_products(
			  array(
				'type'    => array( 'simple', 'variation' ),
				'include' => array_filter( array_map( 'absint', $items ) ),
			  )
			);
		  } elseif ( 'categories' === $request['type'] ) {

			$items = ItemsModel::get_categories( array( 'name__like' => $search ) );

		  }  elseif ( 'tags' === $request['type'] ) {
	
			$items = ItemsModel::get_tags( array( 'name__like' => $search ) );

		  } else {
			$items = apply_filters( 'asnp_wesb_items_api_' . FUNCTION, [], $items, $request );
		  }

		return $items;
	}

	/**
	 * Get items.
	 *
	 * @param array           $items
	 * @param array           $req_items
	 * @param WP_REST_Request $request Full details about the request.
	 *
	 * @return array
	 */
	public static function get_items( $items, $req_items, $request ) {
		if ( empty( $request['type'] ) || empty( $req_items ) ) {
			return $items;
		}

		if ( 'products' === $request['type'] ) {
			$items = ItemsModel::get_products(
			  array(
				'type'    => array( 'simple', 'variation' ),
				'include' => array_filter( array_map( 'absint', $items ) ),
			  )
			);
		  } elseif ( 'categories' === $request['type'] ) {

			$items = ItemsModel::get_categories( array( 'include' => array_filter( array_map( 'absint', $req_items ) ) ) );

		  }  elseif ( 'tags' === $request['type'] ) {
	
			$items = ItemsModel::get_tags( array( 'include' => array_filter( array_map( 'absint', $req_items ) ) ) );

		  } else {
			$items = apply_filters( 'asnp_wesb_items_api_' . FUNCTION, [], $items, $request );
		  }

		return $items;
	}

}
