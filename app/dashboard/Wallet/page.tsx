import React from 'react'
import Balancemap from './Balancemap'
import BalanceCard from './BalanceCard'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='lg:flex lg:-mx-6 lg:my-6 mt-6'>
      <div className='mt-8 lg:w-3/7 lg:mt-0 lg:mr-4'>
        <BalanceCard />
      </div>
      <div className='lg:w-4/7 lg:px-6'>
        <Balancemap />
      </div>
    </div>
  )
}

export default page
