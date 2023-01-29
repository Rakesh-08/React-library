import { ThemeContext } from "./Context/ThemeProvider";
import { useContext } from "react";
import "./styles.css";

export default function App() {
  const { toggle, toggleFunction } = useContext(ThemeContext);

  return (
    <div
      className="App"
      style={{ backgroundColor: toggle ? "orange" : "white" }}
    >
      <h1>Context Api</h1>
      <button onClick={toggleFunction}> change the theme </button>
    </div>
  );
}
