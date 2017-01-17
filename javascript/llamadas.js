    var dispositivo = navigator.userAgent.toLowerCase();
    var posicion_scroll = (window.location.href).toString().split('#');
    var yposscroll;
    var libreria_bootstrap = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';

    //$(window).load(function(){
        $.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
        if(dispositivo.search(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/) > -1){
            $('body').mCustomScrollbar("destroy");
            if($('#page-mod-scorm-player').length > 0){
                $('#scorm_toc').mCustomScrollbar({
                    mouseWheelPixels: 180,
                    keyboard:{
                        scrollType:"stepless",
                        scrollAmount: 50
                    },
                    theme:"inset-dark",
                    axis:"y"
                    });
                $('#scorm_toc').mCustomScrollbar("update");
            } else {
                $('body').mCustomScrollbar("destroy");
            }
        } else {
            if($('#page-mod-scorm-player').length > 0){
                $('#scorm_toc').mCustomScrollbar({
                    mouseWheelPixels: 180,
                    keyboard:{
                        scrollType:"stepless",
                        scrollAmount: 50
                    },
                    theme:"inset-dark",
                    axis:"y"
                    //mouseWheel:{ scrollAmount: 180 }
                    });
                $('#scorm_toc').mCustomScrollbar("update");
            } else {
                if(posicion_scroll[1]!=undefined) {
                    yposscroll = $('#'+posicion_scroll[1]).offset().top;    
                } else {
                    yposscroll = 0;
                }
                $('body').mCustomScrollbar({
                    mouseWheelPixels: 180,
                    keyboard:{
                        scrollType:"stepless",
                        scrollAmount: 50
                    },
                    theme:"inset-dark",
                    axis:"y",
                    setTop:yposscroll
                    //mouseWheel:{ scrollAmount: 120 }
                    });
                $('body').mCustomScrollbar("update");
                $('body').mCustomScrollbar("scrollTo",yposscroll+'px');
            }            
        }
        
    //});

    /* Controlo si se ha cargado previamente bootstrap en moodle para no cargar mi librería */
    $(window).on('load',function (){
        var codigo_fuente = document.getElementsByTagName('html')[0].innerHTML;
        var ha_cargado_bootstrap = 'theme_bootstrapbase/bootstrap';
            codigo_fuente = String(codigo_fuente);
            if(codigo_fuente.search(ha_cargado_bootstrap) == -1) {
                $(document.head).append('<script src="' + libreria_bootstrap + '" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>');
                //alert('ha cargado bootstrap ultimo');
            } else {
                //alert('aqui no cargues nada');                
            }
    });

/*controla_width();
window.addEventListener("resize", controla_width);

function controla_width(){
     if ((window.innerWidth>768) && (window.innerWidth<1281)) {
        document.querySelector('aside#block-region-side-pre').className = "col-sm-3 col-sm-pull-9 col-lg-3 col-lg-pull-9 block-region";
        document.querySelector('div#region-main').className = "col-sm-9 col-sm-push-3 col-lg-9 col-lg-push-3";
         if(document.querySelector('aside#block-region-side-post')){
            document.querySelector('aside#block-region-side-post').className = "col-sm-3 col-sm-pull-9 col-lg-3 col-lg-pull-9 block-region";    
         }
        //document.querySelector('aside#block-region-side-post').className = "col-sm-3 col-lg-3 block-region";
    } else {
        document.querySelector('aside#block-region-side-pre').className = "col-sm-3 col-sm-pull-6 col-lg-2 col-lg-pull-8 block-region";
        document.querySelector('div#region-main').className = "col-sm-6 col-sm-push-3 col-lg-8 col-lg-push-2";
        if(document.querySelector('aside#block-region-side-post')){
            document.querySelector('aside#block-region-side-post').className = "col-sm-3 col-lg-2 block-region";    
        }
        //document.querySelector('aside#block-region-side-post').className = "col-sm-3 col-lg-2 block-region";
    }
}*/




