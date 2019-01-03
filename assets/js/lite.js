var M = (function (m) {
  'use strict';
  var bg = $('#litebg'), box = $('#litebox'), img = $('#liteimg'), prev = $('#liteprev'), next = $('#litenext');

  function set(src) {
    bg.toggle(!!src);
    box.toggle(!!src);
    img.attr('src', src);
  }

  function unset() {
    set(null);
  }

  bg.click(unset);
  box.click(unset);

  function show(a) {
    var a = $(a), href = a.attr('href'), preva = a.prev('a')[0], nexta = a.next('a')[0];
    prev.click(function() {
      set();
      return show(preva);
    });
    next.click(function() {
      set();
      return show(nexta);
    });
    prev.toggle(!!preva);
    next.toggle(!!nexta);
    set(href);
    return false;
  }

  $('a[href$="jpg"]>img').click(function () {
    return show(this.parentNode);
  });
  return m;
})(M || {});
