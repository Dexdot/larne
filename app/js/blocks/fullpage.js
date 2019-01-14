// Инициализация поэкранных слайдов
import { TweenMax, TimelineMax } from 'gsap';

import getWheelDirection from './wheelDirection';
import scroll from './stopScroll';

import Slide from './Slide';
import isMobile from './isMobile';

if (!isMobile) {
  // Base
  const $window = $(window);
  const $html = $('html');

  // Инициализация
  $html.addClass('fullpage');
  $html.attr('data-section', 'hero');

  const slides = [];
  const $sections = $('section');
  $sections.each((i, section) => {
    slides[i] = new Slide(section);
  });
  let sectionIndex = 0;
  let activeSection = slides[sectionIndex];

  // Показываем первый экран
  activeSection.show();

  const changeBackgroundUp = () => {
    if (sectionIndex === 3) {
      $('body').addClass('on-products');
    } else {
      $('body').removeClass('on-products');
    }
  };
  const changeBackgroundDown = () => {
    if (sectionIndex === 1) {
      $('body').addClass('on-products');
    } else {
      $('body').removeClass('on-products');
    }
  };
  const setCurrentSectionUp = () => {
    $html.attr('data-section', '');

    switch (sectionIndex) {
      case 1:
        $html.attr('data-section', 'hero');
        break;
      case 2:
        $html.attr('data-section', 'gallery');
        break;
      case 3:
        $html.attr('data-section', 'products');
        break;
      case 4:
        $html.attr('data-section', 'articles');
        break;
      case 5:
        $html.attr('data-section', 'instagram');
        break;
      default:
        break;
    }
  };
  const setCurrentSectionDown = () => {
    $html.attr('data-section', '');

    switch (sectionIndex) {
      case 0:
        $html.attr('data-section', 'gallery');
        break;
      case 1:
        $html.attr('data-section', 'products');
        break;
      case 2:
        $html.attr('data-section', 'articles');
        break;
      case 3:
        $html.attr('data-section', 'instagram');
        break;
      default:
        break;
    }
  };

  // Вешаем обработчик на мышь
  $window.on('wheel', () => {
    const top = window.pageYOffset;
    const btm = top + window.innerHeight;

    const onTop = top === 0;
    const onBtm = btm === $(document).height();

    const wheelUp = getWheelDirection() === -1;
    const wheelDown = getWheelDirection() === 1;

    const notAnimated = !TweenMax.isTweening(window);
    const notFirst = sectionIndex !== 0;
    const notLast = sectionIndex !== slides.length - 1;

    const canScroll = !$('body').hasClass('no-scroll');

    // Вверх
    if (wheelUp && onTop && notAnimated && notFirst && canScroll) {
      changeBackgroundUp();
      setCurrentSectionUp();

      scroll.disable();
      slides[sectionIndex - 1].show();
      new TimelineMax().to(window, 0, {
        scrollTo: activeSection.$el.offset().top
      });

      activeSection.goTop(() => {
        activeSection.hide();
        sectionIndex -= 1;
        activeSection = slides[sectionIndex];
        scroll.enable();
      });
    }

    // Вниз
    if (wheelDown && onBtm && notAnimated && notLast && canScroll) {
      changeBackgroundDown();
      setCurrentSectionDown();

      scroll.disable();
      slides[sectionIndex + 1].show();

      activeSection.goBtm(() => {
        activeSection.hide();
        $(window).scrollTop(0);
        sectionIndex += 1;
        activeSection = slides[sectionIndex];
        scroll.enable();
      });
    }
  });

  // Вешаем на стрелку вниз
  $('.footer__down').on('click', () => {
    changeBackgroundDown();
    setCurrentSectionDown();

    scroll.disable();
    slides[sectionIndex + 1].show();

    activeSection.goBtm(() => {
      activeSection.hide();
      sectionIndex += 1;
      activeSection = slides[sectionIndex];
      scroll.enable();
    });
  });
}
