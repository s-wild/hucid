// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( "ready!" );
  $('#decrease').click(function() {
    $('.container').css('font-size', function(i, v) {
        return (+v.match(/\d+/).join() - 2) + 'px';
    });
  });

  $('#increase').click(function() {
    $('.container').css('font-size', function(i, v) {
        return (+v.match(/\d+/).join() + 2) + 'px';
    });
  });
});
