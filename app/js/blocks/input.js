const $input = $('.input__field');

// Нижнее подчеркивание инпута из центра
const onInputFocus = function onInputFocus() {
  $(this)
    .parent()
    .addClass('input__label--is-focused');
};
const onInputFocusout = function onInputFocusout() {
  $(this)
    .parent()
    .removeClass('input__label--is-focused');

  const val = $(this).val();

  if (val) {
    $(this)
      .parent()
      .addClass('input__label--is-filled');
  } else {
    $(this)
      .parent()
      .removeClass('input__label--is-filled');
  }
};

$input.each((i, input) => {
  const val = $(input).val();

  if (val) {
    $(input)
      .parent()
      .addClass('input__label--is-filled');
  } else {
    $(input)
      .parent()
      .removeClass('input__label--is-filled');
  }
});

$input.on('focus', onInputFocus);
$input.on('focusout', onInputFocusout);

// Показываем / прячем дефолтный тип
const showTip = input => {
  $(input)
    .closest('.input')
    .find('.input__tip--basic')
    .fadeIn();
};
const hideTip = input => {
  $(input)
    .closest('.input')
    .find('.input__tip--basic')
    .fadeOut();
};

// Показываем / прячем красный тип
const showDangerTip = input => {
  $(input)
    .closest('.input')
    .find('.input__tip--danger')
    .fadeIn();
};
const hideDangerTip = input => {
  $(input)
    .closest('.input')
    .find('.input__tip--danger')
    .fadeOut();
};

// Задаем красное подчеркивание и показываем красный тип
const setDanger = input => {
  $(input)
    .parent()
    .addClass('input__label--danger');

  showDangerTip(input);
};
const unsetDanger = input => {
  $(input)
    .parent()
    .removeClass('input__label--danger');

  hideDangerTip(input);
};

export default {
  showTip,
  hideTip,
  showDangerTip,
  hideDangerTip,
  setDanger,
  unsetDanger
};

window.Input = {
  showBasicTip: showTip,
  hideBasicTip: hideTip,
  showDangerTip,
  hideDangerTip,
  setDanger,
  unsetDanger
};

// Подписка на почтовую рассылку
const $inputMailing = $('.input__label--mailing .input__field');
const $arrowBtn = $inputMailing.parent().find('.input__btn');

// После ввода первой буквы в инпут-рассылку показываем кнопку-стрелку
$inputMailing.on('keyup', function onInputMainlingKeyup() {
  if ($(this).val().length > 0) {
    $arrowBtn.addClass('input__btn--is-visible');
  } else {
    $arrowBtn.removeClass('input__btn--is-visible');
  }
});

// При фокусе инпута-рассылки прячем плейсхолдер (Введите email)
$inputMailing.on('focus', function onInputMainlingFocus() {
  $(this)
    .parent()
    .addClass('input__label--no-placeholder');
});
$inputMailing.on('focusout', function onInputMainlingKFocusout() {
  $(this)
    .parent()
    .removeClass('input__label--no-placeholder');
});
