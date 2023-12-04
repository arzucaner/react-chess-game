import React from 'react';
import SquareBoard from './SquareBoard';
import Square from './Square';

const Board = ({ Board }) => {
  //console/log("boarad", board.flat())
  return (
    <div>
      {
        Board.flat().map((brd, i) => (
          <Square>
            {brd && <SquareBoard brd={brd} />}
          </Square>
        ))
      }
    </div>
  );
}

export default Board
