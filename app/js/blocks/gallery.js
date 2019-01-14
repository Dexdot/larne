// Анимация фоток по вьюпорту

import { TweenMax } from 'gsap';

$(window).on('load', () => {
  let $items;

  if ($('html').hasClass('page-main')) {
    $items = $('.gallery__item');
  } else if ($('html').hasClass('page-404')) {
    $items = $('.gallery__item, .notfound__banner');
  }

  TweenMax.set([$items], { transition: '1s ease' });
  $items.addClass('fadeUpPre');

  const startAnimation = () => {
    $items.each((i, item) => {
      if ($(item).isInVp() && $(item).hasClass('fadeUpPre')) {
        $(item).removeClass('fadeUpPre');
        $(item).addClass('fadeUp');
      }
    });
  };

  startAnimation();
  $(window).on('scroll', startAnimation);
});
