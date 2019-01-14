const $html = $('html');
const disable = () => {
  $html.addClass('no-scroll');
};
const enable = () => {
  $html.removeClass('no-scroll');
};

export default { disable, enable };
