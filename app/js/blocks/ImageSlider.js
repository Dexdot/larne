import scroll from './stopScroll';
import pepper from './pepper';

// $images - большие картинки
// $thumbs - миниатюры
// $openModal - элементы. открываем модалку при клике по ним.

export default class ImageSlider {
  constructor($images, $thumbs, $openModal) {
    // Thumbs
    this.images = $images;
    this.thumbs = $thumbs;

    this.i = 0;

    this.showImg();
    this.activateThumb();

    const self = this;
    this.thumbs.on('click', function onImgThumbClick() {
      // Синхронизация двух слайдеров
      self.i = $(this)
        .parent()
        .index();
      self.slide();

      self.otherImage.i = self.i;
      self.otherImage.slide();
    });

    // Modal
    if ($openModal) {
      this.modal = $('.item-modal');
      this.open = $openModal;
      this.close = $('.item-modal__close');

      this.open.on('click', this.openModal);
      this.close.on('click', this.closeModal);
    }
  }

  // Thumbs
  showImg = () => $(this.images[this.i]).addClass('is-active');

  hideImages = () => this.images.removeClass('is-active');

  activateThumb = () => $(this.thumbs[this.i]).addClass('is-active');

  deactivateThumbs = () => this.thumbs.removeClass('is-active');

  slide = () => {
    this.hideImages();
    this.deactivateThumbs();
    this.showImg();
    this.activateThumb();
  };

  // Modal
  openModal = () => {
    pepper.sliderModal.data('Peppermint').recalcWidth();
    scroll.disable();

    if (this.modal) {
      this.modal.addClass('is-visible');
    } else {
      $('.item-modal').addClass('is-visible');
    }
  };

  closeModal = () => {
    scroll.enable();
    this.modal.removeClass('is-visible');
  };

  connectWith = Image => {
    this.otherImage = Image;
  };
}
