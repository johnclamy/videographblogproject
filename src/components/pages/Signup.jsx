import Card from "react-bootstrap/Card";
import SignupForm from '../layout/SignupForm'
import SigninLink from '../layout/SigninLink'

const Signup = () => {
  return (
    <section className="my-4">
      <Card>
        <Card.Header as="h5">Sign up to the TODOS APP</Card.Header>
        <Card.Body className="mt-2">
          <Card.Title className="text-uppercase text-center mb-3">
            sign up
          </Card.Title>
          <SignupForm />
          <SigninLink />
        </Card.Body>
      </Card>
    </section>
  );
};

export default Signup;
