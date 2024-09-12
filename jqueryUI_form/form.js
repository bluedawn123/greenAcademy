$( "#location" ).selectmenu({
  change: function( event, ui ) {
    updateProgress();
  }
});

var availableTags = [
  "ActionScript",
  "AppleScript",
  "Asp",
  "BASIC",
  "C",
  "C++",
  "Clojure",
  "COBOL",
  "ColdFusion",
  "Erlang",
  "Fortran",
  "Groovy",
  "Haskell",
  "Java",
  "JavaScript",
  "Lisp",
  "Perl",
  "PHP",
  "Python",
  "Ruby",
  "Scala",
  "Scheme"
];
$( "#category" ).autocomplete({
  source: availableTags,
  change: function( event, ui ) {
    updateProgress();
  }
});

$( "#experience" ).spinner({
  min:1,
  max: 5,
  change: function( event, ui ) {
    updateProgress();
  }
});

$('#experience').on('input',function(){
  let userInput = $(this).val();
  if(userInput !== '' && isNaN(userInput)){
    alert('숫자만 입력하세요');
    $(this).val('');
    $(this).focus();
  }
});

$( "#start" ).datepicker({
  minDate: new Date(),
  dateFormat: "yy-mm-dd",
  maxDate: "+2w"
});

$( "#start" ).change(function(){
  updateProgress();
});


$( "input[type='radio']" ).checkboxradio();

$( "input[type='radio']" ).change(function(){
  updateProgress();
});


$( "form button" ).button({
  disabled: true
});

$( "#progress" ).progressbar({
  value:0
});



function updateProgress(){
  const itemCount = $('.fields').length;
  let itemCompleted = 0;
  let progress = 0;

  let item1 = $('#location').val();
  let item2 = $('#category').val();
  let item3 = $('#experience').val();
  let item4 = $('#start').val();
  let item5 = $( "input[type='radio']:checked" ).val();

  if(item1) itemCompleted++;
  if(item2) itemCompleted++;
  if(item3) itemCompleted++;
  if(item4) itemCompleted++;
  if(item5) itemCompleted++;

  console.log(itemCompleted);

  progress = itemCompleted/itemCount*100;

  $( "#progress" ).progressbar( "value", progress );
  $('.percent span').text(progress);

  if(progress === 100){
    $( "form button" ).button( "enable" );
  }
  
}
