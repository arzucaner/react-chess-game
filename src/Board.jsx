import React, { useState } from 'react';
import SquareBoard from './SquareBoard';
import Square from './Square';

  const Board = ({ board }) => {

    const [gameState, setGameState] = useState({
      currentPlayer: 'white',
      moveCount: 0,
      gameStatus: 'in-progress',
    });

    const colorCntrl = (i) => {
      const x = i % 8;
      const y = Math.abs(Math.floor(i / 8) - 7);
      return (x + y) % 2 === 0;
    };

    const positionCntrl = (i) => {
      const x = i % 8;
      const letters = ["a", "b", "c", "d", "e", "f", "g", "h"][x];
      const y = Math.abs(Math.floor(i / 8) - 7);
      return `${letters}${y + 1}`;
    };

    const handleSquareClick = (position) => {
      setGameState((prevState) => ({
        ...prevState,
        moveCount: prevState.moveCount + 1,
        currentPlayer: prevState.currentPlayer === 'white' ? 'black' : 'white',
      }));
   };

    return (
      <div className='w-[640px] h-[640px] bg-red-700 flex flex-wrap'>
        {
        board.flat().map((brd, i) => (
          <Square colorValue={colorCntrl(i)} positionCntrl={positionCntrl(i)}>
            {brd && <SquareBoard brd={brd} positionCntrl={positionCntrl(i)} />}
          </Square>
        ))
        }
      </div >
    );
  };

export default Board;
