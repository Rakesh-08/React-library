import "./styles.css";
import Counter from "./components/counter/counter";
import { useEffect, useState } from "react";

export default function App() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <div className="App">
      {showCounter && <Counter />}
      <div>
        <button onClick={() => setShowCounter(true)}>Mount</button>
        <button onClick={() => setShowCounter(false)}> UnMount</button>
      </div>
    </div>
  );
}
