$(document).ready(function () {
	$(window).on('load resize', function () {
		var marTop = 3884 - $(window).height();   //svg이미지 높이 3884
		$('#svgLine svg').stop().animate({marginTop: -marTop}, 50000);
	});
      
    var colorChange = [['#7524b3', '#B168E8'], ['#B33E5A', '#FF5763'], ['#7B8A1E', '#C8CA30'], ['#3a91ab', '#4bbbdd']];

	$('#fullpage').fullpage({
	  navigationPosition: 'left',
	  navigation: true,
	  navigationTooltips: ['L', 'E', 'P', 'L'], //인디케이터옆 설명 텍스트
	  /* https://github.com/alvarotrigo/fullPage.js 참고
		afterLoad (origin, destination, direction)
		구역을 불러오고 나서 스크롤이 끝나면 콜백이 실행됩니다. 
		매개 변수:
		origin: (Object) 활성화된 구역
		destination: (Object) 목적지 구역.
		direction: (String) 스크롤하는 방향에 따라 up 또는 down

		onLeave (origin, destination, direction)
		사용자가 구역을 떠나고 새로운 구역으로 이동하는 와중에 콜백이 실행됩니다. false로 되돌리면 발동하기 전에 취소됩니다.
		매개 변수:
		origin: (Object) 출발 구역.
		destination: (Object) 목적지 구역.
		direction: (String) 스크롤하는 방향에 따라 up 또는 down */
	  afterLoad : function(origin, destination, direction){	//마우스 휠 내리기
		var leavingSection = this;
		if((origin.index == 1 && direction == 'up')){
			//alert("첫번째 영역");
			$('.dark').css({fill: colorChange[0][0],stroke:colorChange[0][0]});
			$('.white').css({fill: colorChange[0][1],stroke:colorChange[0][1]});
		} else if ((origin.index == 2 && direction == 'up')){
			//alert("두번째 영역");
			$('.dark').css({fill: colorChange[1][0],stroke:colorChange[1][0]});
			$('.white').css({fill: colorChange[1][1],stroke:colorChange[1][1]});
		} else if ((origin.index == 3 && direction == 'up')){
			//alert("세번째 영역");
			$('.dark').css({fill: colorChange[2][0],stroke:colorChange[2][0]});
			$('.white').css({fill: colorChange[2][1],stroke:colorChange[2][1]});
		} else if ((origin.index == 4 && direction == 'up')){
			//alert("네번째 영역");
			$('.dark').css({fill: colorChange[3][0],stroke:colorChange[3][0]});
			$('.white').css({fill: colorChange[3][1],stroke:colorChange[3][1]});
		}
	  },
	  onLeave : function(origin, destination, direction){	//마우스 휠 올리기
		var leavingSection = this;
		if ((destination.index == 1 && direction == 'down')){
			//alert("두번째 영역");
			$('.dark').css({fill: colorChange[1][0],stroke:colorChange[1][0]});
			$('.white').css({fill: colorChange[1][1],stroke:colorChange[1][1]});
		} else if ((destination.index == 2 && direction == 'down')){
			//alert("세번째 영역");
			$('.dark').css({fill: colorChange[2][0],stroke:colorChange[2][0]});
			$('.white').css({fill: colorChange[2][1],stroke:colorChange[2][1]});
		} else if ((destination.index == 3 && direction == 'down')){
			//alert("네번째 영역");
			$('.dark').css({fill: colorChange[3][0],stroke:colorChange[3][0]});
			$('.white').css({fill: colorChange[3][1],stroke:colorChange[3][1]});
		}
	  },
	});
});