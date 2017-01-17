    var dispositivo = navigator.userAgent.toLowerCase();
    $(window).load(function(){
        $.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
        
        if(dispositivo.search(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/) > -1){
            $('body').mCustomScrollbar("destroy");
            if($('#page-mod-scorm-player').length > 0){
                $('#scorm_toc').mCustomScrollbar({
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
                    theme:"inset-dark",
                    axis:"y"
                    //mouseWheel:{ scrollAmount: 180 }
                    });
                $('#scorm_toc').mCustomScrollbar("update");
            } else {
                $('body').mCustomScrollbar({
                    theme:"inset-dark",
                    axis:"y"
                    //mouseWheel:{ scrollAmount: 180 }
                    });
                $('body').mCustomScrollbar("update");
            }            
        }
        
    });        


