import intro from './template/intro';
import greeting from './template/greeting';
import rules from './template/rules';
import game from './template/game-1';

import {changeView} from './util';
import {initialState, data} from './data/data';

const selectScreen = (screen) => {
  switch (screen) {
    case `intro` :
      return intro;
    case `greeting` :
      return greeting;
    case `rules` :
      return rules;
    case `game` :
      return game;
    default:
      return null;
  }
};

const renderScreen = (state) => {
  const dataCurrent = data[state.level];
  const screenCurrent = selectScreen(dataCurrent.name);
  if (screenCurrent === null) {
    return;
  }
  const view = screenCurrent.template;

  const render = () => {
    if (dataCurrent.screen.next) {
      renderScreen(Object.assign({}, state, {
        'level': dataCurrent.screen.next
      }));
    }
  };

  if (dataCurrent.screen) {
    screenCurrent.clickElement(render);
  }

  changeView(view);
};

renderScreen(initialState);

// document.querySelector(`.central`).addEventListener(`click`, (evt) => {
//   if (evt.target && evt.target.tagName.toLocaleLowerCase() === `img`) {
//     const parent = evt.target.parentElement;
//     if (parent && parent.tagName.toLocaleLowerCase() === `button` &&
//       parent.classList.contains(`back`)
//     ) {
//       evt.preventDefault();
//       changeView(greeting);
//     }
//   }
// });

// import {changeView} from './util';

// const KEY_ARROW = [37, 39];
// const KEY_LEFT = 37;
// const SCREEN = [`greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`];
// const template = document.querySelectorAll(`template`);
// const mainCentral = document.querySelector(`main.central`);
// let screenCurrent = 0;
//
// const changeScreen = (number) => {
//   if (number < 0) {
//     screenCurrent = 0;
//     return;
//
//   }
//   if (number > SCREEN.length - 1) {
//     screenCurrent = SCREEN.length - 1;
//     return;
//   }
//
//   mainCentral.innerHTML = ``;
//   let nodeFind;
//   template.forEach(function (node) {
//     if (node.id === SCREEN[number]) {
//       nodeFind = node.cloneNode(true).content;
//     }
//   });
//   mainCentral.appendChild(nodeFind);
// };
//
// const onKeyDown = (evt) => {
//   if (evt.altKey) {
//     const keyCode = evt.keyCode;
//     if (KEY_ARROW.indexOf(keyCode) > -1) {
//       evt.preventDefault();
//       if (keyCode === KEY_LEFT) {
//         screenCurrent--;
//       } else {
//         screenCurrent++;
//       }
//       changeScreen(screenCurrent);
//     }
//   }
// };
//
// document.addEventListener(`keydown`, onKeyDown);
//
