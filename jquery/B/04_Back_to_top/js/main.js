$(function(){
    const btt = $('#go-top');

    $(window).scroll( function(){
        console.log( $(this).scrollTop() );
        let scrollAmt = $(this).scrollTop()
        //스크롤 양이 300보다 많으면 btt가 나타나고 아니면 사라진다. 
        if(scrollAmt > 300){
            btt.addClass('active');
        }else{
            btt.removeClass('active');
        }

    })

    btt.click( function(){
        $('html, body').animate( {scrollTop : 0}, 500, 'swing');
    })

})