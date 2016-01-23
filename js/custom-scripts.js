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
});

window.plugins.nativepagetransitions.slide({
    // the defaults for direction, duration, etc are all fine
    "href" : "pages/register.html"
});
