import Button from 'react-bootstrap/Button'
import BUTTON_VARIANTS from '../../constants/btn-variants'

const Toolbar = () => (
  <section className="mt-4 mb-2 d-flex justify-content-evenly">
    {BUTTON_VARIANTS.map((btn, idx) => (
      <Button style={{width: '95px'}} key={idx} size='sm' variant={`outline-${btn.variant}`}>
        {btn.text}
      </Button>
    ))}
  </section>
)

export default Toolbar