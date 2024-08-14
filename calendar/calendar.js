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

const year = today.getFullYear();
const month = today.getMonth();

let formattedDate = today.toLocaleString('ko-KR', { 
  month: 'long',
  year:'numeric',
  timeZone: 'Asia/Seoul' 
});

display.innerText = formattedDate;

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
    let div = document.createElement('div');
    div.innerText = i;
    days.appendChild(div);
  }
}
displayCalendar();
