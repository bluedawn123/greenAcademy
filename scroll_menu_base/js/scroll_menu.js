let menu = document.querySelectorAll('#top_menu ul a')
// let targetOST = document.querySelector('#section2').offsetTop; 옮김ㅋ

/*아이디 section2가 화면상단에서 얼만큼 떨어져있는데 변수
section2OST에 담고 콘솔출력하고 아래로 옮기기 */




//메뉴 클릭 이동
/*
메뉴를 클릭하면 거기로 이동
*/
menu.forEach( (item, index, all) =>{
  item.addEventListener('click', (e)=>{
    e.preventDefault();
    
    let targetId = item.getAttribute('href')  //#section1, #section2, ....
    let targetOST = document.querySelector(targetId).offsetTop;

    window.scrollTo({
      left:0,
      top:targetOST,
      behavior :"smooth"
    });
  })
})


    //다 제거후 클릭한 것만 검은색으로.
    // for(let m of menu){
    //   m.classList.remove('on');
    // }
    // e.target.classList.add('on');


//스크롤 이동시 메뉴색 변하게 반영
let sections = document.querySelectorAll('#contents > section');

window.addEventListener('scroll', () =>{
  /*section의 각 원소마다 할일
  각원소의 화면상단에서의 거리보다 스크롤양이 많으면 할일.
  1. 모든 메뉴에서 on을 제거한다
  2. 그 원소의 인덱스 번호에 해당하는 a태그에 on을 추가한다. 
  */
  sections.forEach( (item, idx) => {
    if(item.offsetTop <= window.scrollY){

      //다 제거
      for(let m of menu){
        m.classList.remove('on');
      }

      //
      menu[idx].classList.add('on');
    }

  })
})
