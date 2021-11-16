import { ThemeProvider } from "styled-components"
import { color } from './constants'

export default function App({ children }) {
  return (
    <ThemeProvider theme={{ color }}>
      {children}
    </ThemeProvider>
  )
}
