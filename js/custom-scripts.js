// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( "ready!" );
  $('#decrease').click(function() {
    $('p, h2, .mobile-button-big').css('font-size', function(i, v) {
        return (+v.match(/\d+/).join() - 2) + 'px';
    });
  });

  $('#increase').click(function() {
    $('p, h2, .mobile-button-big').css('font-size', function(i, v) {
        return (+v.match(/\d+/).join() + 2) + 'px';
    });
  });

  $('#contrast-switch').click(function(){
        $("body").toggleClass("contrasted");
    });

});
