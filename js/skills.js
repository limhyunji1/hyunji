$(document).ready(function (){
    //visual
    $("#visual > div").on('mouseenter', function () {
        $(this).stop().animate({width: '70%'}, 400, 'easeInOutCirc').siblings().stop().animate({width: '30%'}, 400, 'easeInOutCirc');
    });
    $(window).on('load resize', function () {
        $('#visual .progress').css('width', $(this).width()*0.28);
    });

    $("#visual").on('mouseleave', function () {
        $(this).children().stop().animate({width: '50%'});
    });

    $("#visual .left").on('mouseenter', function () {
        $('#visual .pub h3').addClass("pub_over");
        $('.fix_txt').addClass("dn2");
        $('.des_circle .circle h4').addClass("dn2");
        
    });
    $("#visual .left").on('mouseleave', function () {
        $('#visual .pub h3').removeClass("pub_over");
        $('.fix_txt').removeClass("dn2");
        $('.des_circle .circle h4').removeClass("dn2");
    });

    
    $("#visual .right").on('mouseenter', function () {
        $('#visual .des h3').addClass("des_over");
        $('.fix_txt').addClass("dn");
        $('.pub_circle .circle h4').addClass("dn");
    });
    $("#visual .right").on('mouseleave', function () {
        $('#visual .des h3').removeClass("des_over");
        $('.fix_txt').removeClass("dn");
        $('.pub_circle .circle h4').removeClass("dn");
    });

    $(".circle").on({
        mouseenter : function () {
            $(this).next().addClass('hOpen');
        },
        mouseleave : function () {
            $(this).next().removeClass('hOpen');
        }
    });

});