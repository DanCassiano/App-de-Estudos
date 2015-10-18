<?php 
	
	 /**
	* 
	*/
	abstract class Controle
	{
		private $html;

		private $variaveis;

		public function set_var( $varivel, $valor ) {
			$this->variaveis[ $varivel ] = $valor;
		}

		public function set_template( $template ){

			ob_start();
				/**estraindo*/
				@extract($this->variaveis);
				/** Adicionando **/
				require_once $template;
				$this->html = ob_get_contents();
			ob_end_clean();
		}

		public function render(){
			echo $this->html;
		}
	}