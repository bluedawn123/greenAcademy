const slideWrapper = $('.slide-wrapper'),
    slideContainer = slideWrapper.find('.slide-container'),
    slides = slideContainer.find('li'),
    slideCount = slides.length,
    prevBtn = slideWrapper.find('#prev'),
    nextBtn = slideWrapper.find('#next'),
    pager = slideWrapper.find('.pager');


let pagerHTML = '';
let currentIdx = 0;

    /*
    대상.width()  너비
    대상.innerwidth()  너비
    대상.outerwidth()  너비
    대상.outerwidth(true)  너비
    
    대상.each( function(index){
    
    제이쿼리에서 요소 생성
    대상.html(값)
    })
    
     */


function setLayOut(){
    //slideContainer의 너비 지정
    //$('div')css({"background-color":"yellow","width":"100px"});
    let slideWidth = slideWrapper.outerWidth() * slideCount;
    slideContainer.css({ width: slideWidth + 'px' })
}
setLayOut();

$(window).resize(function(){
    setLayOut();
})


//페이저생성하기
slides.each(function (idx) {
    pagerHTML += `<a href="">${idx}</a>`;
});
pager.html(pagerHTML);
let pagerBtn = pager.find('a');


//슬라이드 이동함수
function moveSlide(num) {
    num = (num + slideCount) % slideCount;
    slideContainer.animate({ left: `${num * -100}%` });
    currentIdx = num;
    
    //모든슬라이드에서 active제거하고 현 슬라이드에 active추가
    //active가 있어야 컨텐츠가 보임
    slides.removeClass('active');
    slides.eq(num).addClass('active');

    //페이저버튼 관련
    pagerBtn.removeClass('active');
    pagerBtn.eq(num).addClass('active');

}
moveSlide(0)

nextBtn.click( function(e){
    e.preventDefault()
    moveSlide(currentIdx + 1);
    
})

prevBtn.click( function(e){
    e.preventDefault()
    moveSlide(currentIdx - 1);
    
})

//페이저
pagerBtn.click(function(e){
    e.preventDefault();

    let target = $(this).index();
    moveSlide(target);
  })


