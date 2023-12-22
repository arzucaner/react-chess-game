import React from 'react';
import { useDrop } from 'react-dnd';
import subjectGame, { initGame, resetGame, move } from './Game';

const Square = ({ children, colorValue, positionCntrl }) => {
  console.log(positionCntrl, "positionCntrl")
  const [, drop] = useDrop({
    accept: 'chess',
    drop: (item) => {
      const [fromPosition] = item.id.split('_')
      move(fromPosition, positionCntrl)
      const isAllowed = isMoveValid(fromPosition, positionCntrl);

      if (isAllowed) {
        move(fromPosition, positionCntrl);
      }
    },
  });

  const isMoveValid = (fromPosition, toPosition) => {
    const legalMoves = chess.legal_moves({ square: fromPosition, verbose: true });
    return legalMoves.some((move) => move.to === toPosition);
  };

  return (
    <div ref={drop} className={`${colorValue ? 'bg-red-800' : 'bg-red-200'} w-[80px] h-[80px] flex items-center cursor-grabbing justify-center${isMoveAllowed ? 'allowed-move' : ''}`}>
      {children}
    </div>
  )
};

export default Square
