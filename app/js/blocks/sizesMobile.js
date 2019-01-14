import scroll from './stopScroll';

// Анимация показа / скрытия плашки с размерами на мобиле
const $btn = $('.item__btn--cart');
const $btns = $('.item__btns');
const $btnClose = $('.item__sizes-overlay');
const $sizes = $('.item__sizes-mob');
const $sizeLabel = $sizes.find('.item__size');

const showMobSizes = () => {
  scroll.disable();
  $btns.removeClass('is-visible');
  $sizes.addClass('is-active');
};
const hideMobSizes = () => {
  scroll.enable();
  $sizes.removeClass('is-active');
  $btns.addClass('is-visible');
};

// Заливает иконку черным цветом и увеличивает значение на 1
const incrementCart = () => {
  $('.header__cart').addClass('header__cart--fill');

  const $counter = $('.header__cart-num');
  const value = +$counter.first().text();
  const newValue = value + 1;

  $counter.text(newValue);
};

// Обработчики
const setHandlers = () => {
  if (window.innerWidth < 990) {
    // Мобилка
    $btn.on('click', showMobSizes);
    // $btn.off('click', incrementCart);
  } else {
    // Десктоп
    $btn.off('click', showMobSizes);
    // $btn.on('click', incrementCart);
  }
};
setHandlers();

$(window).on('resize', setHandlers);
$btnClose.on('click', hideMobSizes);

// Анимация пульса и переход в корзину
$sizeLabel.on('click', function onSizeLabelClick() {
  $(this).addClass('item__size--is-active');

  setTimeout(() => {
    $(this).removeClass('item__size--is-active');
    hideMobSizes();
    // incrementCart();
  }, 300);
});

// EXPORT
window.sizes = {
  open: showMobSizes,
  close: hideMobSizes,
  animateLabel: (label, callback) => {
    $(label).addClass('item__size--is-active');
    setTimeout(() => {
      $(label).removeClass('item__size--is-active');
      callback();
    }, 300);
  }
};

export default { hideMobSizes, showMobSizes };
