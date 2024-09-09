let target = $('.animation');

/*
윈도우에 스크롤이 생기면 할일.
스크롤양을 SCT변수에 할당.
target들마다 할일
스크롤양이 target의 각 요소가 화면 상단에서 떨어진 거리에서
400뺸 값보단 많다면 그 요소에 active를 추가.
*/

$(window).scroll( function(){
    let sct = $(this).scrollTop();
    target.each(function(){
        if($(this).offset().top - 400 <= sct){
            $(this).addClass('active');
        }
    })
})