$(function () {
    const header = $('.page-header');
    const headerOST = header.offset().top;

    $(window).scroll(function(){
        if( $(this).scrollTop() > headerOST){
            header.addClass('sticky');
        }else{
            header.removeClass('sticky');
        }
    })

});
