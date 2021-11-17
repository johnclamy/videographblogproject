import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { color } from './constants'
import Props from './types/Props'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
  }

  #root {
    margin: 0 auto;
  }
`

export default function App({ children }: Props) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={{ color }}>
        {children}
      </ThemeProvider>
    </>
  )
}
