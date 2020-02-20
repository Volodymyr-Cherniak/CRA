import React, {useState} from 'react';
import Counter from "./Counter";


const Calculator = () => {

  const InitialCountersState = [
    {
      name: 'Counter 1',
      value: 3,
      id: 123
    },
    {
      name: 'Second',
      value: 5,
      id: 234
    },
    {
      name: 'Third counter',
      value: 7,
      id: 345
    },

  ];

  const [counters, setCounters] = useState(InitialCountersState);

  const resetTotalCount = () => {
    const newCounts = counters.map(el => ({...el, value: 0}));
    setCounters(newCounts);
  };

  const increment = (id) => {
    const index = counters.findIndex(el => id === el.id);
    const newCounts = [...counters];
    newCounts[index].value = newCounts[index].value + 1;
    setCounters(newCounts);
    console.log('You press plus');

  };

  const decrement = (id) => {
    const newCounts = counters.map(el => {
      if(id === el.id) return {...el, value: el.value - 1};
      return el;
    });
    setCounters(newCounts);
    console.log('You press minus');
  };

  const removeCounter = (id) => {
    const index = counters.findIndex(el => id === el.id);
    const newCount = [...counters];
    newCount.splice(index, 1);
    setCounters(newCount);
    console.log("REMOVE ID " + index);
  };



  return (
    <div>
      <h4>Total:{counters.reduce((acc, cur) => acc + cur.value, 0)}</h4>
      <button onClick={resetTotalCount}>Reset total count</button>
      <hr/>
      {
        counters.map(el => <Counter key={el.id}
                                    count={el}
                                    id={el.id}
                                    increment={increment}
                                    decrement={decrement}
                                    remove={removeCounter}
        />)
      }

    </div>
  );
};

export default Calculator;

