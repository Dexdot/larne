const $window = $(window);

let touchDirection = 0;

let ts;
$window.on('touchstart', e => {
  ts = e.originalEvent.touches[0].clientY;
});

$window.on('touchmove', e => {
  const te = e.originalEvent.changedTouches[0].clientY;
  if (ts > te) {
    touchDirection = 1;
  } else {
    touchDirection = -1;
  }
});

export default () => touchDirection;
