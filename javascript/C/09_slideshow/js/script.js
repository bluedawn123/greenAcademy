/*전제적인 개괄
1. 앞, 뒤 복사본을 만들고 중앙으로 위치하려고 translateX씀
2. 복사본의 맨앞, 맨뒤로 갔을때 첫번째, 마지막으로 바꿔보자.
   근데 애니메이션이 있으면 티나니깐 그때만 뗴는걸로 하자
3. 복사본이 늘어나서 index번호가 바뀌었다.
   편하게 하려고 index번호를 0,1,2,3,4로 만들어보자.
4. 페이져버튼을 찍기 편하게 data-idx를 넣어서 
   지금보고 있는 페이지에 알맞게 검은점이 나오도록 active를 붙혀주자.

*/


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
let auto;

/*요소의 크기 파악방법 
대상.offsetWidth    대상.offsetHeight
*/

function setLayout(){
    let slideWidth = slideWrapper.offsetWidth;
    // 슬라이드 레아아웃 중앙정렬
    let test = slideContainer.style.transform
    test = `translateX(-${slideWidth * slideCount}px)`;
    console.log(`test : ${test}`) 
}

setLayout();
window.addEventListener('resize', () =>{
    setLayout();
})



/*복사본 만들기  */
//1. 뒤에 붙일 것들 클로닝 붙이기
for(let i=0; i<slideCount; i++){
    let cloneSlide = slides[i].cloneNode(true)  //복사
    cloneSlide.classList.add('clone');    //복사한 것에 클래스명 추가
    slideContainer.appendChild(cloneSlide) //ul의 내용의 뒤에 추가
}

for(let i= slideCount-1; i >= 0; i--){
    let cloneSlide = slides[i].cloneNode(true)  
    cloneSlide.classList.add('clone');    
    slideContainer.prepend(cloneSlide);        //이럼 0,1,2,3,4,원본1,원본2... 이렇게 복사본이 들어간다.
}
let allSlides = document.querySelectorAll('.slide-container li');


//2. 앞에 붙일 것들 클로닝 후 붙이기. => 대상.prepend(추가할 요소);
//단, 1,2,3,원본1,원본2,원본3,1,2,3 이런식이니 1,2,3을 앞에 넣어야한다.


/*
태그 생성하기. 새 값을 생성
대상.innerHTML = 값    => 태그로 넣기
대상.innerText = 값    => 쌩글씨넣기

값을 반환.
대상.innerHTML => 태그값을 반환
대상.innerText => text를 반환
*/

let content = prev.innerHTML;
//console.log(content) <i class="fas fa-chevron-left"></i>

let title = document.querySelector('h1');
//console.log(title.innerHTML) <a href="">SlideShow</a>
//console.log(title.innerText)  SlideShow


//슬라이드 배치
// for(let i=0; i < slides.length; i++){
//     slides[i].style.left = `${i *100}%`;
// }



slides.forEach((slide,idx)=>{//원슬라이드로 페이저 생성
    pagerHTML = pagerHTML + `<a href="#">${idx}</a>`;
  });
  
allSlides.forEach((slide,idx)=>{ //복사본 포함 전체 슬라이드를 가로 배치
    slide.style.left = `${idx * 100}%`;
  });






//a태그 생성
pager.innerHTML = pagerHTML;  //반복문을 통해 생긴 pagerHTML을 한방에 넣어줌

//a태그를 변수 할당
let pagerBtn = pager.querySelectorAll('a')
//console.log(pagerBtn)  NodeList(5) [a, a, a, a, a]

/*슬라이드 이동함수
goToslide 함수는 매개변수 num으로 숫자가 들어오면 슬라이드를 이동시킨다. 
goToslide(0)이면, slideContainer left 0
goToslide(1)이면, slideContainer left -100%
*/
function goToslide(num){
    slideContainer.style.left = `${num * -100}%`; //-100 -200 -300,,,
    currentIdx = num;

    //마지막이면 다음 버튼 안보이게
    // if(currentIdx === slides.length - 1){    
    //     nextBtn.classList.add('disabled');
    // }else{
    //     nextBtn.classList.remove('disabled');
    // }   

    // //처음이면 첫 버튼 안보이게
    // if(currentIdx === 0){    
    //     prevBtn.classList.add('disabled');
    // }else{
    //     prevBtn.classList.remove('disabled');
    // }   

    //페이저
    //일단 모든 페이지에서 active제거하고 현재 슬라이드 번호에 해당하는 것에만 active추가
    for (const pb of pagerBtn){
        pb.classList.remove('active'); //다 제거

    }

    //슬라이드 내용 활성화
    //모든 슬라이드에서 active제거하고 추가
    for (const slide of allSlides){
        slide.classList.remove('active');
    }
    allSlides[slideCount + num].classList.add('active');  //지금 활성화된 슬라이드
    let pagerIndex = allSlides[slideCount + num].getAttribute('data-idx');

    console.log(currentIdx); 
    console.log(pagerIndex);

    pagerBtn[pagerIndex].classList.add('active');

    
    //슬라이드 원래위치로 재배치. 
    //1. 복사본 맨 처음setTimeOut은 0.4초 이후 애니메이션을 빼주기 위해서
    if(currentIdx === -5 ){
        setTimeout( () =>{
            slideContainer.classList.remove('animated');  
            slideContainer.style.left = 0;
            currentIdx = 0;
        },400);
        //그리고 다시 애니메이션을 붙인다.
        setTimeout( ()=> {
            slideContainer.classList.add('animated');
        }, 500)
    }

    //2. 복사몬 맨 마지막
    if(currentIdx === slideCount*2 - 1){
        setTimeout( () =>{
            slideContainer.classList.remove('animated');  
            slideContainer.style.left = `${ (slideCount-1)*-100}%`    ;
            currentIdx = 4;
        },400);
        //그리고 다시 애니메이션을 붙인다.
        setTimeout( ()=> {
            slideContainer.classList.add('animated');
        }, 500)
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

        let targetIdx = Number(e.target.innerText);  //클릭한 그 녀석
        goToslide(targetIdx);

    })
})


//처음실행
goToslide(0)

//자동슬라이드
// function autoSlide(){
//     auto = setInterval( () => {
//         let nextIdx = (currentIdx + 1) % slideCount; 
//         goToslide(nextIdx);
//     }, 1000);
// }

// autoSlide(); 주석처리 했는데 왜 작동함?

//마우스 들어왔을때 슬라이드 멈춤
// slideWrapper.addEventListener('mouseenter', () => {
//     clearInterval(auto);
// })

// slideWrapper.addEventListener('mouseleave', () => {
//     autoSlide();
// })


//질문2. 왜 위에서 transform씀...? 어차피 left값을 옮길꺼 아님?