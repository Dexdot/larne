const $checkbox = $('.checkbox:not(.js-radio)');
const $input = $checkbox.find('input');

const onCheckboxClick = function onCheckboxClick() {
  const $this = $(this);
  $this.addClass('checkbox--is-clicked');
  setTimeout(() => {
    $this.removeClass('checkbox--is-clicked');
  }, 300);
};
const onInputClick = function onInputClick() {
  $(this)
    .closest('.checkbox')
    .toggleClass('checkbox--is-checked');
};

$checkbox.on('click', onCheckboxClick);
$input.on('change', onInputClick);

const $radio = $('.checkbox.js-radio');
$radio.on('click', onCheckboxClick);

const $payment = $('.payment');
const $paymentRadio = $payment.find('.checkbox.js-radio');
const $paymentInput = $payment.find('.checkbox.js-radio input');

$paymentInput.on('change', function onPaymentInputClick() {
  $paymentRadio.removeClass('checkbox--is-checked');

  $(this)
    .closest('.checkbox')
    .addClass('checkbox--is-checked');
});
