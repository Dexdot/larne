// Удалить / Восстановить товар в чекауте
// Укорачивание имен товаров в корзине

// import input from './input';
// import cutName from './cutString';

// const $recoveryBtn = $('.cart__recovery');
// const $removeBtn = $('.cart__remove');

// const recoveryProduct = function recoveryProduct() {
//   $(this)
//     .closest('.cart__product')
//     .removeClass('cart__product--is-removed');
// };
// const removeProduct = function removeProduct() {
//   $(this)
//     .closest('.cart__product')
//     .addClass('cart__product--is-removed');
// };

// $recoveryBtn.on('click', recoveryProduct);
// $removeBtn.on('click', removeProduct);

window.cart = {
  recoveryProduct: product => {
    $(product).removeClass('cart__product--is-removed');
  },
  removeProduct: product => {
    $(product).addClass('cart__product--is-removed');
  }
};

// Отправка формы в корзине
// const $form = $('.checkout__form--cart');
// const $promocode = $('.cart__input--promocode input');
// $form.on('submit', e => {
//   e.preventDefault();
//   input.showTip($promocode);
// });

// Укорачивание имен товаров в корзине
// const $names = $('.cart__name');
// $names.each((i, name) => {
//   const shortName = cutName(name.textContent, 30);
//   if (shortName) {
//     $(name).text(shortName);
//   }
// });

// Очистить инпут "Промокод"
const $clearBtn = $('.clear-promocode');
const $promocodeInput = $('.cart__input--promocode input');

$clearBtn.on('click', () => {
  $promocodeInput.val('');
  $promocodeInput.focus();
});

// Показывает/прячет крестик
$promocodeInput.on('keyup', () => {
  if ($promocodeInput.val().length) {
    $clearBtn.show();
  } else {
    $clearBtn.hide();
  }
});
