<?php 
	ob_start('ob_gzhandler');

	/** Arquivo de configuracao e registro */
	include "config.php";	

	/** Buscando tipo de pagina e seu controle */
	$controle = Request::get("controle");
	
	/**
	 * Iniciando controle
	 */
	$c = RequestControle::init( $controle );
	$c->render();