import { ThemeProvider } from "styled-components"
import { color } from './constants'
import Props from './interfaces/Props'

export default function App({ children }: Props) {
  return (
    <ThemeProvider theme={{ color }}>
      {children}
    </ThemeProvider>
  )
}
