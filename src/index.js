import './style.scss';

(() => {

  const wrapper = document.querySelector('.container');
  const dot = wrapper.querySelector('.dot');

  const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

  const containerSettings = {
    width: wrapper.clientWidth,
    height: wrapper.clientHeight,
    size: (wrapper.clientWidth + wrapper.clientHeight) / 2
  };

  const dotSettings = {
    width: dot.clientWidth,
    height: dot.clientHeight,
    size: (dot.clientWidth + dot.clientHeight) / 2
  };

  const borders = {
    minX: -(containerSettings.width / 2 - dotSettings.width / 2),
    maxX: containerSettings.width / 2 - dotSettings.width / 2,
    minY: -(containerSettings.height / 2 - dotSettings.height / 2),
    maxY: containerSettings.height / 2 - dotSettings.height / 2,
  };

  let currentPosX = 0;
  let currentPosY = 0;

  const speed = dotSettings.size / 2;

  document.addEventListener('keydown', (evt) => {

    if ( !keys.includes(evt.key) ) return;

    evt.preventDefault();

    let x = evt.key === 'ArrowUp' || evt.key === 'ArrowDown' ? 0 : speed;
    let y = evt.key === 'ArrowLeft' || evt.key === 'ArrowRight' ? 0 : speed;

    if ( evt.key === 'ArrowUp' ) y *= -1;
    if ( evt.key === 'ArrowLeft' ) x *= -1;

    moveDot(x, y);
  });

  function moveDot(x, y) {
    let nextX = currentPosX + x;
    let nextY = currentPosY + y;

    if ( nextX > borders.maxX ) nextX = borders.maxX;
    if ( nextX < borders.minX ) nextX = borders.minX;
    if ( nextY > borders.maxY ) nextY = borders.maxY;
    if ( nextY < borders.minY ) nextY = borders.minY;

    dot.style = `transform: translate3d(${nextX}px, ${nextY}px, 0);`;

    currentPosX = nextX;
    currentPosY = nextY;

    // window.requestAnimationFrame(moveDot);
  };


})();
