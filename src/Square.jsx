import React from 'react';

const Square = ({children, colorValue, positionCntrl}) => {
  console.log(colorValue, "colorValue")
  return (
    <div className={`${colorValue ? 'bg-terracotta' : 'bg-light-terracotta'} w-[80] h-[80px] flex items-center cursor-grab justify-center`}>{children}</div>
  )
}

export default Square
