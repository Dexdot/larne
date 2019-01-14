const $number = $('.credit-card__number');
const $expiry = $('.credit-card__expiry');
const $csc = $('.credit-card__csc');

// Functions
const GetCharacterFromKeyCode = key =>
  String.fromCharCode(key >= 96 && key <= 105 ? key - 48 : key);

const A = s => s.substr(0, 2);
const B = s => s.substr(2, 2);
const correctStoredNumber = s => {
  let corrected = '';
  const partA = A(s);

  if (s.length === 1) {
    if (s > 1) {
      corrected = `0${s}`;
    } else {
      corrected = s;
    }
  } else if (s.length === 2) {
    if (partA === '00') {
      corrected = partA.substr(0, 1);
    } else if (partA > 12) {
      corrected = `0${partA}`;
    } else {
      corrected = s;
    }
  } else {
    corrected = s;
  }

  return corrected;
};
const formatNumber = s => {
  const { length } = s;
  const partB = B(s);
  let partA = A(s);

  if (length === 1) {
    if (partA > 1) {
      partA = `0${s}`;
    }
  } else if (length === 2) {
    if (partA > 12 || partA === '00') {
      partA = partA.substr(0, 1);
    }
  }

  let final = '';

  const combined = partA + partB;
  if (combined.length === 1) {
    final = partA;
  } else if (combined.length === 2) {
    final = `${partA} / `;
  } else if (combined.length >= 3) {
    final = `${partA} / ${partB}`;
  }

  return final;
};

const setCursorPosition = (element, pos) => {
  element.setSelectionRange(pos, pos);
};

// Init
// Обработка ввода даты кредитки (ММ / ГГ)

const maxDigits = 4;
let storedNumber = '';

$expiry.on('click focus', () => {
  const element = $expiry[0];
  const { length } = $expiry.val();
  setCursorPosition(element, length);
});
$expiry.on('keydown change', e => {
  const val = $expiry.val();
  const key = e.which;
  const onlyNum = (key > 47 && key < 58) || (key > 95 && key < 106);

  if (val.length === 6 && onlyNum) {
    $csc.focus();
  }
  const fwdslash = key === 191 || key === 111;
  const backspace = key === 8;
  const esc = key === 27;
  const tab = key === 9;
  const special = $.inArray(key, [8, 27, 9, 191, 111]) !== -1;

  if (storedNumber.length >= maxDigits && !special) {
    e.preventDefault();
    return;
  }
  if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105)) {
    const addition = GetCharacterFromKeyCode(key);
    storedNumber += addition;
  } else if (fwdslash) {
    if (storedNumber.length === 1 && storedNumber === 1) {
      storedNumber = '01';
    } else {
      e.preventDefault();
      return;
    }
  } else if (backspace) {
    if (storedNumber.length > 0) {
      storedNumber = storedNumber.substr(0, storedNumber.length - 1);
    } else if (storedNumber.length === 0) {
      $number.focus();
    }
  } else if (esc) {
    storedNumber = '';
    $expiry.val('');

    e.preventDefault();
    return;
  } else if (tab) {
    return;
  } else {
    e.preventDefault();
    return;
  }
  storedNumber = correctStoredNumber(storedNumber);
  $expiry.val(formatNumber(storedNumber));

  e.preventDefault();
});
