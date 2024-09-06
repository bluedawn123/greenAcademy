$(function () {
    //--------------------1
    $('.basic .slider').slick();

    //---------------------2
    $('.control-slide .control').slick();

    //----------------------3
    $('.control-slide2 .control2').slick({
        // arrows : false,
        prevArrow: '.control-slide2 .prev',
        nextArrow: '.control-slide2 .next'
    }
    );

    //--------------------4
    let control3 = $('.control-slide3 .control3').slick({
        arrows: false,
    })
    /*이전버튼 클릭시 할일 */
    $('.control-slide3 .prev').click(function () {
        control3.slick('slickPrev')
    })
    /*다음버튼 클릭시 할일 */
    $('.control-slide3 .next').click(function () {
        control3.slick('slickNext')
    })


    //----multiple
    $('.multiple-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });


    //-----active
    $('.active-slider').slick();




    //-----option
    let control4 = $('.option-slider').slick();

    $('.option p span').click(function () {
        let idx = $(this).index();
        control4.slick('slickGoTo', idx)

    });


    //-----auto
    $('.auto-slider').slick({
        autoplay: true
    });


    //-----multi auto
    $('.multiple-slider2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]



    });




    //-------video slide











})

