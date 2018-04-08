import {assert} from 'chai';
import timer from './timer';

describe(`Check timer`, () => {
  it(`should -1 parameter.`, () => {
    assert.equal(-1, timer(-5));
  });

  it(`should timer object.`, () => {
    assert.equal(`object`, typeof timer(5));
  });
});
