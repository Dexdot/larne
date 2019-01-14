// Стики-блок в ЛК

const $aside = $('.profile__aside');
const top = +$('.profile').offset().top;

$(window).on('scroll', () => {
  if (window.pageYOffset > top) {
    $aside.addClass('profile__aside--sticky');
  } else {
    $aside.removeClass('profile__aside--sticky');
  }
});
