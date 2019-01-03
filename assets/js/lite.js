var M = (function (m) {
  'use strict';
  var bg = $('#litebg'), box = $('#litebox'), img = $('#liteimg'), prev = $('#liteprev'), next = $('#litenext'), nowa, preva, nexta;

  function set(url) {
    bg.toggle(!!url);
    box.toggle(!!url);
    // Show spinner first.
    img.attr('src', '').attr('src', url);
  }

  function clr() {
    set('');
  }

  function click(a) {
    nowa = $(a);
    prev.toggle(!!(preva = nowa.prev('a')[0]));
    next.toggle(!!(nexta = nowa.next('a')[0]));
    set(nowa.attr('href'));
    return false;
  }

  bg.click(clr);
  box.click(clr);
  prev.click(function () {
    return click(preva);
  });
  next.click(function () {
    return click(nexta);
  });
  $('a[href$="jpg"]>img').click(function () {
    return click(this.parentNode);
  });
  return m;
})(M || {});
