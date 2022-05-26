import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from "../components/Navbar";
import AppRoutes from "../routes";
import "./App.css";

const App = ({ children }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <AppRoutes>{children}</AppRoutes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
