var M = (function (m) {
  'use strict';
  $('#logo + .title').click(function () {
    m.goTo(m.w.innerHeight());
  });
  m.w = $(window);
  m.b = $('html,body');
  m.bgs = $('.bg');
  m.bscroll = function () {
    m.b.css('overflow', m.bgs.is(':visible') ? 'hidden' : '');
  };
  m.callDiv = $('.title:first');
  return m;
})(M || {});
