$(function () {

	/* ---------- 기본 사용 ---------- */

	$(".basic .slider").bxSlider();


	/* ---------- 좌우 컨트롤 ---------- */
	$(".control .slider").bxSlider({
		// controls:false,
		//nextText:'다음',
		//prevText:'이전'
		prevSelector: '.control .prev',
		nextSelector: '.control .next',
	});

	/* ---------- 멀티플 슬라이드 ---------- */
	$(".multiple .slider").bxSlider({
		pager: false,
		minSlides: 2,
		maxSlides: 3,
		slideWidth: 320,
		slideMargin: 20,
		moveSlides: 1
	});


	/* ---------- 현재 슬라이드 구분하기 ---------- */
	$('.activeSlide .slider').bxSlider({
		pager: false
	});

	/* ---------- 슬라이드 옵션 활용 이전,다음, 슬라이드 이동 ---------- */
	$('.option .slider').bxSlider({
		auto : true,
		speed : 1200,
		pause : 4000,
		autoHover : true,
		pager: false,
		//열자마자는 작동이 되지 않으므로 열자마자 할일
		//복사본이 있어서 앞에 하나가 더 있어서 +을 해줘야 처음 보는 것에 active를 붙일수있다.
		onSliderLoad:function(currentIdx){
			$('.option .slide').eq(currentIdx + 1).addClass('active');
		},
		onSlideAfter:function($slideElement){  //슬라이드가 이동 후 실행.
			
			//모든슬라이드에서 active를 뺴고 현재슬라이드에만 active넣어보자.
			$('.option .slide').removeClass('active');
			$slideElement.addClass('active');
		}
	});

	/* ---------- 메서드(함수) 슬라이드 ---------- */
	let methodSlider = $('.method .slider').bxSlider({
		pager:false,
		controls:false,

	});

	$('#prev').click(function(){
		methodSlider.goToPrevSlide();
	});

	$('#next').click(function(){
		methodSlider.goToNextSlide();
	});

	$('.pager button').click(function(){
		methodSlider.goToSlide($(this).index())

	});

	/* ---------- 동영상 제어하기 ---------- */
	/*슬라이드가 이동하면 할일
	모든 슬라이드 안의 video를 멈추고
	현재 슬라이드 안의 video를 재생
	*/
	
	$(".video .slider").bxSlider({
		//현재 슬라이드 확인.
		onSlideAfter:function($slideElement){  //현재슬라이드-> $slideElement
			
			//모든 슬라이드 안의 비디오 대상
			$('.video .slide').each(function(){
				if($(this).find('video').length > 0){
					$(this).find('video').get(0).pause();
					$(this).find('video').get(0).currentTime = 0;
				}
			})


		
			//참고로 $slideElement.find('video').get(0) 는
			//<video src="video/vivaldi.mp4" loop=""> </video>

			//현재 활성화 슬라이드에 비디오가 있는 경우 대상
			if($slideElement.find('video').length > 0){
				$slideElement.find('video').get(0).play();

				// console.log($slideElement.find('video').get(0))
			}
		}
	});


	//다시한번....? 왜 순서가 바뀌면 되는 이유?
	
	$('.tabslider').bxSlider();
	$( "#tabs" ).tabs(); //tabs에는 다른것들은 못보게하는 display none이 있다.




});//document ready jquery 