$(document).ready(function() {

    $(document).on('mousemove', function(e){
        $('.mouse').css({
           left:  e.pageX,
           top:   e.pageY
        });
    });

    $("a").on("mouseenter", function(){
        $(".cursor-follower").addClass("mhover");
    });

    $("a").on("mouseleave", function(){
        $(".cursor-follower").removeClass("mhover");
    });

    $("button").on("mouseenter", function(){
        $(".cursor-follower").addClass("mhover");
    });

    $("button").on("mouseleave", function(){
        $(".cursor-follower").removeClass("mhover");
    });
    


    $(".ham_menu").on("click", function(){
        $(this).toggleClass("open");
        $(".menu").toggleClass("active");
        $("a").toggleClass("change");
        $(".scroll").toggleClass("hide");
        $(".section").toggleClass("hide");
    });
});