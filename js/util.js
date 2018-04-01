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


