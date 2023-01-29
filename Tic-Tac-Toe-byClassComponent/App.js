import "./styles.css";
import { Component } from "react";
import Board from "./components/board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}
export default App;
