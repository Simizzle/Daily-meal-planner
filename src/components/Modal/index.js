import React, { useState } from 'react';  
import './modalStyles.css'
import { Button, Modal } from 'react-bootstrap'; 


function MealModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="modalClass">
      <Button variant="primary" onClick={handleShow}>
       Save to Calendar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Meal Title Goes Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>DATE SELECT GOES HERE</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MealModal