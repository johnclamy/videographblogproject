// import { Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand className="text-uppercase" href="#home">
          my todos
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-capitalize'></Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar