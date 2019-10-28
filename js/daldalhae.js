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

    var gifPos;
    var gifCssPos;
    var mockOffTop;
    var mockHei;
    $(window).on('load resize', function () {
        gifPos = $('#gif').offset().top;
        gifCssPos = parseInt($('#gif').css('top'));
        mockOffTop = $('.mock_up').offset().top;
        mockHei = $('.mock_up').height();
        console.log('gif 위치 : ' + gifCssPos, ', gif offset().top: ' + gifPos );
    });

    $(window).on('scroll', function () {
        var scrollT = $(this).scrollTop();
        if (scrollT < gifPos) {
            $('#gif').removeClass('fade');
        }
        else if (scrollT < mockOffTop + (mockHei * 0.78 - 281)) {  //0.1 : 모니터 다리비율 (1-0.1=0.9), 281 : #gif 이미지높이
            $('#gif').addClass('fade');
            $('#gif').css('top', gifCssPos + (scrollT - gifPos) * 0.8 + 200);
            //console.log('목업위치 : ' + mockOffTop + ', 목업높이 : ' + mockHei + ', 스크롤바 : ' + scrollT +  ', 추가될 좌표 : '+ (scrollT - gifPos) * 0.8);
        }
        /* TOP 버튼 */
        if (scrollT > 500) $('.btn_top').addClass('view');
        else $('.btn_top').removeClass('view');

        
 
         //스크롤 이벤트
         var logoPos = $('.txt').offset().top - 600;
         if (scrollT > logoPos) $('.logo a').addClass('on');
         else $('.logo a').removeClass('on');

         var txtPos = $('#chap2 .txt_box3').offset().top - 600;
         if (scrollT > txtPos) $('#chap2 .txt_box3').addClass('on');
         else $('#chap2 .txt_box3').removeClass('on');

         var bgPos = $('#chap2 .bg').offset().top - 600;
         if (scrollT > bgPos) $('#chap2 .bg').addClass('on');
         else $('#chap2 .bg').removeClass('on');

         var chap3Pos = $('#chap3').offset().top - 600;
         if (scrollT > chap3Pos) $('#chap3 .txt_box4').addClass('on');
         else $('#chap3 .txt_box4').removeClass('on');

         var boxPos = $('#chap3 .txt_box4').offset().top - 400;
         if (scrollT > boxPos) $('#chap3 .color_box').addClass('on');
         else $('#chap3 .color_box').removeClass('on');
    });


    $('.btn_top').on('click', function () {
        $('html, body').stop().animate({scrollTop: 0});
        return false;
    });
});