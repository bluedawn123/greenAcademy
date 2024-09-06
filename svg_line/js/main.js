const charts = $('.charts .chart');

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
      // let offset = ??????????????????;
      circle.css({strokeDashoffset:offset})
    }
  });  
});