const $minus = $('.counter__btn--minus');
const $plus = $('.counter__btn--plus');

const decrement = function decrementCounter(ctx) {
  const $this = $(ctx);
  const $input = $this.siblings('.counter__input');

  const value = +$input.val();

  if (value !== 0) {
    const newValue = value - 1;
    $input.val(newValue);
    return newValue;
  }
  return value;
};

const increment = function incrementCounter(ctx) {
  const $this = $(ctx);

  const $input = $this.siblings('.counter__input');

  const value = +$input.val();
  const newValue = value + 1;

  $input.val(newValue);
  return newValue;
};

const onMinusClick = function onMinusClick() {
  const $this = $(this);
  const $parent = $this.closest('.cart__product');
  const $amountIcon = $parent.find('.cart__amount-icon');

  const value = decrement(this);

  $amountIcon.text(value);

  if (value === 1) {
    $parent.addClass('cart__product--once');
  }
};

const onPlusClick = function onPlusClick() {
  const $this = $(this);
  const $parent = $this.closest('.cart__product');
  const $amountIcon = $parent.find('.cart__amount-icon');

  if ($parent.hasClass('cart__product--once')) {
    $parent.removeClass('cart__product--once');
  }

  const value = increment(this);
  $amountIcon.text(value);
};

// $minus.on('click', onMinusClick);
// $plus.on('click', onPlusClick);
