import TweenMax from 'gsap';

$(window).on('load', () => {
  if ($('html').hasClass('page-about')) {
    const $footer = $('.about-footer');
    const $texts = $('.about__quote, .about__author');
    const $author = $('.about__author');

    TweenMax.set([$texts], { transition: '1s ease' });
    TweenMax.set([$author], { transition: '1s ease 0.3s' });
    $texts.addClass('fadeUpPre');

    const startAnim = () => {
      // Анимация футера
      if ($footer.isInVp() && !$footer.hasClass('animated')) {
        $footer.addClass('animated');
      }

      // Анимация текста
      if ($author.isInVp() && $author.hasClass('fadeUpPre')) {
        $texts.removeClass('fadeUpPre');
        $texts.addClass('fadeUp');
      }
    };

    setTimeout(() => {
      startAnim();
    }, 1400);
    $(window).on('scroll', startAnim);
  }
});
