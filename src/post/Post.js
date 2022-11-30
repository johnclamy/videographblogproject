import { Card, ListGroup } from 'react-bootstrap';

const Post = ({ title, content, author }) => (
  <ListGroup.Item className='mb-2'>
    <Card border="info" style={{ width: "100%" }}>
      <Card.Header>
        Posted by <b>{author}</b>
      </Card.Header>
      <Card.Body>
        <Card.Title className='text-info'>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  </ListGroup.Item>
);

export default Post