import { useReducer } from "react";
import Wrapper from "../components/Wrapper";
import Authbar from "../components/Authbar";
import PostList from "../post/PostList";
import data from "../db/data";
import PostFormAccordion from "../components/PostFormAccordion";
import userReducer from "../global/reducers/userReducer";
import postsReducer from "../global/reducers/postsReducer";

const defaultPosts = data.posts

const App = () => {
  const [user, dispatchUser] = useReducer(userReducer, {})
  const [posts, dispatchPosts] = useReducer(postsReducer, defaultPosts)

  return (
    <Wrapper>
      <Authbar user={user} dispatch={dispatchUser} />
      <PostFormAccordion user={user} dispatch={dispatchPosts} />
      <PostList posts={posts} />
    </Wrapper>
  );
}

export default App;
