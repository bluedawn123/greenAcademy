let sectionCount = $('#fullpage .section').length;

function initFullpage(){

    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        //scrollHorizontally: true
        navigation:true,
        menu: '#menu',
        anchors:['section1', 'section2', 'section3', 'section4'],
        afterLoad: function(origin, destination, direction, trigger){
          console.log(destination.index);
          if(destination.index === sectionCount - 1){
            $('#top').addClass('active');
          }else{
            $('#top').removeClass('active');
          }
          /*
          마지막 섹션이면 #top이 나타나고, 아니면 사라진다.
          */
        }
    });
  }
  initFullpage();