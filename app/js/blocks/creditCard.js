// Обработка ввода кредитки

import './expiry';
import getChar from './getChar';
import cardType from './cardType';

const $card = $('.credit-card');

const $icons = $card.find('svg');
const $iconCard = $card.find('.i-card');
const $iconVisa = $card.find('.i-visa');
const $iconMaster = $card.find('.i-mastercard');
const $iconMir = $card.find('.i-mir');

const $number = $card.find('.credit-card__number');
const $expiry = $card.find('.credit-card__expiry');
const $csc = $card.find('.credit-card__csc');

let numberNotSelected = true;

const showIcon = icon => {
  $(icon).addClass('is-visible');
};
// const hideIcon = icon => {
//   $(icon).removeClass('is-visible');
// };
const hideIcons = () => {
  $icons.removeClass('is-visible');
};

showIcon($iconCard);

const onKey = function onKey(e) {
  if (e.ctrlKey || e.altKey || e.metaKey) return false;

  const chr = getChar(e);

  if (chr === null) {
    return false;
  }
  if (chr < '0' || chr > '9') {
    return false;
  }

  return true;
};

// Only numbers
$number.on('keypress', onKey);
$expiry.on('keypress', onKey);
$csc.on('keypress', onKey);

// Number field
$number.on('keyup change', () => {
  numberNotSelected = $number[0].selectionStart === $number[0].selectionEnd;
  const val = $number.val();

  // Соответствие иконки платежной системе
  if (val.length >= 0) {
    const type = cardType(val);

    if (type === 'mir') {
      hideIcons();
      showIcon($iconMir);
    } else if (type === 'visa') {
      hideIcons();
      showIcon($iconVisa);
    } else if (type === 'mastercard') {
      hideIcons();
      showIcon($iconMaster);
    } else {
      hideIcons();
      showIcon($iconCard);
    }
  }
});
$number.on('keydown change', e => {
  const val = $number.val();
  const key = e.originalEvent.keyCode;
  const onlyNum = (key > 47 && key < 58) || (key > 95 && key < 106);

  if (onlyNum && (val.length === 4 || val.length === 9 || val.length === 14)) {
    $number.val(`${val} `);
  }
});

// CSC
$csc.on('keydown change', e => {
  const val = $csc.val();
  const key = e.originalEvent.keyCode;

  if (val.length === 0 && key === 8) {
    $expiry.focus();
  }
});
