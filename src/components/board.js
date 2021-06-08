import React from 'react';
import './board.css';
import Button from './button'

class Board extends React.Component {

  constructor(){
    super();
    this.state = {result: ''}
  }

  render(){    
    return(
      <div>
        <h2>Let's play Tic-Tac-Toe</h2>
        <h3 className="result"></h3>
        <div className="Board">
          <Button position="1" />
          <Button position="2" />
          <Button position="3" />
          <Button position="4" />
          <Button position="5" />
          <Button position="6" />
          <Button position="7" />
          <Button position="8" />
          <Button position="9" />
        </div>
      </div>
    );
  }
}

export default Board;