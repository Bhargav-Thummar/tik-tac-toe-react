import React from 'react';
import './button.css';

var counter = 1;
var current_value
var value_position_array = [null, null, null, null, null, null, null, null, null]

class Button extends React.Component {
  constructor(){
    super();
    this.state = {value: '-'};
  }

  handleClick = (e) => {
    if (counter % 2 === 0) {
      current_value = "O"
    } else {
      current_value = "X"
    }
    this.setState({value: current_value});
    e.target.disabled = true;
    value_position_array[e.target.getAttribute("data-position")-1] = current_value;

    counter++;
    this.game_logic();
  }

  game_logic() {
    if ((value_position_array[0] === "X" && value_position_array[1] === "X" && value_position_array[2] === "X") || (value_position_array[3] === "X" && value_position_array[4] === "X" && value_position_array[5] === "X") || (value_position_array[6] === "X" && value_position_array[7] === "X" && value_position_array[8] === "X") || (value_position_array[0] === "X" && value_position_array[3] === "X" && value_position_array[6] === "X") || (value_position_array[1] === "X" && value_position_array[4] === "X" && value_position_array[7] === "X") || (value_position_array[2] === "X" && value_position_array[5] === "X" && value_position_array[8] === "X") || (value_position_array[0] === "X" && value_position_array[4] === "X" &&value_position_array[8] === "X") || (value_position_array[2] === "X" && value_position_array[4] === "X" && value_position_array[6] === "X")) {
      document.getElementsByClassName("result").innerHTML = "Player 1 win !!!"
      debugger
    } else if ((value_position_array[0] === "O" && value_position_array[1] === "O" && value_position_array[2] === "O") || (value_position_array[3] === "O" && value_position_array[4] === "O" && value_position_array[5] === "O") || (value_position_array[6] === "O" && value_position_array[7] === "O" && value_position_array[8] === "O") || (value_position_array[0] === "O" && value_position_array[3] === "O" && value_position_array[6] === "O") || (value_position_array[1] === "O" && value_position_array[4] === "O" && value_position_array[7] === "O") || (value_position_array[2] === "O" &&value_position_array[5] === "O" && value_position_array[8] === "O") || (value_position_array[0] === "O" && value_position_array[4] === "O" &&value_position_array[8] === "O") || (value_position_array[2] === "O" && value_position_array[4] === "O" && value_position_array[6] === "O")) {
      document.getElementsByClassName("result").innerHTML = "Player 2 win !!!"
    } else if (counter > 8) {
      alert("Game is tie !");
    }
  }

  render(){
    return(
      <button className="Button"
        onClick = {this.handleClick}
        data-value = {this.state.value}
        data-position = {this.props.position} >
        {this.state.value}
      </button>
    )
  }
}

export default Button;