// Анимация и показ всего чекаута

import scroll from './stopScroll';
import help from './help';
import './checkoutAuth';

const $checkout = $('.checkout');
const $checkoutBtn = $('.header__cart');
const $checkoutClose = $checkout.find('.checkout__close, .checkout__overlay');

const hideCheckout = () => {
  scroll.enable();
  $checkout.removeClass('checkout--is-visible');
  $checkoutClose.off('click', hideCheckout);
};
const showCheckout = () => {
  help.hideHelp();
  scroll.disable();
  $checkout.addClass('checkout--is-visible');
  $checkoutClose.on('click', hideCheckout);
};

window.checkout = {
  open: showCheckout,
  close: hideCheckout
};

$checkoutBtn.on('click', showCheckout);

export default { showCheckout, hideCheckout };
