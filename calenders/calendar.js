const calendar = document.querySelector('.calendar');
const prevBtn = calendar.querySelector('.left');
const nextBtn = calendar.querySelector('.right');
const display = calendar.querySelector('.header-display');
const days = calendar.querySelector('.days');
const selected = calendar.querySelector('.selected');

const today = new Date();
console.log(today);
/*
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
*/

let year = today.getFullYear();
let month = today.getMonth();

function displayHeader(){
  let formattedDate = today.toLocaleString('ko-KR', { 
    month: 'long',
    year:'numeric',
    timeZone: 'Asia/Seoul' 
  });  
  display.innerText = formattedDate;
}
displayHeader();

function displayCalendar(){
  const firstDay = new Date(year,month, 1);
  const firstDayIndex = firstDay.getDay(); 
  const lastDay =  new Date(year,month+1, 0);
  const numberOfDays = lastDay.getDate();
  //날짜의 인덱스 0부터 일요일표시, 4 목요일
  console.log(numberOfDays);

  //첫줄의 빈칸 생성
  for(let i = 0; i<firstDayIndex;i++){
    let div = document.createElement('div');
    div.innerText = '';
    days.appendChild(div);
  }
  //날짜 생성
  for(let i = 1; i<=numberOfDays;i++){
    let currentData = new Date(year,month,i);
    let div = document.createElement('div');
    div.innerText = i;
    days.appendChild(div);

    div.dataset.date = currentData.toLocaleString('ko-KR', { 
      year:'numeric',
      month: 'long',
      day:'numeric',
      weekday:'long',
      timeZone: 'Asia/Seoul' 
    });
    //div.setAttribute('data-date', formattedDate);

    //현재일이면 클래스명 current 추가
    if(
      currentData.getFullYear() === new Date().getFullYear() &&
      currentData.getMonth() === new Date().getMonth() &&
      currentData.getDate() === new Date().getDate() 
    ){
      div.classList.add('current');
    }
  }
  displaySelected();
}
displayCalendar();

function displaySelected(){
  const dayElements = document.querySelectorAll('.days div');
  
  dayElements.forEach(item=>{
    item.addEventListener('click',()=>{
      let selectedDate = item.dataset.date;
      selected.innerHTML = `선택일: ${selectedDate}`;
      selected.style.display = 'block';
    });
  })
}

prevBtn.addEventListener('click',()=>{
  days.innerHTML = '';
  selected.innerHTML = '';

  if(month < 0){
    month=11;
    year-= 1;
  }
  month -= 1;

  today.setMonth(month); //다음날로 갱신
  displayCalendar();
  displayHeader();  
});
nextBtn.addEventListener('click',()=>{
  days.innerHTML = '';
  selected.innerHTML = '';
  
  if(month > 11){
    month=0;
    year+= 1;
  }
  month += 1;

  today.setMonth(month); //다음날로 갱신
  displayCalendar();
  displayHeader();  
});
