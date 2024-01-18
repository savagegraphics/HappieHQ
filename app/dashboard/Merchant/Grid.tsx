import React from 'react'
import Table from './Table'
import SingleCard from './SingleCard'

type Props = {}

const Grid = (props: Props) => {
  return (
    <div className='lg:flex lg:-mx-6 lg:my-6'>
      <div className='lg:w-4/6 lg:px-6'>
        <Table />
      </div>

      <div className='mt-8 lg:w-2/6 lg:mt-0 lg:mr-4'>
        <SingleCard />
      </div>
    </div>
  )
}

export default Grid
