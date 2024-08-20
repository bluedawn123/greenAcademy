let products = [
        {
            id: 0, price: 5000, title: "green leafed trees", maker: "redcharlie",
            url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/unsplash_nature1.jpg"
        },
        {
            id: 1, price: 80000, title: "landscape photography of brown mountain", maker: "wilstewart3",
            url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/unsplash_nature2.jpg"
        },

        {
            id: 2, price: 30000, title: "blue starry night", maker: "ignitedit",
            url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/unsplash_nature3.jpg"
        },
        { id: 3, price: 35000, title: "moon illustration", maker:"metatzon297", 
            url : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/unsplash_nature4.jpg"
        }, 
        { id: 4, price: 115000, title: "bird's eye view of body of water", maker:"timmossholder", 
            url : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/unsplash_nature5.jpg"
        }, 
    ];



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
products.forEach(item => {
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
console.log(imageListItem);


// 입력되면 할일
rangeInput.addEventListener('input', (e) => {
    let userValue = e.target.value;

    //그냥암기하자. 직접정한 property 사용시. 
    //''안의 속성을 만들고 userValue로 지정.
    document.documentElement.style.setProperty('--minRangeValue', `${userValue}px`);
});

//버튼 클릭시 border생기게.
//일단 active있는거 지우고, 부모클래스에 active 주는 방식.
for (let btn of btns) {
    btn.addEventListener('click', () => {
        let parent = btn.parentElement;

        document.querySelector('.view-options .active').classList.remove('active');
        parent.classList.add('active');

        if (parent.classList.contains('show-list')) {
            imageList.classList.remove(gridView);
            imageList.classList.add(listView);
            zoom.classList.add(dnone);
        } else {
            imageList.classList.add(gridView);
            imageList.classList.remove(listView);
            zoom.classList.remove(dnone);
        }
    });
}

// //입력창 관련.
// /*검색시 모든 리스트가 사라진다. 
// 사용자가 입력한 키워드를 캐치한다. => e.target.value
// 배열에서 입력한 키워드가 있는 요소를 확인한다. 
// => 반드시 배열. includes는 참거짓으로 return해준다. 
// 해당 키워드가 포함된요소를 보여준다.
// 일치하는 요소의 개수를 확인하고 출력한다. 

// 특정 배열,문자가 있는 걸 확인하고 새 배열 만들어주기 => 

// */

//(제목)그냥 [...]하면 유사배열을 배열로. p태그만 들어있다. 
//구별이 안되므로 빈배열로 만들고 거기에 숫자 추가.

const captionArr = [];  //새배열생성
const captions = imageList.querySelectorAll('figcaption p:first-child') //각 개체의 제목들
const prices = imageList.querySelectorAll('figcaption p:nth-child(3)') //각 개체의 제목들
let counter = 0; // 숫자를 지정해주기 위해서.

//빈 배열에 id, text, price을 밀어넣음.
for (let i = 0; i < captions.length; i++) {
    captionArr.push({
        id: counter++,                    // 고유 ID를 부여합니다.
        text: captions[i].textContent,    // 텍스트를 추가합니다.
        price: Number(prices[i].textContent)               // 가격을 추가합니다.
    });
}

console.log(captionArr); //빈 배열에 잘 들어간다. 


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


// /////////////////////가격정렬을 만들어보자
const priceSelector = document.querySelector("#price__selector");
priceSelector.addEventListener("change", (e) => {
    if (e.target.value == "낮은 가격순") {
        //낮은가격순일때 할일
        //모든 아이템을 일단 없애준다.
        imageListItem.forEach((item, idx, all) => {
            item.classList.add(dnone)
        })

        //내림차순을 만들어준다.
        const newCaptionArr = [...captionArr];
        newCaptionArr.sort((a, b) => {
            return a.price - b.price;
        });

        console.log(newCaptionArr) //price 기준 low -> high로 새로운 배열이 모두 나온다.
        



    } else if (e.target.value == "높은 가격순") {
        //낮은가격순일때 할일
        //모든 아이템을 일단 없애준다.
        imageListItem.forEach((item, idx, all) => {
            item.classList.add(dnone)
        })

        //내림차순을 만들어준다.
        const newCaptionArr = [...captionArr];
        newCaptionArr.sort((a, b) => {
            return b.price - a.price;
        });

        console.log(newCaptionArr) //price 기준 high -> low 로 새로운 배열이 모두 나온다.

    } else {
        imageListItem.forEach( item => {
            item.classList.remove('d-none')
        })
    }
});














