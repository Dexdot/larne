import startAnimation from './catalogItems';

const config = {
  itemSelector: '.catalog-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  initLayout: false
};
const $grid = $('.catalog__list');

$(window).on('load', () => {
  if (window.innerWidth > 750) {
    $grid
      .masonry(config)
      .masonry('layout')
      .masonry('reloadItems');

    startAnimation();
  } else {
    startAnimation();
  }
});

$(window).on('resize', () => {
  if (window.innerWidth > 750) {
    $grid
      .masonry(config)
      .masonry('layout')
      .masonry('reloadItems');

    $('.catalog-item').addClass('fadeUpPre');
    startAnimation();
  } else {
    $grid.masonry('destroy');

    $('.catalog-item').addClass('fadeUpPre');
    startAnimation();
  }
});

export default window.Masonry;
