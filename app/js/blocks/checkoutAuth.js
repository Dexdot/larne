// Клики по кнопкам внутри форм в чекауте

import checkout from './checkout';
import tabs from './checkoutTabs';
import help from './help';
import helpTabs from './helpTabs';
import select from './select';

// const $checkoutReg = $('.checkout__form--reg');
// const $checkoutLogin = $('.checkout__form--login');
// const $checkoutRecovery = $('.checkout__form--recovery');

const $signinBtn = $('.checkout__signin');
const $signupBtn = $('.checkout__signup');
const $recoveryBtn = $('.checkout__recovery');
const $policy = $('.checkout__policy-link');

// Клик по "Войти в аккаунт" внутри чекаута
$signinBtn.on('click', () => {
  tabs.hideForms();
  tabs.showForm('login');
});

// Клик по "Зарегистрироваться" внутри чекаута
$signupBtn.on('click', () => {
  tabs.hideForms();
  tabs.showForm('reg');
});

// Клик по "Забыли пароль" внутри чекаута
$recoveryBtn.on('click', () => {
  tabs.hideForms();
  tabs.showForm('recovery');
});

// Клик по чекбоксу "Условия соглашения"
$policy.on('click', e => {
  e.preventDefault();
  checkout.hideCheckout();

  help.showHelp();

  // Заглушка для показа определенного контента внутри хелпа
  const type = 'privacy';

  helpTabs.deactivateTabs();
  helpTabs.activateTab(type);
  select.help.set(type);

  helpTabs.hideContents();
  helpTabs.showContent(type);
});
