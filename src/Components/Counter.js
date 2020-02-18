import React, {useState} from 'react';


const Counter = (props) => {

  const [count, setCount] = useState(props.counterNameValue.value);

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
      <div className='counters'>
        <h5>{props.counterNameValue.name}</h5>
        <button
          onClick={countChangeMinusHandler}
          className="waves-effect waves-light btn"
        >-
        </button>
        {`  ${count}  `}
        <button
          onClick={countChangePlusHandler}
          className="waves-effect waves-light btn"
        >+
        </button>
        <hr/>
      </div>
    </div>
  );
};

export default Counter;
