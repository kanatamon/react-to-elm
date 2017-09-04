import * as State from './state';

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
  });
});