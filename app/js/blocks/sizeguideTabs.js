// Переключение внутри сайзгайда по табам

const $tabs = $('.sizeguide__tab');
const $forms = $('.sizeguide__form');

const hideForms = () => {
  $forms.removeClass('sizeguide__form--is-active');
};

// Принимает строку: btm/top/accs
const showForm = form =>
  $(`.sizeguide__form--${form}`).addClass('sizeguide__form--is-active');

const deactivateTabs = () => {
  $tabs.removeClass('sizeguide__tab--is-active');
};

// Принимает элемент-таб
const activateTab = type =>
  $(`.sizeguide__tab--${type}`).addClass('sizeguide__tab--is-active');

// Handler
$tabs.on('click', function onSizeguideTabClick() {
  const type = $(this).attr('data-tab');

  hideForms();
  deactivateTabs();

  showForm(type);
  activateTab(type);
});

export default { hideForms, showForm, deactivateTabs, activateTab };
