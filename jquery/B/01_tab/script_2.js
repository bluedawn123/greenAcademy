/*클래스명 추가
대상.addClass('클래스명);

클래스명 제거
대상.removeClass('클래스명');

있으면 추가, 없으면 제거
대상.toggleClass('클래스명);

유무 여부
대상.hasClass('클래스명');

*/

/*
1.
a.find(b)  ===> a요소의 자식요소 선택. 
li .acitve와 같다. 즉, li 중 .active를 갖은 녀석
$('li').children(a)

2.
a.filter(b) ===> a요소 '중' b를 선택. li.active처럼 공백이 없는 경우
li:last-child
$('li').filter(':last-child') 두개는 같다.

3. 부모요소 선택
a.parent()  a의 바로 위 부모

4. 형제요소 선택
a.siblings() a의 모든 형제선택

5.이전요소
a.prev()  ===> a의 이전요소
a.next()  ===> b의 다음요소

6.인덱스 번호 확인----------------->반드시 형제가 있을떄만 사용가능
a.index()  ===> a의 인덱스 확인

7.인덱스번호 선택
x.eq(숫자)  => x 요소의 숫자 선택


//속셩 추출, 변경. attr('~~~') 과 attr(' ', ____ )
*/


//방법2
const tabMenu = $('.tab-menu li');     // li는 3개고, a는 하나므로 해당방식 불가
const tabContents = $('#tab-content > div');

tabMenu.click(function(e){
	e.preventDefault();

	tabMenu.find('a').removeClass('active');	
	$(this).children('a').addClass('active');
	
	tabContents.removeClass();
	tabContents.eq( $(this).index() ).addClass('active');
	/*
	즉, 클릭 => tabcontents(해당인덱스) 가져와서 active 붙이는 방식
	*/

});





