import { Alert, ListGroup } from 'react-bootstrap';
import Post from './Post'

const PostList = ({ posts }) => {
  const postList = !posts.length
    ? <Alert variant='info'>There are currently no posts. Please add a post.</Alert>
    : (<ListGroup className='my-4'>
      {posts.map((post) => {
        const text = post.content
        const key =
          ((text.substring(0, 8)).toLowerCase()).replace(/\s+/g, '') + '-' +
          Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        
        return <Post key={key} title={post.title} author={post.author} content={text} />
      })}
    </ListGroup>)
  
  return postList 
}

export default PostList