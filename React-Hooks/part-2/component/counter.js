import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    //  setCount(count+1)   bug of batching
    //  setCount(count + 1)

    setCount((previousCounter) => previousCounter + 1);
    setCount((previousCounter) => previousCounter + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <div className="counter">
      <h1>counter : {count}</h1>
      <button onClick={increment}> +</button>
      <button onClick={decrement}> - </button>
    </div>
  );
}
