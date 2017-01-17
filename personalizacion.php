<?php
//filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();
$jquery_3 = '<script type="text/javascript" src="http://code.jquery.com/jquery-3.1.1.min.js"></script>';
$spectrum = '<script type="text/javascript" src="/theme/'.$CFG->theme.'/javascript/spectrum.js"></script><link rel="stylesheet" media="screen" type="text/css" href="/theme/'.$CFG->theme.'/style/spectrum.css" />';
$stylesheet = '<link rel="stylesheet" media="screen" type="text/css" href="/theme/'.$CFG->theme.'/style/personaliza.css" />';
$funcionalidad = '<script type="text/javascript" src="/theme/'.$CFG->theme.'/javascript/funciones.js"></script>';
$html = '<div class="rueda_personaliza"><img src="/theme/'.$CFG->theme.'/pix/personaliza/personaliza.svg" /></div>
<div class="capa_personaliza">
  	<!-- Botón cerrar -->
    <div class="cierra_capa_personaliza">
        <img src="/theme/'.$CFG->theme.'/pix/personaliza/cierra_personaliza.svg" />
    </div>
   	<!-- Menú lateral -->
	<div class="sidenav">
		<span id="config_barra_navegacion">Barra de navegación</span>
		<span id="config_cabecera">Cabecera</span>
		<span id="config_cuerpo">Cuerpo</span>
		<span id="config_tipos">Tipografía</span>
		<hr>
		
		<div class="contiene_parametros">
			<!-- Barra de navegación -->
			<div class="parametros parametros_barra_navegacion">
				<div class="colores color_para_header_nav">
					<h3>Color de fondo</h3>
					<input type="text" id="selector_header_nav" />
				</div>
				<div class="colores color_para_link_header_nav">
					<h3>Color texto</h3>
					<input type="text" id="selector_link_header_nav" />
				</div>
				<div class="colores color_para_menu_header_nav">
					<h3>Color de fondo del menú</h3>
					<input type="text" id="selector_menu_header_nav" />
				</div>
			</div>
			<!-- Cabecera -->
			<div class="parametros parametros_cabecera">
				<div class="colores color_para_header_top">
					<h3>Cabecera</h3>
					<input type="text" id="selector_header_top" />
				</div>
				<div class="colores color_para_link_header_top">
					<h3>Color texto</h3>
					<input type="text" id="selector_link_header_top" />
				</div>
				<div class="colores color_para_menu_header_top">
					<h3>Color de fondo del menú</h3>
					<input type="text" id="selector_menu_header_top" />
				</div>
				<br>
				<h4><u>Logotipo:</u></h4>
				<div class="colores color_para_logo_header_top">
					<h3>Invertir colores</h3>
					<select name="invierte_logo" id="invert_logo">
					  <option value="0" selected>0%</option> 
					  <option value="0.1">10%</option>
					  <option value="0.2">20%</option>
					  <option value="0.3">30%</option>
					  <option value="0.4">40%</option>
					  <option value="0.5">50%</option>
					  <option value="0.6">60%</option>
					  <option value="0.7">70%</option>
					  <option value="0.8">80%</option>
					  <option value="0.9">90%</option>
					  <option value="1.0">100%</option>
					</select>
				</div>
				<div class="colores color_para_logo_header_top">
					<h3>Contraste</h3>
					<select name="contraste_logo" id="contrast_logo">
					  <option value="0">0%</option> 
					  <option value="0.1">10%</option>
					  <option value="0.2">20%</option>
					  <option value="0.3">30%</option>
					  <option value="0.4">40%</option>
					  <option value="0.5">50%</option>
					  <option value="0.6">60%</option>
					  <option value="0.7">70%</option>
					  <option value="0.8">80%</option>
					  <option value="0.9">90%</option>
					  <option value="1" selected>100%</option>
					  <option value="1.1">110%</option> 
					  <option value="1.2">120%</option>
					  <option value="1.3">130%</option>
					  <option value="1.4">140%</option>
					  <option value="1.5">150%</option>
					  <option value="1.6">160%</option>
					  <option value="1.7">170%</option>
					  <option value="1.8">180%</option>
					  <option value="1.9">190%</option>
					  <option value="2">200%</option>
					</select>
				</div>
				<div class="colores color_para_logo_header_top">
					<h3>Escala de grises</h3>
					<select name="grises_logo" id="grayscale_logo">
					  <option value="0%" selected>0%</option> 
					  <option value="0.1">10%</option>
					  <option value="0.2">20%</option>
					  <option value="0.3">30%</option>
					  <option value="0.4">40%</option>
					  <option value="0.5">50%</option>
					  <option value="0.6">60%</option>
					  <option value="0.7">70%</option>
					  <option value="0.8">80%</option>
					  <option value="0.9">90%</option>
					  <option value="1.0">100%</option>
					</select>
				</div>
				<div class="colores color_para_logo_header_top">
					<h3>Saturación</h3>
					<select name="saturacion_logo" id="saturate_logo">
					  <option value="0%">0%</option> 
					  <option value="0.1">10%</option>
					  <option value="0.2">20%</option>
					  <option value="0.3">30%</option>
					  <option value="0.4">40%</option>
					  <option value="0.5">50%</option>
					  <option value="0.6">60%</option>
					  <option value="0.7">70%</option>
					  <option value="0.8">80%</option>
					  <option value="0.9">90%</option>
					  <option value="1" selected>100%</option>
					  <option value="1.5">150%</option>
					  <option value="2">200%</option>
					  <option value="2.5">250%</option>
					  <option value="3">300%</option>
					  <option value="3.5">350%</option>
					  <option value="4">400%</option>
					  <option value="4.5">450%</option>
					  <option value="5">500%</option>
					</select>
				</div>
			</div>
			<!-- Cuerpo -->
			<div class="parametros parametros_cuerpo">
				<div class="colores color_para_body_background">
					<h3>Color de Body</h3>
					<input type="text" id="selector_body_background" />
				</div>
				<div class="colores color_para_titles">
					<h3>Color de los títulos</h3>
					<input type="text" id="selector_color_titles" />
				</div>
				<div class="colores color_para_scroll">
					<h3>Color de la barra de scroll</h3>
					<input type="text" id="selector_color_scroll" />
				</div>
				<div class="colores color_para_bloques">
					<h3>Color de fondo de los bloques</h3>
					<input type="text" id="selector_color_bloques" />
				</div>
				<div class="colores color_para_texto_bloques">
					<h3>Color de texto de los bloques</h3>
					<input type="text" id="selector_color_texto_bloques" />
				</div>
			</div>
			<!-- Tipografías -->
			<div class="parametros parametros_tipos">
				<div class="tipos tipografia_body">
					<h3>Tipografía general del sitio: </h3>
					<select id="selecciona_tipo"></select>
					<!--<textarea id="texto_busca_fuente">Busca una fuente</textarea>-->
				</div>
			</div>
		</div>
		<div class="confirma_color" >Confirmar</div>
	</div>
</div>';

if(is_siteadmin()){
	$host = $_SERVER["REQUEST_URI"];
	if($host=='/') {
		echo $jquery_3;
		echo $spectrum;
		echo $stylesheet;
		echo $funcionalidad;
		echo $html;
	}	
}	
?>