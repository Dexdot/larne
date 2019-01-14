import { hideMenuCatalog } from './menu';

const $html = $('html');
const $burger = $('.hamburger');
const $menu = $('.menu');
const $menuNav = $('.menu__nav');
const $catalog = $('.menu__catalog');

$burger.on('click', () => {
  // При открытии меню бургер будет темным
  if (!$burger.hasClass('is-active')) {
    $burger.removeClass('light dark');
    $burger.addClass('dark');

    $menuNav.addClass('is-active');
    hideMenuCatalog();
  } else {
    $menuNav.removeClass('is-active');
    $catalog.removeClass('is-active');
  }

  $html.toggleClass('no-scroll');
  $burger.toggleClass('is-active');
  $menu.toggleClass('is-active');
  $menuNav.show();
});
