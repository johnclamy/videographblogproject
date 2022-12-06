import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Alert, ListGroup } from "react-bootstrap";
import uuid from '../helper/uuid';
import Post from "./Post";

const PostList = ({ posts }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const postList = !posts.length ? (
    <Alert variant={theme.variant}>
      There are currently no posts. Please add a post.
    </Alert>
  ) : (
    <ListGroup className="my-4">
      {posts.map((post) => {
        const text = post.content;
        const key = uuid(text);

        return (
          <Post
            key={key}
            title={post.title}
            author={post.author}
            content={text}
          />
        );
      })}
    </ListGroup>
  );

  return postList;
};

export default PostList;
