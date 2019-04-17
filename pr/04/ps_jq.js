function fastLastHide(){
    //index番号確認し
    var slideIndex =$('.slide').index($('.active'));
    
    //show　前へ・次へ  ボタン
    $('.change-btn').show();

    //一つ目と最後の写真を判断して、前へが次へを隠す。
    lastindex=$('.slide').length-1
    if(slideIndex == 0){
        $('.prev-btn').hide();
    }else if(slideIndex == lastindex){
        $('.next-btn').hide();
    }
}

$('.index-btn').click(function(){
    $('.active').removeClass('active');
    var fotoIndex = $('.index-btn').index($(this));
    $('.slide').eq(fotoIndex).addClass('active');
    fastLastHide();
});

$('.change-btn').click(function(){
    var $nowshow = $('.active');
    $nowshow.removeClass('active');
    $('.change-btn').show();
    if($(this).hasClass('next-btn')){
        $nowshow.next().addClass('active');
    }else{
        $nowshow.prev().addClass('active');
    }
    fastLastHide();
});



