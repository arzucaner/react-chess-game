import React from 'react';

const SquareBoard = ({ brd }) => {
  const pieceImage = require(`../public/assets/images/${brd.type}_${brd.color}.png`)
  console.log("brd", brd);
  return (
    <div>
      <img src={pieceImage} alt="" />
    </div>
  )
}

export default SquareBoard
