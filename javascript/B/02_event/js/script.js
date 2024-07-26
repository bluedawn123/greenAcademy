let myBtn = document.getElementById('submit')
let myBtn2 = document.querySelector('#submit')

/*
addEventListner 함수
대상.addEventListener('이벤트종류', 할일);

이벤트종류?
- click, mouseover, mouseenter, mouseleave, mousemove등
- form change(입력, 체크박스, 라디오버튼, 셀렉트), focus, blur
- 윈도우 resize, scroll, load, unload
*/

myBtn2.addEventListener('click', function(){
    alert('너무졸려')
})


let myPara = document.querySelector('.container p')

myPara.addEventListener('mouseover', function(){
    myPara.style.backgroundColor = 'silver';
});
myPara.addEventListener('mouseout', function(){
    myPara.style.backgroundColor = '';
});

//변수명 myInput에 input요소를 할당하고 focus 이벤트가 생기면 배경은 blue, 
//색상은 white로
let myInput = document.querySelector('input')

myInput.addEventListener('focus', function(){
    myInput.style.backgroundColor = 'blue';
    myInput.style.color = 'white';
})

myInput.addEventListener('blur', function(){
    myInput.style.backgroundColor = 'white';
    myInput.style.color = 'black';
})

let mylink = document.querySelectorAll('p a')

//하드코딩
// mylink[0].addEventListener('mouseover', function(){
//     mylink[0].style.backgroundColor = 'blue';
//     mylink[0].style.color = 'white';
// })

// mylink[0].addEventListener('mouseout', function(){
//     mylink[0].style.backgroundColor = '';
//     mylink[0].style.color = '';
// })


// for of 문으로 만들기
for(let i of mylink){
    i.addEventListener('mouseover', function(){
    i.style.backgroundColor = 'blue';
    i.style.color = 'white';
    })
}
for(let i of mylink){
    i.addEventListener('mouseout', function(){
    i.style.backgroundColor = '';
    i.style.color = '';
    })
}


// 기본 for문으로 만들기
// for ( let i=0; i <= mylink.length; i++){
//     mylink[i].addEventListener('mouseover', function(){
//     mylink[i].style.backgroundColor = 'blue';
//     mylink[i].style.color = 'white';
//     });
//     mylink[i].addEventListener('mouseout', function(){
//     mylink[i].style.backgroundColor = '';
//     mylink[i].style.color = '';
//     });
// }

//forEach 문으로 만들기
// mylink.forEach(function(item, index){
//     console.log(item, index)
//     item.addEventListener('mouseover', function(){
//         item.style.backgroundColor = 'blue';
//         item.style.color = 'white';
//     });

//     item.addEventListener('mouseout', function(){
//         item.style.backgroundColor = '';
//         item.style.color = '';
//     });
// })

let myColor = document.querySelector('#color');
myColor.addEventListener('change', function(){
    let pickedColor = this.value;
    console.log(pickedColor)   //색이 알맞게 나온다. green,등등

    myPara.style.background = pickedColor;
})


let btt = document.querySelector('.btt');

//스크롤양 확인
window.addEventListener('scroll', function(){
    let scrAmt = this.scrollY;
    console.log(scrAmt);
    if( scrAmt > 99){
        btt.classList.add('active');
    }else{
        btt.classList.remove('active')
    }
})