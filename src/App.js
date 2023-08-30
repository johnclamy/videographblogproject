import Layout from './components/layout/Layout';
import Header from './components/layout/Header';
import Post from './app/posts/Post';
import user from './app/users/userAuthData' 
import './App.css';

function App() {
  return (
    <Layout userIsSignedIn={user.isSignedIn}>
      <Header />
      <main className='container bg-slate-100 mx-auto flex flex-wrap py-4'>
        <Post username={user.name} post={user.blogs[0]} />
      </main>
    </Layout>
  );
}

export default App;
