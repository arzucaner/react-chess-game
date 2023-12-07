import React from 'react';
import { useDrag } from 'react-dnd';
import { DragPreviewImage, useDrag } from 'react-dnd';

const SquareBoard = ({ brd }) => {
  const [collected, drag, preview] = useDrag({
    type: 'chess',
    item: { id: `${brd.type}_${brd.color}` }
  })
  const pieceImage = require(`../public/assets/images/${brd.type}_${brd.color}.png`)
  console.log("brd", brd);
  return (
    <div ref={drag}>
      <DragPreviewImage src={pieceImage} connect={preview} />
      <img className='w-[40px]' src={pieceImage} alt="" />
    </div>
  )
}

export default SquareBoard
