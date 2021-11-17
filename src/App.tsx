import { ThemeProvider } from "styled-components"
import { color } from './constants'
import Props from './types/Props'

export default function App({ children }: Props) {
  return (
    <ThemeProvider theme={{ color }}>
      {children}
    </ThemeProvider>
  )
}
