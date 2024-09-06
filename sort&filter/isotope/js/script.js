var $grid = $('.product_list').isotope({
  // options
  itemSelector: '.item',
  getSortData:{
    order :'[data-order] parseInt'
  }
});

// store filter for each group
var filters = {};

$('.filters').on( 'click', 'button', function() {
  let $button = $(this);

  var $buttonGroup = $button.parents();
  var filterGroup = $buttonGroup.attr('data-filter-group');
  filters[ filterGroup ] = $button.attr('data-filter');
  console.log(filters);

  var filterValue = concatValues( filters );
  console.log(filterValue);

  $grid.isotope({ filter: filterValue });
});

$('#filter').change(function(){
  var filterValue = $(this).val();
  $grid.isotope({ filter: filterValue });
});

$('.sorts').on( 'click', 'button', function() {
  var sortType = $( this ).attr('data-sort');
  doSort(sortType);
});

$('#sort').change(function(){
  var sortValue = $(this).val();
  doSort(sortValue);
});

function doSort(sortType){
  if(sortType === 'order:asc'){
    $grid.isotope({ sortBy : 'order' , sortAscending: true});
  }else if(sortType === 'order:descending'){
    $grid.isotope({ sortBy : 'order' , sortAscending: false});
  }else{
    $grid.isotope({ sortBy : 'random' });
  } 
}

// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}
