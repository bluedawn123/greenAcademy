let header = document.querySelector('.page-header');
let headerOST = header.offsetTop;
console.log(headerOST) //240

/*윈도우에 스크롤이 생기면 
스크롤양이 headerOST보다 크면 header에 클래스명 sticky추가하고 아니라면
header에 클래스명 sticky제거.
*/

window.addEventListener('scroll', () =>{
    let scrollAmt = window.scrollY;
    console.log(window.scrollY);

    if(scrollAmt > headerOST){    
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
})


