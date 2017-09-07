import React, { Component } from 'react';
import * as State from './state';
import View from './View';
import { INCREMENT, DECREMENT } from './actions';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = State.init();
  }

  render() {
    const { counter } = this.state;
    const add = () => this.setState(State.update(INCREMENT, this.state));
    const minus = () => this.setState(State.update(DECREMENT, this.state));
    return (
      <View
        counter={counter}
        onAddButtonClick={add}
        onMinusButtonClick={minus}
      />  
    );
  }
}

export default Counter;
