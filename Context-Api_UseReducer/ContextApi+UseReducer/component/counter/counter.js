import { CounterContextValue } from "../../App";
import Component1 from "./Component1";
import Component2 from "./Component2";

export default function Counter() {
  let { counter } = CounterContextValue();
  return (
    <div>
      <h1> counter:{counter} </h1>
      <div>
        <Component1 />
        <Component2 />
      </div>
    </div>
  );
}
