<?php 
	/**
	* Controle
	*/
	class RequestControle
	{
		private static $controle;

		public static function init( $controle ){	
			$controle = self::camelCase( $controle );
			return new $controle();			 
		}

		private static function camelCase($str) {
    		$str = preg_replace_callback( "/(^|_)([a-z])/",function($m) { return strtoupper("$m[2]"); }, $str );
    		return $str;
		}
	}