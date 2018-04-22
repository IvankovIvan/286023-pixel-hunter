import footer from './template/footer';
import header from './template/header';
const main = document.querySelector(`main.central`);


export const getElementFromTemplate = (htmlString) => {
  let div = document.createElement(`div`);
  div.innerHTML = htmlString.trim();
  return div;
};

export const changeView = (element, state) => {
  main.innerHTML = ``;
  if (state && state.dataCurrent.header) {
    main.appendChild(getElementFromTemplate(header));
  }
  main.appendChild(element);
  main.appendChild(getElementFromTemplate(footer));
};

export const elementChangeView = (view) => {
  return (elementClick) => {
    const clickElement = () => {
      changeView(view);
      elementClick.removeEventListener(`click`, clickElement);
    };
    elementClick.addEventListener(`click`, clickElement);
  };
};

// Возвращает случайное целое число между min (включительно) и max (не включая max)
export const getRandomIntByMin = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// Возвращает случайное целое число между min (включительно) и max (не включая max)
export const getRandomInt = function (max) {
  return getRandomIntByMin(0, max);
};
