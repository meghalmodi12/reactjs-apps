import React from 'react';
import Board from './Board';

class Game extends React.Component {
  render() {
    return (
      <div>
        <div className="game">
          <Board />
        </div>
        <div className="game-info">
          {/* To Do */}
        </div>
      </div>
    );
  }
}

export default Game;