import scroll from './stopScroll';
import reg from './reg';
import help from './help';

const $login = $('.login');
const $loginBtn = $('.header__login');
const $menuLogin = $('.menu__login');

const $loginClose = $login.find('.login__close, .login__overlay');
const $signup = $login.find('.login__signup');

const hideLogin = () => {
  scroll.enable();
  $login.removeClass('login--is-visible');
  $loginClose.off('click', hideLogin);
};
const showLogin = () => {
  help.hideHelp();
  scroll.disable();
  $login.addClass('login--is-visible');
  $loginClose.on('click', hideLogin);
};

$menuLogin.on('click', () => {
  $('.menu .hamburger').click();
  showLogin();
});
$loginBtn.on('click', showLogin);

// Клик по "Зарегистрироваться"
$signup.on('click', () => {
  hideLogin();
  reg.showReg();
});

window.login = {
  open: showLogin,
  close: hideLogin
};

export default { showLogin, hideLogin };
