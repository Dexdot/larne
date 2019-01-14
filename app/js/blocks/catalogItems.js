import { TweenMax } from 'gsap';
import cutName from './cutString';

// Анимация фоток по вьюпорту

const $items = $('.catalog-item');
TweenMax.set([$items], { transition: '1s ease' });
$items.addClass('fadeUpPre');

const startAnimation = () => {
  $items.each((i, item) => {
    if ($(item).isInVp() && $(item).hasClass('fadeUpPre')) {
      $(item).removeClass('fadeUpPre');
      $(item).addClass('fadeUp');
    }
  });
};

$(window).on('scroll', startAnimation);

export default startAnimation;

// Обрезка названий товаров
$(window).on('DOMContentLoaded resize', () => {
  if (window.innerWidth <= 750) {
    const $names = $('.catalog-item__name');
    $names.each((i, name) => {
      const shortName = cutName(name.textContent, 44);
      if (shortName) {
        $(name).text(shortName);
      }
    });
  }
});
