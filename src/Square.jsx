import React from 'react';
import { useDrop } from 'react-dnd';
import { move } from './Game';


const Square = ({ children, colorValue, positionCntrl }) => {
  console.log(positionCntrl, "positionCntrl")
  const [, drop] = useDrop({
    accept: 'chess',
    drop: (item) => {
      const [fromPosition] = item.id.split('_')
      move(fromPosition, positionCntrl)
    }

  })

  return (
    <div ref={drop} className={`${colorValue ? 'bg-red-800' : 'bg-green-200'} w-80 h-80px flex items-center cursor-grabbing justify-center`}>
      {children}
      </div>
  )
}

export default Square
