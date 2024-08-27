$(function(){
    const selectDomain = $('.select_domain');
    const emailDomain = $('.email_domain')
    const unitprice = Number($('.unitprice').attr('data-price'));
    const minusBtn = $('#minus');
    const plusBtn = $('#plus');
    const count = $('.count');
    const total = $('.total');
    


    // 시작하자마자 숫자를 천단위로.
    $('.number').number( true );

    /*selectDomain의 값이 변경되면 할일
    사용자가 선택한 값을 변수명 selectedValue에 할당하고
    그 값을 emailDomain의 값으로 지정한다.
    */

    selectDomain.change(function(){
        let selectedValue = $(this).val()

        emailDomain.val(selectedValue);
        
        if(selectedValue === '직접입력'){
            emailDomain.val('');
            emailDomain.focus();
        }else{
            emailDomain.val(selectedValue);
        }
    })

    /*plus버튼을 클릭하면, 수량을 1씩 올리고 합계를 변형한다.  */
    
    plusBtn.click(function(){
        
        //값 가져오기
        let quantity = Number(count.text());
        quantity++;

        //넣기
        count.text(quantity)
        console.log(typeof(count)) //객채형식이다. 
        
        //총 가격
        total.text((quantity * unitprice).toLocaleString()); //객체형식

    })

    minusBtn.click(function(){
        
        //값 가져오기
        let quantity = Number(count.text());
        
        if(quantity > 2){
            count.text(--quantity);
            total.text((quantity * unitprice).toLocaleString());
        }else{
            alert('수량은 1이상');
        }
    })
})

