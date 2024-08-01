//아래를 쓰기 싫으면, html의 script를 바디 아래로
document.addEventListener("DOMContentLoaded", () => {
  const goTop = document.querySelector("#go-top");
  //scroll은 window에 생김
  window.addEventListener("scroll", () => {
    let scrollAmt = window.scrollY;

    console.log(scrollAmt);

    //스크롤량이 300보다 많으면 나타나고 아니면 사라지게 해보자.
    if (scrollAmt > 300) {
      goTop.classList.add("active");
    } else {
      goTop.classList.remove("active");
    }
  });

  goTop.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  });
});
