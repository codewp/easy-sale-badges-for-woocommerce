<?php

namespace AsanaPlugins\WooCommerce\SaleBadges\Validator;

defined( 'ABSPATH' ) || exit;

if ( class_exists( '\AsanaPlugins\WooCommerce\SaleBadgesPro\Validator\ProductValidatorPro' ) ) {
	class ProductValidator extends \AsanaPlugins\WooCommerce\SaleBadgesPro\Validator\ProductValidatorPro {}
} else {
	class ProductValidator extends BaseProductValidator {}
}
