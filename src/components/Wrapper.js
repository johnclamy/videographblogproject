import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Wrapper = ({ children }) => (
  <Container>
    <Row>
      <Col md={{ span: 8, offset: 2 }}>{children}</Col>
    </Row>
  </Container>
);

export default Wrapper
