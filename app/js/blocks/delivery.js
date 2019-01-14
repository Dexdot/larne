// Переключение по табам
const $tabCourier = $('.delivery-tab--courier');
const $tabMyself = $('.delivery-tab--myself');
const $courier = $('.delivery__courier');
const $myself = $('.delivery__myself');

$tabCourier.on('click', () => {
  $tabMyself.removeClass('delivery-tab--is-active');
  $tabCourier.addClass('delivery-tab--is-active');
  $myself.hide();
  $courier.show();
});

$tabMyself.on('click', () => {
  $tabCourier.removeClass('delivery-tab--is-active');
  $tabMyself.addClass('delivery-tab--is-active');
  $myself.show();
  $courier.hide();
});

// Добавить новый адрес
const $addAddressBtn = $('.delivery__add-address');
const $new = $('.delivery__new');
const $saveAddressButtons = $('.checkout__btn--left, .checkout__btn--right');
const $sendBtn = $('.checkout__btn--send');

$saveAddressButtons.hide();
$sendBtn.show();

$addAddressBtn.on('click', () => {
  $addAddressBtn.prop('disabled', true);
  $new.show();
  $new.find('input:first').focus();

  $saveAddressButtons.show();
  $sendBtn.hide();
});

// Клик по кнопке "Отмена"
$('.checkout__btn--left').on('click', () => {
  $addAddressBtn.prop('disabled', false);
  $new.hide();

  $saveAddressButtons.hide();
  $sendBtn.show();
});

// Переключение активного адреса
$('.delivery__addresses').on('click', '.address', function onAddressesClick() {
  $('.address').removeClass('address--is-active');
  $(this).addClass('address--is-active');
});

// Показать / Скрыть карту
const $showMapBtn = $('.delivery__show-map');
const $hideMapBtn = $('.delivery__hide-map');
const $map = $('.delivery__map');

$showMapBtn.on('click', () => {
  $map.fadeIn();
  $showMapBtn.hide();
  $hideMapBtn.show();
});
$hideMapBtn.on('click', () => {
  $map.fadeOut();
  $showMapBtn.show();
  $hideMapBtn.hide();
});
