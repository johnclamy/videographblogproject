import Alert from 'react-bootstrap/Alert'

const errorAlert = (error) => {
  if (error) {
    return (
      <Alert className="text-center" variant="danger">
        {error.message}
      </Alert>
    );
  }

  return null
}

export { errorAlert }