import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(allReducers, composeWithDevTools());

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
