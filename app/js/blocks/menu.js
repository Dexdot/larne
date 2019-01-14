// Навигация между самим меню и каталогом внутри него

const $catalogBtn = $('.menu__link--catalog');
const $nav = $('.menu__nav');
const $btm = $('.menu__btm');

const $catalog = $('.menu__catalog');
const $back = $('.menu__back');

export const showMenuCatalog = () => {
  $btm.hide();
  $back.show();

  $nav.hide();
  $nav.removeClass('is-active');

  $catalog.show();
  $catalog.addClass('is-active');
};

export const hideMenuCatalog = () => {
  $back.hide();
  $btm.show();

  $catalog.hide();
  $catalog.removeClass('is-active');

  $nav.show();
  $nav.addClass('is-active');
};

$catalogBtn.on('click', e => {
  e.preventDefault();
  showMenuCatalog();
});

$back.on('click', hideMenuCatalog);
