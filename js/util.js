const main = document.querySelector(`main.central`);
export const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
};

export const getElementFromTemplate = (htmlString) => {
  let div = document.createElement(`div`);
  div.innerHTML = htmlString.trim();
  return div;
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

