import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from "redux";

// Actions
let increment = () => {
  return {
    type: "Increment",
  };
};

let decrement = () => {
  return {
    type: "Decrement",
  };
};

// reducer

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};

// store => To create Globalized state

let store = createStore(counterReducer);

// display the output in the console
store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
