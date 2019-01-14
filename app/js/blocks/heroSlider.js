// Слайдер фоновых изображений на первом экране

import { TweenMax, TimelineMax, Power3, Back } from 'gsap';

// Base
const $btn = $('.hero__toggle');
const $cover = $('.hero-cover');
const $images = $('.hero-image');
const $icons = $('.hero__icon-wrap');
const $contentBlocks = $('.hero__content-block');

let activeIndex = 0;
let activeImg = $images[activeIndex];
let activeIcon = $icons[activeIndex];
let activeContent = $contentBlocks[activeIndex];

// Настройки анимации
const tl = new TimelineMax({
  ease: Power3.easeInOut
});

let notAnimated = true;
let timer;
const timerInterval = 16000;

// Колбэки
const unsetCover = () => {
  $cover.hide();
  TweenMax.set($cover[0], { clearProps: 'transform' });
  $cover.show();
  notAnimated = true;
};
const onCover = () => {
  // Переключаем картинки
  $(activeImg).hide();
  $(activeIcon).hide();
  $(activeContent).hide();
  if (activeIndex === $images.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex += 1;
  }
  activeImg = $images[activeIndex];
  activeIcon = $icons[activeIndex];
  activeContent = $contentBlocks[activeIndex];
  TweenMax.set(activeImg, { x: '5%' });
  TweenMax.set(activeIcon, { scale: 0 });

  // Белый / Темный режимы
  $('#hero, .header--mob').removeClass('light dark');
  const { color } = activeImg.dataset;
  $('#hero, .header--mob').addClass(color);

  // Показываем картинки и анимируем
  $(activeImg).show();
  $(activeIcon).show();
  $(activeContent).show();
  TweenMax.to(activeImg, 0.8, { x: '0%' });
  TweenMax.to(activeIcon, 0.6, { scale: 1, ease: Back.easeOut.config(2) });
};
const onBtnClick = () => {
  if (notAnimated) {
    notAnimated = false;
    clearInterval(timer);

    tl.to(activeIcon, 0.6, { scale: 0 })
      .fromTo(activeImg, 0.8, { x: '0%' }, { x: '-5%' }, '-=0.5')
      .to(
        $cover[0],
        0.6,
        {
          x: '0%',
          onComplete: onCover
        },
        '-=0.8'
      )
      .to(
        $cover[0],
        0.6,
        {
          x: '-100%',
          onComplete: () => {
            unsetCover();
            timer = setInterval(onBtnClick, timerInterval);
          }
        },
        '-=0.2'
      );
  }
};
const setAutoSlide = () => {
  timer = setInterval(onBtnClick, timerInterval);
};

$(activeImg).show();
$(activeIcon).show();
$(activeContent).show();

$btn.on('click', onBtnClick);
setAutoSlide();
