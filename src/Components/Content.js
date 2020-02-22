import React from 'react';
import '../index.css'


const Content = (props) => {

  let name = 'Initial';

  const clickButtonHandler = (value) => {
    props.bc(name);
    console.log('clicked', value);
  };

  const inputHandler = (e) => {
    name = e.target.value;
    console.log(e.target.value);
  };


  return (
    <main>
      <div>
        <h3>Some content..</h3>
        {/*<div className="row">*/}
        {/*  <input type='text' onChange={inputHandler} className="form-control-lg"/>*/}

        {/*  <button*/}
        {/*    className="btn btn-secondary"*/}
        {/*    onClick={() => clickButtonHandler()}>Add one*/}
        {/*  </button>*/}

        {/*  <button*/}
        {/*    className="btn btn-primary"*/}
        {/*    onClick={() => clickButtonHandler(2)}>Add two*/}
        {/*  </button>*/}

        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.</p>
      {/*</div>*/}
    </main>
  );
};

export default Content;
