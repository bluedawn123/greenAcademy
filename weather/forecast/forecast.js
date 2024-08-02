let ot = new Date();
let currentTime = ot.getTime(); //밀리초 변환
let m30ago = currentTime - (30*60*1000); // 30분전 변경
let ct =  new Date(m30ago);//30분전의 날짜 생성

let year = ct.getFullYear();
let month = String(ct.getMonth()+1).padStart(2,'0'); //0~11 대상.padStart(2,'0')
let day = String(ct.getDate()).padStart(2,'0'); 
let hour = ct.getHours();
let minutes = String(ct.getMinutes()).padStart(2,'0'); 

let queryDate = `${year}${month}${day}`;
let queryTime = `${hour}${minutes}`;
console.log(queryDate, queryTime);

let query = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=jNu%2FUDr0Q2KYQ9rDGnLJqo4ahkjIQrHpn9wOnGbNXkmLqSFCj5rE6fYoLKFF1ELf5Yr4JDkQeCisuwGmsVfbOw%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${queryDate}&base_time=${queryTime}&nx=60&ny=127`;


fetch(query)
  .then(res=>res.json())
  .then(data=>{
    let result = data.response.body.items.item

    let filteredTemp = result.filter( item => item.category === 'T1H');
    let filteredHMT = result.filter( item => item.category === 'REH');

    //map함수를 통한 새로운 배열생성
    let filteredArr = filteredTemp.map( tempItem => {

      let humItem = filteredHMT.find(item => item.fcstTime === tempItem.fcstTime);

      return { 
        fcstDate : tempItem.fcstDate,
        fcstTime : tempItem.fcstTime,
        fcstValue : tempItem.fcstValue,
        humValue : humItem.fcstValue
      }
    })
    console.log(filteredArr) //위에 3개만을 갖을 Array(6) 개를 생성

    let dataHTML = '';
    for (let arr of filteredArr){
      dataHTML = dataHTML + `
      <tr>
        <td>${queryDate}</td>
        <td>${queryTime}</td>
        <td>${arr.fcstTime}</td>
        <td>${arr.fcstValue}</td>
        <td>${arr.humValue}</td>
      </tr>
      `;
    }
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = dataHTML



  });