import { ListGroup } from 'react-bootstrap'
import TodoItem from './TodoItem'

const todos = [
  { id: '1', todo: 'walk the dog' },
  { id: '2', todo: 'cook breakfast' },
  { id: '3', todo: 'read a book' }
]

const TodoList = () => {
  return (
    <ListGroup className='mt-4'>
      {todos.map(todoItem => <TodoItem key={todoItem.id} item={todoItem} />)}
    </ListGroup>
  );
}

export default TodoList