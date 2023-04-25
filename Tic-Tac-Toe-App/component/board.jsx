import react from "react";
import Box from "./box";
import "../styles/board.css";
import * as utils from "../utils/utility";

class Board extends react.Component {
  constructor(props) {
    super();

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
    if (boxes[utils.findWinner(boxes)[0]]) {
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

  winningBoxes = (index) => {
    let result = utils.findWinner(this.state.boxes);
    for (let i = 0; i < result?.length; i++){
      if (this.state.boxes[result[i]]!== null && result[i]== index) {
          return 'winningBox'
        }
    }
    return null;
  }

  

  render() {
    const winner = utils.findWinner(this.state.boxes);
    const isFinished = utils.areAllBoxesChecked(this.state.boxes);
    let status;

    if (this.state.boxes[winner[0]]) {
      status = ` Winner of the game is ${this.state.boxes[winner[0]]}`;
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
              win={ this.winningBoxes(0)}
              handleBoxClicked={() => this.handleBoxClicked(0)}
              value={this.state.boxes[0]}
            />
            <Box
              win={this.winningBoxes(1)}
              handleBoxClicked={() => this.handleBoxClicked(1)}
              value={this.state.boxes[1]}
            />
            <Box
              win={this.winningBoxes(2)}
              handleBoxClicked={() => this.handleBoxClicked(2)}
              value={this.state.boxes[2]}
            />
          </div>

          <div className="boardRow">
            <Box
              win={this.winningBoxes(3)}
              handleBoxClicked={() => this.handleBoxClicked(3)}
              value={this.state.boxes[3]}
            />
            <Box
              win={this.winningBoxes(4)}
              handleBoxClicked={() => this.handleBoxClicked(4)}
              value={this.state.boxes[4]}
            />
            <Box
              win={this.winningBoxes(5)}
              handleBoxClicked={() => this.handleBoxClicked(5)}
              value={this.state.boxes[5]}
            />
          </div>

          <div className="boardRow">
            <Box
              win={this.winningBoxes(6)}
              handleBoxClicked={() => this.handleBoxClicked(6)}
              value={this.state.boxes[6]}
            />
            <Box
              cwin={this.winningBoxes(7)}
              handleBoxClicked={() => this.handleBoxClicked(7)}
              value={this.state.boxes[7]}
            />
            <Box
              win={this.winningBoxes(8)}
              handleBoxClicked={() => this.handleBoxClicked(8)}
              value={this.state.boxes[8]}
            />
          </div>
          <div>
            {(this.state.boxes[winner[0]] || isFinished) && (
              <button className="resetButton" onClick={this.resetGame}>
                reset
              </button>
            )}
          </div>
        </div>

        <div className="movesHistory">
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
      </div>
    );
  }
}

export default Board;
