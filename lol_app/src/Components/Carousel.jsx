import { Card } from '@nextui-org/react'
import React from 'react'

const Carousel = () => {
  return (
    <div className='grid grid-flow-row translate-x-2'>
        <div>
            <Card/>
        </div>
        <div>
            <Card/>
        </div>
        <div>
            <Card/>
        </div>
        <div>
            <Card/>
        </div>
    </div>
  )
}

export default Carousel