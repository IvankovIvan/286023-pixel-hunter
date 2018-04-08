import {scoring} from './result';
import {assert} from 'chai';

describe(`Check result`, () => {
  it(`should scoring game.`, () => {
    assert.equal(-1, scoring([{success: true, time: 5},
      {success: true, time: 50},
      {success: true, time: 1}], 3));
    assert.equal(1150, scoring([
      {success: true, time: 15},
      {success: true, time: 11},
      {success: true, time: 10},
      {success: true, time: 12},
      {success: true, time: 13},
      {success: true, time: 20},
      {success: true, time: 19},
      {success: true, time: 18},
      {success: true, time: 17},
      {success: true, time: 15}], 3));
    assert.equal(750, scoring([
      {success: true, time: 25},
      {success: false, time: 11},
      {success: true, time: 10},
      {success: true, time: 4},
      {success: true, time: 13},
      {success: false, time: 20},
      {success: true, time: 43},
      {success: true, time: 18},
      {success: false, time: 17},
      {success: true, time: 7}], 1));
  });
});
