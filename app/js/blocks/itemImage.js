import ImageSlider from './ImageSlider';

const $images = $('.item .item__image-wrap');
const $thumbs = $('.item .item__thumb-btn');

const $imagesModal = $('.item-modal .item__image-wrap');
const $thumbsModal = $('.item-modal .item__thumb-btn');

const modalImage = new ImageSlider($imagesModal, $thumbsModal);
const itemImage = new ImageSlider($images, $thumbs, $images);

itemImage.connectWith(modalImage);
modalImage.connectWith(itemImage);

export default { modalImage, itemImage };
