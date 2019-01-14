// Кастомный слайдер для товаров

import { TweenMax } from 'gsap';
import Hammer from './hammer';

export default class Grabber {
  constructor(el) {
    this.$wrapper = $(el);

    // Считаем ширину
    if (window.innerWidth > 2000) {
      this.productWidth = 430 + 28;
    } else if (window.innerWidth > 855) {
      this.productWidth = ((window.innerWidth / 100) * 44.5 - 14) / 2 - 14 + 28;
    } else if (window.innerWidth < 480) {
      // responsive
      // this.productWidth = (window.innerWidth - 16) / 2;
      this.productWidth = 136 + 16;
    } else {
      this.productWidth = 180 + 28;
    }

    // Задаем ширину
    this.productsInRow = this.$wrapper.next().children().length;
    this.containerWidth = this.productsInRow * this.productWidth;
    this.$wrapper.width(this.containerWidth);

    // Пересчитываем ширину по ресайзу
    $(window).on('resize', () => {
      if (window.innerWidth > 2000) {
        this.productWidth = 430 + 28;
      } else if (window.innerWidth > 855) {
        this.productWidth =
          ((window.innerWidth / 100) * 44.5 - 14) / 2 - 14 + 28;
      } else if (window.innerWidth < 480) {
        this.productWidth = 136 + 16;
      } else {
        this.productWidth = 180 + 28;
      }
      this.containerWidth = this.productsInRow * this.productWidth;
      this.$wrapper.width(this.containerWidth);
    });

    // Инициализация
    this.init();

    this.requestAnimation = null;
    this.translation = 0;
    this.grabbed = !1;
    this.preventClick = !1;
    this.velocity = 1;

    this.isFullpage = $('html').hasClass('fullpage');
  }

  init = () => {
    this.initializeElements();
    this.initializeEvents();
  };

  initializeElements = () => {
    this.$railMove = this.$wrapper;
    this.links = this.$wrapper.find('a');
    this.getBCR();
  };

  initializeEvents = () => {
    this.update();

    const self = this;

    // Клики по ссылкам
    const onSliderLinkClick = function onSliderLinkClick(e) {
      e.originalEvent.preventDefault();
      e.originalEvent.stopPropagation();

      // self.href = this.href;
      if (!self.preventClick) {
        window.location = this.href;
      }
    };
    this.links.on('click', onSliderLinkClick);

    // Hammer init
    this.panManager = new Hammer.Manager(this.$wrapper[0].parentNode);
    this.panManager.add(
      new Hammer.Pan({
        direction: Hammer.DIRECTION_HORIZONTAL,
        threshold: 0
      })
    );
    this.panManager.add(new Hammer.Tap());
    this.panManager.on('panstart', this.onPanStart);
    this.panManager.on('panmove', this.onPanMove);
    this.panManager.on('panend', this.onPanEnd);
  };

  onPanStart = () => {
    this.grabbed = !0;
    this.preventClick = !0;
    this.progressOnGrabStart = parseInt(`${this.translation}`, 10);
  };

  onPanMove = e => {
    this.translation = this.progressOnGrabStart + e.deltaX;
  };

  onPanEnd = () => {
    this.grabbed = !1;
    requestAnimationFrame(() => {
      this.preventClick = !1;
    }, 10);
  };

  getBCR = () => {
    this.railMoveBCR = this.$railMove[0].getBoundingClientRect();
    $(window).on('resize', () => {
      this.railMoveBCR = this.$railMove[0].getBoundingClientRect();
    });
  };

  update = () => {
    let widthResult;
    if (this.isFullpage) {
      widthResult = this.containerWidth;
    } else {
      widthResult = this.railMoveBCR.width;
    }

    if (!this.grabbed) this.translation -= this.velocity;

    let t = 0;
    if (this.translation > 0) {
      t = -widthResult + (this.translation % widthResult);
    } else {
      t = this.translation % widthResult;
    }

    TweenMax.set(this.$railMove, {
      x: t
    });

    this.requestAnimation = window.requestAnimationFrame(
      this.update.bind(this)
    );
  };
}
