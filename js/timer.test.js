import {assert} from 'chai';
import timer from './timer';

describe(`Check timer`, () => {
  it(`should -1 parameter.`, () => {
    assert.equal(-1, timer(-5));
  });

  it(`should timer object.`, () => {
    assert.equal(`object`, typeof timer(5));
  });

  it(`should metod tick.`, () => {
    const timerCurent = timer(5);
    assert.equal(4, timerCurent.tick());
    assert.equal(3, timerCurent.tick());
    assert.equal(2, timerCurent.tick());
    assert.equal(1, timerCurent.tick());
    assert.equal(0, timerCurent.tick());
    assert.equal(0, timerCurent.tick());
  });
});
