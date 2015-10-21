(function(window, $){

	var MAIL = function(){
		var mail = this;

		$(function(){
			mail._init();
		});
	}

	var mail = MAIL.prototype;

		mail._init = function(){
			
			this._sortable();	 
    		this._clickClone();    
    		this._clickDel();		
		}

		mail._clickClone = function(){
			var app = this;
			$(".row").on('click','.row-dupl', function(){
				app._clone(  $(this).parent() );
			})
		}

		mail._clickDel = function(){
			var app = this;
			$(".row").on('click','.row-del', function(){
				app._del( this );				
			})
		}

		mail._sortable = function(){

			$( ".e-mail" ).sortable({
      			placeholder: "mail-move",
      			handle: ".row-handle",
    		});
    		$( ".e-mail" ).disableSelection(); 
    		
		}

		mail._clone = function( elemento ){
			var ele = $(elemento);
				ele.after( ele.clone( true ) );				
		}

		mail._del = function( elemento ){
			$(elemento).parent().remove();
		}



	window.appmail = new MAIL();
})(window, $)