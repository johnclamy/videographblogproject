import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";

const Layout = ({ user, onSetUser, children }) => {
  return (
    <>
      <Header user={user} onSetUser={onSetUser} />
      <Container>
        <Row>
          <Col
            className="bg-light"
            md={{ span: 10, offset: 1 }}
            lg={{ span: 8, offset: 2 }}
          >
            <div>{children}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
