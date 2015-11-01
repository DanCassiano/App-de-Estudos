(function(window, $){

	var MAIL = function(){
		var mail = this;

		$(function(){
			mail._init();
		});
	}

	var mail = MAIL.prototype;
		mail.row = null;

		mail._init = function(){
			
			this.mail = $(".row-mail");

			this._sortable();	 
    		this._clickClone();    
    		this._clickDel();	
    		this._rowHover();
    		this._imgHover();	
		}

		mail._clickClone = function(){
			var app = this;
			app.mail.on('click','.row-dupl', function(){
				app._clone(  $(this).parent() );
			})
		}

		mail._clickDel = function(){
			var app = this;
			app.mail.on('click','.row-del', function(){
				app._del( this );				
			})
		}

		mail._rowHover = function(){

			this.mail.hover(function(){				
				$(this).addClass('row-hover');
			},
			function(){				
				$(this).removeClass('row-hover');
			})
		}

		mail._imgHover = function(){
			$('.img').hover(function(){		
					$(this).parent().parent().removeClass('row-hover');					
			},function(){
				$(this).parent().parent().addClass('row-hover');	
			});
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