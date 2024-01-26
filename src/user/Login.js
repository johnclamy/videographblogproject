import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { MdLogin } from "react-icons/md";

const Login = ({ onSetUser }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [username, setUsername] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSetUser(username)
    setUsername('')
  }

  return (
    <>
      <Button
        className="d-flex align-items-center gap-2"
        size="sm"
        variant="light"
        onClick={handleShow}
      >
        <span>Login</span> <MdLogin />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                placeholder="Enter your username"
                onChange={e => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-flex justify-content-end gap-3">
              <Button type="button" variant="warning" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="secondary"
                disabled={username.length === 0}
                onClick={handleClose}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
