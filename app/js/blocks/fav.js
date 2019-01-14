// Клик по сердцу (Избранное)
// const $favBtn = $('.catalog-item__fav, .item__fav');
// const selectItem = function selectItem() {
//   $(this).toggleClass('is-selected');
// };
// $favBtn.on('click', selectItem);

window.product = {
  setFavorite: btn => {
    $(btn).addClass('is-selected');
  },
  unsetFavorite: btn => {
    $(btn).removeClass('is-selected');
  }
};
