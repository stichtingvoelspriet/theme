var M = (function (m) {
  'use strict';
  $('#logo + .title').click(function () {
    m.goTo(m.jwin.innerHeight());
  });
  m.jwin = $(window);
  m.callDiv = $('.title:first');
  return m;
})(M || {});
