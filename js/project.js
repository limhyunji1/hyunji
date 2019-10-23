$(document).ready(function (){
    $(".project_list li a").on('mouseenter', function () {
        $(this).addClass("one");
        $(".project_list li a").css({opacity: 0.2});
        $(this).css({opacity: 1});
        $(".project h2").addClass('boder');
    });
    $(".project_list li a").on('mouseleave', function () {
        $(this).removeClass("one");
        $(".project_list li a").css({opacity: 1});
        $(this).css({opacity: 1});
        $(".project h2").removeClass('boder');
    });

    $(".project_list .list1 a").on('mouseenter', function () {
        $(".project_list_1").addClass("onMouse");
        $(".bg").css({opacity: 1});
    });
    $(".project_list .list1 a").on('mouseleave', function () {
        $(".project_list_1").removeClass("onMouse");
        $(".bg").css({opacity: 0});
    });

    $(".project_list .list2 a").on('mouseenter', function () {
        $(".project_list_2").addClass("onMouse1");
        $(".bg").css({opacity: 1});
    });
    $(".project_list .list2 a").on('mouseleave', function () {
        $(".project_list_2").removeClass("onMouse1");
        $(".bg").css({opacity: 0});
    });

    $(".project_list .list3 a").on('mouseenter', function () {
        $(".project_list_3").addClass("onMouse2");
        $(".bg").css({opacity: 1});
    });
    $(".project_list .list3 a").on('mouseleave', function () {
        $(".project_list_3").removeClass("onMouse2");
        $(".bg").css({opacity: 0});
    });

    $(".project_list .list4 a").on('mouseenter', function () {
        $(".project_list_4").addClass("onMouse3");
        $(".bg").css({opacity: 1});
    });
    $(".project_list .list4 a").on('mouseleave', function () {
        $(".project_list_4").removeClass("onMouse3");
        $(".bg").css({opacity: 0});
    });
    
    $(".sns_list li a").on('mouseenter', function () {
        $(this).css({transform: 'rotate(360deg) scale(1.4)', transition: 'all .5s ease-in-out'});
    });
    $(".sns_list li a").on('mouseleave', function () {
        $(this).css({transform: 'rotate(0deg) scale(1)'});
    });

    $(window).on('resize', function(){
       var listHei = $('.project_list').innerHeight();
       $('.bg').css({height: listHei});
    });
    $(window).trigger('resize');

});