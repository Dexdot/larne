// Анимация прелоадера и текста на первом экране

import { TweenMax, TimelineMax, Power2, Power3 } from 'gsap';

$(window).on('load', () => {
  window.app = {};

  const isMainPage = $('html').hasClass('page-main');

  const $p = $('.preloader');
  const w = $('.preloader__white')[0];

  const destroy = () => {
    $p.hide();
  };

  const tl = new TimelineMax();
  const ease = Power2.easeInOut;

  if (isMainPage) {
    const img = $('.hero-image').first()[0];

    const clearTransform = () => {
      TweenMax.set(img, { clearProps: 'transform' });
    };

    // Для анимации текстов
    const $texts = $(`.hero__title, .hero__subtitle`);
    if ($texts.length) {
      $texts.addClass('hero-text-anim');
    }

    // Прячем текст и начинаем анимацию прелоадера
    TweenMax.set('.hero-text-anim', { opacity: 0, x: '10%' });
    tl.to(w, 0.6, { x: '0%', ease }, '+=1.4')
      .to(
        $p[0],
        0.6,
        {
          x: '-100%',
          ease,
          onComplete: destroy
        },
        '-=0.2'
      )
      .fromTo(
        img,
        0.8,
        { x: '5%', ease: Power3.easeInOut },
        {
          x: '0%',
          onComplete: clearTransform
        },
        '-=0.4'
      )
      .staggerTo(
        '.hero-text-anim',
        0.8,
        { opacity: 1, x: '0%' },
        0.15,
        '-=0.6'
      );
  } else {
    tl.to(w, 0.6, { x: '0%', ease }).to($p[0], 0.6, {
      x: '-100%',
      ease,
      onComplete: destroy
    });
  }
});
