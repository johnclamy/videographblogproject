import { Button, Container, Nav, Navbar }  from "react-bootstrap";

function Authbar() {
  const email = "john.doe@abcd-inc.com";

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Blogster</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
          ></Nav>
          <Navbar.Text style={{marginRight: '1rem'}}>{email}</Navbar.Text>
          <Button size="sm" variant="outline-info">
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Authbar;
