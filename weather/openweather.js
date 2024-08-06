let searchForm = document.querySelector('#search');
let time = document.querySelector('#time');
let ctemp = document.querySelector('#ctemp');
let ftemp = document.querySelector('#ftemp');
let humidity = document.querySelector('#humidity');
let icon = document.querySelector('#icon');
let locate = document.querySelector('#location');

//현재위치 파악하기


//api 키 => 975ddfc73e6ce407b784941535f28443 로 바꾸기
fetch('https://ipapi.co/json/')
.then((response) => {
  if (!response.ok) {
    throw new Error(`HTTP 오류! 상태: ${response.status}`);
  }
  return response.json(); //json->object
})
.then((result) => {
  console.log(result);//객체로 변환된 데이터를 result로 받기
  let city = result.city;
  let lat = result.latitude;
  let lon = result.longitude;
  locate.innerHTML = city;
  getWeather(lat,lon);
});


searchForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  let cityname = e.target.querySelector('input').value;  
  getGeo(cityname);
  locate.innerHTML = cityname;
});

function getGeo(cn){
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cn}&limit=5&appid=975ddfc73e6ce407b784941535f28443`;

  fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }
    return response.json(); //json->object
  })
  .then((result) => {
    console.log(result);//객체로 변환된 데이터를 result로 받기
    let lat = result[0].lat;
    let lon = result[0].lon;
    getWeather(lat,lon);
  });
}

function getWeather(lat,lon){
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=975ddfc73e6ce407b784941535f28443&units=metric`;
  fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }
    return response.json(); //json->object
  })
  .then((result) => {
    console.log(result);//객체로 변환된 데이터를 result로 받기   
    //ftemp.innerHTML = ftemp.innerHTML + result.main.feels_like;
    ftemp.innerHTML = result.main.feels_like;
    ctemp.innerHTML = result.main.temp;
    humidity.innerHTML = result.main.humidity+'%';
    dt = result.dt;
    console.log(dt);
    let wt = new Date(dt*1000);//unix 시간표시 -> 밀리세컨드 변환

    let convertedTime = `
    ${wt.getFullYear()}/${String(wt.getMonth()+1).padStart(2,'0')}/${String(wt.getDate()).padStart(2,'0')} 
    ${String(wt.getHours()).padStart(2,'0')}:${String(wt.getMinutes()).padStart(2,'0')}
    `;

    time.innerHTML = convertedTime;
    let code = result.weather[0].icon; //03d
    console.log(code);
    let imgUrl = `https://openweathermap.org/img/wn/${code}@2x.png`; 

    //이미지 주소 넣기
    icon.setAttribute('src', imgUrl);
    icon.style.display="block";

  });
}