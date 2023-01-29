import { createRoot } from "react-dom/client";
import App from "./App";
import StateProvider from "./context/StateProvider";
import reducer, { intialState } from "./reducer/reducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StateProvider reducer={reducer} intialState={intialState}>
    <App />
  </StateProvider>
);
