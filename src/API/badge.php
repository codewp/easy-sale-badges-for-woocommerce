<?php

namespace AsanaPlugins\WooCommerce\SaleBadges\API;

use AsanaPlugins\WooCommerce\SaleBadges;
use AsanaPlugins\WooCommerce\SaleBadges\Models\BadgeModel;
use function AsanaPlugins\WooCommerce\SaleBadges\get_plugin;

defined( 'ABSPATH' ) || exit;

class Badge extends BaseController {

	protected $rest_base = 'badge';

	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => $this->get_collection_params(),
				),
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'create_item' ),
					'permission_callback' => array( $this, 'create_item_permissions_check' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/(?P<id>[\d]+)',
			array(
				'args' => array(
					'id' => array(
						'description' => __( 'Unique identifier for the resource.', 'asnp-easy-sale-badge' ),
						'type'        => 'integer',
					),
				),
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_item' ),
					'permission_callback' => array( $this, 'get_item_permissions_check' ),
				),
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'update_item' ),
					'permission_callback' => array( $this, 'update_item_permissions_check' ),
				),
				array(
					'methods'             => \WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'delete_item' ),
					'permission_callback' => array( $this, 'delete_item_permissions_check' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/duplicate' . '/(?P<id>[\d]+)',
			array(
				'args' => array(
					'id' => array(
						'description' => __( 'Unique identifier for the resource.', 'asnp-easy-sale-badge' ),
						'type'        => 'integer',
					),
				),
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'duplicate_item' ),
					'permission_callback' => array( $this, 'duplicate_item_permissions_check' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/reorder',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'reorder_items' ),
					'permission_callback' => array( $this, 'reorder_items_permissions_check' ),
				),
			)
		);
	}

	/**
	 * Get a collection of posts.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_items( $request ) {
		try {
			$page  = ! empty( $request['page'] ) ? absint( $request['page'] ) : 1;
			$model = get_plugin()->container()->get( BadgeModel::class );
			$items = $model->get_items( [
				'offset' => $page * 20 - 20,
				'number' => 20,
				'title'  => ! empty( $request['search'] ) ? sanitize_text_field( $request['search'] ) : '',
			] );

			return rest_ensure_response( [
				'items' => $items,
			] );
		} catch ( \Exception $e ) {
			return new \WP_Error( 'asnp_wesb_rest_badge_error', $e->getMessage(), array( 'status' => 400 ) );
		}
	}

	public function get_item( $request ) {
		try {
			$id = isset( $request['id'] ) ? (int) $request['id'] : 0;
			if ( 0 >= $id ) {
				throw new \Exception( __( 'Invalid item ID.', 'asnp-easy-sale-badge' ) );
			}

			$model = get_plugin()->container()->get( BadgeModel::class );
			$item  = $model->get_item( $id );
			if ( ! $item ) {
				throw new \Exception( __( 'Badge not found.', 'asnp-easy-sale-badge' ) );
			}

			return rest_ensure_response( [
				'item' => $item,
			] );
		} catch ( \Exception $e ) {
			return new \WP_Error( 'asnp_wesb_rest_badge_error', $e->getMessage(), array( 'status' => 400 ) );
		}
	}

	public function create_item( $request ) {
		try {
			if ( ! empty( $request['id'] ) ) {
				unset( $request['id'] );
			}

			$item = $this->save_item( $request );

			do_action( 'asnp_wesb_badge_created', $item, $request );

			return rest_ensure_response( [
				'item' => $item,
			] );
		} catch ( \Exception $e ) {
			return new \WP_Error( 'asnp_wesb_rest_badge_error', $e->getMessage(), array( 'status' => 400 ) );
		}
	}

	public function update_item( $request ) {
		try {
			$id = isset( $request['id'] ) ? (int) $request['id'] : 0;
			if ( ! $id || 0 >= $id ) {
				throw new \Exception( __( 'Invalid ID.', 'asnp-easy-sale-badge' ) );
			}

			$model = get_plugin()->container()->get( BadgeModel::class );
			$item  = $model->get_item( $id );
			if ( ! $item ) {
				throw new \Exception( __( 'Badge not found.', 'asnp-easy-sale-badge' ) );
			}

			$item = $this->save_item( $request );

			do_action( 'asnp_wesb_badge_updated', $item, $request );

			return rest_ensure_response( [
				'item' => $item,
			] );
		} catch ( \Exception $e ) {
			return new \WP_Error( 'asnp_wesb_rest_badge_error', $e->getMessage(), array( 'status' => 400 ) );
		}
	}

	public function delete_item( $request ) {
		try {
			$id = isset( $request['id'] ) ? (int) $request['id'] : 0;
			if ( ! $id || 0 >= $id ) {
				throw new \Exception( __( 'Invalid ID.', 'asnp-easy-sale-badge' ) );
			}

			$model = get_plugin()->container()->get( BadgeModel::class );
			$item  = $model->get_item( $id );
			if ( ! $item ) {
				throw new \Exception( __( 'Badge not found.', 'asnp-easy-sale-badge' ) );
			}

			$delete = $model->delete( $id );
			if ( ! $delete ) {
				throw new \Exception( __( 'Cannot delete the item.', 'asnp-easy-sale-badge' ) );
			}

			do_action( 'asnp_wesb_badge_deleted', $id, $request );

			return rest_ensure_response( [
				'success' => 1,
				'id'      => $id,
			] );
		} catch ( \Exception $e ) {
			return new \WP_Error( 'asnp_wesb_rest_badge_error', $e->getMessage(), array( 'status' => 400 ) );
		}
	}

	public function duplicate_item( $request ) {
		try {
			$id = isset( $request['id'] ) ? (int) $request['id'] : 0;
			if ( ! $id || 0 >= $id ) {
				throw new \Exception( __( 'Invalid ID.', 'asnp-easy-sale-badge' ) );
			}

			$model   = get_plugin()->container()->get( BadgeModel::class );
			$item_id = $model->duplicate( $id );
			if ( ! $item_id ) {
				throw new \Exception( __( 'Cannot duplicate the item.', 'asnp-easy-sale-badge' ) );
			}

			do_action( 'asnp_wesb_badge_duplicated', $item_id, $id, $request );

			return rest_ensure_response( [
				'id' => $item_id,
			] );
		} catch ( \Exception $e ) {
			return new \WP_Error( 'asnp_wesb_rest_badge_error', $e->getMessage(), array( 'status' => 400 ) );
		}
	}

	public function reorder_items( $request ) {
		try {
			$items = ! empty( $request['items'] ) ? map_deep( $request['items'], 'intval' ) : array();
			if ( empty( $items ) ) {
				throw new \Exception( __( 'Invalid items.', 'asnp-easy-sale-badge' ) );
			}

			$model   = get_plugin()->container()->get( BadgeModel::class );
			$reorder = $model->update_ordering( $items );
			if ( ! $reorder ) {
				throw new \Exception( __( 'Cannot reorder the items.', 'asnp-easy-sale-badge' ) );
			}

			return rest_ensure_response( [
				'success' => 1,
			] );
		} catch ( \Exception $e ) {
			return new \WP_Error( 'asnp_wesb_rest_badge_error', $e->getMessage(), array( 'status' => 400 ) );
		}
	}

	/**
	 * Save a single badge.
	 *
	 * @return int Saved item ID.
	 *
	 * @throws \Exception
	 */
	protected function save_item( $request ) {
		try {
			$data = [];
			if ( isset( $request['title'] ) ) {
				$data['title'] = sanitize_text_field( $request['title'] );
			}

			if ( isset( $request['status'] ) ) {
				$data['status'] = (int) $request['status'];
			}

			if ( ! empty( $request['id'] ) && 0 < (int) $request['id'] ) {
				$data['id'] = (int) $request['id'];
			} else {
				$data['title']  = ! empty( $data['title'] ) ? $data['title'] : __( 'Badge', 'asnp-easy-sale-badge' );
				$data['status'] = isset( $data['status'] ) ? $data['status'] : 1;
			}

			$model = get_plugin()->container()->get( BadgeModel::class );

			$options = $this->get_options( $request );
			if ( ! empty( $options ) ) {
				$data['options'] = maybe_serialize( $options );
			}

			$id = $model->add( $data );
			if ( ! $id || 0 >= $id ) {
				throw new \Exception( __( 'Error occurred in saving item.', 'asnp-easy-sale-badge' ) );
			}

			$item = $model->get_item( $id );

			do_action( 'asnp_wesb_badge_saved', $item, $request );

			return $item;
		} catch ( \Exception $e ) {
			throw $e;
		}
	}

	protected function get_options( $request ) {
		$id = isset( $request['id'] ) ? (int) $request['id'] : 0;

		$options = array();

		$defaults = array(
			'zIndex'    => '',
			'zIndexImg' => '',
			'zIndexAdv' => '',
		);

		foreach ( $request->get_params() as $key => $value ) {
			// Excluded fields.
			if ( in_array( $key, array( '_locale', 'id', 'title', 'status' ) ) ) {
				continue;
			}

			switch ( $key ) {
				// Text options.
				case 'badgeLabel':
				case 'textColor':
				case 'badgeStyles':
				case 'badgeColor':
				case 'badgePositionY':
				case 'badgePositionX':
				case 'badgeImage':
				case 'badgeAdv':
				case 'mainBg':
				case 'secondBg':
				case 'timezone':
				case 'selectedDateFrom':
				case 'selectedDateTo':
				case 'badgeTimer':
				case 'labelDayTimer':
				case 'labelHoursTimer':
				case 'labelMinTimer':
				case 'labelSecTimer':
				case 'bgColorTimer':
					if ( isset( $value ) ) {
						$options[ $key ] = sanitize_text_field( $value );
					} elseif ( isset( $defaults[ $key ] ) ) {
						$options[ $key ] = $defaults[ $key ];
					}
					break;

				// Integer options.
				case 'fontSizeText':
				case 'fontSizeLabelTimer':
				case 'lineHeightLabelTimer':
				case 'lineHeightText':
				case 'widthBadge':
				case 'heightBadge':
				case 'topLeftRadius':
				case 'topRightRadius':
				case 'bottomLeftRadius':
				case 'bottomRightRadius':
					if ( isset( $value ) ) {
						$options[ $key ] = absint( $value );
					} elseif ( isset( $defaults[ $key ] ) ) {
						$options[ $key ] = $defaults[ $key ];
					}
					break;

				// Float options.
				case 'opacity':
				case 'rotationX':
				case 'rotationY':
				case 'rotationZ':
				case 'badgePositionTop':
				case 'badgePositionBottom':
				case 'badgePositionLeft':
				case 'badgePositionRight':
				case 'widthBadgeImg':
				case 'opacityImg':
				case 'rotationXImg':
				case 'rotationYImg':
				case 'rotationZImg':
					if ( isset( $value ) ) {
						$options[ $key ] = floatval( $value );
					} elseif ( isset( $defaults[ $key ] ) ) {
						$options[ $key ] = $defaults[ $key ];
					}
					break;

				// Boolean options.
				case 'horizontal':
				case 'vertical':
				case 'useProductFilter':
				case 'imgbadge':
				case 'badgeAdv':
				case 'imgbadgeAdv':
				case 'alwaysOnline':
				case 'useTimezone':
				case 'useTimerBadge':
					if ( isset( $value ) ) {
						$options[ $key ] = SaleBadges\string_to_bool( $value ) ? 1 : 0;
					} elseif ( ! $id && isset( $defaults[ $key ] ) ) {
						$options[ $key ] = $defaults[ $key ];
					}
					break;

				// Zindex options.
				case 'zIndex':
				case 'zIndexImg':
				case 'zIndexAdv':
					if ( ! empty( trim( $value ) ) ) {
						$options[ $key ] = floatval( $value );
					} elseif ( isset( $defaults[ $key ] ) ) {
						$options[ $key ] = $defaults[ $key ];
					}
					break;

				case 'availability':
				case 'items':
					if ( isset( $value ) ) {
						$options[ $key ] = wp_kses_post_deep( $value );
					}
					break;

				default:
					if ( isset( $value ) ) {
						$options[ sanitize_text_field( $key ) ] = wp_kses_post_deep( $value );
					}
					break;
			}
		}

		if ( ! $id ) {
			foreach ( $defaults as $key => $value ) {
				if ( ! isset( $options[ $key ] ) ) {
					$options[ $key ] = $value;
				}
			}
		}

		return apply_filters(
			'asnp_wesb_api_badge_' . __FUNCTION__,
			$options,
			$request
		);
	}

}
