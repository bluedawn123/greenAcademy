/*
주의점 : 페이지에 있는 걸 하면 이동한다. 
반면, 없다면 생성한다. 
해당 태그안에 모든걸 선택해서 복사하고 싶은 경우, => contents() 사용

$("b").contents().


$("b").clone().prependTo("p"); => 얜 앞자리에 추가

A.appendTo(b)  => A를 b에게 추가. b의 내용의 뒤에
C.append(x)  => x를 c에게 추가. c의 내용 뒤에

q.prependTo(j)  => q를 j에게 추가(j 앞에)
g.prepend(f)   => f를 g에게 추가(g 앞에)

*/


$(function () {
    const header = $('.page-header');
    const headerOST = header.offset().top;
    const headerHeight = header.outerHeight(true)	

    console.log(headerHeight)
    
    //header요소안의 모든 콘텐츠를 복사.
    const headerClone = header.contents().clone()
    const headerCloneContainer = $('<div class="page-header-clone"></div>');
    const body = $('body');
    headerCloneContainer.html(headerClone);

    //headerCloneContainer를 body의 내용의 뒤에 추가해보자.
    headerCloneContainer.appendTo(body);

    //윈도우 스크롤. 
    /*해당 스크롤 양이 headerOST + headerHeight 보다 크면
    headerCloneContainer가 나타나고, 작다면 headerCloneContainer가 사라진다. */
    $(window).scroll(function(){
        if( $(this).scrollTop() > headerOST + headerHeight){
            headerCloneContainer.addClass('visible');
        }else{
            headerCloneContainer.removeClass('visible');
        }
    })

    

});
