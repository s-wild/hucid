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

document.addEventListener('deviceready', function () {

    // have to call initialize function with canvas object
    var objCanvas = document.getElementById("canvas");
    window.plugin.CanvasCamera.initialize(objCanvas);

    // window.plugin.CanvasCamera is now available
}, false);
