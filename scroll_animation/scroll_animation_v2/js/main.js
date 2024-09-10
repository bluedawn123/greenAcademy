let target = $('.animate__animated');

/*
윈도우 스크롤 생김 할일
스크롤양을 변수 sct로
각 target들은 
만약 target의 각 요소가 화면상단에서의 거리에서 
400뺀거보다 많으면, 
변수 effectName에 그 요소의 효과클래스명을 할당하고
effectName 의 클래스명을 target의 각 요소에 추가한다.
*/

$(window).scroll( function(){
    let $this = $(this);            //이 this는 윈도우상의 this
    let sct = $this.scrollTop();

    
    target.each(function(){
        if($(this).offset().top - 400 <= sct){  //여기의 $(this)는 각 target의 this

                // 각 target 요소에 있는 효과 클래스를 추출
                var effectName = $(this).attr('data-effect')
                // var effectName = target.dataset.effect; 예: data-effect="fade-in"

                $(this).addClass(effectName);
        }
    })
})