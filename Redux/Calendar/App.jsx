import { Provider } from "react-redux";
import Calendar from "./component/Calendar/Calendar";
import store from "./store/Store";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Calendar />
      </Provider>
    </div>
  );
}
