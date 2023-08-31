import Layout from './components/layout/Layout';
import Header from './components/layout/Header';
import CreatePost from './app/posts/CreatePost';
import Post from './app/posts/Post';
import user from './app/users/userAuthData'
import './App.css';

function App() {
  const { name } = user
  const post = user.blogs[1]

  return (
    <Layout userIsSignedIn={user.isSignedIn}>
      <Header />
      <main className="container bg-slate-100 mx-auto flex flex-wrap py-4">
        {name ? <CreatePost username={name} /> : null}
        {!post ? (
          <p className=" w-full md:w-3/5 lg:w-7/12 mx-auto bg-cyan-600 p-3 text-center text-white text-lg">
            <strong>Sorry</strong>! Currently no posts available for viewing.
          </p>
        ) : (
          <Post username={name} post={post} />
        )}
      </main>
    </Layout>
  );
}

export default App;
