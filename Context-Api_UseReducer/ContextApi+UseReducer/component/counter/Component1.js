import { CounterContextValue } from "../../App";

export default function Component1() {
  let { dispatch } = CounterContextValue();

  return (
    <div style={{ width: 200, padding: 40, background: "aqua" }}>
      <h4> Component 1 </h4>
      <button onClick={() => dispatch({ type: "increment" })}>
        {" "}
        increment{" "}
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        {" "}
        decrement{" "}
      </button>
      <button onClick={() => dispatch({ type: "reset" })}> Reset </button>
    </div>
  );
}
