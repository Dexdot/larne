// Cancel bubble / propagation
const $child = $('.article-side__drop .article-side__link');
$child.on('click', e => {
  e.originalEvent.cancelBubble = true;
});

// Клик/ховер по иконке "Больше"
const $moreBtn = $('.article-side__link--more');
const onClick = function onMoreClick() {
  $moreBtn.mouseleave();
};

$moreBtn.on('mouseenter', () => {
  $moreBtn.addClass('article-side__link--is-open');
  $moreBtn.on('click', onClick);
});
$moreBtn.on('mouseleave', () => {
  $moreBtn.removeClass('article-side__link--is-open');
  $moreBtn.off('click', onClick);
});
