const target = $('#box');
const targetOST = target.offset().top - 300;

$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop(); // 현재 스크롤 위치 가져오기
    console.log("현재 스크롤 위치: " + scrollTop + "px");

    if($(this).scrollTop() > targetOST){
        target.addClass("animate__animated animate__fadeInLeft")
    }
});