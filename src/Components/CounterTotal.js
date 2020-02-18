import React, {useState} from 'react';

const CounterTotal = (props) => {

  const [counterNameValue, setCounterNameValue] = useState(props.counterNameValue);

  const totalCountResetHandler = () => {
    setCounterNameValue(props.resetCounterNameValue);
  };

  return (
    <div>
      Total count{` ${props.total} `}
      <button
        className="waves-effect waves-light btn"
        onClick={totalCountResetHandler}
      >Reset total count</button>
    </div>
  );
};

export default CounterTotal;
