
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
					tabPage.find('.tab-content').hide();
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
		var sp 	  = this;
		$(function(){
			sp._init();
		});		
	}

	var slidepin = SlidePin.prototype;
		slidepin.slide = null;

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

			// console.log( e.target.className )
			if( e.target.className === 'slide-button'){
				slidepin.slide = $(e.target);
				slidepin.slide.addClass('slide-mais');
			}
		}

		slidepin._onMouseUp = function(e){
			if( slidepin.slide != null )
				slidepin.slide.removeClass('slide-mais');
			slidepin.slide = null;
		}

		slidepin._onMouseMove = function(e){
			if( slidepin.slide != null ) {												
				var posicao = parseInt( slidepin.slide.css('left') );
				var largura = parseInt( slidepin.slide.parent().outerWidth() );			

					slidepin.slide.css('left', ( e.clientX - slidepin.slide.outerWidth() ) + "px");		
				
			}
		}


		slidepin._initDragDrop = function(){
			document.onmousedown = this._onMouseDown;
    		document.onmouseup = this._onMouseUp;
    		document.onmousemove = this._onMouseMove;
		}	

	window.slidepin = new SlidePin();



	var Calendario = function(){
		var ca = this;
		$(function(){
			ca.__init();
		})
	}

	var calendario = Calendario.prototype;
		
		calendario.elemento = null;
		calendario.__init = function(){

			this.elemento = $(".calendario, [data-app='calendario']");
			this.elemento.append( this.renderDias( 10 ) );

		}

		calendario.renderDias = function( mes ){
			var m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
				html = "";

				this.elemento.height( 450 );

				var elementoPai = this.elemento.height(),
					altura 		= 18;
					console.log( altura , elementoPai * 6)

				var pos = 0;
				for( var i = 0; i < 6; i ++ ) {

					html += "<div class='cal-linha' style='height: "+altura+"%; top: "+pos+"%'>";	

						pos += altura;

						html += "<table class='cal-table' cellpadding=\"0\" cellspacing='0'>";
						html += "<tbody>";
						html += "<tr>";
						for( var d = 0 ; d < 7; d++)
							html += "<td class='cal-dia' ></td>";
						html += "</tr>";
						html += "</tbody>";
						html += "</table>";

					html += "</div>";
				}

			
				
			
			return html;
		}

	window.calendario = new Calendario();

	function ExtractNumber(value)
	{
    	var n = parseInt(value);	
    	return n == null || isNaN(n) ? 0 : n;
	}


})(window,jQuery);