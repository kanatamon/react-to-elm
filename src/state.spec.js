import * as State from './state';

describe('Counter state', () => {
  describe('#init state', () => {
    it('should initialize counter with 0', () => {
      expect(State.init()).toEqual({ counter: 0 });
    });
  });
});