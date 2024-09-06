const charts = $('.charts .chart');
const chartsOst = charts.offset().top - 400;
let excuted = false;

$(window).scroll(function(){
  if($(this).scrollTop() >= chartsOst){
    if(!excuted){
      startAnimation();
      excuted = true; 
    }
  }
});

function startAnimation(){
  charts.each(function(){
    let num = Number($(this).attr('data-num'));
    let target = $(this).find('h2');
    let circle = $(this).find('svg');
    $({rate:0}).animate({rate:num},
      {
      duration:1500,
      progress:function(){
        var now = Math.floor(this.rate);
        target.text(now);
        let offset = 628 - (6.28*now) ;
        circle.css({strokeDashoffset:offset})
      }
    });  
  });
}