import Wrapper from "../components/Wrapper";
import Authbar from "../components/Authbar"
import PostForm from '../components/PostForm'
import PostList from '../post/PostList';
import data from '../db/data';

const App = () => (
  <Wrapper>
    <Authbar email={data.user.email} />
    <PostForm author={data.user.name} />
    <PostList posts={data.posts} />
  </Wrapper>
);

export default App;
