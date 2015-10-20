<?php 

	/**
	 * Caminho absoluto da app
	 */
	define("APP_ROOT", __DIR__ );


	define("BASE_URL", "http://localhost/app");


	/**
	 * Funcao de autoload de classes
	 */
	include "core/_autoload.php";

	/**
	 * Registrando o autoload
	 */
	spl_autoload_register('app_load_class');