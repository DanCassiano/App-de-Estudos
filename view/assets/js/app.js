
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

	var Tabs = function(){
		var tab = this;
		$(function(){
			tab._init();
		})
	}

	var tab = Tabs.prototype;		
		tab._init = function(){

			var tabPage = $("[data-app='tabs'], .tabs");

				if( tabPage === undefined )
					return false;

				var conteudo = tabPage.find(".tabs-conteudo div");					
					$(conteudo[0]).show();

				var li = tabPage.find('>ul li');
					li.on('click','a', function(e){
						e.preventDefault();
						
						$(this).trigger("tab-click", this);
						
						tabPage.find('.tab-content').hide();

						$( $(this).attr('href') ).show();

						tabPage.find('li').removeClass('ativa')

						$(this).parent().addClass('ativa');

					});					

		}
	window.tabs = new Tabs();


	var Select = function(){
		var sele = this;
		$(function(){
			sele._init();
		})
	}

	var select = Select.prototype;
		select._init = function(){

			var selectElem = $("[data-app='select'], .select ");	

			selectElem.each(function(i,d){				

				var selectLista = null,
					element = $(d),
					valorSelecionado = null;

				if( element.attr('id') == undefined)			
					element.attr('id', "select"+Math.floor(Math.random() * 100) );


				selectLista = element.find('.select-lista');
				element.width( selectLista.outerWidth() );			

				selectLista.on('click', 'a',function(e){
					e.preventDefault();
					$(this).closest('.select').removeClass('select-aberta');
					valorSelecionado = $(this).attr('href');
					
					element.find(">a").text( $(this).text() ).attr('href', $(this).attr('href') );
				})

				element.on('click','>a', function(e){
					e.preventDefault();
					$(this).parent().toggleClass('select-aberta');
				});
			})

		}
	window.select = new Select();

})(window,jQuery);