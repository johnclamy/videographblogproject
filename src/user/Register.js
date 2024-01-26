import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Register = ({ onSetUser }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    onSetUser(username)
    setUsername('')
  };

  return (
    <>
      <Button
        className="link-light"
        size="sm"
        variant="link"
        onClick={handleShow}
      >
        Register
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Repeat password</Form.Label>
              <Form.Control
                type="password"
                value={passwordRepeat}
                placeholder="Enter password again"
                onChange={(e) => setPasswordRepeat(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-end gap-3">
              <Button type="button" variant="warning" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="secondary"
                disabled={
                  username.length === 0 ||
                  password.length === 0 ||
                  password !== passwordRepeat
                }
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

export default Register;
