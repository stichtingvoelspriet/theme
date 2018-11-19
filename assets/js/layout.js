var M = (function (m) {
  'use strict';
  var logo = $('#logo'),
    slants = $('.slant');

  function resizer() {
    // Make bottom of previous article oblique.
    var width = m.jwin.width(),
      height = Math.floor(width * 0.05),
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
    logo.height(m.jwin.innerHeight() - m.callDiv.height());
  }

  m.jwin.resize(resizer);
  resizer();
  return m;
})(M);
