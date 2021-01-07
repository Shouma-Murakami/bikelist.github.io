
$(function(){
  $('.list-item').on('dblclick', function() {
    $(this).css('color','black');
  });
  $('.reset-btn').on('click',function(){
    $('.list-item').css('color','black');
  });
  $('.list-item').longpress(function(e){
    $(this).css('color','black');
  },function(e){
    $(this).css('color','red');
  })
});
