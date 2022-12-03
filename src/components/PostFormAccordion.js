import Accordion from "react-bootstrap/Accordion";
import PostForm from './PostForm'

const PostFormAccordion = ({ user, dispatch }) => {
  return (
    <Accordion defaultActiveKey={0} flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Add a Post</Accordion.Header>
        <Accordion.Body>
          <PostForm user={user} dispatch={dispatch} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default PostFormAccordion
