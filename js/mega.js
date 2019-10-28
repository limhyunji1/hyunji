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
        if (scrollT > 500) $('.btn_top').addClass('view');
        else $('.btn_top').removeClass('view');

        var logoPos = $('.txt').offset().top - 600;
         if (scrollT > logoPos) $('.logo a').addClass('on');
         else $('.logo a').removeClass('on');

        var chap1Pos = $('#chap1 .chap_txt').offset().top - 600;
         if (scrollT > chap1Pos) $('#chap1 .chap_txt').addClass('on');
         else $('#chap1 .chap_txt').removeClass('on');

        var chap1txtPos = $('#chap1 .txt_box1').offset().top - 600;
         if (scrollT > chap1txtPos) $('#chap1 .txt_box1').addClass('on');
         else $('#chap1 .txt_box1').removeClass('on');

        var mobilePos = $('#chap1 .txt_box1').offset().top - 600;
         if (scrollT > mobilePos) $('#chap1 .mobile').addClass('on');
         else $('#chap1 .mobile').removeClass('on');

        var chap2Pos = $('#chap2').offset().top - 600;
         if (scrollT > chap2Pos) $('#chap2').addClass('on');
         else $('#chap2').removeClass('on');


    });
    $('.btn_top').on('click', function () {
        $('html, body').stop().animate({scrollTop: 0});
        return false;
    });
});