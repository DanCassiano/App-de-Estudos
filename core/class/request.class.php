<?php 

/**
* Request
*/
class Request
{
	/**
	 * url atual
	 */
	private static $slug;

	/**
	 * Recuperar a operacao para o controle
	 */
	public static function get( $dado )
	{
		if( empty( $dado ) )
			die("Arqumento necessário");

		if( !empty( $_GET['slug'] )){
			self::$slug = $_GET['slug'];
			self::$slug = explode('/', self::$slug );
		}	

		if( $dado == 'controle') {			

			self::$slug[0] = str_replace('-', '_', self::$slug[0] );
			return ( self::$slug[0] == "" ? "home" : self::$slug[0] );
		}

		if( $dado == 'query' )
			return self::$slug[1];
	}

}