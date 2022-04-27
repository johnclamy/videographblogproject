import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { addData } from '../database'

const AddTodoForm = () => {
  const [todo, setTodo] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addData({ todo }, 'todos')
    setTodo('')
  }

  return (
    <Form onSubmit={handleSubmit} className="my-4">
      <Form.Control value={todo} className="mb-3" size="lg" type="text" placeholder="what to do next..." onChange={e => setTodo(e.target.value)} />
      <div className="d-grid gap-2">
        <Button type="submit" className='mb-4 text-capitalize' variant="success" size="lg">
          submit
        </Button>
      </div>
    </Form>
  );
}

export default AddTodoForm