import Alert from 'react-bootstrap/Alert'

export const errorAlert = (error) => {
  if (error) {
    return (
      <Alert className="text-center" variant="danger">
        {error.message}
      </Alert>
    );
  }

  return null
}