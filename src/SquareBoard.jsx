import React from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';

const SquareBoard = ({ brd, positionCntrl }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'chess',
    item: { id: `${positionCntrl}_${brd.type}_${brd.color}` },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging };
    },
  });

  // eslint-disable-next-line no-unused-vars

  const pieceImage = require(`../public/assets/images/${brd.type}_${brd.color}.png`);
  console.log("brd", brd);
  return (
    <div ref={drag}>
      <DragPreviewImage src={pieceImage} connect={preview} />
      <img className='w-40px' src={pieceImage} alt="" />
    </div>
  );
};

export default SquareBoard;
