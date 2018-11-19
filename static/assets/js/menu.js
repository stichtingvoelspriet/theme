var M = (function (m) {
  'use strict';
  var menu = $('#menu'),
    htmlBody = $('html,body');

  function toggledMenu() {
    // The toggled menu is fixed to the screen,
    // with the normal menu the container is fixed.
    return menu.css('position') === 'fixed';
  }

  function menuOffset(top) {
    // Include menu height when menu is fully visible,
    // not when it is toggled.
    return toggledMenu() || m.isNavClear(top) ? 0 : m.nav.height();
  }

  function hideMenu() {
    m.nav.removeClass('show');
  }

  function goTo(top) {
    htmlBody.animate({scrollTop: top - menuOffset(top)});
  }

  function topA(name) {
    return $('#' + name).offset().top;
  }

  $('a[href^="#"]', m.nav).click(function () {
    var name = $(this).attr('href').substr(1);
    if ($(this).closest('#scribble').length) {
      m.show(name);
    } else {
      goTo(topA(name));
    }
    hideMenu();
    return false;
  });
  $('#toggle').click(function () {
    m.nav.toggleClass('show');
    return false;
  });
  htmlBody.click(hideMenu);
  m.menuOffset = menuOffset;
  m.goTo = goTo;
  m.topA = topA;
  return m;
})(M);
