import SlimSelect from 'slim-select';

const selects = [];

// Тип оплаты в чекауте
const $payment = $('.payment__type');
if ($payment.length) {
  $payment.each((i, select) => {
    const slimSelect = new SlimSelect({
      select,
      showSearch: false
    });
    selects.push(slimSelect);
  });
}

// Хелп
const $help = $('.help__select');
let help;
if ($help.length) {
  $help.each((i, select) => {
    help = new SlimSelect({
      select,
      showSearch: false
    });
    selects.push(help);
  });
}

// Тип оплаты в ЛК
const $profilePayment = $('.profile__select');
if ($profilePayment.length) {
  $profilePayment.each((i, select) => {
    const slimSelect = new SlimSelect({ select, showSearch: false });
    selects.push(slimSelect);

    // Показ инпутов кредитки, если выбран "Банковская карта"
    const $form = $('.profile__block--payment .profile-form');
    const isBank = type => {
      if (type === 'bank') {
        $('.credit-card-wrap').show();
        $form.find('.input.input--lock').hide();
      } else {
        $('.credit-card-wrap').hide();
        $form.find('.input.input--lock').show();
      }
    };

    isBank($(select).val());

    $(select).on('change', function onSelectChange() {
      isBank($(this).val());
    });
  });
}

export default { help };
