import { useEffect, useReducer } from 'react';
import Alert from "react-bootstrap/Alert";
import Layout from '../layout/Layout';
import NavBar from '../layout/NavBar';
import CreatePost from '../post/CreatePost';
import PostList from '../post/PostList';
import reducer from '../redux/reducer';
import defaultData from '../server/db.json';
import { fetchPosts } from '../redux/action';

const initialState = { user: "", posts: defaultData.posts };

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { user, posts } = state

  useEffect(() => {
    if (user) {
      document.title = `Blogster user ${user} currently logged in`
    } else {
      document.title = "Welcome to Blogster blogging app - Login to add posts";
    }
  }, [user])

  useEffect(() => {
    fetch('api/posts')
      .then(rslt => rslt.json())
      .then(posts => dispatch(fetchPosts(posts)))
  }, [])

  return (
    <Layout>
      <NavBar user={user} dispatch={dispatch} />
      <main className="p-3">
        {user ? (
          <header className="mb-4">
            <h1 className="h4 text-primary">Add a Post</h1>
            <hr />
            <CreatePost user={user} dispatch={dispatch} />
          </header>
        ) : (
          <Alert variant="primary">
            You are currently not logged in. Login or Sign up to add posts.
          </Alert>
        )}
        <article className="my-4">
          <header className="mt-3">
            <h1 className="h4 text-primary">Post List</h1>
            <hr />
          </header>
          <PostList posts={posts} />
        </article>
      </main>
    </Layout>
  );
}

export default App
