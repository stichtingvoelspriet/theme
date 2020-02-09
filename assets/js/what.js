var M = (function (m) {
  'use strict';
  var projects = $('.project'), bg = $('#projectsbg'), on = 'fa-expand', off = 'fa-times';

  function toggle(project, show) {
    if (show || project.hasClass('off')) {
      projects.each(function () {
        var current = project.is(this);
        $(this).toggleClass('on', current).toggleClass('off', !current);
        $('.onoff', this)
        .toggleClass(on, !current)
        .toggleClass(off, current);
      });
    } else {
      project.removeClass('on').addClass('off').scrollTop(0);
      $('.onoff').addClass(on).removeClass(off);
    }
    bg.toggle();
    m.bscroll();
  }

  $('.onoff', projects).click(function () {
    toggle($(this).parent());
  });
  m.show = function (name) {
    toggle($('#' + name), true);
  };
  return m;
})(M);
