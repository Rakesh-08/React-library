import NameFormUncontrolled from "./components/NameFormUncontrolled";
import "./styles.css";
import NameFormControlled from "./components/NameFormControlled";

export default function App() {
  return (
    <div className="App">
      {/* <NameFormUncontrolled/> */}
      <NameFormControlled />
    </div>
  );
}
