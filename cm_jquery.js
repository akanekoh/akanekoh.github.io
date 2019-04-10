$(function() {
    
    $('#franceBtn').click(function(){
      $('#franceWrapper').show();
      $('#japanWrapper').hide();
      $('#taiwanWrapper').hide();
    })

    $('#japanBtn').click(function(){
        $('#japanWrapper').show();
        $('#franceWrapper').hide();
        $('#taiwanWrapper').hide();
    })

    $('#taiwanBtn').click(function(){
        $('#taiwanWrapper').show();
        $('#franceWrapper').hide();
        $('#japanWrapper').hide();
    })
    

    
  });