$(document).ready(function() {
    $(window).on('load resize', function () {
      var marTop = 3884 - $(window).height();   //svg이미지 높이 3884
      $('#svgLine svg').stop().animate({marginTop: -marTop}, 50000);
    });
    
    
    var colorChange = [['#E25405', '#FF7217'], ['#039e07', '#19d51d'], ['#1957d5', '#548cff']];
    $('#fp-nav ul li a').on('click', function (e) {
      e.preventDefault();
      alert("");
      var tgIdx = $(this).parent().index();
      console.log(tgIdx, colorChange[tgIdx][0], colorChange[tgIdx][1])
      $('.dark').css({fill: colorChange[tgIdx][0],stroke:colorChange[tgIdx][0]});
      $('.white').css({fill: colorChange[tgIdx][1],stroke:colorChange[tgIdx][1]});
    });
});

//#fp-nav > ul > li:nth-child(1) > a