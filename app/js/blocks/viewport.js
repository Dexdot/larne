// Вернет true, если элемент во вьюпорте
// Вернет false, если элемент вне вьюпорта
$.fn.isInVp = function isInVp() {
  const elementTop = $(this).offset().top;
  const elementBottom = elementTop + $(this).outerHeight();

  const viewportTop = $(window).scrollTop();
  const viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};
