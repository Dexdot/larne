// Переключение внутри чекаута по табам

const $tabs = $('.checkout__tab');
const $forms = $('.checkout__form');

const hideForms = () => {
  $forms.hide();
};

// Принимает строку:
// cart/cart-empty/reg/login/success/delivery/payment/confirm/confirm-success
const showForm = form => $(`.checkout__form--${form}`).show();

const deactivateTabs = () => {
  $tabs.removeClass('checkout__tab--is-active');
};

// Принимает строку
const activateTab = type =>
  $(`.checkout__tab--${type}`).addClass('checkout__tab--is-active');

// Вешаем обработчик на табы
$tabs.on('click', function onCheckoutTabClick() {
  const $tab = $(this);
  const type = $tab.attr('data-tab');

  const prev = $tab.siblings('.checkout__tab--is-active').index();
  const current = $tab.index();

  if (prev > current) {
    hideForms();
    deactivateTabs();

    activateTab(type);
    showForm(type);
  }
});

// EXPORT
export default { hideForms, showForm, deactivateTabs, activateTab };

$(window).on('load', () => {
  window.checkout = {
    ...window.checkout,
    showForm: formName => {
      hideForms();
      deactivateTabs();

      if (formName === 'cart-empty') {
        activateTab('cart');
      } else if (
        formName === 'reg' ||
        formName === 'login' ||
        formName === 'recovery' ||
        formName === 'success'
      ) {
        activateTab('reg');
      } else if (formName === 'confirm-success') {
        activateTab('confirm');
      } else {
        activateTab(formName);
      }

      showForm(formName);
    },
    next: () => {
      const type = $('.checkout__tab--is-active')
        .next()
        .attr('data-tab');

      if (type) {
        window.checkout.showForm(type);
      }
    }
  };
});
