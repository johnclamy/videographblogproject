import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header'

const App = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Header />
        </Col>
      </Row>
    </Container>
  );
}

export default App 