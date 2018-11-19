var M = (function (m) {
  'use strict';
  var projects = $('.project');
  var foldedHeight = projects.height();

  function toggle(project, show) {
    if (show || project.hasClass('off')) {
      projects.each(function () {
        var current = project.is(this);
        $(this).toggleClass('off', !current).animate({height: current ? this.scrollHeight : foldedHeight}, current ? function () {
          m.goTo(project.offset().top);
          $(this).css('height', 'auto');
        } : undefined);
      });
    } else {
      project.addClass('off').animate({height: foldedHeight}, function () {
        m.goTo(m.topA('wat'));
      });
    }
  }

  $('h1:first-child', projects).click(function () {
    toggle($(this).parent());
  });
  m.show = function (name) {
    toggle($('#' + name), true);
  };
  return m;
})(M);
