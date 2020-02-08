import React from 'react';
import '../index.css'


const Content = () => {
  const clickBattonHandler = (value) => {
    console.log('clicked', value);
  };
  const iputHandler = (e) => {
    console.log(e.target.value);
  };


  return (
    <main>
      <div>
        <h3>Some content..</h3>
        <div className="row">
          <input type='text' onChange={iputHandler} className="input-field col s6"/>
          <button
            className="waves-effect waves-light btn"
            onClick={
              () => clickBattonHandler(1)
            }
          >Add one
          </button>
          <button className="waves-effect waves-light btn" onClick={() => clickBattonHandler(2)}>Add two</button>
        </div>
      </div>
    </main>
  );
};

export default Content;
