import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { errorAlert } from '../helper'
import { UserAuth } from '../../firebase/auth'

const SignupForm = () => {
  const [email, setEmail] = useState('')
  const [passwordOne, setPasswordOne] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('');
  const [error, setError] = useState(null)
  const { createUser } = UserAuth()
  const navigate = useNavigate()

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      await createUser(email, passwordOne)
      navigate('/home')
      setEmail('')
      setPasswordOne('')
      setPasswordTwo('')
    } catch (err) {
      setError(err)
      console.log(err.message)
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
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
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
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          value={passwordTwo}
          onChange={(e) => setPasswordTwo(e.target.value)}
        />
      </Form.Group>
      <Button disabled={isInvalid} variant="secondary" type="submit">
        Submit
      </Button>

      {errorAlert(error)}
    </Form>
  );
}

export default SignupForm