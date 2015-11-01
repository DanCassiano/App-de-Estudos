
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



	var Grid = function(){
		var g = this;		
	}
	
	var grid = Grid.prototype;

		grid.dados = [ 
						["Ola mundo","oasdasdasd" ],
						["Ola mundo2","oasdasdasd" ],
						["Ola mundo3","oasdasdasd" ]
					];

		grid.__editFunction   = null;
		grid.__removeFunction = null;
		grid.g =null;

		grid.setGrid = function( elemento ){
			this.g =$( elemento );
			this.__init( this.g );
		}

		grid.setOpt = function( operacao, callback ){

			var grid = this;

			if( operacao == 'editar')
			{
				$(grid.g, ".grid-table")
							.on('click','a[href=#editar]',function(e){
								e.preventDefault();					
								callback( grid.dados[ $(this) .index() ] ,e);
							})
			}

			if( operacao == 'remover')
			{
				$(this.g, ".grid-table")
							.on('click','a[href=#remover]',function(e){
								e.preventDefault();					
								callback(this,e);
							})
			}

		}

		grid.__init = function(g){
			
				g.append( this.__renderToolbar( g.data('colum') ) );
				g.append( this.__renderDados() );
				g.append( this.__renderFooter() );	

				this.__eventosToolbar();				
		}		

		grid.__renderToolbar = function( toolbar ){

			var tooblarHtml = "";
				toolbar = toolbar.replace('[','').replace(']','').split(',');			

			if( typeof(toolbar) == 'object' ){

				$.each( toolbar, function(i,v){
					if( i == 0)
						tooblarHtml += '<td> <input type="checkbox" /> </td>';

					else
						tooblarHtml += '<th><p>'+v+'</p></th>';				
				});
				
				return '<div class="grid-toolbar">'+
						'<table class="toolbar-table" >'+
							'<thead>'+
								'<tr>'+									
									tooblarHtml+									
								'</tr>'+
							'</thead>'+
					'</table>';
					'</div>';
			}
		}

		grid.__renderDados = function(){

			var htmlDados = "";
			$.each(this.dados, function(i,v){

				htmlDados += "<tr>";
				htmlDados += "<td><input type=\"checkbox\" /></td>";
				$.each( v, function(j,k){
					if( j == 0 )						
						htmlDados += "<td><p>"+k+"</p><small><a href=\"#editar\">Editar</a>&nbsp;<a href=\"#remover\">Remover</a></small></td>";
					else
						htmlDados += "<td>"+k+"</td>";
				})
				htmlDados += "</tr>";
			})


			return '<table class="grid-table">'+
						'<tbody>'+
							htmlDados+
						'</tbody>'+
					'</table>';
		}

		grid.__renderFooter = function(){
			return '<div class="grid-footer"></div>';
		}

		grid.__eventosToolbar = function(){
			$(".grid-toolbar")
				.on('click', "input[type=checkbox]",function(){						

					$(".grid-table input[type=checkbox]").each(function(){
						$(this).prop('checked', !$(this).prop('checked'));
					});
				})
		}

		
	window.grid = new Grid();

	function ExtractNumber(value)
	{
    	var n = parseInt(value);	
    	return n == null || isNaN(n) ? 0 : n;
	}


})(window,jQuery);