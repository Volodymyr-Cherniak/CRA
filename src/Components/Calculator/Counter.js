import React from 'react';


const Counter = (props) => {



  return (
    <div>
      {props.count.name}
      <button onClick={() => props.decrement(props.id)}>-</button>

      {props.count.value}

      <button onClick={() => props.increment(props.id)}>+</button>
      <button onClick={() => props.remove(props.id)}>delete</button>
    </div>
  );
};

export default Counter;
