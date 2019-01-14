import scroll from './stopScroll';

const $filter = $('.filter-wrap');
const $filterClose = $('.filter-overlay, .filter__close');
const $filterShow = $('.catalog__btn--filter');

const showFilter = () => {
  scroll.disable();
  $filter.addClass('filter-wrap--is-visible');
};

const hideFilter = () => {
  scroll.enable();
  $filter.removeClass('filter-wrap--is-visible');
};

$filterShow.on('click', showFilter);
$filterClose.on('click', hideFilter);

// Показать больше
const $moreBtn = $('.filter__btn-more');
$moreBtn.on('click', function onMoreBtnClick() {
  const type = this.dataset.filter;
  $(`.filter__column--hidden[data-filter=${type}]`).removeClass(
    'filter__column--hidden'
  );

  $(`.filter__btn-more[data-filter=${type}]`).remove();
});
