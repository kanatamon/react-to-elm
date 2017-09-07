import React from 'react';
import { INCREMENT, DECREMENT } from './actions';

function View(props) {
  return (
    <div>
      <button className="add" onClick={props.onAction(INCREMENT)}>+</button>
      <h1>{props.counter}</h1>
      <button className="minus" onClick={props.onAction(DECREMENT)}>-</button>
    </div>
  );
}

export default View;