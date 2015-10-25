
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

	}

	var slidepin = SlidePin.prototype;

		slidepin._init = function(){
			document.onmousedown = OnMouseDown;
    		document.onmouseup = OnMouseUp;
		}

	window.slidepin = new SlidePin();


	function OnMouseDown(e)
	{
	    // IE is retarded and doesn't pass the event object
	    if (e == null) 
	        e = window.event; 
	    
	    // IE uses srcElement, others use target
	    var target = e.target != null ? e.target : e.srcElement;
	    
	    _debug.innerHTML = target.className == 'drag' 
	        ? 'draggable element clicked' 
	        : 'NON-draggable element clicked';

	    // for IE, left click == 1
	    // for Firefox, left click == 0
	    if ((e.button == 1 && window.event != null || 
	        e.button == 0) && 
	        target.className == 'drag')
	    {
	        // grab the mouse position
	        _startX = e.clientX;
	        _startY = e.clientY;
	        
	        // grab the clicked element's position
	        _offsetX = ExtractNumber(target.style.left);
	        _offsetY = ExtractNumber(target.style.top);
	        
	        // bring the clicked element to the front while it is being dragged
	        _oldZIndex = target.style.zIndex;
	        target.style.zIndex = 10000;
	        
	        // we need to access the element in OnMouseMove
	        _dragElement = target;

	        // tell our code to start moving the element with the mouse
	        document.onmousemove = OnMouseMove;
	        
	        // cancel out any text selections
	        document.body.focus();

	        // prevent text selection in IE
	        document.onselectstart = function () { return false; };
	        // prevent IE from trying to drag an image
	        target.ondragstart = function() { return false; };
	        
	        // prevent text selection (except IE)
	        return false;
	    }
	}

	function OnMouseMove(e)
	{
	    if (e == null) 
	        var e = window.event; 

	    // this is the actual "drag code"
	    _dragElement.style.left = (_offsetX + e.clientX - _startX) + 'px';
	    _dragElement.style.top = (_offsetY + e.clientY - _startY) + 'px';
	    
	    _debug.innerHTML = '(' + _dragElement.style.left + ', ' + 
	        _dragElement.style.top + ')';   
	}

	function OnMouseUp(e)
	{
	    if (_dragElement != null)
	    {
	        _dragElement.style.zIndex = _oldZIndex;

	        // we're done with these events until the next OnMouseDown
	        document.onmousemove = null;
	        document.onselectstart = null;
	        _dragElement.ondragstart = null;

	        // this is how we know we're not dragging      
	        _dragElement = null;
	        
	        _debug.innerHTML = 'mouse up';
	    }
	}

	function ExtractNumber(value)
	{
	    var n = parseInt(value);
		
	    return n == null || isNaN(n) ? 0 : n;
	}

	// this is simply a shortcut for the eyes and fingers
	function $(id)
	{
	    return document.getElementById(id);
	}

})(window,jQuery);