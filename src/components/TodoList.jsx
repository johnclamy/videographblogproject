import { useEffect, useState } from 'react'
import { Alert, ListGroup } from 'react-bootstrap'
import TodoItem from './TodoItem'
import { fetchData } from '../database'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const renderTodos = !todos.length ? (
    <Alert className="text-center" variant="info">
      You do not have any TODOS at present
    </Alert>
  ) : (
    <ListGroup className="mt-4">
      {todos.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </ListGroup>
  );

  useEffect(() => {
    fetchData(setTodos, 'todos')
  }, [])

  return renderTodos
}

export default TodoList