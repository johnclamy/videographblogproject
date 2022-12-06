import { useEffect, useReducer } from "react";
import reducer from "../global/reducers/reducer";
import Wrapper from "../components/Wrapper";
import Authbar from "../components/Authbar";
import PostList from "../post/PostList";
import PostFormAccordion from "../components/PostFormAccordion";
import ThemeContextProvider from "../contexts/ThemeContext";
import data from "../db/data";

const defaultData = { user: {}, posts: data.posts } 

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultData)
  const { user, posts } = state

  useEffect(() => {
    if (user.username) {
      document.title = `Blogster with ${user.username} currently signed in`
    }
    return () => document.title = 'Blogster blogging app'
  }, [user.username])

  return (
    <ThemeContextProvider>
      <Wrapper>
        <Authbar user={user} dispatch={dispatch} />
        <PostFormAccordion user={user} dispatch={dispatch} />
        <PostList posts={posts} />
      </Wrapper>
    </ThemeContextProvider>
  );
}

export default App;
