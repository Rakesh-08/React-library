import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";

export default function App() {
  const { counter, isLoggedIn } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={() => dispatch(increment(5))}> increment</button>
        <button onClick={() => dispatch(decrement())}> decrement</button>
      </div>
    </div>
  );
}
