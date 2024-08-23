const images = $('.gallery img');
const lightboxOverlay = $('#lightbox-overlay')
const lightboxImage = $('#lightbox-image')

/*images를 클릭하면 
변수명 targetUrl에 클릭한 그 요소의 data-lightbox의 값을 할당하고,
lightboxImage의 src의 값을 targetUrl로 변경한다. 
*/

images.click(function() {
    let targetUrl = $(this).attr('data-lightbox') //images/img-03-large.jpg
    lightboxImage.attr('src', targetUrl)   //속성 변경
    lightboxOverlay.addClass('visible');

})

lightboxOverlay.click( function(){
    lightboxOverlay.removeClass('visible');
})


//속셩 추출, 변경. attr('~~~') 과 attr(' ', ____ )