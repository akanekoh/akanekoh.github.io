
//practice1_
$(function() {
    // 「#change-text」要素に対するclickイベントを作成してください
    $('#change-text').click(function(){
      $('#text').text('Hello Kitty');
    })
    
    
  });

  $(function() {
    $('#change-html').click(function(){
      $('#text').html('<a href="http://www.google.com">Hello, World!</a>');
    })
    
    
  });  

//practice2_
$(function() {
    // 「.list-item」の要素に対するclickイベントを作成してください
    $('.list-item').click(function(){
      $(this).css("color","red");
    })
    
  });



//practice3_
  $(function() {
    // 「#language-wrapper」にhoverしたときのhoverイベントを作成してください
    $('#language-wrapper').hover(
      function(){
        $('.language-text').fadeIn();
      },
       function(){
        $('.language-text').fadeOut();
      }
      
      )
  });


  
