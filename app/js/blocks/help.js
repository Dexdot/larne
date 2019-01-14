// Анимация и показ хелпа

import scroll from './stopScroll';

import select from './select';
import tabs from './helpTabs';
import './helpScroll';

const $help = $('.help');
const $helpBtn = $('.footer__btn--help');
const $helpClose = $('.help__close, .help .hamburger');

const $heroCover = $('.hero-cover');

const showHelp = () => {
  scroll.disable();
  $heroCover.addClass('z1');
  $help.addClass('help--is-visible');
};
const hideHelp = () => {
  scroll.enable();
  $heroCover.removeClass('z1');
  $help.removeClass('help--is-visible');
};

$helpBtn.on('click', function onHelpBtnClick() {
  const type = $(this).attr('data-help');

  tabs.deactivateTabs();
  tabs.activateTab(type);
  select.help.set(type);

  tabs.hideContents();
  tabs.showContent(type);

  showHelp();
});
$helpClose.on('click', hideHelp);

export default { showHelp, hideHelp };
