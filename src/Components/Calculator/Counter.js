import React from 'react';


const Counter = (props) => {


  return (
    <div className='card mb-2 mr-1 ml-1 col-sm-8'>
      <div className='card-body'>
        <div className="row">
          {/*{props.count.id}*/}
          <div className="col col-sm-5">
            <h5>{props.count.name}</h5>
          </div>
          <div className="col">
            <button onClick={() => props.decrement(props.id)} className='btn btn-outline-secondary'>-</button>
          </div>
          <div className="col">
            <h5>{props.count.value}</h5>
          </div>
          <div className="col">
            <button onClick={() => props.increment(props.id)} className='btn btn-outline-secondary'>+</button>
          </div>
          <div className="col">
            <button onClick={() => props.remove(props.id)} className='btn btn-danger'>delete</button>
          </div>
        </div>
      </div>
    </div>
  )
    ;
};

export default Counter;
