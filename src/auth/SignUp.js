import { Button, Container, Form } from "react-bootstrap";

const SignUp = () => {
  return (
    <Container className="border border-info rounded m-1">
      <header className="mt-3">
        <h1 className="font-weight-bold text-info text-uppercase mb-3 h4">
          sign up
        </h1>
      </header>
      <Form className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="ex: John Doe" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button variant="info" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
