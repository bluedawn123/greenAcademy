const progress = $('.progress');



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



