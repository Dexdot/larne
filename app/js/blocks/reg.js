import scroll from './stopScroll';
import login from './login';
import recovery from './recovery';
import help from './help';
import tabs from './helpTabs';
import select from './select';

const $reg = $('.reg');
const $regClose = $reg.find('.reg__close, .reg__overlay');
const $signin = $('.reg__signin');
const $back = $reg.find('.reg__btn--back');
const $policy = $('.reg__policy-link');

const hideReg = () => {
  scroll.enable();
  $reg.removeClass('reg--is-visible');
  $regClose.off('click', hideReg);
};
const showReg = () => {
  scroll.disable();
  $reg.addClass('reg--is-visible');
  $regClose.on('click', hideReg);
};

// Клик по "Войти в аккаунт"
$signin.on('click', () => {
  hideReg();
  recovery.hideRecovery();
  login.showLogin();
});

// Клик по "Вернуться на главную"
$back.on('click', hideReg);

// Клик по чекбоксу "Условия соглашения"
$policy.on('click', e => {
  e.preventDefault();
  hideReg();

  help.showHelp();

  // Заглушка для показа определенного контента внутри хелпа
  const type = 'privacy';

  tabs.deactivateTabs();
  tabs.activateTab(type);
  select.help.set(type);

  tabs.hideContents();
  tabs.showContent(type);
});

window.reg = {
  open: showReg,
  close: hideReg,
  showSignup: () => {
    $('.reg__form--success').hide();
    $('.reg__form--signup').show();
  },
  showSuccess: () => {
    $('.reg__form--signup').hide();
    $('.reg__form--success').show();
  }
};

export default { showReg, hideReg };
