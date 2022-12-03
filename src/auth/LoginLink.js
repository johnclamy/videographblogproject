import { login } from '../global/actions/action-creator'

import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'

const LoginLink = ({ dispatch }) => {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleClick = () => {
    dispatch(login(email, password))
    setEmail('')
    setPassword('')
    handleClose()
  }

  return (
    <>
      <Button
        className="font-weight-bold text-info text-decoration-none"
        variant="link"
        type="button"
        onClick={handleShow}
      >
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-info text-uppercase">login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mb-4">
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" type="button" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" type="button" onClick={handleClick}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginLink