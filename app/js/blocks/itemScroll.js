// Фиксированные кнопки
const $btns = $('.item__btns');

$(window).on('scroll', () => {
  const top = window.pageYOffset;
  if (top > 0) $btns.addClass('is-visible');

  const btm = top + window.innerHeight;
  const tabsTop = $('.item-tabs').offset().top;

  if (btm > tabsTop) {
    $btns.removeClass('is-visible');
  }
});

// Анимация при заходе
const $item = $('.item__left, .item__info');
$(window).on('load', () => {
  setTimeout(() => {
    $item.addClass('animate');
  }, 800);
});
