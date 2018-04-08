const Answer = {
  SUCCESS: 100,
  TIME_POINT: 50,
  TIME_FAST: 10,
  TIME_SLOW: 20
};
const LIVE_POINT = 50;

export const scoring = (answerArr, liveCount) => {
  if (answerArr.length < 10) {
    return -1;
  }
  let point = 0;
  answerArr.forEach((answer) => {
    if (answer.success) {
      point += Answer.SUCCESS;
    }
    if (answer.time < Answer.TIME_FAST) {
      point += Answer.TIME_POINT;
    } else if (answer.time > Answer.TIME_SLOW) {
      point -= Answer.TIME_POINT;
    }
  });
  point += liveCount * LIVE_POINT;
  return point;
};

