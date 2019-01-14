$(document).ready(() => {
  const $date = $('.mask-date');
  const $phone = $('.mask-phone');

  if ($date) {
    $date.inputmask('99.99.9999');
  }

  if ($phone) {
    $phone.inputmask('+7(999)999-99-99');
  }
});
