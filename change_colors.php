<?php
ini_set('track_errors', 1); 
	$ruta_hoja_estilos = $_POST['ruta_hoja_estilos'];
	$color_header_nav = $_POST['color_header_nav'];
	$link_header_nav = $_POST['link_header_nav'];
	$menu_header_nav = $_POST['menu_header_nav'];
	$color_header_top = $_POST['color_header_top'];
	$link_header_top = $_POST['link_header_top'];
	$menu_header_top = $_POST['menu_header_top'];
	$valor_invert = $_POST['valor_invert'];
	$valor_contrast = $_POST['valor_contrast'];
	$valor_grayscale = $_POST['valor_grayscale'];
	$valor_saturate = $_POST['valor_saturate'];
	$color_body_background = $_POST['color_body_background'];
	$color_titles = $_POST['color_titles'];
	$color_scroll = $_POST['color_scroll'];
	$color_bloques = $_POST['color_bloques'];
	$color_texto_bloques = $_POST['color_texto_bloques'];
	$tipografia_body = $_POST['tipografia_body'];
	$import_tipografia_body = str_replace(" ", "+", $tipografia_body);
	$contenido = "
	@import url(http://fonts.googleapis.com/css?family=$import_tipografia_body);
		nav.navbar.first_navbar, #scorm_toc_title {
			background: $color_header_nav;
		}
		#scorm_toc_title {
			background: $color_header_nav !important;
		}
		nav.navbar.first_navbar a {
			color: $link_header_nav;
		}
		nav.navbar.first_navbar .dropdown-menu {
			background-color: $menu_header_nav;
		}
		nav.navbar.navbar-default {
			background: $color_header_top;
		}
		nav.navbar.navbar-default ul.nav.navbar-nav.pull-right li a {
			color: $link_header_top
		}
		nav.navbar.navbar-default .dropdown-menu, .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {
			background-color: $menu_header_top;
		}
		img.logo_cabecera {
			-webkit-filter: invert($valor_invert) contrast($valor_contrast) grayscale($valor_grayscale) saturate($valor_saturate);
			-ms-filter: invert($valor_invert) contrast($valor_contrast) grayscale($valor_grayscale) saturate($valor_saturate);
			filter: invert($valor_invert) contrast($valor_contrast) grayscale($valor_grayscale) saturate($valor_saturate);
		}
		html body, #page {
			background-color: $color_body_background;
			font-family: $tipografia_body;
		}
		.panel-default > .panel-heading, .box.message table td.heading, .box.message .messagearea .messagerecent .singlemessage .otheruser, .block .header, #dockeditempanel .dockeditempanel_hd, h3, h3 a, h4, h4 a, .panel-default > .panel-heading .coursename a, .breadcrumb, a {
			color: $color_titles;
		}
		.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
			background-color: $color_scroll;
		}
		.block {
			background-color: $color_bloques;
			padding: .5em;
		}
		#page .content .block_tree li p a, #page span.eventname, #page .content .list li a, .block_site_main_menu .instancename, .block_navigation .block_tree .tree_item, .block_navigation .block_tree .tree_item.branch, .block_settings .block_tree .tree_item  {
			color: $color_texto_bloques;
		}
	";
	//$contenido = str_replace($color_primario, $nuevo_color_primario, $contenido);
	//$contenido = str_replace($color_secundario, $nuevo_color_secundario, $contenido);
	file_put_contents($ruta_hoja_estilos, $contenido) or die ($php_errormsg);
	echo $ruta_hoja_estilos . ' + ' . $color_header_nav . ' + ' . $link_header_nav . ' + ' . $color_header_top . ' + ' . $color_body_background . ' + ' . $color_titles . ' + ' . $tipografia_body;

?>