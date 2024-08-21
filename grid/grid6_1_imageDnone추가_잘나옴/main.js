let product1 = [{
        id: 0,
        price: 5000,
        title: "green leafed trees",
        maker: "redcharlie",
        url: "images/men1.jpg",
        type: 'men'
    },
    {
        id: 1,
        price: 80000,
        title: "landscape photography of brown mountain",
        maker: "wilstewart3",
        url: "images/men2.jpg",
        type: 'men'
    },

    {
        id: 2,
        price: 30000,
        title: "blue starry night",
        maker: "ignitedit",
        url: "images/men3.jpg",
        type: 'men'
    },
    {
        id: 3,
        price: 35000,
        title: "moon illustration",
        maker: "metatzon297",
        url: "images/women1.jpg",
        type: 'women'
    },
    {
        id: 4,
        price: 115000,
        title: "bird's eye view of body of water",
        maker: "timmossholder",
        url: "images/women2.jpg",
        type: 'women'
    },
    {
        id: 5,
        price: 215000,
        title: "666666666666",
        maker: "timmossholder",
        url: "images/women3.jpg",
        type: 'women'
    },
    {
        id: 6,
        price: 215000,
        title: "777777777777",
        maker: "timmossholder",
        url: "images/women4.jpg",
        type: 'women'
    },
    {
        id: 7,
        price: 35000,
        title: "888888888888",
        maker: "timmossholder",
        url: "images/kids1.jpg",
        type: 'kids'
    },
    {
        id: 8,
        price: 635000,
        title: "999999999r",
        maker: "timmossholder",
        url: "images/kids2.jpg",
        type: 'kids'
    },
    {
        id: 9,
        price: 1635000,
        title: "100000000000",
        maker: "timmossholder",
        url: "images/kids3.jpg",
        type: 'kids'
    },
    {
        id: 10,
        price: 2635000,
        title: "bird'sfsfsfsf of water",
        maker: "timmossholder",
        url: "images/baby1.jpg",
        type: 'baby'
    },
    {
        id: 11,
        price: 435000,
        title: "bird'sfsfsfsf of water",
        maker: "timmossholder",
        url: "images/baby2.jpg",
        type: 'baby'
    },
    {
        id: 12,
        price: 435000,
        title: "bird'sfsfsfsf of water",
        maker: "timmossholder",
        url: "images/baby3.jpg",
        type: 'baby'
    },
    // {
    //     id: 13,
    //     price: 435000,
    //     title: "bird'sfsfsfsf of water",
    //     maker: "timmossholder",
    //     url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/unsplash_nature6.jpg",
    //     type: 'baby'
    // },
    // {
    //     id: 14,
    //     price: 435000,
    //     title: "bird'sfsfsfsf of water",
    //     maker: "timmossholder",
    //     url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/unsplash_nature6.jpg",
    //     type: 'kids'
    // },
    // {
    //     id: 15,
    //     price: 435000,
    //     title: "bird'sfsfsfsf of water",
    //     maker: "timmossholder",
    //     url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/unsplash_nature6.jpg",
    //     type: 'women'
    // },
    // {
    //     id: 16,
    //     price: 435000,
    //     title: "bird'sfsfsfsf of water",
    //     maker: "timmossholder",
    //     url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/unsplash_nature11.jpg",
    //     type: 'men'
    // },
    // {
    //     id: 17,
    //     price: 435000,
    //     title: "bird'sfsfsfsf of water",
    //     maker: "timmossholder",
    //     url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/unsplash_nature12.jpg",
    //     type: 'men'
    // },
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
product1.slice(0,10).forEach(item => {
    newHtml +=
        `<li>
    <figure>
      <img src="${item.url}" alt="">
      <figcaption>
        <p>${item.title}</p>
        <p>Photo by <a href="https://unsplash.com/@${item.maker}" target="_blank">${item.maker}</a></p>
        <p>${item.price}</p>
      </figcaption>
    </figure>
  </li>`
})
imageList.innerHTML = newHtml
const imageListItem = imageList.querySelectorAll('li')


const captionArr = []; //새배열생성
const captions = imageList.querySelectorAll('figcaption p:first-child') //각 개체의 제목들
const images = imageList.querySelectorAll('figure img')
const makers = imageList.querySelectorAll('figcaption p:nth-child(2) a');
const prices = imageList.querySelectorAll('figcaption p:nth-child(3)') //각 개체의 제목들
let counter = 0; // 숫자를 지정해주기 위해서.

//빈 배열에 id, text, price을 밀어넣음.
for (let i = 0; i < captions.length; i++) {
    captionArr.push({
        url: images[i].getAttribute('src'),
        maker: makers[i].textContent,
        id: counter++, // 고유 ID를 부여합니다.
        text: captions[i].textContent, // 텍스트를 추가합니다.
        price: Number(prices[i].textContent) // 가격을 추가합니다.
    });
}

console.log(captionArr); //빈 배열에 잘 들어간다. 


const top10 = [];
for (let i = 0; i < 10; i++){
    top10.push({
        url: images[i].getAttribute('src'),
        maker: makers[i].textContent,
        id: counter++, 
        text: captions[i].textContent, 
        price: Number(prices[i].textContent) 
    }
    )
}

console.log(top10);




searchInput.addEventListener('change', (e) => {
    let keywords = e.target.value

    imageListItem.forEach((item, idx, all) => {
        item.classList.add('d-none')
    })

    let filteredArr = captionArr.filter(caption => caption.text.includes(keywords));
    console.log(filteredArr); // [{…}, {…}, {…}] 이런식으로..그리고 안에는 id, text, price가 들어있다. 
    //{id: 0, text: 'green leafed trees', price: 19000}

    for (let item of filteredArr) {
        //imageListItem[item[n]].classList.remove(dnone);
        //console.log(item) 각 객체로 잘 나온다.
        imageListItem[item.id].classList.remove('d-none');
    }
    //count 갯수변경
    count.innerText = filteredArr.length;
})


// ///////////////////////////////////////가격정렬을 만들어보자/////////////////////////
const priceSelector = document.querySelector("#price__selector");
priceSelector.addEventListener("change", (e) => {
    if (e.target.value == "낮은 가격순") {
        console.log(e.target.value)
        //낮은가격순일때 할일
        //모든 아이템을 일단 없애준다.
        imageListItem.forEach( item => {
            item.classList.add(dnone)
        })

        //내림차순을 만들어준다.
        const newCaptionArr1 = [...captionArr];
        newCaptionArr1.sort((a, b) => {
            return a.price - b.price;
        });

        console.log(newCaptionArr1) //price 기준 low -> high로 새로운 배열이 모두 나온다.

        let lowtoHighPriceHtml = '';

        newCaptionArr1.slice(0,10).forEach(item => {
            lowtoHighPriceHtml +=
                `<li>
            <figure>
              <img src="${item.url}" alt="">
              <figcaption>
                <p>${item.text}</p>
                <p>Photo by <a href="https://unsplash.com/@${item.maker}" target="_blank">${item.maker}</a></p>
                <p>${item.price}</p>
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
        newCaptionArr2.slice(0,10).forEach(item => {
            HighToLowPrice +=
                `<li>
            <figure>
              <img src="${item.url}" alt="">
              <figcaption>
                <p>${item.text}</p>
                <p>Photo by <a href="https://unsplash.com/@${item.maker}" target="_blank">${item.maker}</a></p>
                <p>${item.price}</p>
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
                <p>Photo by <a href="https://unsplash.com/@${item.maker}" target="_blank">${item.maker}</a></p>
                <p>${item.price}</p>
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
            search_wrapper.classList.remove(dnone)
            priceSelector.classList.remove(dnone)

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
                        <p>Photo by <a href="https://unsplash.com/@${item.maker}" target="_blank">${item.maker}</a></p>
                        <p>${item.price}</p>
                    </figcaption>
                </figure>
            </li>`
            })
            imageList.innerHTML = emptyHtml

            

        } else if (target === 'women') {
            search_wrapper.classList.remove(dnone)
            priceSelector.classList.remove(dnone)

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
                        <p>Photo by <a href="https://unsplash.com/@${item.maker}" target="_blank">${item.maker}</a></p>
                        <p>${item.price}</p>
                    </figcaption>
                </figure>
            </li>`
            })
            imageList.innerHTML = emptyHtml2

        } else if (target === 'kids') {
            search_wrapper.classList.remove(dnone)
            priceSelector.classList.remove(dnone)

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
                        <p>Photo by <a href="https://unsplash.com/@${item.maker}" target="_blank">${item.maker}</a></p>
                        <p>${item.price}</p>
                    </figcaption>
                </figure>
            </li>`
            })
            imageList.innerHTML = emptyHtml3

        } else if (target === 'baby') {
            search_wrapper.classList.remove(dnone)
            priceSelector.classList.remove(dnone)

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
                        <p>Photo by <a href="https://unsplash.com/@${item.maker}" target="_blank">${item.maker}</a></p>
                        <p>${item.price}</p>
                    </figcaption>
                </figure>
            </li>`
            })
            imageList.innerHTML = emptyHtml4

        } else {
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
                    <p>Photo by <a href="https://unsplash.com/@${item.maker}" target="_blank">${item.maker}</a></p>
                    <p>${item.price}</p>
                  </figcaption>
                </figure>
              </li>`
            })
            imageList.innerHTML = newItems

            
        }
    });
}