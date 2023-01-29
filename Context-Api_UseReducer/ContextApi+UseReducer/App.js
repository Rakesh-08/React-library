import "./styles.css";
import Counter from "./Component/counter/counter";
import { createContext, useContext, useReducer, useState } from "react";

const CounterContext = createContext();
const initialState = 0;
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "increment by userInput":
      return state + action.payload;
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function App() {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ counter, dispatch }}>
      <div className="App">
        <Counter />
      </div>
    </CounterContext.Provider>
  );
}

export const CounterContextValue = () => useContext(CounterContext);
