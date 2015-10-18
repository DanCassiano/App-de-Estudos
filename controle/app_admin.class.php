<?php 
	/**
	* AppAdmin
	*/
	class AppAdmin extends Controle
	{
		
		private function getHeader(){			
			// parent::set_template('view/header.php');			
		}

		public function getTitulo() {
			return "App";
		}

		function __construct(){		

			parent::set_template('view/index.php');
		}
	}