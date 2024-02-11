import React from 'react'
import LargeGrid from './LargeGrid'
import SemiGrid from './SemiGrid'
import SkeleLarge from './Skeleton/SkeleLarge'
import SkelSingle from './Skeleton/SkeleSemi'

type Props = {}

const Container = (props: Props) => {
  return (
    <div className='lg:flex lg:-mx-6'>
      <div className='lg:w-4/6 lg:px-6'>
        <SkeleLarge />
      </div>

      <div className='mt-8 lg:w-2/6 lg:mt-0 lg:mr-4'>
        <SkelSingle />
      </div>
    </div>
  )
}

export default Container
