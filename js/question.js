import {getRandomInt, getRandomIntByMin} from './util';
const picture = {
  paintings: [
    // People
    `https://k42.kn3.net/CF42609C8.jpg`,

    // Animals
    `https://k42.kn3.net/D2F0370D6.jpg`,

    // Nature
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    // People
    `http://i.imgur.com/1KegWPz.jpg`,

    // Animals
    `https://i.imgur.com/DiHM5Zb.jpg`,

    // Nature
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};
const TYPE = [`paintings`, `photos`];



const getQuestionCount = (countQuestion = 1) => {
  let questions = [];
  do {
    let typeNumber = TYPE[getRandomInt(TYPE.length)];
    let url = picture[typeNumber][getRandomInt(picture[typeNumber].length)];
    questions.push({
      url,
      answer: typeNumber
    });
  } while (questions.length < countQuestion);
  return questions;
};

const getQuestionThree = (countQuestion) => {
  let isPaint = getRandomInt(2);
  let arrayNumber = [];
  let number = getRandomInt(countQuestion);
  let numberRand = 0;
  if (isPaint === 0) {
    number += countQuestion;
  } else {
    numberRand = countQuestion;
  }

  arrayNumber.push(number);

  do {
    number = getRandomIntByMin(numberRand, (numberRand + countQuestion));
    if (arrayNumber.indexOf(number) < 0) {
      arrayNumber.push(number);
    }
  } while (arrayNumber.length < countQuestion);

  let questions = [];
  while (arrayNumber.length > 0) {
    const index = getRandomInt(arrayNumber.length);
    let question;
    if (arrayNumber[index] < countQuestion) {
      question = {url: picture[TYPE[0]][arrayNumber[index]], answer: TYPE[0]};
    } else {
      question = {url: picture[TYPE[1]][arrayNumber[index] - countQuestion],
        answer: TYPE[1]};
    }
    questions.push(question);

    arrayNumber.splice(index, 1);
  }

  questions.forEach((value) => {
    if (value.answer === TYPE[isPaint]) {
      value.answer = null;
    }
  });
  return questions;
};

export const getQuestion = (picCount) => {
  if (picCount === 3) {
    return getQuestionThree(picCount);
  }
  return getQuestionCount(picCount);
};
