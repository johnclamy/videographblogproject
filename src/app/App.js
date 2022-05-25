import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
            content goes here...
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App