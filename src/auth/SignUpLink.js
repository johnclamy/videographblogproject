import { useState } from "react";
import { signUp } from '../global/actions/action-creator'
import { Button, Form, Modal } from "react-bootstrap";

const SignUpLink = ({ dispatch }) => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [passwordOne, setPasswordOne] = useState('')
  const [passwordTwo, setPasswordTwo] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";

  const handleClick = () => {
    dispatch(signUp(username, email, passwordOne));
    setUsername('')
    setEmail('')
    setPasswordOne('')
    setPasswordTwo('')
    handleClose()
  };

  return (
    <>
      <Button variant="link" type="button" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-info text-uppercase">
            sign up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mb-4">
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="ex: John Doe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={passwordOne}
                onChange={(e) => setPasswordOne(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                value={passwordTwo}
                onChange={(e) => setPasswordTwo(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" type="button" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" type="button" disabled={isInvalid} onClick={handleClick}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUpLink;
