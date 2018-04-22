import {getElementFromTemplate} from '../util.js';
// import stats from './stats';

const gameThree = (clickNext, state) => {
  const view = getElementFromTemplate(`<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    <h1 class="game__timer">NN</h1>
    <div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" 
        alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" 
        alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" 
        alt="Life" width="32" height="32">
    </div>
  </header>
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option" data-id="0">
        <img src="${state.question[0].url}" 
        alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected" data-id="1">
        <img src="${state.question[1].url}" 
        alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option" data-id="2">
        <img src="${state.question[2].url}" 
        alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`);
  const form = view.querySelector(`form`);
  form.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    let answer = true;
    if (state.question[evt.target.dataset.id].answer === null) {
      answer = false;
    }
    clickNext(Object.assign({}, state, {
      answer: state.games.push({answer, time: 15})
    }));
  });

  //
  // const answersView = view.querySelectorAll(`input[type="radio"]:checked`);
  // if (answersView.length === 1) {
  //   let answer = true;
  //   if (state.question[0].answer.indexOf(answersView[i].value) === -1) {
  //     answer = false;
  //   }
  //   clickNext(Object.assign({}, state, {
  //     'answer': answer
  //   }));
  // }

  return view;
};


export default gameThree;
