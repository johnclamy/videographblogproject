import { useReducer } from "react";
import Wrapper from "../components/Wrapper";
import Authbar from "../components/Authbar";
import PostList from "../post/PostList";
import data from "../db/data";
import PostFormAccordion from "../components/PostFormAccordion";
import userReducer from "../global/reducers/userReducer";

const App = () => {
  const [ user, dispatchUser ] = useReducer(userReducer, {})
  console.log('App', user);
  return (
    <Wrapper>
      <Authbar user={user} dispatch={dispatchUser} />
      <PostFormAccordion user={user} />
      <PostList posts={data.posts} />
    </Wrapper>
  );
}

export default App;
