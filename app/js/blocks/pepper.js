import './peppermint';
import thumbSlider from './itemImage';
import isMobile from './isMobile';

let i = 0;

// Pepper-слайдер
const $images = $('.item__left .item__images--mob li');
const $thumbs = $('.item__left .item__thumbs--mob li');

const slider = $('.item__left .item__images--mob').Peppermint({
  mouseDrag: isMobile,
  speed: 400,
  touchSpeed: 400,
  onSetup: () => {
    $thumbs.first().addClass('is-active');
  },
  onSlideChange: index => {
    i = index;
    $thumbs.removeClass('is-active');
    $($thumbs[i]).addClass('is-active');
  }
});

$thumbs.on('click', function onImgThumbMobClick() {
  slider.data('Peppermint').slideTo($(this).index());
});

$images.on('click', thumbSlider.modalImage.openModal);

//
//
//
//
// Pepper-слайдер в модальном окне
const $thumbsModal = $('.item-modal .item__thumbs--mob li');

const sliderModal = $('.item-modal .item__images--mob').Peppermint({
  speed: 400,
  touchSpeed: 400,
  onSetup: () => {
    $thumbsModal.first().addClass('is-active');
  },
  onSlideChange: index => {
    i = index;
    $thumbsModal.removeClass('is-active');
    $($thumbsModal[i]).addClass('is-active');
  }
});

$thumbsModal.on('click', function onModalThumbsClick() {
  sliderModal.data('Peppermint').slideTo($(this).index());
});

export default { sliderModal, slider };
