const productList = $('.product_list');
const items = $('.item');
const filterBtns = $('.filters button');
const sortBtns = $('.sorts button');
const filterSelect = $('#filter');
const sortSelect = $('#sort');

// 필터링
filterBtns.click(function(){
  let targetClass = $(this).attr('data-filter');    
  doFilter(targetClass);
})

function doFilter(targetClass){

  productList.html('');  //기존 리스트를 삭제

  //원본 리스트를 생성
  productList.html(items);

  //item 모두 안보인다.
  items.hide();

  if(targetClass === '*'){
    items.show();
  }else{
    const targets = productList.find(targetClass);
    targets.show();
  }
}

//filterSelect의 값이 변경되면 할일
filterSelect.on('change',()=>{
  let targetClass = filterSelect.val();
  doFilter(targetClass);
});

//sortSelect 값이 변경되면 할일
sortSelect.on('change',()=>{
  let itemsArr = [...items];  //NodeList->Array, HTMLCollection->Array
  let targetList = itemsArr.filter(item=> {
    if(!$(item).attr('style') || $(item).attr('style') === 'display:block'){
      return item;
    }
  });
  let direction = sortSelect.val();
  doSort(targetList,direction);
});


function doSort(arr,direction){
  console.log(arr,direction);

  if(direction === 'asc'){
    //오름차순
    arr.sort(function (a, b) {
      return $(a).attr('data-order') - $(b).attr('data-order');
    });
  }
  if(direction === 'desc'){
    //내림차순
    arr.sort(function (a, b) {
      return $(b).attr('data-order') - $(a).attr('data-order');
    });
  }
  if(direction === 'random'){
    // 랜덤 섞기
    arr.sort(function () {
      return Math.random() - 0.5;
    });
  }
  console.log(arr);
  productList.html(''); //기존 리스트를 삭제
  productList.append(arr);  
}


sortBtns.on('click',(e)=>{
    console.log(e);
    let itemsArr = [...items];  //NodeList->Array, HTMLCollection->Array
    console.log(itemsArr);
    let targetList = itemsArr.filter(item=> {
      if(!$(item).attr('style') || $(item).attr('style') === 'display:block'){
        return item;
      }
    });
    let direction = $(e.target).attr('data-sort');
    doSort(targetList,direction);
  })



/*


*/