var M = (function (m) {
  'use strict';
  var litebox = $('#litebox'), liteimg = $('#liteimg');

  function hide() {
    litebox.hide();
    liteimg.hide().attr('src', '');
  }

  litebox.click(hide);
  liteimg.click(hide);

  $('a>img').click(function () {
    var img = $(this), a = img.parent(), href = a.attr('href');
    if (href.match(/jpg$/)) {
      liteimg.attr('src', href).show();
      litebox.show();
       return false;
    }
  });
  return m;
})(M || {});
