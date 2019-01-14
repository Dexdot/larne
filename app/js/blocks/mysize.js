import scroll from './stopScroll';
import sizesMobile from './sizesMobile';

const $mysize = $('.mysize');
const $mysizeBtn = $('.item__mysize');
const $mysizeClose = $('.mysize__close, .mysize__overlay');

const hideMysize = () => {
  scroll.enable();
  $mysize.removeClass('mysize--is-visible');
  $mysizeClose.off('click', hideMysize);
};
const showMysize = () => {
  sizesMobile.hideMobSizes();
  scroll.disable();
  $mysize.addClass('mysize--is-visible');
  $mysizeClose.on('click', hideMysize);
};

$mysizeBtn.on('click', showMysize);

export default { showMysize, hideMysize };
