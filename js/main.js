const KEY_ARROW = [37, 39];
const KEY_LEFT = 37;
const SCREEN = [`greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`];
const template = document.querySelectorAll(`template`);
const mainCentral = document.querySelector(`main.central`);
let screenCurrent = 0;

const changeScreen = (number) => {
  if (number < 0) {
    screenCurrent = 0;
    return;

  }
  if (number > SCREEN.length - 1) {
    screenCurrent = SCREEN.length - 1;
    return;
  }

  mainCentral.innerHTML = ``;
  let nodeFind;
  template.forEach(function (node) {
    if (node.id === SCREEN[number]) {
      nodeFind = node.cloneNode(true).content;
    }
  });
  mainCentral.appendChild(nodeFind);
};

const onKeyDown = (evt) => {
  if (evt.altKey) {
    const keyCode = evt.keyCode;
    if (KEY_ARROW.indexOf(keyCode) > -1) {
      evt.preventDefault();
      if (keyCode === KEY_LEFT) {
        screenCurrent--;
      } else {
        screenCurrent++;
      }
      changeScreen(screenCurrent);
    }
  }
};

document.addEventListener(`keydown`, onKeyDown);
changeScreen(screenCurrent);
