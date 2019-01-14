// Анимация и показ "Восстановление пароля"

import scroll from './stopScroll';
import login from './login';
import reg from './reg';

const $recovery = $('.recovery');
const $recoveryBtn = $('.login__recovery');
const $recoveryClose = $recovery.find('.recovery__close, .recovery__overlay');

const hideRecovery = () => {
  scroll.enable();
  $recovery.removeClass('recovery--is-visible');
  $recoveryClose.off('click', hideRecovery);
};
const showRecovery = () => {
  login.hideLogin();
  reg.hideReg();
  scroll.disable();
  $recovery.addClass('recovery--is-visible');
  $recoveryClose.on('click', hideRecovery);
};

window.recovery = {
  open: showRecovery,
  close: hideRecovery
};

$recoveryBtn.on('click', showRecovery);

export default { showRecovery, hideRecovery };
