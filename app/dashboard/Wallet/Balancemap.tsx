import React from 'react'
import Selector from './Selecter/Selector'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
      <div className='group relative block rounded-xl mx-8 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
        {/* <BalHero /> */}
        <div className='bg-gray-400 flex w-full h-[22rem] lg:w-[30rem] lg:h-[22rem] rounded-xl'>
          <div className='flex-start'>34</div>
          <div className='flex-end'>
            <Selector />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
