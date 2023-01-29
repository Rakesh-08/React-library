import react from "react";
import "../styles/box.css";

class Box extends react.Component {
  render() {
    const { value, handleBoxClicked } = this.props;

    return (
      <button className="boardBox" onClick={handleBoxClicked}>
        {value}
      </button>
    );
  }
}

export default Box;
