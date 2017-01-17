<?php
// This file is part of The Bootstrap Moodle theme
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.



$hassidepre = $PAGE->blocks->region_has_content('side-pre', $OUTPUT);
$hassidepost = $PAGE->blocks->region_has_content('side-post', $OUTPUT);

$knownregionpre = $PAGE->blocks->is_known_region('side-pre');
$knownregionpost = $PAGE->blocks->is_known_region('side-post');

$regions = bootstrap_grid_1($hassidepre, $hassidepost);
$PAGE->set_popup_notification_allowed(false);
echo $OUTPUT->doctype();
require_once($CFG->dirroot .'/theme/'.$CFG->theme.'/personalizacion.php');

 ?>
<html <?php echo $OUTPUT->htmlattributes(); ?>>
<head>
    <title><?php echo $OUTPUT->page_title(); ?></title>
    <link rel="shortcut icon" href="<?php echo $OUTPUT->favicon(); ?>" />
    <?php echo $OUTPUT->standard_head_html(); ?>
    <link rel="stylesheet" media="screen" href="<?php echo $CFG->wwwroot . '/theme/'.$CFG->theme.'/style/theme.css'; ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui">
</head>

<body <?php echo $OUTPUT->body_attributes(); ?>>

<?php echo $OUTPUT->standard_top_of_body_html() ?>

<!----- Primera barra de navegación ------>
<nav class="navbar first_navbar">
    <div class="container-fluid">
        <div class="navbar-header pull-right">
            <?php echo $OUTPUT->user_menu(); ?>
        </div>
    </div>
</nav>
<!---------------------------------------->
    
<!----- Segunda barra de navegación ------>
<nav role="navigation" class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header pull-left">
            <a class="navbar-brand otro" href="<?php echo $CFG->wwwroot;?>">
                <img class="logo_cabecera" src="<?php echo $CFG->wwwroot . '/theme/'.$CFG->theme.'/pix/logo.svg'; ?>" />
            </a>
        </div>
        <div class="navbar-header pull-right">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#moodle-navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>

<!-- COMPRUEBA LA PÁGINA DE LOGIN PARA INSERTAR IMAGEN -->
<?php 
        $file = $_SERVER["REQUEST_URI"];
        if(strpos($file,"login/index.php") == false) { ?>            
            <style type="text/css">
                    body {
                        background-image:none;
                    }
                    #page h1 {
                        opacity: 1;
                    }
                        </style>
      <?php  }        else  {      ?>        
            <style type="text/css">
                body {
                        background-image: url("<?php echo $CFG->wwwroot . '/theme/'.$CFG->theme.'/pix/fondo_portada.jpg'; ?>");
                    }
                    #page h1 {
                        opacity: 0;
                    }
				#page {
					background-color: transparent;
				}
                </style>
        <?php } ?>
            
<!--------------------------------------------------------->
        
<!-------------MENÚ------------------>
        
        <div id="moodle-navbar" class="navbar-collapse collapse navbar-right">
            <ul class="nav navbar-nav pull-right">
                <?php if (isloggedin()) { ?>
                    <li><a href="<?php echo $CFG->wwwroot; ?>/my">Área Personal</a></li>
                        
                <?php } else { ?>
                <li><a href="<?php echo $CFG->wwwroot; ?>">Página principal</a></li><?php } ?>
                <li><a href="<?php echo $CFG->wwwroot; ?>/ayuda">Ayuda</a></li>
                    <?php if (isloggedin()){ ?>
                        <?php if (is_siteadmin($USER))
                            { ?>
                            <li class="dropdown" id="muestro_1" title="Haga click para acceder a las opciones de administración"><a data-toggle="dropdown">Administrar<b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a class="c-admin" href="<?php echo $CFG->wwwroot; ?>/admin/user.php">Usuarios</a></li>
                                <li class="divider" role="presentation"></li>
                                <li><a class="c-admin" href="<?php echo $CFG->wwwroot; ?>/course/management.php">Cursos y categorías</a></li>
                                <li class="divider" role="presentation"></li>
                                <li><a class="c-admin" href="<?php echo $CFG->wwwroot; ?>/backup/restorefile.php?contextid=<?php echo $USER->id; ?>">Restaurar cursos</a></li>
                            </ul>
                            </li>                       
                        <?php } ?>
                        <?php if ($COURSE->id != 1)
                        { ?>
                            <li class="dropdown" id="muestro_2"><a data-toggle="dropdown" title="Acceda a las opciones de <?php echo $COURSE->fullname ?>"><?php echo $COURSE->shortname ?><b class="caret"></b></a>
                            <ul class="dropdown-menu">
                            <?php 
				// Obtenemos el contexto del curso.
				$sql_course_context = "SELECT id FROM " . $CFG->prefix . "context " . 
					"WHERE contextlevel = 50 AND instanceid = " . $COURSE->id;
                global $DB;             
				$course_context = $DB->get_record_sql($sql_course_context);

				if (user_has_role_assignment($USER->id, 5, $course_context->id))
                            { ?>
                                <li><a class="c-usu" href="<?php echo $CFG->wwwroot . '/report/icprogreso/index.php?id=' . $COURSE->id ?>'">Mis calificaciones</a></li>
                                <li class="divider" role="presentation"></li>
                            <?php }
                            else
                            { ?>
                                <li><a class="c-usu" href="<?php echo $CFG->wwwroot . '/report/icprogreso/index.php?id=' . $COURSE->id ?>'">Seguimiento</a></li>
                                <li class="divider" role="presentation"></li>
                        <?php } ?>


        <?php if (is_siteadmin($USER))
        { ?> 
                                <li><a class="c-usu c-admin" href="<?php echo $CFG->wwwroot; ?>/enrol/users.php?id=<?php echo $COURSE->id ?>">Matricular Alumnos</a></li>
                                <li class="divider" role="presentation"></li>
                                <li><a class="c-usu c-admin" href="<?php echo $CFG->wwwroot; ?>/group/index.php?id=<?php echo $COURSE->id ?>" role="menuitem">Administrar Grupos</a></li>
                                </ul>
        <?php } ?>
                        </li>
    <?php } ?>
                    <?php } ?>
            </ul>
            </div>
<!---------------Fin menú--------------------->
        </div>
    </div>
</nav>
<!---------------Fin segunda barra de navegación--------------------->
    
<header class="moodleheader">
    <div class="container-fluid">
    <a href="<?php echo $CFG->wwwroot ?>" class="logo"></a>
    <?php /*echo $OUTPUT->page_heading();*/ ?>
    </div>
</header>

<div id="page" class="container-fluid">
    <header id="page-header" class="clearfix">
        <div id="page-navbar" class="clearfix">
            <nav class="breadcrumb-nav" role="navigation" aria-label="breadcrumb"><?php echo $OUTPUT->navbar(); ?></nav>
            <div class="breadcrumb-button"><?php echo $OUTPUT->page_heading_button(); ?></div>
        </div>

        <div id="course-header">
            <?php echo $OUTPUT->course_header(); ?>
        </div>
        
    </header>
    
    
    <!-- TÍTULO DEL CURSO DEBAJO DE BREADCRUMB -->
    <div class="tituloheader"><?php echo $OUTPUT->page_heading(); ?></div>
    <!------------------------------------------>
    
    
    <div id="page-content" class="row">
        <div id="region-main" class="<?php echo $regions['content']; ?>">
            <?php
            echo $OUTPUT->course_content_header();

            echo $OUTPUT->main_content();
            echo $OUTPUT->course_content_footer();
            ?>
        </div>

        <?php
        if ($knownregionpre) {
            echo $OUTPUT->blocks('side-pre', $regions['pre']);
        }?>
        <?php
        if ($knownregionpost) {
            echo $OUTPUT->blocks('side-post', $regions['post']);
        }?>
    </div>

    <footer id="page-footer">
        <div id="course-footer"><?php echo $OUTPUT->course_footer(); ?></div>
        <p class="helplink"><?php echo $OUTPUT->page_doc_link(); ?></p>
        <?php
        echo $OUTPUT->login_info();
        echo $OUTPUT->home_link();
        echo $OUTPUT->standard_footer_html();
        ?>
    </footer>

    <?php echo $OUTPUT->standard_end_of_body_html() ?>

</div>
</body>
</html>
