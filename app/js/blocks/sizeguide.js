// Анимация и показ всего сайзгайда
// import tabs from './sizeguideTabs';
import './sizeguideTabs';
import './sizeguideRouter';
import scroll from './stopScroll';
import sizesMobile from './sizesMobile';

const $sizeguide = $('.sizeguide');
const $sizeguideBtn = $('.item__all-size');
const $sizeguideClose = $sizeguide.find(
  '.sizeguide__close, .sizeguide__overlay'
);

const hideSizeguide = () => {
  scroll.enable();
  $sizeguide.removeClass('sizeguide--is-visible');
  $sizeguideClose.off('click', hideSizeguide);
};
const showSizeguide = () => {
  sizesMobile.hideMobSizes();
  scroll.disable();
  $sizeguide.addClass('sizeguide--is-visible');
  $sizeguideClose.on('click', hideSizeguide);
};

$sizeguideBtn.on('click', showSizeguide);

export default { showSizeguide, hideSizeguide };
