import footer from './template/footer';

const main = document.querySelector(`main.central`);


export const getElementFromTemplate = (htmlString) => {
  let div = document.createElement(`div`);
  div.innerHTML = htmlString.trim();
  return div;
};

export const changeView = (element) => {
  main.innerHTML = ``;
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

