import { INCREMENT, DECREMENT } from './actions';

export function init() {
  return { counter: 0 };
}

export function update(action, state) {
  switch (action) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return { ...state };
  }
}