import { Container, Row, Col } from 'react-bootstrap'
import AuthContextProvider from './firebase/auth'
import NavigationBar from './components/layout/NavigationBar'
import AppRoutes from './components/routes'

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
          <AuthContextProvider>
            <NavigationBar />
            <AppRoutes />
          </AuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App