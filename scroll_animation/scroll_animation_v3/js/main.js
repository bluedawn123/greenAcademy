var waypoints = $('.animate__animated').waypoint(function(direction) {
    let effectName = $(this.element).attr('data-effect');
    $(this.element).addClass(effectName);
  }, 
  {
    offset: '60%'  //위 기준
  }
)