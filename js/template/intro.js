import {data} from '../data/data';
import {getElementFromTemplate} from '../util.js';

const dataCurrent = data[`intro`];
const intro = {
  template: getElementFromTemplate(`<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto">${dataCurrent.description}</p>
    </div>
  </div>`),
  clickElement: (clickFun) => {
    const elementClick = intro.template.querySelector(`.intro__asterisk`);
    elementClick.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      clickFun();
    });
  }
};

export default intro;
