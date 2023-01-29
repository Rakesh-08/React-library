import react, { useCallback, useMemo, useState } from "react";
import "./styles.css";

function Square({ parameter }) {
  console.log(`square is rendered with ${parameter.color} color`);
  return (
    <div
      style={{ width: 100, height: 100, backgroundColor: parameter.color }}
    ></div>
  );
}

const MemoizedSquare = react.memo(Square);

export default function App() {
  const [appRenderCount, setAppRenderCount] = useState(0);
  const [color, setColor] = useState("tomato");
  console.log(`App is rendered ${appRenderCount} times`);

  const params = useMemo(() => ({ color }), [color]);
  const addSum = useCallback(() => {
    () => {};
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={() => setAppRenderCount(appRenderCount + 1)}>
          Re-render component{" "}
        </button>
        <button
          onClick={() => setColor(color === "tomato" ? "green" : "tomato")}
        >
          change color{" "}
        </button>
      </div>
      <div>
        <MemoizedSquare parameter={params} addSum={addSum} />
      </div>
    </div>
  );
}
