import { Button, ListGroup } from 'react-bootstrap'

const TodoItem = ({ item }) => (
  <ListGroup.Item className="mt-2 d-flex justify-content-between align-items-center">
    <div>
      <p className="text-dark h5 font-weight-bolder">{item.todo}</p>
      <p className="text-muted">{item.todo}</p>
    </div>
    <Button size='sm' variant="danger">X</Button>
  </ListGroup.Item>
);

export default TodoItem