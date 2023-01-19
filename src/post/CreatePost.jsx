import { useState } from 'react'
import { Button, InputGroup, Form } from 'react-bootstrap'

const CreatePost = ({ user, posts, onSetPosts }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSetPosts([{ title, content, author: user }, ...posts]);
    setTitle('')
    setContent('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Text className="mb-4">
        <p className="mb-1">
          Author: <b className="fw-bold">{user}</b>
        </p>
      </Form.Text>
      <InputGroup className='mb-2'>
        <InputGroup.Text>Post title</InputGroup.Text>
        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Post text</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" value={content} onChange={e => setContent(e.target.value)} />
      </InputGroup>
      <Button className="my-3" size="sm" type="submit" variant="primary">
        Add Post
      </Button>
    </Form>
  );
}

export default CreatePost
