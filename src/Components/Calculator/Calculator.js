import React, {useState} from 'react';
import Counter from "./Counter";
import AddCounterForm from "./AddCounterForm";


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

  const ModalState = [{isShowing: false}];

  const [counters, setCounters] = useState(InitialCountersState);

  const [modal, setModal] = useState(ModalState);

  const resetTotalCount = () => {
    const newCounters = counters.map(el => ({...el, value: 0}));
    setCounters(newCounters);
  };

  const incrementCounter = (id) => {
    const index = counters.findIndex(el => id === el.id);
    const newCounters = [...counters];
    newCounters[index].value = newCounters[index].value + 1;
    setCounters(newCounters);
    console.log('You press plus');

  };

  const decrementCounter = (id) => {
    const newCounters = counters.map(el => {
      if (id === el.id) return {...el, value: el.value - 1};
      return el;
    });
    setCounters(newCounters);
    console.log('You press minus');
  };

  const removeCounter = (id) => {
    const newCounters = counters.filter(el => el.id !== id);
    setCounters(newCounters);
  };

  const addCounter = (name, value) => {
    const id = Date.now();
    const newCounters = [...counters, {
      id: id, name: name, value: Number(value)
    }];
    setCounters(newCounters);
    console.log(counters)

  };



  return (
    <div>
      <h4>Total:{counters.reduce((acc, cur) => acc + cur.value, 0)}</h4>
      <button
        onClick={resetTotalCount}
        className='btn btn-danger'
      >Reset total count</button>
      {
        counters.map(el => <Counter key={el.id}
                                    count={el}
                                    id={el.id}
                                    increment={incrementCounter}
                                    decrement={decrementCounter}
                                    deleteModal={isOpenModal}
                                    remove={removeCounter}
        />)
      }

      <AddCounterForm
        addCounter={addCounter}

      />

    </div>
  );
};

export default Calculator;

