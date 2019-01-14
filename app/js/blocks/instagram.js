// Анимация инстафоток по вьюпорту и показ футера в инсте

import { TweenMax } from 'gsap';
import isMobile from './isMobile';

$(document).ready(() => {
  // Удаляем шапку из инсты, если это не главная страница

  if (!$('html').hasClass('page-main')) {
    $('#instagram .header').remove();
  }

  const $items = $('.instagram__box');
  TweenMax.set([$items], { transition: '1s ease' });
  $items.addClass('fadePre');

  const startAnimation = () => {
    $items.each((i, item) => {
      if ($(item).isInVp() && $(item).hasClass('fadePre')) {
        $(item).removeClass('fadePre');
        $(item).addClass('fade');
      }
    });
  };

  $(window).on('scroll', startAnimation);

  // Показ футера в инсте
  const $inst = $('#instagram');
  const $footerDesktop = $('.footer--last.footer--desktop');
  const $footerMobile = $('.footer--last.footer--mob');

  if ($('html').hasClass('page-main')) {
    if (!isMobile) {
      // Логика для десктопа
      $(window).on('scroll resize', () => {
        if ($inst.hasClass('is-visible')) {
          if (window.innerWidth > 855) {
            $footerMobile.hide();
            $footerDesktop.show();
          } else {
            $footerDesktop.hide();
            $footerMobile.show();
          }
        } else {
          $footerDesktop.hide();
          $footerMobile.hide();
        }
      });
    } else {
      // Логика для мобилы
      $(window).on('scroll', () => {
        if ($inst.isInVp()) {
          $footerDesktop.hide();
          $footerMobile.show();
        } else {
          $footerDesktop.hide();
          $footerMobile.hide();
        }
      });
    }
  }
});
