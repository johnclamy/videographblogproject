import { useReducer } from "react";
import reducer from "../global/reducers/reducer";
import Wrapper from "../components/Wrapper";
import Authbar from "../components/Authbar";
import PostList from "../post/PostList";
import PostFormAccordion from "../components/PostFormAccordion";
import data from "../db/data";

const defaultData = { user: {}, posts: data.posts }

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultData)
  const { user, posts } = state

  return (
    <Wrapper>
      <Authbar user={user} dispatch={dispatch} />
      <PostFormAccordion user={user} dispatch={dispatch} />
      <PostList posts={posts} />
    </Wrapper>
  );
}

export default App;
