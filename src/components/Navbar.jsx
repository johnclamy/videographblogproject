import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from './Logo'
import Menu from './Menu'
import NavLinks from './NavLinks'
import NavButtons from './NavButtons'

const Navbar = () => {
  const [showSlider, setShowSlider] = useState(false)

  return (
    <Container>
      <Row>
        <Col>
          <nav className={showSlider ? 'navbar slider' : 'navbar'}>
            <Logo />
            <NavLinks />
            <NavButtons />
            <Menu />
          </nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Navbar