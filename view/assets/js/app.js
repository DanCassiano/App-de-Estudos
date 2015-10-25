
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


	var Slide = function(){
		var slide = this;
		$(function(){
			slide._init();
		});
	}

	var slide = Slide.prototype;
		slide._init = function(){

			var slideElement = $("[data-app='slide'], .slide");
				slideElement.each(function(i,d){
						
						$(d).on('click','.slide-button', function(e){
							e.preventDefault();
							$(this).parent().toggleClass('off');
						})
				});
		}
	window.slide = new Slide();


	var SlidePin = function(){
		var sp 	  = this,
			slide = null;
		$(function(){
			sp._init();
		});		
	}

	var slidepin = SlidePin.prototype;

		slidepin._init = function(){
				var sp = this;
				
				sp._initDragDrop();

				var slideElement = $("[data-app='slide-pin'], .slide-pin");

					slideElement.each(function(i,d){
						sp._dragElement = $(d);
						$(d).on('click', 'a' , function(e){
							e.preventDefault();
						})
					});
		}

		slidepin._onMouseDown = function(e){

			console.log( e.target, e.target.className )

			if( e.target.className == 'slide-pin')
		}

		slidepin._onMouseUp = function(e){

		}

		slidepin._onMouseMove = function(e){

		}


		slidepin._initDragDrop = function(){
			document.onmousedown = this._onMouseDown;
    		document.onmouseup = this._onMouseUp;
    		document.onmousemove = this._onMouseMove;
		}	

	window.slidepin = new SlidePin();

	function ExtractNumber(value)
	{
    	var n = parseInt(value);	
    	return n == null || isNaN(n) ? 0 : n;
	}


})(window,jQuery);