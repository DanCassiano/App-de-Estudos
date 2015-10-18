<?php 

	function app_load_class( $classe, $dir = null )
	{		
		$dirs = array( 'controle', 'core','core/class');		
        foreach($dirs as $dir) { 

        	$classe = strtolower(preg_replace('/(?|([a-z\d])([A-Z])|([^\^])([A-Z][a-z]))/', '$1_$2', $classe)); 
            $file = APP_ROOT."/".$dir.'/'.$classe. '.class.php';
                       
            if (file_exists($file)) {
               require $file;
               break; 
            }
        }
	}