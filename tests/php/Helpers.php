<?php

namespace AsanaPlugins\WhatsApp\Tests;

use AsanaPlugins\WhatsApp;

class Helpers extends \WP_UnitTestCase {

	public function testUrls()
    {
		$this->assertTrue( WhatsApp\is_in_urls( 'https://wp2.test/products', [ 'http://wp2.test/products' ] ) );
		$this->assertTrue( WhatsApp\is_in_urls( 'https://wp2.test/products', [ 'products' ] ) );
		$this->assertTrue( WhatsApp\is_in_urls( 'https://wp2.test/products/2', [ 'products' ] ) );
		$this->assertTrue( WhatsApp\is_in_urls( 'https://wp2.test/products/2', [ 'products/2' ] ) );
		$this->assertTrue( WhatsApp\is_in_urls( 'https://wp2.test/products/2/index.php?query=true', [ 'products/2' ] ) );
		$this->assertTrue( WhatsApp\is_in_urls( 'https://wp2.test/products/2/index.php?query=true', [ 'products/2/index.php?query=true' ] ) );
		$this->assertTrue( WhatsApp\is_in_urls( 'https://wp2.test/products/3', [ 'products/2', 'products/3' ] ) );

		$this->assertFalse( WhatsApp\is_in_urls( 'https://wp2.test/products', [ 'products/2' ] ) );
		$this->assertFalse( WhatsApp\is_in_urls( 'https://wp2.test/products/22', [ 'products/2' ] ) );
		$this->assertFalse( WhatsApp\is_in_urls( 'https://wp2.test/products/2/', [ 'products/2/index.php?query=true' ] ) );
		$this->assertFalse( WhatsApp\is_in_urls( 'https://wp2.test/products/2/index.php?query=false', [ 'products/2/index.php?query=true' ] ) );
		$this->assertFalse( WhatsApp\is_in_urls( 'https://wp2.test/products', [ 'products/2', 'products/3' ] ) );
		$this->assertFalse( WhatsApp\is_in_urls( 'https://wp2.test/products/33', [ 'products/2', 'products/3' ] ) );
    }

}
