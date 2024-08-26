/*
대상.toggleClass('클래스명')
=> 해당 클래스가 있으면 제거, 없으면 추가

나오거나 들어올때 요소의 src를 변경해서 이미지도 변경해야한다. 
//속셩 추출, 변경. attr('~~~') 과 attr(' ', ____ )

let targetUrl = $(this).attr('data-lightbox') //images/img-03-large.jpg
    lightboxImage.attr('src', targetUrl)  
asideBtn.find('img').attr('src', 'img/btn_open.png')
*/

$(function () {
    const aside = $('.page-main > aside');
    const asideBtn = aside.find('button');

    /*
    asideBtn을 클릭하면 asdie가 나오도록
    */
    asideBtn.click(function (e) {
        e.preventDefault();
        
        aside.toggleClass('open_the_door')

        if(aside.hasClass('open_the_door')){
            aside.animate({ left: -100 }, 500, 'easeOutBack');
            asideBtn.find('img').attr('src', 'img/btn_close.png')
        }else{
            aside.animate({ left: `${-350}px` }, 500, 'easeInBack');
            asideBtn.find('img').attr('src', 'img/btn_open.png')
        }

    });

})

