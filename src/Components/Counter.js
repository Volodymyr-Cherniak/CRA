import React, { useState } from 'react';


const Counter = (props) => {

  const [count, setCount] = useState(props.num);

  const countChangePlusHandler = () => {
    setCount(count + 1);
    props.totals(1)
  };
  const countChangeMinusHandler = () => {
    setCount(count - 1);
    props.totals(-1)
  };

  return (
    <div>
      <hr/>
      <button
        onClick={countChangeMinusHandler}
        className="waves-effect waves-light btn"
      >-</button>
      {count}
      <button
        onClick={countChangePlusHandler}
        className="waves-effect waves-light btn"
      >+</button>
    </div>
  );
};

export default Counter;
