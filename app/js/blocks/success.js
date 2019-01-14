// Анимация и показ всего success
import scroll from './stopScroll';

const $success = $('.success');
const $successClose = $success.find('.success__close, .success__overlay');

const hideSuccess = () => {
  scroll.enable();
  $success.removeClass('success--is-visible');
  $successClose.off('click', hideSuccess);
};
const showSuccess = () => {
  scroll.disable();
  $success.addClass('success--is-visible');
  $successClose.on('click', hideSuccess);
};

export default { showSuccess, hideSuccess };

window.success = {
  open: showSuccess,
  close: hideSuccess
};
