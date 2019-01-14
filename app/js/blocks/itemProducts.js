import Grabber from './Grabber';

$(document).ready(() => {
  // Инициализация слайдера товаров
  if (
    $('html').hasClass('page-item') &&
    $('.products__content--likely .product').length >= 4
  ) {
    $('.products__content--likely')
      .clone()
      .addClass('products__content--is-clone')
      .insertAfter('.products__content--likely');
    const grLikely = new Grabber($('.products__content--likely'));
  }

  // Переключение по табам
  const $likelyTab = $('.item-tab--likely');
  const $viewedTab = $('.item-tab--viewed');

  const $likely = $('.products__content--likely');
  const $viewed = $('.products__content--viewed');

  $likelyTab.on('click', () => {
    $viewed.removeClass('is-visible');
    $viewedTab.removeClass('is-active');

    $likely.addClass('is-visible');
    $likelyTab.addClass('is-active');
  });

  $viewedTab.on('click', () => {
    $likely.removeClass('is-visible');
    $likelyTab.removeClass('is-active');

    $viewed.addClass('is-visible');
    $viewedTab.addClass('is-active');
  });
});
