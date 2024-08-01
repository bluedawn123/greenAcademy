let btt = document.querySelector(".back-to-top");
/*윈도우에 스크롤 생기면 할일
스크롤 양이 300보다 크면 btt가 생기고 아니면 사라지게 + btt 클릭하면 화면상단으로 부드럽게
*/
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btt.classList.add("active");
  } else {
    btt.classList.remove("active");
  }
});
btt.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

// progress Bar

let progressBox = document.querySelector(".progress-box");
let progressBar = document.querySelector(".progress-bar");
let progressSpan = document.querySelector(".content span");
let progressBoxOST = progressBox.offsetTop - 400; //progressBox가 화면상단에 떨어진 거리
let one = document.querySelector(".progress-box");
let progressRate = Number(progressBox.dataset.rate);

/*스크롤양이 progressBoxOST보다 많으면
progressRate의 숫자만큼 숫자가 올라고고 + progressRate의 숫자만큼 너비가 넓어지도록
*/

let count = 0;
let excuted = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > progressBoxOST) {
    if (excuted == false) {
      let timer = setInterval(() => {
        count++;
        progressSpan.innerText = count;

        if (count === progressRate) {
          clearInterval(timer);
        }
      }, 50);

      excuted = true;
    }
  }
});
