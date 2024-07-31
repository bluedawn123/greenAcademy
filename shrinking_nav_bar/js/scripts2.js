/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/

let header = document.querySelector('#main-header');
let logo = document.querySelector('#logo');
let largeLogo = "images/logo.svg";
let smallLogo = "images/logo-shrink.svg";

/*왼도우에 스크롤이 생기면 할일
스크롤양이 0보다 크면 header에 shrink 추가하고 아니면 제거 
                        +
현재 로고에 hide추가해서 사라지게 하고 경로를 바꿔놓는다.
로고에서 hide 제거, 나타난다. 함수형으로.
*/

window.addEventListener('scroll', () =>{
    let scrollAmt = window.scrollY;
    header.classList.add('shrink');

    if(!header.classList.contains('shrink')){   //shrink가 없다면,
        header.classList.add('shrink');
        changeLogo(smallLogo);
    }else{
        header.classList.remove('shrink');
        changeLogo(largeLogo); 
    }
})

function changeLogo(url){
    logo.classList.add('hide');
    setTimeout( () =>{
        logo.setAttribute('src', url);
        logo.classList.remove('hide');
    }, 300)
}

//깜빡이다가 깜빡이지 않게 바뀐 이유....??

// window.addEventListener('scroll', () =>{
//     let scrollAmt = window.scrollY;

//     if(scrollAmt > 0){    
//         header.classList.add('shrink');
//         changeLogo(smallLogo);
//     }else{
//         header.classList.remove('shrink');
//         changeLogo(largeLogo); 
//     }
// })
