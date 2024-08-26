let slides = $('.slide-container li');
let slideCount = slides.length;
let currentIdx = 0;
let prevBtn = $('#prev');
let nextBtn = $('#next');
/*
대상.show()  //대상 display block
대상.hide()  //대상 display none

대상.fadeIn() // display none->block opacity 0->1
대상.fadeOut() // opacity 1->0-> none
*/
slides.eq(currentIdx).fadeIn(500);
/*
다음 버튼을 클릭하면 할일
  현재이미지는 사라지고
  다음이미지가 나타난다.
*/
/*
nextBtn.click(function(e){
  e.preventDefault();
  slides.eq(currentIdx).fadeOut();
  let nextIdx = (currentIdx + 1)%slideCount;
  slides.eq(nextIdx).fadeIn();
  currentIdx = nextIdx;
})
prevBtn.click(function(e){
  e.preventDefault();
  slides.eq(currentIdx).fadeOut();
  let nextIdx = (currentIdx -1)%slideCount;
  slides.eq(nextIdx).fadeIn();
  currentIdx = nextIdx;
})
*/
$('.controls').click(function(e){
  if($(this).attr('id') === 'prev'){
    showSlide(currentIdx - 1);
  }else{
    showSlide(currentIdx + 1);
  } 
});

let pagerHTML = ''; //<a href="" data-num="0">0</a>

for(let i = 0 ; i<slideCount; i++){
  pagerHTML += `<a href="">${i}</a>`;
}
$('.pager').html(pagerHTML);
let pagerBtn = $('.pager a');
/*
pagerBtn를 클릭하면
  현재 이미지는 사라지고, 클릭한 그 요소의 인덱스번호에 해당하는 슬라이드가 나타난다.
*/
pagerBtn.click(function(e){
  e.preventDefault();
  showSlide($(this).index());
})

function showSlide(num){  
  num = (num + slideCount) % slideCount; //0,1,2,3,4,5,0,1,2,...
  slides.fadeOut().eq(num).fadeIn();
  currentIdx = num;
  pagerBtn.removeClass('active');
  pagerBtn.eq(num).addClass('active');
}
showSlide(0);

/*
대상.html() //대상의 html 태그를 반환
대상.html(tag) //대상의 html 태그를 생성(교체)
 
대상.text() //대상의 텍스트 반환
대상.text(tag) //대상 tag 글씨를 생성(교체)
*/