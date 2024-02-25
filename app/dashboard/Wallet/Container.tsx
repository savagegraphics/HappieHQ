import React from 'react'
import BalanceCard from './BalanceCard'
import Balancemap from './Balancemap'

type Props = {}

const Container = (props: Props) => {
  return (
    <div className='lg:flex lg:-mx-6'>
      <div className='lg:w-3/8 lg:px-6'>
        <BalanceCard />
      </div>

      <div className='mt-8 lg:w-5/8 lg:mt-0 lg:mr-4'>
        <Balancemap />
      </div>
    </div>
  )
}

export default Container
