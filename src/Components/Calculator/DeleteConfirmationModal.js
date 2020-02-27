import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";


const DeleteConfirmationModal = (props) => {

  const {showModal, closeModalHandle, counter, removeCounter} = props;

  const [deleteButtonState, setDeleteButtonState] = useState(false);

  const inputHandler = (e) => {
    setDeleteButtonState(e.target.value !== counter.name);
  };





  return (
    <>
      <Modal show={showModal} onHide={closeModalHandle}>
        <Modal.Header closeButton>
          <Modal.Title>Enter counter name <strong>{counter.name}</strong> to delete it</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input type="text"
                 onChange={inputHandler}

          />
        </Modal.Body>

        <Modal.Footer>
          <button variant="secondary" onClick={closeModalHandle}>
            Close
          </button>
          <button variant="primary"
                  disabled={deleteButtonState}
                  onClick={()=>removeCounter(counter.id)}
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteConfirmationModal;
