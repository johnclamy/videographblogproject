import { Container, Row, Col } from 'react-bootstrap'
import ShortsCard from './components/ShortsCard'
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
          <header className="mb-4 text-center">
            <img src="/logo192.png" width="48" alt="app logo" />
            <h1 className=" mt-1 text-capitalize h3">shorts</h1>
          </header>
          <article>
            <ShortsCard />
            <ShortsCard />
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default App