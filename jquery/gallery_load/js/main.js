$(function () {

  const container = $('#gallery');
  const loadMoreBtn = $('#load-more');
  const addItemCount = 10;
  let added = 0;
  let addData = [];
  
  container.masonry({
    // options
    itemSelector: '.gallery-item',
    columnWidth: 270,
    gutter:15
  });



  $.getJSON( "./data/content.json", function( data ) {
    
    addData = data;
    addItems();
    /*
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
    */
  });

 function addItems(){
  let items = [];
  let slicedItems = addData.slice(added, added+addItemCount)
  added = added+addItemCount;
  // console.log(slicedItems);

  $.each( slicedItems, function( key, val ) {
    //   <li>A Day in the Life</li>
    let itemHTML =  `
    <li class="gallery-item">
      <h3>${val.title}</h3>
      <img src="${val.images.thumb}" alt="${val.title}">
    </li>
    `;
    
    console.log(itemHTML)

    items.push( $(itemHTML).get(0));

  });

  //리스트 생성하기 ???
  container.append(items);
  //리스트를 모두 출력하면 loadmore버튼이 사라진다.
  if(added === addData.length) { loadMoreBtn.fadeOut(); }

  //container의 이미지를 읽은 후 작동.
  container.imagesLoaded( function() {
    // images have loaded
    container.masonry( 'appended', items );

  });

  


 } //additems()

 loadMoreBtn.on('click', addItems);



/*
  fetch('./data/content.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }
    return response.json();
  })
  .then((result) => {
    console.log(result);
  });
*/


});
