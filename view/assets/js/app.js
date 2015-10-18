
(function(window, $){

	var App = function(){
		var app = this;
		$(function(){
			app._init();
		})
	}

	var app = App.prototype;
		
		app._init = function(){

			this._handleMenu();
		}

		app._handleMenu = function(){

			$("body").on('click', "#btnMenu", function(e){
				e.preventDefault();
				$("body").toggleClass('expandido');
			});
		}

	window.app = new App();
})(window,jQuery);