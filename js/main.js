import intro from './template/intro';
import greeting from './template/greeting';
import rules from './template/rules';
import gameOne from './template/game-1';
import gameTwo from './template/game-2';
import gameThree from './template/game-3';


import {getQuestion} from './question';
import {changeView, getRandomInt} from './util';
import {initialState, data} from './data/data';

const START_GAME = `game`;
const COUNT_GAME_SCREEN = 3;
const selectScreen = (screen) => {
  switch (screen) {
    case `intro` :
      return intro;
    case `greeting` :
      return greeting;
    case `rules` :
      return rules;
    case `game-1` :
      return gameOne;
    case `game-2` :
      return gameTwo;
    case `game-3` :
      return gameThree;
    default:
      return null;
  }
};

const scoring = (games) => {
  let point = 0;
  games.forEach((value) => {
    if (value.answer) {
      point += 100;
    }
  });
};

const renderGameScreen = (state) => {
  if (!state) {
    return;
  }

  if (state.games.length === 10) {
    scoring(state.games);
    return;
  }
  const nextGame = `game-` + (getRandomInt(COUNT_GAME_SCREEN) + 1);

  state = (Object.assign({}, state, {
    dataCurrent: data[nextGame]
  }));

  if (state.dataCurrent.picCount) {
    state = Object.assign({}, state, {
      question: getQuestion(state.dataCurrent.picCount)
    });
  }

  const screenCurrent =
    selectScreen(state.dataCurrent.name)(renderGameScreen, state);
  if (screenCurrent === null) {
    return;
  }

  changeView(screenCurrent, state);
};

const renderHelloScreen = (state) => {
  if (!state) {
    return;
  }

  if (state.dataCurrent.screen.next) {
    if (state.dataCurrent.screen.next === START_GAME) {
      renderGameScreen(initialState);
      return;
    }
    state = (Object.assign({}, state, {
      dataCurrent: data[state.dataCurrent.screen.next]
    }));
  }

  const screenCurrent =
    selectScreen(state.dataCurrent.name)(renderHelloScreen, state);
  if (screenCurrent === null) {
    return;
  }

  changeView(screenCurrent);

};

renderHelloScreen(initialState);

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
