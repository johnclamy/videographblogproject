import { Container, Row, Col } from 'react-bootstrap'

const App = () => {
  return (
    <Container>
      <Row>
        <Col
          md={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
        >
          <h1>Shorts app</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App 