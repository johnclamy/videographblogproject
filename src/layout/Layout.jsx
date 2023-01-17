import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = ({ children }) => (
  <Container>
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        {children}
      </Col>
    </Row>
  </Container>
);

export default Layout