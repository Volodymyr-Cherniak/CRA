import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";


const DeleteConfirmationModal = (props) => {

  const {showModal, closeModalHandle, count} = props;

  const [name, setName] = useState('');



  return (
    <>
      <Modal show={showModal} onHide={closeModalHandle}>
        <Modal.Header closeButton>
          <Modal.Title>Enter counter name <strong>{count.name}</strong> to delete it</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type="text"/></Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={closeModalHandle}>
            Close
          </button>
          <button variant="primary" onClick={closeModalHandle}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteConfirmationModal;
