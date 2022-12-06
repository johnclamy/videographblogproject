import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { Button } from "react-bootstrap"

const ToggleThemeButton = () => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  const label = isLightTheme ? 'Set Dark Theme' : 'Set Light Theme'

  return (
    <Button type='button' variant="success" size='sm' onClick={() => toggleTheme()}>
      {label}
    </Button>
  )
}

export default ToggleThemeButton