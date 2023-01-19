import { useState } from 'react'
import Alert from "react-bootstrap/Alert";
import Layout from '../layout/Layout';
import NavBar from '../layout/NavBar';
import CreatePost from '../post/CreatePost';
import PostList from '../post/PostList';

const tempPosts = [
  {
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    title: "The way from JavaScript into TypeScript",
    author: "Joe Bloggs",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at maximus orci. Cras aliquam aliquet magna, quis euismod quam vehicula sit amet. Fusce sollicitudin vestibulum sem. Nullam ac tortor ornare, bibendum justo in, convallis tellus. Pellentesque a lorem turpis. Phasellus non nisl et ipsum efficitur convallis. Nulla facilisi. Nulla a elit dui. Fusce interdum mattis mauris vel interdum.",
  },
  {
    id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    title: "Best server side programming language",
    author: "Tish Doelittle",
    content:
      "Maecenas sit amet posuere nibh, quis fermentum lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue, felis nec condimentum vehicula, nisi enim semper odio, interdum vestibulum nibh ante quis eros. Nulla non dolor ultricies, vestibulum turpis sit amet, elementum lacus. Vestibulum ultricies nunc metus, non porttitor magna hendrerit a. Suspendisse quis consectetur elit. Mauris vitae augue quam. Donec facilisis, sem et aliquet luctus, mi ipsum fringilla libero, quis sodales ipsum enim sed arcu.",
  },
  {
    id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
    title: "Can Golang take over the server",
    author: "Joe Bloggs",
    content:
      "Integer placerat pulvinar turpis, quis cursus nibh vulputate a. Phasellus ut ex enim. Ut sollicitudin turpis sit amet elit ornare, eget efficitur ex rhoncus. Vivamus placerat sit amet velit id consectetur. Integer ut est sed purus rutrum varius. Duis in accumsan ipsum. Nam imperdiet varius purus et semper. Quisque massa eros, euismod et orci ac, facilisis tempor sem. Suspendisse at libero at mi sodales vehicula. Cras dui quam, suscipit a sem eget, porta faucibus ligula. Nullam vestibulum tempor nisl eu feugiat. Suspendisse potenti. Donec convallis ante diam, at ullamcorper massa aliquam vitae.",
  },
];

const App = () => {
  const [user, setUser] = useState('jbloggs334');
  const [posts, setPosts] = useState(tempPosts)

  return (
    <Layout>
      <NavBar user={user} onSetUser={setUser} />
      <main className="p-3">
        {user ? (
          <header className="mb-4">
            <h1 className="h4 text-primary">Add a Post</h1>
            <hr />
            <CreatePost user={user} posts={posts} onSetPosts={setPosts} />
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
