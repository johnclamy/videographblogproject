import Wrapper from "../components/Wrapper";
import Authbar from "../components/Authbar";
import PostList from "../post/PostList";
import data from "../db/data";
import PostFormAccordion from "../components/PostFormAccordion";

const App = () => (
  <Wrapper>
    <Authbar email="" /*{data.user.email}*/ />
    <PostFormAccordion author={data.user.name} />
    <PostList posts={data.posts} />
  </Wrapper>
);

export default App;
