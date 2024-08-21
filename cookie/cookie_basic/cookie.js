const popup = document.querySelector(".popup");
const check = document.querySelector("#check");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log('버튼클릭됌');
  console.log(check.checked); //true or false만 나옴. 라디오 버튼에만 사용
  if (check.checked) {
    //쿠키생성
    setCookie("Company", "ABC", 1);
  } else {
    //쿠키제거
    delCookie("Company", "ABC");
  }

  popup.classList.remove('show');
});

function setCookie(name, value, due) {
  let date = new Date();
  date.setDate(date.getDate() + due);

  /*쿠기 생성
        document.cookie = 새값; 단! 새 값은 문자열!
        만기일자는 문자열로 변환해야한다. 
        date.toUTCString()
        */
  let myCookie = `${name}=${value};expires=` + date.toUTCString();
  document.cookie = myCookie;
}

function delCookie(name, value) {
  let date = new Date();
  date.setDate(date.getDate() - 1);

  let myCookie = `${name}=${value};expires=` + date.toUTCString();
  document.cookie = myCookie;
}

//쿠키확인.
function checkCookie(name, val){

  //name val의 쿠기가 없다면 팝업을 열자
  if(document.cookie.search(`${name}=${val}`) === -1){
    popup.classList.add('show');
  }else{

  }
}

checkCookie('Company', 'ABC');