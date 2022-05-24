import { Container, Row, Col } from 'react-bootstrap'

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
          <p>testing the app component</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App