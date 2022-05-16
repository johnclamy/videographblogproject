import { Row, Col } from "react-bootstrap";
import AppStateProvider from "../app";
import reducer from '../app/reducer'
import initTodos from "../app/initialTodos";
import AddButton from "../layout/AddButton";
import Toolbar from "../layout/Toolbar";
import AppTable from "../layout/AppTable";

const Home = () => {
  return (
    <AppStateProvider reducer={reducer} initState={initTodos}>
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
    </AppStateProvider>
  );
};

export default Home;
