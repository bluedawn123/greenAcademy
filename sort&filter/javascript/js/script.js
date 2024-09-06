const productList = document.querySelector('.product_list');
const items = productList.querySelectorAll('.item');
const filterBtns = document.querySelectorAll('.filters button');
const sortBtns = document.querySelectorAll('.sorts button');
const filterSelect = document.querySelector('#filter');
const sortSelect = document.querySelector('#sort');

// 필터링
filterBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    let targetClass = btn.getAttribute('data-filter');    
    doFilter(targetClass);
  })
});

//filterSelect의 값이 변경되면 할일
filterSelect.addEventListener('change',()=>{
  let targetClass = filterSelect.value;
  doFilter(targetClass);
});

//sortSelect 값이 변경되면 할일
sortSelect.addEventListener('change',()=>{
  let itemsArr = [...items];  //NodeList->Array, HTMLCollection->Array
  let targetList = itemsArr.filter(item=> {
    if(!item.getAttribute('style') || item.style.display === 'block'){
      return item;
    }
  });
  let direction = sortSelect.value;
  doSort(targetList,direction);
});

sortBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    let itemsArr = [...items];  //NodeList->Array, HTMLCollection->Array
    let targetList = itemsArr.filter(item=> {
      if(!item.getAttribute('style') || item.style.display === 'block'){
        return item;
      }
    });
    let direction = btn.getAttribute('data-sort');
    doSort(targetList,direction);
  })
});

function doFilter(targetClass){

  productList.innerHTML = ''; //기존 리스트를 삭제
  //원본 리스트를 생성
  for(let item of items){
    productList.appendChild(item);
  }

  //item 모두 안보인다.
  for(let item of items){
    item.style.display = 'none';
  }

  if(targetClass === '*'){
    for(let item of items){
      item.style.display = 'block';
    }
  }else{
    const targets = productList.querySelectorAll(targetClass);
    for(let target of targets){
      target.style.display = 'block';
    }
  }
}

function doSort(arr,direction){
  console.log(arr,direction);

  if(direction === 'asc'){
    //오름차순
    arr.sort(function (a, b) {
      return a.getAttribute('data-order') - b.getAttribute('data-order');
    });
  }
  if(direction === 'desc'){
    //내림차순
    arr.sort(function (a, b) {
      return b.getAttribute('data-order') - a.getAttribute('data-order');
    });
  }
  if(direction === 'random'){
    // 랜덤 섞기
    arr.sort(function () {
      return Math.random() - 0.5;
    });
  }
  console.log(arr);
  productList.innerHTML = ''; //기존 리스트를 삭제
  for(let item of arr){
    productList.appendChild(item);
  }
}