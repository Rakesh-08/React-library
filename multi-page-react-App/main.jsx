import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StateProvider from "./context/StateProvider";
import reducer,{initialState} from "./reducer/reducer"


ReactDOM.createRoot(document.getElementById("root")).render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>
);
