// $(document).ready(function(){
// });


/* 이벤트 거는 법
대상.on('이벤트종류', 할일);

*/



// $(function(){
//     $('h1').on('mouseenter', () => {
//         $('h1').css({color : 'blue'})
//     }).on('mouseleave', () => {
//         $('h1').css({color : 'black'})
//     })
// })

// $(function(){
//     $('h1').mouseover( function(){
//         $('h1').css( {color:'blue'});
//     });
//     $('h1').mouseleave( function(){
//         $('h1').mouseleave( {color : 'blacok'});
//     });
// })


// $(function(){
//     $('h1').mouseover( function(){
//         $(this).css( {color:'blue'});
//     });
//     $('h1').mouseleave( function(){
//         $(this).mouseleave( {color : 'blacok'});
//     });
// })

/*마우스 hover 관련.
대상.hover(할일1, 할일2)  ===> 할일1은 마우스올라갔을떄, 할일2는 나갔을때

*/
$(function()
{
    $('h1').hover(
        function(){
            $(this).css( {color : 'blue'});
        },
        function(){
            $(this).css( {color : 'black'});
        }
    )

    $('h2, h3').hover(
        function(){
            $(this).css( {background : 'silver'});
        },
        function(){
            $(this).css( {background : 'none'});
        }
    );

    $('button').click( (e) => {
            $(e.target).css( {background : 'black', color : 'red'})
        }
    )


    // const selectMenu = document.querySelector('#color');
    // const target = document.querySelector('#target');

    // selectMenu.addEventListener('change', function() {
    //     const selectedColor = selectMenu.value;  
    //     target.style.backgroundColor = selectedColor; 
    // });

    //제이쿼리로 다시 만들어보자. 변수부터 제이쿼이로
    const $selectMenu = $('#color');
    const $target = $('#target');

    $selectMenu.on('change', function() {
        const selectedColor = $(this).val();  // 선택한 옵션의 값을 가져오기
        $target.css('background-color', selectedColor);  // 해당 색으로 배경 변경!!
    });

    

})





