var M = (function (m) {
  'use strict';
  $('#logo + .title').click(function () {
    m.goTo(m.w.innerHeight());
  });
  m.w = $(window);
  m.callDiv = $('.title:first');
  return m;
})(M || {});
