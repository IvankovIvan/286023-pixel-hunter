import {getElementFromTemplate} from '../util.js';

const intro = (clickNext, state) => {
  const view = getElementFromTemplate(`<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto">
      <sup>*</sup> Это не фото. Это рисунок маслом нидерландского
  художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`);
  const elementClick = view.querySelector(`.intro__asterisk`);
  elementClick.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    clickNext(state);
  });
  return view;
};

export default intro;
