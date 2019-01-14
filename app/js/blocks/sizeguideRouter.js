// Клики по кнопкам внутри форм в сайзгайда

import sizeguide from './sizeguide';
import mysize from './mysize';

const $mysizeBtn = $('.sizeguide__btn, .sizeguide__mysize');

$mysizeBtn.on('click', () => {
  sizeguide.hideSizeguide();
  mysize.showMysize();
});
