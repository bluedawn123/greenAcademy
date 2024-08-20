let products = [
    { id: 0, price: 5000, title: "댕댕이 개껌" },
    { id: 1, price: 80000, title: "멍멍이 방석" },
    { id: 2, price: 30000, title: "강아지 사료" },
];
// 셀렉터
const ShopSelector = document.querySelector("#shop__selector");
// 컨테이너
const CardsContainer = document.querySelector(".shop___card__container");
// 버튼
const BasicBtn = document.querySelector(".shop__basicBtn");
// HTML
const ShopCard =
   `<div class="shop__card" id="0">
        <h3 class="title"></h3>
        <p><span class="price"></span></p>
        <button class="order">주문하기</button>
    </div>`;

// 초기 배열
for (i = 0; i < products.length; i++) {
    CardsContainer.insertAdjacentHTML("beforeend", ShopCard);
    const CardsTitle = document.querySelectorAll(".title");
    const CardsPrice = document.querySelectorAll(".price");
    CardsTitle[i].insertAdjacentHTML("beforeend", `${products[i].title}`);
    CardsPrice[i].insertAdjacentHTML("beforeend", `${products[i].price}`);

}

// 오름차순
function ProductSortUp() {
    while (CardsContainer.hasChildNodes()) {
        CardsContainer.removeChild(CardsContainer.firstChild);
    }
    const NewProducts = [...products];
    NewProducts.sort(function (a, b) {
        return a.price - b.price;
    });

    // console.log(NewProducts)

    for (i = 0; i < NewProducts.length; i++) {
        CardsContainer.insertAdjacentHTML("beforeend", ShopCard);
        const CardsTitle = document.querySelectorAll(".title");
        const CardsPrice = document.querySelectorAll(".price");
        CardsPrice[i].insertAdjacentHTML("beforeend", `${NewProducts[i].price}`);
        CardsTitle[i].insertAdjacentHTML("beforeend", `${NewProducts[i].title}`);
    }
}

// 내림차순
function ProductSortDown() {
    while (CardsContainer.hasChildNodes()) {
        CardsContainer.removeChild(CardsContainer.firstChild);
    }
    const NewProducts = [...products];
    NewProducts.sort(function (a, b) {
        return b.price - a.price;
    });

    for (i = 0; i < NewProducts.length; i++) {
        CardsContainer.insertAdjacentHTML("beforeend", ShopCard);
        const CardsTitle = document.querySelectorAll(".title");
        const CardsPrice = document.querySelectorAll(".price");
        CardsPrice[i].insertAdjacentHTML("beforeend", `${NewProducts[i].price}`);
        CardsTitle[i].insertAdjacentHTML("beforeend", `${NewProducts[i].title}`);
    }
}



// 셀렉트의 경우
ShopSelector.addEventListener("change", (e) => {
    if (e.target.value == "낮은 가격순") {
        ProductSortUp();
    } else if (e.target.value == "높은 가격순") {
        ProductSortDown();
    } else {
        ProductExchange();
    }
});
