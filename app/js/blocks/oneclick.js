import scroll from './stopScroll';

const $oneclick = $('.oneclick');
const $oneclickBtn = $('.item__btn--one');
const $oneclickClose = $oneclick.find('.oneclick__close, .oneclick__overlay');

const hideOneclick = () => {
  scroll.enable();
  $oneclick.removeClass('oneclick--is-visible');
  $oneclickClose.off('click', hideOneclick);
};
const showOneclick = () => {
  scroll.disable();
  $oneclick.addClass('oneclick--is-visible');
  $oneclickClose.on('click', hideOneclick);
};

window.oneclick = {
  open: showOneclick,
  close: hideOneclick
};

$oneclickBtn.on('click', showOneclick);

export default { showOneclick, hideOneclick };
