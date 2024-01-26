import Card from "react-bootstrap/Card";

const Post = ({ title, content, author }) => (
  <Card border="secondary">
    <Card.Body>
      <Card.Title style={{ color: "#CC7722" }}>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted fst-italic">
        {author}
      </Card.Subtitle>
      <Card.Text>{content}</Card.Text>
    </Card.Body>
  </Card>
);

export default Post;
