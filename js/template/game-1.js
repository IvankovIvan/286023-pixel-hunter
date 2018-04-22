import {getElementFromTemplate} from '../util.js';
// import gameTwo from './game-2';

const gameOne = (clickNext, state) => {
  const view = getElementFromTemplate(`
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src=${state.question[0].url} 
        alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src=${state.question[1].url} 
        alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`);

  view.querySelector(`form`).addEventListener(`change`, (evt) => {
    evt.preventDefault();
    const questions = state.question;
    const answersView = view.querySelectorAll(`input[type="radio"]:checked`);

    if (answersView.length === questions.length) {
      let answer = true;
      for (let i = 0; i < questions.length; i++) {
        if (questions[i].answer.indexOf(answersView[i].value) === -1) {
          answer = false;
          break;
        }
      }

      clickNext(Object.assign({}, state, {
        answer: state.games.push({answer, time: 15})
      }));
    }
  });
  return view;
};

export default gameOne;
