// На главной странице переключает цвета, показывает при скролле верх, прячет при скролле вниз.
// На странице каталога показывает при скролле верх, прячет при скролле вниз.

import getScrollDirection from './scrollDirection';

$(document).ready(() => {
  const isMainPage = $('html').hasClass('page-main');
  const isCatalogPage = $('html').hasClass('page-catalog');

  // Поведение на главной странице
  if (isMainPage) {
    const $header = $('.header--mob');
    const $hero = $('#hero');

    const downHeader = () => $header.addClass('is-active');
    const upHeader = () => $header.removeClass('is-active');
    const setColor = () => {
      if ($hero.hasClass('light')) {
        $header.removeClass('light dark');
        $header.addClass('light');
      } else if ($hero.hasClass('dark')) {
        $header.removeClass('light dark');
        $header.addClass('dark');
      }
    };

    $header.addClass('transparent');
    setColor();
    downHeader();

    $(window).on('scroll', () => {
      if ($hero.isInVp()) {
        $header.addClass('transparent');
        setColor();
      } else {
        $header.removeClass('transparent');
        $header.removeClass('light dark');
      }

      if (getScrollDirection() === -1 && window.pageYOffset > 0) {
        downHeader();
      } else if (getScrollDirection() === 1 && window.pageYOffset > 0) {
        upHeader();
      }
    });
  }

  // Поведение на странице каталога
  else if (isCatalogPage) {
    const $header = $('.main-wrapper .header');

    const downHeader = () => $header.addClass('is-active');
    const upHeader = () => $header.removeClass('is-active');

    downHeader();

    $(window).on('scroll', () => {
      if (getScrollDirection() === -1 && window.pageYOffset > 0) {
        downHeader();
      } else if (getScrollDirection() === 1 && window.pageYOffset > 0) {
        upHeader();
      }
    });
  }
});
