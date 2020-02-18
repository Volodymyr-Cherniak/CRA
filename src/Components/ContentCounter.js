import React, {useState} from 'react';
import Counter from "./Counter";
import CounterTotal from "./CounterTotal";

const ContentCounter = (props) => {

  const counterNameValue = [
    {
      name: 'Counter 1',
      value: 3
    },
    {
      name: 'Second',
      value: 5
    },
    {
      name: 'Third counter',
      value: 7
    },

  ];
  const resetCounterNameValue = counterNameValue.map(el => {
    return {name: el.name, value: 0}
  });
  const sum = counterNameValue.reduce((a, b) => a + b.value, 0);
  const [total, setTotal] = useState(sum);
  const totals = (value) => {
    setTotal(value + total);
  };


  return (
    <div>
      <CounterTotal
        total={total}
        counterNameValue={counterNameValue}
        resetCounterNameValue={resetCounterNameValue}
      />
      <h5> Counters </h5>
      <hr/>
      {counterNameValue.map(el =>
        <Counter
          counterNameValue={el}
          totals={totals}
        />
      )}
    </div>
  );
};

export default ContentCounter;
