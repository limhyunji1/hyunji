$(document).ready(function (){
    $(".sns_list li a").on('mouseenter', function () {
        $(this).css({transform: 'rotate(360deg) scale(1.4)', transition: 'all .5s ease-in-out'});
    });
    $(".sns_list li a").on('mouseleave', function () {
        $(this).css({transform: 'rotate(0deg) scale(1)'});
    });

    $(".project a").on('mouseenter', function () {
        $(this).addClass("mHover");
    });
    $(".project a").on('mouseleave', function () {
        $(this).removeClass("mHover");
    });

    $(".txt_r a.fir1").on('mouseenter', function () {
        $("span.fir2").css({width: 0});
    });
    $(".txt_r a.fir1").on('mouseleave', function () {
        $("span.fir2").css({width: '75px'});
    });

    $(".txt_r a.sec1").on('mouseenter', function () {
        $("span.sec2").css({width: 0});
    });
    $(".txt_r a.sec1").on('mouseleave', function () {
        $("span.sec2").css({width: '75px'});
    });

    $(window).on('scroll', function() {
        var scrollT = $(this).scrollTop();
        var move = (-400/$(window).height())*scrollT
        $('#mega_moveImg .moveImg').css('transform', 'translateY('+move+'px)');
    });

    
});