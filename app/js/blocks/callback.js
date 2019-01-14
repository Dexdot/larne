import scroll from './stopScroll';

const $callbackBtn = $('.contacts__btn');
const $callback = $('.callback');
const $callbackClose = $('.callback__close, .callback__overlay');

const hideCallback = () => {
  scroll.enable();
  $callback.removeClass('callback--is-visible');
  $callbackClose.off('click', hideCallback);
};
const showCallback = () => {
  scroll.disable();
  $callback.addClass('callback--is-visible');
  $callbackClose.on('click', hideCallback);
};

$callbackBtn.on('click', showCallback);

export default { showCallback, hideCallback };
