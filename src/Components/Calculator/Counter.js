import React, { useState } from 'react';
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const Counter = (props) => {

  const [showModal, setShowModal] = useState(false);
  const openModalHandle = () => setShowModal(true);
  const closeModalHandle = () => setShowModal(false);


  return (
    <div className='card mb-2 mr-1 ml-1 col-sm-8'>
      <div className='card-body'>
        <div className="row">
          {/*{props.count.id}*/}
          <div className="col col-sm-5">
            <h5>{props.count.name}</h5>
          </div>

          <div className="col">
            <button
              onClick={() => props.decrement(props.id)}
              className='btn btn-outline-secondary'
            >-</button>
          </div>

          <div className="col">
            <h5>{props.count.value}</h5>
          </div>

          <div className="col">
            <button
              onClick={() => props.increment(props.id)}
              className='btn btn-outline-secondary'
            >+</button>
          </div>

          <div className="col">
            <button
              // onClick={() => props.deleteModal(props.id)}
              onClick={openModalHandle}
              className='btn btn-danger'
            >delete</button>
          </div>
          <DeleteConfirmationModal showModal={showModal}
                                   openModalHandle={openModalHandle}
                                   closeModalHandle={closeModalHandle}
                                   count={props.count}
          />
        </div>
      </div>
    </div>
  )
    ;
};

export default Counter;
