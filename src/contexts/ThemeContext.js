import { createContext, useState } from "react";
import theme from '../theme';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  )

}

export default ThemeContextProvider