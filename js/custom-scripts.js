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

var options = {
  "direction"        : "up", // 'left|right|up|down', default 'left' (which is like 'next')
  "duration"         :  500, // in milliseconds (ms), default 400
  "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
  "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
  "androiddelay"     :  150, // same as above but for Android, default 70
  "winphonedelay"    :  250, // same as above but for Windows Phone, default 200,
  "fixedPixelsTop"   :    0, // the number of pixels of your fixed header, default 0 (iOS and Android)
  "fixedPixelsBottom":   60  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
};
window.plugins.nativepagetransitions.slide(
  options,
  function (msg) {console.log("success: " + msg)}, // called when the animation has finished
  function (msg) {alert("error: " + msg)} // called in case you pass in weird values
);
