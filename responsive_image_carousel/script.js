const slider = document.querySelector('.slider')

document.addEventListener('click', (e) => {
    const items = slider.querySelectorAll('li');

    //클릭이벤트한 그 요사가 next와 일치하면
    // if(e.target.matches('.next') ){ 
    //    slider.append(items[0]);
    // }
    
    // if(e.target.matches('.prev') ){ 
    //     slider.append(items[items.length - 1]); 
    //  }


    e.target.matches('.next') && slider.append(items[0]);
    e.target.matches('.prev') && slider.append(items[items.length - 1]);


});

