

//////////////////////////////탭상품들//////////////////////////

// grid관련
let product1 = [{
  id: 0,
  price: 75000,
  title: "QE2_SH02 페이퍼셔츠-민트그레이",
  url: "images/men1.jpg",
  type: 'men'
},
{
  id: 1,
  price: 80000,
  title: "PP_SH13 페이퍼셔츠-화이트",
  url: "images/men2.jpg",
  type: 'men'
},

{
  id: 2,
  price: 130000,
  title: "LN_ST02 린넨 스트링 팬츠 - 네이비",
  url: "images/men3.jpg",
  type: 'men'
},
{
  id: 3,
  price: 135000,
  title: "KC_ST05 치코 스트라이프 반팔티-그린",
  url: "images/women1.jpg",
  type: 'women'
},
{
  id: 4,
  price: 115000,
  title: "FR_ST03 프렌치 스트라이프 셔츠-네이비",
  url: "images/women2.jpg",
  type: 'women'
},
{
  id: 5,
  price: 215000,
  title: "PP_LV05 페이퍼셔츠-라벤더",
  url: "images/women3.jpg",
  type: 'women'
},
{
  id: 6,
  price: 85000,
  title: "PP_ST01 페이퍼셔츠-화이트",
  url: "images/women4.jpg",
  type: 'women'
},
{
  id: 7,
  price: 37000,
  title: "LN_BL09 린넨 블루 셔츠",
  url: "images/kids1.jpg",
  type: 'kids'
},
{
  id: 8,
  price: 135050,
  title: "SD_LM01 솔리드 레몬 셔츠",
  url: "images/kids2.jpg",
  type: 'kids'
},
{
  id: 9,
  price: 25030,
  title: "CT_ST01 코튼 스트라이프 티셔츠",
  url: "images/kids3.jpg",
  type: 'kids'
},
{
  id: 10,
  price: 15000,
  title: "BB_PU09 베이비 퍼블 티셔츠",
  url: "images/baby1.jpg",
  type: 'baby'
},
{
  id: 11,
  price: 15000,
  title: "BT_LM01 베이비 레몬 티셔츠",
  url: "images/baby2.jpg",
  type: 'baby'
},
{
  id: 12,
  price: 15000,
  title: "CT_ST02 코튼 스트라이프 티셔츠",
  url: "images/baby3.jpg",
  type: 'baby'
},
{
  id: 13,
  price: 35000,
  title: "베이직 옐로우 티셔츠",
  url: "images/baby4.jpg",
  type: 'baby'
},
{
  id: 14,
  price: 32000,
  title: "QE2_SH02 키즈 퍼플 스트라이프 티셔츠",
  url: "images/kids4.jpg",
  type: 'kids'
},
{
  id: 15,
  price: 35000,
  title: "OE2_SH02 우먼 클래식 셔츠",
  url: "images/women6.jpg",
  type: 'women'
},
{
  id: 16,
  price: 95000,
  title: "QE2_BT02 맨즈 레더 벨트",
  url: "images/men5.jpg",
  type: 'men'
},
{
  id: 17,
  price: 55000,
  title: "BL_DT01 블루 도트 셔츠",
  url: "images/men6.jpg",
  type: 'men'
},
{
  id: 18,
  price: 45600,
  title: "SP_CU01 심플 데님 셔츠",
  url: "images/men7.jpg",
  type: 'men'
},
{
  id: 19,
  price: 65600,
  title: "WH_CL01 칼라드 화이트 셔츠",
  url: "images/men8.jpg",
  type: 'men'
},
];


const search_wrapper = document.querySelector('.search-wrapper');
const imageList = document.querySelector('.image-list');
const btns = document.querySelectorAll('.view-options button');
// const imageListItem = imageList.querySelectorAll('li')
const active = 'active';
const listView = 'list-view';
const gridView = 'grid-view';
const dnone = 'd-none';
const rangeInput = document.querySelector('input[type="range"]');
const searchInput = document.querySelector('input[type="search"]');
const zoom = document.querySelector('.zoom');
// const captions = imageList.querySelectorAll('figcaption p:first-child')
const count = document.querySelector('span');
const buttonLow = document.querySelector('.button1');
const buttonHigh = document.querySelector('.button2');
let newHtml = '';


//초기 배열 + 추가
product1.slice(0, 10).forEach(item => {
  newHtml +=
    `<li>
  <figure>
    <img src="${item.url}" alt="">
    <figcaption>
      <p>${item.title}</p>
      <p>${item.price}</p>
    </figcaption>
  </figure>
</li>`
})
imageList.innerHTML = newHtml

console.log(imageList)

const imageListItem = imageList.querySelectorAll('li')


const captionArr = []; //새배열생성
const captions = imageList.querySelectorAll('figcaption p:first-child') //각 개체의 제목들
const images = imageList.querySelectorAll('figure img')
// const makers = imageList.querySelectorAll('figcaption p:nth-child(2) a');
const prices = imageList.querySelectorAll('figcaption p:nth-child(2)') //각 개체의 제목들
let counter = 0; // 숫자를 지정해주기 위해서.

//빈 배열에 id, text, price을 밀어넣음.
for (let i = 0; i < captions.length; i++) {
  captionArr.push({
    url: images[i].getAttribute('src'),

    id: counter++, // 고유 ID를 부여합니다.
    text: captions[i].textContent, // 텍스트를 추가합니다.
    price: Number(prices[i].textContent) // 가격을 추가합니다.
  });
}

//id 기준으로 새 배열 top10 만들기
const top10 = [];
for (let i = 0; i < 10; i++) {
  top10.push({
    url: images[i].getAttribute('src'),
    id: counter++,
    text: captions[i].textContent,
    price: Number(prices[i].textContent)
  }
  )
}




searchInput.addEventListener('change', (e) => {
  let keywords = e.target.value;

  // 전체 리스트를 먼저 숨깁니다.
  imageListItem.forEach((item) => {
    item.classList.add('d-none');
  });

  // 검색어에 해당하는 필터된 배열 생성
  let filteredArr = captionArr.filter(caption => caption.text.includes(keywords));

  // 필터된 배열이 있으면 해당 아이템만 보여줍니다.
  if (filteredArr.length > 0) {
    for (let item of filteredArr) {
      imageListItem[item.id].classList.remove('d-none');
    }
  } else {
    // 필터된 결과가 없을 경우 표시할 HTML을 동적으로 추가
    imageList.innerHTML = `
      <li class="no-results">
        <figure>
          <figcaption>
            <p>'${keywords}'와 일치하는 상품이 없습니다.</p>
            <p>다른 검색어를 다시 입력해주세요.</p>
          </figcaption>
        </figure>
      </li>`;
  }
});


// ///////////////////////////////////////가격정렬을 만들어보자/////////////////////////
const priceSelector = document.querySelector("#price__selector");
priceSelector.addEventListener("change", (e) => {
  if (e.target.value == "낮은 가격순") {

    //낮은가격순일때 할일
    //모든 아이템을 일단 없애준다.
    imageListItem.forEach(item => {
      item.classList.add(dnone)
    })

    console.log(imageListItem)

    //내림차순을 만들어준다.
    const newCaptionArr1 = [...captionArr];
    newCaptionArr1.sort((a, b) => {
      return a.price - b.price;
    });

    console.log(newCaptionArr1) //price 기준 low -> high로 새로운 배열이 모두 나온다.

    let lowtoHighPriceHtml = '';

    newCaptionArr1.slice(0, 10).forEach(item => {
      lowtoHighPriceHtml +=
        `<li>
          <figure>
            <img src="${item.url}" alt="">
            <figcaption>
              <p>${item.text}</p>
              <p>${item.price}KRW</p>
            </figcaption>
          </figure>
        </li>`
    })
    imageList.innerHTML = lowtoHighPriceHtml

  } else if (e.target.value == "높은 가격순") {
    //모든 아이템을 일단 없애준다.
    imageListItem.forEach((item, idx, all) => {
      item.classList.add(dnone)
    })

    //내림차순을 만들어준다.
    const newCaptionArr2 = [...captionArr];
    newCaptionArr2.sort((a, b) => {
      return b.price - a.price;
    });

    let HighToLowPrice = '';
    newCaptionArr2.slice(0, 10).forEach(item => {
      HighToLowPrice +=
        `<li>
          <figure>
            <img src="${item.url}" alt="">
            <figcaption>
              <p>${item.text}</p>
              <p>${item.price}KRW</p>
            </figcaption>
          </figure>
        </li>`
    })
    imageList.innerHTML = HighToLowPrice


  } else { //신상품. id순으로 하면된다. 
    imageListItem.forEach(item => {
      item.classList.remove(dnone)
    })

    const newCaptionArr3 = [...top10];

    let newItems = '';

    newCaptionArr3.forEach(item => {
      newItems +=
        `<li>
          <figure>
            <img src="${item.url}" alt="">
            <figcaption>
              <p>${item.text}</p>
              <p>${item.price}KRW</p>
            </figcaption>
          </figure>
        </li>`
    })
    imageList.innerHTML = newItems
  }
});


////////////////////////////////////////////탭메뉴 연동///////////////////////////////////////
let tabMenu = document.querySelectorAll('.tab-menu a');
let tabContent = document.querySelectorAll('#tab-content > div')

for (let tm of tabMenu) {
  tm.addEventListener('click', function (e) {
    e.preventDefault();

    for (let tm of tabMenu) {
      tm.classList.remove('tab-active');
    }
    tm.classList.add('tab-active');

    for (let tc of tabContent) {
      tc.classList.remove('tab-active');
    }

    let target = tm.getAttribute('href');

    //선택한 것이 남자라면
    if (target === 'men') {
      //셀렉터 안보이게
      search_wrapper.classList.add(dnone)
      priceSelector.classList.add(dnone)


      //일단없애주고
      imageListItem.forEach((item, idx, all) => {
        item.classList.add(dnone)
      })
      //type=men인것으로 새로운 배열을 만들어준다. 
      const menProducts = product1.filter(item => item.type === 'men');
      console.log(menProducts); // 남성용 제품들만 해당하는 것들이 잘 들어있다. 

      let emptyHtml = '';

      menProducts.forEach(item => {
        emptyHtml +=
          `<li>
              <figure>
                  <img src="${item.url}" alt="">
                  <figcaption>
                      <p>${item.title}</p>
                      <p>${item.price}KRW</p>
                  </figcaption>
              </figure>
          </li>`
      })
      imageList.innerHTML = emptyHtml



    } else if (target === 'women') {
      search_wrapper.classList.add(dnone)
      priceSelector.classList.add(dnone)


      //일단없애주고
      imageListItem.forEach((item, idx, all) => {
        item.classList.add(dnone)
      })

      const womenProducts = product1.filter(item => item.type === 'women');

      let emptyHtml2 = '';

      womenProducts.forEach(item => {
        emptyHtml2 +=
          `<li>
              <figure>
                  <img src="${item.url}" alt="">
                  <figcaption>
                      <p>${item.title}</p>
                      <p>${item.price}KRW</p>
                  </figcaption>
              </figure>
          </li>`
      })
      imageList.innerHTML = emptyHtml2

    } else if (target === 'kids') {
      search_wrapper.classList.add(dnone)
      priceSelector.classList.add(dnone)


      //일단없애주고
      imageListItem.forEach((item, idx, all) => {
        item.classList.add(dnone)
      })

      const kidsProducts = product1.filter(item => item.type === 'kids');

      let emptyHtml3 = '';

      kidsProducts.forEach(item => {
        emptyHtml3 +=
          `<li>
              <figure>
                  <img src="${item.url}" alt="">
                  <figcaption>
                      <p>${item.title}</p>
                      <p>${item.price}KRW</p>
                  </figcaption>
              </figure>
          </li>`
      })
      imageList.innerHTML = emptyHtml3

    } else if (target === 'baby') {
      search_wrapper.classList.add(dnone)
      priceSelector.classList.add(dnone)

      //일단없애주고
      imageListItem.forEach((item, idx, all) => {
        item.classList.add(dnone)
      })

      const babyProducts = product1.filter(item => item.type === 'baby');

      let emptyHtml4 = '';

      babyProducts.forEach(item => {
        emptyHtml4 +=
          `<li>
              <figure>
                  <img src="${item.url}" alt="">
                  <figcaption>
                      <p>${item.title}</p>
                      <p>${item.price}KRW</p>
                  </figcaption>
              </figure>
          </li>`
      })
      imageList.innerHTML = emptyHtml4

    } else  {
      search_wrapper.classList.remove(dnone)
      priceSelector.classList.remove(dnone)

      imageListItem.forEach(item => {
        item.classList.remove(dnone)
      })

      const newCaptionArr3 = [...top10];

      let newItems = '';

      newCaptionArr3.forEach(item => {
        newItems +=
          `<li>
              <figure>
                <img src="${item.url}" alt="">
                <figcaption>
                  <p>${item.text}</p>
                  <p>${item.price}KRW</p>
                </figcaption>
              </figure>
            </li>`
      })
      imageList.innerHTML = newItems

    }
  });
}