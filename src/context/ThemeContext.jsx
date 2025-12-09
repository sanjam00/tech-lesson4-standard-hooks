import { createContext, useState } from "react";

//useContext Step 1: Create the ThemeContext
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  //useContext Step 2: Deine global theme state
  const [theme, setTheme] = useState("light")

  return (
    //useContext Step 4: Provide them state and toggle the function to all components
    <ThemeContext.Provider value={{ theme, setTheme }} >
      {children}
    </ThemeContext.Provider>
  )
}