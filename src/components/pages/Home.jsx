import { Row, Col } from 'react-bootstrap'
import AddButton from '../layout/AddButton'
import Toolbar from '../layout/Toolbar'

const Home = () => {
  return (
    <main>
      <header className="mt-4 mb-2">
        <Row>
          <Col sm={{ span: 6, offset: 1 }}>
            <AddButton />
          </Col>
        </Row>
        <Toolbar />
      </header>
    </main>
  );
}

export default Home