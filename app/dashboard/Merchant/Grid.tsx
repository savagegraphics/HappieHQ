import React from 'react'
import SingleCard from './SingleCard'
import CardGroup from './CardGroup'
import SkeleCard from './SkeleCard'
import SkelSingle from './SkelSingle'

type Props = {}

const Grid = (props: Props) => {
  return (
    <div className='lg:flex lg:-mx-6 lg:my-6 mt-6'>
      <div className='lg:w-4/6 lg:px-6'>
        <SkeleCard />
      </div>

      <div className='mt-8 lg:w-2/6 lg:mt-0 lg:mr-4'>
        <SkelSingle />
      </div>
    </div>
  )
}

export default Grid
