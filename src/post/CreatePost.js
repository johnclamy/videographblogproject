import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreatePost = ({
  user = '',
  posts = [],
  onSetPosts = () => { }
}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSetPosts([{ author: user, title, content }, ...posts]);
    setContent('')
    setTitle('')
  }

  return (
    <Card className="my-2 text-white bg-secondary border-secondary">
      <Card.Header className="bg-light text-dark">
        Create a post
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Text className="fs-6">
            Author: <b>{user}</b>
          </Form.Text>
          <Form.Group className="mb-3 mt-2 mt-lg-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Title of your post"
              onChange={e => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Post content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="light"
            type="submit"
            disabled={!Boolean(title) || !Boolean(content)}
          >
            Create
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default CreatePost
