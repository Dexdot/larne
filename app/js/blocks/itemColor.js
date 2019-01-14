const $text = $('.item__color-text');
const $links = $('.item__color');

const currentText = $('.item__color--current').attr('data-color');

$links.on('mouseenter', function onItemColorHover() {
  const text = $(this).attr('data-color');
  $text.text(text);
});

$links.on('mouseleave', () => $text.text(currentText));
