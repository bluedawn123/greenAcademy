let header = document.querySelector("header");
let slidewrapper = document.querySelector(".slidewrapper");
let slidecontainer = document.querySelector(".slidecontainer");
let slides = slidecontainer.querySelectorAll("li");
let slideCount = slides.length;
let currentIdx = 0;
let prevBtn = slidewrapper.querySelector(".prev");
let nextBtn = slidewrapper.querySelector(".next");

//1. 너비 조절 + 윈도우 크기시에도 알맞게 너비조절
function slidelayout() {
  /*슬라이드 배치
 slidewrapper의 너비를 파악하고 슬라이드 개수를 곱한 수치를 slidecontainer의 넓이로 지정*/
  slidecontainer.style.width = slidewrapper.offsetWidth * slides.length + "px";
}
slidelayout();
window.addEventListener("resize", () => {
  slidelayout();
});

/* 스크롤양이 0보다 크면 header고정. 아니면 고정해제*/
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

//왜 한번은 잘되는데 그 이후는 안될까?
