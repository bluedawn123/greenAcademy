// 변수 지정
let slideWrapper = document.querySelector('.slide-wrapper');
let slideContainer = document.querySelector('.slide-container');
let slides = document.querySelectorAll('.slide-container li');
let slideCount = slides.length  //5
let currentIdx = 0;
let nextBtn = document.querySelector('#next');
let prevBtn = document.querySelector('#prev');
let pager = document.querySelector('.pager');

/*
태그 생성하기
대상.innerHTML = 값    => 태그로 넣기
대상.innerText = 값    => 쌩글씨넣기

*/






//처음실행
goToslide(0)

//슬라이드 배치
// for(let i=0; i < slides.length; i++){
//     slides[i].style.left = `${i *100}%`;
// }
slides.forEach( (item, index, all)=>{
    item.style.left = `${index * 100}%`;
    pager.innerHTML = '<a href="">0</a>'
})

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
}


//nextBtn 버튼을 클릭하면 현재 슬라이드 번호에 1을 더해서 gotoSilde에 전달한다. 
nextBtn.addEventListener('click', ()=>{
    goToslide(currentIdx + 1);  //-100 -200 -300...
}); 

prevBtn.addEventListener('click', ()=>{
    goToslide(currentIdx - 1);  //역시 -100 -200 -300... 
});

//자동 넘어가는 함수
function auto(){
    setInterval( () => {
        goToslide(currentIdx + 1);

        if(currentIdx === slides.length){
            goToslide(currentIdx === 0);
        }
    }, 12000);
}
auto();


//페이저 생성








