class Accordion {
  constructor(el = {}) {
    this.el = el;

    const $buttons = this.el.find('.accordion__btn');
    $buttons.on('click', { el: this.el }, this.dropdown);
  }

  dropdown(e) {
    const $el = e.data.el;
    const $this = $(this);
    const $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('is-open');

    $el
      .find('.accordion__content')
      .not($next)
      .slideUp()
      .parent()
      .removeClass('is-open');
  }
}

$('.accordion__content').slideUp();
const accordion = new Accordion($('.accordion-container'));

$('.item .accordion:first-child')
  .addClass('is-open')
  .find('.accordion__content')
  .slideDown();

export default accordion;
