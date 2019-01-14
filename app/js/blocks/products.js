// Инициализация слайдера для товаров

import Grabber from './Grabber';
import isMobile from './isMobile';

// Slider

$(document).ready(() => {
  if ($('html').hasClass('page-main')) {
    $('.products__content')
      .clone()
      .addClass('products__content--is-clone')
      .insertAfter('.products__content:last');

    const gr = new Grabber($('.products__content'));
  }
});

// Products background on mobile
if (isMobile) {
  const $products = $('.products');
  $(window).on('scroll', () => {
    if ($products.isInVp()) {
      $('body').addClass('on-products');
    } else {
      $('body').removeClass('on-products');
    }
  });
}
