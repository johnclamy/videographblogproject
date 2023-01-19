import Card from "react-bootstrap/Card";

const Post = ({ title, content, author }) => (
  <Card className='my-1'>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        <i>
          Written by <b>{author}</b>
        </i>
      </Card.Subtitle>
      <Card.Text>{content}</Card.Text>
    </Card.Body>
  </Card>
)

export default Post;
