import { CounterContextValue } from "../../App";

export default function Component1() {
  let { dispatch } = CounterContextValue();

  return (
    <div style={{ width: 200, padding: 40, background: "lightgray" }}>
      <h4> Component 2 </h4>

      <button onClick={() => dispatch({ type: "reset" })}> Reset </button>

      <button
        onClick={() => dispatch({ type: "increment by userInput", payload: 4 })}
      >
        {" "}
        increment by 4 (userInput)
      </button>
    </div>
  );
}
