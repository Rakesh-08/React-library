import "./styles.css";
import { ThemeContextValue } from "./Context/ThemeProvider";

export default function App() {
  const { Theme, dark, toggle } = ThemeContextValue();
  

  return (
    <div className="App">
      <h1>Theme Toggler</h1>
      <div
        className="App-Header"
        style={{
          backgroundColor: Theme.backgroundColor,
          color: Theme.color,
        }}
      >
        <h3> Context Api Theme Toggler</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div onClick={toggle} className="button-container">
          {" "}
          {dark ? "Toggle to light Mode" : "Toggle to dark Mode"}
        </div>
      </div>
    </div>
  );
}
