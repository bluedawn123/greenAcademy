// 변수 지정
let slideWrapper = document.querySelector('.slide-wrapper');
let slideContainer = document.querySelector('.slide-container');
let slides = document.querySelectorAll('.slide-container li');
let slideCount = slides.length  //5
let currentIdx = 0;
let nextBtn = document.querySelector('#next');
let prevBtn = document.querySelector('#prev');
let pager = document.querySelector('.pager');
let pagerHTML = '';

/*
태그 생성하기. 새 값을 생성
대상.innerHTML = 값    => 태그로 넣기
대상.innerText = 값    => 쌩글씨넣기

값을 반환.
대상.innerHTML => 태그값을 반환
대상.innerText => text를 반환
*/

let content = prev.innerHTML;
console.log(content) //<i class="fas fa-chevron-left"></i>

let title = document.querySelector('h1');
console.log(title.innerHTML) //<a href="">SlideShow</a>
console.log(title.innerText)  //SlideShow


//슬라이드 배치
// for(let i=0; i < slides.length; i++){
//     slides[i].style.left = `${i *100}%`;
// }
slides.forEach( (item, index, all)=>{
    item.style.left = `${index * 100}%`;
    pagerHTML = pagerHTML + `<a href="#">${index}</a>`;
    console.log(pagerHTML);
    console.log(index)
    
})

//a태그 생성
pager.innerHTML = pagerHTML;  //반복문을 통해 생긴 pagerHTML을 한방에 넣어줌

//a태그를 변수 할당
let pagerBtn = pager.querySelectorAll('a')
console.log(pagerBtn)  //NodeList(5) [a, a, a, a, a]

/*슬라이드 이동함수
goToslide 함수는 매개변수 num으로 숫자가 들어오면 슬라이드를 이동시킨다. 
goToslide(0)이면, slideContainer left 0
goToslide(1)이면, slideContainer left -100%
*/
function goToslide(num){
    slideContainer.style.left = `${num * -100}%`; //-100 -200 -300,,,
    currentIdx = num;

    //마지막이면 다음 버튼 안보이게
    if(currentIdx === slides.length - 1){    
        nextBtn.classList.add('disabled');
    }else{
        nextBtn.classList.remove('disabled');
    }   

    //처음이면 첫 버튼 안보이게
    if(currentIdx === 0){    
        prevBtn.classList.add('disabled');
    }else{
        prevBtn.classList.remove('disabled');
    }   

    //페이저 색 칠하기
    //일단 모든 페이지에서 active제거하고 현재 슬라이드 번호에 해당하는 것에만 active추가
    for (const pb of pagerBtn){
        pb.classList.remove('active'); //다 제거

        pagerBtn[currentIdx].classList.add('active'); //현재의 pagerBtn에만 추가
    }

}


//nextBtn 버튼을 클릭하면 현재 슬라이드 번호에 1을 더해서 gotoSilde에 전달한다. 
nextBtn.addEventListener('click', ()=>{
    goToslide(currentIdx + 1);  //-100 -200 -300...
}); 

prevBtn.addEventListener('click', ()=>{
    goToslide(currentIdx - 1);  //역시 -100 -200 -300... 
});

/* 페이저로 이동하기
pagerBtn 클릭하면 클릭된 그 요소의 숫자를 goToSlide에 전달
*/

// for(let i=0; i < pagerBtn.length; i++){
//     pagerBtn[i].addEventListener('click', (e) =>{
//         e.preventDefault(); //?다시한번
//         goToslide(i);

//         //console.log(e.currentTarget);  <a href="#">i</a>
//     })
// }

pagerBtn.forEach( (item, index, all) => {
    item.addEventListener('click', (e)=>{
        e.preventDefault();
        goToslide(index);

    })
})


//처음실행
goToslide(0)



function auto(){
    setInterval( () => {
        goToslide(currentIdx + 1);

        if(currentIdx === slides.length){
            goToslide(currentIdx === 0);
            console.log(slides.length)
            
        }
    }, 1000);
}
auto();