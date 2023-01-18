import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Login from '../auth/Login'

const UserBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="d-flex">
        <Button variant="outline-primary" onClick={handleShow}>
          Login
        </Button>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body><Login onClose={handleClose} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserBar
