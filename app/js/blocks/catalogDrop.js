// Выпадашка по ховеру на каталог

const $link = $('.header__list-item:first-child');
const $header = $('.header');

const showCatalog = () => {
  $header.addClass('header--catalog-drop');
};
const hideCatalog = () => {
  $header.removeClass('header--catalog-drop');
};

$link.on('mouseenter', showCatalog);
$link.on('mouseleave', hideCatalog);
