import ListGroup from 'react-bootstrap/ListGroup';
import Post from './Post';

const PostList = ({ posts = [] }) => {
  return (
    <ListGroup>
      {posts.map((post) => (
        <ListGroup.Item key={post.title}>
          <Post {...post} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default PostList