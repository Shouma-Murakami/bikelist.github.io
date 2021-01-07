$(function(){
    $('.list-item').on('click', function() {
        $(this).css('color','red');
      });
      $('.list-item').on('dblclick', function() {
        $(this).css('color','black');
      });
    $('.reset-btn').on('click',function(){
        $('.list-item').css('color','black');
    });
});
