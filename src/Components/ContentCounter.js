import React, {useState} from 'react';
import Counter from "./Counter";

const ContentCounter = (props) => {

  const num = [3, 5, 7];
  const sum = num.reduce((a, b) => a + b);
  const [total, setTotal] = useState(sum);
  const totals = (value) => {
    setTotal(value + total);
  };

  return (
    <div>
      Total : {total}

      {num.map(el =>
        <Counter
          num={el}
          totals={totals}
        />
      )}
    </div>
  );
};

export default ContentCounter;
