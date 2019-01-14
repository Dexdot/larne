// Четвертый этап чекаута

// Переключение активной карты
const $cards = $('.payment__card');
$cards.on('click', function onCCClick() {
  $cards.removeClass('payment__card--is-active');
  $(this).addClass('payment__card--is-active');
});

// Использовать другую карту
const $cardNew = $('.payment__card-new');
const $cardInput = $('.payment__card-input');

$cardNew.on('click', () => {
  $cardNew.prop('disabled', true);
  $cardInput.addClass('payment__card-input--is-visible');
  $cardInput.find('input:first').focus();
});
