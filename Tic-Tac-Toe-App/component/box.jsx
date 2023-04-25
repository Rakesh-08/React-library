import react from "react";
import "../styles/box.css";

class Box extends react.Component {
  render() {
    const { value, handleBoxClicked, win} = this.props;

    return (
      <button className={`boardBox ${win}`} onClick={handleBoxClicked}>
        {value}
      </button>
    );
  }
}

export default Box;
