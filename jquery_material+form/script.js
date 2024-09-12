
$('#location').formSelect();

$('#category').autocomplete({
  data: {
    "Apple": null,
    "Microsoft": null,
    "Google": 'https://placehold.it/250x250'
  },
});
let now = new Date();
let minD = new Date(now.setDate(now.getDate()+1));
let maxD = new Date(now.setDate(now.getDate()+20));

$('#work').datepicker({
  format : 'yyyy/mm/dd',
  minDate: minD,
  maxDate: maxD
});

//progress
let itemCount = $('.input-field').length;

$('select').on('change',()=>{
  updateProgress();
});

$('input').on('change',()=>{
  updateProgress();
});

function updateProgress(){
  let itemCompleted = 0;
  let progress = 0;

  let location = $('#location').val();
  let category = $('#category').val();
  let exp = $('#experience').val();
  let work = $('#work').val();
  let referer = $('input[type="radio"]:checked').val();
  
  if(location) itemCompleted++;
  if(category) itemCompleted++;
  if(exp) itemCompleted++;
  if(work) itemCompleted++;
  if(referer) itemCompleted++;

  console.log(itemCompleted);

  progress = itemCompleted/itemCount * 100;
  if(progress === 100){
    $('#submit').prop('disabled', false);
    $('#progressbar .pct').css({color:'#fff'});
  }
  $('#progressbar .bar').css({width:progress+'%'});
  $('#progressbar .pct span').text(progress);
  
}
