const progress = $('.progress');
const progressBar = progress.find('.bar');
const progressSpan = progress.find('span');
let initNum = 0;
const targetNum = Number(progress.attr('data-rate'));


let timer = setInterval( () => {
    initNum = initNum + 1;

    progressSpan.text(initNum);
    progressBar.css( {width:initNum+'%'} );
    if(initNum === targetNum ){
        clearInterval(timer);
    }

}, 50)

let timer2 = setInterval( () => {
    initNum = initNum + 1;

    progress.each( function(index, item ){
        $(item).find('span').text(initNum);
        $(item).find('.bar').css( {width:initNum+'%'} );
    })

    if(initNum === targetNum ){
        clearInterval(timer2);
    }

}, 50)