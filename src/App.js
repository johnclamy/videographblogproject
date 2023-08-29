import Layout from './components/layout/Layout';
import Header from './components/layout/Header';
import Post from './app/posts/Post';
import user from './app/users/userAuthData' 
import './App.css';

function App() {
  return (
    <Layout user={user}>
      <Header />
      <main className='container bg-slate-100 mx-auto flex flex-wrap py-4'>
        <Post />
      </main>
    </Layout>
  );
}

export default App;
