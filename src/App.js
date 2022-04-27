import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <Container>
      <Row>
        <Col
          md={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
        >
          <Header />
          <main className='my-4'>
            <AddTodoForm />
            <TodoList />
          </main>
        </Col>
      </Row>
    </Container>
  );
}

export default App 