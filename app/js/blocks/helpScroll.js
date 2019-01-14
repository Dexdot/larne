const $content = $('.help__content');

let lastScrollAt = Date.now();
let timeout;

const scrollStartStop = function scrollStartStop() {
  if (Date.now() - lastScrollAt > 100) {
    $(this).trigger('scrollstart');
  }

  lastScrollAt = Date.now();

  clearTimeout(timeout);

  timeout = setTimeout(() => {
    if (Date.now() - lastScrollAt > 99) {
      $(this).trigger('scrollend');
    }
  }, 100);
};

$content.on('scroll', scrollStartStop);

$content.on('scrollstart', () => {
  $content.addClass('show-bar');
});

$content.on('scrollend', () => {
  $content.removeClass('show-bar');
});
