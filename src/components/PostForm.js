import { Button, Container, Form } from 'react-bootstrap'

const PostForm = () => {
  return (
    <Container className="border border-info rounded m-1">
      <header className="mt-3">
        <h1 className="font-weight-bold text-info text-uppercase mb-0 h4">
          add post
        </h1>
        <p>
          author: <b>John Doe</b>
        </p>
      </header>
      <Form className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Post title</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Add post contrent</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default PostForm