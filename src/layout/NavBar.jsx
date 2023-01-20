import { Container, Nav, Navbar } from "react-bootstrap";
import UserBar from "./UserBar";

function NavBar({ user, dispatch }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <b className="text-primary fw-normal">Blogster</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
          <UserBar user={user} dispatch={dispatch} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
