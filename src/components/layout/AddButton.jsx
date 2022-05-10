import Button from 'react-bootstrap/Button'

const AddButton = () => (
  <Button style={{width: '110px'}} className="d-flex align-items-center mb-4" size="lg" variant="success">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
    {'  '}ADD
  </Button>
);

  export default AddButton