var ruta_hoja_estilos = "style/theme.css";
var valor_invert = '0%';
var valor_contrast = '100%';
var valor_grayscale = '0%';
var valor_saturate = '100%';
var valores_logo;
var palette_colors = [["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
						  ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
						  ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
						  ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
						  ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
						  ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
						  ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
						  ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]];
$.noConflict();
jQuery(document).ready(function($) {
	function abre_capa() {
		$('body').css({'width':'auto'});
		$('.cierra_capa_personaliza').animate({'left':'300px'}, { duration: 500, queue: false}).fadeIn(0);
		$('.sidenav').animate({'left':'0'}, { duration: 500, queue: false});
		$('body').animate({'margin-left':'350px'}, { duration: 500, queue: false});
	}
	
	function cierra_capa() {
		$('body').css({'width':'auto'});
		$('.cierra_capa_personaliza').animate({'left':'-50px'}, { duration: 500, queue: false}).fadeOut(0);
		$('.sidenav').animate({'left':'-350px'}, { duration: 500, queue: false});
		$('body').animate({'margin-left':'0px'}, { duration: 500, queue: false});
	}
	
	$('.rueda_personaliza').on('click', function(){
		$('a').bind('click', function(e){ e.preventDefault(); });
		$(this).fadeOut(500);
		abre_capa();
	});

	$('.cierra_capa_personaliza').on('click', function() {
		$('a').unbind('click');
		$('.rueda_personaliza').fadeIn(500);
		cierra_capa();
	});
	
	// Tipografía cuerpo
	var script_fonts = document.createElement('script');
	script_fonts.src = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAiBrFUoO6lwPcw87b9KqpJC0MFb4KzQQo&callback=SetFonts';
	document.body.appendChild(script_fonts);
	$('#selecciona_tipo').on('change', function() {
		var tipo_cuerpo_provisional = $("#selecciona_tipo").val();
		var importa_tipo = tipo_cuerpo_provisional.replace(" ","+");
		$('style').prepend('@import url(http://fonts.googleapis.com/css?family='+importa_tipo+');');
		tipo_cuerpo_provisional = '"' + tipo_cuerpo_provisional + '", sans-serif';
		$('html head + body, #page').css({'font-family': tipo_cuerpo_provisional});
	});

	// Funciones de configuración
	$("#config_barra_navegacion").on('click', function(){ config_barra_navegacion(); });
	$('#config_cabecera').on("click", function(){ config_cabecera(); });
	$('#config_cuerpo').on("click", function(){ config_cuerpo(); });
	$('#config_footer').on("click", function(){ config_footer(); });
	$('#config_tipos').on("click", function(){ config_tipos(); });
	$('#config_otros').on("click", function(){ config_otros(); });
	
	function config_barra_navegacion () {
		$('#config_barra_navegacion').css({"color":"#fff", "font-weight":"bold"});
		$('#config_cabecera, #config_cuerpo, #config_footer, #config_tipos, #config_otros').css({"color":"#bbb", "font-weight":"normal"});
		
		// Muestro sus parámetros correspondientes
		$('.parametros_cabecera, .parametros_cuerpo, .parametros_footer, .parametros_tipos, .parametros_otros').fadeOut(0, function(){ $('.parametros_barra_navegacion').fadeIn(); });
		// Barra de navegación
			$("#selector_header_nav").spectrum({
				preferredFormat: "hex",
				showInput: true,
				showPalette: true,
				color: $('nav.navbar.first_navbar').css('background-color'),
				palette: palette_colors,
				move: function (color) {
					$('nav.navbar.first_navbar').css({'background':color});
				},
			});
			$("#selector_link_header_nav").spectrum({
				preferredFormat: "hex",
				showInput: true,
				showPalette: true,
				color: $('nav.navbar.first_navbar a').css('color'),
				palette: palette_colors,
				move: function (color) {
					$('nav.navbar.first_navbar a').css({'color':color});
				},
			});
			$("#selector_menu_header_nav").spectrum({
				showAlpha: true,
				showInput: true,
				showPalette: true,
				color: $('nav.navbar.first_navbar .dropdown-menu').css('background-color'),
				palette: palette_colors,
				move: function (color) {
					$('nav.navbar.first_navbar .dropdown-menu').css({'background-color':color});
				},
			});
	}
	function config_cabecera () {
		$('#config_cabecera').css({"color":"#fff", "font-weight":"bold"});
		$('#config_barra_navegacion, #config_cuerpo, #config_footer, #config_tipos, #config_otros').css({"color":"#bbb", "font-weight":"normal"});
		
		// Muestro sus parámetros correspondientes
		$('.parametros_barra_navegacion, .parametros_cuerpo, .parametros_footer, .parametros_tipos, .parametros_otros').fadeOut(0, function(){ $('.parametros_cabecera').fadeIn(); });
		// Cabecera
			$("#selector_header_top").spectrum({
				showAlpha: true,
				showInput: true,
				showPalette: true,
				color: $('nav.navbar.navbar-default').css('background-color'),
				palette: palette_colors,
				move: function (color) {
					$('nav.navbar.navbar-default').css({'background':color});
				}
			});
			$("#selector_link_header_top").spectrum({
				preferredFormat: "hex",
				showInput: true,
				showPalette: true,
				color: $('nav.navbar.navbar-default ul.nav.navbar-nav.pull-right li a').css('color'),
				palette: palette_colors,
				move: function (color) {
					$('nav.navbar.navbar-default ul.nav.navbar-nav.pull-right li a').css({'color':color});
				},
			});
			$("#selector_menu_header_top").spectrum({
				showAlpha: true,
				showInput: true,
				showPalette: true,
				color: $('nav.navbar.navbar-default .dropdown-menu').css('background-color'),
				palette: palette_colors,
				move: function (color) {
					$('nav.navbar.navbar-default .dropdown-menu, .navbar-default .navbar-nav > .open > a').css({'background-color':color});
				},
			});
			$('#invert_logo, #contrast_logo, #grayscale_logo, #saturate_logo').on('change', function(){
				valor_invert = $('#invert_logo').val();
				valor_contrast = $('#contrast_logo').val();
				valor_grayscale = $('#grayscale_logo').val();
				valor_saturate = $('#saturate_logo').val();
				$('img.logo_cabecera').css({'filter' : 'invert('+valor_invert+') contrast('+valor_contrast+') grayscale('+valor_grayscale+') saturate('+valor_saturate+')'});
			});
			valores_selects();
	}
	function config_cuerpo () {
		$('#config_cuerpo').css({"color":"#fff", "font-weight":"bold"});
		$('#config_barra_navegacion, #config_cabecera, #config_footer, #config_tipos, #config_otros').css({"color":"#bbb", "font-weight":"normal"});
		
		// Muestro sus parámetros correspondientes
		$('.parametros_barra_navegacion, .parametros_cabecera, .parametros_footer, .parametros_tipos, .parametros_otros').fadeOut(0, function(){ $('.parametros_cuerpo').fadeIn(); });
		// Cuerpo
			$("#selector_body_background").spectrum({
				preferredFormat: "hex",
				showInput: true,
				showPalette: true,
				color: $('html body').css('background-color'),
				palette: palette_colors,
				move: function (color) {
					$('html body, #page').css({'background':color});
				}
			});
			$("#selector_color_titles").spectrum({
				preferredFormat: "hex",
				showInput: true,
				showPalette: true,
				color: $('.block .header').css('color'),
				color: $('.block .header').css('color'),
				palette: palette_colors,
				move: function (color) {
					$('.panel-default > .panel-heading, .box.message table td.heading, .box.message .messagearea .messagerecent .singlemessage .otheruser, .block .header, .panel-default > .panel-heading .coursename a, h3, h3 a, .category .notloaded .with_children, .category a').css({'color':color});
					$('#page .content .block_tree li p a, #page span.eventname, #page .content .list li a').css({'color':$('#page .content .block_tree li p a, #page span.eventname, #page .content .list li a').css('color')});
				}
			});
			$("#selector_color_scroll").spectrum({
				showAlpha: true,
				showInput: true,
				showPalette: true,
				color: $('.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar').css('background-color'),
				palette: palette_colors,
				move: function (color) {
					$('.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar').css({'background-color':color});
				}
			});
			$("#selector_color_bloques").spectrum({
				showAlpha: true,
				showInput: true,
				showPalette: true,
				color: $('.block').css('background-color'),
				palette: palette_colors,
				move: function (color) {
					$('.block').css({'background-color':color, 'padding' : '.5em'});
				}
			});
			$("#selector_color_texto_bloques").spectrum({
				preferredFormat: "hex",
				showInput: true,
				showPalette: true,
				color: $('#page .content .block_tree li p a, #page span.eventname, #page .content .list li a').css('color'),
				palette: palette_colors,
				move: function (color) {
					$('#page .content .block_tree li p a, #page span.eventname, #page .content .list li a, .block_site_main_menu .instancename, .block_navigation .block_tree .tree_item, .block_navigation .block_tree .tree_item.branch, .block_settings .block_tree .tree_item').css({'color':color});
				}
			});
	}
	function config_tipos () {
		$('#config_tipos').css({"color":"#fff", "font-weight":"bold"});
		$('#config_barra_navegacion, #config_cabecera, #config_cuerpo, #config_footer, #config_otros').css({"color":"#bbb", "font-weight":"normal"});
		$('#config_barra_navegacion, #config_cabecera, #config_cuerpo, #config_footer, #config_otros').css({"color":"#bbb", "font-weight":"normal"});
		
		// Muestro sus parámetros correspondientes
		$('.parametros_barra_navegacion, .parametros_cabecera, .parametros_cuerpo, .parametros_footer, .parametros_otros').fadeOut(0, function(){ $('.parametros_tipos').fadeIn(); });
	}
	
	// Obtengo el valor de los colores y los paso a hexadecimal
	$('.confirma_color').on('click', function(){
		$('a').unbind('click');
		// Barra de navecación
		var new_color_header_nav = $("#selector_header_nav").spectrum("get");
		//new_color_header_nav.toHexString();
		var new_link_header_nav = $("#selector_link_header_nav").spectrum("get");
		//new_link_header_nav.toHexString();
		var new_menu_header_nav = $("#selector_menu_header_nav").spectrum("get");
		
		// Cabecera
		var new_color_header_top = $("#selector_header_top").spectrum("get");
		//new_color_header_top.toHexString();
		var new_link_header_top = $("#selector_link_header_top").spectrum("get");
		//new_link_header_top.toHexString();
		var new_menu_header_top = $("#selector_menu_header_top").spectrum("get");
		/* ARREGLAR AKI PARA QUE SE CONSERVEN LOS VALORES SIN TENER QUE PULSAR EN CABECERA */
		valores_selects();
		valor_invert = $('#invert_logo').val();
		valor_contrast = $('#contrast_logo').val();
		valor_grayscale = $('#grayscale_logo').val();
		valor_saturate = $('#saturate_logo').val();
		/*valor_invert = valor_invert;
		valor_contrast = valor_contrast;
		valor_grayscale = valor_grayscale;
		valor_saturate = valor_saturate;*/
		/***********************************************************************************/
		
		// Cuerpo
		var new_color_body_background = $("#selector_body_background").spectrum("get");
		//new_color_body_background.toHexString();
		var new_color_titles = $("#selector_color_titles").spectrum("get");
		//new_color_titles.toHexString();
		var new_color_scroll = $("#selector_color_scroll").spectrum("get");
		//new_color_scroll.toHexString();
		var new_color_bloques = $("#selector_color_bloques").spectrum("get");
		var new_color_texto_bloques = $("#selector_color_texto_bloques").spectrum("get");
				
		// Tipografías
		var new_tipografia_body = $("#selecciona_tipo").val();
		
		cambio_estilos(new_color_header_nav, new_link_header_nav, new_menu_header_nav, new_color_header_top, new_link_header_top, new_menu_header_top, valor_invert, valor_contrast, valor_grayscale, valor_saturate, new_color_body_background, new_color_titles, new_color_scroll, new_color_bloques, new_color_texto_bloques, new_tipografia_body);
	});
	
	function valores_selects() {
		valores_logo = $('img.logo_cabecera').css('filter');
		valores_logo = valores_logo.split(')', 4);
		var selecciona_invert = valores_logo[0].replace(/\D/g,'');
		var selecciona_contrast = valores_logo[1].replace(/\D/g,'');
		var selecciona_grayscale = valores_logo[2].replace(/\D/g,'');
		var selecciona_saturate = valores_logo[3].replace(/\D/g,'');
		if(selecciona_invert.length > 1) {selecciona_invert = selecciona_invert.substring(0, 1) + '.' + selecciona_invert.substring(1, 2);}
		if(selecciona_contrast.length > 1) {selecciona_contrast = selecciona_contrast.substring(0, 1) + '.' + selecciona_contrast.substring(1, 2);}
		if(selecciona_grayscale.length > 1) {selecciona_grayscale = selecciona_grayscale.substring(0, 1) + '.' + selecciona_grayscale.substring(1, 2);}
		if(selecciona_saturate.length > 1) {selecciona_saturate = selecciona_saturate.substring(0, 1) + '.' + selecciona_saturate.substring(1, 2);}
		$('#invert_logo option[value="'+selecciona_invert+'"]').prop("selected","selected");
		$('#contrast_logo option[value="'+selecciona_contrast+'"]').prop("selected","selected");
		$('#grayscale_logo option[value="'+selecciona_grayscale+'"]').prop("selected","selected");
		$('#saturate_logo option[value="'+selecciona_saturate+'"]').prop("selected","selected");
	}
	
});
// API GoogleFonts
	function SetFonts(fonts) { 
		var valores_fuentes = [];
		var tipo_actual = $('html body').css('font-family').toString();
		tipo_actual = tipo_actual.replace(/\"/g, "");
		for(var i = 0; i < fonts.items.length; i++){
			valores_fuentes[i] = fonts.items[i].family;
			$('#selecciona_tipo, #selecciona_tipo_secun').append($("<option></option>").attr("value", fonts.items[i].family).text(fonts.items[i].family));
			if(fonts.items[i].family === tipo_actual) {
				$('#selecciona_tipo option[value="'+tipo_actual+'"]').prop("selected","selected");
			} /*else {
				$('#selecciona_tipo option[value="Open Sans"]').prop("selected","selected");
			}*/
		}
		
		// Para buscardor de fuentes de google fonts
		/*$('#texto_busca_fuente').on('change', function(){
			 $('#texto_busca_fuente').val(function(_,v){alert(v);
				 if(jQuery.inArray(v, valores_fuentes) !== -1){alert('dentro de if');
					 $("#selecciona_tipo option:selected").attr("selected", false);
					 $("#selecciona_tipo option[value='" + v + "']").attr("selected", true);
				 } else {
					 alert('Dentro de else');
				 }
			 });
		});*/
	}

// Cambiar valores
function cambio_estilos(color_header_nav, link_header_nav, menu_header_nav, color_header_top, link_header_top, menu_header_top, valor_invert, valor_contrast, valor_grayscale, valor_saturate, color_body_background, color_titles, color_scroll, color_bloques, color_texto_bloques, tipografia_body) {
	if (typeof color_header_nav === 'object') {color_header_nav = $('nav.navbar.first_navbar').css('background-color');}
	if (typeof link_header_nav === 'object') {link_header_nav = $('nav.navbar.first_navbar a').css('color');} 
	if (typeof menu_header_nav === 'object') {menu_header_nav = $('nav.navbar.first_navbar .dropdown-menu').css('background-color');} 
	if (typeof color_header_top === 'object') {color_header_top = $('nav.navbar.navbar-default').css('background-color');} 
	if (typeof link_header_top === 'object') {link_header_top = $('nav.navbar.navbar-default ul.nav.navbar-nav.pull-right li a').css('color');}
	if (typeof menu_header_top === 'object') {menu_header_top = $('nav.navbar.navbar-default .dropdown-menu').css('background-color');} 
	if (typeof color_body_background === 'object') {color_body_background = $('html body').css('background-color');}
	if (typeof color_titles === 'object') {color_titles = $('.panel-default > .panel-heading, .box.message table td.heading').css('color');}
	if (typeof color_scroll === 'object') {color_scroll = $('.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar').css('background-color');} 
	if (typeof color_bloques === 'object') {color_bloques = $('.block').css('background-color');}
	if (typeof color_texto_bloques === 'object') {color_texto_bloques = $('#page .content .block_tree li p a, #page span.eventname, #page .content .list li a').css('color');}

	$.ajax({
		type: 'POST',
		url: '/theme/pureiyc/change_colors.php',
		data: {ruta_hoja_estilos : ruta_hoja_estilos.toString(),
			   color_header_nav : color_header_nav.toString(),
			   link_header_nav : link_header_nav.toString(),
			   menu_header_nav : menu_header_nav.toString(),
			   color_header_top : color_header_top.toString(),
			   link_header_top : link_header_top.toString(),
			   menu_header_top : menu_header_top.toString(),
			   valor_invert : valor_invert.toString(),
			   valor_contrast : valor_contrast.toString(),
			   valor_grayscale : valor_grayscale.toString(),
			   valor_saturate : valor_saturate.toString(),
			   color_body_background : color_body_background.toString(),
			   color_titles : color_titles.toString(),
			   color_scroll : color_scroll.toString(),
			   color_bloques : color_bloques.toString(),
			   color_texto_bloques : color_texto_bloques.toString(),
			   tipografia_body : tipografia_body.toString()},
		success: function(data){
			console.log(data);
			location.reload();
		}
	});
}