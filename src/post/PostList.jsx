import Alert from 'react-bootstrap/Alert';
import Post from './Post'

const PostList = ({ posts }) => {
  const renderPost = posts.length ? (
    posts.map((post) => (
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        content={post.content}
      />
    ))
  ) : (
    <Alert variant="warning">
      There are currently no post listings. Please add a post.
    </Alert>
  );

  return renderPost;
}

export default PostList
