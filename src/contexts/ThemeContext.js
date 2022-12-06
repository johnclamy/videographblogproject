import { createContext, useState } from "react";
import theme from '../theme';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const toggleTheme = () => {
    setCurrentTheme({...currentTheme, isLightTheme: !currentTheme.isLightTheme})
  }

  return (
    <ThemeContext.Provider value={{ ...currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )

}

export default ThemeContextProvider