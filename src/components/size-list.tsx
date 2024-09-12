import React, { useState } from 'react'
import { Sizes } from '../../constant'
import SizeItem from './size-item'

const SizeList = () => {
  const [selectedSize, setSelectedSize] = useState<string>(Sizes[0])

  const changeSelectedSize = (value: string) => {
    setSelectedSize(value)
  }
  return (
    <div className='flex gap-2 items-center mb-3'>
      {
        Sizes.map(size => {
          return(
            <SizeItem key={size} size={size} selectedSize={selectedSize} changeSelectedSize={changeSelectedSize}/>
          )
        })
      }
    </div>
  )
}

export default SizeList