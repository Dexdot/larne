const $btn = $('.catalog__btn--sort');
const $sort = $('.sort');

// const showSort = () => $sort.addClass('sort--is-visible');
// const hideSort = () => $sort.removeClass('sort--is-visible');

$btn.on('click', () => $sort.toggleClass('sort--is-visible'));
