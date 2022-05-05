import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from "react-bootstrap";
import { errorAlert } from "../helper";
import { UserAuth } from "../../firebase/auth";

const SigninForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { signin } = UserAuth();
  const navigate = useNavigate();

  const isInvalid = email === '' || password === ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      await signin(email, password)
      navigate('/home')
      setEmail('')
      setPassword('')
    } catch (err) {
      setError(err)
      console.error(err.message)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
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