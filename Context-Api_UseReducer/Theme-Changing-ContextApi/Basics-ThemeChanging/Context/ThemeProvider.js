import { createContext, useState } from "react";

export const ThemeContext = createContext(false);

export default function ThemeProvider({ children }) {
  const [toggle, setToggle] = useState(false);

  let toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
}
