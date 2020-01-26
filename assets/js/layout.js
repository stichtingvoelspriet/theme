var M = (function (m) {
  'use strict';
  var logo = $('#logo'),
    slants = $('.slant');

  function resizer() {
    // Make bottom of previous article oblique.
    var width = m.w.width(),
      height = Math.floor(width * 0.02),
      blw = 'border-left-width';
    slants.each(function (i, slant) {
      if ($(slant).css(blw) !== '0px') {
        $(slant).css(blw, width + 'px');
        $(slant).css('border-bottom-width', height + 'px');
      } else {
        $(slant).css('border-right-width', width + 'px');
        $(slant).css('border-bottom-width', height + 'px');
      }
    });
    // Set logo to full screen.
    logo.height(m.w.innerHeight() - m.callDiv.height());
  }

  m.w.resize(resizer);
  resizer();
  return m;
})(M);
