import React from 'react';

function View(props) {
  return (
    <div>
      <button className="add" onClick={props.onAddButtonClick}>+</button>
      <h1>{props.counter}</h1>
      <button className="minus" onClick={props.onMinusButtonClick}>-</button>
    </div>
  );
}

export default View;