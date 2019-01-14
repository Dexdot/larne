// Переключение по табам внутри хелпа

const $contents = $('.help__content');
const $tabs = $('.help__tab');
const $select = $('.help__select');

const deactivateTabs = () => $tabs.removeClass('help__tab--is-active');
const activateTab = type =>
  $(`.help__tab[data-help=${type}]`).addClass('help__tab--is-active');

const hideContents = () => $contents.hide();
const showContent = type => $(`.help__content--${type}`).show();

$tabs.on('click', function onHelpTabClick() {
  const $tab = $(this);
  const type = $tab.attr('data-help');

  hideContents();
  deactivateTabs();

  showContent(type);
  activateTab(type);
});
$select.on('change', () => {
  const type = $select.val();

  hideContents();
  deactivateTabs();

  showContent(type);
  activateTab(type);
});

export default {
  deactivateTabs,
  activateTab,
  hideContents,
  showContent
};
