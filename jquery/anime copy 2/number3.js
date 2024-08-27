const progress = $('.progress');
const progressBar = progress.find('.bar');
const progressSpan = progress.find('span');
let initNum = 0;
const targetNum = Number(progress.attr('data-rate'));
const main = $('main');
const mainOST = main.offset().top;

$(window).scroll(function(){
    if( $(this).stop().scrollTop() > mainOST - 300){
        if(!main.hasClass('active')){
            main.addClass('active');
            test()
        }

    }
})


function test(){
    progress.each(function(){
        let targetNum = Number( $(this).attr('data-rate'));
        let $this = $(this);
    
        $this.find('.bar').animate( {width:targetNum + '%'}, 2000);
    
        $( {initNum : 0}).animate( {initNum:targetNum}, {
            duration : 2000,
            progress:function(){
                let now = Math.floor(this.initNum);
                $this.find('span').text(now);
            }
        })
    })
    
}



