import { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap'
import { ThemeContext } from "../contexts/ThemeContext";
import { createPost } from '../global/actions/action-creator'

const PostForm = ({ user, dispatch }) => {
  const author = user.username ? user.username : "unknown";
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const styles = {
    container: `${theme.border} rounded m-1`,
    textHeading: `font-weight-bold ${theme.textHeading} text-uppercase mb-0 h4`,
  }

  const handleClick = () => {
    dispatch(createPost(title, content, author));
    setTitle("");
    setContent("");
  };

  return (
    <Container className={styles.container}>
      <header className="mt-3">
        <h1 className={styles.textHeading}>
          add post
        </h1>
        <p>
          author: <b>{author}</b>
        </p>
      </header>
      <Form className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Post title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Add post contrent</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button variant="info" type="button" onClick={handleClick}>
          ADD
        </Button>
      </Form>
    </Container>
  );
};

export default PostForm