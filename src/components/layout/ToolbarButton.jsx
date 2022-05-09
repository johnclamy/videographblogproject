import Button from 'react-bootstrap/Button'

const ToolbarButton = (variant, children) => (
  <Button size='sm' variant={`outline-${variant}`}>
    {children}
  </Button>
)

export default ToolbarButton