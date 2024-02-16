import React, { useState, useEffect } from 'react'
import SingleCard from './SingleCard'

const SkeletonSingleCard = () => {
  return (
    <div className='rounded-2xl bg-white lg:w-full lg:h-[20rem] w-full h-[20rem] border border-gray-200'>
      <dt className='flex justify-between m-4 text-3xl font-semibold leading-9 text-gray-900'>
        <div className='text-sky-950 text-base font-bold font-Inter mt-2'></div>
        <div className=''>
          <button
            type='button'
            className='py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-[#0F2B48] text-white hover:bg-[#284b70] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 font-Inter'
          ></button>
        </div>
      </dt>
      <hr />
      <div className='flex'>
        <div className='m-4'>
          <div className='bg-gray-200 w-10 h-10'></div>{' '}
          {/* Placeholder for icon */}
        </div>
        <div className='m-2'>
          <h2 className='text-neutral-600 mt-2 text-sm font-bold font-Inter'></h2>
          <p className='text-[12px] mt-1 text-neutral-600 text-opacity-50 font-semibold font-Inter'></p>
          <p className='text-[10px] mt-1 text-neutral-600 text-opacity-50 font-semibold font-Inter'></p>
        </div>
      </div>
      <hr />
      <div className='flex'>
        <div className='m-4'>
          <div className='bg-gray-200 w-10 h-10'></div>{' '}
        </div>
        <div className='m-2'>
          <h2 className='text-neutral-600 mt-2 text-sm font-bold font-Inter'></h2>
          <p className='text-[12px] mt-1 text-neutral-600 text-opacity-50 font-semibold font-Inter'></p>
          <div className='flex space-x-4 my-3'>
            <div className=''>
              <div className='bg-gray-300 w-20 h-8'></div>{' '}
            </div>
            <div className=''>
              <div className='bg-gray-300 w-20 h-8'></div>{' '}
            </div>
          </div>
          <p className='text-[10px] mt-1 text-neutral-600 text-opacity-50 font-semibold font-Inter'></p>
        </div>
      </div>
    </div>
  )
}

const SkelSingle = () => {
  const [loading, setLoading] = useState(true)

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    },1000) // Change the delay time as needed
    return () => clearTimeout(timer)
  }, [])

  return <div>{loading ? <SkeletonSingleCard /> : <SingleCard />}</div>
}

export default SkelSingle
