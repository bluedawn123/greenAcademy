const $window = $(window);
const header = $('#main-header');
const logo = $('#logo');
const smLogo = 'images/logo-shrink.svg';
const bigLogo = 'images/logo.svg';


/*윈도우에 스크롤 생기면 할일
스크롤양이 0보다 크면 header에 active추가
작으면 제거
*/
$(window).scroll(function(e){
    e.preventDefault();

    if( $(this).scrollTop() > 0){
        if(!header.hasClass('active')){
            header.addClass('active');
            changeLogo(smLogo);
        }
        
    }else{
        header.removeClass('active');
        // header.find('img').attr('src', bigLogo)
        changeLogo(bigLogo);
    }
})

function changeLogo(url){
    logo.fadeOut(500, function(){
        logo.attr('src', url);
        logo.fadeIn();
    });

}
