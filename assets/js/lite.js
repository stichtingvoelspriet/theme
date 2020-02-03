var M = (function (m) {
  'use strict';
  var bg = $('#litebg'), box = $('#litebox'), img = $('#liteimg'), prev = $('#liteprev'), next = $('#litenext'), nowa, preva, nexta, tx, ty;

  function set(url) {
    bg.toggle(!!url);
    box.toggle(!!url);
    m.b.css('overflow', url ? 'hidden': '');
    // Show spinner first.
    url && img.attr('src', '').attr('src', url.replace(/(\/upload\/)/, "$1w_" + m.w.width() + ",h_" + m.w.height() + ",c_limit/"));
  }

  function click(a) {
    nowa = $(a);
    prev.toggle(!!(preva = nowa.prev('a')[0]));
    next.toggle(!!(nexta = nowa.next('a')[0]));
    set(nowa.attr('href'));
    return false;
  }

  box.click(function () {
    set('');
  });

  prev.click(function () {
    return click(preva);
  });

  next.click(function () {
    return click(nexta);
  });

  $('a[href$="jpg"]>img').click(function () {
    return click(this.parentNode);
  });

  document.onkeydown = function (e) {
    if (e.keyCode === 37) {
      click(preva);
    } else if (e.keyCode === 39) {
      click(nexta);
    }
  };

  document.addEventListener('touchstart', function (e) {
      var t = e.touches[0];
      tx = t.clientX;
      ty = t.clientY;
  });

  document.addEventListener('touchmove', function (e) {
    if (!tx) {
      return;
    }

    var dx = tx - e.touches[0].clientX;

    if (Math.abs(dx) > Math.abs(ty - e.touches[0].clientY)) {
      dx > 0 ? click(nexta) : click(preva);
    }
    tx = ty = null;
  });

  return m;
})(M || {});
