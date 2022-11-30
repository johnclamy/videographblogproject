import Accordion from "react-bootstrap/Accordion";
import PostForm from './PostForm'

const PostFormAccordion = ({ author }) => {
  return (
    <Accordion defaultActiveKey={0} flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Add a Post</Accordion.Header>
        <Accordion.Body>
          <PostForm author={author} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default PostFormAccordion
