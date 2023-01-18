import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Login from '../auth/Login'
import Logout from '../auth/Logout'

const UserBar = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderUser = user ? (
    <Logout user={user} />
  ) : (
    <Button variant="outline-primary" onClick={handleShow}>
      Login
    </Button>
  );

  return (
    <>
      <section className="d-flex">
        {renderUser}
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
