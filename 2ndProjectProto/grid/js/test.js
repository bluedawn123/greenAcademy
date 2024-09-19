
// grid관련
let product1 = [{
  id: 0,
  price: 75000,
  title: "QE2_SH02 페이퍼셔츠-민트그레이",
  url: "images/men1.jpg",
  type: 'car'
},
{
  id: 1,
  price: 80000,
  title: "PP_SH13 페이퍼셔츠-화이트",
  url: "images/men2.jpg",
  type: 'oil'
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
  type: 'secondcar'
},
{
  id: 4,
  price: 115000,
  title: "FR_ST03 프렌치 스트라이프 셔츠-네이비",
  url: "images/women2.jpg",
  type: 'insurance'
},
{
  id: 5,
  price: 215000,
  title: "PP_LV05 페이퍼셔츠-라벤더",
  url: "images/women3.jpg",
  type: 'eatout'
},
{
  id: 6,
  price: 85000,
  title: "PP_ST01 페이퍼셔츠-화이트",
  url: "images/women4.jpg",
  type: 'coffee'
},
{
  id: 7,
  price: 37000,
  title: "LN_BL09 린넨 블루 셔츠",
  url: "images/kids1.jpg",
  type: 'culture'
},
{
  id: 8,
  price: 135050,
  title: "SD_LM01 솔리드 레몬 셔츠",
  url: "images/kids2.jpg",
  type: 'shopping'
},
{
  id: 9,
  price: 25030,
  title: "CT_ST01 코튼 스트라이프 티셔츠",
  url: "images/kids3.jpg",
  type: 'life'
},
{
  id: 10,
  price: 15000,
  title: "BB_PU09 베이비 퍼블 티셔츠",
  url: "images/baby1.jpg",
  type: 'car'
}

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




// ///////////////////////////////////////가격정렬을 만들어보자/////////////////////////
const priceSelector = document.querySelector("#price__selector");


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
    if (target === 'car') {
      //셀렉터 안보이게
      search_wrapper.classList.add(dnone)
      priceSelector.classList.add(dnone)


      //일단없애주고
      imageListItem.forEach((item, idx, all) => {
        item.classList.add(dnone)
      })
      //type=men인것으로 새로운 배열을 만들어준다. 
      const menProducts = product1.filter(item => item.type === 'car');
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



    } else if (target === 'oil') {
      search_wrapper.classList.add(dnone)
      priceSelector.classList.add(dnone)


      //일단없애주고
      imageListItem.forEach((item, idx, all) => {
        item.classList.add(dnone)
      })

      const womenProducts = product1.filter(item => item.type === 'oil');

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

    } else if (target === 'secondcar') {
      search_wrapper.classList.add(dnone)
      priceSelector.classList.add(dnone)


      //일단없애주고
      imageListItem.forEach((item, idx, all) => {
        item.classList.add(dnone)
      })

      const kidsProducts = product1.filter(item => item.type === 'secondcar');

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

    } else if (target === 'insurance') {
      search_wrapper.classList.add(dnone)
      priceSelector.classList.add(dnone)

      //일단없애주고
      imageListItem.forEach((item, idx, all) => {
        item.classList.add(dnone)
      })

      const babyProducts = product1.filter(item => item.type === 'insurance');

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

    } else if (target === 'insurance') {
      search_wrapper.classList.add(dnone)
      priceSelector.classList.add(dnone)

      //일단없애주고
      imageListItem.forEach((item, idx, all) => {
        item.classList.add(dnone)
      })

      const babyProducts = product1.filter(item => item.type === 'insurance');

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

    } else if (target === 'eatout') {
      search_wrapper.classList.add(dnone)
      priceSelector.classList.add(dnone)

      //일단없애주고
      imageListItem.forEach((item, idx, all) => {
        item.classList.add(dnone)
      })

      const babyProducts = product1.filter(item => item.type === 'eatout');

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

    } else if (target === 'coffee') {
      search_wrapper.classList.add(dnone)
      priceSelector.classList.add(dnone)

      //일단없애주고
      imageListItem.forEach((item, idx, all) => {
        item.classList.add(dnone)
      })

      const babyProducts = product1.filter(item => item.type === 'coffee');

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

    } else if (target === 'culture') {
      search_wrapper.classList.add(dnone)
      priceSelector.classList.add(dnone)

      //일단없애주고
      imageListItem.forEach((item, idx, all) => {
        item.classList.add(dnone)
      })

      const babyProducts = product1.filter(item => item.type === 'culture');

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

    }else if (target === 'shopping') {
      search_wrapper.classList.add(dnone)
      priceSelector.classList.add(dnone)

      //일단없애주고
      imageListItem.forEach((item, idx, all) => {
        item.classList.add(dnone)
      })

      const babyProducts = product1.filter(item => item.type === 'shopping');

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

    } else if (target === 'life') {
      search_wrapper.classList.add(dnone)
      priceSelector.classList.add(dnone)

      //일단없애주고
      imageListItem.forEach((item, idx, all) => {
        item.classList.add(dnone)
      })

      const babyProducts = product1.filter(item => item.type === 'insurance');

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

    }
    
    else  {
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