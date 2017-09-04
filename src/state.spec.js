import * as State from './state';
import * as action from './actions';

describe('Counter state', () => {
  describe('#init state', () => {
    it('should initialize counter with 0', () => {
      expect(State.init()).toEqual({ counter: 0 });
    });
  });

  describe('#update state', () => {
    it('should return default state', () => {
      const state = State.init();
      expect(State.update('NOSENSE_ACTION', state)).toEqual(state)
    });

    it('should return new instance of state', () => {
      const state = State.init();
      expect(State.update('NOSENSE_ACTION', state)).not.toBe(state);
    });

    it('should increase counter value from 0 => 1', () => {
      const state = State.init();
      expect(State.update(action.INCREMENT, state)).toEqual({ counter: 1 });
    });

    it('should decrease counter value from 0 => -1', () => {
      const state = State.init();
      expect(State.update(action.DECREMENT, state)).toEqual({ counter: -1 });
    });
  });
});