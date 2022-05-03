import { Container, Row, Col } from 'react-bootstrap'
import './App.css'

const App = () => {
  return (
    <Container className="h-100">
      <Row className="h-100 wrapper">
        <Col
          className="h-100 mb-4 d-sm-flex flex-column justify-content-start align-items-center"
          md={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
        >
          todos app test ...
        </Col>
      </Row>
    </Container>
  );
}

export default App