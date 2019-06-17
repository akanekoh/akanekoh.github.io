$(function() {
  // open login--popup
  $('#login-show').click(function(){
    $('#login-modal').fadeIn();
  });
  
  // open signup--popup
  $('.signup-show').click(function(){
    $('#signup-modal').fadeIn();
  });
  
  // close login&signup--popup
  $('.close-modal').click(function(){
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

  //hover lesson-icon than open txt-contents
  $('.lesson-hover').hover(
    function(){
      $(this).find('.txt-contents').addClass('txt-hover');
    },
    function(){
      $(this).find('.txt-contents').removeClass('txt-hover');
    }
  );
  
//「.faq-list-item」click, 「.answer」open/「.answer」close

  $('.faq-list-item').click(function(){
    var $answer=$(this).find('.answer');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');

    }else{
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');
    }

  });


  
});
