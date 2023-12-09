import React from 'react';
import SquareBoard from './SquareBoard';
import Square from './Square';

const Board = ({ Board }) => {
  //console/log("board", board.flat())

  const colorCntrl = (i) => {
    const x = i % 8;
    const y = Math.abs(Math.floor(i / 8) - 7)
    return (x + y) % 2 === 0
  }

  const positionCntrl = (i) => {
    const x = i % 8;
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"][x]
    const y = Math.abs(Math.floor(i / 8) - 7)
    retuen`${letters}${y + 1}`

  }


  return (
    <div className='w-[640px] h-[640px] bg-terracotta flex-wrap'>
      {
        board.flat().map((brd, i) => (
          <Square colorValue={colorCntrl(i)} positionCntrl={positionCntrl(i)}>
            {brd && <SquareBoard brd={brd} positionCntrl={positionCntrl(i)} />}
          </Square>
        ))
      }
    </div>
  )
}

export default Board
