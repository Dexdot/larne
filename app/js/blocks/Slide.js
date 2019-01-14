// Поэкранные слайды

import { TweenMax, TimelineMax, Expo } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export default class Slide {
  constructor(el) {
    this.el = el;
    this.$el = $(el);

    // Параметры анимации
    this.easing = Expo.easeInOut;
    this.duration = 1.2;

    // Верхняя и нижняя границы блока
    this.top = this.$el.offset().top;
    this.btm = this.top + this.$el.height();
  }

  show = () => {
    this.$el.addClass('is-visible');
  };

  hide = () => {
    this.$el.removeClass('is-visible');
  };

  goTop = callback => {
    const $prev = this.$el.prev();

    if ($prev.length && !TweenMax.isTweening(window)) {
      new TimelineMax().to(window, this.duration, {
        scrollTo: $prev.offset().top + $prev.height() - window.innerHeight,
        ease: this.easing,
        onComplete: callback
      });
    }
  };

  goBtm = callback => {
    const $next = this.$el.next();

    let scrTop;
    if ($next.attr('id') === 'instagram') {
      scrTop = $next.offset().top;
    } else {
      scrTop = $next.offset().top + 10;
    }

    if ($next.length && !TweenMax.isTweening(window)) {
      new TimelineMax().to(window, this.duration, {
        scrollTo: scrTop,
        ease: this.easing,
        onComplete: callback
      });
    }
  };
}
