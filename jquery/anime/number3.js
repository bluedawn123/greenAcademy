const progress = $('.progress');
const main = $('main');
const mainOST = main.offset().top;
/*윈도우에 스크롤이 생기면 할일
스크롤 양이 main태그가 상단에서 떨어진 거리
(거리에서 -300)보다 크면 애니메이션 작동

*/
$(window).scroll(function(){
    if( $(this).stop().scrollTop() > mainOST - 300){
        if(!main.hasClass('active')){
            main.addClass('active');
            Test()
        }

    }
})



function Test(){
    progress.each(function () {
        let targetNum = $(this).attr('data-rate');
        let initNum = 0;
    
        let timer2 = setInterval(() => {
            initNum = initNum + 1;
    
    
            $(this).find('span').text(initNum);
            $(this).find('.bar').css({ width: initNum + '%' });
    
    
            if (initNum === Number(targetNum)) {
                clearInterval(timer2);
            }
    
        }, 50)
    
    })
}



// progress.each(function () {
//     let targetNum = $(this).attr('data-rate');
//     let initNum = 0;

//     let timer2 = setInterval(() => {
//         initNum = initNum + 1;


//         $(this).find('span').text(initNum);
//         $(this).find('.bar').css({ width: initNum + '%' });


//         if (initNum === Number(targetNum)) {
//             clearInterval(timer2);
//         }

//     }, 50)

// })



