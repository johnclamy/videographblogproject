import { Button, Form } from 'react-bootstrap'

const AddTodoForm = () => {
  return (
    <Form className="my-4">
      <Form.Control className="mb-3" size="lg" type="text" placeholder="what to do next..." />
      <div className="d-grid gap-2">
        <Button className='mb-4 text-capitalize' variant="success" size="lg">
          submit
        </Button>
      </div>
    </Form>
  );
}

export default AddTodoForm