/*
대상.classList.add('클래스명);  클래스추가
대상.classList.remove('클래스명');
대상.classList.contains('클래스명')
=> 해당 클래스명이 있으면 true, 없으면 false

대상.classList.toggle('클래스명')
=> 해당 클래스명이 있으면 제거, 없으면 추가
*/

// let title = document.querySelector('h1');
// title.classList.add('active');
// title.classList.remove('title');

// if(title.classList.contains('logo')){
//     alert('logo클래스 있다');
// }
// else{
//     alert('logo클래스 없다');
// }

/*처음엔 있지만 버튼을 누르면 class = title의 logo 클래스를
탈부착 하는 걸 만들어보자. */
// let toggleBtn = document.querySelector('#toggle')
// toggleBtn.addEventListener('click', () => {
//     title.classList.toggle('logo');
//     //title의 클래스명 logo에 대해 toggle 한다는 의미
    

//     if(title.classList.contains('logo')){
//         console.log('logo 클래스명 있다.')
//     }else{
//         console.log('logo 클래스명 없다.')
//     }
// })




/*
탭메뉴를 클릭하면 관련 내용이 나타나고
하이라이트 배경이 활성화된 메뉴위치로 이동합니다.
*/

let tabMenu = document.querySelectorAll('.tab-menu a');
let tabContent = document.querySelectorAll('#tab-content > div')
console.log(tabContent)  //NodeList(3) [div#tabs-1.active, div#tabs-2, div#tabs-3]
console.log(tabMenu.length) //3

//아무거나 클릭했을때 클래스 제거
    for(let i = 0; i < tabMenu.length; i ++){
        tabMenu[i].addEventListener('click', function(e){
        e.preventDefault();

        //모든걸 다 뺸다!
        for(let j = 0; j < tabMenu.length; j++){
            tabMenu[j].classList.remove('active');
        }
        //클릭시 클릭한 것만 클래스 추가
        tabMenu[i].classList.add('active');
        

        //역시 모든 tabContent안에서 active 제거
        for(let j = 0; j < tabContent.length; j++){
            tabContent[j].classList.remove('active');
        }
        tabContent[i].classList.add('active');
    })

}


