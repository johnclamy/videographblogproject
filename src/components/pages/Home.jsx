import { useReducer } from "react";
import { Row, Col } from "react-bootstrap";
import AddButton from "../layout/AddButton";
import Toolbar from "../layout/Toolbar";
import AppTable from "../layout/AppTable";
import reducer from '../app/reducer'
import initState from '../app/initialTodos';

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initState)

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
        <AppTable todos={state} />
      </article>
    </main>
  );
};

export default Home;
