import react from "react";
import Box from "./box";
import "../styles/board.css";
import * as utils from "../utils/utility";

class Board extends react.Component {
  constructor(props) {
    super(props);

    // intialize the component's state
    this.state = {
      boxes: Array(9).fill(null),
      history: [],
      xIsNext: true,
    };
  }

  //funtion when a box is clicked

  handleBoxClicked(index) {
    // creating a copy of state objects

    const boxes = this.state.boxes.slice();

    const history = this.state.history;

    //checks for no double clicks on a single box

    if (boxes[index]) {
      return;
    }
    // stop the game if we have a winning combination
    if (utils.findWinner(boxes)) {
      return;
    }

    // stop the game if all boxes is clicked or checked
    if (utils.areAllBoxesChecked(boxes)) {
      return;
    }

    // mark the box with either X  or O

    boxes[index] = this.state.xIsNext ? "X" : "O";

    //add the moves to the history
    history.push(this.state.xIsNext ? "X" : "O");

    // update the state of the component with new data

    this.setState({
      boxes: boxes,
      history: history,
      xIsNext: !this.state.xIsNext,
    });

    // handle the restart of game
  }

  resetGame = () => {
    this.setState({
      boxes: Array(9).fill(null),
      history: [],
      xIsNext: true,
    });
  };

  render() {
    const winner = utils.findWinner(this.state.boxes);
    const isFinished = utils.areAllBoxesChecked(this.state.boxes);
    let status;

    if (winner) {
      status = ` Winner of the game is ${winner}`;
    } else if (isFinished) {
      status = `The game is drawn`;
    } else {
      status = `Move :  Its ${this.state.xIsNext ? "X" : "O"} turn`;
    }

    return (
      <div className="boardWrapper">
        <div className="board">
          <h2 className="boardHeading"> {status} </h2>
          <div className="boardRow">
            <Box
              handleBoxClicked={() => this.handleBoxClicked(0)}
              value={this.state.boxes[0]}
            />
            <Box
              handleBoxClicked={() => this.handleBoxClicked(1)}
              value={this.state.boxes[1]}
            />
            <Box
              handleBoxClicked={() => this.handleBoxClicked(2)}
              value={this.state.boxes[2]}
            />
          </div>

          <div className="boardRow">
            <Box
              handleBoxClicked={() => this.handleBoxClicked(3)}
              value={this.state.boxes[3]}
            />
            <Box
              handleBoxClicked={() => this.handleBoxClicked(4)}
              value={this.state.boxes[4]}
            />
            <Box
              handleBoxClicked={() => this.handleBoxClicked(5)}
              value={this.state.boxes[5]}
            />
          </div>

          <div className="boardRow">
            <Box
              handleBoxClicked={() => this.handleBoxClicked(6)}
              value={this.state.boxes[6]}
            />
            <Box
              handleBoxClicked={() => this.handleBoxClicked(7)}
              value={this.state.boxes[7]}
            />
            <Box
              handleBoxClicked={() => this.handleBoxClicked(8)}
              value={this.state.boxes[8]}
            />
          </div>
          <div>
            {(winner || isFinished) && (
              <button className="resetButton" onClick={this.resetGame}>
                reset
              </button>
            )}
          </div>
        </div>

        <ul className="movesHistoryList">
          {this.state.history.length === 0 && <span>No Moves to show </span>}

          {this.state.history.length !== 0 &&
            this.state.history.map((move, index) => {
              return (
                <li>
                  Move {index + 1}:<strong> {move} </strong>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Board;
