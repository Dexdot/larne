// Анимация статей по вьюпорту
import { TweenMax } from 'gsap';

const $items = $('.article');
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

startAnimation();
$(window).on('scroll', startAnimation);

// Анимация фоток в статье
$(window).on('load', () => {
  if ($('html').hasClass('page-article')) {
    const $imgs = $('.article-wrapper img');
    TweenMax.set([$imgs], { transition: '1s ease' });
    $imgs.addClass('fadeUpPre');

    const startAnim = () => {
      $imgs.each((i, img) => {
        if ($(img).isInVp() && $(img).hasClass('fadeUpPre')) {
          $(img).removeClass('fadeUpPre');
          $(img).addClass('fadeUp');
        }
      });
    };

    startAnim();
    $(window).on('scroll', startAnim);
  }
});

// Смена фона футера
$(window).on('load', () => {
  if ($('html').hasClass('page-article')) {
    const $articles = $('#articles .articles');
    const $els = $('#articles, .footer');
    $(window).on('scroll', () => {
      if ($articles.isInVp()) {
        $els.addClass('grey');
      }
    });
  }
});
