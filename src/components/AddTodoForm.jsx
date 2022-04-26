import { Button, Form } from 'react-bootstrap'

const AddTodoForm = () => {
  return (
    <Form className="mt-4">
      <Form.Group>
        <Form.Label>Enter todo</Form.Label>
        <Form.Control className="mb-3" type="text" placeholder="what to do next..." />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button className='text-capitalize' variant="success" size="md">
          submit
        </Button>
      </div>
    </Form>
  );
}

export default AddTodoForm