/*클래스명 추가
대상.addClass('클래스명);

클래스명 제거
대상.removeClass('클래스명');

있으면 추가, 없으면 제거
대상.toggleClass('클래스명);

유무 여부
대상.hasClass('클래스명');

//속셩 추출, 변경. attr('~~~') 과 attr(' ', ____ )
*/

//방법1
const tabMenu = $('.tab-menu a');
const tabContents = $('#tab-content > div');

tabMenu.click(function(e){
	e.preventDefault();

	tabMenu.removeClass('active');
	$(this).addClass('active');

	//모든 tabContents에서 active를 제거
	//아이디 tabs-2에 클래스명 active를 추가해보자
	tabContents.removeClass('active');
	let targetId = $(this).attr('href'); //tabs-1, tabs-2 ...
	$(targetId).addClass('active');

});





// var tabLink = $('.tab-menu li'),
// 	tabContent = $('#tab-content > div');

// tabLink.click(function(e){
// 	e.preventDefault();
// 	tabLink.children('a').removeClass('active');
// 	$(this).find('a').addClass('active');

// 	//var targetID = $(this).find('a').attr('href'); 
// 	var targetIdx = $(this).index(); //1
// 	tabContent.hide(); 
// 	//$(targetID).show();
// 	tabContent.eq(targetIdx).show(); //2

// });

// tabContent.eq(0).show();