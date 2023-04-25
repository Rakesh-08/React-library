import { createContext, useContext, useEffect, useState } from "react";

const Themes = {
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },
};

const initialState = {
  dark: false,
  theme: Themes.light,
  toggle: () => {},
};

const ThemeContext = createContext(initialState);

export default function ThemeProvider({ children }) {
  // default theme would be not dark
  const [dark, setDark] = useState(false);

  // on mount get the user preferred theme first from the local storage

  useEffect(() => {
    let IsDark = localStorage.getItem("dark") === "true";

    setDark(IsDark);
  }, [dark]);

  // toggle between dark and light theme
  const toggle = () => {
    // To keep a track of theme when the page reloads/refreshes
    // local storage takes only string as key value pair
    localStorage.setItem("dark", JSON.stringify(!dark));

    setDark(!dark);
  };

  const Theme = dark ? Themes.dark : Themes.light;

  return (
    <ThemeContext.Provider value={{ Theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

const ThemeContextValue = () => useContext(ThemeContext);

export { ThemeContext, ThemeContextValue };
