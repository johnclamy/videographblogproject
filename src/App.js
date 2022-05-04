import { Container, Row, Col } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import AuthContextProvider from './firebase/auth'
import NavigationBar from './components/layout/NavigationBar'
import SigninPage from './components/pages/Signin'
import SignupPage from './components/pages/Signup'
import HomePage from './components/pages/Home'
import './App.css'

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
          <AuthContextProvider>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<SigninPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/home" element={<HomePage />} />
            </Routes>
          </AuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App