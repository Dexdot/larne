const $window = $(window);

let wheelDirection = 0;

$window.on('wheel', e => {
  if (e.originalEvent.deltaY > 0) {
    wheelDirection = 1;
  } else if (e.originalEvent.deltaY < 0) {
    wheelDirection = -1;
  }
});

export default () => wheelDirection;
