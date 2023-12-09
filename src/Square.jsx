import React from 'react';
import { useDrop } from 'react-dnd';

const Square = ({ children, colorValue, positionCntrl }) => {
  console.log(positionCntrl, "positionCntrl")
  const [, drop] = useDrop({
    accept: "chess",
    drop: (item) => {
      const [fromPosition] = item.id.split('_')
      move(fromPosition, positionCntrl)
    }

  })


  return (
    <div ref={drop} className={`${colorValue ? 'bg-terracotta' : 'bg-light-terracotta'} w-[80] h-[80px] flex items-center cursor-grab justify-center`}>{children}</div>
  )
}

export default Square
