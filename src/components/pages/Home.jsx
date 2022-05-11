import { Row, Col } from 'react-bootstrap'
import AddButton from '../layout/AddButton'
import Toolbar from '../layout/Toolbar'
import AppTable from '../layout/AppTable'

const Home = () => {
  return (
    <main>
      <header className="mt-2 mb-4">
        <Row>
          <Col sm={{ span: 6, offset: 1 }}>
            <AddButton />
          </Col>
        </Row>
        <Toolbar />
      </header>
      <article>
        <AppTable />
      </article>
    </main>
  );
}

export default Home