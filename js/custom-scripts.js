// A $( document ).ready() block.
$( document ).ready(function() {
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
  // demo for hooking the Android backbutton to the slide 'right'
  document.addEventListener('backbutton', function() {
    slide('right', 'purple');
  }, false);

  var options = {
    "direction"      : "up", // 'left|right|up|down', default 'right' (Android currently only supports left and right)
    "duration"       :  600, // in milliseconds (ms), default 400
    "iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
    "androiddelay"   :  100,  // same as above but for Android, default 70
    "winphonedelay"  :  150 // same as above but for Windows Phone, default 200
  };
  window.plugins.nativepagetransitions.slide(
    options,
    function (msg) {console.log("success: " + msg)}, // called when the animation has finished
    function (msg) {alert("error: " + msg)} // called in case you pass in weird values
  );

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
