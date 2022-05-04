import Card from 'react-bootstrap/Card'
import SigninForm from '../layout/SigninForm'
import SignupLink from '../layout/SignupLink'

const Signin = () => {
  return (
    <section className='my-4'>
      <Card>
        <Card.Header as="h5">Welcome to the TODOS APP</Card.Header>
        <Card.Body className='mt-2'>
          <Card.Title className='text-uppercase text-center mb-3'>sign in</Card.Title>
          <SigninForm />
          <SignupLink />
        </Card.Body>
      </Card>
    </section>
  );
}

export default Signin