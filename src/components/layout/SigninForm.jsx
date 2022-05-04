import { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { errorAlert } from "../helper";

const SigninForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const isInvalid = email === '' || password === ''

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <Button variant="secondary" type="submit" disabled={isInvalid}>
        Submit
      </Button>

      {errorAlert(error)}
    </Form>
  );
}

export default SigninForm