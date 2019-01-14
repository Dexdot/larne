// Рассылка

import scroll from './stopScroll';

$(document).ready(() => {
  const $subscribe = $('.subscribe');
  const $subscribeBtn = $('.footer__btn--subscribe');
  const $subscribeOverlay = $('.subscribe__overlay');

  const $wrapper = $('.main-wrapper');
  const $footer = $('.footer--last');

  const showSubscribe = () => {
    scroll.disable();
    $subscribe.addClass('subscribe--is-visible');
    $wrapper.addClass('main-wrapper--up');
    $footer.addClass('footer--up');
  };
  const hideSubscribe = () => {
    scroll.enable();
    $subscribe.removeClass('subscribe--is-visible');
    $wrapper.removeClass('main-wrapper--up');
    $footer.removeClass('footer--up');
  };

  $subscribeOverlay.on('click', hideSubscribe);
  $subscribeBtn.on('click', showSubscribe);
});
