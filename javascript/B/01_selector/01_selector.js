/*셀렉터
아이디 document.getElementById('아이디명')
태그명 document.getElementByTagName('태그명')
클래스명 document.getElementByClassName('클래스명)

css선택자
document.querySelector('.list')
document.querySelector('section h2') 등등

querySelectorAll은 여러개를 배열로 만든다. 

스타일변경
대상.style.css속성명 = 값;
대상.style.color = 'blue'

*/
let title = document.getElementById('title');
title.style.color = 'blue';
// console.log(title)

let sec_tt = document.getElementsByTagName('h2');
console.log(sec_tt);

for(let i = 0; i < sec_tt.length  ; i++){
    sec_tt[i].style.color = 'blue';
}

let list = document.getElementsByClassName('list');
console.log(list);
list[1].style.background = 'silver';

let target = document.querySelector('#list3 .red')
target.style.color = 'red';

let target2 = document.querySelector('#box  div  div')
target2.style.background = 'silver';

let myPa = document.querySelectorAll('article p')
console.log(myPa) //NodeList(3) [p, p, p]

// for(let i = 0; i < myPa.length  ; i++){
//     myPa[i].style.color = 'blue';
// }

for(let i of myPa){
    console.log(i)  //<p></p> 3개 반복
    i.style.color = 'blue';
    i.style.fontSize = '14px';
    i.style.backgroundColor = 'red';
}