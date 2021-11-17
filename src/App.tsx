import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { color } from './constants'
import Props from './types/Props'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.075em;
    margin: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    background-color: ${color.thirdBg};
    color: ${color.primaryTxt};
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  a, a:link, a:visited {
    color: ${color.primaryLinkColor};
  }

  a:hover {
    color: ${color.primaryLinkColorHover};
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
