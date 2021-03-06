var M = (function (m) {
  'use strict';
  var nav = $('nav'),
    articles = $('article').get().reverse(),
    currentArticle,
    navClear = true;

  function isNavClear(top) {
    return top === 0;
  }

  function setNavClear(top) {
    // Clear nav background when over logo.
    if (isNavClear(top) !== navClear) {
      navClear = !navClear;
      nav.toggleClass('top', navClear);
      nav.removeClass('show');
    }
  }

  function setNavColor(top) {
    // Match Nav logo and text color with article in view.
    var i, article, newArticle = currentArticle;
    for (i = 0; i < articles.length; i++) {
      article = articles[i];
      if (top >= $(article).offset().top - m.menuOffset()) {
        newArticle = $(article).attr('class') + '-nav';
        break;
      }
    }
    if (newArticle !== currentArticle) {
      nav.addClass(newArticle);
      nav.removeClass(currentArticle);
      currentArticle = newArticle;
    }
  }

  function scroller() {
    var top = m.w.scrollTop();
    setNavClear(top);
    setNavColor(top);
  }

  m.w.scroll(scroller);
  m.nav = nav;
  m.isNavClear = isNavClear;
  scroller();
  return m;
})(M);
