import { useState } from "react";
import Layout from "./layout/Layout";
import CreatePost from "./post/CreatePost";
import PostList from "./post/PostList";

const defaultPosts = [
  {
    title: "React Hooks",
    content: "The greatest thing since sliced bread!",
    author: "Daniel Bugl",
  },
  {
    title: "Using React Fragments",
    content: "Keeping the DOM tree clean!",
    author: "Daniel Bugl",
  },
];

export default function App() {
  const [user, setUser] = useState('')
  const [posts, setPosts] = useState(defaultPosts)

  return (
    <Layout user={user} onSetUser={setUser}>
      {user &&
        <CreatePost
          user={user}
          posts={posts}
          onSetPosts={setPosts}
        />
      }
      <PostList posts={posts} />
    </Layout>
  );
}
