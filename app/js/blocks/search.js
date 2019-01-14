import scroll from './stopScroll';
import help from './help';

const $search = $('.search');

const $searchBtn = $('.header__search, .notfound__search');
const $menuSearch = $('.menu__search');

const $searchInput = $search.find('.input__field');
const $searchClose = $search.find('.search__close');

const hideSearch = () => {
  scroll.enable();
  $search.removeClass('search--is-visible');
  $searchClose.off('click', hideSearch);
};
const showSearch = () => {
  help.hideHelp();
  scroll.disable();
  $searchInput.focus();
  $search.addClass('search--is-visible');
  $searchClose.on('click', hideSearch);
};

$menuSearch.on('click', () => {
  $('.menu .hamburger').click();
  showSearch();
});
$searchBtn.on('click', showSearch);
