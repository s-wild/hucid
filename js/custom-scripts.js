// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( "ready!" );
  // demo for hooking the Android backbutton to the slide 'right'
  document.addEventListener('backbutton', function() {
    slide('right', 'purple');
  }, false);

  // Slide for Android
  function slide(direction, color, slowdownfactor, hrf) {
    if (!hrf) {
      setTimeout(function () {
        // update the page inside this timeout
        document.querySelector("#title").innerHTML = direction;
        document.querySelector("html").style.background = color;
      }, 20);
    }
    // not passing in options makes the plugin fall back to the defaults defined in the JS API
    var theOptions = {
      'direction': direction,
      'duration': 2000,
      'slowdownfactor' : slowdownfactor,
      'href': hrf,
      'fixedPixelsTop' : 40, // optional, the number of pixels of your fixed header, default 0 (iOS and Android)
      'fixedPixelsBottom': 0  // optional, the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
    };
    window.plugins.nativepagetransitions.slide(
        theOptions,
        function () {
          console.log('------------------- slide transition finished');
        },
        function (msg) {
          alert('error: ' + msg);
        });
  }

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
