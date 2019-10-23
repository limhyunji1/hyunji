$(document).ready(function() {
  //모달 열기 클릭 이벤트
  $(".menu .open_btn").click(function(){
      $("#modal").show();
      $(".modal_txt").show('fast');
  });
  $(".close_btn").click(function(){
      $("#modal").hide();
      $(".modal_txt").hide();
  });
  
  /* Esc키 누르면 닫기기 */
  $(window).on('keydown', function (e) {
    if (e.keyCode == 27) $('.close_btn').click();
  });
});

